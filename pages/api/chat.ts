import type { NextApiRequest, NextApiResponse } from 'next';
import groq, { DEFAULT_MODEL, MAX_TOKENS, TEMPERATURE } from '../../lib/groq';
import { buildSystemPrompt, TFT_META_DATA } from '../../lib/tft-data';
import { ChatRequest, GameState } from '../../types';

/**
 * POST /api/chat
 * Main RAG endpoint for TFT AI Coach
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Handle GET request (health check)
  if (req.method === 'GET') {
    return res.status(200).json({
      status: 'ok',
      service: 'TFT AI Coach API',
      meta: {
        set: TFT_META_DATA.currentSet,
        patch: TFT_META_DATA.patch,
        lastUpdated: TFT_META_DATA.lastUpdated
      }
    });
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body: ChatRequest = req.body;
    const { messages, gameState } = body;

    // Validate request
    if (!messages || messages.length === 0) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    // Build system prompt with RAG context
    const systemPrompt = buildSystemPrompt();

    // If gameState is provided, inject it into the user's message
    const enhancedMessages = [...messages];
    if (gameState) {
      const gameStateContext = formatGameState(gameState);
      
      // Find the last user message and enhance it
      const lastUserIndex = enhancedMessages.length - 1;
      if (enhancedMessages[lastUserIndex].role === 'user') {
        enhancedMessages[lastUserIndex] = {
          ...enhancedMessages[lastUserIndex],
          content: `${gameStateContext}\n\n${enhancedMessages[lastUserIndex].content}`
        };
      } else {
        // If last message isn't from user, append as new message
        enhancedMessages.push({
          role: 'user',
          content: gameStateContext
        });
      }
    }

    // Construct messages for Groq API
    const groqMessages = [
      {
        role: 'system' as const,
        content: systemPrompt
      },
      ...enhancedMessages.map(msg => ({
        role: msg.role as 'user' | 'assistant',
        content: msg.content
      }))
    ];

    // Call Groq API
    const completion = await groq.chat.completions.create({
      messages: groqMessages,
      model: DEFAULT_MODEL,
      max_tokens: MAX_TOKENS,
      temperature: TEMPERATURE,
      top_p: 0.95,
      stream: false,
    });

    const aiResponse = completion.choices[0]?.message?.content || 'No response generated.';

    // Return the response
    return res.status(200).json({
      message: aiResponse,
      model: DEFAULT_MODEL,
      usage: completion.usage,
      meta: {
        patch: TFT_META_DATA.patch,
        set: TFT_META_DATA.currentSet
      }
    });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('Error in /api/chat:', error);
    
    // Handle specific Groq API errors
    if (error.status === 401) {
      return res.status(401).json({
        error: 'Invalid Groq API key. Please check your .env.local file.'
      });
    }

    if (error.status === 429) {
      return res.status(429).json({
        error: 'Rate limit exceeded. Please try again in a moment.'
      });
    }

    return res.status(500).json({
      error: 'An error occurred processing your request.',
      details: error.message
    });
  }
}

/**
 * Format game state into readable context for the AI
 */
function formatGameState(gameState: GameState): string {
  const {
    stage,
    level,
    gold,
    health,
    champions,
    items,
    unitsOnBoard
  } = gameState;

  let context = `## 📊 CURRENT GAME STATE\n\n`;
  context += `**Stage:** ${stage} | **Level:** ${level} | **Gold:** ${gold}g | **HP:** ${health}\n`;
  context += `**Board Size:** ${unitsOnBoard}/7\n\n`;

  if (champions && champions.length > 0) {
    context += `### Your Champions:\n`;
    champions.forEach(champ => {
      const stars = '⭐'.repeat(champ.stars);
      const itemList = champ.items && champ.items.length > 0 
        ? ` [${champ.items.join(', ')}]` 
        : '';
      context += `- ${champ.name} (${champ.cost}c) ${stars}${itemList}\n`;
    });
    context += `\n`;
  }

  if (items && items.length > 0) {
    context += `### Available Items:\n`;
    context += items.map(item => `- ${item}`).join('\n');
    context += `\n\n`;
  }

  context += `---\n\n`;
  context += `Based on this state, what should I do right now?`;

  return context;
}

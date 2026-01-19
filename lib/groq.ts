import Groq from 'groq-sdk';

// Initialize Groq client
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY || '',
});

export default groq;

/**
 * Available models (ranked by speed/quality):
 * - llama-3.3-70b-versatile: Latest, balanced, fast
 * - llama-3.1-70b-versatile: Good quality
 * - mixtral-8x7b-32768: Longer context
 */
export const DEFAULT_MODEL = 'llama-3.3-70b-versatile';
export const MAX_TOKENS = 1024;
export const TEMPERATURE = 0.7; // Balanced creativity

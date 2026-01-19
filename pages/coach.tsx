import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Target, Zap, Plus, X } from 'lucide-react';
import Link from 'next/link';
import { Message, GameState, Champion } from '../types';
import AdBanner from '../components/AdBanner';

export default function CoachPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: '🎮 Welcome to your Personal TFT AI Coach! I analyze real-time game states and provide Challenger-level advice.\n\n💡 Input your current board state on the left, then click **ANALYZE** for instant coaching, or ask me anything about TFT strategy!',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [itemsInput, setItemsInput] = useState(''); // Store raw input separately
  const [gameState, setGameState] = useState<GameState>({
    stage: '3-2',
    level: 6,
    gold: 50,
    health: 80,
    champions: [],
    items: [],
    unitsOnBoard: 0
  });
  const [showGameState, setShowGameState] = useState(true);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Send message to API
  const sendMessage = async (includeGameState: boolean = false) => {
    if (!input.trim() && !includeGameState) return;

    // Parse items before sending
    const parsedItems = itemsInput.split(',').map(s => s.trim()).filter(Boolean);
    const currentGameState = {
      ...gameState,
      items: parsedItems
    };

    const userMessage: Message = {
      role: 'user',
      content: input || 'Analyze my current game state',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          gameState: includeGameState ? currentGameState : undefined
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.message,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: '❌ Sorry, there was an error. Please check your Groq API key in .env.local',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Add champion
  const addChampion = () => {
    const newChamp: Champion = {
      name: '',
      cost: 1,
      stars: 1,
      items: [],
      traits: []
    };
    setGameState(prev => ({
      ...prev,
      champions: [...prev.champions, newChamp],
      unitsOnBoard: prev.champions.length + 1
    }));
  };

  // Remove champion
  const removeChampion = (index: number) => {
    setGameState(prev => ({
      ...prev,
      champions: prev.champions.filter((_, i) => i !== index),
      unitsOnBoard: prev.champions.length - 1
    }));
  };

  // Update champion
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateChampion = (index: number, field: keyof Champion, value: any) => {
    setGameState(prev => ({
      ...prev,
      champions: prev.champions.map((champ, i) => 
        i === index ? { ...champ, [field]: value } : champ
      )
    }));
  };

  return (
    <div className="min-h-screen bg-[#0B0E11]">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-[#0B0E11]/95 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">TFT AI Coach</h1>
                <p className="text-xs text-gray-400">Powered by Groq AI</p>
              </div>
            </Link>

            {/* Nav */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Team Comps
              </Link>
              <Link href="/coach" className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50">
                Get Coached
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-6 py-6">
        {/* Top Ad Banner */}
        <AdBanner position="top" className="mb-6" />

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Panel - Game State Input */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-[#141821] border border-gray-800 rounded-xl p-5 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <Target className="w-5 h-5 text-purple-400" />
                  Game State
                </h2>
                <button
                  onClick={() => setShowGameState(!showGameState)}
                  className="text-purple-400 hover:text-purple-300 text-sm transition-colors font-semibold"
                >
                  {showGameState ? 'Hide' : 'Show'}
                </button>
              </div>

              {showGameState && (
                <div className="space-y-4">
                  {/* Basic Info */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-gray-400 block mb-1.5 font-semibold">Stage</label>
                      <input
                        type="text"
                        value={gameState.stage}
                        onChange={(e) => setGameState({ ...gameState, stage: e.target.value })}
                        className="w-full bg-[#0B0E11] border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all"
                        placeholder="3-2"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-400 block mb-1.5 font-semibold">Level</label>
                      <input
                        type="number"
                        value={gameState.level}
                        onChange={(e) => setGameState({ ...gameState, level: parseInt(e.target.value) || 0 })}
                        className="w-full bg-[#0B0E11] border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all"
                        min="1"
                        max="10"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-400 block mb-1.5 font-semibold">Gold</label>
                      <input
                        type="number"
                        value={gameState.gold}
                        onChange={(e) => setGameState({ ...gameState, gold: parseInt(e.target.value) || 0 })}
                        className="w-full bg-[#0B0E11] border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-400 block mb-1.5 font-semibold">HP</label>
                      <input
                        type="number"
                        value={gameState.health}
                        onChange={(e) => setGameState({ ...gameState, health: parseInt(e.target.value) || 0 })}
                        className="w-full bg-[#0B0E11] border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all"
                        max="100"
                      />
                    </div>
                  </div>

                  {/* Champions */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs text-gray-400 font-semibold">Champions ({gameState.champions.length}/7)</label>
                      <button
                        onClick={addChampion}
                        className="text-purple-400 hover:text-purple-300 transition-colors p-1 hover:bg-purple-500/10 rounded"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="space-y-2 max-h-64 overflow-y-auto custom-scrollbar">
                      {gameState.champions.map((champ, idx) => (
                        <div key={idx} className="bg-[#0B0E11] rounded-lg p-2 flex gap-2 border border-gray-700 hover:border-purple-500/50 transition-colors">
                          <input
                            type="text"
                            value={champ.name}
                            onChange={(e) => updateChampion(idx, 'name', e.target.value)}
                            className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-2 py-1.5 text-white text-xs focus:border-purple-500 focus:outline-none"
                            placeholder="Champion name"
                          />
                          <select
                            value={champ.stars}
                            onChange={(e) => updateChampion(idx, 'stars', parseInt(e.target.value))}
                            className="bg-gray-800 border border-gray-700 rounded-lg px-2 py-1.5 text-white text-xs focus:border-purple-500 focus:outline-none"
                          >
                            <option value={1}>⭐</option>
                            <option value={2}>⭐⭐</option>
                            <option value={3}>⭐⭐⭐</option>
                          </select>
                          <button
                            onClick={() => removeChampion(idx)}
                            className="text-red-400 hover:text-red-300 transition-colors p-1 hover:bg-red-500/10 rounded"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Items */}
                  <div>
                    <label className="text-xs text-gray-400 block mb-1.5 font-semibold">Items (comma-separated)</label>
                    <textarea
                      value={itemsInput}
                      onChange={(e) => setItemsInput(e.target.value)}
                      className="w-full bg-[#0B0E11] border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all custom-scrollbar"
                      rows={2}
                      placeholder="BF Sword, Chain Vest, Needlessly Large Rod..."
                    />
                  </div>

                  {/* Analyze Button */}
                  <button
                    onClick={() => sendMessage(true)}
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 disabled:from-gray-700 disabled:to-gray-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 disabled:transform-none shadow-lg shadow-purple-500/30"
                  >
                    <Zap className="w-5 h-5" />
                    {isLoading ? 'ANALYZING...' : 'ANALYZE BOARD'}
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar Ad */}
            <AdBanner position="sidebar" />
          </div>

          {/* Right Panel - Chat Interface */}
          <div className="lg:col-span-2">
            <div className="bg-[#141821] border border-gray-800 rounded-xl flex flex-col h-[calc(100vh-240px)] shadow-xl">
              {/* Chat Header */}
              <div className="border-b border-gray-800 p-5 bg-gradient-to-r from-purple-900/10 to-pink-900/10">
                <h2 className="text-lg font-bold text-white">Coach Chat</h2>
                <p className="text-xs text-gray-400">Lightning fast AI responses • Powered by Groq</p>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                  >
                    <div
                      className={`max-w-[85%] rounded-xl p-4 ${
                        msg.role === 'user'
                          ? 'bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/20'
                          : 'bg-[#0B0E11] border border-gray-700 text-gray-100'
                      }`}
                    >
                      <div className="whitespace-pre-wrap text-sm leading-relaxed">
                        {msg.content}
                      </div>
                      <div className="text-xs opacity-50 mt-2">
                        {msg.timestamp?.toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-[#0B0E11] border border-gray-700 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-purple-400">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.15s' }}></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                        <span className="text-sm ml-2">Coach is analyzing...</span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="border-t border-gray-800 p-4 bg-[#0B0E11]/50">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage(false)}
                    placeholder="Ask your coach anything..."
                    className="flex-1 bg-[#0B0E11] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all placeholder-gray-500"
                    disabled={isLoading}
                  />
                  <button
                    onClick={() => sendMessage(false)}
                    disabled={isLoading || !input.trim()}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 disabled:from-gray-700 disabled:to-gray-700 text-white p-3 rounded-lg transition-all transform hover:scale-105 disabled:transform-none shadow-lg shadow-purple-500/30"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Press Enter to send • Shift+Enter for new line
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Search, Filter, ChevronDown, Trophy, Clock, Target } from 'lucide-react';
import { TFT_META_DATA } from '../lib/tft-data';
import AdBanner from '../components/AdBanner';
import ChampionImage from '../components/ChampionImage';

export default function Home() {
  const [selectedTier, setSelectedTier] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredComps = TFT_META_DATA.compositions.filter(comp => {
    const matchesTier = selectedTier === 'all' || comp.tier === selectedTier;
    const matchesDifficulty = selectedDifficulty === 'all' || comp.difficulty === selectedDifficulty;
    const matchesSearch = comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         comp.traits.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTier && matchesDifficulty && matchesSearch;
  });

  const getTierStyles = (tier: string) => {
    const styles = {
      'S': 'bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold shadow-lg shadow-red-500/50',
      'A': 'bg-gradient-to-r from-yellow-500 to-amber-500 text-white font-bold shadow-lg shadow-yellow-500/50',
      'B': 'bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold shadow-lg shadow-green-500/50',
      'C': 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold shadow-lg shadow-blue-500/50'
    };
    return styles[tier as keyof typeof styles] || styles['B'];
  };

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      'Easy': 'text-green-400',
      'Medium': 'text-yellow-400',
      'Hard': 'text-red-400'
    };
    return colors[difficulty as keyof typeof colors] || 'text-gray-400';
  };

  return (
    <div className="min-h-screen bg-[#0B0E11] text-white">
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
                <p className="text-xs text-gray-400">Patch {TFT_META_DATA.patch}</p>
              </div>
            </Link>

            {/* Nav */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-purple-400 font-semibold hover:text-purple-300 transition-colors">
                Team Comps
              </Link>
              <Link href="/coach" className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50">
                Get Coached
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20 border-b border-gray-800">
        <div className="container mx-auto px-4 lg:px-6 py-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-bold mb-3 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              TFT Meta Comps in {TFT_META_DATA.currentSet}
            </h2>
            <p className="text-gray-400 text-lg mb-6">
              Find the strongest and most reliable meta Teamfight Tactics comps. Our team comps are curated by Challenger experts and powered by AI.
            </p>
            
            {/* Stats Row */}
            <div className="flex flex-wrap gap-6 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-400">Last updated:</span>
                <span className="text-white font-semibold">{new Date(TFT_META_DATA.lastUpdated).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Trophy className="w-4 h-4 text-yellow-500" />
                <span className="text-white font-semibold">{TFT_META_DATA.compositions.length} Meta Comps</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-6 py-8">
        {/* Filters Bar */}
        <div className="bg-[#141821] border border-gray-800 rounded-xl p-4 mb-6 shadow-xl">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search compositions or traits..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#0B0E11] border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex gap-3">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                <select
                  value={selectedTier}
                  onChange={(e) => setSelectedTier(e.target.value)}
                  className="appearance-none bg-[#0B0E11] border border-gray-700 rounded-lg pl-9 pr-10 py-2.5 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none cursor-pointer transition-all min-w-[140px]"
                >
                  <option value="all">All Tiers</option>
                  <option value="S">S Tier</option>
                  <option value="A">A Tier</option>
                  <option value="B">B Tier</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>

              <div className="relative">
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="appearance-none bg-[#0B0E11] border border-gray-700 rounded-lg pl-4 pr-10 py-2.5 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none cursor-pointer transition-all min-w-[140px]"
                >
                  <option value="all">All Difficulties</option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>
            </div>
          </div>

          {filteredComps.length > 0 && (
            <p className="text-gray-500 text-sm mt-4">
              Showing <span className="text-white font-semibold">{filteredComps.length}</span> composition{filteredComps.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        {/* Compositions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredComps.map((comp, idx) => (
            <div
              key={idx}
              className="group bg-[#141821] border border-gray-800 hover:border-purple-500/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-gray-800/50 to-transparent px-5 py-4 border-b border-gray-800">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                        {comp.name}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs uppercase tracking-wider ${getTierStyles(comp.tier)}`}>
                        {comp.tier}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <span className={`font-semibold ${getDifficultyColor(comp.difficulty)}`}>
                        {comp.difficulty}
                      </span>
                      <span className="text-gray-600">•</span>
                      <div className="flex items-center gap-1.5 text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{comp.playstyle.includes('Fast 9') ? 'Fast 9' : comp.playstyle.includes('Reroll') ? 'Reroll' : 'Standard'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Traits */}
              <div className="px-5 py-4 border-b border-gray-800">
                <div className="flex flex-wrap gap-2">
                  {comp.traits.map((trait, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 hover:border-purple-500/50 rounded-lg text-xs font-semibold text-purple-300 transition-all cursor-pointer"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Units */}
              <div className="px-5 py-4 border-b border-gray-800">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Key Units</h4>
                <div className="space-y-3">
                  {comp.keyUnits.map((unit, i) => (
                    <div key={i} className="flex items-center gap-3 group/unit">
                      <div className="relative flex-shrink-0">
                        {/* Champion Image */}
                        <ChampionImage
                          name={unit.name}
                          cost={unit.cost}
                          size="md"
                          className="transition-transform group-hover/unit:scale-110"
                        />
                        {unit.carry && (
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 border-2 border-[#141821] rounded-full flex items-center justify-center shadow-lg">
                            <Target className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-white text-sm mb-1 truncate">{unit.name}</p>
                        <div className="flex flex-wrap gap-1">
                          {unit.items.slice(0, 3).map((item, j) => (
                            <span 
                              key={j} 
                              className="text-xs text-gray-400 bg-[#0B0E11] px-2 py-0.5 rounded border border-gray-800 truncate"
                              title={item}
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Game Plan */}
              <div className="px-5 py-4">
                <div className="space-y-2.5 text-sm">
                  <div className="flex gap-2">
                    <span className="text-green-400 font-bold min-w-[50px]">Early:</span>
                    <span className="text-gray-300">{comp.earlyGame}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-yellow-400 font-bold min-w-[50px]">Mid:</span>
                    <span className="text-gray-300">{comp.midGame}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-orange-400 font-bold min-w-[50px]">Late:</span>
                    <span className="text-gray-300">{comp.lateGame}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-800">
                  <p className="text-xs text-gray-500 leading-relaxed">
                    <span className="text-purple-400 font-semibold">When to play:</span> {comp.whenToPlay}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredComps.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-gray-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-400 mb-2">No compositions found</h3>
            <p className="text-gray-600">Try adjusting your filters or search query</p>
          </div>
        )}

        {/* Bottom Ad */}
        <div className="mt-8">
          <AdBanner position="sidebar" />
        </div>
      </div>
    </div>
  );
}

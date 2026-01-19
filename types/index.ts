// Core TFT Game State Types
export interface Champion {
  name: string;
  cost: number;
  stars: number; // 1, 2, or 3
  items?: string[];
  traits: string[];
}

export interface Item {
  name: string;
  components: string[];
  bonus: string;
}

export interface GameState {
  stage: string; // e.g., "3-2", "4-5"
  level: number; // 1-10
  gold: number;
  health: number;
  champions: Champion[];
  items: string[]; // Items on bench/board
  unitsOnBoard: number; // Current board size
}

// Chat/Message Types
export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp?: Date;
}

export interface ChatRequest {
  messages: Message[];
  gameState?: GameState;
}

export interface ChatResponse {
  message: string;
  advice?: {
    composition?: string;
    items?: string[];
    economy?: string;
    positioning?: string;
  };
}

// TFT Meta Data Types
export interface MetaComposition {
  name: string;
  tier: 'S' | 'A' | 'B' | 'C';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  traits: string[];
  keyUnits: {
    name: string;
    cost: number;
    carry: boolean;
    items: string[];
  }[];
  playstyle: string;
  whenToPlay: string;
  earlyGame: string;
  midGame: string;
  lateGame: string;
}

export interface TFTMetaData {
  currentSet: string;
  patch: string;
  lastUpdated: string;
  compositions: MetaComposition[];
  items: Item[];
  economyStrategies: {
    name: string;
    description: string;
    goldThresholds: number[];
    stages: string[];
  }[];
  generalTips: string[];
}

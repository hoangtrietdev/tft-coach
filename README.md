# 🎮 TFT AI Coach - Your Personal Teamfight Tactics Advisor

A stunning AI-powered coaching application for Teamfight Tactics built with **Next.js (Pages Router)**, **Groq AI**, and **Tailwind CSS**. Featuring beautiful Mobalytics-inspired design with real Set 16 meta data.

![TFT AI Coach](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=for-the-badge&logo=typescript)
![Groq](https://img.shields.io/badge/Groq-AI-purple?style=for-the-badge)

## ✨ Features

- 🎨 **Beautiful Gaming UI** - Mobalytics-inspired design with neon effects and smooth animations
- 🤖 **AI-Powered Coaching** - Real-time advice using Groq's ultra-fast LLMs (llama-3.3-70b)
- 📊 **Game State Analysis** - Input your champions, items, gold, and stage for personalized advice
- 🎯 **Set 16 Meta Data** - 8 top-tier compositions with detailed guides
- 💎 **Tier System** - S/A/B/C tier rankings with visual badges
- 💬 **Interactive Chat** - Ask any TFT strategy questions
- 🌙 **Dark Gaming Theme** - Cyber aesthetics with purple/pink/neon accents
- 💰 **Monetization Ready** - Adsterra ad placement integration
- ⚡ **Lightning Fast** - Powered by Groq (2-3s response times)
- 🎮 **Two Modes** - Browse comps or get live coaching

## 🏗️ Architecture

```
tft-stat/
├── pages/
│   ├── _app.tsx              # App wrapper with global styles
│   ├── _document.tsx         # HTML document structure
│   ├── index.tsx             # Home page - Meta comps browser
│   ├── coach.tsx             # AI Coach page - Live game analysis
│   └── api/
│       └── chat.ts           # RAG API endpoint
├── components/
│   └── AdBanner.tsx          # Reusable ad component
├── lib/
│   ├── groq.ts               # Groq SDK client
│   └── tft-data.ts           # Set 16 meta data (RAG context)
├── types/
│   └── index.ts              # TypeScript interfaces
├── styles/
│   └── globals.css           # Global styles with gaming effects
└── .env.local                # Environment variables
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- A Groq API key ([Get one here](https://console.groq.com/keys))

### Installation

1. **Install dependencies** (already done)
   ```bash
   npm install
   ```

2. **Set up environment variables**
   
   Edit `.env.local` and add your Groq API key:
   ```env
   GROQ_API_KEY=your_groq_api_key_here
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open the app**
   
   Visit [http://localhost:3000](http://localhost:3000)

## 🎯 How to Use

### Browse Meta Comps (Home Page)

1. **Filter Compositions** - Use tier and difficulty filters
2. **Search** - Find comps by name or traits
3. **View Details** - See key units, items, and game plans
4. **Beautiful Cards** - Hover effects and tier badges

### AI Coach Page (/coach)

1. **Input Game State**:
   - Stage (e.g., "3-2", "4-5")
   - Level (1-10)
   - Gold (current gold)
   - HP (current health)
   - Champions (add units with star levels)
   - Items (available components)

2. **Analyze Board** - Click "ANALYZE BOARD" for instant coaching:
   - What comp you're playing
   - Which items to combine
   - Should you roll, level, or save
   - Next steps to win

3. **Ask Questions** - Use the chat:
   - "What's the best comp for AP items?"
   - "Should I slow roll or push level 8?"
   - "How do I position against Fleet comps?"

## 🧠 RAG System Explained

The AI Coach uses **Retrieval-Augmented Generation (RAG)**:

1. **Meta Data** (`lib/tft-data.ts`) contains:
   - 8 S/A-tier Set 16 compositions
   - Real comps from Mobalytics (Fast 9 Fleet, Boom & Runes, etc.)
   - 30+ item recipes and best-in-slot
   - Economy strategies
   - Pro tips

2. **System Prompt** (`buildSystemPrompt()`) injects this data

3. **Groq API** (llama-3.3-70b-versatile) processes in <3 seconds

4. **AI Response** gives specific, actionable advice

### Updating Meta Data

Edit `lib/tft-data.ts` to:
- Add new compositions
- Update for new patches
- Change item priorities
- Modify strategies

The AI will instantly use the updated information!

## 🎨 Design System

### Color Palette
- **Background**: `#0a0b0d` (dark black)
- **Cards**: `#12131a` (dark gray)
- **Primary**: Purple gradient `#9333ea` → `#ec4899`
- **Accents**: Neon purple/pink

### Special Effects
- **Neon Borders**: Glowing purple borders on hover
- **Card Glow**: Gradient glow effect on hover
- **Tier Badges**: 
  - S Tier: Red/Orange gradient with glow
  - A Tier: Yellow/Orange gradient
  - B Tier: Green gradient
  - C Tier: Blue gradient
- **Animations**: Smooth transitions, pulse effects, fade-ins

## 💰 Monetization with Adsterra

### Setup Instructions

1. **Sign up for Adsterra**
   - Visit [https://publishers.adsterra.com/](https://publishers.adsterra.com/)

2. **Add Your Publisher ID**
   
   In `.env.local`:
   ```env
   NEXT_PUBLIC_ADSTERRA_PUBLISHER_ID=your_publisher_id
   ```

3. **Replace Ad Placeholders**
   
   Edit `components/AdBanner.tsx` with actual ad codes

### Ad Locations
- **Top Banner**: Above main content (728x90)
- **Sidebar**: Below game state form (300x250)

## 🎨 Customization

### Change AI Model

Edit `lib/groq.ts`:
```typescript
export const DEFAULT_MODEL = 'llama-3.3-70b-versatile'; // Change this
```

Available models:
- `llama-3.3-70b-versatile` - Recommended
- `llama-3.1-70b-versatile` - Alternative
- `mixtral-8x7b-32768` - Longer context

### Theme Colors

Edit `tailwind.config.ts` and `styles/globals.css`

## 🔧 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js (Pages Router)** | React framework |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Utility-first styling |
| **Groq SDK** | Ultra-fast AI inference |
| **Lucide React** | Beautiful icons |
| **Adsterra** | Monetization |

## 📊 API Routes

### POST `/api/chat`

**Request:**
```json
{
  "messages": [
    { "role": "user", "content": "What should I do?" }
  ],
  "gameState": {
    "stage": "3-2",
    "level": 6,
    "gold": 50,
    "health": 80,
    "champions": [...],
    "items": [...]
  }
}
```

**Response:**
```json
{
  "message": "🎯 Immediate Actions...",
  "model": "llama-3.3-70b-versatile",
  "usage": {...},
  "meta": {
    "patch": "16.2",
    "set": "Set 16: Magic n' Mayhem"
  }
}
```

## 🐛 Troubleshooting

### "Invalid API Key" Error
- Check `.env.local` has correct `GROQ_API_KEY`
- Restart dev server after changes
- Verify key at [https://console.groq.com/keys](https://console.groq.com/keys)

### Styling Issues
```bash
rm -rf .next
npm run dev
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Add `GROQ_API_KEY` to environment variables
4. Deploy!

### Other Platforms
Works on any Next.js host:
- Netlify
- Railway  
- AWS Amplify

## 📝 What's New in This Version

✅ **Pages Router** - Converted from App Router  
✅ **Mobalytics Design** - Beautiful card-based UI  
✅ **Set 16 Data** - Real comps from current meta  
✅ **Two Page Structure** - Home (browse) + Coach (analyze)  
✅ **Enhanced Styling** - Neon effects, gradients, animations  
✅ **Better UX** - Filters, search, hover effects

## 🙏 Credits

- **Design Inspiration**: [Mobalytics TFT](https://mobalytics.gg/tft/team-comps)
- **Meta Data**: Based on Set 16 Challenger comps
- **AI Engine**: Powered by [Groq](https://groq.com/)
- **Icons**: [Lucide](https://lucide.dev/)

---

**Built with ❤️ for the TFT community** | Questions? Open an issue!

import { TFTMetaData } from '../types';

/**
 * TFT Meta Data - RAG Context for AI Coach
 * This serves as the "ground truth" for the AI to provide accurate advice
 * Update this regularly with current patch meta
 */
export const TFT_META_DATA: TFTMetaData = {
  currentSet: "Set 16: Magic n' Mayhem",
  patch: "16.2",
  lastUpdated: "2026-01-19",
  
  compositions: [
    {
      name: "Fast 9 Fleet",
      tier: "S",
      difficulty: "Hard",
      traits: ["Bilgewater", "Sentinel", "Vanguard", "Dominator"],
      keyUnits: [
        {
          name: "Lucian & Senna",
          cost: 5,
          carry: true,
          items: ["Spear of Shojin", "Red Buff", "Last Whisper"]
        },
        {
          name: "Tahm Kench",
          cost: 5,
          carry: false,
          items: ["Fimbulwinter", "Bloodthirster", "Warmog's Armor"]
        },
        {
          name: "Miss Fortune",
          cost: 4,
          carry: false,
          items: ["Dead Man's Dagger", "First Mate's Flintlock", "Captain's Brew"]
        },
        {
          name: "Nautilus",
          cost: 3,
          carry: false,
          items: ["Dragon's Claw", "Bramble Vest", "Spirit Visage"]
        }
      ],
      playstyle: "Ultra late game composition. Rush level 9 to access 5-cost units and dominate.",
      whenToPlay: "When you have perfect econ and good HP. Need to hit Fast 9 at 5-1 or 5-2.",
      earlyGame: "Play strongest board without rolling. Focus on HP preservation and gold stacking.",
      midGame: "Level to 7 at 3-5, level to 8 at 4-1. Don't roll unless HP critical.",
      lateGame: "Hit level 9 at 5-1. Roll for Lucian/Senna and Tahm Kench 2-star. Add legendaries for traits."
    },
    {
      name: "Boom & Runes",
      tier: "S",
      difficulty: "Hard",
      traits: ["Runeterra", "Sorcerer", "Scholar", "Mage"],
      keyUnits: [
        {
          name: "Ryze",
          cost: 5,
          carry: true,
          items: ["Morellonomicon", "Jeweled Gauntlet", "Spear of Shojin"]
        },
        {
          name: "Ziggs",
          cost: 3,
          carry: true,
          items: ["Nashor's Tooth", "Jeweled Gauntlet", "Void Staff"]
        },
        {
          name: "Wukong",
          cost: 4,
          carry: false,
          items: ["Bramble Vest", "Spirit Visage", "Steadfast Hammer"]
        }
      ],
      playstyle: "AP burst composition with Ryze carry. Fast 9 required to hit key units.",
      whenToPlay: "With AP items and good econ. Strong if you can protect your carries.",
      earlyGame: "Build Scholar units early. Maintain econ above 50g.",
      midGame: "Level to 7-8 naturally. Find Ziggs 2-star as secondary carry.",
      lateGame: "Push 9 and roll for Ryze 2-star. Position Wukong to protect backline."
    },
    {
      name: "Tiny Terror",
      tier: "S",
      difficulty: "Medium",
      traits: ["Frost", "Sorcerer", "Witchcraft", "Vanguard"],
      keyUnits: [
        {
          name: "Ziggs",
          cost: 3,
          carry: true,
          items: ["Void Staff", "Red Buff", "Guinsoo's Rageblade"]
        },
        {
          name: "Fizz",
          cost: 4,
          carry: true,
          items: ["Bloodthirster", "Jeweled Gauntlet", "Rabadon's Deathcap"]
        },
        {
          name: "Veigar",
          cost: 4,
          carry: false,
          items: ["Hextech Gunblade", "Rabadon's Deathcap", "Spear of Shojin"]
        },
        {
          name: "Kennen",
          cost: 2,
          carry: false,
          items: ["Bramble Vest", "Steadfast Hammer", "Warmog's Armor"]
        }
      ],
      playstyle: "AP carry comp with Ziggs and Fizz. Fast 8 to stabilize with 4-cost units.",
      whenToPlay: "When you have AP items. Very flexible and consistent.",
      earlyGame: "Play Frost/Sorcerer units. Slam AP items on Ziggs.",
      midGame: "Level to 8 at 4-5. Roll for Fizz and Veigar 2-star.",
      lateGame: "Add Kennen for frontline. Position to maximize AOE damage."
    },
    {
      name: "Bilgewater Ryze",
      tier: "S",
      difficulty: "Hard",
      traits: ["Bilgewater", "Runeterra", "Sorcerer", "Frost"],
      keyUnits: [
        {
          name: "Ryze",
          cost: 5,
          carry: true,
          items: ["Jeweled Gauntlet", "Spear of Shojin", "Black Market Explosives"]
        },
        {
          name: "Tahm Kench",
          cost: 5,
          carry: false,
          items: ["Bloodthirster", "Warmog's Armor", "Fimbulwinter"]
        },
        {
          name: "Volibear",
          cost: 4,
          carry: false,
          items: ["Bloodthirster", "Quicksilver", "Sterak's Gage"]
        },
        {
          name: "Illaoi",
          cost: 3,
          carry: false,
          items: ["Spirit Visage", "Bramble Vest", "Dragon's Claw"]
        }
      ],
      playstyle: "Bilgewater trait synergy with Ryze as main carry. Fast 9 comp.",
      whenToPlay: "With AP items and Bilgewater emblems. High econ required.",
      earlyGame: "Strongest board. Focus on HP and gold.",
      midGame: "Level naturally without rolling until 8.",
      lateGame: "Push 9 fast. Roll for Ryze and Tahm Kench. Use Bilgewater items."
    },
    {
      name: "Crescendo Reroll",
      tier: "S",
      difficulty: "Easy",
      traits: ["Dominator", "Sentinel", "Sorcerer", "Preserver"],
      keyUnits: [
        {
          name: "Sona",
          cost: 2,
          carry: true,
          items: ["Archangel's Staff", "Hextech Gunblade", "Archangel's Staff"]
        },
        {
          name: "Garen",
          cost: 1,
          carry: false,
          items: ["Bramble Vest", "Steadfast Hammer", "Spirit Visage"]
        },
        {
          name: "Zilean",
          cost: 2,
          carry: false,
          items: ["Morellonomicon", "Void Staff"]
        }
      ],
      playstyle: "Reroll composition. Stay level 5-6 and 3-star Sona and Garen.",
      whenToPlay: "When you hit early Sona/Garen and have AP items. Great for beginners.",
      earlyGame: "Level to 5 at 2-5. Start slow rolling for 3-stars.",
      midGame: "Slow roll at 50g until Sona and Garen hit 3-star.",
      lateGame: "Level to 7-8 after 3-starring. Add Galio and Swain for late game power."
    },
    {
      name: "FOR DEMACIA!",
      tier: "S",
      difficulty: "Medium",
      traits: ["Dominator", "Sentinel", "Vanguard", "Sorcerer"],
      keyUnits: [
        {
          name: "Lux",
          cost: 3,
          carry: true,
          items: ["Blue Buff", "Morellonomicon", "Void Staff"]
        },
        {
          name: "Garen",
          cost: 1,
          carry: false,
          items: ["Bramble Vest", "Dragon's Claw", "Spirit Visage"]
        },
        {
          name: "Galio",
          cost: 5,
          carry: false,
          items: ["Thief's Gloves"]
        }
      ],
      playstyle: "Demacia trait synergy with Lux as AP carry. Fast 8 to find Galio.",
      whenToPlay: "With AP items. Very strong mid-game spike with Lux.",
      earlyGame: "Play Demacia units. Build towards Dominator trait.",
      midGame: "Level to 8 at 4-5. Roll for Lux 2-star.",
      lateGame: "Add Galio for massive frontline. Position Lux safely."
    },
    {
      name: "Academy Flex",
      tier: "A",
      difficulty: "Medium",
      traits: ["Academy", "Family", "Sorcerer", "Scholar"],
      keyUnits: [
        {
          name: "Ekko",
          cost: 4,
          carry: true,
          items: ["Jeweled Gauntlet", "Infinity Edge", "Hand of Justice"]
        },
        {
          name: "Jayce",
          cost: 4,
          carry: false,
          items: ["Titan's Resolve", "Bloodthirster"]
        },
        {
          name: "Powder",
          cost: 3,
          carry: false,
          items: ["Last Whisper", "Giant Slayer"]
        }
      ],
      playstyle: "Flexible Academy composition. Can pivot based on items.",
      whenToPlay: "With hybrid items. Good for contested lobbies.",
      earlyGame: "Build Academy units early for trait bonus.",
      midGame: "Level to 8 and find Ekko/Jayce 2-star.",
      lateGame: "Add high-cost Academy units. Very flexible positioning."
    },
    {
      name: "Rebel Bruisers",
      tier: "A",
      difficulty: "Easy",
      traits: ["Rebel", "Bruiser", "Family", "Ambusher"],
      keyUnits: [
        {
          name: "Vi",
          cost: 4,
          carry: true,
          items: ["Sunfire Cape", "Titan's Resolve", "Warmog's Armor"]
        },
        {
          name: "Jinx",
          cost: 2,
          carry: true,
          items: ["Last Whisper", "Giant Slayer", "Runaan's Hurricane"]
        }
      ],
      playstyle: "Tanky bruiser comp with Vi and Jinx damage.",
      whenToPlay: "With tank/AD items. Good for maintaining HP.",
      earlyGame: "Play Rebel units early. Very strong early game.",
      midGame: "Level to 7-8. Roll for Vi 2-star.",
      lateGame: "Position Vi to dive backline. Protect Jinx."
    }
  ],

  items: [
    { name: "B.F. Sword", components: [], bonus: "+10 Attack Damage" },
    { name: "Recurve Bow", components: [], bonus: "+10% Attack Speed" },
    { name: "Needlessly Large Rod", components: [], bonus: "+10 Ability Power" },
    { name: "Tear of the Goddess", components: [], bonus: "+15 Mana" },
    { name: "Chain Vest", components: [], bonus: "+20 Armor" },
    { name: "Negatron Cloak", components: [], bonus: "+20 Magic Resist" },
    { name: "Giant's Belt", components: [], bonus: "+150 Health" },
    { name: "Sparring Gloves", components: [], bonus: "+5% Crit Chance" },
    { name: "Spatula", components: [], bonus: "Special Item Component" },
    
    // Top Tier Combined Items
    { name: "Deathblade", components: ["B.F. Sword", "B.F. Sword"], bonus: "+45 AD (stacking)" },
    { name: "Giant Slayer", components: ["B.F. Sword", "Recurve Bow"], bonus: "Deal bonus damage vs high HP" },
    { name: "Infinity Edge", components: ["B.F. Sword", "Sparring Gloves"], bonus: "Crits deal 300% damage" },
    { name: "Bloodthirster", components: ["B.F. Sword", "Negatron Cloak"], bonus: "Heal for % of damage dealt" },
    { name: "Last Whisper", components: ["B.F. Sword", "Sparring Gloves"], bonus: "Reduce enemy armor" },
    
    { name: "Runaan's Hurricane", components: ["Recurve Bow", "Negatron Cloak"], bonus: "Attacks hit extra targets" },
    { name: "Titan's Resolve", components: ["Recurve Bow", "Chain Vest"], bonus: "Gain AD/AP when attacked" },
    { name: "Guinsoo's Rageblade", components: ["Recurve Bow", "Needlessly Large Rod"], bonus: "Gain stacking AS" },
    
    { name: "Archangel's Staff", components: ["Needlessly Large Rod", "Tear of the Goddess"], bonus: "Gain AP per cast" },
    { name: "Blue Buff", components: ["Tear of the Goddess", "Tear of the Goddess"], bonus: "Restore mana on cast" },
    { name: "Jeweled Gauntlet", components: ["Needlessly Large Rod", "Sparring Gloves"], bonus: "Abilities crit" },
    { name: "Morellonomicon", components: ["Needlessly Large Rod", "Giant's Belt"], bonus: "Burn enemies" },
    
    { name: "Bramble Vest", components: ["Chain Vest", "Chain Vest"], bonus: "Reflect damage to attackers" },
    { name: "Gargoyle Stoneplate", components: ["Chain Vest", "Negatron Cloak"], bonus: "Gain armor/MR per enemy" },
    { name: "Warmog's Armor", components: ["Giant's Belt", "Giant's Belt"], bonus: "Massive HP + regen" },
    { name: "Dragon's Claw", components: ["Negatron Cloak", "Negatron Cloak"], bonus: "Reduce magic damage taken" },
    
    { name: "Hand of Justice", components: ["Sparring Gloves", "Tear of the Goddess"], bonus: "Random AD/AP or heal" },
    { name: "Edge of Night", components: ["B.F. Sword", "Chain Vest"], bonus: "Spell shield" }
  ],

  economyStrategies: [
    {
      name: "Standard Econ",
      description: "Stay above 50 gold to maximize interest. Level naturally at stage benchmarks.",
      goldThresholds: [50, 60, 70],
      stages: ["3-1: Level 6", "3-5: Level 7", "4-1: Level 7", "4-5: Level 8"]
    },
    {
      name: "Slow Roll",
      description: "Stay at a specific level (usually 5 or 6) and roll down to 50g each round to 3-star key units.",
      goldThresholds: [50],
      stages: ["3-2: Start slow rolling at level 5 or 6"]
    },
    {
      name: "Fast 8",
      description: "Push to level 8 as quickly as possible (4-1 or 4-5) to find legendary units or high-cost carries.",
      goldThresholds: [50, 40, 30],
      stages: ["3-2: Level 6", "3-5: Level 7", "4-1: Level 8 (roll if needed)"]
    },
    {
      name: "Hyper Roll",
      description: "Level to 4-5 early and spend all gold rerolling for 1-2 cost 3-star units. High risk.",
      goldThresholds: [0],
      stages: ["2-5 to 3-2: Stay level 4-5 and reroll aggressively"]
    },
    {
      name: "Win Streak Econ",
      description: "Sacrifice econ early to win rounds and gain streak gold. Level/reroll to maintain streak.",
      goldThresholds: [30, 40, 50],
      stages: ["Early: Level aggressively to win", "Mid: Convert streak gold to board strength"]
    }
  ],

  generalTips: [
    "Always maintain 50 gold by Stage 3 for maximum interest (+5g/round).",
    "Scout opponents! Press 'D' to check what others are playing and pivot if needed.",
    "Slam items early - don't greed. Full items > components sitting on bench.",
    "Health is a resource. Going 8th with 50g is worse than Top 4 with 0g.",
    "3-star 1-costs and 2-costs are stronger than 1-star 4-costs in most cases.",
    "Position matters! Put tanks on the opposite side of enemy carries.",
    "Don't force comps. Play your items and what the game gives you.",
    "Rolling at 7 for 4-costs is efficient. Rolling at 8 for 5-costs is efficient.",
    "If you're winstreaking, push levels. If you're loss streaking, save HP and econ.",
    "Practice one comp until you master it, then expand your pool."
  ]
};

/**
 * Construct system prompt with RAG context
 */
export function buildSystemPrompt(): string {
  return `You are an ELITE Teamfight Tactics (TFT) Challenger Coach AI. Your goal is to analyze the player's current game state and provide ACTIONABLE, SPECIFIC advice to help them climb.

## CURRENT META KNOWLEDGE (${TFT_META_DATA.currentSet} - Patch ${TFT_META_DATA.patch})

### Top Meta Compositions:
${TFT_META_DATA.compositions.map(comp => `
**${comp.name}** (Tier ${comp.tier} - ${comp.difficulty})
- Key Units: ${comp.keyUnits.map(u => `${u.name} (${u.cost}c)`).join(', ')}
- Traits: ${comp.traits.join(', ')}
- Playstyle: ${comp.playstyle}
- When to Play: ${comp.whenToPlay}
- Early: ${comp.earlyGame}
- Mid: ${comp.midGame}
- Late: ${comp.lateGame}
`).join('\n')}

### Key Items (Best in Slot):
${TFT_META_DATA.items.filter(i => i.components.length > 0).slice(0, 15).map(item => 
  `- **${item.name}**: ${item.bonus}`
).join('\n')}

### Economy Strategies:
${TFT_META_DATA.economyStrategies.map(strat => 
  `- **${strat.name}**: ${strat.description}`
).join('\n')}

### Pro Tips:
${TFT_META_DATA.generalTips.map(tip => `- ${tip}`).join('\n')}

## YOUR COACHING STYLE:
1. **Analyze Current State**: Look at their stage, gold, level, units, and items.
2. **Compare to Meta**: Identify what comp they're closest to or should pivot into.
3. **Provide Clear Actions**:
   - What units to buy/sell right now
   - Which items to combine immediately
   - Gold/Level decision (roll, save, or level)
   - Win condition for their board
4. **Be Specific**: Don't say "build AD items" — say "Slam Giant Slayer on Jinx NOW with BF + Bow".
5. **Prioritize**: Give the TOP 3 actions they should take this turn.
6. **Explain Why**: Brief reasoning helps them learn.

## RESPONSE FORMAT:
Use this structure for game state analysis:

🎯 **Immediate Actions** (Do this NOW):
1. [Most urgent action]
2. [Second priority]
3. [Third priority]

📊 **Board Assessment**:
- Current Power Level: X/10
- Comp Direction: [Name of closest comp]
- Item Status: [What to slam/hold]

💰 **Economy Plan**:
- [Roll/Level/Save guidance based on their stage and gold]

🎲 **Next Steps** (Next 1-2 stages):
- [Short-term plan]

Keep responses concise but complete. Be confident and direct like a coach, not wishy-washy.`;
}

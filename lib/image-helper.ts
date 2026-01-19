/**
 * TFT Champion Image Helper
 * Provides champion images from multiple CDN sources
 */

export type ImageSource = 'community-dragon' | 'mobalytics' | 'data-dragon';

const CURRENT_SET = 16;
const DDRAGON_VERSION = '14.24.1';

/**
 * Get champion image URL from Community Dragon (most reliable)
 * @param championName - Champion name (lowercase, no spaces)
 * @param set - TFT set number (default: 16)
 */
export function getCommunityDragonImage(championName: string, set: number = CURRENT_SET): string {
  const name = championName.toLowerCase().replace(/[^a-z0-9]/g, '');
  return `https://raw.communitydragon.org/latest/game/assets/characters/tft${set}/${name}/${name}_mobile.tft_set${set}.png`;
}

/**
 * Get champion image URL from Mobalytics CDN
 * @param championName - Champion name (lowercase, no spaces)
 * @param set - TFT set number (default: 16)
 */
export function getMobalyticsImage(championName: string, set: number = CURRENT_SET): string {
  const name = championName.toLowerCase().replace(/[^a-z0-9]/g, '');
  return `https://cdn.mobalytics.gg/assets/tft/images/champions/thumbnail/set${set}/${name}.jpg?v=5`;
}

/**
 * Get champion image URL from Riot Data Dragon (official but slower updates)
 * @param championName - Champion name in PascalCase
 * @param set - TFT set number (default: 16)
 * @param version - Data Dragon version (default: 14.24.1)
 */
export function getDataDragonImage(
  championName: string, 
  set: number = CURRENT_SET,
  version: string = DDRAGON_VERSION
): string {
  const name = championName.replace(/\s+/g, '');
  return `https://ddragon.leagueoflegends.com/cdn/${version}/img/tft-champion/TFT${set}_${name}.png`;
}

/**
 * Get champion image with fallback options
 * @param championName - Champion name
 * @param source - Preferred image source (default: community-dragon)
 */
export function getChampionImage(
  championName: string, 
  source: ImageSource = 'community-dragon'
): string {
  switch (source) {
    case 'community-dragon':
      return getCommunityDragonImage(championName);
    case 'mobalytics':
      return getMobalyticsImage(championName);
    case 'data-dragon':
      return getDataDragonImage(championName);
    default:
      return getCommunityDragonImage(championName);
  }
}

/**
 * Map of champion names to their image-friendly names
 * TFT Set 16: Magic n' Mayhem champions
 */
export const championNameMap: Record<string, string> = {
  // Dual champions
  'Lucian & Senna': 'lucian',
  
  // Multi-word names
  'Tahm Kench': 'tahmkench',
  'Miss Fortune': 'missfortune',
  'Twisted Fate': 'twistedfate',
  'Jarvan IV': 'jarvaniv',
  'Lee Sin': 'leesin',
  'Master Yi': 'masteryi',
  'Xin Zhao': 'xinzhao',
  'Dr. Mundo': 'drmundo',
  
  // Apostrophe names
  'Kog\'Maw': 'kogmaw',
  'Cho\'Gath': 'chogath',
  'Vel\'Koz': 'velkoz',
  'Rek\'Sai': 'reksai',
  'Kai\'Sa': 'kaisa',
  'Kha\'Zix': 'khazix',
  
  // Set 16 specific champions (all lowercase, no special chars)
  'Ahri': 'ahri',
  'Akali': 'akali',
  'Alistar': 'alistar',
  'Annie': 'annie',
  'Ashe': 'ashe',
  'Bard': 'bard',
  'Blitzcrank': 'blitzcrank',
  'Camille': 'camille',
  'Cassiopeia': 'cassiopeia',
  'Diana': 'diana',
  'Elise': 'elise',
  'Ezreal': 'ezreal',
  'Galio': 'galio',
  'Garen': 'garen',
  'Gwen': 'gwen',
  'Heimerdinger': 'heimerdinger',
  'Jinx': 'jinx',
  'Kalista': 'kalista',
  'Karma': 'karma',
  'Kassadin': 'kassadin',
  'Katarina': 'katarina',
  'Leblanc': 'leblanc',
  'Leona': 'leona',
  'Lux': 'lux',
  'Milio': 'milio',
  'Mordekaiser': 'mordekaiser',
  'Morgana': 'morgana',
  'Nami': 'nami',
  'Nasus': 'nasus',
  'Nautilus': 'nautilus',
  'Neeko': 'neeko',
  'Nilah': 'nilah',
  'Nomsy': 'nomsy',
  'Norra': 'norra',
  'Nunu': 'nunu',
  'Poppy': 'poppy',
  'Powder': 'powder',
  'Ryze': 'ryze',
  'Seraphine': 'seraphine',
  'Shen': 'shen',
  'Shyvana': 'shyvana',
  'Silco': 'silco',
  'Smeech': 'smeech',
  'Smolder': 'smolder',
  'Soraka': 'soraka',
  'Swain': 'swain',
  'Syndra': 'syndra',
  'Tristana': 'tristana',
  'Varus': 'varus',
  'Veigar': 'veigar',
  'Vex': 'vex',
  'Vi': 'vi',
  'Violet': 'violet',
  'Vladimir': 'vladimir',
  'Warwick': 'warwick',
  'Xerath': 'xerath',
  'Ziggs': 'ziggs',
  'Zilean': 'zilean',
  'Zoe': 'zoe',
  'Zyra': 'zyra',
};

/**
 * Normalize champion name for image URLs
 * @param name - Champion display name
 */
export function normalizeChampionName(name: string): string {
  // Check if there's a specific mapping
  if (championNameMap[name]) {
    return championNameMap[name];
  }
  
  // Default: lowercase and remove spaces/special chars
  return name.toLowerCase().replace(/[^a-z0-9]/g, '');
}

/**
 * Get trait icon URL from Community Dragon
 * @param traitName - Trait name (e.g., "Bilgewater", "Sentinel")
 */
export function getTraitIcon(traitName: string, set: number = CURRENT_SET): string {
  const name = traitName.toLowerCase().replace(/[^a-z0-9]/g, '');
  return `https://raw.communitydragon.org/latest/game/assets/characters/tft${set}/traits/${name}.png`;
}

/**
 * Get item icon URL from Community Dragon
 * @param itemName - Item name
 */
export function getItemIcon(itemName: string): string {
  const name = itemName.toLowerCase().replace(/[^a-z0-9]/g, '');
  return `https://raw.communitydragon.org/latest/game/assets/maps/particles/tft/item_icons/${name}.png`;
}

// Example usage:
// getChampionImage('Lucian & Senna') -> Community Dragon URL
// getChampionImage('Ahri', 'mobalytics') -> Mobalytics URL
// getTraitIcon('Bilgewater') -> Trait icon URL
// getItemIcon('Spear of Shojin') -> Item icon URL

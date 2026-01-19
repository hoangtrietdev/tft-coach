/**
 * Content Moderation & Filtering System
 * Filters inappropriate, sensitive, and offensive content from user input
 */

// Comprehensive list of inappropriate words and phrases
const BLOCKED_WORDS = [
  // Profanity and offensive terms
  'fuck', 'shit', 'bitch', 'asshole', 'bastard', 'damn', 'crap', 'hell',
  'dick', 'cock', 'pussy', 'whore', 'slut', 'cunt', 'fag', 'faggot',
  // Hate speech and slurs
  'nigger', 'nigga', 'chink', 'spic', 'kike', 'retard', 'retarded',
  // Sexual content
  'porn', 'xxx', 'sex', 'penis', 'vagina', 'naked', 'nude', 'horny',
  // Violence and threats
  'kill', 'murder', 'rape', 'terrorist', 'bomb', 'weapon', 'suicide',
  // Spam and inappropriate requests
  'viagra', 'cialis', 'casino', 'lottery', 'click here', 'buy now',
  // Additional offensive terms
  'motherfucker', 'prick', 'twat', 'wanker', 'jackass', 'dumbass'
];

// Patterns that might indicate harmful content
const SUSPICIOUS_PATTERNS = [
  /\b(hack|exploit|cheat)\s+(code|script|tool)\b/gi,
  /\b(illegal|pirat(e|ed)|crack(ed)?|warez)\b/gi,
  /\b(scam|fraud|phishing)\b/gi,
  /\b(personal|private)\s+(info|data|details)\b/gi,
  /\b(credit\s*card|social\s*security)\b/gi,
  /\b(admin|root|password)\s*[:=]/gi,
  /https?:\/\/(bit\.ly|tinyurl|goo\.gl)/gi, // Suspicious shortened URLs
];

/**
 * Check if text contains blocked words
 */
export function containsBlockedWords(text: string): boolean {
  const lowerText = text.toLowerCase();
  
  // Check for exact word matches with word boundaries
  for (const word of BLOCKED_WORDS) {
    const regex = new RegExp(`\\b${word}\\b`, 'i');
    if (regex.test(lowerText)) {
      return true;
    }
  }
  
  return false;
}

/**
 * Check if text matches suspicious patterns
 */
export function containsSuspiciousPatterns(text: string): boolean {
  for (const pattern of SUSPICIOUS_PATTERNS) {
    if (pattern.test(text)) {
      return true;
    }
  }
  return false;
}

/**
 * Sanitize and clean user input
 */
export function sanitizeInput(text: string): string {
  // Remove excessive whitespace
  let cleaned = text.trim().replace(/\s+/g, ' ');
  
  // Remove potential HTML/script tags
  cleaned = cleaned.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  cleaned = cleaned.replace(/<[^>]+>/g, '');
  
  // Limit length to prevent abuse
  const MAX_LENGTH = 2000;
  if (cleaned.length > MAX_LENGTH) {
    cleaned = cleaned.substring(0, MAX_LENGTH);
  }
  
  return cleaned;
}

/**
 * Main content filter function
 * Returns { allowed: boolean, reason?: string, sanitized: string }
 */
export function filterContent(text: string): {
  allowed: boolean;
  reason?: string;
  sanitized: string;
} {
  // First sanitize the input
  const sanitized = sanitizeInput(text);
  
  // Check for empty content
  if (!sanitized || sanitized.length < 1) {
    return {
      allowed: false,
      reason: 'Message cannot be empty',
      sanitized: ''
    };
  }
  
  // Check for blocked words
  if (containsBlockedWords(sanitized)) {
    return {
      allowed: false,
      reason: 'Your message contains inappropriate language. Please keep the conversation respectful.',
      sanitized
    };
  }
  
  // Check for suspicious patterns
  if (containsSuspiciousPatterns(sanitized)) {
    return {
      allowed: false,
      reason: 'Your message contains content that violates our usage policy.',
      sanitized
    };
  }
  
  // Check for spam (excessive repetition)
  const words = sanitized.split(/\s+/);
  const uniqueWords = new Set(words.map(w => w.toLowerCase()));
  if (words.length > 10 && uniqueWords.size < words.length * 0.3) {
    return {
      allowed: false,
      reason: 'Your message appears to be spam. Please provide meaningful content.',
      sanitized
    };
  }
  
  // All checks passed
  return {
    allowed: true,
    sanitized
  };
}

/**
 * Validate game state input to prevent injection attacks
 */
export function validateGameStateInput(input: any): boolean {
  // Check for SQL injection patterns
  const sqlPatterns = [
    /(\bor\b|\band\b).*[=<>]/gi,
    /union\s+select/gi,
    /drop\s+table/gi,
    /insert\s+into/gi,
    /delete\s+from/gi
  ];
  
  const inputStr = JSON.stringify(input).toLowerCase();
  
  for (const pattern of sqlPatterns) {
    if (pattern.test(inputStr)) {
      return false;
    }
  }
  
  return true;
}

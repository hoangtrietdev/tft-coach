'use client';

import React from 'react';
import Markdown from 'markdown-to-jsx';

interface MarkdownMessageProps {
  content: string;
  className?: string;
}

/**
 * MarkdownMessage Component
 * Renders markdown content with custom styling for chat messages
 */
export default function MarkdownMessage({ content, className = '' }: MarkdownMessageProps) {
  return (
    <Markdown
      className={`markdown-content ${className}`}
      options={{
        overrides: {
          // Headings
          h1: {
            component: 'h1',
            props: {
              className: 'text-2xl font-bold mb-3 mt-4 text-purple-300'
            }
          },
          h2: {
            component: 'h2',
            props: {
              className: 'text-xl font-bold mb-2 mt-3 text-purple-300'
            }
          },
          h3: {
            component: 'h3',
            props: {
              className: 'text-lg font-bold mb-2 mt-2 text-purple-400'
            }
          },
          // Paragraphs
          p: {
            component: 'p',
            props: {
              className: 'mb-3 leading-relaxed'
            }
          },
          // Lists
          ul: {
            component: 'ul',
            props: {
              className: 'list-disc list-inside mb-3 space-y-1 ml-2'
            }
          },
          ol: {
            component: 'ol',
            props: {
              className: 'list-decimal list-inside mb-3 space-y-1 ml-2'
            }
          },
          li: {
            component: 'li',
            props: {
              className: 'ml-2 leading-relaxed'
            }
          },
          // Code blocks
          code: {
            component: ({ children, className }: any) => {
              const isBlock = className?.includes('lang-');
              if (isBlock) {
                return (
                  <code className="block bg-[#0B0E11] border border-gray-700 rounded-lg p-3 my-2 overflow-x-auto text-sm font-mono text-purple-300">
                    {children}
                  </code>
                );
              }
              return (
                <code className="bg-purple-900/30 text-purple-300 px-1.5 py-0.5 rounded text-sm font-mono border border-purple-700/30">
                  {children}
                </code>
              );
            }
          },
          pre: {
            component: ({ children }: any) => (
              <pre className="bg-[#0B0E11] border border-gray-700 rounded-lg p-3 my-2 overflow-x-auto">
                {children}
              </pre>
            )
          },
          // Links
          a: {
            component: 'a',
            props: {
              className: 'text-purple-400 hover:text-purple-300 underline transition-colors',
              target: '_blank',
              rel: 'noopener noreferrer'
            }
          },
          // Blockquotes
          blockquote: {
            component: 'blockquote',
            props: {
              className: 'border-l-4 border-purple-500 pl-4 py-2 my-2 italic text-gray-300 bg-purple-900/10'
            }
          },
          // Strong/Bold
          strong: {
            component: 'strong',
            props: {
              className: 'font-bold text-white'
            }
          },
          // Emphasis/Italic
          em: {
            component: 'em',
            props: {
              className: 'italic text-gray-300'
            }
          },
          // Horizontal Rule
          hr: {
            component: 'hr',
            props: {
              className: 'border-gray-700 my-4'
            }
          },
          // Tables
          table: {
            component: 'table',
            props: {
              className: 'min-w-full border-collapse my-3'
            }
          },
          thead: {
            component: 'thead',
            props: {
              className: 'bg-purple-900/20'
            }
          },
          th: {
            component: 'th',
            props: {
              className: 'border border-gray-700 px-3 py-2 text-left font-semibold'
            }
          },
          td: {
            component: 'td',
            props: {
              className: 'border border-gray-700 px-3 py-2'
            }
          }
        }
      }}
    >
      {content}
    </Markdown>
  );
}

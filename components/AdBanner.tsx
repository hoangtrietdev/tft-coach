'use client';

import React from 'react';

interface AdBannerProps {
  position: 'top' | 'sidebar' | 'bottom';
  className?: string;
}

/**
 * AdBanner Component - Placeholder for Adsterra Ads
 * Replace the content with actual Adsterra ad code once you have your publisher ID
 */
export default function AdBanner({ position, className = '' }: AdBannerProps) {
  // Placeholder styles based on position
  const positionStyles = {
    top: 'h-24 w-full',
    sidebar: 'h-64 w-full',
    bottom: 'h-20 w-full'
  };

  const placeholderText = {
    top: '728x90 Banner Ad',
    sidebar: '300x250 Square Ad',
    bottom: '468x60 Banner Ad'
  };

  return (
    <div 
      className={`
        bg-gray-800/50 border border-purple-500/30 rounded-lg
        flex items-center justify-center
        ${positionStyles[position]} 
        ${className}
      `}
    >
      <div className="text-center text-gray-500">
        <div className="text-xs font-mono mb-1">ADSTERRA AD SPACE</div>
        <div className="text-xs">{placeholderText[position]}</div>
        <div className="text-[10px] mt-1 opacity-50">
          Replace in components/AdBanner.tsx
        </div>
      </div>
    </div>
  );
}

/**
 * INTEGRATION INSTRUCTIONS:
 * 
 * 1. Sign up for Adsterra: https://publishers.adsterra.com/
 * 2. Create ad placements for your site
 * 3. Get the ad code (should look like):
 * 
 * <script type="text/javascript">
 *   atOptions = {
 *     'key' : 'YOUR_KEY_HERE',
 *     'format' : 'iframe',
 *     'height' : 250,
 *     'width' : 300,
 *     'params' : {}
 *   };
 * </script>
 * <script type="text/javascript" src="//www.topcreativeformat.com/YOUR_ID/invoke.js"></script>
 * 
 * 4. Replace the placeholder div above with:
 * 
 * <div 
 *   dangerouslySetInnerHTML={{ __html: `YOUR_ADSTERRA_CODE_HERE` }}
 *   className={className}
 * />
 * 
 * OR use React Helmet / next/script for better script injection.
 */

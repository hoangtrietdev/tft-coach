'use client';

import React, { useEffect } from 'react';

interface AdBannerProps {
  position: 'top' | 'sidebar' | 'bottom';
  className?: string;
}

/**
 * AdBanner Component - Adsterra Ads Integration
 */
export default function AdBanner({ position, className = '' }: AdBannerProps) {
  useEffect(() => {
    // Load Adsterra ad script for top banner (728x90)
    if (position === 'top') {
      const script = document.createElement('script');
      script.src = 'https://www.highperformanceformat.com/0cfa02fa0d283aa13d4b82e520cd5eb1/invoke.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
    
    // Load Adsterra ad script for sidebar (300x250)
    if (position === 'sidebar') {
      const script = document.createElement('script');
      script.src = 'https://www.highperformanceformat.com/64a576d2a15d1e00a2624d6e84bbae1d/invoke.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
    
    // Load Adsterra ad script for bottom/mobile (320x50)
    if (position === 'bottom') {
      const script = document.createElement('script');
      script.src = 'https://www.highperformanceformat.com/d5c1f6df763bfaacd95e8f44cc0ce0e7/invoke.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [position]);

  // Position-specific styles
  const positionStyles = {
    top: 'h-[90px] w-full max-w-[728px] mx-auto',
    sidebar: 'h-[250px] w-full max-w-[300px]',
    bottom: 'h-[50px] w-full max-w-[320px] mx-auto'
  };

  if (position === 'top') {
    return (
      <div className={`flex items-center justify-center ${positionStyles[position]} ${className}`}>
        <div id="adsterra-top-banner">
          {/* Adsterra 728x90 Banner */}
        </div>
      </div>
    );
  }
  
  if (position === 'sidebar') {
    return (
      <div className={`flex items-center justify-center ${positionStyles[position]} ${className}`}>
        <div id="adsterra-sidebar-banner">
          {/* Adsterra 300x250 Sidebar */}
        </div>
      </div>
    );
  }
  
  if (position === 'bottom') {
    return (
      <div className={`flex items-center justify-center ${positionStyles[position]} ${className}`}>
        <div id="adsterra-mobile-banner">
          {/* Adsterra 320x50 Mobile Banner */}
        </div>
      </div>
    );
  }

  return null;
}

'use client';

import React, { useEffect, useRef, useState } from 'react';

interface AdBannerProps {
  position: 'top' | 'sidebar' | 'bottom';
  className?: string;
}

/**
 * AdBanner Component - Adsterra Ads Integration
 */
export default function AdBanner({ position, className = '' }: AdBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set client-side flag to prevent hydration mismatch
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!containerRef.current || !isClient) return;

    const container = containerRef.current;
    
    // Clear previous content
    container.innerHTML = '';

    // Create script elements based on position
    if (position === 'top') {
      // Config script for 728x90 banner
      const configScript = document.createElement('script');
      configScript.type = 'text/javascript';
      configScript.innerHTML = `
        atOptions = {
          'key' : '0cfa02fa0d283aa13d4b82e520cd5eb1',
          'format' : 'iframe',
          'height' : 90,
          'width' : 728,
          'params' : {}
        };
      `;
      container.appendChild(configScript);

      // Invoke script
      const invokeScript = document.createElement('script');
      invokeScript.type = 'text/javascript';
      invokeScript.src = '//www.highperformanceformat.com/0cfa02fa0d283aa13d4b82e520cd5eb1/invoke.js';
      invokeScript.async = true;
      container.appendChild(invokeScript);
    } else if (position === 'sidebar') {
      // Config script for 300x250 sidebar
      const configScript = document.createElement('script');
      configScript.type = 'text/javascript';
      configScript.innerHTML = `
        atOptions = {
          'key' : '64a576d2a15d1e00a2624d6e84bbae1d',
          'format' : 'iframe',
          'height' : 250,
          'width' : 300,
          'params' : {}
        };
      `;
      container.appendChild(configScript);

      // Invoke script
      const invokeScript = document.createElement('script');
      invokeScript.type = 'text/javascript';
      invokeScript.src = '//www.highperformanceformat.com/64a576d2a15d1e00a2624d6e84bbae1d/invoke.js';
      invokeScript.async = true;
      container.appendChild(invokeScript);
    } else if (position === 'bottom') {
      // Config script for 320x50 mobile
      const configScript = document.createElement('script');
      configScript.type = 'text/javascript';
      configScript.innerHTML = `
        atOptions = {
          'key' : 'd5c1f6df763bfaacd95e8f44cc0ce0e7',
          'format' : 'iframe',
          'height' : 50,
          'width' : 320,
          'params' : {}
        };
      `;
      container.appendChild(configScript);

      // Invoke script
      const invokeScript = document.createElement('script');
      invokeScript.type = 'text/javascript';
      invokeScript.src = '//www.highperformanceformat.com/d5c1f6df763bfaacd95e8f44cc0ce0e7/invoke.js';
      invokeScript.async = true;
      container.appendChild(invokeScript);
    }
  }, [position, isClient]);

  // Position-specific styles
  const positionStyles = {
    top: 'h-[90px] w-full max-w-[728px] mx-auto',
    sidebar: 'h-[250px] w-full max-w-[300px]',
    bottom: 'h-[50px] w-full max-w-[320px] mx-auto'
  };

  // Don't render until client-side to prevent hydration mismatch
  if (!isClient) {
    return (
      <div className={`flex items-center justify-center ${positionStyles[position]} ${className}`} />
    );
  }

  return (
    <div 
      ref={containerRef}
      className={`flex items-center justify-center ${positionStyles[position]} ${className}`}
    />
  );
}

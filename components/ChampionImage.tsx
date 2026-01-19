import React, { useState } from 'react';
import { getChampionImage, normalizeChampionName, type ImageSource } from '../lib/image-helper';

interface ChampionImageProps {
  name: string;
  cost?: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showCost?: boolean;
  source?: ImageSource;
}

export default function ChampionImage({
  name,
  cost,
  className = '',
  size = 'md',
  showCost = true,
}: ChampionImageProps) {
  const normalizedName = normalizeChampionName(name);
  const imgSrc = `https://cdn.metatft.com/file/metatft/champions/tft16_${normalizedName === 'luciansenna' ? 'lucian' : normalizedName}.png`;
  const [hasError, setHasError] = useState(false);
  console.log(imgSrc, normalizedName)
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };

  const costColors = {
    1: 'from-gray-600 to-gray-700',
    2: 'from-green-600 to-emerald-600',
    3: 'from-blue-600 to-cyan-600',
    4: 'from-purple-600 to-pink-600',
    5: 'from-yellow-600 to-orange-600'
  };

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div className={`relative rounded-lg overflow-hidden ${sizeClasses[size]} ${className}`}>
      {/* Champion Image */}
      {imgSrc && !hasError ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imgSrc}
          alt={name}
          className="w-full h-full object-cover bg-gradient-to-br from-gray-700 to-gray-800"
          crossOrigin="anonymous"
          onError={handleError}
          loading="lazy"
        />
      ) : (
        // Fallback placeholder only if all sources fail
        <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
          <span className="text-white text-xs font-bold text-center px-1">
            {name.split(' ').map(w => w[0]).join('')}
          </span>
        </div>
      )}

      {/* Cost Badge */}
      {showCost && cost && (
        <div
          className={`absolute bottom-0 right-0 px-1.5 py-0.5 text-white text-xs font-bold rounded-tl bg-gradient-to-br ${
            costColors[cost as keyof typeof costColors] || costColors[1]
          }`}
        >
          {cost}
        </div>
      )}

      {/* Border Glow */}
      <div className="absolute inset-0 border-2 border-gray-700 rounded-lg pointer-events-none" />
    </div>
  );
}

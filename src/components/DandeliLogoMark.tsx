import React from 'react';

interface DandeliLogoMarkProps {
  className?: string;
  variant?: 'light' | 'dark'; // 'dark' = white/mint mark on dark container; 'light' = dark forest green/emerald on light container
}

export const DandeliLogoMark: React.FC<DandeliLogoMarkProps> = ({
  className = 'w-full h-full',
  variant = 'dark',
}) => {
  // Brand palette:
  // Deep forest green: #0c2b20
  // Fresh mint green: #22c55e
  // Subtle warm cream: #fcfbf7
  const isDarkBadge = variant === 'dark';
  const figureColor = isDarkBadge ? '#fcfbf7' : '#0c2b20';
  const riverColor = isDarkBadge ? '#22c55e' : '#16a34a';
  const paddleColor = isDarkBadge ? '#22c55e' : '#1b533f';

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Dandeli Tours Kayaking Brand Emblem"
    >
      {/* 1. Flowing River Kali current underneath */}
      <path
        d="M 5 30.5 C 11.5 27.5, 19.5 34, 29 29.5 C 32 28.2, 35 29, 36.5 30"
        stroke={riverColor}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Secondary subtle water ripple */}
      <path
        d="M 12 34.5 C 17.5 33, 23 36, 29 34.2"
        stroke={riverColor}
        strokeOpacity={isDarkBadge ? '0.5' : '0.4'}
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {/* 2. Sleek hydrodynamic kayak hull */}
      <path
        d="M 5 24.5 C 11.5 27.2, 26 27.2, 34 23.8 C 28.5 28, 12 28.2, 5 24.5 Z"
        fill={figureColor}
      />

      {/* 3. Human Kayaker Figure: Head with athletic forward focus */}
      <circle cx="19.5" cy="11.2" r="2.6" fill={figureColor} />

      {/* Paddler Torso leaning gracefully into the paddle stroke */}
      <path
        d="M 17 14.5 C 18 14, 21.2 14.2, 22.2 16.5 C 22.8 18.2, 21.8 21, 21 24.5 H 17.5 C 16.2 21.5, 16 18.5, 17 14.5 Z"
        fill={figureColor}
      />

      {/* Athletic arms holding the paddle shaft */}
      <path
        d="M 17.5 15.5 L 12.8 12.5 M 20.8 17.8 L 24.8 21.8"
        stroke={figureColor}
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* 4. Kayak Paddle: Angled dynamic diagonal with twin blades */}
      <line
        x1="10"
        y1="9.5"
        x2="28"
        y2="26.5"
        stroke={paddleColor}
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      {/* Upper paddle blade (feathered in air) */}
      <path
        d="M 8.8 8 C 10.2 6.6, 12.4 8.2, 11.6 10.4 C 9.8 10, 8.2 9, 8.8 8 Z"
        fill={paddleColor}
      />
      {/* Lower paddle blade (slicing into river water) */}
      <path
        d="M 26.2 24.8 C 28.4 25.5, 29.8 27.6, 28.8 29 C 27.2 28.6, 25.5 26.6, 26.2 24.8 Z"
        fill={paddleColor}
      />
    </svg>
  );
};

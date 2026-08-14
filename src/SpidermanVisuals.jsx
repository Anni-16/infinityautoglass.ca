import React from 'react';

// Detailed Spider Web Corner Lineart SVG
export function SpiderWebCornerSVG() {
  return (
    <svg width="180" height="180" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0 L200 0" stroke="#334155" strokeWidth="2.5" opacity="0.4" />
      <path d="M0 0 L0 200" stroke="#334155" strokeWidth="2.5" opacity="0.4" />
      <path d="M0 0 L180 180" stroke="#334155" strokeWidth="2" opacity="0.4" />
      <path d="M0 0 L140 190" stroke="#334155" strokeWidth="1.5" opacity="0.3" />
      <path d="M0 0 L190 140" stroke="#334155" strokeWidth="1.5" opacity="0.3" />
      
      {/* Concentric Web Lines */}
      <path d="M 40 0 Q 35 35 0 40" stroke="#334155" strokeWidth="2" fill="none" opacity="0.5" />
      <path d="M 80 0 Q 70 70 0 80" stroke="#334155" strokeWidth="2" fill="none" opacity="0.5" />
      <path d="M 120 0 Q 105 105 0 120" stroke="#334155" strokeWidth="2" fill="none" opacity="0.5" />
      <path d="M 160 0 Q 140 140 0 160" stroke="#334155" strokeWidth="2" fill="none" opacity="0.5" />
      <path d="M 200 0 Q 170 170 0 200" stroke="#334155" strokeWidth="2" fill="none" opacity="0.5" />
    </svg>
  );
}

// Iconic Spider-Man Web-Swinging Action Visual SVG
export function SpidermanSwingingSVG({ className = '' }) {
  return (
    <svg viewBox="0 0 220 260" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Web Line */}
      <path d="M 190 0 L 110 110" stroke="#E2E8F0" strokeWidth="4" strokeDasharray="4 2" />
      <path d="M 190 0 L 110 110" stroke="#94A3B8" strokeWidth="2" />
      
      {/* Shadow */}
      <ellipse cx="110" cy="240" rx="45" ry="10" fill="#000000" opacity="0.15" />

      {/* Spider-Man Body Group */}
      <g transform="translate(10, 20) rotate(-15 100 100)">
        {/* Legs - Blue Suit */}
        <path d="M 80 140 Q 50 170 30 150 Q 20 130 40 110 Z" fill="#1E3A8A" stroke="#0F172A" strokeWidth="3" />
        <path d="M 120 130 Q 150 160 170 130 Q 180 100 150 100 Z" fill="#1E3A8A" stroke="#0F172A" strokeWidth="3" />
        
        {/* Red Boots */}
        <path d="M 30 150 L 15 180 L 40 185 Z" fill="#E63946" stroke="#0F172A" strokeWidth="3" />
        <path d="M 170 130 L 195 140 L 190 165 Z" fill="#E63946" stroke="#0F172A" strokeWidth="3" />

        {/* Torso - Red Center & Blue Sides */}
        <path d="M 70 80 C 60 100 65 130 85 140 L 115 140 C 135 130 140 100 130 80 Z" fill="#E63946" stroke="#0F172A" strokeWidth="3" />
        <path d="M 65 90 C 55 105 60 125 75 135 Z" fill="#1E3A8A" stroke="#0F172A" strokeWidth="2" />
        <path d="M 135 90 C 145 105 140 125 125 135 Z" fill="#1E3A8A" stroke="#0F172A" strokeWidth="2" />

        {/* Chest Spider Emblem */}
        <path d="M 100 100 L 95 108 L 100 112 L 105 108 Z" fill="#0F172A" />
        <path d="M 100 102 L 82 94 M 100 105 L 80 108 M 100 108 L 84 118 M 100 110 L 88 124" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 100 102 L 118 94 M 100 105 L 120 108 M 100 108 L 116 118 M 100 110 L 112 124" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />

        {/* Spider Suit Web Pattern Lines on Chest */}
        <path d="M 100 80 L 100 140 M 80 90 Q 100 100 120 90 M 75 110 Q 100 120 125 110 M 80 130 Q 100 135 120 130" stroke="#0F172A" strokeWidth="1.2" opacity="0.6" fill="none" />

        {/* Arms */}
        <path d="M 65 85 Q 40 70 30 40 Q 45 35 60 65 Z" fill="#E63946" stroke="#0F172A" strokeWidth="3" />
        <path d="M 135 85 Q 160 60 175 35 Q 185 45 150 75 Z" fill="#E63946" stroke="#0F172A" strokeWidth="3" />

        {/* Spider Mask / Head */}
        <ellipse cx="100" cy="55" rx="28" ry="34" fill="#E63946" stroke="#0F172A" strokeWidth="3.5" />
        
        {/* Head Web Grid */}
        <path d="M 100 21 L 100 89 M 72 55 L 128 55 M 78 35 L 122 75 M 78 75 L 122 35" stroke="#0F172A" strokeWidth="1.2" opacity="0.6" />
        <ellipse cx="100" cy="55" rx="14" ry="18" stroke="#0F172A" strokeWidth="1" fill="none" opacity="0.5" />

        {/* Iconic White Spider Eyes with Black Border */}
        <path d="M 80 48 Q 92 42 96 56 Q 86 64 78 56 Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="3.5" />
        <path d="M 120 48 Q 108 42 104 56 Q 114 64 122 56 Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="3.5" />
      </g>
    </svg>
  );
}

// Iconic Spider-Man Thumbs Up & Mask Pulled Up Vector SVG
export function SpidermanThumbsUpSVG({ className = '' }) {
  return (
    <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Spider-Man Character Group */}
      <g transform="translate(10, 10)">
        {/* Torso & Shoulders */}
        <path d="M 30 180 Q 70 140 120 140 Q 170 140 210 180 L 220 230 L 10 230 Z" fill="#E63946" stroke="#0F172A" strokeWidth="4" />
        
        {/* Blue Suit Side Accents */}
        <path d="M 30 180 Q 50 160 70 190 L 40 230 Z" fill="#1E3A8A" stroke="#0F172A" strokeWidth="3" />
        <path d="M 210 180 Q 190 160 170 190 L 200 230 Z" fill="#1E3A8A" stroke="#0F172A" strokeWidth="3" />

        {/* Chest Web Pattern Lines */}
        <path d="M 120 140 L 120 230 M 70 160 Q 120 175 170 160 M 60 190 Q 120 205 180 190 M 50 220 Q 120 235 190 220" stroke="#0F172A" strokeWidth="1.5" opacity="0.7" fill="none" />

        {/* Chest Spider Emblem */}
        <ellipse cx="120" cy="180" rx="8" ry="12" fill="#0F172A" />
        <path d="M 120 175 L 90 160 M 120 178 L 88 178 M 120 182 L 92 195 M 120 185 L 98 208" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
        <path d="M 120 175 L 150 160 M 120 178 L 152 178 M 120 182 L 148 195 M 120 185 L 142 208" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />

        {/* Spider Mask - Top Half (Pulled up above mouth) */}
        <path d="M 60 90 C 60 35 180 35 180 90 C 180 115 165 125 120 125 C 75 125 60 115 60 90 Z" fill="#E63946" stroke="#0F172A" strokeWidth="4" />

        {/* Mask Fold / Roll Bottom Edge */}
        <path d="M 55 115 Q 120 135 185 115" stroke="#0F172A" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M 58 118 Q 120 138 182 118" stroke="#D90429" strokeWidth="4" fill="none" />

        {/* Mask Web Pattern */}
        <path d="M 120 40 L 120 120 M 80 80 Q 120 90 160 80 M 70 55 Q 120 65 170 55 M 90 105 Q 120 115 150 105" stroke="#0F172A" strokeWidth="1.5" opacity="0.7" fill="none" />

        {/* Big White Spider Eyes with Black Outline */}
        <path d="M 75 75 Q 96 65 105 85 Q 90 98 75 88 Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="4" />
        <path d="M 165 75 Q 144 65 135 85 Q 150 98 165 88 Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="4" />

        {/* Revealed Face (Mouth & Smile underneath pulled mask) */}
        <path d="M 75 120 C 75 160 165 160 165 120 Z" fill="#FCA5A5" stroke="#0F172A" strokeWidth="3" />
        
        {/* Confident Smile & Teeth */}
        <path d="M 90 132 Q 120 152 150 132" stroke="#0F172A" strokeWidth="3.5" fill="#FFFFFF" strokeLinecap="round" />
        <path d="M 95 133 Q 120 142 145 133" fill="#FFFFFF" />

        {/* Thumbs Up Arm & Fist */}
        <g transform="translate(145, 110) rotate(-10)">
          {/* Arm Sleeve */}
          <path d="M 10 60 Q 30 30 50 40 L 40 80 Z" fill="#E63946" stroke="#0F172A" strokeWidth="3" />
          
          {/* Hand Glove */}
          <circle cx="55" cy="40" r="16" fill="#E63946" stroke="#0F172A" strokeWidth="3" />
          
          {/* Thumbs Up Finger */}
          <path d="M 50 35 Q 50 5 62 5 Q 72 5 68 35 Z" fill="#E63946" stroke="#0F172A" strokeWidth="3.5" />
          
          {/* Glove Webbing */}
          <path d="M 55 10 L 55 35" stroke="#0F172A" strokeWidth="1.5" />
        </g>
      </g>
    </svg>
  );
}

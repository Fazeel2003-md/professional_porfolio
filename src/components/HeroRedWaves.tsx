import React from 'react';

export const HeroRedWaves: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Top subtle center red indicator line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 sm:w-44 h-[2px] bg-gradient-to-r from-transparent via-[#FF1F48] to-transparent shadow-[0_0_12px_#FF1F48]" />

      {/* Primary Atmospheric Crimson Glow behind portrait (top-right quadrant) */}
      <div className="absolute -top-20 right-[-10%] sm:right-[5%] w-[500px] sm:w-[750px] h-[500px] sm:h-[700px] bg-gradient-to-br from-[#E50914]/25 via-[#9B0018]/18 to-transparent rounded-full blur-[110px] sm:blur-[140px] hero-ambient-pulse" />

      {/* Subtle secondary ambient glow at bottom-left */}
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] sm:w-[600px] h-[400px] bg-gradient-to-tr from-[#FF143C]/12 via-[#700010]/8 to-transparent rounded-full blur-[100px] hero-ambient-shift" />

      {/* Diagonal Cinematic Laser Rays / Speed Lines matching reference design */}
      <svg
        className="absolute inset-0 w-full h-full opacity-60"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="rayGrad1" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF1F48" stopOpacity="0.4" />
            <stop offset="40%" stopColor="#C70024" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#FF1F48" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="rayGrad2" x1="100%" y1="10%" x2="20%" y2="100%">
            <stop offset="0%" stopColor="#FF3355" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#E50914" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="rayGrad3" x1="90%" y1="0%" x2="40%" y2="80%">
            <stop offset="0%" stopColor="#FF1F48" stopOpacity="0.3" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Diagonal Ray 1 */}
        <line
          x1="105%"
          y1="5%"
          x2="45%"
          y2="95%"
          stroke="url(#rayGrad1)"
          strokeWidth="1.5"
          className="hero-ambient-pulse"
        />

        {/* Diagonal Ray 2 (subtle parallel streak) */}
        <line
          x1="95%"
          y1="-5%"
          x2="55%"
          y2="75%"
          stroke="url(#rayGrad2)"
          strokeWidth="1"
          strokeDasharray="8 12"
          className="hero-ambient-shift"
        />

        {/* Diagonal Ray 3 (sharp accent streak) */}
        <line
          x1="110%"
          y1="25%"
          x2="60%"
          y2="100%"
          stroke="url(#rayGrad3)"
          strokeWidth="2"
        />

        {/* Diagonal Ray 4 (accent across center bottom) */}
        <line
          x1="80%"
          y1="0%"
          x2="30%"
          y2="85%"
          stroke="url(#rayGrad1)"
          strokeWidth="1"
          opacity="0.3"
        />
      </svg>

      {/* Grid Pattern with subtle vignette */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '36px 36px'
        }}
      />
    </div>
  );
};

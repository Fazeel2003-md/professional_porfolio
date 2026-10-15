import React, { useState, useRef } from 'react';

interface PortraitCardProps {
  onOpenConnect?: () => void;
}

export const PortraitCard: React.FC<PortraitCardProps> = () => {
  const [imageError, setImageError] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Smooth 3D mouse parallax tilt following the user cursor (desktop only)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || (typeof window !== 'undefined' && window.innerWidth < 768)) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: -(y * 9), // Subtle vertical pitch (-4.5deg to +4.5deg)
      y: x * 9,    // Subtle horizontal yaw (-4.5deg to +4.5deg)
    });
  };

  const handleMouseEnter = () => {
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[440px] lg:max-w-[540px] xl:max-w-[600px] mx-auto select-none flex items-center justify-center animate-hero-portrait-levitate cursor-pointer"
      style={{ perspective: 1200 }}
    >
      {/* Multi-layer volumetric crimson backlight behind the neon frame */}
      <div className="absolute inset-x-[15%] inset-y-[10%] bg-[#FF1F48]/25 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none -z-10 hero-ambient-pulse" />
      <div className="absolute inset-0 -top-8 -bottom-8 bg-gradient-to-t from-[#9B0018]/25 via-[#E50914]/20 to-transparent rounded-full blur-[110px] sm:blur-[140px] pointer-events-none -z-10 hero-ambient-pulse" />

      {/* Portrait container — square aspect matching 1024x1024 master portrait with 3D Parallax */}
      <div
        className="relative w-full aspect-square flex items-center justify-center overflow-visible"
        style={{
          transform: isHovered
            ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)`
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transformStyle: 'preserve-3d',
          transition: isHovered
            ? 'transform 0.12s cubic-bezier(0.2, 0, 0, 1)'
            : 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {!imageError ? (
          <div 
            className="relative w-full h-full flex items-center justify-center pointer-events-none"
            style={{
              WebkitMaskImage: 'radial-gradient(circle at center, black 65%, transparent 98%)',
              maskImage: 'radial-gradient(circle at center, black 65%, transparent 98%)',
            }}
          >
            {/* Seamless Portrait with signature tilted neon-red frame */}
            <img
              src="/hero_portrait_neon_frame.png"
              alt="Fazeel - AI/ML Engineer & UI/UX Designer"
              className="relative z-10 w-full h-full object-contain pointer-events-none select-none"
              onError={() => setImageError(true)}
              loading="eager"
            />
          </div>
        ) : (
          <div className="w-full h-[420px] flex flex-col items-center justify-center bg-[#100407] border border-red-500/30 rounded-2xl text-red-400 font-mono text-xs z-10 space-y-2">
            <span className="font-orbitron text-lg font-bold text-white tracking-widest">FAZEEL</span>
            <span className="text-zinc-400 text-[11px]">AI/ML Engineer &amp; UI/UX Designer</span>
          </div>
        )}
      </div>
    </div>
  );
};

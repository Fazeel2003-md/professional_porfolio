import React from 'react';
import { ShieldCheck, ArrowRight, Zap, Compass } from 'lucide-react';

interface QDeltaProps {
  onOpenConnect?: () => void;
}

export const QDelta: React.FC<QDeltaProps> = ({ onOpenConnect }) => {
  const qdeltaProducts = [
    {
      badge: 'COMPANY PLATFORM',
      title: 'QDELTA WEBSITE',
      description:
        'The digital home of QDelta Technologies, engineered to showcase our capabilities and client solutions.',
      icon: (
        <svg
          className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 8V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3" />
          <rect x="8" y="8" width="14" height="13" rx="2" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
        </svg>
      ),
    },
    {
      badge: 'INTERNAL PLATFORM',
      title: 'QDELTA CRM',
      description:
        'A custom internal business management platform built to power team workflows and client pipelines.',
      icon: <Zap className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors shrink-0" />,
    },
    {
      badge: 'DEVELOPER PLATFORM',
      title: 'WEB TOOL FINDER',
      description:
        'A curated developer platform designed to help engineers discover useful web utilities faster.',
      icon: <Compass className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors shrink-0" />,
    },
  ];

  return (
    <section id="qdelta" className="pt-14 sm:pt-16 lg:pt-20 pb-20 sm:pb-24 lg:pb-28 border-t border-white/5 relative bg-[#070104] overflow-hidden">
      {/* Background ambient crimson glow accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-red-600/[0.06] rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(255,31,72,0.06),transparent_70%)] pointer-events-none -z-10" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 sm:pb-5 border-b border-white/5">
          <div className="flex flex-wrap items-center gap-3 sm:gap-6">
            <h2 className="font-oswald text-base sm:text-xl md:text-2xl font-bold tracking-wider uppercase inline-flex items-center gap-2">
              <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]">QDELTA</span>
              <span className="text-red-500 drop-shadow-[0_0_14px_rgba(220,20,20,0.85)]">TECHNOLOGIES</span>
            </h2>
            <div className="relative group overflow-hidden inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-red-500/80 bg-gradient-to-b from-[#240505] via-[#120202] to-[#0a0101] text-[10px] sm:text-xs font-oswald tracking-wider text-[#E4E4E7] shadow-[0_0_22px_rgba(220,20,20,0.35),inset_0_0_12px_rgba(220,20,20,0.2)] backdrop-blur-md flex-wrap">
              {/* Top red specular highlight border rim */}
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-red-400 to-transparent pointer-events-none z-10" />

              {/* Radiant Red Background Shining Light Pool */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,20,20,0.42),transparent_70%)] pointer-events-none" />

              {/* Luminous Glass Surface Sheen */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] via-transparent to-transparent pointer-events-none rounded-full" />

              {/* Ambient Glowing Red Shimmer Sweep */}
              <div className="absolute -inset-x-full inset-y-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent animate-pulse pointer-events-none" />

              <span className="relative z-10 text-zinc-200">LAUNCHED SEPTEMBER 2026</span>
              <span className="relative z-10 text-red-500 font-bold">·</span>
              <div className="relative z-10 flex items-center gap-1.5 text-red-500">
                <ShieldCheck className="w-3.5 h-3.5 text-red-500 shrink-0 drop-shadow-[0_0_8px_rgba(220,20,20,0.8)]" />
                <span className="text-white font-bold drop-shadow-[0_0_6px_rgba(255,255,255,0.25)]">UDYAM REGISTERED</span>
              </div>
            </div>
          </div>
        </div>

        {/* Value Proposition & Initiatives in the new form */}
        <div className="pt-4 sm:pt-5 max-w-4xl space-y-3 sm:space-y-4">
          <h3 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-tight">
            Designing, Developing &amp; Scaling Digital Experiences
          </h3>

          <div className="font-sans text-sm sm:text-base md:text-lg text-zinc-400 font-normal leading-relaxed space-y-1">
            <p>
              As Co-Founder and AI Developer, I lead QDelta’s design and technology initiatives
            </p>
            <p className="sm:pl-16 md:pl-20 text-zinc-400">
              — creating user-focused interfaces, reliable digital systems, and AI-driven solutions.
            </p>
          </div>
        </div>

        {/* Bento Card: Building the technology behind QDelta with shining red border (compact height) */}
        <div className="mt-8 sm:mt-10 rounded-[24px] p-[1.5px] relative overflow-hidden shining-red-card">
          {/* Base Red Glowing Border */}
          <div className="absolute inset-0 rounded-[24px] bg-red-600/60 pointer-events-none" />

          {/* Dynamic Shining Light Beam traveling along the border */}
          <div className="absolute -inset-[150%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_65deg,#FF1F48_115deg,#FFFFFF_150deg,#FF1F48_185deg,transparent_235deg,transparent_360deg)] animate-spin-border opacity-95 pointer-events-none" />

          {/* Secondary ambient glow layer */}
          <div className="absolute inset-0 rounded-[24px] bg-gradient-to-r from-red-600/30 via-rose-500/40 to-red-600/30 blur-[2px] pointer-events-none" />

          {/* Card Inner Body */}
          <div className="relative rounded-[22.5px] bg-[#0E0E12] py-5 px-6 sm:py-6 sm:px-8 lg:px-10 lg:py-6 z-10 shadow-[inset_0_0_30px_rgba(255,31,72,0.08)] overflow-hidden">
            {/* Subtle internal red ambient glow spot */}
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-red-600/[0.06] rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Left Content Column */}
              <div className="md:col-span-7 lg:col-span-8 space-y-3 sm:space-y-3.5">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/25 bg-red-500/[0.06] text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 shadow-[0_0_8px_rgba(255,31,72,0.85)]" />
                  <span>CO-FOUNDER · DEVELOPER</span>
                </div>

                {/* Title */}
                <h4 className="font-sans text-xl sm:text-2xl lg:text-[28px] font-bold text-white tracking-tight leading-snug">
                  Building the technology behind QDelta
                </h4>

                {/* Description */}
                <p className="font-sans text-zinc-400 text-xs sm:text-sm lg:text-[15px] font-normal leading-relaxed">
                  I co-founded QDelta and lead the development of our digital products.
                </p>

                {/* Horizontal Divider */}
                <div className="w-full border-t border-white/10 pt-3 sm:pt-4" />

                {/* Metrics / Stats */}
                <div className="flex items-center gap-6 sm:gap-8">
                  <div>
                    <div className="font-sans text-2xl sm:text-3xl font-bold text-white tracking-tight leading-none mb-1">
                      03
                    </div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                      PRODUCTS
                    </div>
                  </div>

                  <div className="w-px h-7 bg-white/10" />

                  <div>
                    <div className="font-sans text-2xl sm:text-3xl font-bold text-white tracking-tight leading-none mb-1">
                      2026
                    </div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                      FOUNDED
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Portrait Column */}
              <div className="md:col-span-5 lg:col-span-4 flex justify-center md:justify-end">
                <div className="relative w-full max-w-[200px] sm:max-w-[220px] lg:max-w-[240px] h-[190px] sm:h-[220px] lg:h-[240px] rounded-[18px] overflow-hidden border border-red-500/20 bg-zinc-900/60 shadow-2xl">
                  <img
                    src="/qdelta_portrait.jpg"
                    alt="Fazeel - Co-Founder & Developer at QDelta"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/original_portrait.png';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Section: Three products. One direction. */}
        <div className="mt-14 sm:mt-16 md:mt-20">
          <div className="space-y-2 mb-8 sm:mb-10">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 font-semibold block">
              PRODUCTS
            </span>
            <h3 className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
              Three products. One direction.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
            {qdeltaProducts.map((prod, idx) => (
              <div
                key={prod.title}
                className="relative rounded-2xl sm:rounded-[24px] p-[1.5px] overflow-hidden group hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col shadow-[0_10px_35px_-10px_rgba(0,0,0,0.8)]"
              >
                {/* Base white glass boundary rim */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-[24px] bg-white/[0.12] pointer-events-none transition-colors duration-300 group-hover:bg-white/[0.22]" />

                {/* Animated Luminous Boundary Glow (Strictly along the boundary: Red & Orange only) */}
                <div
                  className="absolute -inset-[150%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_60deg,#FF1F48_105deg,#FF5500_145deg,#FF8C00_175deg,#FF3B00_210deg,#FF1F48_240deg,transparent_280deg,transparent_360deg)] animate-spin-border opacity-45 blur-[5px] group-hover:opacity-80 transition-opacity duration-300 pointer-events-none"
                  style={{ animationDuration: '6s', animationDelay: `${idx * -2}s` }}
                />

                {/* Animated Sharp Boundary Beam (Strictly Red & Orange only, no blue) */}
                <div
                  className="absolute -inset-[150%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_60deg,#FF1F48_105deg,#FF3D00_125deg,#FF6B00_150deg,#FFA000_175deg,#FF4500_205deg,#FF1F48_235deg,transparent_275deg,transparent_360deg)] animate-spin-border opacity-85 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ animationDuration: '6s', animationDelay: `${idx * -2}s` }}
                />

                {/* White Frosted Glass Inner Body (Completely protects interior from color bleeding) */}
                <div className="relative w-full h-full rounded-[14.5px] sm:rounded-[22.5px] bg-gradient-to-b from-[#161622]/90 via-[#0F0F17]/85 to-[#0A0A0F]/92 backdrop-blur-2xl p-6 sm:p-7 md:p-8 flex flex-col justify-between z-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.22),inset_0_0_25px_rgba(255,255,255,0.03)] overflow-hidden">
                  {/* Frosted White Specular Light Reflection Across Top */}
                  <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/[0.09] via-white/[0.02] to-transparent pointer-events-none rounded-t-[22.5px]" />
                  {/* Subtle Corner Glass Ambient Flare */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/[0.05] rounded-full blur-2xl pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full border border-white/20 bg-white/[0.06] backdrop-blur-md text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-zinc-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]">
                        {prod.badge}
                      </span>
                      <div className="p-2 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm group-hover:border-white/25 group-hover:bg-white/[0.08] transition-all duration-300">
                        {prod.icon}
                      </div>
                    </div>

                    <h4 className="font-sans text-xl sm:text-2xl font-bold text-white tracking-tight mt-6 mb-3 uppercase">
                      {prod.title}
                    </h4>

                    <p className="font-sans text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
                      {prod.description}
                    </p>
                  </div>

                  <div className="relative z-10 border-t border-white/10 pt-5 mt-auto">
                    <button
                      onClick={onOpenConnect}
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-300 group-hover:text-white transition-colors cursor-pointer"
                    >
                      <span>VIEW PROJECT</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

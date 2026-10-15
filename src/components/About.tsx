import React from 'react';
import { Brain, Layers, PenTool } from 'lucide-react';

export const About: React.FC = () => {
  const cards = [
    {
      icon: Brain,
      titleWhite: "AI / ",
      titleRed: "ML",
      bullets: ["LLMs · Agents", "Computer Vision", "ML Systems"]
    },
    {
      icon: Layers,
      titleWhite: "",
      titleRed: "SYSTEMS",
      bullets: ["Architecture", "APIs · Backend", "Distributed Systems"]
    },
    {
      icon: PenTool,
      titleWhite: "PRODUCT ",
      titleRed: "DESIGN",
      bullets: ["UI/UX · Prototypes", "Design Systems", "Human-centered UX"]
    },
    {
      icon: "qdelta",
      titleWhite: "BUILDING @ ",
      titleRed: "QDELTA",
      bullets: ["AI Products", "Innovation", "Co-Founder"]
    }
  ];

  return (
    <section id="about" className="pt-20 sm:pt-24 lg:pt-28 pb-14 sm:pb-16 lg:pb-20 border-t border-white/5 relative overflow-hidden bg-[#070204]">
      {/* Subtle ambient glow in background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-red-600/10 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">

        {/* Main Content Card */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-[#0C0C10] border border-white/10 p-4 sm:p-8 md:p-10 lg:p-12 pb-8 sm:pb-20 md:pb-22 lg:pb-24 shadow-2xl shadow-black/60 overflow-hidden">
          {/* Subtle top gradient accent */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-red-600 via-rose-500 to-red-400" />

          {/* Bio paragraph */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed font-light text-balance text-center max-w-5xl mx-auto">
            I’m <strong className="text-white font-semibold">Fazeel</strong>, an{' '}
            <span className="text-red-400 font-medium">AI/ML Engineer</span>,{' '}
            <span className="text-white font-medium">UI/UX Designer</span>, and{' '}
            <span className="text-white font-medium">
              Co-Founder of <span className="text-red-500 font-semibold">QDelta</span>
            </span>
            . I build intelligent applications using{' '}
            <span className="text-zinc-100 font-medium">Generative AI, LLMs, RAG, Agentic AI, and Python</span>
            , combining engineering and design to create practical, intuitive, and engaging digital experiences.
          </p>

          {/* 4 Focus Cards from Reference Images */}
          <div className="mt-8 sm:mt-10 py-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {cards.map((card, idx) => {
              const Icon = card.icon;
              const isGroupA = idx === 0 || idx === 2; // Group A: Card 1 & Card 3
              return (
                <div
                  key={idx}
                  className={`relative ${isGroupA ? 'card-float-group-a' : 'card-float-group-b'}`}
                >
                  {/* Subtle Red Ambient Glow Backdrop behind and slightly around the active card */}
                  <div
                    className={`card-ambient-aura ${isGroupA ? 'card-ambient-glow-a' : 'card-ambient-glow-b'} mobile-card-glow-pulse`}
                    style={{ animationDelay: `${idx * 1.2}s` }}
                    aria-hidden="true"
                  />

                  {/* Card Body */}
                  <div
                    className={`group relative p-6 sm:p-7 pb-7 sm:pb-8 min-h-[250px] sm:min-h-[270px] rounded-2xl bg-gradient-to-b from-[#14060a] via-[#0a070c] to-[#070508] border border-red-500/80 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden active:scale-[0.98] ${
                      isGroupA ? 'card-surface-glow-a' : 'card-surface-glow-b'
                    }`}
                  >
                    {/* Mobile-Exclusive Professional Laser Sweep & Metallic Specular Sheen (hidden on sm: and up) */}
                    <div className="block sm:hidden pointer-events-none" aria-hidden="true">
                      {/* Top Border Laser Beam Sweep */}
                      <div className="absolute top-0 inset-x-0 h-[2px] overflow-hidden rounded-t-2xl z-20 pointer-events-none">
                        <div
                          className="mobile-card-laser-beam"
                          style={{ animationDelay: `${idx * 1.2}s` }}
                        />
                      </div>

                      {/* Diagonal Metallic Specular Sweep */}
                      <div
                        className="mobile-card-specular-sweep"
                        style={{ animationDelay: `${idx * 1.2}s` }}
                      />
                    </div>

                    {/* Lite background shining layers */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-32 bg-red-500/20 rounded-full blur-2xl pointer-events-none group-hover:bg-red-500/35 transition-all duration-500" />
                    <div className="absolute top-0 right-0 w-28 h-28 bg-[radial-gradient(circle_at_top_right,rgba(255,31,72,0.25),transparent_70%)] pointer-events-none" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(255,45,80,0.12),transparent_75%)] pointer-events-none group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Top diagonal red slash */}
                    <span className="absolute top-4 right-4 z-10 w-4 h-0.5 bg-red-500 rotate-45 pointer-events-none rounded-full shadow-[0_0_6px_rgba(255,31,72,0.8)]" />

                    <div className="relative z-10">
                      {/* Icon Badge */}
                      <div className="w-12 h-12 rounded-xl bg-[#140E14] border border-red-500/60 flex items-center justify-center text-red-500 shadow-[0_0_14px_rgba(255,31,72,0.25)]">
                        {typeof Icon === 'string' ? (
                          /* QDelta stylized hex logo matching screenshot */
                          <svg
                            className="w-6 h-6 text-red-500"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M12 2l7 4v8l-7 4-7-4V6z" />
                            <path d="M14 14l3.5 3.5" />
                          </svg>
                        ) : (
                          <Icon className="w-6 h-6 text-red-500" />
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold font-display tracking-tight mt-5">
                        {card.titleWhite && <span className="text-white">{card.titleWhite}</span>}
                        <span className="text-[#FF1F48]">{card.titleRed}</span>
                      </h3>

                      {/* Red line indicator */}
                      <div className="w-7 h-[2px] bg-red-500 mt-2 mb-4 rounded-full shadow-[0_0_6px_rgba(255,31,72,0.7)]" />

                      {/* Bullet Points */}
                      <ul className="space-y-2.5">
                        {card.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300 font-sans">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_6px_rgba(255,31,72,0.9)] shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

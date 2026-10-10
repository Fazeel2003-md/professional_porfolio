import React, { useState } from 'react';
import { Layout, Palette, Sparkles, Smartphone, Monitor, Figma } from 'lucide-react';

export const DesignShowcase: React.FC = () => {
  const [activeTokenTab, setActiveTokenTab] = useState<'tokens' | 'philosophy' | 'interaction'>('tokens');

  return (
    <section id="design" className="py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-red-500 uppercase font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span>05. Product & Visual Craft</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            UI/UX DESIGN & INTERFACE SYSTEMS.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 font-light">
            A rare dual-track capability: architecting high-scale machine learning backends while designing tactile, accessible Figma and Framer interfaces.
          </p>
        </div>

        {/* 3-Column Design Philosophy Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Figma Design Systems */}
          <div className="p-7 rounded-2xl bg-[#0D0D14] border border-white/5 space-y-4 hover:border-red-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-400">
              <Figma className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-white">
              Figma Systems & Auto-Layout
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
              Tokenized component libraries structured with strict 4px/8px spatial grids, auto-layout variants, accessible WCAG AA color contrast, and seamless developer handoff tokens.
            </p>
            <div className="pt-2 text-xs font-mono text-red-400">
              Auto-Layout · Design Tokens · Component Variants
            </div>
          </div>

          {/* Card 2: Framer Production Sites */}
          <div className="p-7 rounded-2xl bg-[#0D0D14] border border-white/5 space-y-4 hover:border-red-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-400">
              <Layout className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-white">
              Framer Micro-Interactions
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
              Fluid, compositor-driven motion with sub-200ms spring physics, magnetic buttons, refined scroll triggers, and responsive viewports tailored for mobile and ultra-wide screens.
            </p>
            <div className="pt-2 text-xs font-mono text-red-400">
              Spring Physics · Parallax · Responsive Breakpoints
            </div>
          </div>

          {/* Card 3: Human-AI Experience (HAIX) */}
          <div className="p-7 rounded-2xl bg-[#0D0D14] border border-white/5 space-y-4 hover:border-red-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-white">
              Human-AI Interface Design
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
              Designing interfaces for probabilistic models: visual attribution chips, confidence intervals, streaming token reveals, and graceful fallback states when models fail.
            </p>
            <div className="pt-2 text-xs font-mono text-red-400">
              Grounded Citations · Streaming UX · Error States
            </div>
          </div>
        </div>

        {/* Interactive Design System Token Inspector */}
        <div className="p-8 rounded-2xl bg-[#0A0A0E] border border-red-500/20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/5">
            <div>
              <span className="text-xs font-mono text-red-500 uppercase font-semibold">Living Design System Tokens</span>
              <h4 className="text-lg font-bold text-white font-display">
                Controlled Palette & Geometric Rhythm
              </h4>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTokenTab('tokens')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                  activeTokenTab === 'tokens' ? 'bg-red-600 text-white' : 'bg-white/5 text-zinc-400 hover:text-white'
                }`}
              >
                Color System (60-30-10)
              </button>
              <button
                onClick={() => setActiveTokenTab('philosophy')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                  activeTokenTab === 'philosophy' ? 'bg-red-600 text-white' : 'bg-white/5 text-zinc-400 hover:text-white'
                }`}
              >
                Typography & Radius
              </button>
            </div>
          </div>

          {activeTokenTab === 'tokens' ? (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs">
              {/* 60% Canvas */}
              <div className="space-y-2 p-4 rounded-xl bg-black border border-white/5">
                <div className="h-12 rounded-lg bg-[#08080A] border border-white/10 flex items-center justify-center text-zinc-400">
                  #08080A
                </div>
                <div className="space-y-0.5">
                  <p className="text-white font-bold">60% Canvas Neutral</p>
                  <p className="text-zinc-500 text-[11px]">Deep obsidian void eliminating visual eye fatigue.</p>
                </div>
              </div>

              {/* 30% Structural */}
              <div className="space-y-2 p-4 rounded-xl bg-black border border-white/5">
                <div className="h-12 rounded-lg bg-[#0E0E14] border border-white/10 flex items-center justify-center text-zinc-400">
                  #0E0E14
                </div>
                <div className="space-y-0.5">
                  <p className="text-white font-bold">30% Structural Surface</p>
                  <p className="text-zinc-500 text-[11px]">Subtle elevated cards with 1px hairline boundaries.</p>
                </div>
              </div>

              {/* 10% Accent */}
              <div className="space-y-2 p-4 rounded-xl bg-black border border-white/5">
                <div className="h-12 rounded-lg bg-red-600 flex items-center justify-center text-white font-bold">
                  #DC2626 (Crimson)
                </div>
                <div className="space-y-0.5">
                  <p className="text-white font-bold">10% Focused Accent</p>
                  <p className="text-zinc-500 text-[11px]">High-intent energy concentrated solely at action points.</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-xs">
              <div className="p-4 rounded-xl bg-black border border-white/5 space-y-2">
                <p className="text-red-400 font-bold uppercase">Display Font: Syne / Condensed</p>
                <p className="text-white text-lg font-display font-extrabold tracking-tight">
                  THE FUTURE BELONGS TO DETERMINISTIC AI.
                </p>
                <p className="text-zinc-500 text-[11px]">
                  Paired with Plus Jakarta Sans body type for high-retention readability.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black border border-white/5 space-y-2">
                <p className="text-red-400 font-bold uppercase">Corner Radius Scale: 12px–16px</p>
                <div className="flex gap-3 pt-2">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-[10px]">
                    12px
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-[10px]">
                    16px
                  </div>
                  <div className="w-12 h-12 rounded-3xl bg-white/10 border border-white/10 flex items-center justify-center text-[10px]">
                    24px
                  </div>
                </div>
                <p className="text-zinc-500 text-[11px] pt-1">
                  Disciplined geometric corner curves following Apple and editorial studio standards.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

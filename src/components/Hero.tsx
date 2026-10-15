import React from 'react';
import { ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react';
import { PortraitCard } from './PortraitCard';
import { HeroRedWaves } from './HeroRedWaves';

interface HeroProps {
  onOpenConnect: () => void;
}

const CORE_FOCUS_SKILLS = [
  { primary: 'LLMs', secondary: 'RAG' },
  { primary: 'FastAPI', secondary: 'Python' },
  { primary: 'PyTorch', secondary: 'XGBoost' },
  { primary: 'ChromaDB', secondary: 'Groq' },
  { primary: 'Figma', secondary: 'UX' },
];

const SkillsTickerUnit: React.FC = () => (
  <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0 whitespace-nowrap">
    {CORE_FOCUS_SKILLS.map((skill, idx) => (
      <React.Fragment key={idx}>
        <div className="group/item inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950/70 border border-zinc-800/80 hover:border-[#FF1F48]/80 hover:bg-zinc-900/90 hover:shadow-[0_0_16px_rgba(255,31,72,0.4)] transition-all duration-300 cursor-default">
          {/* Glowing neon crimson micro beacon */}
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF1F48] shadow-[0_0_7px_#FF1F48] group-hover/item:scale-125 transition-transform" />
          
          {/* Animated color wave text */}
          <span className="font-mono text-xs sm:text-[13px] font-medium tracking-wide">
            <span className="text-zinc-100 group-hover/item:text-white transition-colors">
              {skill.primary}
            </span>{' '}
            <span className="text-[#FF1F48] font-bold drop-shadow-[0_0_6px_rgba(255,31,72,0.85)]">
              &amp;
            </span>{' '}
            <span className="animate-ticker-color-wave font-semibold">
              {skill.secondary}
            </span>
          </span>
        </div>

        {/* Illuminated Cyber Slash Separator */}
        <span className="font-mono text-xs sm:text-[13px] text-[#FF1F48]/80 font-bold select-none drop-shadow-[0_0_8px_rgba(255,31,72,0.7)] px-1 sm:px-1.5">
          /
        </span>
      </React.Fragment>
    ))}
  </div>
);

export const Hero: React.FC<HeroProps> = ({ onOpenConnect }) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] lg:min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 flex flex-col justify-center overflow-hidden bg-[#020002] px-4 sm:px-8 lg:px-12"
    >
      {/* Cinematic Red Volumetric Laser Rays & Atmospheric Ambient Background */}
      <HeroRedWaves />

      {/* Main Hero Container matching EXACT Navbar start to end boundaries (max-w-[1360px] mx-auto) */}
      <div className="relative z-10 w-full max-w-[1360px] mx-auto flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content, Headings & CTAs (7 columns) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-7">
            
            {/* Top Eyebrow Label matching reference image with live beacon & animated red accents */}
            <div className="relative group/eyebrow inline-flex items-center gap-2 pb-1 max-w-full flex-wrap">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF1F48] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF1F48] shadow-[0_0_8px_#FF1F48]"></span>
              </span>
              <span className="font-revalia text-[10.5px] xs:text-xs sm:text-[13px] md:text-sm tracking-wide uppercase text-white select-none leading-snug">
                DESIGN AND DEVELOP{' '}
                <span className="text-[#FF1F48] animate-eyebrow-red font-semibold">
                  AI SOLUTIONS
                </span>{' '}
                WITH{' '}
                <span className="text-[#FF1F48] animate-eyebrow-red font-semibold">
                  FAZEEL
                </span>
              </span>
              {/* Subtle scanning laser line under the eyebrow */}
              <div className="absolute -bottom-0.5 inset-x-0 h-[1.5px] bg-zinc-800/80 overflow-hidden rounded-full">
                <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#FF1F48] to-transparent animate-laser-scan-underline" />
              </div>
            </div>

            {/* Main Headline - Orbitron Modern Typography with Specular Shimmer & Neon Pulse */}
            <div className="space-y-1 sm:space-y-1.5 group/headline cursor-default select-none">
              <h1 className="font-orbitron font-extrabold text-[27px] xs:text-3xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4.5rem] tracking-tight leading-[1.1]">
                <span className="animate-headline-white-shimmer inline-block hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.7)] transition-all duration-300">
                  AI/ML Engineer
                </span>
              </h1>
              <h2 className="font-orbitron font-extrabold text-[27px] xs:text-3xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4.5rem] tracking-tight leading-[1.1] sm:whitespace-nowrap">
                <span className="text-white">&amp; </span>
                <span className="animate-headline-crimson inline-block hover:scale-[1.01] transition-transform duration-300">
                  UI/UX Designer
                </span>
              </h2>
            </div>

            {/* Co-Founder @ QDelta Tag matching reference image */}
            <div className="flex items-center gap-2 font-mono text-xs sm:text-sm tracking-wide">
              <span className="text-[#FF1F48] text-base leading-none select-none">•</span>
              <span className="text-white font-medium">Co-Founder</span>
              <span className="text-[#FF1F48] font-semibold">@ QDelta</span>
            </div>

            {/* Description / Subtitle */}
            <p className="text-xs sm:text-base text-zinc-400 font-light leading-relaxed max-w-lg">
              I build intelligent GenAI systems, robust FastAPI backends, and sleek visual interfaces.
            </p>

            {/* Primary Action Buttons with Red-to-Black and Black-to-Red Scrolling Animations */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              {/* Button 1: Red to Black scrolling animation */}
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl btn-scroll-red-to-black text-white font-semibold text-xs sm:text-sm tracking-wide hover:-translate-y-0.5 active:translate-y-0 cursor-pointer overflow-hidden text-center min-h-[44px]"
              >
                {/* Luminous light sweep sheen */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
                  <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-btn-sheen" />
                </div>
                <span className="relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">View My Work</span>
                <ArrowRight className="relative z-10 w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" />
              </a>

              {/* Button 2: Black to Red scrolling animation */}
              <button
                type="button"
                onClick={onOpenConnect}
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl btn-scroll-black-to-red text-zinc-100 hover:text-white font-medium text-xs sm:text-sm tracking-wide backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer overflow-hidden text-center min-h-[44px]"
              >
                {/* Luminous light sweep sheen (vice-versa reverse direction) */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
                  <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent animate-btn-sheen-reverse" />
                </div>
                <span className="relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">Let's Connect</span>
                <ArrowUpRight className="relative z-10 w-4 h-4 text-zinc-300 group-hover:text-red-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
              </button>
            </div>

          </div>

          {/* Right Column: Hero Cinematic Cybernetic Portrait (5 columns) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center xl:pr-14 2xl:pr-16">
            <PortraitCard onOpenConnect={onOpenConnect} />
          </div>

        </div>

        {/* Single Straight Horizontal Scrolling Ticker: Spanning from below 'View My Work' button across to below the image */}
        <div 
          className="relative w-full mt-8 sm:mt-10 lg:mt-12 pt-3 sm:pt-4 border-t border-zinc-800/80 flex items-center select-none overflow-hidden"
          aria-label="Core Focus Skills Ticker"
        >
          {/* Ambient Laser Horizon Line along the top border */}
          <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#FF1F48]/60 to-transparent animate-laser-edge-pulse pointer-events-none" />

          {/* Fixed Left Section: Core Focus: (with live pulsating beacon & glowing divider) */}
          <div className="flex-shrink-0 z-20 flex items-center pr-3.5 sm:pr-4 bg-[#020002]">
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-zinc-950 border border-zinc-800/90 shadow-[0_0_12px_rgba(0,0,0,0.8)]">
              {/* Pulsing Live Beacon Indicator */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF1F48] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF1F48] shadow-[0_0_8px_#FF1F48]"></span>
              </span>
              <span className="font-mono text-xs sm:text-[13px] text-zinc-100 font-semibold tracking-wider whitespace-nowrap select-none">
                Core Focus<span className="text-[#FF1F48] animate-pulse">:</span>
              </span>
            </div>

            {/* Illuminated Vertical Divider Line | */}
            <div className="w-[1.5px] h-5 bg-gradient-to-b from-[#FF1F48] via-[#FF1F48]/70 to-transparent shadow-[0_0_8px_#FF1F48] ml-3 sm:ml-4" />
          </div>

          {/* Scrolling Skills Viewport extending all the way across to below the image */}
          <div className="relative flex-1 overflow-hidden">
            {/* Soft edge fade masks on left and right */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-[#020002] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-[#020002] to-transparent z-10" />

            <div className="flex w-max animate-hero-marquee items-center whitespace-nowrap">
              {/* Track 1 */}
              <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0 whitespace-nowrap pr-3 sm:pr-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <SkillsTickerUnit key={`t1-${i}`} />
                ))}
              </div>

              {/* Track 2 (duplicate for seamless infinite loop) */}
              <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0 whitespace-nowrap pr-3 sm:pr-4" aria-hidden="true">
                {Array.from({ length: 4 }).map((_, i) => (
                  <SkillsTickerUnit key={`t2-${i}`} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Far Right Edge: Minimal Right-Side Vertical Indicator aligned to EXACT right end point of Navbar */}
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="hidden xl:flex absolute right-0 top-1/2 -translate-y-1/2 flex-col items-center gap-7 2xl:gap-8 z-20 pointer-events-auto cursor-pointer select-none group transition-all duration-300 hover:scale-105"
        >
          {/* Rotated Branding Text with Continuous Cybernetic Sheen Wave */}
          <div className="[writing-mode:vertical-rl] text-xs 2xl:text-[13px] font-mono tracking-[0.42em] uppercase font-semibold">
            <span className="animate-vertical-text-shimmer group-hover:drop-shadow-[0_0_10px_rgba(255,31,72,0.9)]">
              AI UI/UX / INNOVATION
            </span>
          </div>

          {/* Dynamic Neon Laser Vertical Accent Line with Dropping Photon Beam */}
          <div className="relative w-[2.5px] 2xl:w-[3px] h-12 bg-zinc-900 rounded-full overflow-hidden animate-laser-line-pulse">
            <div className="absolute inset-0 bg-[#FF1F48] opacity-85 shadow-[0_0_10px_#FF1F48]" />
            <div className="absolute inset-x-0 h-6 bg-gradient-to-b from-transparent via-white to-transparent animate-laser-beam-drop" />
          </div>

          {/* Minimalist Mouse Icon & Synchronized Downward Chevron */}
          <div className="flex flex-col items-center gap-2 pt-1 animate-vertical-float-gentle">
            {/* Mouse Outer Capsule (Enlarged) */}
            <div className="w-[22px] 2xl:w-[24px] h-[36px] 2xl:h-[40px] rounded-full border-[1.5px] border-zinc-600/90 group-hover:border-[#FF1F48] bg-black/60 backdrop-blur-sm flex justify-center pt-2 shadow-[0_0_14px_rgba(0,0,0,0.9)] group-hover:shadow-[0_0_20px_rgba(255,31,72,0.5)] transition-all duration-300">
              {/* Smooth Tactile Scroll Wheel Stroke */}
              <span className="w-1.5 h-3 2xl:h-3.5 rounded-full bg-[#FF1F48] shadow-[0_0_10px_#FF1F48] animate-mouse-wheel-stroke" />
            </div>
            {/* Synchronized Guidance Chevron */}
            <ChevronDown className="w-4 h-4 2xl:w-5 2xl:h-5 text-[#FF1F48] animate-chevron-glide transition-transform duration-300 group-hover:scale-125" />
          </div>
        </a>

      </div>
    </section>
  );
};

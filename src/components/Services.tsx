import React from 'react';
import {
  Cpu,
  Bot,
  Server,
  Palette,
  Rocket,
  Globe,
  ArrowUpRight
} from 'lucide-react';

interface ServicesProps {
  onOpenConnect?: () => void;
}

interface ServiceCard {
  number: string;
  title: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  deliverables: string[];
  glowColor: string;
  badgeText: string;
}

export const Services: React.FC<ServicesProps> = ({ onOpenConnect }) => {
  const services: ServiceCard[] = [
    {
      number: '01',
      title: 'AI & ML Solutions',
      tagline: 'Build practical intelligent solutions for real-world problems.',
      icon: Cpu,
      badgeText: 'Intelligent Systems',
      glowColor: 'rgba(255, 31, 72, 0.25)',
      deliverables: [
        'Predictive ML models & classification systems',
        'Automated data workflows & fast inference'
      ]
    },
    {
      number: '02',
      title: 'Generative AI & RAG',
      tagline: 'Create LLM-powered applications, document assistants, and AI agents.',
      icon: Bot,
      badgeText: 'Agentic & Retrieval',
      glowColor: 'rgba(220, 20, 20, 0.28)',
      deliverables: [
        'Enterprise RAG systems & semantic search',
        'Autonomous multi-agent research loops'
      ]
    },
    {
      number: '03',
      title: 'AI Backend Development',
      tagline: 'Develop reliable backend systems and APIs that power AI applications.',
      icon: Server,
      badgeText: 'Scalable Architecture',
      glowColor: 'rgba(220, 20, 20, 0.28)',
      deliverables: [
        'High-performance asynchronous FastAPI & REST APIs',
        'Vector DB integrations (ChromaDB, pgvector)'
      ]
    },
    {
      number: '04',
      title: 'UI/UX Design',
      tagline: 'Design clean, intuitive, and user-focused digital interfaces.',
      icon: Palette,
      badgeText: 'Human-AI Experience',
      glowColor: 'rgba(220, 20, 20, 0.28)',
      deliverables: [
        'Modern Figma design systems & components',
        'Human-centric AI interfaces & prototypes'
      ]
    },
    {
      number: '05',
      title: 'Landing Page Design',
      tagline: 'Create modern, engaging landing pages with strong visual hierarchy.',
      icon: Rocket,
      badgeText: 'High Conversion',
      glowColor: 'rgba(220, 20, 20, 0.28)',
      deliverables: [
        'High-converting layout & narrative structure',
        'Responsive typography & smooth motion'
      ]
    },
    {
      number: '06',
      title: 'Website Design',
      tagline: 'Design polished, responsive websites with a professional digital experience.',
      icon: Globe,
      badgeText: 'Full Digital Presence',
      glowColor: 'rgba(220, 20, 20, 0.28)',
      deliverables: [
        'Cross-device responsive web architecture',
        'Fast page loads, SEO & clean code hygiene'
      ]
    }
  ];

  const row1 = services.slice(0, 3);
  const row2 = services.slice(3, 6);

  const renderServiceCard = (service: ServiceCard, key: string) => {
    const Icon = service.icon;

    return (
      <div
        key={key}
        onClick={onOpenConnect}
        className="group relative rounded-2xl p-5 sm:p-6 bg-gradient-to-b from-[#200404] via-[#100202] to-[#070101] border-2 border-red-600/90 hover:border-red-500 shadow-[0_0_28px_rgba(220,20,20,0.32),inset_0_0_20px_rgba(200,15,15,0.15)] hover:shadow-[0_0_42px_rgba(220,20,20,0.55),inset_0_0_28px_rgba(200,15,15,0.25)] backdrop-blur-xl transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5 h-[290px] sm:h-[310px] w-[320px] sm:w-[370px] lg:w-[400px] shrink-0 select-none overflow-hidden"
      >
        {/* Top red specular highlight border rim */}
        <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-red-500 via-red-600 to-transparent pointer-events-none z-10" />

        {/* Ambient Top Light Glow */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-72 h-36 bg-red-600/35 rounded-full blur-3xl pointer-events-none group-hover:bg-red-600/50 transition-colors duration-500" />

        {/* Visible Lite Shining Background Light Pool (Pure Scarlet Red) */}
        <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(ellipse_100%_80%_at_50%_0%,rgba(220,20,20,0.42),rgba(180,10,10,0.14)_50%,transparent_75%)] pointer-events-none" />

        {/* Red Specular Highlight Sheen */}
        <div className="absolute top-0 inset-x-0 h-28 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(255,40,40,0.22),transparent_70%)] pointer-events-none" />

        {/* Subtle Glass Surface Sheen */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04)_0%,transparent_35%)] pointer-events-none" />

        {/* Interactive Red Light Sweep */}
        <div className="absolute -inset-full bg-gradient-to-r from-transparent via-red-500/[0.1] to-transparent -rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out pointer-events-none" />

        {/* Internal accent glow spot */}
        <div
          className="absolute -top-16 -right-16 w-36 h-36 rounded-full blur-3xl opacity-35 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"
          style={{ backgroundColor: service.glowColor }}
        />

        <div className="relative z-10">
          {/* Top Row: Minimal Line Icon + Number & Badge */}
          <div className="flex items-center justify-between gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-red-600/35 to-red-950/40 border border-red-500/70 flex items-center justify-center text-red-300 group-hover:text-white group-hover:border-red-400 group-hover:bg-red-600/50 transition-all duration-300 shrink-0 shadow-[0_0_14px_rgba(255,31,72,0.35)]">
              <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" strokeWidth={1.5} />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-300 group-hover:text-red-300 transition-colors">
                {service.badgeText}
              </span>
              <span className="font-mono text-xs sm:text-sm font-bold text-red-400 group-hover:text-red-300 transition-colors tracking-widest drop-shadow-[0_0_6px_rgba(255,31,72,0.5)]">
                {service.number}
              </span>
            </div>
          </div>

          {/* Service Title */}
          <h3 className="font-display text-base sm:text-lg lg:text-[19px] font-bold text-white group-hover:text-red-200 transition-colors mt-3 sm:mt-3.5 tracking-tight">
            {service.title}
          </h3>

          {/* Primary Service Promise / Tagline */}
          <p className="text-zinc-300/90 text-xs sm:text-[13px] font-light mt-1.5 leading-snug line-clamp-2">
            {service.tagline}
          </p>

          {/* Client Deliverables (Light & Concise) */}
          <div className="mt-3.5 pt-3 border-t border-red-500/20 space-y-1.5">
            <span className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-widest text-red-400 font-semibold block">
              What I Deliver:
            </span>
            <ul className="space-y-1">
              {service.deliverables.map((item, dIdx) => (
                <li
                  key={dIdx}
                  className="flex items-center gap-2 text-[11px] sm:text-[12px] text-zinc-300 font-light leading-snug"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 group-hover:scale-125 transition-transform shadow-[0_0_6px_rgba(255,31,72,0.9)]" />
                  <span className="group-hover:text-white transition-colors line-clamp-1">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card Action Link */}
        <div className="mt-4 pt-3 border-t border-red-500/15 flex items-center justify-between text-[11px] sm:text-xs font-mono text-zinc-400 group-hover:text-red-300 transition-colors relative z-10">
          <span className="font-medium tracking-wide">Inquire for this service</span>
          <div className="w-6 h-6 rounded-full bg-red-950/40 border border-red-500/30 group-hover:bg-red-600 group-hover:border-red-400 text-zinc-400 group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-0.5 shadow-[0_0_8px_rgba(255,31,72,0.2)]">
            <ArrowUpRight className="w-3 h-3" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="services" className="pt-10 sm:pt-12 lg:pt-14 pb-12 sm:pb-14 lg:pb-16 border-t border-white/5 relative bg-[#070103] overflow-hidden">
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-red-600/[0.06] rounded-full blur-[190px] pointer-events-none -z-10" />
      <div className="absolute top-2/3 right-1/4 w-[500px] h-[400px] bg-rose-900/[0.08] rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_0%,rgba(220,38,38,0.1),transparent_75%)] pointer-events-none -z-10" />

      <div className="max-w-[1360px] mx-auto px-5 sm:px-7 lg:px-10">
        {/* Section Header */}
        <div className="mb-7 sm:mb-8 lg:mb-9 flex flex-col items-center text-center">
          <div className="flex items-center justify-center gap-1.5 text-[11px] font-mono tracking-widest text-red-500 uppercase font-semibold mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shrink-0" />
            <span>04. CLIENT OFFERINGS</span>
          </div>
          <h2 className="font-sans text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-bold text-white tracking-tight uppercase leading-tight text-center whitespace-normal md:whitespace-nowrap">
            DESIGNING & BUILDING DIGITAL SOLUTIONS.
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-2 max-w-2xl font-light leading-relaxed text-center mx-auto text-balance">
            I provide AI development, UI/UX design, website design, landing pages, and backend solutions to turn ideas into practical, user-focused digital products.
          </p>
        </div>
      </div>

      {/* Two-Tier Infinite Scrolling Marquees */}
      <div className="relative space-y-5 sm:space-y-6 overflow-hidden py-3">
        {/* Left & Right Vignette Edge Gradient Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 md:w-40 bg-gradient-to-r from-[#070103] via-[#070103]/80 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 md:w-40 bg-gradient-to-l from-[#070103] via-[#070103]/80 to-transparent z-20" />

        {/* Row 1: Right to Left Slow Scrolling (Cards 01, 02, 03) */}
        <div className="flex overflow-hidden">
          <div className="animate-scroll-rtl flex gap-4 sm:gap-5">
            {[...row1, ...row1, ...row1, ...row1].map((service, idx) =>
              renderServiceCard(service, `row1-${idx}`)
            )}
          </div>
        </div>

        {/* Row 2: Left to Right Slow Scrolling (Cards 04, 05, 06) */}
        <div className="flex overflow-hidden">
          <div className="animate-scroll-ltr flex gap-4 sm:gap-5">
            {[...row2, ...row2, ...row2, ...row2].map((service, idx) =>
              renderServiceCard(service, `row2-${idx}`)
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

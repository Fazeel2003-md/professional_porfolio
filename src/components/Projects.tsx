import React, { useState, useEffect, useRef } from 'react';
import {
  Home,
  MessageSquare,
  Bot,
  Bed,
  FileText,
  HeartPulse,
  Brain,
  Palette,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

interface GridProjectItem {
  id: string;
  title: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  tags: string[];
  bullet?: React.ReactNode;
  bullets?: string[];
  modalId?: string;
  isDesign?: boolean;
}

// Subtle physical deck offsets and 3D tilts for the initial centered stack
const STACK_CONFIG = [
  // Card 0: Front & Center (Top of deck)
  { x: 0, y: 0, rot: 0, scale: 1.0, zIndex: 12 },
  // Card 1: Slightly to the right/top
  { x: 12, y: -7, rot: 2.2, scale: 0.98, zIndex: 11 },
  // Card 2: Slightly to the left/bottom
  { x: -14, y: 9, rot: -2.6, scale: 0.96, zIndex: 10 },
  // Card 3: Top-left fan
  { x: -18, y: -11, rot: -1.7, scale: 0.94, zIndex: 9 },
  // Card 4: Bottom-right fan
  { x: 16, y: 13, rot: 3.0, scale: 0.92, zIndex: 8 },
  // Card 5: Left fan
  { x: -22, y: 5, rot: -3.2, scale: 0.90, zIndex: 7 },
  // Card 6: Right-top fan
  { x: 20, y: -13, rot: 2.4, scale: 0.88, zIndex: 6 },
  // Card 7: Base fan
  { x: 5, y: 17, rot: -1.8, scale: 0.86, zIndex: 5 },
];

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const centerGlowRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const hasAnimatedRef = useRef<boolean>(false);
  const expandTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cleanupTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 8 featured cards matching the exact design grid
  const projectItems: GridProjectItem[] = [
    {
      id: 'house-price-prediction',
      title: 'House Price Prediction',
      image: '/projects/house_price.jpg',
      icon: Home,
      tags: ['Python', 'Pandas', 'Scikit-learn', 'FastAPI'],
      bullet: (
        <span>
          Built and compared regression models to predict house prices; achieved{' '}
          <span className="text-[#FF1F48] font-semibold">0.90+ R²</span> and exposed
          predictions through FastAPI.
        </span>
      ),
      modalId: 'house-price-prediction',
    },
    {
      id: 'doc-rag-assistant',
      title: 'Document RAG Assistant',
      image: '/projects/rag_assistant.jpg',
      icon: MessageSquare,
      tags: ['Python', 'Sentence Transformers', 'ChromaDB', 'Ollama', 'Gradio'],
      bullet: (
        <span>
          Built a document question-answering assistant using semantic retrieval,
          vector search and an LLM for uploaded PDFs.
        </span>
      ),
      modalId: 'doc-rag-assistant',
    },
    {
      id: 'agentic-research-system',
      title: 'Research & Report Generation Agent',
      image: '/projects/research_agent.jpg',
      icon: Bot,
      tags: ['Python', 'LLMs', 'Agentic AI'],
      bullet: (
        <span>
          Developed an agentic workflow that researches a topic, gathers relevant
          information and generates a structured report.
        </span>
      ),
      modalId: 'agentic-research-system',
    },
    {
      id: 'ai-hotel-recommender',
      title: 'AI Hotel & Menu Recommendation',
      image: '/projects/hotel_menu.jpg',
      icon: Bed,
      tags: ['Python', 'Generative AI', 'LLMs'],
      bullet: (
        <span>
          Built an AI recommendation system using location-based context to suggest
          hotels and menu options.
        </span>
      ),
      modalId: 'ai-hotel-recommender',
    },
    {
      id: 'intelligent-resume-parser',
      title: 'Resume Parser',
      image: '/projects/resume_parser.jpg',
      icon: FileText,
      tags: ['Python', 'NLP', 'spaCy', 'FastAPI'],
      bullet: (
        <span>
          Developed an NLP-based resume parser to extract structured candidate
          information using a FastAPI backend.
        </span>
      ),
      modalId: 'intelligent-resume-parser',
    },
    {
      id: 'heart-disease-classifier',
      title: 'Heart Disease Prediction',
      image: '/projects/heart_disease.jpg',
      icon: HeartPulse,
      tags: ['Python', 'Scikit-learn', 'Classification Models', 'Streamlit'],
      bullet: (
        <span>
          Built a classification-based heart disease prediction application and
          deployed the interactive model interface with Streamlit.
        </span>
      ),
      modalId: 'heart-disease-classifier',
    },
    {
      id: 'tumor-detection-cnn',
      title: 'Tumor Detection',
      image: '/projects/tumor_detect.jpg',
      icon: Brain,
      tags: ['Python', 'Deep Learning', 'TensorFlow/PyTorch'],
      bullet: (
        <span>
          Developed a deep learning image-classification project for automated tumor
          detection.
        </span>
      ),
      modalId: 'tumor-detection-cnn',
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX & WEB DESIGN',
      image: '/projects/uiux_web.jpg',
      icon: Palette,
      tags: ['Figma', 'Framer'],
      bullet: (
        <span>
          Laundry app, restaurant & real estate landing page UI/UX prototypes designed in Figma.
        </span>
      ),
      isDesign: true,
    },
  ];

  const handleCardClick = (item: GridProjectItem) => {
    if (item.isDesign) {
      const targetSection = document.getElementById('services') || document.getElementById('projects');
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    if (item.modalId) {
      const matched = projects.find((p) => p.id === item.modalId);
      if (matched) {
        setSelectedProject(matched);
      }
    }
  };

  useEffect(() => {
    // Accessibility check
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      return;
    }

    // Determine if viewport is desktop where the 4x2 grid fits in a single screen view
    const isDesktop = () => typeof window !== 'undefined' && window.innerWidth >= 1024;

    // Resets cards to their natural CSS grid positions on mobile/tablet
    const resetToNaturalFlow = () => {
      cardRefs.current.forEach((cardEl) => {
        if (cardEl) {
          cardEl.style.transition = '';
          cardEl.style.transform = '';
          cardEl.style.zIndex = '';
          cardEl.style.boxShadow = '';
        }
      });
      if (centerGlowRef.current) {
        centerGlowRef.current.style.opacity = '0';
      }
    };

    // Positions all cards at the initial center stacked deck (Desktop only)
    const applyInitialStack = () => {
      if (!isDesktop()) {
        resetToNaturalFlow();
        return;
      }
      if (!gridRef.current) return;
      const gridEl = gridRef.current;
      const gridCenterX = gridEl.offsetWidth / 2;
      const gridCenterY = gridEl.offsetHeight / 2;
      if (gridCenterX === 0 || gridCenterY === 0) return;

      cardRefs.current.forEach((cardEl, idx) => {
        if (!cardEl) return;
        const cardCenterX = cardEl.offsetLeft + cardEl.offsetWidth / 2;
        const cardCenterY = cardEl.offsetTop + cardEl.offsetHeight / 2;
        const vx = gridCenterX - cardCenterX;
        const vy = gridCenterY - cardCenterY;
        const cfg = STACK_CONFIG[idx] || STACK_CONFIG[0];

        cardEl.style.transition = 'none';
        cardEl.style.transform = `translate3d(${(vx + cfg.x).toFixed(2)}px, ${(vy + cfg.y).toFixed(2)}px, 0px) rotate(${cfg.rot}deg) scale(${cfg.scale})`;
        cardEl.style.zIndex = `${cfg.zIndex}`;
        cardEl.style.boxShadow = '0 14px 28px rgba(0, 0, 0, 0.75), 0 0 20px rgba(255, 31, 72, 0.2)';
      });

      if (centerGlowRef.current) {
        centerGlowRef.current.style.transition = 'none';
        centerGlowRef.current.style.opacity = '0.85';
        centerGlowRef.current.style.transform = 'translate(-50%, -50%) scale(0.85)';
      }
    };

    // Triggers the automatic smooth expansion from center deck into the 4x2 grid (Desktop only)
    const triggerExpansion = () => {
      if (!isDesktop()) {
        resetToNaturalFlow();
        return;
      }
      if (!gridRef.current) return;
      const gridEl = gridRef.current;
      const gridCenterX = gridEl.offsetWidth / 2;
      const gridCenterY = gridEl.offsetHeight / 2;
      if (gridCenterX === 0 || gridCenterY === 0) return;

      // Calculate distances for progressive organic stagger
      const distances = cardRefs.current.map((cardEl) => {
        if (!cardEl) return 0;
        const cardCenterX = cardEl.offsetLeft + cardEl.offsetWidth / 2;
        const cardCenterY = cardEl.offsetTop + cardEl.offsetHeight / 2;
        const vx = gridCenterX - cardCenterX;
        const vy = gridCenterY - cardCenterY;
        return Math.sqrt(vx * vx + vy * vy);
      });
      const minDist = Math.min(...distances);
      const maxDist = Math.max(...distances);
      const distRange = maxDist - minDist || 1;

      // Force layout reflow before triggering smooth CSS transition
      cardRefs.current.forEach((cardEl) => cardEl?.getBoundingClientRect());

      // Ultra-smooth, elegant cubic-bezier curve (smooth ease-out quint)
      cardRefs.current.forEach((cardEl, idx) => {
        if (!cardEl) return;
        const dNorm = (distances[idx] - minDist) / distRange;
        // Smooth, progressive organic stagger: 0.04s to 0.18s
        const delay = 0.04 + dNorm * 0.14;

        cardEl.style.transition = `transform 1.25s cubic-bezier(0.22, 1, 0.36, 1) ${delay.toFixed(2)}s, box-shadow 1.25s cubic-bezier(0.22, 1, 0.36, 1) ${delay.toFixed(2)}s`;
        cardEl.style.transform = 'translate3d(0px, 0px, 0px) rotate(0deg) scale(1)';
        cardEl.style.boxShadow = '';
        cardEl.style.zIndex = '1';
      });

      // Smooth glow fade out matching the cards' glide
      if (centerGlowRef.current) {
        centerGlowRef.current.style.transition = 'opacity 1.25s cubic-bezier(0.22, 1, 0.36, 1) 0.08s, transform 1.25s cubic-bezier(0.22, 1, 0.36, 1) 0.08s';
        centerGlowRef.current.style.opacity = '0.08';
        centerGlowRef.current.style.transform = 'translate(-50%, -50%) scale(1.35)';
      }

      // Once finished, clean inline styles so hover transforms (hover:-translate-y-1) work natively
      if (cleanupTimerRef.current) clearTimeout(cleanupTimerRef.current);
      cleanupTimerRef.current = setTimeout(() => {
        cardRefs.current.forEach((cardEl) => {
          if (cardEl) {
            cardEl.style.transition = '';
            cardEl.style.transform = '';
            cardEl.style.zIndex = '';
            cardEl.style.boxShadow = '';
          }
        });
      }, 1600);
    };

    // Initial state: set the center stack on desktop, or natural flow on mobile
    if (isDesktop()) {
      applyInitialStack();
    } else {
      resetToNaturalFlow();
    }

    // IntersectionObserver: triggers presentation expansion on desktop in BOTH forward and reverse scroll directions
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!isDesktop()) {
          resetToNaturalFlow();
          return;
        }

        if (entry.isIntersecting) {
          if (!hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            // Short 220ms pause so the stacked physical deck is clearly appreciated before gliding outward
            if (expandTimerRef.current) clearTimeout(expandTimerRef.current);
            expandTimerRef.current = setTimeout(() => {
              triggerExpansion();
            }, 220);
          }
        } else {
          // When out of view in EITHER direction on desktop, reset stack so it re-animates upon return!
          if (expandTimerRef.current) clearTimeout(expandTimerRef.current);
          if (cleanupTimerRef.current) clearTimeout(cleanupTimerRef.current);
          hasAnimatedRef.current = false;
          applyInitialStack();
        }
      },
      { threshold: 0.1 }
    );

    const targetEl = gridRef.current || sectionRef.current;
    if (targetEl) {
      observer.observe(targetEl);
    }

    const handleResize = () => {
      if (!isDesktop()) {
        resetToNaturalFlow();
      } else if (!hasAnimatedRef.current) {
        applyInitialStack();
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      if (expandTimerRef.current) clearTimeout(expandTimerRef.current);
      if (cleanupTimerRef.current) clearTimeout(cleanupTimerRef.current);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24 bg-[#090204] border-t border-white/5 overflow-hidden scroll-mt-20"
    >
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-red-600/[0.08] rounded-full blur-[180px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(185,28,28,0.12),transparent_70%)] pointer-events-none -z-10" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Compact) */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-7 lg:mb-8">
          <div className="flex items-center justify-center gap-1.5 text-[11px] font-mono tracking-widest text-red-500 uppercase font-semibold mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shrink-0" />
            <span>FEATURED PROJECTS</span>
          </div>
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-semibold text-white tracking-tight uppercase leading-tight text-center whitespace-normal md:whitespace-nowrap">
            INTELLIGENT SOLUTIONS. DESIGNED TO DELIVER.
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1.5 max-w-2xl font-light leading-relaxed text-center mx-auto text-balance">
            A curated collection of AI, machine learning, Generative AI, backend, and UI/UX projects.
          </p>
        </div>

        {/* Relative Grid Wrapper for the 8 Cards */}
        <div className="relative w-full">
          {/* Soft atmospheric crimson glow behind the center stack */}
          <div
            ref={centerGlowRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full pointer-events-none -z-10"
            style={{
              background:
                'radial-gradient(circle, rgba(255, 31, 72, 0.42) 0%, rgba(220, 38, 38, 0.18) 45%, transparent 72%)',
              filter: 'blur(55px)',
              opacity: 0.85,
              willChange: 'opacity, transform',
            }}
          />

          {/* 8-Card Showcase Grid (4x2 on desktop, responsive on smaller viewports) */}
          <div
            ref={gridRef}
            className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5 lg:gap-4"
            style={{ perspective: '1200px' }}
          >
            {projectItems.map((item, idx) => {
              const IconComponent = item.icon;

              return (
                <div
                  key={item.id}
                  ref={(el) => {
                    cardRefs.current[idx] = el;
                  }}
                  onClick={() => handleCardClick(item)}
                  style={{ willChange: 'transform' }}
                  className="group relative rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#200404] via-[#100202] to-[#070101] border-2 border-red-600 hover:border-red-500 p-3 sm:p-3.5 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-[0_0_24px_rgba(220,20,20,0.3),inset_0_0_18px_rgba(200,15,15,0.12)] hover:shadow-[0_0_38px_rgba(220,20,20,0.5),inset_0_0_24px_rgba(200,15,15,0.22)] h-full overflow-hidden"
                >
                  {/* Top specular highlight rim */}
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 via-red-600 to-transparent pointer-events-none z-10" />

                  {/* Lite Shining Background Radiant Light Pool (Pure Scarlet Red) */}
                  <div className="absolute inset-x-0 top-0 h-36 bg-[radial-gradient(ellipse_100%_80%_at_50%_0%,rgba(220,20,20,0.4),rgba(180,10,10,0.1)_50%,transparent_75%)] pointer-events-none" />

                  {/* Red Specular Highlight Sheen */}
                  <div className="absolute top-0 inset-x-0 h-24 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(255,40,40,0.2),transparent_70%)] pointer-events-none" />

                  {/* Subtle Glass Surface Sheen */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04)_0%,transparent_35%)] pointer-events-none" />

                  {/* Interactive Red Light Sweep */}
                  <div className="absolute -inset-full bg-gradient-to-r from-transparent via-red-500/[0.08] to-transparent -rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out pointer-events-none" />

                  {/* Top Half: Visual Project Illustration / Interface Preview */}
                  <div className="relative z-10">
                    <div className="rounded-lg sm:rounded-xl overflow-hidden h-28 sm:h-32 lg:h-[126px] bg-black/60 relative border border-white/10 mb-2 sm:mb-2.5">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Subtle hover overlay badge */}
                      <div className="absolute top-2 right-2 p-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight className="w-3 h-3 text-white" />
                      </div>
                    </div>

                    {/* Header Row: Circular Red Icon Badge + Title */}
                    <div className="flex items-center gap-2 sm:gap-2.5">
                      <div className="w-6 h-6 sm:w-6.5 sm:h-6.5 rounded-full bg-[#E5093A] text-white flex items-center justify-center shrink-0 shadow-md shadow-red-950/60">
                        <IconComponent className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                      </div>
                      <h3 className="font-bold text-white text-xs sm:text-[13.5px] lg:text-[14px] tracking-tight leading-snug group-hover:text-red-300 transition-colors line-clamp-1">
                        {item.title}
                      </h3>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-1.5 sm:px-2 py-0.5 rounded-full text-[9.5px] sm:text-[10px] font-medium bg-[#1F070C] border border-[#5E121E] text-zinc-300 group-hover:border-red-500/50 transition-colors leading-none"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Section: Bullet Points */}
                  <div className="mt-2 pt-2 border-t border-red-950/40 text-[10.5px] sm:text-[11px] text-zinc-300/90 font-light leading-snug relative z-10">
                    {item.bullet && (
                      <div className="flex items-start gap-1 line-clamp-2">
                        <span className="text-zinc-500 select-none">•</span>
                        <span>{item.bullet}</span>
                      </div>
                    )}

                    {item.bullets && (
                      <ul className="space-y-0.5">
                        {item.bullets.map((bText, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-1 line-clamp-2">
                            <span className="text-zinc-500 select-none">•</span>
                            <span>{bText}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Interactive Detail Modal for deep-dive case studies */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenConnect: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConnect }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number; opacity: number }>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const navRef = useRef<HTMLElement>(null);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "QDelta", href: "#qdelta" },
    { label: "Contact", href: "#contact" },
  ];

  // Update sliding indicator position based on active item
  const updateIndicator = () => {
    if (navRef.current) {
      const activeEl = navRef.current.querySelector<HTMLElement>(`[data-nav="${activeSection}"]`);
      if (activeEl) {
        setIndicatorStyle({
          left: activeEl.offsetLeft,
          width: activeEl.offsetWidth,
          opacity: 1,
        });
      }
    }
  };

  useEffect(() => {
    updateIndicator();
  }, [activeSection]);

  useEffect(() => {
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeSection]);

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'projects', 'services', 'qdelta', 'contact'];

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // If scrolled to the bottom of the page, activate Contact
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 70;
      if (isBottom) {
        setActiveSection('#contact');
        return;
      }

      // Check section bounding positions relative to the top of viewport
      const triggerPoint = 160;
      let current = '#hero';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerPoint) {
            current = `#${id}`;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    // Delay indicator update slightly after mount to ensure layout calculations are accurate
    const timer = setTimeout(updateIndicator, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 z-50 px-4 sm:px-8 lg:px-12 pointer-events-none transition-all duration-300 animate-nav-enter">
      {/* Floating Circular Pill Container with Clean Red Boundary & Dual Moving Sparks */}
      <div className="max-w-[1360px] mx-auto pointer-events-auto">
        <div className="relative rounded-full p-[1px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.7)] transition-all duration-300 group">
          {/* Base Red Boundary — Clean & Non-glaring */}
          <div className="absolute inset-0 rounded-full bg-red-500/35 pointer-events-none" />

          {/* Inner Glass Pill Container with Sharp Clean Boundary */}
          <div
            className={`relative rounded-full border border-red-500/40 bg-[#08080A]/90 backdrop-blur-2xl backdrop-saturate-150 px-4 sm:px-6 py-2 sm:py-2.5 transition-all duration-300 ${
              scrolled ? 'bg-[#08080A]/95 shadow-2xl shadow-black/90 border-red-500/50' : ''
            }`}
          >
            {/* Top Red Line: Small White Spark moving Left -> Right */}
            <div className="absolute top-0 -translate-y-1/2 inset-x-8 sm:inset-x-12 h-[2px] pointer-events-none overflow-hidden z-20">
              <div className="absolute top-0 h-full w-20 animate-spark-right">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.4)_30%,#ffffff_50%,rgba(255,255,255,0.4)_70%,transparent_100%)]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_4px_#ffffff,0_0_8px_#ffffff,0_0_12px_rgba(255,255,255,0.9),0_0_16px_rgba(255,31,72,0.8)]" />
                </div>
              </div>
            </div>

            {/* Bottom Red Line: Small White Spark moving Right -> Left (Opposite Direction) */}
            <div className="absolute bottom-0 translate-y-1/2 inset-x-8 sm:inset-x-12 h-[2px] pointer-events-none overflow-hidden z-20">
              <div className="absolute top-0 h-full w-20 animate-spark-left">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.4)_30%,#ffffff_50%,rgba(255,255,255,0.4)_70%,transparent_100%)]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_4px_#ffffff,0_0_8px_#ffffff,0_0_12px_rgba(255,255,255,0.9),0_0_16px_rgba(255,31,72,0.8)]" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 sm:gap-4">
              {/* Zone 1: Brand Wordmark with Clean Circular Profile DP (No Green Dot) */}
              <a
                href="#hero"
                onClick={() => setActiveSection('#hero')}
                className="flex items-center gap-2.5 md:gap-3 group/brand whitespace-nowrap shrink-0"
              >
                <div className="relative w-8 h-8 md:w-9 md:h-9 rounded-full shrink-0 group-hover/brand:scale-105 transition-transform duration-300">
                  <div className="w-full h-full rounded-full overflow-hidden border border-red-500/60 shadow-sm ring-1 ring-red-500/30 group-hover/brand:ring-red-500/70 transition-all duration-300">
                    <img
                      src="/dp.jpg"
                      alt="Fazeel"
                      className="w-full h-full object-cover object-center group-hover/brand:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="font-orbitron text-sm sm:text-base md:text-[17px] font-black tracking-[0.14em] uppercase select-none transition-all duration-300 flex items-center">
                    <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.35)]">F</span>
                    <span className="text-[#FF003C] drop-shadow-[0_0_12px_rgba(255,0,60,0.85)] group-hover/brand:drop-shadow-[0_0_18px_rgba(255,0,60,1)] group-hover/brand:brightness-110 transition-all duration-300">
                      A
                    </span>
                    <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.35)]">ZEEL</span>
                  </span>
                </div>
              </a>

              {/* Zone Boundary Divider: Brand <-> Nav */}
              <div className="hidden md:block w-px h-5 bg-gradient-to-b from-transparent via-red-500/30 to-transparent mx-1 shrink-0" />

              {/* Zone 2: Automatic Active Section Navigation Links with Fluid Sliding Indicator */}
              <nav
                ref={navRef}
                className="hidden md:flex items-center gap-1 lg:gap-2 relative text-xs lg:text-[13.5px] font-medium py-1"
              >
                {/* Sliding Liquid Pill Highlight with Subtle Red Boundary */}
                <span
                  className="absolute top-1 bottom-1 rounded-full bg-red-600/15 border border-red-500/50 shadow-[0_0_10px_rgba(255,31,72,0.25)] transition-all duration-300 ease-out pointer-events-none"
                  style={{
                    left: `${indicatorStyle.left}px`,
                    width: `${indicatorStyle.width}px`,
                    opacity: indicatorStyle.opacity,
                  }}
                />

                {/* Sliding Glowing Neon Underline */}
                <span
                  className="absolute -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-red-500 to-orange-500 shadow-[0_0_8px_rgba(255,31,72,0.8)] transition-all duration-300 ease-out pointer-events-none"
                  style={{
                    left: `${indicatorStyle.left + 8}px`,
                    width: `${Math.max(indicatorStyle.width - 16, 0)}px`,
                    opacity: indicatorStyle.opacity,
                  }}
                />

                {navLinks.map((link) => {
                  const isActive = activeSection === link.href;

                  return (
                    <a
                      key={link.label}
                      data-nav={link.href}
                      href={link.href}
                      onClick={() => setActiveSection(link.href)}
                      className={`relative px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all duration-200 cursor-pointer z-10 ${
                        isActive
                          ? 'text-white font-semibold'
                          : 'text-zinc-400 hover:text-zinc-100 hover:bg-white/5 border border-transparent hover:border-red-500/25'
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>

              {/* Zone Boundary Divider: Nav <-> Action CTA */}
              <div className="hidden md:block w-px h-5 bg-gradient-to-b from-transparent via-red-500/40 to-transparent mx-1 shrink-0" />

              {/* Zone 3: Primary Action Button with Shimmer Sweep and Spring Bounce */}
              <div className="hidden md:flex items-center gap-3 shrink-0">
                <button
                  onClick={onOpenConnect}
                  className="relative group/btn overflow-hidden flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-rose-600 text-white text-xs font-semibold tracking-wide shadow-[0_0_20px_rgba(255,31,72,0.45)] hover:shadow-[0_0_35px_rgba(255,31,72,0.85)] hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 cursor-pointer whitespace-nowrap border border-white/30 hover:border-white/50"
                >
                  {/* Metallic Light Shimmer Sweep */}
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer pointer-events-none" />

                  <span className="relative z-10">Let's Connect</span>
                  <ArrowUpRight className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 group-hover/btn:scale-110" />
                </button>
              </div>

              {/* Mobile Hamburger Toggle */}
              <div className="flex items-center md:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-1.5 rounded-full text-zinc-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer border border-transparent hover:border-red-500/30"
                  aria-label="Toggle Navigation"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Smooth Transition and Crisp Red Boundary */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 rounded-3xl border border-red-500/60 bg-[#0A0A0F]/95 backdrop-blur-2xl px-6 py-6 shadow-2xl shadow-red-950/40 pointer-events-auto transition-all duration-300 animate-nav-enter">
            <nav className="flex flex-col gap-2 text-base font-medium text-zinc-300">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => {
                      setActiveSection(link.href);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3.5 py-2.5 rounded-xl transition-all duration-200 flex items-center justify-between ${
                      isActive
                        ? 'text-white bg-red-500/15 border border-red-500/40 font-semibold'
                        : 'text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-red-500/20'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(255,31,72,1)]" />
                    )}
                  </a>
                );
              })}
              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConnect();
                  }}
                  className="relative overflow-hidden w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-rose-600 text-white text-sm font-semibold tracking-wide shadow-lg shadow-red-900/40 cursor-pointer border border-white/20"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shimmer pointer-events-none" />
                  <span>Let's Connect</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};



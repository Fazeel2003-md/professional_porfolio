import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 bg-[#060608] py-10 sm:py-14 text-xs text-zinc-500 font-mono">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="font-orbitron font-black text-sm tracking-[0.14em] uppercase flex items-center select-none">
            <span className="text-white">F</span>
            <span className="text-[#FF003C] drop-shadow-[0_0_8px_rgba(255,0,60,0.85)]">A</span>
            <span className="text-white">ZEEL</span>
          </span>
          <span className="hidden sm:inline text-zinc-700" aria-hidden="true">·</span>
          <span>© {new Date().getFullYear()} All Rights Reserved</span>
          <span className="hidden sm:inline text-zinc-700" aria-hidden="true">·</span>
          <span className="text-zinc-400">AI/ML Engineer & Systems Architect</span>
        </div>

        {/* Quick Links & Back to Top */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={personal.xTwitter}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            Twitter / X
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span className="text-[11px]">Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

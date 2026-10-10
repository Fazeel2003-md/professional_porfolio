import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Instagram, Copy, Check, Send, ArrowUpRight, FileText, ChevronDown, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactProps {
  isOpenModal?: boolean;
  onCloseModal?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ isOpenModal, onCloseModal }) => {
  const { personal } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    category: 'Generative AI & RAG Systems',
    budget: '',
    details: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);

  // Handle ESC key and background scroll lock when modal is open
  useEffect(() => {
    if (!isOpenModal) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCloseModal?.();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpenModal, onCloseModal]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  // Reusable Social Links Strip
  const renderSocials = (compact = false) => (
    <div className={`flex items-center gap-2.5 ${compact ? 'pt-1' : 'pt-3'}`}>
      {[
        {
          href: personal.xTwitter,
          label: 'Twitter / X',
          icon: (
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          ),
        },
        { href: personal.github, label: 'GitHub', icon: <Github className="w-3.5 h-3.5" /> },
        { href: personal.linkedin, label: 'LinkedIn', icon: <Linkedin className="w-3.5 h-3.5" /> },
        { href: personal.instagram || 'https://instagram.com', label: 'Instagram', icon: <Instagram className="w-3.5 h-3.5" /> },
      ].map((soc, idx) => (
        <a
          key={idx}
          href={soc.href}
          target="_blank"
          rel="noreferrer"
          aria-label={soc.label}
          className={`${compact ? 'w-9 h-9' : 'w-11 h-11 sm:w-12 sm:h-12'} rounded-xl bg-gradient-to-b from-[#180408] to-[#0a0103] border border-red-500/30 hover:border-red-400 hover:shadow-[0_0_16px_rgba(220,20,20,0.5)] flex items-center justify-center text-zinc-300 hover:text-white hover:-translate-y-1 transition-all duration-300 cursor-pointer group shrink-0`}
        >
          <span className="group-hover:scale-115 transition-transform duration-300">
            {soc.icon}
          </span>
        </a>
      ))}
    </div>
  );

  // Resume Dossier Modal
  const renderResumeModal = () => (
    showResumeModal && (
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
        <div className="relative w-full max-w-2xl p-6 sm:p-8 rounded-3xl bg-[#0E0E16] border border-red-500/30 shadow-2xl shadow-red-950/40 space-y-6 max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-mono text-red-500 uppercase font-semibold">Executive Resume Dossier</span>
              <h3 className="font-display text-2xl font-bold text-white mt-0.5">
                MOHAMAD FAZEELULLAA
              </h3>
            </div>
            <button
              onClick={() => setShowResumeModal(false)}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white cursor-pointer"
            >
              ✕
            </button>
          </div>

          <div className="space-y-4 text-xs font-mono text-zinc-300">
            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <span className="text-zinc-500 uppercase">Core Qualifications:</span>
              <p className="text-zinc-200 font-sans">
                B.Tech in Electronics & Communication Engineering, GNIT 2025. Specialized in Generative AI, RAG, Agentic AI, PyTorch, Scikit-learn, FastAPI, and Figma/Framer.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-zinc-500 uppercase">Production Systems Engineered:</span>
              <ul className="list-disc list-inside space-y-1 text-zinc-300">
                <li>Document RAG Assistant (Sub-120ms retrieval, ChromaDB, Groq LPU, LangChain)</li>
                <li>Autonomous Research Agent (n8n, Python, multi-agent reasoning dossiers)</li>
                <li>Brain Tumor MRI Segmentation CNN (PyTorch, 99.2% accuracy, Grad-CAM overlays)</li>
                <li>House Price Prediction ML (XGBoost, LightGBM, 94.8% R²)</li>
                <li>Intelligent Resume Parser (Transformers, Pydantic schemas, pgvector)</li>
              </ul>
            </div>

            <div className="space-y-1 pt-2">
              <span className="text-zinc-500 uppercase">Technical Arsenal:</span>
              <p className="text-zinc-400">
                Python, Scikit-learn, XGBoost, LightGBM, PyTorch, TensorFlow, ChromaDB, FastAPI, PostgreSQL, SQLAlchemy, Docker, Ollama, Groq, n8n, Figma, Framer.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex justify-between items-center">
            <a
              href={`mailto:${personal.email}?subject=Candidate%20Inquiry%20-%20Mohamad%20Fazeelullaa`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-semibold"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Directly</span>
            </a>

            <button
              onClick={() => setShowResumeModal(false)}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs text-zinc-300 font-mono cursor-pointer"
            >
              Close Dossier
            </button>
          </div>
        </div>
      </div>
    )
  );

  // Render for Modal View (Fast, compact, highly responsive, non-stuck)
  if (isOpenModal) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onCloseModal?.();
          }
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        <div
          className="relative w-full max-w-[820px] max-h-[88vh] flex flex-col rounded-2xl sm:rounded-3xl bg-[#080103] border-2 border-red-600/70 shadow-[0_0_50px_rgba(220,20,20,0.35)] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Header Bar with Close / Back Button */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-red-500/25 bg-gradient-to-r from-[#180306] via-[#0d0102] to-[#180306] shrink-0 select-none">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 shadow-[0_0_8px_rgba(239,68,68,1)]" />
              </span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-300 font-semibold">
                Quick Connect · Let's Collaborate
              </span>
            </div>

            <button
              onClick={onCloseModal}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-red-950/40 hover:bg-red-900/60 text-zinc-300 hover:text-white transition-colors cursor-pointer text-xs font-mono border border-red-500/40"
              title="Close modal (Esc)"
              aria-label="Close modal"
            >
              <span>Back / Close</span>
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Modal Content Body */}
          <div className="p-4 sm:p-6 overflow-y-auto overscroll-contain">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-start">
              {/* Left Column: Profile & Details (compact) */}
              <div className="md:col-span-5 space-y-4">
                {/* Badge: CONTACT */}
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-red-500/50 bg-[#120205] text-[10px] font-mono uppercase tracking-widest text-white shadow-[0_0_12px_rgba(220,20,20,0.3)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_6px_#ef4444]" />
                    <span>CONTACT</span>
                  </div>
                </div>

                {/* Profile Card with Rotating Red Spark Border */}
                <div className="relative rounded-2xl p-[1.5px] overflow-hidden w-fit max-w-full shadow-[0_0_20px_rgba(255,31,72,0.25)]">
                  {/* Base border background */}
                  <div className="absolute inset-0 rounded-2xl bg-red-950/40 pointer-events-none" />

                  {/* Rotating Red Spark Beam */}
                  <div className="absolute -inset-[200%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_75deg,rgba(255,31,72,0.2)_100deg,#FF1F48_128deg,#FFFFFF_145deg,#FF1F48_162deg,rgba(255,31,72,0.2)_190deg,transparent_215deg,transparent_360deg)] animate-spin-spark pointer-events-none" />

                  {/* Ambient Glow Diffusion */}
                  <div className="absolute inset-0 rounded-2xl bg-red-600/20 blur-[3px] pointer-events-none" />

                  {/* Card Inner Body */}
                  <div className="relative rounded-[14.5px] bg-gradient-to-b from-[#180408] via-[#0d0204] to-[#070102] p-3 flex items-center gap-3 z-10 border border-red-500/30">
                    <div className="relative shrink-0">
                      <img
                        src="/dp.jpg"
                        alt="Mohamad Fazeelullaa"
                        className="w-11 h-11 rounded-full object-cover border-2 border-red-500/60 shadow-[0_0_10px_rgba(220,20,20,0.4)]"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/qdelta_portrait.jpg';
                        }}
                      />
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-black shadow-[0_0_8px_rgba(239,68,68,1)]" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-bold text-white text-xs sm:text-sm tracking-tight truncate">
                          MOHAMAD FAZEELULLAA
                        </span>
                        <span className="text-[9px] font-mono uppercase tracking-wider font-bold text-white bg-red-950/80 border border-red-500/60 px-1.5 py-0.5 rounded shadow-[0_0_8px_rgba(220,20,20,0.3)]">
                          CO-FOUNDER
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 shadow-[0_0_6px_rgba(239,68,68,1)]"></span>
                        </span>
                        <span className="text-[11px] text-zinc-300 font-normal truncate">
                          Available for architecture &amp; new products
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Heading: Say hello */}
                <h3 id="contact-modal-title" className="text-2xl sm:text-3xl font-bold tracking-tight flex items-center gap-2 group cursor-default">
                  <span className="text-white">Say </span>
                  <span className="text-red-500 drop-shadow-[0_0_12px_rgba(220,20,20,0.8)]">hello</span>
                  <ArrowUpRight className="w-6 h-6 text-red-500 stroke-[2.5] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </h3>

                {/* Subtitle */}
                <p className="text-zinc-300 text-xs leading-relaxed font-light">
                  Got a project in mind, or just want to sanity-check an idea before you commit? Send it over. We read everything that comes through this form.
                </p>

                {/* Checklist (compact) */}
                <div className="space-y-2 pt-1 text-xs text-zinc-300">
                  <div className="flex items-center gap-2.5 group hover:translate-x-1 transition-transform">
                    <div className="w-4 h-4 rounded-full border border-red-500/60 bg-red-950/40 flex items-center justify-center shrink-0 shadow-[0_0_8px_rgba(220,20,20,0.3)]">
                      <Check className="w-2.5 h-2.5 text-white stroke-[2.5]" />
                    </div>
                    <span>A reply within one working day</span>
                  </div>
                  <div className="flex items-center gap-2.5 group hover:translate-x-1 transition-transform">
                    <div className="w-4 h-4 rounded-full border border-red-500/60 bg-red-950/40 flex items-center justify-center shrink-0 shadow-[0_0_8px_rgba(220,20,20,0.3)]">
                      <Check className="w-2.5 h-2.5 text-white stroke-[2.5]" />
                    </div>
                    <span>Direct communication throughout</span>
                  </div>
                  <div className="flex items-center gap-2.5 group hover:translate-x-1 transition-transform">
                    <div className="w-4 h-4 rounded-full border border-red-500/60 bg-red-950/40 flex items-center justify-center shrink-0 shadow-[0_0_8px_rgba(220,20,20,0.3)]">
                      <Check className="w-2.5 h-2.5 text-white stroke-[2.5]" />
                    </div>
                    <span>Support that continues after launch</span>
                  </div>
                </div>

                {/* Social icons */}
                {renderSocials(true)}
              </div>

              {/* Right Column: Fast Interactive Form */}
              <div className="relative group md:col-span-7 p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#180408] via-[#0d0204] to-[#070102] border-2 border-red-600/80 shadow-[0_0_24px_rgba(220,20,20,0.25)] space-y-4 overflow-hidden">
                <div className="border-b border-red-500/20 pb-2.5">
                  <h4 className="text-sm sm:text-base font-bold tracking-tight flex items-center gap-1.5">
                    <span className="text-white">Send a Direct</span>
                    <span className="text-red-500">Inquiry</span>
                  </h4>
                  <p className="text-zinc-400 text-[11px] mt-0.5 font-light">
                    Share your goals, stack preferences, or project timeline.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="py-8 px-4 rounded-xl bg-black/50 border border-red-500/40 text-center space-y-2.5">
                    <div className="w-10 h-10 rounded-full bg-red-600/20 border border-red-500 text-red-500 flex items-center justify-center mx-auto shadow-[0_0_12px_rgba(220,20,20,0.4)]">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <h5 className="text-sm font-bold text-white">Inquiry Received</h5>
                    <p className="text-xs text-zinc-300 max-w-xs mx-auto">
                      Thank you, {formState.name || 'there'}! Your inquiry is sent straight to Mohamad's priority inbox.
                    </p>
                    <div className="pt-2 flex items-center justify-center gap-2">
                      <button
                        onClick={() => {
                          setFormSubmitted(false);
                          setFormState({
                            name: '',
                            email: '',
                            category: 'Generative AI & RAG Systems',
                            budget: '',
                            details: ''
                          });
                        }}
                        className="px-3 py-1.5 rounded-lg bg-red-950/60 border border-red-500/40 hover:border-red-400 text-xs text-white font-mono transition-colors cursor-pointer"
                      >
                        Send Another
                      </button>
                      <button
                        onClick={onCloseModal}
                        className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-xs text-white font-mono transition-colors cursor-pointer shadow-[0_0_12px_rgba(220,20,20,0.5)]"
                      >
                        Back to Portfolio
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono tracking-wider uppercase text-zinc-300 font-semibold flex items-center gap-1">
                          <span>YOUR NAME</span>
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="e.g. Alex Rivera"
                          className="w-full px-3 py-2 rounded-xl bg-[#090103] border border-red-500/35 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 focus:shadow-[0_0_15px_rgba(220,20,20,0.35)] transition-all"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-mono tracking-wider uppercase text-zinc-300 font-semibold flex items-center gap-1">
                          <span>YOUR EMAIL</span>
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="alex@company.com"
                          className="w-full px-3 py-2 rounded-xl bg-[#090103] border border-red-500/35 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 focus:shadow-[0_0_15px_rgba(220,20,20,0.35)] transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono tracking-wider uppercase text-zinc-300 font-semibold">
                          CATEGORY
                        </label>
                        <div className="relative">
                          <select
                            value={formState.category}
                            onChange={(e) => setFormState({ ...formState, category: e.target.value })}
                            className="w-full px-3 py-2 rounded-xl bg-[#090103] border border-red-500/35 text-white text-xs focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 focus:shadow-[0_0_15px_rgba(220,20,20,0.35)] transition-all appearance-none cursor-pointer pr-8"
                          >
                            <option value="Generative AI & RAG Systems">Generative AI & RAG Systems</option>
                            <option value="Autonomous AI Agents & Workflows">Autonomous AI Agents</option>
                            <option value="Machine Learning & PyTorch Models">ML & PyTorch Models</option>
                            <option value="FastAPI Backend & Architecture">FastAPI Architecture</option>
                            <option value="UI/UX & Product Design">UI/UX & Product Design</option>
                            <option value="Full-Time Engineering Role">Full-Time Engineering Role</option>
                            <option value="Technical Advisory & Consulting">Technical Advisory</option>
                          </select>
                          <ChevronDown className="w-3.5 h-3.5 text-red-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-mono tracking-wider uppercase text-zinc-300 font-semibold">
                          BUDGET / TIMELINE
                        </label>
                        <input
                          type="text"
                          value={formState.budget}
                          onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                          placeholder="e.g. MVP / 2-4 weeks"
                          className="w-full px-3 py-2 rounded-xl bg-[#090103] border border-red-500/35 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 focus:shadow-[0_0_15px_rgba(220,20,20,0.35)] transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-mono tracking-wider uppercase text-zinc-300 font-semibold flex items-center gap-1">
                        <span>PROJECT OBJECTIVES</span>
                        <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={2}
                        required
                        value={formState.details}
                        onChange={(e) => setFormState({ ...formState, details: e.target.value })}
                        placeholder="Brief notes on what you'd like to build..."
                        className="w-full px-3 py-2 rounded-xl bg-[#090103] border border-red-500/35 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 focus:shadow-[0_0_15px_rgba(220,20,20,0.35)] transition-all resize-none"
                      />
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="relative overflow-hidden group flex-1 py-2.5 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-red-600 hover:from-red-500 hover:to-red-400 text-white font-bold text-xs tracking-wide transition-all shadow-[0_0_20px_rgba(220,20,20,0.5)] hover:shadow-[0_0_30px_rgba(220,20,20,0.8)] flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
                        <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={onCloseModal}
                        className="px-3.5 py-2.5 rounded-xl bg-red-950/40 hover:bg-red-900/60 border border-red-500/40 text-zinc-300 hover:text-white font-mono text-xs transition-colors cursor-pointer"
                      >
                        Cancel
                      </button>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-red-500/20 text-[10px] text-zinc-400 font-mono">
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="hover:text-white transition-colors cursor-pointer text-zinc-300 underline underline-offset-2 flex items-center gap-1 group"
                      >
                        <Mail className="w-3 h-3 text-red-500 group-hover:scale-110 transition-transform" />
                        <span>{copiedEmail ? 'Copied!' : personal.email}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setShowResumeModal(true)}
                        className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 text-zinc-300 hover:underline underline-offset-2 group"
                      >
                        <FileText className="w-3 h-3 text-red-500 group-hover:scale-110 transition-transform" />
                        <span>Resume Dossier</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {renderResumeModal()}
      </div>
    );
  }

  // Render for Inline Page Section (#contact)
  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-24 lg:py-28 border-t border-red-500/20 relative bg-[#060002] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 right-10 w-[650px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(220,20,20,0.13),transparent_70%)] blur-[130px] pointer-events-none -z-10 animate-pulse-subtle" />
      <div className="absolute -bottom-10 left-10 w-[500px] h-[380px] bg-[radial-gradient(ellipse_at_center,rgba(180,10,10,0.08),transparent_70%)] blur-[110px] pointer-events-none -z-10" />

      {/* Modern fine grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative">
        {/* Background Subtle Watermark */}
        <div className="absolute -top-8 sm:-top-14 right-4 sm:right-12 lg:right-16 text-[100px] sm:text-[150px] lg:text-[190px] font-bold text-white/[0.025] select-none pointer-events-none leading-none tracking-tighter font-display uppercase">
          CONNECT
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start relative z-10">
          {/* Left Column: Direct Profile, Headline, Checklist & Socials */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-6 sm:space-y-7">
            {/* Badge: CONTACT */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-red-500/60 bg-gradient-to-r from-red-950/60 to-black text-[11px] font-mono uppercase tracking-widest text-white shadow-[0_0_16px_rgba(220,20,20,0.35)] backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-80" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 shadow-[0_0_8px_#ef4444]" />
                </span>
                <span>CONTACT</span>
              </div>
            </div>

            {/* Profile Card with Rotating Red Spark Border */}
            <div className="relative rounded-2xl p-[1.5px] overflow-hidden w-fit max-w-full shadow-[0_0_28px_rgba(220,20,20,0.35)] group transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_36px_rgba(220,20,20,0.55)]">
              {/* Base border background */}
              <div className="absolute inset-0 rounded-2xl bg-red-950/60 pointer-events-none" />

              {/* Rotating Red Spark Beam (Pure Red & White) */}
              <div className="absolute -inset-[200%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_75deg,rgba(220,20,20,0.25)_100deg,#FF1F48_128deg,#FFFFFF_145deg,#FF1F48_162deg,rgba(220,20,20,0.25)_190deg,transparent_215deg,transparent_360deg)] animate-spin-spark pointer-events-none" />

              {/* Ambient Glow Diffusion */}
              <div className="absolute inset-0 rounded-2xl bg-red-600/25 blur-[4px] pointer-events-none" />

              {/* Card Inner Body */}
              <div className="relative rounded-[14.5px] bg-gradient-to-b from-[#180306] via-[#0d0102] to-[#070102] p-3 sm:p-3.5 pr-5 flex items-center gap-3.5 z-10 border border-red-500/35">
                <div className="relative shrink-0">
                  <img
                    src="/dp.jpg"
                    alt="Mohamad Fazeelullaa"
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-red-500/80 shadow-[0_0_12px_rgba(220,20,20,0.5)]"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/qdelta_portrait.jpg';
                    }}
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-black shadow-[0_0_8px_#ef4444]" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-white text-base tracking-tight">
                      MOHAMAD FAZEELULLAA
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-white bg-red-950/90 border border-red-500/70 px-2 py-0.5 rounded shadow-[0_0_8px_rgba(220,20,20,0.35)]">
                      CO-FOUNDER
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 shadow-[0_0_6px_#ef4444]" />
                    </span>
                    <span className="text-xs text-zinc-300 font-normal">
                      Available for architecture &amp; new products
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Big Headline: Say hello ↗ */}
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight flex items-center gap-2.5 leading-tight group cursor-default select-none">
              <span className="text-white">Say </span>
              <span className="text-red-500 drop-shadow-[0_0_18px_rgba(220,20,20,0.85)] group-hover:drop-shadow-[0_0_26px_rgba(220,20,20,1)] transition-all">hello</span>
              <ArrowUpRight className="w-8 h-8 sm:w-10 sm:h-10 text-red-500 group-hover:text-white group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300 stroke-[2.5] drop-shadow-[0_0_12px_rgba(220,20,20,0.7)] group-hover:drop-shadow-[0_0_18px_rgba(255,255,255,0.9)]" />
            </h2>

            {/* Description */}
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-lg font-light">
              Got a project in mind, or just want to sanity-check an idea before you commit? Send it over. We read everything that comes through this form.
            </p>

            {/* Value Proposition Checklist */}
            <div className="space-y-3 pt-1">
              {[
                'A reply within one working day',
                'Direct communication throughout',
                'Support that continues after launch',
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 group hover:translate-x-2 transition-all duration-300 cursor-default"
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-red-500/60 bg-[#160205] flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(220,20,20,0.3)] group-hover:border-white group-hover:bg-red-600 group-hover:shadow-[0_0_16px_rgba(239,68,68,0.9)] group-hover:scale-110 transition-all duration-300">
                    <Check className="w-3 h-3 text-white stroke-[2.5]" />
                  </div>
                  <span className="text-sm sm:text-[15px] text-zinc-300 group-hover:text-white transition-colors duration-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Verified Social Networks Strip */}
            {renderSocials(false)}
          </div>

          {/* Right Column: Send a Direct Inquiry Form */}
          <div className="relative group lg:col-span-7 xl:col-span-7 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#180306] via-[#0d0102] to-[#060002] border-2 border-red-600/80 hover:border-red-500 space-y-6 shadow-[0_0_40px_rgba(220,20,20,0.28),inset_0_0_25px_rgba(180,10,10,0.12)] transition-all duration-500 overflow-hidden">
            {/* Top red specular highlight border rim */}
            <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-red-500 via-white to-transparent pointer-events-none z-10" />

            {/* Radiant Red Background Shining Light Pool */}
            <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(ellipse_100%_80%_at_50%_0%,rgba(220,20,20,0.4),rgba(180,10,10,0.12)_50%,transparent_75%)] pointer-events-none" />

            {/* Subtle Glass Surface Sheen */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-transparent pointer-events-none" />

            {/* Interactive Light Sweep on hover */}
            <div className="absolute -inset-full bg-gradient-to-r from-transparent via-red-500/[0.1] via-white/[0.08] to-transparent -rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out pointer-events-none" />

            <div className="relative z-10 border-b border-red-500/20 pb-4">
              <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight flex items-center gap-2">
                <span className="text-white">Send a Direct</span>
                <span className="text-red-500 drop-shadow-[0_0_14px_rgba(220,20,20,0.8)]">Inquiry</span>
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm mt-1.5 font-light leading-relaxed">
                Tell me about your technical goals, timeline, and stack requirements.
              </p>
            </div>

            {formSubmitted ? (
              <div className="relative z-10 p-8 rounded-xl bg-black/60 border border-red-500/50 text-center space-y-3 shadow-[0_0_25px_rgba(220,20,20,0.35)]">
                <div className="w-12 h-12 rounded-full bg-red-600/25 border border-red-500 text-red-500 flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(220,20,20,0.5)]">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-display text-xl font-bold text-white">Inquiry Received</h4>
                <p className="text-xs text-zinc-300 font-light max-w-sm mx-auto">
                  Thank you, {formState.name || 'there'}. Your inquiry has been sent directly to the priority inbox.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormState({
                      name: '',
                      email: '',
                      category: 'Generative AI & RAG Systems',
                      budget: '',
                      details: ''
                    });
                  }}
                  className="mt-4 px-4 py-2 rounded-xl bg-red-950/80 border border-red-500/50 hover:border-red-400 text-xs text-white font-mono transition-colors cursor-pointer shadow-[0_0_12px_rgba(220,20,20,0.4)]"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono tracking-wider uppercase text-zinc-300 font-semibold flex items-center gap-1">
                      <span>YOUR NAME</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Alex Rivera"
                      className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-[#090103] border border-red-500/35 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/40 focus:bg-[#120205] focus:shadow-[0_0_20px_rgba(220,20,20,0.4)] transition-all duration-200"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono tracking-wider uppercase text-zinc-300 font-semibold flex items-center gap-1">
                      <span>YOUR EMAIL</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-[#090103] border border-red-500/35 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/40 focus:bg-[#120205] focus:shadow-[0_0_20px_rgba(220,20,20,0.4)] transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono tracking-wider uppercase text-zinc-300 font-semibold">
                      PROJECT CATEGORY
                    </label>
                    <div className="relative group">
                      <select
                        value={formState.category}
                        onChange={(e) => setFormState({ ...formState, category: e.target.value })}
                        className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-[#090103] border border-red-500/35 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/40 focus:bg-[#120205] focus:shadow-[0_0_20px_rgba(220,20,20,0.4)] transition-all appearance-none cursor-pointer pr-10"
                      >
                        <option value="Generative AI & RAG Systems">Generative AI & RAG Systems</option>
                        <option value="Autonomous AI Agents & Workflows">Autonomous AI Agents & Workflows</option>
                        <option value="Machine Learning & PyTorch Models">Machine Learning & PyTorch Models</option>
                        <option value="FastAPI Backend & Architecture">FastAPI Backend & Architecture</option>
                        <option value="UI/UX & Product Design">UI/UX & Product Design</option>
                        <option value="Full-Time Engineering Role">Full-Time Engineering Role</option>
                        <option value="Technical Advisory & Consulting">Technical Advisory & Consulting</option>
                        <option value="Other Technical Project">Other Technical Project</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-red-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none group-hover:scale-110 transition-transform" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono tracking-wider uppercase text-zinc-300 font-semibold">
                      ESTIMATED SCOPE / BUDGET
                    </label>
                    <input
                      type="text"
                      value={formState.budget}
                      onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                      placeholder="e.g. MVP, 1-month contract, or $5,000"
                      className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-[#090103] border border-red-500/35 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/40 focus:bg-[#120205] focus:shadow-[0_0_20px_rgba(220,20,20,0.4)] transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono tracking-wider uppercase text-zinc-300 font-semibold flex items-center gap-1">
                    <span>PROJECT DETAILS &amp; OBJECTIVES</span>
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.details}
                    onChange={(e) => setFormState({ ...formState, details: e.target.value })}
                    placeholder="Share brief details about your system goals, current data/stack, or what you'd like to build together..."
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-[#090103] border border-red-500/35 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/40 focus:bg-[#120205] focus:shadow-[0_0_20px_rgba(220,20,20,0.4)] transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative overflow-hidden group w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-red-600 hover:from-red-500 hover:via-red-400 hover:to-red-500 text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-[0_0_25px_rgba(220,20,20,0.55)] hover:shadow-[0_0_40px_rgba(239,68,68,0.85)] hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {/* Shimmer light sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
                  <Send className="w-4 h-4 text-white group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                </button>

                <div className="flex items-center justify-between pt-3 border-t border-red-500/20 text-[11px] text-zinc-400 font-mono relative z-10">
                  <div className="flex items-center gap-1.5 group">
                    <Mail className="w-3.5 h-3.5 text-red-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(239,68,68,1)] transition-transform" />
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="hover:text-white transition-colors cursor-pointer text-zinc-300 underline underline-offset-2 flex items-center gap-1.5"
                    >
                      {copiedEmail ? (
                        <span className="text-white font-semibold flex items-center gap-1 bg-red-950/90 px-2 py-0.5 rounded border border-red-500/60 shadow-[0_0_8px_rgba(239,68,68,0.5)]">
                          <Check className="w-3 h-3 text-white" /> Copied to clipboard!
                        </span>
                      ) : (
                        <span>{personal.email}</span>
                      )}
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowResumeModal(true)}
                    className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 text-zinc-300 hover:underline underline-offset-2 group"
                  >
                    <FileText className="w-3.5 h-3.5 text-red-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(239,68,68,1)] transition-transform" />
                    <span>Resume Dossier</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {renderResumeModal()}
    </section>
  );
};

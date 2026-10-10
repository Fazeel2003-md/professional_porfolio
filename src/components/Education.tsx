import React, { useState } from 'react';
import { GraduationCap, Award, CheckCircle2, Calendar, BookOpen, ExternalLink, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA, Certification } from '../data/portfolioData';

export const Education: React.FC = () => {
  const { education, certifications } = PORTFOLIO_DATA;
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="education" className="py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-red-500 uppercase font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span>06. Academic & Verified Credentials</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            EDUCATION & CERTIFICATIONS.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 font-light">
            Strong mathematical foundation in signals and systems coupled with continuous industry accreditations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: B.Tech Degree (5 cols) */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-[#0D0D14] border border-red-500/20 shadow-lg shadow-red-950/20 space-y-6">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-xl bg-red-600/10 border border-red-500/30 text-red-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-red-300 font-bold">
                Class of 2025
              </span>
            </div>

            <div>
              <span className="text-xs font-mono text-zinc-400 uppercase">Degree Program</span>
              <h3 className="font-display text-2xl font-bold text-white mt-1">
                {education.degree}
              </h3>
              <p className="text-sm text-red-400 font-medium mt-1">
                {education.institution}
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-white/10 text-xs text-zinc-300 leading-relaxed font-light">
              <p className="font-mono text-zinc-400 font-medium uppercase text-[11px]">Academic Core Focus:</p>
              <p>{education.focus}</p>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-xs text-zinc-400 leading-relaxed font-light">
              {education.summary}
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 pt-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Full Degree Candidacy Verified (GNIT)</span>
            </div>
          </div>

          {/* Right Column: Industry Certifications (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-zinc-400 uppercase font-semibold">
                Accredited Industry Specializations (AI/ML · Data Science · UI/UX)
              </span>
              <span className="text-xs font-mono text-red-500">{certifications.length} Certified</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  onClick={() => setSelectedCert(cert)}
                  className="p-6 rounded-2xl bg-[#0D0D14] hover:bg-[#13131C] border border-white/5 hover:border-red-500/40 transition-all duration-300 cursor-pointer flex flex-col justify-between group hover:-translate-y-0.5 shadow-sm hover:shadow-lg hover:shadow-red-950/20"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                      <span className="text-red-400 font-semibold">{cert.category}</span>
                      <span className="tabular-nums">{cert.year}</span>
                    </div>

                    <h4 className="font-display text-base font-bold text-white group-hover:text-red-400 transition-colors">
                      {cert.title}
                    </h4>

                    <p className="text-xs text-zinc-400 mt-1">
                      {cert.issuer}
                    </p>

                    <p className="text-xs text-zinc-300 font-light mt-3 line-clamp-2 leading-relaxed">
                      {cert.summary}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-zinc-500">ID: {cert.credentialId}</span>
                    <span className="text-red-400 group-hover:underline">Inspect Credential</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Credential Inspection Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg p-7 rounded-2xl bg-[#101018] border border-red-500/30 shadow-2xl shadow-red-950/50 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-red-500 uppercase">
              <span>{selectedCert.category} Specialization</span>
              <span>{selectedCert.year}</span>
            </div>

            <h3 className="font-display text-2xl font-bold text-white">
              {selectedCert.title}
            </h3>

            <p className="text-xs text-zinc-400">
              Issuing Organization: <strong className="text-white">{selectedCert.issuer}</strong>
            </p>

            <p className="text-sm text-zinc-300 leading-relaxed font-light">
              {selectedCert.summary}
            </p>

            <div className="space-y-1.5 pt-2">
              <span className="text-xs font-mono text-zinc-400 uppercase">Competencies Evaluated:</span>
              <div className="flex flex-wrap gap-1.5">
                {selectedCert.skills.map((s) => (
                  <span key={s} className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs font-mono flex items-center justify-between text-zinc-400">
              <span>Verification Token:</span>
              <span className="text-white font-bold">{selectedCert.credentialId}</span>
            </div>

            <div className="pt-3 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-semibold tracking-wide transition-colors cursor-pointer"
              >
                Close Certificate
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

import React, { useState } from 'react';
import { Award, Calendar, Hash, Copy, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import type { Certification } from '../data/portfolio';

export const Certifications: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 2000);
    }).catch(() => {
      // Fallback
    });
  };

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-black/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-left space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-semibold tracking-wider uppercase">
            <span>Verified Credentials</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Professional Certifications
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full" />
          <p className="text-sm text-slate-400 max-w-2xl pt-1">
            Industry skill certificates issued by Simplilearn SkillUp with authentic certificate credentials.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.certifications.map((cert: Certification) => {
            const isCopied = copiedCode === cert.certificateCode;
            return (
              <div
                key={cert.id}
                className="p-6 rounded-2xl bg-[#0D101C] border border-white/[0.08] hover:border-violet-500/30 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl shadow-black/30"
              >
                <div className="space-y-4">
                  {/* Top Bar with Icon & Issuer */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-violet-600/15 border border-violet-500/20 text-violet-400">
                      <Award className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded bg-white/[0.04] text-slate-300 border border-white/[0.06]">
                      {cert.issuer}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg font-bold text-white leading-snug">
                    {cert.title}
                  </h3>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Issued: {cert.issueDate}</span>
                  </div>

                  {/* Skills Covered */}
                  <div className="pt-2">
                    <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold font-mono mb-2">
                      Key Competencies
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsCovered.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[11px] px-2 py-0.5 rounded bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Secondary Details Area: Certificate Code */}
                <div className="pt-4 border-t border-white/[0.06] space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-slate-400 font-mono">
                      <Hash className="w-3.5 h-3.5 text-violet-400" />
                      <span>Code:</span>
                      <span className="font-bold text-slate-200">{cert.certificateCode}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => copyToClipboard(cert.certificateCode)}
                      className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-1 rounded bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-colors cursor-pointer"
                      title="Copy certificate code"
                      aria-label={`Copy certificate code for ${cert.title}`}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-slate-400" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  {cert.verificationUrl && (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center text-xs font-semibold text-violet-400 hover:text-violet-300 pt-2"
                    >
                      Verify Credential →
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

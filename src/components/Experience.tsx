import React from 'react';
import { Briefcase, Calendar, Globe, CheckCircle2, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-black/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-left space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <span>Work Experience</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Practical Internship Experience
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full" />
        </div>

        {/* Experience Cards / Timeline */}
        <div className="space-y-8">
          {portfolioData.experience.map((exp, index) => (
            <div
              key={index}
              className="relative p-6 sm:p-8 rounded-2xl bg-[#0E111C] border border-white/[0.08] hover:border-violet-500/30 transition-all duration-300 shadow-xl shadow-black/40"
            >
              {/* Card Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="p-2.5 rounded-xl bg-violet-600/15 border border-violet-500/25 text-violet-400">
                      <Briefcase className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <p className="text-base font-semibold text-violet-300">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Metadata Pills */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.04] border border-white/[0.08] text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.duration}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.04] border border-white/[0.08] text-slate-300">
                    <Globe className="w-3.5 h-3.5 text-purple-400" />
                    <span>{exp.format}</span>
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-violet-500/10 border border-violet-500/20 text-violet-300">
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="pt-6 space-y-4">
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold font-mono flex items-center gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-violet-400" />
                  <span>Resume-Supported Responsibilities & Technical Tasks</span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div
                      key={rIdx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {resp}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Workflow Tagline */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Verified across 4 evaluated project tasks</span>
                <span className="text-slate-400">Pandas • Scikit-learn • Matplotlib • Seaborn</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

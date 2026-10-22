import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-left space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <span>Academic Background</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Formal Education
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full" />
        </div>

        {/* Education Card */}
        <div className="relative p-6 sm:p-8 rounded-2xl bg-[#0D101C] border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-gradient-to-br from-cyan-600/20 to-violet-600/20 border border-cyan-500/30 text-cyan-300 shrink-0">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono font-medium text-cyan-400 uppercase tracking-wider">
                  Undergraduate Program
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                  {portfolioData.education.degree}
                </h3>
                <p className="text-base font-semibold text-slate-300">
                  {portfolioData.education.institution}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-slate-200">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>{portfolioData.education.duration}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-slate-200">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                <span>{portfolioData.education.location}</span>
              </div>
            </div>
          </div>

          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-violet-400" />
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
                  Specialization Focus
                </h4>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Core curriculum integrates computer science fundamentals with specialized tracks in Artificial Intelligence, Machine Learning algorithms, database architectures, and data structures.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] flex flex-col justify-between">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
                  Current Status
                </h4>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Active full-time student (2023 – Present). Rigorous academic focus balanced with applied self-directed machine learning projects and industry-evaluated internships.
              </p>
              <span className="text-[11px] text-slate-500 font-mono mt-2">
                * Records verified strictly against Kavya_Resume.pdf
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

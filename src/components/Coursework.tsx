import React from 'react';
import { BookOpen, Sparkles, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Coursework: React.FC = () => {
  return (
    <section id="coursework" className="py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Relevant Coursework */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-left space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-semibold tracking-wider uppercase">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Curriculum Depth</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Relevant Coursework
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Core academic subjects completed or actively pursued as part of the B.E. (AI & ML) program.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {portfolioData.coursework.map((course, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#0D101C] border border-white/[0.08] hover:border-violet-500/30 transition-all flex items-center gap-2.5 group"
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:bg-violet-400 transition-colors" />
                  <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                    {course}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Strengths */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-left space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Professional Attributes</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Core Strengths
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Interpersonal and problem-solving strengths highlighted on resume.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {portfolioData.strengths.map((str, sIdx) => (
                <div
                  key={sIdx}
                  className="px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-500/40 text-slate-200 text-xs sm:text-sm font-medium flex items-center gap-2 transition-all hover:bg-white/[0.06]"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>{str}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

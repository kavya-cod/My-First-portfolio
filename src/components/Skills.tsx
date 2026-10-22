import React from 'react';
import { Code2, Database, Wrench, BrainCircuit } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming':
        return <Code2 className="w-5 h-5 text-violet-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-cyan-400" />;
      case 'Tools':
        return <Wrench className="w-5 h-5 text-purple-400" />;
      case 'Machine Learning & Data Analysis':
        return <BrainCircuit className="w-5 h-5 text-emerald-400" />;
      default:
        return <Code2 className="w-5 h-5 text-violet-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-black/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-left space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-semibold tracking-wider uppercase">
            <span>Technical Capabilities</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Skills & Methodologies
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full" />
          <p className="text-sm text-slate-400 max-w-2xl pt-1">
            Technical competencies developed through coursework, internship tasks, and machine learning projects.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.skills.map((group, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl bg-[#0D101C] border border-white/[0.08] hover:border-violet-500/30 transition-all duration-300 flex flex-col justify-between ${
                group.category === 'Machine Learning & Data Analysis' ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-3 border-b border-white/[0.06]">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                    {getCategoryIcon(group.category)}
                  </div>
                  <h3 className="font-heading text-base font-bold text-white">
                    {group.category}
                  </h3>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-200 bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-violet-500/40 transition-colors flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400/80" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>{group.items.length} items</span>
                <span>Resume verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { ArrowUpRight, Cpu, BarChart2, TrendingUp, Info } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import type { Project } from '../data/portfolio';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getCardIcon = (id: string) => {
    switch (id) {
      case 'predictive-modeling':
        return <Cpu className="w-5 h-5 text-violet-400" />;
      case 'exploratory-data-analysis':
        return <BarChart2 className="w-5 h-5 text-cyan-400" />;
      case 'retail-analytics':
        return <TrendingUp className="w-5 h-5 text-purple-400" />;
      default:
        return <Cpu className="w-5 h-5 text-violet-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div className="text-left space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-semibold tracking-wider uppercase">
              <span>Featured Work</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Data Science & ML Projects
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full" />
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400 bg-white/[0.03] px-3.5 py-2 rounded-xl border border-white/[0.06] max-w-md">
            <Info className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>
              All project specifications and evaluations are drawn strictly from resume records.
            </span>
          </div>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {portfolioData.projects.map((proj) => (
            <div
              key={proj.id}
              className="group flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#0D101C] hover:bg-[#121629] border border-white/[0.08] hover:border-violet-500/40 transition-all duration-300 shadow-xl shadow-black/50 hover:shadow-violet-600/10"
            >
              <div className="space-y-4">
                {/* Card Header & Icon */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:scale-105 transition-transform">
                    {getCardIcon(proj.id)}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]">
                    {proj.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                  {proj.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {proj.shortDescription}
                </p>

                {/* Key Work Highlights */}
                <div className="pt-2 space-y-2 border-t border-white/[0.06]">
                  <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold font-mono">
                    Key Work Performed
                  </p>
                  <ul className="space-y-1.5">
                    {proj.keyHighlights.slice(0, 2).map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-snug">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Bottom Area: Tags & Action */}
              <div className="pt-6 mt-6 border-t border-white/[0.06] space-y-4">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#161B2E] text-slate-300 border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Details Button */}
                <button
                  type="button"
                  id={`project-details-btn-${proj.id}`}
                  onClick={() => setSelectedProject(proj)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-white/[0.05] hover:bg-violet-600/30 border border-white/[0.1] hover:border-violet-500/40 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 cursor-pointer"
                >
                  <span>View Project Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-violet-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accessible Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

import React from 'react';
import { Cpu, Layers, BarChart3, GraduationCap, MapPin, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-violet-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-cyan-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-purple-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-violet-400" />;
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-left space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-semibold tracking-wider uppercase">
            <span>About Me</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {portfolioData.about.heading}
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-base leading-relaxed">
            {portfolioData.about.paragraphs.map((p, idx) => (
              <p key={idx} className="bg-white/[0.015] p-4 rounded-xl border border-white/[0.04]">
                {p}
              </p>
            ))}

            {/* Quick Context Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#121625] to-[#0A0D16] border border-white/[0.08] flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-violet-600/20 text-violet-300 border border-violet-500/30">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    {portfolioData.education.degree}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {portfolioData.education.institution} • {portfolioData.education.duration}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-300 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] whitespace-nowrap">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{portfolioData.profile.location}</span>
              </div>
            </div>
          </div>

          {/* Focus Areas Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2 font-mono">
              Core Technical Competencies
            </h3>
            {portfolioData.about.focusAreas.map((area, idx) => (
              <div
                key={idx}
                className="group p-5 rounded-xl bg-[#0D101C] hover:bg-[#121728] border border-white/[0.08] hover:border-violet-500/30 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-white/[0.04] group-hover:bg-white/[0.08] transition-colors">
                    {getIcon(area.icon)}
                  </div>
                  <h4 className="text-base font-semibold text-white group-hover:text-violet-300 transition-colors">
                    {area.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 pl-11 leading-normal">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

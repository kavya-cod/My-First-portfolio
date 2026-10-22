import React from 'react';
import { ArrowDown, Mail, Sparkles, Database, Terminal, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Hero: React.FC = () => {
  const scrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-violet-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/40 border border-violet-500/30 text-violet-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>{portfolioData.hero.eyebrow}</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
            Turning Data Into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400">
              Meaningful Insights.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            {portfolioData.hero.supportingCopy}
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              type="button"
              id="hero-explore-work-btn"
              onClick={() => scrollTo('#projects')}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-lg shadow-violet-600/25 hover:shadow-violet-600/40 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 cursor-pointer"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              type="button"
              id="hero-contact-btn"
              onClick={() => scrollTo('#contact')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] hover:border-violet-500/40 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-slate-400" />
              <span>Let's Connect</span>
            </button>
          </div>

          {/* Core Technical Pills */}
          <div className="pt-4 border-t border-white/[0.08]">
            <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
              Core Technical Focus
            </p>
            <div className="flex flex-wrap items-center gap-2.5">
              {portfolioData.hero.pills.map((pill) => (
                <span
                  key={pill}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-[#121520] border border-white/[0.08] hover:border-violet-500/30 transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Abstract AI & Data Neural Architecture Visual */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[460px] aspect-square rounded-2xl p-6 bg-gradient-to-b from-[#131625] to-[#0A0C14] border border-white/[0.1] shadow-2xl shadow-black/80 flex flex-col justify-between overflow-hidden">
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-44 h-44 bg-violet-600/15 blur-3xl rounded-full pointer-events-none" />

            {/* Visual Top Bar */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/60 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60 inline-block" />
                <span className="ml-2 text-slate-300">kavya.pipeline.graph</span>
              </div>
              <span className="text-cyan-400 font-semibold">AI/ML Node</span>
            </div>

            {/* Neural Graph / SVG Nodes Centerpiece */}
            <div className="my-auto relative py-2">
              <svg viewBox="0 0 360 220" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="link-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.7" />
                  </linearGradient>
                  <linearGradient id="link-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.8" />
                  </linearGradient>
                  <filter id="node-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Connection lines: Layer 1 -> Layer 2 */}
                <line x1="45" y1="50" x2="145" y2="70" stroke="url(#link-grad-1)" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
                <line x1="45" y1="50" x2="145" y2="150" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" />
                <line x1="45" y1="110" x2="145" y2="70" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" />
                <line x1="45" y1="110" x2="145" y2="150" stroke="url(#link-grad-1)" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />
                <line x1="45" y1="170" x2="145" y2="70" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" />
                <line x1="45" y1="170" x2="145" y2="150" stroke="url(#link-grad-1)" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />

                {/* Connection lines: Layer 2 -> Layer 3 */}
                <line x1="145" y1="70" x2="235" y2="50" stroke="url(#link-grad-2)" strokeWidth="1.5" />
                <line x1="145" y1="70" x2="235" y2="110" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" />
                <line x1="145" y1="70" x2="235" y2="170" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" />
                <line x1="145" y1="150" x2="235" y2="50" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" />
                <line x1="145" y1="150" x2="235" y2="110" stroke="url(#link-grad-2)" strokeWidth="1.5" />
                <line x1="145" y1="150" x2="235" y2="170" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" />

                {/* Connection lines: Layer 3 -> Output */}
                <line x1="235" y1="50" x2="315" y2="110" stroke="url(#link-grad-1)" strokeWidth="1.5" strokeDasharray="2 2" />
                <line x1="235" y1="110" x2="315" y2="110" stroke="#06B6D4" strokeWidth="2" filter="url(#node-glow)" />
                <line x1="235" y1="170" x2="315" y2="110" stroke="url(#link-grad-1)" strokeWidth="1.5" strokeDasharray="2 2" />

                {/* Nodes - Layer 1 (Data Ingestion) */}
                <circle cx="45" cy="50" r="7" fill="#1A1F35" stroke="#8B5CF6" strokeWidth="2" />
                <circle cx="45" cy="110" r="7" fill="#1A1F35" stroke="#8B5CF6" strokeWidth="2" />
                <circle cx="45" cy="170" r="7" fill="#1A1F35" stroke="#8B5CF6" strokeWidth="2" />

                {/* Nodes - Layer 2 (Feature Engineering & Preprocessing) */}
                <circle cx="145" cy="70" r="8" fill="#1A1F35" stroke="#06B6D4" strokeWidth="2" />
                <circle cx="145" cy="150" r="8" fill="#1A1F35" stroke="#06B6D4" strokeWidth="2" />

                {/* Nodes - Layer 3 (Classification & Ensembles) */}
                <circle cx="235" cy="50" r="8" fill="#1A1F35" stroke="#A78BFA" strokeWidth="2" />
                <circle cx="235" cy="110" r="9" fill="#8B5CF6" stroke="#EDE9FE" strokeWidth="2.5" filter="url(#node-glow)" />
                <circle cx="235" cy="170" r="8" fill="#1A1F35" stroke="#A78BFA" strokeWidth="2" />

                {/* Output Node - Insights & Evaluation */}
                <circle cx="315" cy="110" r="11" fill="#06B6D4" stroke="#CFFAFE" strokeWidth="3" filter="url(#node-glow)" />

                {/* Labels */}
                <text x="45" y="196" fill="#64748B" fontSize="9" textAnchor="middle" fontFamily="sans-serif">Input Data</text>
                <text x="145" y="180" fill="#64748B" fontSize="9" textAnchor="middle" fontFamily="sans-serif">Features</text>
                <text x="235" y="196" fill="#64748B" fontSize="9" textAnchor="middle" fontFamily="sans-serif">Models</text>
                <text x="315" y="136" fill="#22D3EE" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Insights</text>
              </svg>
            </div>

            {/* Bottom Terminal Badges */}
            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/[0.08] text-center">
              <div className="bg-white/[0.03] p-2 rounded-lg border border-white/[0.05]">
                <div className="flex items-center justify-center gap-1 text-[11px] text-slate-400">
                  <Terminal className="w-3 h-3 text-violet-400" />
                  <span>Python</span>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">Core logic</span>
              </div>
              <div className="bg-white/[0.03] p-2 rounded-lg border border-white/[0.05]">
                <div className="flex items-center justify-center gap-1 text-[11px] text-slate-400">
                  <Database className="w-3 h-3 text-cyan-400" />
                  <span>SQL / EDA</span>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">Structured</span>
              </div>
              <div className="bg-white/[0.03] p-2 rounded-lg border border-white/[0.05]">
                <div className="flex items-center justify-center gap-1 text-[11px] text-slate-400">
                  <Cpu className="w-3 h-3 text-purple-400" />
                  <span>Modeling</span>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">Scikit-learn</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

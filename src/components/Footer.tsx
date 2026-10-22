import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { LinkedInIcon, GitHubIcon } from './Icons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-white/[0.08] bg-[#06070B] py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="space-y-2 text-center md:text-left">
            <a
              href="#home"
              className="inline-flex items-center gap-2 group font-heading text-xl font-bold tracking-tight text-white hover:text-violet-400 transition-colors"
            >
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-600 to-cyan-500 p-[1px]">
                <div className="w-full h-full bg-[#08090E] rounded-[5px] flex items-center justify-center font-bold text-xs text-white">
                  K
                </div>
              </div>
              <span>{portfolioData.profile.textLogo}</span>
            </a>
            <p className="text-xs sm:text-sm text-slate-400 italic">
              “Built with curiosity and a love for learning.”
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={portfolioData.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-cyan-400 border border-white/[0.06] transition-colors"
              aria-label="Kavya LinkedIn profile"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-violet-400 border border-white/[0.06] transition-colors"
              aria-label="Kavya GitHub profile"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
            <button
              type="button"
              id="footer-back-to-top-btn"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-violet-600/20 text-slate-400 hover:text-violet-300 border border-white/[0.06] hover:border-violet-500/30 transition-colors cursor-pointer"
              aria-label="Back to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Navigation Shortcuts */}
        <div className="pt-6 border-t border-white/[0.04] flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-xs text-slate-400">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-violet-300 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Bottom Copyright & Verification Line */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {portfolioData.profile.name}. All verified credentials and project records sourced from resume.
          </p>
          <div className="flex items-center gap-1.5 text-slate-500">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for Data & Machine Learning</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

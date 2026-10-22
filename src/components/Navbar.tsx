import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08090E]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Text Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-lg p-1"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 p-[1px] shadow-sm shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-shadow">
              <div className="w-full h-full bg-[#08090E] rounded-[7px] flex items-center justify-center font-bold text-sm tracking-wider text-white">
                K
              </div>
            </div>
            <span className="font-heading font-bold text-lg tracking-tight text-white group-hover:text-violet-400 transition-colors">
              {portfolioData.profile.textLogo}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${
                    isActive
                      ? 'text-white bg-white/[0.08] shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Opportunities Badge & Resume */}
          <div className="hidden lg:flex items-center gap-3">
            {portfolioData.profile.isOpenToOpportunities && (
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{portfolioData.profile.opportunityStatusText}</span>
              </div>
            )}
            <a
              href={portfolioData.profile.resumePdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-violet-600/20 hover:bg-violet-600/30 text-violet-300 border border-violet-500/30 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              title="Download Kavya's Resume (PDF)"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 opacity-70" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 md:hidden">
            {portfolioData.profile.isOpenToOpportunities && (
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open</span>
              </span>
            )}
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden border-b border-white/[0.08] bg-[#0A0D15]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 animate-fadeIn"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-violet-600/20 text-violet-300 font-semibold'
                      : 'text-slate-300 hover:bg-white/[0.05] hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
            <a
              href={portfolioData.profile.resumePdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-violet-600 text-white hover:bg-violet-500 transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

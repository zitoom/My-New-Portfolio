import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  isDark,
  onToggleTheme
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'services', label: 'Services' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (viewId: string) => {
    onNavigate(viewId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0c1322]/85 dark:bg-[#0c1322]/85 light:bg-white/85 backdrop-blur-xl border-b border-[#424754]/30 dark:border-[#424754]/30 shadow-[0_1px_12px_rgba(0,0,0,0.35)] transition-colors duration-200">
      <div className="h-20 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Monogram & Name */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4d8eff] rounded-lg p-1"
          aria-label="Jitendra Mahanty Studio - Return to home"
        >
          {/* Architectural JM Monogram */}
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#191f2f] to-[#232a3a] border border-[#424754]/50 flex items-center justify-center text-[#adc6ff] font-mono font-semibold text-sm shadow-md group-hover:border-[#4d8eff] transition-colors">
            JM
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-base sm:text-lg tracking-tight text-[#dce2f8] group-hover:text-[#adc6ff] transition-colors">
              {PERSONAL_INFO.name.toUpperCase()}
            </span>
            <span className="font-mono text-[10px] text-[#8c909f] tracking-widest uppercase">
              STUDIO &middot; ARCHITECTURE
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`py-2 text-sm font-medium transition-colors duration-150 relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4d8eff] rounded ${
                  isActive
                    ? 'text-[#adc6ff] font-semibold'
                    : 'text-[#c2c6d6] hover:text-[#dce2f8]'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4d8eff] rounded-full animate-fadeIn" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="w-10 h-10 rounded-xl bg-[#191f2f] hover:bg-[#232a3a] border border-[#424754]/40 flex items-center justify-center text-[#c2c6d6] hover:text-[#adc6ff] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4d8eff]"
            type="button"
          >
            {isDark ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Let's Talk CTA */}
          <button
            onClick={() => handleNavClick('contact')}
            className="hidden sm:inline-flex items-center justify-center h-10 px-5 rounded-full bg-[#4d8eff] text-white hover:bg-[#3b82f6] font-medium text-xs tracking-wide uppercase transition-all duration-150 shadow-[0_0_20px_-6px_rgba(77,142,255,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#adc6ff]"
          >
            Let's Talk
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile navigation menu"
            aria-expanded={mobileMenuOpen}
            className="md:hidden w-10 h-10 rounded-xl bg-[#191f2f] hover:bg-[#232a3a] border border-[#424754]/40 flex items-center justify-center text-[#c2c6d6] hover:text-[#dce2f8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4d8eff]"
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c1322] border-b border-[#424754]/40 px-4 py-4 space-y-1 shadow-2xl">
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#191f2f] text-[#adc6ff] font-semibold'
                    : 'text-[#c2c6d6] hover:bg-[#151b2b] hover:text-[#dce2f8]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-2 border-t border-[#424754]/30">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full h-11 rounded-xl bg-[#4d8eff] text-white font-medium text-sm flex items-center justify-center gap-2"
            >
              <span>Get in Touch</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

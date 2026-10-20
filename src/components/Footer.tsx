import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (view: string) => {
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#070e1d] border-t border-[#424754]/30 text-[#c2c6d6] transition-colors">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Studio Profile & Availability */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#191f2f] border border-[#424754]/40 flex items-center justify-center text-[#adc6ff] font-mono text-xs font-semibold">
                JM
              </div>
              <span className="font-semibold text-lg text-[#dce2f8] tracking-tight">
                {PERSONAL_INFO.name.toUpperCase()} <span className="font-mono text-xs text-[#8c909f]">/ STUDIO</span>
              </span>
            </div>

            <p className="text-sm text-[#8c909f] max-w-md leading-relaxed">
              14+ years designing high-scale cloud platforms, distributed architectures, enterprise Android ecosystems, and applied generative AI systems.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151b2b] border border-[#424754]/40 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2fd9f4] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2fd9f4]"></span>
              </span>
              <span className="font-mono text-[11px] text-[#c2c6d6] tracking-wider uppercase">
                {PERSONAL_INFO.availability}
              </span>
            </div>
          </div>

          {/* Architecture Navigation */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="font-mono text-xs text-[#adc6ff] uppercase tracking-wider font-semibold">
              Architecture Navigation
            </span>
            <nav className="grid grid-cols-2 gap-2 text-sm" aria-label="Footer Navigation">
              <button
                onClick={() => handleNav('home')}
                className="text-left text-[#8c909f] hover:text-[#dce2f8] py-1 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => handleNav('about')}
                className="text-left text-[#8c909f] hover:text-[#dce2f8] py-1 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => handleNav('projects')}
                className="text-left text-[#8c909f] hover:text-[#dce2f8] py-1 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => handleNav('experience')}
                className="text-left text-[#8c909f] hover:text-[#dce2f8] py-1 transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => handleNav('services')}
                className="text-left text-[#8c909f] hover:text-[#dce2f8] py-1 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => handleNav('resume')}
                className="text-left text-[#8c909f] hover:text-[#dce2f8] py-1 transition-colors"
              >
                Resume
              </button>
              <button
                onClick={() => handleNav('contact')}
                className="text-left text-[#8c909f] hover:text-[#dce2f8] py-1 transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Network & Presence */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="font-mono text-xs text-[#adc6ff] uppercase tracking-wider font-semibold">
              Network &amp; Direct Contact
            </span>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8c909f] hover:text-[#adc6ff] flex items-center gap-2 py-1 transition-colors group"
              >
                <svg className="w-4 h-4 text-[#8c909f] group-hover:text-[#adc6ff]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn Network</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-[#8c909f] hover:text-[#adc6ff] flex items-center gap-2 py-1 transition-colors group"
              >
                <svg className="w-4 h-4 text-[#8c909f] group-hover:text-[#adc6ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="truncate">{PERSONAL_INFO.email}</span>
              </a>

              <a
                href="https://wa.me/917760078622?text=Hello%20Jitendra,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20an%20engineering%20opportunity."
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8c909f] hover:text-[#2fd9f4] flex items-center gap-2 py-1 transition-colors group"
              >
                <svg className="w-4 h-4 text-[#2fd9f4]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>WhatsApp: +91 7760078622</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Metadata & System Bar */}
        <div className="pt-8 border-t border-[#424754]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8c909f]">
          <span>&copy; {new Date().getFullYear()} Jitendra Mahanty Studio. Rigorously engineered with high-precision UI.</span>
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <span>STATUS: SYSTEMS OPERATIONAL</span>
            <span>EXPERIENCE: 14+ YEARS</span>
            <span>VER: 3.4.1</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

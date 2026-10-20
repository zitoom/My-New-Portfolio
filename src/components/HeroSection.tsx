import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onExploreWork: () => void;
  onGetInTouch: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreWork,
  onGetInTouch
}) => {
  // Photos provided by Jitendra Mahanty
  const photoOptions = [
    {
      id: 'workstation',
      label: 'Developer Workstation',
      src: '/assets/aistudio/Confident_Developer_in_a_Modern_Workspace_6c2f1d2e.png',
      caption: 'Engineering leadership & distributed systems development'
    },
    {
      id: 'presentation',
      label: 'AWS Cloud Presentation',
      src: '/assets/aistudio/AWS_Cloud_Architecture_Team_Presentation_aa5ccc16.png',
      caption: 'Directing enterprise AWS cloud architecture & engineering roadmap'
    },
    {
      id: 'workspace',
      label: 'Modern Tech Workspace',
      src: '/assets/aistudio/Modern_Workspace_Coffee_Portrait_0b814a66.png',
      caption: 'Calm, modern software studio & advisory'
    }
  ];

  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  // Animated rotating text for verified capabilities
  const animatedRoles = [
    'AWS Solutions Architecture & Scalability',
    'Native Android & 10-Foot TV Systems',
    'Distributed Backends & Microservices',
    'Applied Generative AI & LLM Systems',
    'Retail Kiosks Scaled to 500K+ Users'
  ];

  const animatedKeywords = [
    'code, creativity',
    'cloud architecture',
    'applied intelligence',
    'distributed systems',
    'resilient engineering'
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [keywordIndex, setKeywordIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const roleTimer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % animatedRoles.length);
        setKeywordIndex((prev) => (prev + 1) % animatedKeywords.length);
        setIsFading(false);
      }, 300);
    }, 3800);

    return () => clearInterval(roleTimer);
  }, [animatedRoles.length, animatedKeywords.length]);

  const activePhoto = photoOptions[activePhotoIdx];

  return (
    <section className="relative w-full flex flex-col justify-between overflow-hidden bg-[#0c1322] pt-4 pb-12">
      {/* Ambient Radial Background Glows */}
      <div className="absolute top-12 left-1/4 w-[500px] h-[500px] bg-[#4d8eff]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-[#2fd9f4]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* 1. FULL IMAGE SHOWCASE (UNOBSTRUCTED, ZERO TEXT OVERLAPPING THE PHOTO) */}
        <div className="relative w-full rounded-3xl overflow-hidden border border-[#424754]/40 bg-[#070e1d] shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
          {/* Main Full Photo */}
          <div className="relative w-full max-h-[560px] sm:max-h-[620px] lg:max-h-[680px] overflow-hidden flex items-center justify-center bg-[#070e1d]">
            <img
              key={activePhoto.src}
              src={activePhoto.src}
              alt={`Jitendra Mahanty - ${activePhoto.label}`}
              className="w-full h-auto max-h-[680px] object-contain object-center filter contrast-[1.03] transition-opacity duration-700 ease-in-out"
              loading="eager"
            />

            {/* Subtle edge vignette (does not obscure the subject) */}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#070e1d] via-[#070e1d]/50 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#070e1d]/60 to-transparent pointer-events-none" />
          </div>

          {/* Small compact overlay bar at bottom of the frame */}
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 px-4 rounded-2xl bg-[#0c1322]/85 backdrop-blur-xl border border-[#424754]/40">
            {/* Small status indicator */}
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2fd9f4] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2fd9f4]" />
              </span>
              <span className="font-mono text-xs font-semibold text-[#dce2f8] uppercase tracking-wider">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[#8c909f]">&middot;</span>
              <span className="font-mono text-[11px] text-[#2fd9f4]">14+ Years Leadership</span>
              <span className="hidden md:inline text-[#8c909f]">&middot;</span>
              <span className="hidden md:inline font-mono text-[11px] text-[#8c909f]">{activePhoto.caption}</span>
            </div>

            {/* Photo Selector Buttons */}
            <div className="flex items-center gap-1.5 self-start sm:self-auto overflow-x-auto max-w-full">
              {photoOptions.map((photo, index) => (
                <button
                  key={photo.id}
                  onClick={() => setActivePhotoIdx(index)}
                  className={`px-3 py-1 rounded-xl font-mono text-[11px] whitespace-nowrap transition-all duration-200 border ${
                    activePhotoIdx === index
                      ? 'bg-[#4d8eff] text-white border-[#4d8eff] shadow-sm'
                      : 'bg-[#151b2b]/90 text-[#c2c6d6] hover:text-[#dce2f8] border-[#424754]/40 hover:bg-[#191f2f]'
                  }`}
                >
                  {photo.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 2. ANIMATED EDITORIAL SECTION (POSITIONED SAFELY BELOW THE IMAGE) */}
        <div className="relative rounded-3xl p-6 sm:p-10 lg:p-12 bg-[#151b2b] border border-[#424754]/40 shadow-2xl text-[#dce2f8]">
          {/* Subtle glow inside card */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#4d8eff]/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Eyebrow & Animated Rotating Domain */}
          <div className="flex flex-wrap items-center gap-2.5 mb-5 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#191f2f] border border-[#2fd9f4]/40">
              <span className="w-2 h-2 rounded-full bg-[#2fd9f4] animate-pulse" />
              <span className="font-mono text-[11px] text-[#2fd9f4] uppercase tracking-wider font-semibold">
                SOFTWARE ENGINEERING &middot; CLOUD &middot; ARCHITECTURE &middot; AI
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#191f2f] border border-[#424754]/40">
              <span className="font-mono text-[10px] text-[#8c909f] uppercase tracking-widest">
                VERIFIED SPECIALTY:
              </span>
              <span
                className={`font-mono text-[11px] text-[#adc6ff] font-medium transition-opacity duration-300 ${
                  isFading ? 'opacity-0' : 'opacity-100'
                }`}
              >
                {animatedRoles[roleIndex]}
              </span>
            </div>
          </div>

          {/* Expressive Headline with Animated Text */}
          <h1 className="text-3xl sm:text-4xl lg:text-[52px] leading-[1.12] tracking-[-0.03em] font-bold text-[#dce2f8] mb-5 relative z-10">
            I build useful things with{' '}
            <span className="inline-block relative">
              <span
                className={`text-transparent bg-clip-text bg-gradient-to-r from-[#adc6ff] via-[#2fd9f4] to-[#bdc2ff] transition-all duration-300 ${
                  isFading ? 'opacity-0 translate-y-1' : 'opacity-100 translate-y-0'
                }`}
              >
                {animatedKeywords[keywordIndex]}
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#adc6ff] to-[#2fd9f4] rounded-full opacity-60" />
            </span>
            , and curiosity.
          </h1>

          {/* Supporting Statement */}
          <p className="text-base sm:text-lg text-[#c2c6d6] leading-relaxed mb-8 max-w-3xl relative z-10">
            From cloud architecture and distributed backends to native Android ecosystems and practical AI-powered products, I enjoy turning complex technical challenges into resilient systems people can trust.
          </p>

          {/* Verified Impact Telemetry Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 p-4 rounded-2xl bg-[#070e1d] border border-[#424754]/40 relative z-10">
            <div className="p-2">
              <div className="font-mono text-[10px] text-[#8c909f] uppercase">USERS SERVED</div>
              <div className="font-mono text-2xl font-bold text-[#2fd9f4]">500K+</div>
              <div className="text-xs text-[#8c909f] mt-0.5">Staples Kiosk Platform</div>
            </div>
            <div className="p-2 sm:border-l sm:border-[#424754]/30 sm:pl-4">
              <div className="font-mono text-[10px] text-[#8c909f] uppercase">AWS OPTIMIZATION</div>
              <div className="font-mono text-2xl font-bold text-[#adc6ff]">-30%</div>
              <div className="text-xs text-[#8c909f] mt-0.5">Cloud Cost Reduction</div>
            </div>
            <div className="p-2 sm:border-l sm:border-[#424754]/30 sm:pl-4">
              <div className="font-mono text-[10px] text-[#8c909f] uppercase">CI/CD VELOCITY</div>
              <div className="font-mono text-2xl font-bold text-[#bdc2ff]">2w &rarr; 3d</div>
              <div className="text-xs text-[#8c909f] mt-0.5">Release Acceleration</div>
            </div>
          </div>

          {/* Philosophy Quote */}
          <div className="relative pl-4 border-l-2 border-[#2fd9f4] py-1 mb-8 max-w-2xl bg-gradient-to-r from-[#191f2f]/60 to-transparent rounded-r-lg relative z-10">
            <p className="text-base sm:text-lg italic text-[#dce2f8] font-normal leading-snug">
              &ldquo;{PERSONAL_INFO.manifesto}&rdquo;
            </p>
            <span className="block mt-1 font-mono text-[10px] text-[#8c909f] uppercase tracking-wider">
              {PERSONAL_INFO.deliveryPrinciple}
            </span>
          </div>

          {/* Actions & Links */}
          <div className="flex flex-wrap items-center gap-4 relative z-10">
            <button
              onClick={onExploreWork}
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-[#4d8eff] text-white hover:bg-[#3b82f6] font-medium text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-[0_0_24px_-6px_rgba(77,142,255,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#adc6ff]"
            >
              <span>Explore My Work</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            <button
              onClick={onGetInTouch}
              className="inline-flex items-center justify-center h-12 px-7 rounded-full bg-[#191f2f] hover:bg-[#232a3a] border border-[#424754]/40 text-[#dce2f8] font-medium text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#adc6ff]"
            >
              <span>Get in Touch</span>
            </button>

            <div className="flex items-center gap-2 sm:ml-auto">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-11 h-11 rounded-full bg-[#191f2f] hover:bg-[#232a3a] border border-[#424754]/40 text-[#c2c6d6] hover:text-[#adc6ff] flex items-center justify-center transition-colors"
                title="LinkedIn Network"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Direct Email"
                className="w-11 h-11 rounded-full bg-[#191f2f] hover:bg-[#232a3a] border border-[#424754]/40 text-[#c2c6d6] hover:text-[#adc6ff] flex items-center justify-center transition-colors"
                title="Email Jitendra"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Hero Bottom Bar */}
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-4 border-t border-[#424754]/25 flex items-center justify-between text-xs text-[#8c909f]">
        <button
          onClick={onExploreWork}
          className="flex items-center gap-2 hover:text-[#adc6ff] transition-colors font-mono tracking-widest text-[11px]"
        >
          <svg className="w-4 h-4 animate-bounce text-[#2fd9f4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <span>SCROLL TO EXPLORE WORK</span>
        </button>

        <div className="hidden sm:flex items-center gap-6 font-mono text-[11px]">
          <span>VERIFIED &middot; 14+ YEARS LEADERSHIP</span>
          <span>LATENCY &middot; 42ms</span>
          <span>SYSTEMS &middot; 100% OPERATIONAL</span>
        </div>
      </div>
    </section>
  );
};

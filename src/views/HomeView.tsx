import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { AchievementsSection } from '../components/AchievementsSection';
import { TTSPlayground } from '../components/TTSPlayground';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';

interface HomeViewProps {
  onNavigate: (view: string) => void;
  onSelectProject: (project: ProjectItem) => void;
  onOpenSpecialModal: (type: 'tv' | 'nidra') => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onSelectProject,
  onOpenSpecialModal
}) => {
  const pharmaFlow = PROJECTS.find((p) => p.id === 'pharmaflow-ai');
  const clinicFlow = PROJECTS.find((p) => p.id === 'clinicflow');
  const musicFlow = PROJECTS.find((p) => p.id === 'musicflow-tv');
  const nidra = PROJECTS.find((p) => p.id === 'nidra-breathwork');
  const redCrab = PROJECTS.find((p) => p.id === 'red-crab-resort');
  const bananaPudi = PROJECTS.find((p) => p.id === 'banana-pudi');
  const staples = PROJECTS.find((p) => p.id === 'staples-kiosk');
  const precue = PROJECTS.find((p) => p.id === 'precue-cardiac');

  return (
    <div className="flex flex-col w-full">
      {/* 1. EDITORIAL & CINEMATIC HERO */}
      <HeroSection
        onExploreWork={() => {
          const el = document.getElementById('selected-work');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          else onNavigate('projects');
        }}
        onGetInTouch={() => onNavigate('contact')}
      />

      {/* 2. VERIFIED ACHIEVEMENTS METRICS SECTION */}
      <AchievementsSection />

      {/* 3. TRANSITION INTO SELECTED PRODUCTS */}
      <section className="relative w-full pt-20 pb-8" id="selected-work">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#2fd9f4] uppercase tracking-widest mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2fd9f4]" />
                <span>SELECTED WORK</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#dce2f8]">
                Ideas turned into products.
              </h2>
              <p className="text-base text-[#c2c6d6] mt-2 leading-relaxed">
                A selection of applications, websites, and software systems I've architected and developed.
              </p>
            </div>
            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-2 font-mono text-xs text-[#adc6ff] hover:text-[#dce2f8] transition-colors self-start md:self-end pb-1 border-b border-[#adc6ff]/40"
            >
              <span>View All 12 Projects</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* 4. CINEMATIC PRODUCT SHOWCASES */}
      <section className="w-full bg-[#070e1d] py-12 transition-colors">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* SHOWCASE 1: PharmaFlow AI */}
          {pharmaFlow && (
            <article className="relative bg-[#151b2b] border border-[#424754]/35 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden group">
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#2fd9f4]/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                {/* Visual Presentation Mockup */}
                <div className="lg:col-span-7 relative">
                  <div className="relative rounded-2xl overflow-hidden bg-[#070e1d] border border-[#424754]/40 shadow-xl">
                    {/* Simulated Preview Header Bar */}
                    <div className="flex items-center justify-between px-4 py-2.5 bg-[#191f2f] border-b border-[#424754]/30 text-[#c2c6d6]">
                      <div className="flex items-center gap-2 font-mono text-xs">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ffb4ab]/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#2fd9f4]/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#adc6ff]/80" />
                        <span className="ml-2 text-[#8c909f]">pharmaflow.internal/batches</span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#2e3545] font-mono text-[11px] text-[#2fd9f4]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2fd9f4] animate-pulse" />
                        <span>PREVIEW &middot; REAL-TIME LEDGER</span>
                      </div>
                    </div>

                    {/* Application UI Mockup */}
                    <div className="relative overflow-hidden aspect-[16/10]">
                      <img
                        src={pharmaFlow.imageSrc}
                        alt={pharmaFlow.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                        loading="lazy"
                      />
                      {/* Floating Scrubber Bar */}
                      <div className="absolute bottom-4 left-4 right-4 bg-[#191f2f]/90 backdrop-blur-md rounded-xl p-2.5 border border-[#424754]/40 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded-md bg-[#232a3a] flex items-center justify-center text-[#2fd9f4] text-xs font-bold">
                            &gt;
                          </span>
                          <div className="w-28 sm:w-48 h-1 bg-[#2e3545] rounded-full overflow-hidden">
                            <div className="h-full bg-[#2fd9f4] w-3/4 rounded-full" />
                          </div>
                          <span className="font-mono text-[11px] text-[#8c909f]">00:24 / 00:32</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#2e3545] text-[#2fd9f4]">
                            1.0x Active
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description & Technical Details */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-xs text-[#2fd9f4] uppercase tracking-wider">
                        {pharmaFlow.categoryLabel}
                      </span>
                      <span className="text-[#424754]">&bull;</span>
                      <span className="font-mono text-xs text-[#8c909f]">{pharmaFlow.releaseTag}</span>
                    </div>

                    <h3 className="text-3xl font-bold text-[#dce2f8] mb-3 group-hover:text-[#adc6ff] transition-colors">
                      {pharmaFlow.title}
                    </h3>

                    <p className="text-sm text-[#c2c6d6] mb-6 leading-relaxed">
                      {pharmaFlow.summary}
                    </p>

                    {/* Highlights Cards */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="p-3.5 rounded-xl bg-[#191f2f] border border-[#424754]/30">
                        <span className="font-mono text-[10px] text-[#8c909f] uppercase block mb-1">
                          Batch Tracking
                        </span>
                        <span className="font-mono text-xl font-bold text-[#dce2f8]">12,480+</span>
                        <span className="font-mono text-[10px] text-[#2fd9f4] block mt-0.5">
                          Automated audit synced
                        </span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#191f2f] border border-[#424754]/30">
                        <span className="font-mono text-[10px] text-[#8c909f] uppercase block mb-1">
                          Expiry Predictor
                        </span>
                        <span className="font-mono text-xl font-bold text-[#bdc2ff]">99.8%</span>
                        <span className="font-mono text-[10px] text-[#adc6ff] block mt-0.5">
                          &lt; 30d risk flagged
                        </span>
                      </div>
                    </div>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {['React', 'TypeScript', 'PostgreSQL', 'FastAPI LLM Engine'].map((t) => (
                        <span
                          key={t}
                          className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#191f2f] text-[#dce2f8] border border-[#424754]/30"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => onSelectProject(pharmaFlow)}
                      className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-[#4d8eff] text-white hover:bg-[#3b82f6] text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
                    >
                      <span>View Case Study</span>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                    <button
                      onClick={() => onSelectProject(pharmaFlow)}
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-[#8c909f] hover:text-[#dce2f8] transition-colors"
                    >
                      <span>System Specs &rarr;</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* SHOWCASE 2: ClinicFlow */}
          {clinicFlow && (
            <article className="relative bg-[#151b2b] border border-[#424754]/35 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Product Context */}
                <div className="lg:col-span-5 flex flex-col justify-between order-2 lg:order-1">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-xs text-[#adc6ff] uppercase tracking-wider">
                        {clinicFlow.categoryLabel}
                      </span>
                      <span className="text-[#424754]">&bull;</span>
                      <span className="font-mono text-xs text-[#8c909f]">PRODUCTION SAAS DESIGN</span>
                    </div>

                    <h3 className="text-3xl font-bold text-[#dce2f8] mb-3 group-hover:text-[#adc6ff] transition-colors">
                      {clinicFlow.title}
                    </h3>

                    <p className="text-sm text-[#c2c6d6] mb-6 leading-relaxed">
                      {clinicFlow.summary}
                    </p>

                    <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-[#c2c6d6]">
                      {clinicFlow.keyHighlights.slice(0, 3).map((hl, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="text-[#2fd9f4] font-bold mt-0.5">&check;</span>
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {['Next.js 14', 'Tailwind CSS', 'WebSockets', 'Prisma / Postgres'].map((t) => (
                        <span
                          key={t}
                          className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#191f2f] text-[#dce2f8] border border-[#424754]/30"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={() => onSelectProject(clinicFlow)}
                      className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-[#191f2f] hover:bg-[#232a3a] border border-[#424754]/40 text-[#dce2f8] text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      <span>Explore Interactive Architecture</span>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Right: Titanium Laptop Mockup Visual */}
                <div className="lg:col-span-7 order-1 lg:order-2">
                  <div className="relative rounded-2xl overflow-hidden border border-[#424754]/40 bg-[#070e1d] shadow-2xl p-2 group-hover:border-[#4d8eff]/40 transition-colors duration-300">
                    <img
                      src="/assets/aistudio/Image_5_22543396.jpeg"
                      alt={clinicFlow.imageAlt}
                      className="w-full h-auto rounded-xl object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* SHOWCASE 3: ASYMMETRIC DUO (MusicFlow TV + Nidra) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left (7 Cols): MusicFlow TV */}
            {musicFlow && (
              <article className="lg:col-span-7 bg-[#151b2b] border border-[#424754]/35 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between group">
                <div>
                  {/* Visual: Living Room OLED */}
                  <div className="relative rounded-2xl overflow-hidden mb-6 border border-[#424754]/30 bg-[#070e1d]">
                    <img
                      src="/assets/aistudio/Image_6_cbcb5dfd.jpeg"
                      alt={musicFlow.imageAlt}
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <span className="absolute top-4 left-4 px-2.5 py-1 rounded bg-[#191f2f]/90 backdrop-blur font-mono text-xs text-[#bdc2ff]">
                      Android TV &middot; 10-Foot Navigation
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-[#bdc2ff] uppercase tracking-wider">
                      {musicFlow.categoryLabel}
                    </span>
                    <span className="font-mono text-xs text-[#8c909f]">KOTLIN / COMPOSE</span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#dce2f8] mb-2 group-hover:text-[#bdc2ff] transition-colors">
                    {musicFlow.title}
                  </h3>

                  <p className="text-sm text-[#c2c6d6] mb-4 leading-relaxed">
                    {musicFlow.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {['Jetpack Compose', 'Android TV', 'Media3', 'Coroutines'].map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs px-2.5 py-1 rounded bg-[#191f2f] text-[#dce2f8]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onOpenSpecialModal('tv')}
                    className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-[#2fd9f4] text-[#002f36] hover:bg-[#a2eeff] text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    <span>Test TV D-Pad Simulation</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                  <button
                    onClick={() => onSelectProject(musicFlow)}
                    className="h-10 px-4 rounded-full bg-[#191f2f] hover:bg-[#232a3a] text-[#c2c6d6] text-xs font-mono"
                  >
                    Details
                  </button>
                </div>
              </article>
            )}

            {/* Right (5 Cols): Nidra Mobile Breathwork */}
            {nidra && (
              <article className="lg:col-span-5 bg-[#151b2b] border border-[#424754]/35 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between group">
                <div>
                  {/* Visual: Mobile Screen Mockup */}
                  <div className="relative rounded-2xl overflow-hidden mb-6 border border-[#424754]/30 bg-[#070e1d] flex items-center justify-center p-4">
                    <img
                      src="/assets/aistudio/Image_1_ca80585a.jpeg"
                      alt={nidra.imageAlt}
                      className="h-64 sm:h-72 w-auto object-contain group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <span className="absolute top-4 right-4 px-2.5 py-1 rounded bg-[#191f2f]/90 backdrop-blur font-mono text-xs text-[#adc6ff]">
                      Mobile App &middot; Kotlin
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-[#adc6ff] uppercase tracking-wider">
                      {nidra.categoryLabel}
                    </span>
                    <span className="font-mono text-xs text-[#8c909f]">ANDROID NATIVE</span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#dce2f8] mb-2 group-hover:text-[#adc6ff] transition-colors">
                    {nidra.title}
                  </h3>

                  <p className="text-sm text-[#c2c6d6] mb-4 leading-relaxed">
                    {nidra.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {['Android Compose', 'Haptic Synthesis', 'Spatial Audio'].map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs px-2.5 py-1 rounded bg-[#191f2f] text-[#dce2f8]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onOpenSpecialModal('nidra')}
                    className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-[#adc6ff] text-[#002e6a] hover:bg-white text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    <span>Experience Cadence Guide</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                  <button
                    onClick={() => onSelectProject(nidra)}
                    className="h-10 px-4 rounded-full bg-[#191f2f] hover:bg-[#232a3a] text-[#c2c6d6] text-xs font-mono"
                  >
                    Details
                  </button>
                </div>
              </article>
            )}
          </div>

          {/* SHOWCASE 4: AI Text-to-Speech & Web Applications */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* AI Synthesizer Interactive Console (7 Cols) */}
            <div className="lg:col-span-7">
              <TTSPlayground />
            </div>

            {/* Hospitality & Web Builds (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Build 1: Red Crab Resort */}
              {redCrab && (
                <article className="bg-[#151b2b] border border-[#424754]/35 rounded-2xl p-6 hover:bg-[#191f2f] transition-colors shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-[#adc6ff] uppercase tracking-wider">
                      {redCrab.categoryLabel}
                    </span>
                    <span className="font-mono text-xs text-[#8c909f]">LIVE CLIENT</span>
                  </div>
                  <h4 className="text-xl font-bold text-[#dce2f8] mb-2">
                    {redCrab.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#c2c6d6] mb-4 leading-relaxed">
                    {redCrab.summary}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-[#424754]/20">
                    <span className="font-mono text-xs text-[#8c909f]">Next.js &middot; Direct Booking</span>
                    <a
                      href="https://redcrabresort.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-[#adc6ff] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Preview Live</span>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </article>
              )}

              {/* Build 2: Banana and Pudi */}
              {bananaPudi && (
                <article className="bg-[#151b2b] border border-[#424754]/35 rounded-2xl p-6 hover:bg-[#191f2f] transition-colors shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-[#bdc2ff] uppercase tracking-wider">
                      {bananaPudi.categoryLabel}
                    </span>
                    <span className="font-mono text-xs text-[#8c909f]">LIVE CLIENT</span>
                  </div>
                  <h4 className="text-xl font-bold text-[#dce2f8] mb-2">
                    {bananaPudi.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#c2c6d6] mb-4 leading-relaxed">
                    {bananaPudi.summary}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-[#424754]/20">
                    <span className="font-mono text-xs text-[#8c909f]">Shopify Headless &middot; React</span>
                    <button
                      onClick={() => onSelectProject(bananaPudi)}
                      className="font-mono text-xs text-[#bdc2ff] hover:underline inline-flex items-center gap-1"
                    >
                      <span>View Architecture</span>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </article>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. ENTERPRISE ENGINEERING HIGHLIGHTS (Staples Kiosk, Precue) */}
      <section className="w-full bg-[#0c1322] py-20 border-t border-[#424754]/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="font-mono text-xs text-[#2fd9f4] uppercase tracking-wider block mb-2">
                VERIFIED EMPLOYMENT ACHIEVEMENTS
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#dce2f8]">
                Enterprise Systems &amp; High-Volume Scale
              </h2>
            </div>
            <p className="text-sm text-[#8c909f] max-w-md">
              Architectural leadership on North American retail kiosks, medical-grade cardiac acoustic diagnostics, and distributed AWS pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Staples Kiosk */}
            {staples && (
              <div
                onClick={() => onSelectProject(staples)}
                className="p-8 rounded-3xl bg-[#151b2b] border border-[#424754]/40 hover:border-[#4d8eff] transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-[#adc6ff] uppercase tracking-wider">
                      EFI India &middot; 2018–2024
                    </span>
                    <span className="font-mono text-xs text-[#2fd9f4] px-2.5 py-0.5 rounded bg-[#191f2f] border border-[#424754]/30">
                      500K+ USERS
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#dce2f8] mb-3 group-hover:text-[#adc6ff] transition-colors">
                    {staples.title}
                  </h3>

                  <p className="text-sm text-[#c2c6d6] leading-relaxed mb-6">
                    {staples.summary}
                  </p>

                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-[#191f2f]">
                      <div className="font-mono text-xs text-[#8c909f]">AWS COST</div>
                      <div className="font-mono text-lg font-bold text-[#2fd9f4]">-30%</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#191f2f]">
                      <div className="font-mono text-xs text-[#8c909f]">CI/CD RELEASE</div>
                      <div className="font-mono text-lg font-bold text-[#adc6ff]">2w &rarr; 3d</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#191f2f]">
                      <div className="font-mono text-xs text-[#8c909f]">GATEWAYS</div>
                      <div className="font-mono text-lg font-bold text-[#bdc2ff]">8 Cards</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#424754]/20 text-xs font-mono text-[#adc6ff]">
                  <span>Explore Architecture Breakdown</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
            )}

            {/* Precue Cardiac */}
            {precue && (
              <div
                onClick={() => onSelectProject(precue)}
                className="p-8 rounded-3xl bg-[#151b2b] border border-[#424754]/40 hover:border-[#2fd9f4] transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-[#2fd9f4] uppercase tracking-wider">
                      Wipro &middot; Healthcare Mobility
                    </span>
                    <span className="font-mono text-xs text-[#bdc2ff] px-2.5 py-0.5 rounded bg-[#191f2f] border border-[#424754]/30">
                      ACOUSTIC DSP
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#dce2f8] mb-3 group-hover:text-[#2fd9f4] transition-colors">
                    {precue.title}
                  </h3>

                  <p className="text-sm text-[#c2c6d6] leading-relaxed mb-6">
                    {precue.summary}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-[#191f2f]">
                      <div className="font-mono text-xs text-[#8c909f]">COMMUNICATION</div>
                      <div className="font-mono text-base font-bold text-[#2fd9f4]">BLE Optimization</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#191f2f]">
                      <div className="font-mono text-xs text-[#8c909f]">DIAGNOSTIC</div>
                      <div className="font-mono text-base font-bold text-[#adc6ff]">Abnormal Heart Sounds</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#424754]/20 text-xs font-mono text-[#2fd9f4]">
                  <span>Explore Healthcare Engineering</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. TECHNICAL CAPABILITIES & SERVICES */}
      <section className="w-full bg-[#070e1d] py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="font-mono text-xs text-[#2fd9f4] uppercase tracking-wider block mb-2">
                CORE PROFICIENCY
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#dce2f8]">
                Engineering Capabilities
              </h2>
            </div>
            <p className="text-sm text-[#8c909f] max-w-md">
              Disciplined, modern software architecture built for production scale, reliability, and human delight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#151b2b] border border-[#424754]/30 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#191f2f] flex items-center justify-center text-[#adc6ff] mb-4 font-mono font-bold text-sm">
                  &gt;_
                </div>
                <h3 className="text-lg font-bold text-[#dce2f8] mb-2">Solution Architecture</h3>
                <p className="text-xs sm:text-sm text-[#8c909f] leading-relaxed">
                  Clean architecture, distributed system design, integration API contracts, and scalable backend pipelines designed for predictable growth.
                </p>
              </div>
              <div className="mt-6 pt-3 font-mono text-xs text-[#adc6ff] border-t border-[#424754]/20">
                AWS &middot; PostgreSQL &middot; Microservices
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#151b2b] border border-[#424754]/30 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#191f2f] flex items-center justify-center text-[#2fd9f4] mb-4 font-mono font-bold text-sm">
                  &lt;&gt;
                </div>
                <h3 className="text-lg font-bold text-[#dce2f8] mb-2">Full-Stack Development</h3>
                <p className="text-xs sm:text-sm text-[#8c909f] leading-relaxed">
                  Modern reactive interfaces using React, Next.js, and TypeScript, backed by robust REST and GraphQL APIs with optimized relational storage.
                </p>
              </div>
              <div className="mt-6 pt-3 font-mono text-xs text-[#2fd9f4] border-t border-[#424754]/20">
                React &middot; TypeScript &middot; Node.js
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#151b2b] border border-[#424754]/30 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#191f2f] flex items-center justify-center text-[#bdc2ff] mb-4 font-mono font-bold text-sm">
                  TV
                </div>
                <h3 className="text-lg font-bold text-[#dce2f8] mb-2">Android &amp; TV Engineering</h3>
                <p className="text-xs sm:text-sm text-[#8c909f] leading-relaxed">
                  Native Android SDK and Jetpack Compose ecosystems. Delivering fluid 60fps animations, modular coroutines, and Android TV 10-foot navigation.
                </p>
              </div>
              <div className="mt-6 pt-3 font-mono text-xs text-[#bdc2ff] border-t border-[#424754]/20">
                Kotlin &middot; Compose &middot; Android TV
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#151b2b] border border-[#424754]/30 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#191f2f] flex items-center justify-center text-[#4d8eff] mb-4 font-mono font-bold text-sm">
                  AI
                </div>
                <h3 className="text-lg font-bold text-[#dce2f8] mb-2">Practical AI Applications</h3>
                <p className="text-xs sm:text-sm text-[#8c909f] leading-relaxed">
                  LLM API orchestration, agent workflows, automated context ingestion, and practical voice/generative engines built for tangible business ROI.
                </p>
              </div>
              <div className="mt-6 pt-3 font-mono text-xs text-[#4d8eff] border-t border-[#424754]/20">
                Gemini &middot; ChatGPT &middot; RAG
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CLOSING CALL TO ACTION SECTION */}
      <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative bg-[#151b2b] border border-[#424754]/35 rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -bottom-20 w-[420px] h-[420px] bg-[#4d8eff]/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#191f2f] mb-6 border border-[#424754]/30">
              <span className="w-2 h-2 rounded-full bg-[#2fd9f4]" />
              <span className="font-mono text-xs text-[#dce2f8] tracking-wider uppercase">
                Direct Engineering Engagement
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#dce2f8] mb-4">
              Have an idea worth building?
            </h2>

            <p className="text-base sm:text-lg text-[#c2c6d6] mb-8 leading-relaxed">
              Let's discuss the problem, explore the possibilities, and find a practical way forward. Whether it is an end-to-end product, specialized Android native app, cloud architecture audit, or a smart AI automation layer.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-[#4d8eff] text-white hover:bg-[#3b82f6] font-medium text-sm transition-all duration-150 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#adc6ff]"
              >
                <span>Start a Conversation</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <a
                href="https://wa.me/917760078622?text=Hello%20Jitendra,%20I%20would%20like%20to%20discuss%20a%20software%20project%20or%20engineering%20role."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-[#191f2f] hover:bg-[#232a3a] text-[#dce2f8] font-medium text-sm transition-all duration-150 border border-[#424754]/30"
              >
                <svg className="w-4 h-4 text-[#2fd9f4]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>WhatsApp: +91 7760078622</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

import React from 'react';
import { PERSONAL_INFO, AWARDS } from '../data/portfolioData';

interface AboutViewProps {
  onNavigate: (view: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-[#2fd9f4] uppercase tracking-widest mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2fd9f4]" />
          <span>BACKGROUND &middot; ENGINEERING PHILOSOPHY</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#dce2f8] mb-4">
          Architecting Resilient Software
        </h1>
        <p className="text-base sm:text-lg text-[#c2c6d6] leading-relaxed">
          The story behind 14+ years of building high-concurrency cloud systems, native Android ecosystems, and practical modern software products.
        </p>
      </div>

      {/* Main Grid: Portrait and Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
        {/* Left Column: Portrait and Key Facts */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="rounded-3xl overflow-hidden border border-[#424754]/40 bg-[#151b2b] shadow-2xl relative group">
            <img
              src="/assets/aistudio/Modern_Workspace_Coffee_Portrait_0b814a66.png"
              alt="Jitendra Mahanty - Senior Lead Engineer &amp; Technical Architect"
              className="w-full aspect-[4/5] object-cover object-center filter contrast-[1.03]"
            />
            <div className="p-6 bg-[#151b2b] border-t border-[#424754]/30">
              <div className="font-bold text-lg text-[#dce2f8] mb-1">{PERSONAL_INFO.name}</div>
              <div className="font-mono text-xs text-[#adc6ff] mb-4">{PERSONAL_INFO.title}</div>
              <div className="space-y-2 text-xs font-mono text-[#8c909f]">
                <div className="flex justify-between">
                  <span>EXPERIENCE:</span>
                  <span className="text-[#dce2f8]">14+ Years</span>
                </div>
                <div className="flex justify-between">
                  <span>DEGREE:</span>
                  <span className="text-[#dce2f8]">MCA, BPUT Odisha (2011)</span>
                </div>
                <div className="flex justify-between">
                  <span>LOCATION:</span>
                  <span className="text-[#dce2f8]">{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex justify-between">
                  <span>AVAILABILITY:</span>
                  <span className="text-[#2fd9f4]">Advisory &amp; Architecture</span>
                </div>
              </div>
            </div>
          </div>

          {/* Awards Banner */}
          <div className="p-6 rounded-3xl bg-[#151b2b] border border-[#424754]/40">
            <span className="font-mono text-xs text-[#bdc2ff] uppercase tracking-wider block mb-3 font-semibold">
              EXCELLENCE AWARDS
            </span>
            <div className="space-y-4">
              {AWARDS.map((awd, idx) => (
                <div key={idx} className="text-xs">
                  <div className="font-bold text-[#dce2f8] flex items-center justify-between">
                    <span>{awd.title}</span>
                    <span className="font-mono text-[#2fd9f4]">{awd.organization}</span>
                  </div>
                  <p className="text-[#8c909f] mt-1 leading-relaxed">
                    {awd.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Professional Story & Principles */}
        <div className="lg:col-span-7 flex flex-col gap-8 text-[#c2c6d6] leading-relaxed">
          {/* Philosophy Block */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#151b2b] border-l-4 border-[#2fd9f4] border-[#424754]/40 shadow-xl">
            <h2 className="text-2xl font-bold text-[#dce2f8] mb-3">
              Studio Delivery Principle
            </h2>
            <blockquote className="text-xl sm:text-2xl italic text-[#dce2f8] font-normal leading-snug mb-4">
              &ldquo;{PERSONAL_INFO.manifesto}&rdquo;
            </blockquote>
            <p className="text-sm text-[#8c909f]">
              Engineering excellence is not measured by the volume of code written or the density of buzzwords on a slide deck. It is proven by software that runs quietly in production for years with zero unhandled panics, intuitive interfaces that respect human attention, and architectures that save organizations hundreds of thousands of dollars in cloud waste.
            </p>
          </div>

          {/* The Career Progression */}
          <div className="space-y-4 text-sm sm:text-base">
            <h3 className="text-2xl font-bold text-[#dce2f8]">
              The 14-Year Engineering Arc
            </h3>
            <p>
              I began my software engineering career in 2011 after completing my Master of Computer Applications (MCA) at Regional College of Management, BPUT Odisha. In the early 2010s, building for Android meant mastering lower-level OS primitives, memory allocation constraints, and high-frequency UI rendering on devices with less than 512MB of RAM.
            </p>
            <p>
              That early discipline in performance profiling shaped how I view software today. Over the following decade, I progressed through technical lead and senior lead engineering roles at companies like Wipro and EFI India. I spearheaded the architecture for the global Staples Kiosk and PrintMe platform, scaling it to serve over 500,000 retail users, integrating PCI-compliant payment flows across 8 card providers, and driving a verified 30% reduction in AWS cloud infrastructure spending.
            </p>
            <p>
              In healthcare mobility, I tackled cardiac acoustic signal processing on the Precue system—filtering ambient interference over Bluetooth Low Energy to isolate abnormal heart murmurs for clinicians—enforcing strict HIPAA and ABDM data protections.
            </p>
          </div>

          {/* AWS Architecture Leadership Photo Showcase */}
          <div className="rounded-3xl overflow-hidden border border-[#424754]/40 bg-[#151b2b] shadow-2xl">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src="/assets/aistudio/AWS_Cloud_Architecture_Team_Presentation_aa5ccc16.png"
                alt="Jitendra Mahanty presenting enterprise AWS cloud architecture diagram to team"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0c1322] via-[#0c1322]/70 to-transparent p-5">
                <div className="font-mono text-xs text-[#2fd9f4] uppercase tracking-wider mb-1">
                  TECHNICAL LEADERSHIP &middot; ARCHITECTURE IN ACTION
                </div>
                <div className="text-sm font-semibold text-[#dce2f8]">
                  Directing Enterprise AWS Multi-Tier Cloud Architecture &amp; Scalability
                </div>
              </div>
            </div>
            <div className="p-4 bg-[#070e1d] font-mono text-xs text-[#8c909f] flex items-center justify-between">
              <span>VPC &middot; Route 53 &middot; CloudFront &middot; Lambda &middot; RDS &middot; DynamoDB</span>
              <span className="text-[#adc6ff]">AWS Solutions Architect</span>
            </div>
          </div>

          {/* Core Architectural Pillars */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#dce2f8]">
              Core Architectural Pillars
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#151b2b] border border-[#424754]/30">
                <div className="font-mono text-xs text-[#2fd9f4] uppercase tracking-wider mb-1">PILLAR 01</div>
                <div className="font-bold text-[#dce2f8] mb-1 text-sm">Architecture-First Invariants</div>
                <p className="text-xs text-[#8c909f] leading-relaxed">
                  Clear data boundaries, explicit state machines, and defensive API contracts before writing a single line of business logic.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#151b2b] border border-[#424754]/30">
                <div className="font-mono text-xs text-[#adc6ff] uppercase tracking-wider mb-1">PILLAR 02</div>
                <div className="font-bold text-[#dce2f8] mb-1 text-sm">Pragmatic AI Integration</div>
                <p className="text-xs text-[#8c909f] leading-relaxed">
                  Applied LLMs and neural models built to solve tangible operational friction—never decorative AI chat bubbles or hollow marketing claims.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#151b2b] border border-[#424754]/30">
                <div className="font-mono text-xs text-[#bdc2ff] uppercase tracking-wider mb-1">PILLAR 03</div>
                <div className="font-bold text-[#dce2f8] mb-1 text-sm">Lean Cloud Footprint</div>
                <p className="text-xs text-[#8c909f] leading-relaxed">
                  Rigorous resource rightsizing, serverless burst utilization, and smart caching to keep AWS bills lean and predictable.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#151b2b] border border-[#424754]/30">
                <div className="font-mono text-xs text-[#2fd9f4] uppercase tracking-wider mb-1">PILLAR 04</div>
                <div className="font-bold text-[#dce2f8] mb-1 text-sm">Human-Centered Ergonomics</div>
                <p className="text-xs text-[#8c909f] leading-relaxed">
                  From 10-foot Android TV screens to clinical triage consoles, typography and layout density must serve human ergonomics first.
                </p>
              </div>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#424754]/30">
            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-[#4d8eff] text-white hover:bg-[#3b82f6] text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
            >
              <span>Explore My Work</span>
              <span>&rarr;</span>
            </button>
            <button
              onClick={() => onNavigate('resume')}
              className="h-11 px-6 rounded-full bg-[#191f2f] hover:bg-[#232a3a] text-[#dce2f8] text-xs font-mono transition-colors border border-[#424754]/30"
            >
              View Full Résumé
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

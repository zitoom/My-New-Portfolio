import React from 'react';
import { SERVICES, PERSONAL_INFO } from '../data/portfolioData';

interface ServicesViewProps {
  onContactClick: (serviceTitle?: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onContactClick }) => {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-[#2fd9f4] uppercase tracking-widest mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2fd9f4]" />
          <span>CAPABILITIES &middot; TECHNICAL CONSULTING</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#dce2f8] mb-4">
          Engineering &amp; Architecture Capabilities
        </h1>
        <p className="text-base sm:text-lg text-[#c2c6d6] leading-relaxed">
          I provide hands-on technical architecture, cloud optimization, Android native systems, and applied AI integration as an independent senior consultant and technical leader.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {SERVICES.map((srv) => (
          <div
            key={srv.id}
            className="p-8 rounded-3xl bg-[#151b2b] border border-[#424754]/40 hover:border-[#4d8eff]/50 transition-colors flex flex-col justify-between shadow-xl group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#2fd9f4] uppercase tracking-wider">
                  CAPABILITY
                </span>
                <span className="font-mono text-[11px] text-[#adc6ff] px-2.5 py-0.5 rounded bg-[#191f2f] border border-[#424754]/30">
                  {srv.typicalEngagements.split('(')[0].trim()}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#dce2f8] mb-3 group-hover:text-[#adc6ff] transition-colors">
                {srv.title}
              </h3>

              <p className="text-sm text-[#c2c6d6] leading-relaxed mb-6">
                {srv.shortSummary}
              </p>

              {/* Deliverables List */}
              <div className="mb-6">
                <span className="font-mono text-xs text-[#8c909f] uppercase tracking-wider font-semibold block mb-2">
                  Key Deliverables
                </span>
                <ul className="space-y-2">
                  {srv.deliverables.map((deliv, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#c2c6d6]">
                      <span className="text-[#2fd9f4] font-bold mt-0.5">&check;</span>
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Focus */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {srv.techFocus.map((tech, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#191f2f] text-[#8c909f] border border-[#424754]/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#424754]/20 flex items-center justify-between">
              <span className="font-mono text-xs text-[#8c909f]">Direct Consultation</span>
              <button
                onClick={() => onContactClick(srv.title)}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#4d8eff] hover:text-[#adc6ff] transition-colors"
              >
                <span>Discuss Scope &rarr;</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Engagement Philosophy Callout */}
      <div className="p-8 rounded-3xl bg-[#070e1d] border border-[#424754]/40 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="max-w-xl">
          <span className="font-mono text-xs text-[#2fd9f4] uppercase tracking-wider block mb-1">
            CONSULTING TRANSPARENCY
          </span>
          <h4 className="text-xl font-bold text-[#dce2f8] mb-2">
            Architecture-Led, High-Discipline Delivery
          </h4>
          <p className="text-xs sm:text-sm text-[#8c909f] leading-relaxed">
            All capabilities are offered on an individual consulting, fractional advisory, or lead architect basis. No inflated agency claims, no hidden handoffs to junior contractors.
          </p>
        </div>

        <button
          onClick={() => onContactClick()}
          className="h-11 px-6 rounded-full bg-[#4d8eff] text-white hover:bg-[#3b82f6] text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 shadow-md"
        >
          Initiate Advisory Discussion
        </button>
      </div>
    </div>
  );
};

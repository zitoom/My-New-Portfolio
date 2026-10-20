import React from 'react';
import { VERIFIED_METRICS } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  return (
    <section className="w-full bg-[#070e1d] border-y border-[#424754]/30 py-16 transition-colors">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#2fd9f4] uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2fd9f4]" />
              <span>VERIFIED ENGINEERING IMPACT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#dce2f8]">
              Measurable Outcomes &amp; Leadership Scale
            </h2>
          </div>
          <p className="text-sm text-[#8c909f] max-w-md leading-relaxed">
            Tangible results achieved across high-volume retail kiosks, distributed cloud services, and connected enterprise architectures.
          </p>
        </div>

        {/* 6-Metric Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VERIFIED_METRICS.map((metric, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl bg-[#151b2b] border border-[#424754]/40 hover:border-[#4d8eff]/50 transition-colors duration-200 group flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-[#adc6ff] uppercase tracking-wider font-medium">
                    {metric.label}
                  </span>
                  {metric.highlight && (
                    <span className="font-mono text-[10px] text-[#2fd9f4] px-2 py-0.5 rounded bg-[#191f2f] border border-[#424754]/30">
                      {metric.highlight}
                    </span>
                  )}
                </div>

                {/* Big Metric Display */}
                <div className="font-mono text-4xl sm:text-5xl font-bold text-[#dce2f8] tracking-tight mb-4 group-hover:text-[#adc6ff] transition-colors">
                  {metric.value}
                </div>
              </div>

              {/* Context Note */}
              <div className="pt-4 border-t border-[#424754]/20">
                <p className="text-xs sm:text-sm text-[#8c909f] leading-relaxed">
                  {metric.context}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Context Integrity Disclaimer */}
        <div className="mt-8 flex items-center justify-between text-[11px] font-mono text-[#8c909f]/80 pt-4 border-t border-[#424754]/20">
          <span>SOURCE: VERIFIED EMPLOYMENT ACHIEVEMENTS (EFI, STAPLES KIOSK, SSAC CLOUD &amp; RESUME AUDIT)</span>
          <span className="hidden sm:inline">PRESERVED CONTEXTUALLY WITHOUT FABRICATION</span>
        </div>
      </div>
    </section>
  );
};

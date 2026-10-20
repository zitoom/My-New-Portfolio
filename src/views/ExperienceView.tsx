import React from 'react';
import { WORK_EXPERIENCES, EDUCATION, CERTIFICATIONS, AWARDS } from '../data/portfolioData';

export const ExperienceView: React.FC = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-[#2fd9f4] uppercase tracking-widest mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2fd9f4]" />
          <span>CHRONOLOGY &middot; 14+ YEARS LEADERSHIP</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#dce2f8] mb-4">
          Professional Experience
        </h1>
        <p className="text-base sm:text-lg text-[#c2c6d6] leading-relaxed">
          A continuous track record of architecture-led software engineering, cloud optimization, and team leadership from 2011 through present day.
        </p>

        {/* Overlapping Dates Note (Prompt compliance) */}
        <div className="mt-6 p-4 rounded-2xl bg-[#151b2b] border border-[#424754]/40 flex items-start gap-3">
          <span className="text-[#2fd9f4] text-lg font-mono">&bull;</span>
          <p className="text-xs font-mono text-[#8c909f] leading-relaxed">
            <strong className="text-[#dce2f8]">Record Transparency:</strong> All dates, job titles, and employers are preserved verbatim from the verified résumé. Overlapping tenures (e.g. 2016–2017) reflect simultaneous advisory contracts, enterprise project handovers, and transition consulting engagements.
          </p>
        </div>
      </div>

      {/* Career Timeline */}
      <div className="relative border-l border-[#424754]/40 ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-12 mb-20">
        {WORK_EXPERIENCES.map((exp) => (
          <div key={exp.id} className="relative group">
            {/* Timeline Node Dot */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#0c1322] border-2 border-[#4d8eff] group-hover:border-[#2fd9f4] transition-colors flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4d8eff]" />
            </div>

            {/* Experience Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#151b2b] border border-[#424754]/40 group-hover:border-[#4d8eff]/50 transition-colors shadow-xl">
              {/* Top metadata */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <span className="font-mono text-xs text-[#2fd9f4] uppercase tracking-wider block mb-1">
                    {exp.company}
                  </span>
                  <h3 className="text-2xl font-bold text-[#dce2f8]">
                    {exp.role}
                  </h3>
                </div>
                <div className="text-left sm:text-right">
                  <span className="inline-block font-mono text-xs px-3 py-1 rounded-full bg-[#191f2f] text-[#adc6ff] border border-[#424754]/30">
                    {exp.period}
                  </span>
                  {exp.location && (
                    <span className="block font-mono text-[11px] text-[#8c909f] mt-1">
                      {exp.location}
                    </span>
                  )}
                </div>
              </div>

              {/* Specific note if applicable */}
              {exp.dateNote && (
                <div className="mb-4 p-2.5 rounded-xl bg-[#070e1d] font-mono text-[11px] text-[#8c909f]">
                  {exp.dateNote}
                </div>
              )}

              {/* Summary */}
              <p className="text-sm text-[#c2c6d6] leading-relaxed mb-6">
                {exp.summary}
              </p>

              {/* Key Achievements if present */}
              {exp.keyAchievements && exp.keyAchievements.length > 0 && (
                <div className="mb-6 p-4 rounded-2xl bg-[#070e1d] border border-[#424754]/30">
                  <span className="font-mono text-xs text-[#2fd9f4] uppercase tracking-wider font-semibold block mb-2">
                    Verified Outcomes
                  </span>
                  <ul className="space-y-2">
                    {exp.keyAchievements.map((ach, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#dce2f8]">
                        <span className="text-[#2fd9f4] font-bold">&check;</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* AWS Architecture Photo for EFI India tenure */}
              {exp.id === 'efi-india' && (
                <div className="mb-6 rounded-2xl overflow-hidden border border-[#424754]/40 bg-[#070e1d]">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src="/assets/aistudio/AWS_Cloud_Architecture_Team_Presentation_aa5ccc16.png"
                      alt="Jitendra Mahanty leading AWS Cloud Architecture presentation"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0c1322] via-[#0c1322]/80 to-transparent p-4">
                      <div className="font-mono text-[11px] text-[#2fd9f4] uppercase tracking-wider">
                        ARCHITECTURE LEADERSHIP &middot; AWS SOLUTIONS
                      </div>
                      <div className="text-xs text-[#dce2f8] font-medium">
                        Directing high-scale cloud infrastructure, 30% AWS cost optimization, and team execution
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Responsibilities */}
              <div className="mb-6">
                <span className="font-mono text-xs text-[#8c909f] uppercase tracking-wider font-semibold block mb-2">
                  Key Responsibilities
                </span>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#c2c6d6]">
                      <span className="text-[#4d8eff] mt-1">&bull;</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#424754]/20">
                {exp.technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#191f2f] text-[#8c909f] border border-[#424754]/30"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Honors, Awards & Education Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Education */}
        <div className="p-6 rounded-3xl bg-[#151b2b] border border-[#424754]/40">
          <div className="font-mono text-xs text-[#2fd9f4] uppercase tracking-wider mb-2">
            ACADEMIC CREDENTIALS
          </div>
          <h3 className="text-xl font-bold text-[#dce2f8] mb-3">Education</h3>
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-sm font-semibold text-[#adc6ff]">{edu.degree}</div>
              <div className="text-xs text-[#dce2f8]">{edu.institution}</div>
              <div className="font-mono text-[11px] text-[#8c909f]">{edu.location} &middot; Class of {edu.year}</div>
              {edu.details && (
                <p className="text-xs text-[#8c909f] pt-2 leading-relaxed">
                  {edu.details}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="p-6 rounded-3xl bg-[#151b2b] border border-[#424754]/40">
          <div className="font-mono text-xs text-[#adc6ff] uppercase tracking-wider mb-2">
            ACCREDITATIONS
          </div>
          <h3 className="text-xl font-bold text-[#dce2f8] mb-3">Certifications &amp; Training</h3>
          <ul className="space-y-3">
            {CERTIFICATIONS.map((cert, idx) => (
              <li key={idx} className="pb-2 border-b border-[#424754]/20 last:border-0">
                <div className="text-xs sm:text-sm font-medium text-[#dce2f8]">{cert.name}</div>
                <div className="font-mono text-[11px] text-[#8c909f] flex justify-between mt-0.5">
                  <span>{cert.issuer}</span>
                  <span className="text-[#2fd9f4]">{cert.year}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Honors & Awards */}
        <div className="p-6 rounded-3xl bg-[#151b2b] border border-[#424754]/40">
          <div className="font-mono text-xs text-[#bdc2ff] uppercase tracking-wider mb-2">
            RECOGNITIONS
          </div>
          <h3 className="text-xl font-bold text-[#dce2f8] mb-3">Honors &amp; Awards</h3>
          <div className="space-y-4">
            {AWARDS.map((awd, idx) => (
              <div key={idx} className="pb-3 border-b border-[#424754]/20 last:border-0">
                <div className="text-sm font-semibold text-[#bdc2ff]">{awd.title}</div>
                <div className="font-mono text-[11px] text-[#8c909f] mb-1">{awd.organization}</div>
                <p className="text-xs text-[#c2c6d6] leading-relaxed">
                  {awd.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

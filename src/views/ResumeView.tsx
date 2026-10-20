import React from 'react';
import {
  PERSONAL_INFO,
  VERIFIED_METRICS,
  WORK_EXPERIENCES,
  EDUCATION,
  CERTIFICATIONS,
  AWARDS,
  SKILL_CATEGORIES
} from '../data/portfolioData';

export const ResumeView: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTextSummary = () => {
    const textContent = `
JITENDRA MAHANTY
Senior Lead Engineer & Technical Architect
14+ Years of Professional Engineering Leadership
Email: ${PERSONAL_INFO.email}
LinkedIn: ${PERSONAL_INFO.linkedin}
Location: ${PERSONAL_INFO.location}

==================================================
PROFESSIONAL SUMMARY
==================================================
Senior Lead Engineer and Technical Architect with 14+ years of hands-on experience designing and leading high-scale cloud platforms, distributed architectures, enterprise Android ecosystems, and applied Generative AI systems. Proven record of cutting cloud infrastructure costs by 30%, serving over 500,000 active retail kiosk users, accelerating release deployment cycles from 2 weeks to 3 days, and integrating secure multi-provider payment and healthcare telemetry protocols.

==================================================
VERIFIED KEY METRICS
==================================================
* 14+ Years of Continuous Engineering Leadership (2011 - Present)
* 500,000+ Platform Users: Staples Kiosk / PrintMe retail platform
* 30% AWS Infrastructure Cost Reduction achieved at EFI
* 2 Weeks to 3 Days: Deployment cycle acceleration via automated CI/CD
* 8 Card Providers: Payment gateway integration across global processors
* 40% Query Latency Reduction & 25% Data Accuracy Gain (SSAC Cloud Platform)

==================================================
CHRONOLOGICAL EMPLOYMENT HISTORY
==================================================
1. Independent Advisory & Software Studio
   Role: Consultant, AI & Cloud (April 2024 - Present)
   - Generative AI application integration, system design, and technical architecture advisory.

2. EFI India Pvt. Ltd.
   Role: Senior Lead Engineer (2018 - 2024)
   - Led architecture and engineering for the Staples Kiosk self-service platform (500K+ users).
   - Achieved 30% AWS cost savings and reduced releases from 2 weeks to 3 days.
   - Honored with MD Award for Excellence and Spot Awards.

3. TechnoSoft Inc.
   Role: Senior Software Engineer (2017 - 2018)
   - Enterprise mobile and backend integrations, unit testing, and microservices.

4. Wipro Pvt. Ltd.
   Role: Senior Lead Engineer (2016 - 2017)
   - Led technical architecture for healthcare mobility and Precue cardiac murmur DSP system.
   - Optimized BLE medical device communication protocols. Recipient of Spot Award.

5. Atto Communications Pvt. Ltd.
   Role: Senior Software Engineer (2015 - 2016)
   - Specialized communication protocols, network sockets, and connected device interfaces.

6. Apar People World Pvt. Ltd.
   Role: Senior Software Engineer (2016)
   - Specialized enterprise mobility assignments and defect stabilization.

7. Techcognigent Pvt. Ltd.
   Role: Software Engineer (2011 - 2015)
   - Commenced engineering career. Built consumer retail apps (Café Coffee Day) and backend REST APIs.

* Note: Overlapping dates reflect simultaneous advisory assignments and transition handovers preserved verbatim from the verified résumé.

==================================================
EDUCATION
==================================================
* Master of Computer Applications (MCA) - 2011
  Regional College of Management, Bhubaneswar, BPUT Odisha, India

==================================================
CERTIFICATIONS & TRAINING
==================================================
* AWS Certified Solutions Architect (Amazon Web Services)
* IBM AI Architect Training (IBM)
* Generative AI Certification
* Data Security and Privacy Certification

==================================================
HONORS & AWARDS
==================================================
* MD Award for Excellence - EFI India Pvt. Ltd.
* Spot Award (Received Three Times) - EFI India & Wipro Pvt. Ltd.
`.trim();

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Jitendra_Mahanty_Resume_Summary.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Top Header & Actions Bar */}
      <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#424754]/30">
        <div>
          <span className="font-mono text-xs text-[#2fd9f4] uppercase tracking-widest block mb-1">
            CURRICULUM VITAE
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#dce2f8]">
            Professional Résumé
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-[#191f2f] hover:bg-[#232a3a] border border-[#424754]/40 text-[#dce2f8] text-xs font-mono transition-colors"
          >
            <svg className="w-4 h-4 text-[#adc6ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            <span>Print / PDF View</span>
          </button>

          <button
            onClick={handleDownloadTextSummary}
            className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-[#4d8eff] hover:bg-[#3b82f6] text-white text-xs font-mono font-medium transition-colors shadow-md"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download Summary</span>
          </button>
        </div>
      </div>

      {/* Print-Ready Résumé Sheet Container */}
      <div className="print-page bg-[#151b2b] border border-[#424754]/40 rounded-3xl p-6 sm:p-12 shadow-2xl text-[#dce2f8]">
        {/* Résumé Header */}
        <header className="border-b border-[#424754]/30 pb-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#dce2f8] mb-1">
                {PERSONAL_INFO.name}
              </h2>
              <div className="font-mono text-sm sm:text-base text-[#adc6ff] font-medium mb-3">
                {PERSONAL_INFO.title} &middot; 14+ Years Experience
              </div>
              <p className="text-sm text-[#c2c6d6] max-w-2xl leading-relaxed">
                {PERSONAL_INFO.shortBio}
              </p>
            </div>

            <div className="font-mono text-xs text-[#8c909f] space-y-1.5 md:text-right shrink-0">
              <div className="text-[#dce2f8]">{PERSONAL_INFO.email}</div>
              <div>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#2fd9f4] hover:underline">
                  linkedin.com/in/jitendra-mahanty
                </a>
              </div>
              <div>{PERSONAL_INFO.location}</div>
              <div className="text-[#adc6ff] font-semibold">{PERSONAL_INFO.availability}</div>
            </div>
          </div>
        </header>

        {/* Verified Impact Metrics Strip */}
        <section className="mb-10">
          <h3 className="font-mono text-xs uppercase tracking-widest text-[#2fd9f4] font-semibold mb-4">
            VERIFIED ACHIEVEMENTS &amp; BENCHMARKS
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {VERIFIED_METRICS.map((m, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#070e1d] border border-[#424754]/30">
                <div className="font-mono text-2xl sm:text-3xl font-bold text-[#dce2f8] mb-1">
                  {m.value}
                </div>
                <div className="font-mono text-xs text-[#adc6ff] font-medium mb-1">{m.label}</div>
                <p className="text-[11px] text-[#8c909f] leading-snug">{m.context}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Expertise Matrix */}
        <section className="mb-10">
          <h3 className="font-mono text-xs uppercase tracking-widest text-[#adc6ff] font-semibold mb-4">
            CORE TECHNICAL EXPERTISE
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#191f2f] border border-[#424754]/20">
                <div className="text-sm font-semibold text-[#dce2f8] mb-1">{cat.title}</div>
                <p className="text-xs text-[#8c909f] mb-3 leading-relaxed">{cat.summary}</p>
                <div className="flex flex-wrap gap-1">
                  {cat.skills.slice(0, 5).map((s, i) => (
                    <span key={i} className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#070e1d] text-[#c2c6d6]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Chronological Work Experience */}
        <section className="mb-10">
          <h3 className="font-mono text-xs uppercase tracking-widest text-[#bdc2ff] font-semibold mb-6">
            PROFESSIONAL EXPERIENCE (CHRONOLOGICAL)
          </h3>
          <div className="space-y-8">
            {WORK_EXPERIENCES.map((exp) => (
              <div key={exp.id} className="border-l-2 border-[#4d8eff]/50 pl-4 sm:pl-6 pb-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <h4 className="text-lg font-bold text-[#dce2f8]">
                    {exp.role} <span className="text-[#8c909f] font-normal">&mdash; {exp.company}</span>
                  </h4>
                  <span className="font-mono text-xs text-[#2fd9f4]">
                    {exp.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#c2c6d6] mb-3 leading-relaxed">
                  {exp.summary}
                </p>

                {exp.keyAchievements && exp.keyAchievements.length > 0 && (
                  <div className="mb-3 space-y-1">
                    {exp.keyAchievements.map((ach, i) => (
                      <div key={i} className="text-xs text-[#dce2f8] flex items-start gap-2">
                        <span className="text-[#2fd9f4] font-bold">&check;</span>
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-1">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#070e1d] text-[#8c909f]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[11px] font-mono text-[#8c909f] italic">
            * Note: Overlapping tenures reflect concurrent consulting assignments, contractual transition handovers, and advisory engagements preserved verbatim from the verified résumé.
          </p>
        </section>

        {/* Education & Credentials */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#424754]/30">
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#2fd9f4] font-semibold mb-3">
              EDUCATION
            </h4>
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="space-y-1 text-xs">
                <div className="font-bold text-[#dce2f8]">{edu.degree}</div>
                <div className="text-[#c2c6d6]">{edu.institution}</div>
                <div className="font-mono text-[#8c909f]">{edu.location} &middot; {edu.year}</div>
              </div>
            ))}
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#adc6ff] font-semibold mb-3">
              CERTIFICATIONS
            </h4>
            <div className="space-y-2 text-xs">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx}>
                  <div className="font-medium text-[#dce2f8]">{cert.name}</div>
                  <div className="font-mono text-[11px] text-[#8c909f]">{cert.issuer}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#bdc2ff] font-semibold mb-3">
              AWARDS &amp; HONORS
            </h4>
            <div className="space-y-2 text-xs">
              {AWARDS.map((awd, idx) => (
                <div key={idx}>
                  <div className="font-medium text-[#dce2f8]">{awd.title}</div>
                  <div className="font-mono text-[11px] text-[#8c909f]">{awd.organization}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

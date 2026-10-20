import React, { useEffect } from 'react';
import { ProjectItem } from '../types/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenSpecialModal?: (type: 'tv' | 'nidra') => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenSpecialModal
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isMusicFlow = project.id === 'musicflow-tv';
  const isNidra = project.id === 'nidra-breathwork';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-3xl bg-[#151b2b] border border-[#424754]/50 rounded-3xl p-6 sm:p-8 shadow-2xl my-8 overflow-hidden text-[#dce2f8]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Glow */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#4d8eff]/10 rounded-full blur-[90px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#191f2f] hover:bg-[#232a3a] border border-[#424754]/40 flex items-center justify-center text-[#c2c6d6] hover:text-[#dce2f8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4d8eff]"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header Metadata */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="font-mono text-xs text-[#2fd9f4] uppercase tracking-wider">
            {project.categoryLabel}
          </span>
          <span className="text-[#8c909f]">&middot;</span>
          <span className={`font-mono text-[11px] px-2 py-0.5 rounded ${
            project.status === 'Production'
              ? 'bg-[#002f36] text-[#2fd9f4] border border-[#009fb4]/40'
              : project.status === 'Enterprise Engagement'
              ? 'bg-[#191f2f] text-[#adc6ff] border border-[#4d8eff]/40'
              : project.status === 'In Development'
              ? 'bg-[#2f3aa3]/30 text-[#bdc2ff] border border-[#2f3aa3]'
              : 'bg-[#191f2f] text-[#8c909f] border border-[#424754]/30'
          }`}>
            {project.status}
          </span>
          {project.releaseTag && (
            <>
              <span className="text-[#8c909f]">&middot;</span>
              <span className="font-mono text-[11px] text-[#8c909f]">{project.releaseTag}</span>
            </>
          )}
        </div>

        {/* Project Title */}
        <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-[#dce2f8] mb-1">
          {project.title}
        </h2>
        <p className="font-mono text-xs sm:text-sm text-[#adc6ff] mb-6">
          {project.subtitle}
        </p>

        {/* Image Preview if available */}
        {project.imageSrc && (
          <div className="relative rounded-2xl overflow-hidden border border-[#424754]/40 bg-[#070e1d] mb-6 aspect-video max-h-72">
            <img
              src={project.imageSrc}
              alt={project.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Verified Metrics Strip */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-[#191f2f] border border-[#424754]/30">
                <span className="font-mono text-[10px] text-[#8c909f] uppercase block mb-0.5">{m.label}</span>
                <span className="font-mono text-xl font-bold text-[#2fd9f4] block">{m.value}</span>
                {m.note && <span className="font-mono text-[10px] text-[#8c909f] block mt-0.5">{m.note}</span>}
              </div>
            ))}
          </div>
        )}

        {/* Problem & Challenge */}
        {project.challenge && (
          <div className="mb-4">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#adc6ff] mb-1.5 font-semibold">
              The Engineering Challenge
            </h3>
            <p className="text-sm text-[#c2c6d6] leading-relaxed bg-[#191f2f]/60 p-3.5 rounded-xl border border-[#424754]/30">
              {project.challenge}
            </p>
          </div>
        )}

        {/* Architectural Solution */}
        {project.solution && (
          <div className="mb-4">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#2fd9f4] mb-1.5 font-semibold">
              Architecture &amp; Technical Approach
            </h3>
            <p className="text-sm text-[#c2c6d6] leading-relaxed bg-[#191f2f]/60 p-3.5 rounded-xl border border-[#424754]/30">
              {project.solution}
            </p>
          </div>
        )}

        {/* Key Highlights */}
        <div className="mb-6">
          <h3 className="font-mono text-xs uppercase tracking-wider text-[#8c909f] mb-2 font-semibold">
            Technical Highlights
          </h3>
          <ul className="space-y-2">
            {project.keyHighlights.map((hl, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#c2c6d6]">
                <span className="text-[#2fd9f4] font-bold mt-0.5">&check;</span>
                <span>{hl}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Chips */}
        <div className="mb-6">
          <h3 className="font-mono text-xs uppercase tracking-wider text-[#8c909f] mb-2 font-semibold">
            Technology Stack
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((t, i) => (
              <span
                key={i}
                className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#191f2f] text-[#dce2f8] border border-[#424754]/30"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#424754]/30">
          {isMusicFlow && onOpenSpecialModal && (
            <button
              onClick={() => {
                onClose();
                onOpenSpecialModal('tv');
              }}
              className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-[#2fd9f4] text-[#002f36] hover:bg-[#a2eeff] text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Test D-Pad TV Simulation</span>
            </button>
          )}

          {isNidra && onOpenSpecialModal && (
            <button
              onClick={() => {
                onClose();
                onOpenSpecialModal('nidra');
              }}
              className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-[#adc6ff] text-[#002e6a] hover:bg-white text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Experience Breathwork Cadence</span>
            </button>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-[#4d8eff] text-white hover:bg-[#3b82f6] text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <span>Visit Live Website</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}

          <button
            onClick={onClose}
            className="h-10 px-5 rounded-full bg-[#191f2f] hover:bg-[#232a3a] text-[#c2c6d6] hover:text-[#dce2f8] text-xs font-medium uppercase tracking-wider transition-colors border border-[#424754]/30"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

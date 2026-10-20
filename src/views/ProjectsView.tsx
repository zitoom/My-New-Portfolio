import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectCategory, ProjectItem } from '../types/portfolio';

interface ProjectsViewProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenSpecialModal: (type: 'tv' | 'nidra') => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({
  onSelectProject,
  onOpenSpecialModal
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'enterprise', label: 'Enterprise Engineering' },
    { id: 'ai-products', label: 'AI-Powered Products' },
    { id: 'android-tv', label: 'Android & TV Apps' },
    { id: 'web-saas', label: 'Web & SaaS' }
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory =
        activeCategory === 'all' || project.category === activeCategory;

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        project.title.toLowerCase().includes(q) ||
        project.subtitle.toLowerCase().includes(q) ||
        project.summary.toLowerCase().includes(q) ||
        project.technologies.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="max-w-3xl mb-10">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-[#2fd9f4] uppercase tracking-widest mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2fd9f4]" />
          <span>PORTFOLIO &middot; SOFTWARE CATALOG</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#dce2f8] mb-4">
          Software Systems &amp; Products
        </h1>
        <p className="text-base sm:text-lg text-[#c2c6d6] leading-relaxed">
          Spanning 14+ years of engineering leadership: high-scale retail kiosks, medical device signal processing, cloud architectures, and independent modern software products.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#424754]/30">
        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0" role="tablist">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-mono font-medium transition-colors ${
                  isActive
                    ? 'bg-[#4d8eff] text-white shadow-md'
                    : 'bg-[#151b2b] text-[#8c909f] hover:text-[#dce2f8] hover:bg-[#191f2f] border border-[#424754]/30'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Tech / Keyword Search Input */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by tech or keyword..."
            className="w-full bg-[#151b2b] border border-[#424754]/40 rounded-xl px-4 py-2 text-xs text-[#dce2f8] placeholder-[#8c909f] focus:outline-none focus:border-[#4d8eff]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-2.5 text-[#8c909f] hover:text-[#dce2f8] text-xs font-mono"
            >
              &times;
            </button>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-20 bg-[#151b2b] rounded-3xl border border-[#424754]/30">
          <p className="text-sm font-mono text-[#8c909f] mb-3">No projects matched &ldquo;{searchQuery}&rdquo;</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('all');
            }}
            className="text-xs font-mono text-[#adc6ff] hover:underline"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const isMusicFlow = project.id === 'musicflow-tv';
            const isNidra = project.id === 'nidra-breathwork';

            return (
              <article
                key={project.id}
                className="bg-[#151b2b] border border-[#424754]/40 rounded-3xl p-6 hover:border-[#4d8eff]/50 transition-all duration-200 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  {/* Image / Mockup preview */}
                  {project.imageSrc ? (
                    <div className="relative rounded-2xl overflow-hidden mb-5 border border-[#424754]/30 bg-[#070e1d] aspect-[16/10]">
                      <img
                        src={project.imageSrc}
                        alt={project.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <span className="absolute top-3 right-3 px-2 py-0.5 rounded bg-[#070e1d]/85 backdrop-blur font-mono text-[10px] text-[#adc6ff]">
                        {project.isEnterprise ? 'ENTERPRISE' : 'INDEPENDENT'}
                      </span>
                    </div>
                  ) : (
                    <div className="rounded-2xl p-5 mb-5 bg-[#070e1d] border border-[#424754]/30 flex flex-col justify-between min-h-[140px]">
                      <div className="font-mono text-xs text-[#2fd9f4]">
                        {project.isEnterprise ? 'ENTERPRISE ARCHITECTURE' : 'SOFTWARE SYSTEM'}
                      </div>
                      <div className="font-mono text-lg font-bold text-[#dce2f8]">
                        {project.title}
                      </div>
                      <div className="font-mono text-[11px] text-[#8c909f]">
                        {project.categoryLabel}
                      </div>
                    </div>
                  )}

                  {/* Metadata Header */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-[#2fd9f4] uppercase tracking-wider">
                      {project.categoryLabel}
                    </span>
                    <span className={`font-mono text-[10px] px-2 py-0.5 rounded ${
                      project.status === 'Production'
                        ? 'bg-[#002f36] text-[#2fd9f4]'
                        : project.status === 'Enterprise Engagement'
                        ? 'bg-[#191f2f] text-[#adc6ff]'
                        : 'bg-[#2f3aa3]/20 text-[#bdc2ff]'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-[#dce2f8] mb-1 group-hover:text-[#adc6ff] transition-colors">
                    {project.title}
                  </h3>
                  <div className="font-mono text-xs text-[#8c909f] mb-3">
                    {project.subtitle}
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-[#c2c6d6] mb-5 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Metrics if present */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-2 gap-2 mb-4 p-3 rounded-xl bg-[#070e1d] border border-[#424754]/20">
                      {project.metrics.slice(0, 2).map((m, i) => (
                        <div key={i}>
                          <div className="font-mono text-[10px] text-[#8c909f] uppercase">{m.label}</div>
                          <div className="font-mono text-sm font-bold text-[#2fd9f4]">{m.value}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#191f2f] text-[#8c909f] border border-[#424754]/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#191f2f] text-[#8c909f]">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-[#424754]/20 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#adc6ff] hover:text-[#dce2f8] transition-colors"
                  >
                    <span>View Architecture</span>
                    <span>&rarr;</span>
                  </button>

                  {isMusicFlow && (
                    <button
                      onClick={() => onOpenSpecialModal('tv')}
                      className="px-2.5 py-1 rounded-lg bg-[#2fd9f4]/20 text-[#2fd9f4] hover:bg-[#2fd9f4]/30 font-mono text-[11px] transition-colors"
                    >
                      TV Remote
                    </button>
                  )}

                  {isNidra && (
                    <button
                      onClick={() => onOpenSpecialModal('nidra')}
                      className="px-2.5 py-1 rounded-lg bg-[#adc6ff]/20 text-[#adc6ff] hover:bg-[#adc6ff]/30 font-mono text-[11px] transition-colors"
                    >
                      Cadence
                    </button>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-[#8c909f] hover:text-[#2fd9f4] transition-colors"
                    >
                      Live &nearr;
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { TVPreviewModal } from './components/TVPreviewModal';
import { NidraBreathworkModal } from './components/NidraBreathworkModal';
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ProjectsView } from './views/ProjectsView';
import { ExperienceView } from './views/ExperienceView';
import { ServicesView } from './views/ServicesView';
import { ResumeView } from './views/ResumeView';
import { ContactView } from './views/ContactView';
import { ProjectItem } from './types/portfolio';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [isDark, setIsDark] = useState(true);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [specialModal, setSpecialModal] = useState<'tv' | 'nidra' | null>(null);
  const [contactInitialSubject, setContactInitialSubject] = useState<string | undefined>(undefined);

  // Sync hash routing on mount and hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim().toLowerCase();
      const validViews = ['home', 'about', 'projects', 'experience', 'services', 'resume', 'contact'];
      if (validViews.includes(hash)) {
        setCurrentView(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Sync theme class to document element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [isDark]);

  const handleNavigate = (view: string) => {
    setCurrentView(view);
    window.location.hash = view;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleServicesContact = (serviceTitle?: string) => {
    if (serviceTitle) {
      setContactInitialSubject(`Consulting Scope: ${serviceTitle}`);
    }
    handleNavigate('contact');
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-200 ${isDark ? 'bg-[#0c1322] text-[#dce2f8]' : 'bg-white text-[#0f172a]'}`}>
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#4d8eff] text-white rounded-lg font-mono text-xs"
      >
        Skip to main content
      </a>

      {/* Navigation Header */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 pt-20">
        {currentView === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onSelectProject={(p) => setSelectedProject(p)}
            onOpenSpecialModal={(type) => setSpecialModal(type)}
          />
        )}

        {currentView === 'about' && (
          <AboutView onNavigate={handleNavigate} />
        )}

        {currentView === 'projects' && (
          <ProjectsView
            onSelectProject={(p) => setSelectedProject(p)}
            onOpenSpecialModal={(type) => setSpecialModal(type)}
          />
        )}

        {currentView === 'experience' && (
          <ExperienceView />
        )}

        {currentView === 'services' && (
          <ServicesView onContactClick={handleServicesContact} />
        )}

        {currentView === 'resume' && (
          <ResumeView />
        )}

        {currentView === 'contact' && (
          <ContactView initialSubject={contactInitialSubject} />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenSpecialModal={(type) => setSpecialModal(type)}
      />

      {specialModal === 'tv' && (
        <TVPreviewModal onClose={() => setSpecialModal(null)} />
      )}

      {specialModal === 'nidra' && (
        <NidraBreathworkModal onClose={() => setSpecialModal(null)} />
      )}
    </div>
  );
}

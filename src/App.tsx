import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroTerminal } from './components/HeroTerminal';
import { AboutSection } from './components/AboutSection';
import { SkillsMatrix } from './components/SkillsMatrix';
import { FeaturedProjects } from './components/FeaturedProjects';
import { CertificationsGallery } from './components/CertificationsGallery';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactFooter } from './components/ContactFooter';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 selection:bg-cyan-500 selection:text-black">
      {/* Navigation */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main>
        <HeroTerminal />
        <AboutSection />
        <CertificationsGallery />
        <FeaturedProjects />
        <SkillsMatrix />
        <ExperienceTimeline />
      </main>

      {/* Contact & Footer */}
      <ContactFooter />
    </div>
  );
};

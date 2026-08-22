import { useState, useEffect } from 'react';
import { CursorProvider } from './hooks/useCursor';
import { CustomCursor } from './components/layout/CustomCursor';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { StatsSection } from './components/sections/StatsSection';
import { AboutSection } from './components/sections/AboutSection';
import { CapabilitiesSection } from './components/sections/CapabilitiesSection';
import { TechStackSection } from './components/sections/TechStackSection';
import { FeaturedProjectsSection } from './components/sections/FeaturedProjectsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { EducationSection } from './components/sections/EducationSection';
import { JourneyTimeline } from './components/sections/JourneyTimeline';
import { LearningSection } from './components/sections/LearningSection';
import { ResumeCTASection } from './components/sections/ResumeCTASection';
import { ContactSection } from './components/sections/ContactSection';
import { ProjectModal } from './components/ui/ProjectModal';
import { ResumeModal } from './components/ui/ResumeModal';
import { DeveloperHUD } from './components/ui/DeveloperHUD';
import { Project } from './types';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isHudOpen, setIsHudOpen] = useState(false);

  useEffect(() => {
    // Add custom cursor styling class to body on desktop
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    if (!isTouch) {
      document.body.classList.add('custom-cursor-active');
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      // Easter Egg: Ctrl + Shift + R
      if (e.ctrlKey && e.shiftKey && e.key === 'R') {
        e.preventDefault();
        setIsHudOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <CursorProvider>
      <div className="relative min-h-screen bg-[#070709] text-white selection:bg-accent-cyan/20 selection:text-accent-cyan">
        {/* Top Scroll Indicator */}
        <ScrollProgress />

        {/* Custom Lerping Cursor (Desktop) */}
        <CustomCursor />

        {/* Navigation Bar */}
        <Navbar onOpenHud={() => setIsHudOpen(true)} />

        {/* Main Content Sections */}
        <main>
          <HeroSection onResumeClick={() => setIsResumeModalOpen(true)} />
          <StatsSection />
          <AboutSection />
          <CapabilitiesSection />
          <TechStackSection />
          <FeaturedProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
          <ExperienceSection />
          <EducationSection />
          <JourneyTimeline />
          <LearningSection />
          <ResumeCTASection onRequestResumeModal={() => setIsResumeModalOpen(true)} />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Modals */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={() => setIsResumeModalOpen(false)}
        />

        <DeveloperHUD
          isOpen={isHudOpen}
          onClose={() => setIsHudOpen(false)}
        />
      </div>
    </CursorProvider>
  );
}

export default App;

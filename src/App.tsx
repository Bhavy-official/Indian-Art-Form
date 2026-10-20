import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { TimelineSection } from './components/timeline/TimelineSection';
import { CollectionSection } from './components/collection/CollectionSection';
import { ReferencesSection } from './components/sections/ReferencesSection';
import { Footer } from './components/layout/Footer';
import { ArtifactDetail } from './components/artifact/ArtifactDetail';
import { ARTIFACTS_DATA, Artifact } from './data/artifacts';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact | null>(null);

  // Active Section Detection on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'timeline', 'collection', 'references'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hash route listener (supports direct sharing of artifacts or sections)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) return;

      const foundArtifact = ARTIFACTS_DATA.find((a) => a.id === hash);
      if (foundArtifact) {
        setSelectedArtifact(foundArtifact);
      } else {
        const sectionEl = document.getElementById(hash);
        if (sectionEl) {
          sectionEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      window.history.pushState(null, '', `#${sectionId}`);
    }
  };

  const handleOpenArtifact = (art: Artifact) => {
    setSelectedArtifact(art);
    window.history.pushState(null, '', `#${art.id}`);
  };

  const handleCloseArtifact = () => {
    setSelectedArtifact(null);
    window.history.pushState(null, '', `#${activeSection}`);
  };

  // Chronological Next/Previous Navigation within modal
  const currentIndex = selectedArtifact
    ? ARTIFACTS_DATA.findIndex((a) => a.id === selectedArtifact.id)
    : -1;

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex >= 0 && currentIndex < ARTIFACTS_DATA.length - 1;

  const handleNavigatePrev = () => {
    if (hasPrev) {
      const prevArtifact = ARTIFACTS_DATA[currentIndex - 1];
      setSelectedArtifact(prevArtifact);
      window.history.pushState(null, '', `#${prevArtifact.id}`);
    }
  };

  const handleNavigateNext = () => {
    if (hasNext) {
      const nextArtifact = ARTIFACTS_DATA[currentIndex + 1];
      setSelectedArtifact(nextArtifact);
      window.history.pushState(null, '', `#${nextArtifact.id}`);
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--surface-base)' }}>
      {/* Universal Top Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Destination 1: Entrance / Hero */}
      <HeroSection
        onEnterTimeline={() => handleNavigate('timeline')}
        onExploreCollection={() => handleNavigate('collection')}
      />

      {/* Destination 2: The Vertical Timeline */}
      <TimelineSection
        artifacts={ARTIFACTS_DATA}
        onSelectArtifact={handleOpenArtifact}
      />

      {/* Destination 3: Permanent Collection & Comparison Catalogue */}
      <CollectionSection
        artifacts={ARTIFACTS_DATA}
        onSelectArtifact={handleOpenArtifact}
      />

      {/* Destination 4: References & Academic Sources */}
      <ReferencesSection />

      {/* Museum Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Dedicated Artifact Detail Exhibition Modal */}
      <ArtifactDetail
        artifact={selectedArtifact}
        onClose={handleCloseArtifact}
        onNavigateNext={handleNavigateNext}
        onNavigatePrev={handleNavigatePrev}
        hasNext={hasNext}
        hasPrev={hasPrev}
      />
    </div>
  );
};

export default App;

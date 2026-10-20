import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Compass, Clock, Grid, BookOpen } from 'lucide-react';
import { ambientSound } from '../../utils/audio';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  scrollProgress: number; // 0 to 100
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  scrollProgress
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const playing = ambientSound.toggle();
    setIsAudioPlaying(playing);
  };

  const navLinks = [
    { id: 'hero', label: 'Entrance', icon: Compass },
    { id: 'timeline', label: 'Timeline', icon: Clock },
    { id: 'collection', label: 'Collection', icon: Grid },
    { id: 'references', label: 'References', icon: BookOpen }
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 'var(--nav-height)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 clamp(16px, 4vw, 48px)',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          backgroundColor: scrolled ? 'rgba(20, 20, 17, 0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent'
        }}
      >
        {/* Scroll Progress Bar at very top of screen */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '2px',
            width: `${scrollProgress}%`,
            background: 'linear-gradient(90deg, var(--color-aged-brass), var(--color-antique-parchment))',
            transition: 'width 0.1s linear',
            zIndex: 1001
          }}
        />

        {/* KAAL Wordmark & Brand Identity */}
        <div
          onClick={() => onNavigate('hero')}
          style={{
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: '1.45rem',
              fontWeight: 600,
              letterSpacing: '0.22em',
              color: 'var(--color-antique-parchment)',
              textTransform: 'uppercase'
            }}>
              KAAL
            </span>
            <span style={{
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-aged-brass)',
              display: 'inline-block'
            }} />
          </div>
          <span style={{
            fontSize: '0.62rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'rgba(233, 223, 201, 0.6)',
            marginTop: '-2px'
          }}>
            The Living Museum of Indian Art
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
          <ul style={{ listStyle: 'none', display: 'flex', alignItems: 'center', gap: '28px' }}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    style={{
                      position: 'relative',
                      fontSize: '0.85rem',
                      fontWeight: isActive ? 600 : 400,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: isActive ? 'var(--color-aged-brass)' : 'rgba(245, 240, 230, 0.75)',
                      padding: '8px 0',
                      transition: 'color 0.25s ease'
                    }}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '16px',
                          height: '2px',
                          backgroundColor: 'var(--color-aged-brass)'
                        }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Optional Ambient Audio Soundscape Toggle */}
          <button
            onClick={toggleSound}
            aria-label={isAudioPlaying ? 'Mute ambient soundscape' : 'Play ambient soundscape'}
            title={isAudioPlaying ? 'Mute Ambient Soundscape' : 'Enable Ambient Soundscape'}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '2px',
              border: isAudioPlaying ? '1px solid var(--color-aged-brass)' : '1px solid var(--border-subtle)',
              background: isAudioPlaying ? 'rgba(185, 154, 96, 0.12)' : 'rgba(20, 20, 17, 0.5)',
              color: isAudioPlaying ? 'var(--color-aged-brass)' : 'rgba(233, 223, 201, 0.65)',
              fontSize: '0.75rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              transition: 'all 0.25s ease'
            }}
          >
            {isAudioPlaying ? <Volume2 size={15} /> : <VolumeX size={15} />}
            <span>{isAudioPlaying ? 'Ambiance On' : 'Sound'}</span>
          </button>
        </nav>

        {/* Mobile Nav Toggle */}
        <div style={{ display: 'none', alignItems: 'center', gap: '12px' }} className="mobile-nav-toggle">
          <button
            onClick={toggleSound}
            aria-label={isAudioPlaying ? 'Mute ambient sound' : 'Enable ambient sound'}
            style={{
              padding: '6px',
              color: isAudioPlaying ? 'var(--color-aged-brass)' : 'rgba(233, 223, 201, 0.6)'
            }}
          >
            {isAudioPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation drawer"
            style={{
              padding: '8px',
              color: 'var(--color-soft-ivory)'
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            top: 'var(--nav-height)',
            zIndex: 999,
            backgroundColor: 'rgba(18, 18, 15, 0.96)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            padding: '36px 24px',
            borderTop: '1px solid var(--border-subtle)'
          }}
        >
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      onNavigate(link.id);
                      setMobileMenuOpen(false);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      fontSize: '1.25rem',
                      fontFamily: 'var(--font-editorial)',
                      letterSpacing: '0.08em',
                      color: activeSection === link.id ? 'var(--color-aged-brass)' : 'var(--color-antique-parchment)',
                      padding: '8px 0',
                      width: '100%',
                      textAlign: 'left'
                    }}
                  >
                    <Icon size={18} style={{ color: 'var(--color-aged-brass)', opacity: 0.8 }} />
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>

          <div style={{ marginTop: 'auto', paddingTop: '24px', borderTop: '1px solid var(--border-subtle)' }}>
            <p style={{ fontSize: '0.78rem', color: 'rgba(233, 223, 201, 0.5)' }}>
              KAAL — The Living Museum of Indian Art
            </p>
          </div>
        </div>
      )}

      {/* Responsive CSS for desktop vs mobile nav */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
};

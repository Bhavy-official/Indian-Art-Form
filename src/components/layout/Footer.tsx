import React from 'react';
import { Compass, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#0d0d0b',
        borderTop: '1px solid var(--border-subtle)',
        padding: '80px 24px 48px',
        color: 'var(--color-antique-parchment)',
        position: 'relative'
      }}
    >
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '48px'
      }}>
        {/* Top Tier: Wordmark and Nav Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px',
          justifyContent: 'space-between'
        }}>
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: '1.6rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
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

            <p style={{ fontSize: '0.86rem', color: 'rgba(233, 223, 201, 0.7)', lineHeight: 1.6, maxWidth: '320px', marginBottom: '16px' }}>
              The Living Museum of Indian Art. An interactive educational archive exploring five millennia of material culture, spirituality, and artistic invention.
            </p>

            <span style={{ fontSize: '0.74rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-aged-brass)' }}>
              “Civilizations change. Materials endure. Art remembers.”
            </span>
          </div>

          {/* Quick Museum Navigation */}
          <div>
            <h4 style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-aged-brass)', marginBottom: '16px' }}>
              Museum Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <li>
                <button onClick={() => onNavigate('hero')} style={{ color: 'rgba(245, 240, 230, 0.8)', transition: 'color 0.2s' }}>
                  Museum Entrance
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('timeline')} style={{ color: 'rgba(245, 240, 230, 0.8)', transition: 'color 0.2s' }}>
                  Vertical Chronological Timeline
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('collection')} style={{ color: 'rgba(245, 240, 230, 0.8)', transition: 'color 0.2s' }}>
                  Permanent Catalogue &amp; Comparison
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('references')} style={{ color: 'rgba(245, 240, 230, 0.8)', transition: 'color 0.2s' }}>
                  Academic Sources &amp; Citations
                </button>
              </li>
            </ul>
          </div>

          {/* Curatorial Epochs */}
          <div>
            <h4 style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-aged-brass)', marginBottom: '16px' }}>
              Permanent Epochs
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.84rem', color: 'rgba(233, 223, 201, 0.7)' }}>
              <li>Indus Valley Civilization (c. 2300 BCE)</li>
              <li>Mauryan &amp; Early Buddhist (c. 3rd C. BCE)</li>
              <li>Classical Ajanta Murals (c. 5th C. CE)</li>
              <li>Imperial Chola Bronzes (c. 11th C. CE)</li>
              <li>Mughal Royal Ateliers (c. 17th C. CE)</li>
              <li>Mithila &amp; Warli Living Traditions</li>
            </ul>
          </div>

          {/* Back to top action */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <button
              onClick={scrollToTop}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                background: 'rgba(233, 223, 201, 0.06)',
                border: '1px solid var(--border-brass)',
                borderRadius: '2px',
                color: 'var(--color-antique-parchment)',
                fontSize: '0.82rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}
            >
              <ArrowUp size={14} /> Back to Top
            </button>

            <div style={{ marginTop: '20px' }}>
              <a
                href="https://github.com/Bhavy-official/Indian-Art-Form"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.82rem',
                  color: 'var(--color-aged-brass)'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg> GitHub Repository
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Disclaimers */}
        <div style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          fontSize: '0.78rem',
          color: 'rgba(233, 223, 201, 0.5)'
        }}>
          <div>
            &copy; {new Date().getFullYear()} KAAL — The Living Museum of Indian Art. Academic Assignment &amp; Cultural Heritage Project.
          </div>
          <div>
            Repository: <a href="https://github.com/Bhavy-official/Indian-Art-Form" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'inherit' }}>Bhavy-official/Indian-Art-Form</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

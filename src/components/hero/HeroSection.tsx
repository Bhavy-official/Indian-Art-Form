import React from 'react';
import { ArrowDown, Sparkles, Compass } from 'lucide-react';

interface HeroSectionProps {
  onEnterTimeline: () => void;
  onExploreCollection: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onEnterTimeline,
  onExploreCollection
}) => {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '120px 24px 80px',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 50% 38%, #22201a 0%, #171612 55%, #141411 100%)'
      }}
    >
      {/* Background Architectural Light Pool behind central sculpture */}
      <div
        className="museum-light-pool brass"
        style={{
          width: '650px',
          height: '650px',
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.35
        }}
      />

      {/* Layered Floating Architectural Geometry Silhouette */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(90vw, 840px)',
          height: 'min(80vh, 700px)',
          pointerEvents: 'none',
          opacity: 0.12,
          border: '1px solid var(--color-aged-brass)',
          borderRadius: '50%',
          boxShadow: '0 0 100px var(--color-brass-glow)'
        }}
      />

      {/* Central Hero Artwork Silhouette (Chola Nataraja / Dancing Girl Bronze) */}
      <div
        style={{
          position: 'absolute',
          top: '46%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(85vw, 560px)',
          height: 'min(65vh, 520px)',
          pointerEvents: 'none',
          opacity: 0.28,
          maskImage: 'radial-gradient(circle at center, black 45%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 45%, transparent 75%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1
        }}
      >
        <img
          src="assets/chola/nataraja.jpg"
          alt="Shiva Nataraja cosmic dancer silhouette"
          style={{
            maxHeight: '100%',
            maxWidth: '100%',
            objectFit: 'contain',
            filter: 'contrast(1.2) brightness(0.85) sepia(0.3)'
          }}
        />
      </div>

      {/* Editorial Text Content Block */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '920px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* Curatorial Small Label */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '20px',
            padding: '6px 16px',
            background: 'rgba(27, 26, 22, 0.7)',
            backdropFilter: 'blur(8px)',
            border: '1px solid var(--border-brass)',
            borderRadius: '2px'
          }}
        >
          <Sparkles size={13} style={{ color: 'var(--color-aged-brass)' }} />
          <span
            style={{
              fontSize: '0.74rem',
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--color-antique-parchment)'
            }}
          >
            An Interactive Journey Through Indian Art
          </span>
        </div>

        {/* Monumental Headline */}
        <h1
          style={{
            fontSize: 'clamp(2.4rem, 6.5vw, 5rem)',
            lineHeight: 1.06,
            fontWeight: 500,
            color: 'var(--color-soft-ivory)',
            letterSpacing: '-0.02em',
            marginBottom: '24px',
            textShadow: '0 4px 30px rgba(0,0,0,0.8)'
          }}
        >
          TIME LEAVES ITS MARK.<br />
          <span style={{ fontStyle: 'italic', color: 'var(--color-antique-parchment)' }}>
            ART TELLS ITS STORY.
          </span>
        </h1>

        {/* Supporting Editorial Statement */}
        <p
          style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.22rem)',
            lineHeight: 1.68,
            color: 'rgba(245, 240, 230, 0.82)',
            maxWidth: '720px',
            marginBottom: '38px',
            fontWeight: 300
          }}
        >
          From ancient civilizations to the artists shaping our present, discover the objects and ideas that connect India&apos;s artistic past to its living creative traditions.
        </p>

        {/* Strategic Dual CTA Actions */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {/* Primary Action: Enter the Chronicle */}
          <button
            onClick={onEnterTimeline}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 34px',
              background: 'linear-gradient(135deg, #c49d48, #9e7b2f)',
              color: 'var(--color-obsidian)',
              fontWeight: 600,
              fontSize: '0.9rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              borderRadius: '2px',
              boxShadow: '0 8px 24px rgba(185, 154, 96, 0.35)',
              transition: 'all 0.3s var(--transition-smooth)',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(185, 154, 96, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(185, 154, 96, 0.35)';
            }}
          >
            <span>Enter the Chronicle</span>
            <ArrowDown size={16} />
          </button>

          {/* Secondary Action: Explore the Collection */}
          <button
            onClick={onExploreCollection}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '13px 30px',
              background: 'rgba(27, 26, 22, 0.6)',
              backdropFilter: 'blur(10px)',
              color: 'var(--color-antique-parchment)',
              border: '1px solid var(--border-brass)',
              fontWeight: 500,
              fontSize: '0.9rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              borderRadius: '2px',
              transition: 'all 0.3s var(--transition-smooth)',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(185, 154, 96, 0.15)';
              e.currentTarget.style.borderColor = 'var(--color-aged-brass)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(27, 26, 22, 0.6)';
              e.currentTarget.style.borderColor = 'var(--border-brass)';
            }}
          >
            <Compass size={16} />
            <span>Explore the Collection</span>
          </button>
        </div>

        {/* Museum Curatorial Heritage Stats */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(20px, 4vw, 48px)',
            marginTop: '56px',
            paddingTop: '32px',
            borderTop: '1px solid var(--border-subtle)',
            width: '100%',
            maxWidth: '680px'
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <span style={{ display: 'block', fontSize: '1.6rem', fontFamily: 'var(--font-editorial)', color: 'var(--color-aged-brass)', fontWeight: 600 }}>
              5,000+
            </span>
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(233, 223, 201, 0.6)' }}>
              Years of Heritage
            </span>
          </div>

          <div style={{ width: '1px', height: '32px', background: 'var(--border-subtle)' }} />

          <div style={{ textAlign: 'center' }}>
            <span style={{ display: 'block', fontSize: '1.6rem', fontFamily: 'var(--font-editorial)', color: 'var(--color-aged-brass)', fontWeight: 600 }}>
              6
            </span>
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(233, 223, 201, 0.6)' }}>
              Major Traditions
            </span>
          </div>

          <div style={{ width: '1px', height: '32px', background: 'var(--border-subtle)' }} />

          <div style={{ textAlign: 'center' }}>
            <span style={{ display: 'block', fontSize: '1.6rem', fontFamily: 'var(--font-editorial)', color: 'var(--color-aged-brass)', fontWeight: 600 }}>
              12
            </span>
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(233, 223, 201, 0.6)' }}>
              Masterpieces
            </span>
          </div>
        </div>
      </div>

      {/* Gentle Scroll Indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          opacity: 0.6,
          cursor: 'pointer'
        }}
        onClick={onEnterTimeline}
      >
        <span style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-antique-parchment)' }}>
          Scroll to Explore
        </span>
        <div style={{
          width: '1px',
          height: '24px',
          background: 'linear-gradient(180deg, var(--color-aged-brass), transparent)',
          animation: 'pulse 2s infinite ease-in-out'
        }} />
      </div>
    </section>
  );
};

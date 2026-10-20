import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Sparkles, Compass } from 'lucide-react';

interface HeroSectionProps {
  onEnterTimeline: () => void;
  onExploreCollection: () => void;
}

/* Dust particle type */
interface DustParticle {
  l: number;   // left %
  d: number;   // duration s
  s: number;   // size px
  delay: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onEnterTimeline,
  onExploreCollection
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  /* Cursor-tracked pointer position (0–1) */
  const [p, setP] = useState({ x: 0.5, y: 0.5 });

  /* Dust particles — generated once on mount */
  const [dust, setDust] = useState<DustParticle[]>([]);

  useEffect(() => {
    setDust(
      Array.from({ length: 40 }, () => ({
        l: Math.random() * 100,
        d: 18 + Math.random() * 30,
        s: 1 + Math.random() * 2.5,
        delay: -Math.random() * 40
      }))
    );
  }, []);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = sectionRef.current!.getBoundingClientRect();
    setP({
      x: (e.clientX - r.left) / r.width,
      y: (e.clientY - r.top) / r.height
    });
  };

  /* 3-D tilt values from cursor */
  const rx = (p.y - 0.5) * -18;
  const ry = (p.x - 0.5) * 24;

  return (
    <section
      ref={sectionRef}
      id="hero"
      onMouseMove={onMove}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '120px 24px 80px',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 50% 38%, #22201a 0%, #171612 55%, #141411 100%)',
      }}
    >
      {/* ── CURSOR-REACTIVE BRASS SPOTLIGHT ────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: `radial-gradient(500px circle at ${p.x * 100}% ${p.y * 100}%,
            rgba(185, 154, 96, 0.13),
            transparent 70%)`,
          zIndex: 1,
        }}
      />

      {/* ── JALI LATTICE PATTERN (revealed under cursor spotlight) ──── */}
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          opacity: 0.28,
          maskImage: `radial-gradient(340px circle at ${p.x * 100}% ${p.y * 100}%, black, transparent)`,
          WebkitMaskImage: `radial-gradient(340px circle at ${p.x * 100}% ${p.y * 100}%, black, transparent)`,
          zIndex: 1,
        }}
        aria-hidden="true"
      >
        <defs>
          <pattern id="jali" width="48" height="48" patternUnits="userSpaceOnUse">
            <path
              d="M24 0 L48 24 L24 48 L0 24Z M24 10 L38 24 L24 38 L10 24Z"
              fill="none"
              stroke="var(--color-aged-brass)"
              strokeWidth="0.7"
            />
            <circle cx="24" cy="24" r="3" fill="none" stroke="var(--color-aged-brass)" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#jali)" />
      </svg>

      {/* ── FLOATING GOLD DUST PARTICLES ────────────────────────────── */}
      {dust.map((d, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{
            pointerEvents: 'none',
            position: 'absolute',
            bottom: '-10px',
            left: `${d.l}%`,
            width: `${d.s}px`,
            height: `${d.s}px`,
            borderRadius: '50%',
            background: 'rgba(185, 154, 96, 0.55)',
            animation: `kaal-drift ${d.d}s linear ${d.delay}s infinite`,
            zIndex: 1,
          }}
        />
      ))}

      {/* ── YANTRA / COSMIC MANDALA — 3-D CURSOR TILT ───────────────── */}
      <div
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          perspective: '1200px',
          zIndex: 1,
        }}
        aria-hidden="true"
      >
        <div
          style={{
            transform: `rotateX(${rx}deg) rotateY(${ry}deg)`,
            transition: 'transform 0.6s cubic-bezier(0.2, 0.7, 0.2, 1)',
            transformStyle: 'preserve-3d',
          }}
        >
          <svg
            viewBox="-200 -200 400 400"
            style={{
              width: 'min(88vh, 820px)',
              height: 'min(88vh, 820px)',
              opacity: 0.42,
            }}
          >
            {/* Spinning ellipse field */}
            <g style={{ transformOrigin: 'center', animation: 'kaal-spin 240s linear infinite' }}>
              {Array.from({ length: 16 }).map((_, i) => (
                <ellipse
                  key={i}
                  rx="40"
                  ry="160"
                  fill="none"
                  stroke="var(--color-aged-brass)"
                  strokeWidth="0.35"
                  transform={`rotate(${i * 11.25})`}
                />
              ))}
            </g>

            {/* Outer dashed ring */}
            <circle r="185" fill="none" stroke="var(--color-aged-brass)" strokeWidth="0.5" strokeDasharray="2 6" />
            {/* Inner ring */}
            <circle r="120" fill="none" stroke="var(--color-aged-brass)" strokeWidth="0.4" />
            {/* Star of David — Shatkona (two overlapping triangles) */}
            <path
              d="M0 -110 L95 55 L-95 55Z M0 110 L95 -55 L-95 -55Z"
              fill="none"
              stroke="var(--color-terracotta)"
              strokeWidth="0.6"
            />
            {/* Outer square — Bhupura gateway */}
            <rect
              x="-170" y="-170" width="340" height="340"
              fill="none"
              stroke="var(--color-aged-brass)"
              strokeWidth="0.3"
            />
          </svg>
        </div>
      </div>

      {/* ── EDITORIAL TEXT CONTENT ───────────────────────────────────── */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '920px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Eyebrow label */}
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
            borderRadius: '2px',
            animation: 'heroReveal 0.8s 0.2s both cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <Sparkles size={13} style={{ color: 'var(--color-aged-brass)' }} />
          <span
            style={{
              fontSize: '0.74rem',
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--color-antique-parchment)',
            }}
          >
            The Living Museum of Indian Art
          </span>
        </div>

        {/* ── MONUMENTAL "KAAL" HEADLINE — letter-by-letter reveal ───── */}
        <h1
          style={{
            display: 'flex',
            justifyContent: 'center',
            fontFamily: 'var(--font-editorial)',
            fontSize: 'clamp(5.5rem, 20vw, 16rem)',
            lineHeight: 0.85,
            letterSpacing: '0.06em',
            fontWeight: 400,
            marginBottom: '28px',
            overflow: 'hidden',
          }}
        >
          {'KAAL'.split('').map((char, i) => (
            <span
              key={i}
              style={{
                display: 'inline-block',
                color: 'var(--color-soft-ivory)',
                animation: `heroReveal 0.7s ${0.5 + i * 0.18}s both cubic-bezier(0.16, 1, 0.3, 1)`,
              }}
            >
              {char}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: 'var(--font-editorial)',
            fontSize: 'clamp(1.1rem, 2.2vw, 1.6rem)',
            color: 'var(--color-soft-ivory)',
            marginBottom: '12px',
            animation: 'heroReveal 0.7s 1.4s both cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          Five Thousand Years of Indian Creative Genius
        </p>

        {/* Italic quote */}
        <p
          style={{
            fontFamily: 'var(--font-editorial)',
            fontStyle: 'italic',
            fontSize: 'clamp(0.9rem, 1.4vw, 1.1rem)',
            color: 'rgba(226, 215, 192, 0.7)',
            maxWidth: '440px',
            marginBottom: '38px',
            animation: 'heroReveal 0.7s 1.7s both cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          "Civilizations change. Materials endure. Art remembers."
        </p>

        {/* CTA buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'center',
            alignItems: 'center',
            animation: 'heroReveal 0.7s 2s both cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
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
              cursor: 'pointer',
              fontFamily: 'var(--font-ui)',
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
            <span>Begin the Journey</span>
            <ArrowDown size={16} />
          </button>

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
              cursor: 'pointer',
              fontFamily: 'var(--font-ui)',
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

        {/* Museum stats */}
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
            maxWidth: '680px',
            animation: 'heroReveal 0.7s 2.3s both cubic-bezier(0.16, 1, 0.3, 1)',
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

      {/* ── BOTTOM STATUS BAR ────────────────────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          borderTop: '1px solid rgba(185,154,96,0.14)',
          background: 'rgba(17,19,15,0.5)',
          backdropFilter: 'blur(12px)',
          animation: 'heroReveal 0.7s 2.5s both cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '10px 20px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            fontFamily: 'var(--font-ui)',
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(233, 223, 201, 0.45)',
          }}
        >
          <span>c. 2500 BCE — Present</span>
          <span>16 Curated Masterpieces</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'var(--color-aged-brass)',
                animation: 'pulse 2s ease-in-out infinite',
                display: 'inline-block',
              }}
            />
            Permanent Digital Collection
          </span>
        </div>
      </div>

      {/* ── SCROLL INDICATOR ─────────────────────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          bottom: '52px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          opacity: 0.55,
          cursor: 'pointer',
          zIndex: 3,
          animation: 'heroReveal 0.7s 2.6s both cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onClick={onEnterTimeline}
      >
        <span style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-antique-parchment)', fontFamily: 'var(--font-ui)' }}>
          Scroll to Explore
        </span>
        <div
          style={{
            width: '1px',
            height: '28px',
            background: 'linear-gradient(180deg, var(--color-aged-brass), transparent)',
            animation: 'pulse 2s ease-in-out infinite',
          }}
        />
      </div>

      {/* ── INLINE KEYFRAMES ─────────────────────────────────────────── */}
      <style>{`
        @keyframes kaal-drift {
          from { transform: translateY(0) translateX(0); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 0.6; }
          to   { transform: translateY(-100vh) translateX(20px); opacity: 0; }
        }

        @keyframes kaal-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        @keyframes heroReveal {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50%       { opacity: 1; }
        }

        /* Reduce motion */
        @media (prefers-reduced-motion: reduce) {
          [style*="kaal-drift"],
          [style*="kaal-spin"],
          [style*="heroReveal"] {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};

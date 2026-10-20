import React, { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Calendar, MapPin, Eye, Layers, ChevronDown } from 'lucide-react';
import { Artifact, HISTORICAL_ERAS, HistoricalEra } from '../../data/artifacts';

gsap.registerPlugin(ScrollTrigger);

interface TimelineSectionProps {
  artifacts: Artifact[];
  onSelectArtifact: (artifact: Artifact) => void;
}

/* ─────────────────────────────────────────────────────────
   CHAPTER ROMAN NUMERALS
   ───────────────────────────────────────────────────────── */
const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

/* ─────────────────────────────────────────────────────────
   HERO CHAPTER BANNER — Full-width era header
   ───────────────────────────────────────────────────────── */
const ChapterBanner: React.FC<{
  era: HistoricalEra;
  index: number;
}> = ({ era, index }) => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = bannerRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        end: 'top 30%',
        toggleActions: 'play none none none',
      }
    });

    tl.fromTo(numRef.current,
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }
    )
    .fromTo(lineRef.current,
      { scaleX: 0, transformOrigin: 'left center' },
      { scaleX: 1, duration: 0.9, ease: 'power3.inOut' },
      '-=0.5'
    )
    .fromTo(titleRef.current,
      { opacity: 0, y: 30, clipPath: 'inset(100% 0 0 0)' },
      { opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)', duration: 0.85, ease: 'power3.out' },
      '-=0.5'
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      '-=0.4'
    )
    .fromTo(metaRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
      '-=0.3'
    )
    .fromTo(descRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
      '-=0.25'
    );

    return () => { tl.kill(); };
  }, []);

  return (
    <div ref={bannerRef} className="kaal-chapter-banner" style={{ position: 'relative', padding: '0 0 0 0', marginBottom: '0' }}>
      {/* Accent glow behind the chapter plaque */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '200px',
        borderRadius: '50%',
        background: `radial-gradient(ellipse, ${era.themeColor}1A 0%, transparent 70%)`,
        filter: 'blur(40px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div style={{
        position: 'relative',
        zIndex: 1,
        background: `linear-gradient(135deg, #161914 0%, #1a1e17 50%, #141511 100%)`,
        border: `1px solid ${era.themeColor}44`,
        borderRadius: '4px',
        overflow: 'hidden',
        boxShadow: `0 24px 64px -16px rgba(0,0,0,0.9), inset 0 1px 0 ${era.themeColor}22`
      }}>
        {/* Top edge accent */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
          background: `linear-gradient(90deg, transparent 0%, ${era.themeColor} 30%, ${era.themeColor} 70%, transparent 100%)`,
          opacity: 0.7
        }} />

        <div style={{ padding: 'clamp(32px, 5vw, 60px) clamp(24px, 6vw, 80px)' }}>
          {/* Chapter Number + Horizontal Rule */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
            <div ref={numRef} style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: 'clamp(3rem, 6vw, 5.5rem)',
              fontWeight: 300,
              color: era.themeColor,
              opacity: 0.7,
              lineHeight: 1,
              letterSpacing: '-0.02em',
              flexShrink: 0,
              userSelect: 'none',
              fontStyle: 'italic'
            }}>
              {ROMAN[index]}
            </div>
            <div ref={lineRef} style={{
              flex: 1,
              height: '1px',
              background: `linear-gradient(90deg, ${era.themeColor}66, transparent)`,
            }} />
            <div style={{
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: `${era.themeColor}`,
              opacity: 0.65,
              fontFamily: 'var(--font-ui)',
              flexShrink: 0
            }}>
              Chapter {ROMAN[index]}
            </div>
          </div>

          {/* Era Title */}
          <h3 ref={titleRef} style={{
            fontSize: 'clamp(1.8rem, 3.8vw, 3.2rem)',
            fontFamily: 'var(--font-editorial)',
            fontWeight: 500,
            color: 'var(--color-soft-ivory)',
            lineHeight: 1.15,
            letterSpacing: '-0.015em',
            marginBottom: '10px',
            maxWidth: '900px'
          }}>
            {era.title}
          </h3>

          {/* Subtitle */}
          <p ref={subtitleRef} style={{
            fontFamily: 'var(--font-editorial)',
            fontStyle: 'italic',
            fontSize: 'clamp(1rem, 1.6vw, 1.3rem)',
            color: era.themeColor,
            opacity: 0.9,
            marginBottom: '20px',
            letterSpacing: '0.01em'
          }}>
            {era.subtitle}
          </p>

          {/* Metadata row */}
          <div ref={metaRef} style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '20px'
          }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.06em',
              color: era.themeColor,
              background: `${era.themeColor}12`,
              border: `1px solid ${era.themeColor}33`,
              padding: '5px 14px', borderRadius: '2px'
            }}>
              <Calendar size={12} /> {era.dateRange}
            </span>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              fontSize: '0.8rem',
              color: 'rgba(245, 240, 230, 0.7)',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(185,154,96,0.14)',
              padding: '5px 14px', borderRadius: '2px'
            }}>
              <MapPin size={12} style={{ color: era.themeColor }} /> {era.location}
            </span>
          </div>

          {/* Description */}
          <p ref={descRef} style={{
            fontSize: 'clamp(0.88rem, 1.1vw, 1rem)',
            lineHeight: 1.72,
            color: 'rgba(245, 240, 230, 0.8)',
            maxWidth: '780px'
          }}>
            {era.description}
          </p>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────
   ARTIFACT ENTRY — Cinematic full-bleed museum card
   ───────────────────────────────────────────────────────── */
const ArtifactEntry: React.FC<{
  artifact: Artifact;
  index: number;          // global artifact index for alternating
  onSelect: (a: Artifact) => void;
  isActive: boolean;
  onVisible: (id: string) => void;
}> = ({ artifact, index, onSelect, isActive, onVisible }) => {
  const entryRef = useRef<HTMLDivElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const revealMaskRef = useRef<HTMLDivElement>(null);
  const textBlockRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const summaryRef = useRef<HTMLParagraphElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const nodeRef = useRef<HTMLButtonElement>(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [hovered, setHovered] = useState(false);

  const isRight = index % 2 === 1; // alternate layout

  useEffect(() => {
    const el = entryRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Visibility observer for active state
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.25) {
          onVisible(artifact.id);
        }
      },
      { threshold: [0.25], rootMargin: '-10% 0px -10% 0px' }
    );
    observer.observe(el);

    if (prefersReduced) return () => observer.disconnect();

    // Node pulse
    if (nodeRef.current) {
      gsap.fromTo(nodeRef.current,
        { scale: 0, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(2)',
          scrollTrigger: { trigger: el, start: 'top 75%', toggleActions: 'play none none none' }
        }
      );
    }

    // Image reveal via clip-path curtain
    const imgWrap = imgWrapRef.current;
    const revealMask = revealMaskRef.current;
    if (imgWrap && revealMask) {
      gsap.fromTo(revealMask,
        { scaleY: 1, transformOrigin: 'top center' },
        {
          scaleY: 0,
          duration: 1.1,
          ease: 'power3.inOut',
          scrollTrigger: { trigger: el, start: 'top 72%', toggleActions: 'play none none none' }
        }
      );

      // Subtle parallax on the image itself
      gsap.fromTo(imgRef.current,
        { y: 24 },
        {
          y: -24,
          ease: 'none',
          scrollTrigger: {
            trigger: imgWrap,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5
          }
        }
      );
    }

    // Text block stagger
    const textEl = textBlockRef.current;
    if (textEl) {
      const textChildren = [dateRef.current, titleRef.current, summaryRef.current, metaRef.current, btnRef.current];
      gsap.fromTo(
        textChildren.filter(Boolean),
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: { trigger: el, start: 'top 70%', toggleActions: 'play none none none' }
        }
      );
    }

    return () => {
      observer.disconnect();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === el || st.vars.trigger === imgWrapRef.current) st.kill();
      });
    };
  }, [artifact.id, onVisible]);

  return (
    <div
      ref={entryRef}
      className="kaal-artifact-entry"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2px 1fr',
        gridTemplateRows: 'auto',
        gap: '0 clamp(20px, 4vw, 56px)',
        alignItems: 'center',
        position: 'relative',
        minHeight: '520px',
        transition: 'opacity 0.5s ease',
        opacity: 1,
      }}
    >
      {/* ── TIMELINE SPINE NODE ── */}
      <div style={{
        gridColumn: '2',
        gridRow: '1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 5
      }}>
        {/* Glow ring behind node */}
        <div style={{
          position: 'absolute',
          width: '56px', height: '56px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${artifact.themeColor}33 0%, transparent 70%)`,
          animation: isActive ? 'nodeGlow 2.5s ease-in-out infinite' : 'none'
        }} />
        <button
          ref={nodeRef}
          onClick={() => onSelect(artifact)}
          aria-label={`View ${artifact.title}`}
          style={{
            position: 'relative',
            width: isActive ? '20px' : '14px',
            height: isActive ? '20px' : '14px',
            borderRadius: '50%',
            background: isActive ? artifact.themeColor : 'var(--surface-base)',
            border: `2px solid ${artifact.themeColor}`,
            boxShadow: isActive
              ? `0 0 0 5px ${artifact.themeColor}22, 0 0 20px ${artifact.themeColor}55`
              : `0 0 12px ${artifact.themeColor}33`,
            cursor: 'pointer',
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            zIndex: 2,
            padding: 0,
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
      </div>

      {/* ── IMAGE COLUMN ── */}
      <div style={{ gridColumn: isRight ? '3' : '1', gridRow: '1', minWidth: 0, overflow: 'hidden' }}>
        <div
          ref={imgWrapRef}
          onClick={() => onSelect(artifact)}
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '3px',
            cursor: 'pointer',
            background: '#0d0d0b',
            border: `1px solid ${isActive ? artifact.themeColor + '55' : 'rgba(185,154,96,0.12)'}`,
            transition: 'border-color 0.5s ease',
            boxShadow: isActive
              ? `0 24px 60px -16px rgba(0,0,0,0.9), 0 0 40px -12px ${artifact.themeColor}22`
              : '0 16px 40px -12px rgba(0,0,0,0.7)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = `${artifact.themeColor}88`;
            if (imgRef.current) gsap.to(imgRef.current, { scale: 1.04, duration: 0.7, ease: 'power2.out' });
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = isActive ? `${artifact.themeColor}55` : 'rgba(185,154,96,0.12)';
            if (imgRef.current) gsap.to(imgRef.current, { scale: 1, duration: 0.7, ease: 'power2.out' });
          }}
        >
          {/* Image */}
          <div style={{ height: 'clamp(300px, 38vw, 520px)', position: 'relative', overflow: 'hidden' }}>
            <img
              ref={imgRef}
              src={artifact.image}
              alt={artifact.imageAlt}
              loading="lazy"
              onLoad={() => setImgLoaded(true)}
              style={{
                width: '100%',
                height: '105%',
                objectFit: artifact.imageFit || 'contain',
                objectPosition: artifact.imagePosition || 'center center',
                display: 'block',
                transformOrigin: 'center center',
                opacity: imgLoaded ? 1 : 0,
                transition: 'opacity 0.6s ease'
              }}
            />

            {/* Reveal curtain */}
            <div ref={revealMaskRef} style={{
              position: 'absolute',
              inset: 0,
              background: '#11130F',
              zIndex: 2,
              transformOrigin: 'top center'
            }} />

            {/* Cinematic vignette */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(
                180deg,
                rgba(17,19,15,0.1) 0%,
                transparent 30%,
                transparent 60%,
                rgba(17,19,15,0.85) 100%
              ), radial-gradient(ellipse at ${isRight ? '30%' : '70%'} 50%, transparent 40%, rgba(17,19,15,0.5) 100%)`,
              zIndex: 1,
              pointerEvents: 'none'
            }} />

            {/* Era color atmospheric overlay — subtle */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(ellipse at ${isRight ? '80% 80%' : '20% 80%'}, ${artifact.themeColor}0C 0%, transparent 60%)`,
              zIndex: 1,
              pointerEvents: 'none'
            }} />

            {/* Bottom label */}
            <div style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
              padding: '20px 20px 18px',
              zIndex: 3,
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '7px',
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(245, 240, 230, 0.65)'
              }}>
                <Eye size={13} style={{ color: artifact.themeColor }} />
                <span>Examine</span>
              </div>
              <span style={{
                fontSize: '0.68rem',
                letterSpacing: '0.08em',
                color: 'rgba(245, 240, 230, 0.35)',
                fontStyle: 'italic'
              }}>
                {artifact.artForm}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── TEXT COLUMN ── */}
      <div
        ref={textBlockRef}
        style={{
          gridColumn: isRight ? '1' : '3',
          gridRow: '1',
          padding: 'clamp(16px, 3vw, 40px)',
          textAlign: isRight ? 'right' : 'left',
          overflow: 'hidden',
          minWidth: 0,
        }}
      >
        {/* Date row */}
        <div ref={dateRef} style={{
          marginBottom: '14px',
        }}>
          {/* Date — prominent, clean */}
          <div style={{ display: 'flex', justifyContent: isRight ? 'flex-end' : 'flex-start', marginBottom: '10px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-ui)',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: 'clamp(0.95rem, 1.3vw, 1.15rem)',
              color: artifact.themeColor,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}>
              <Calendar size={14} style={{ flexShrink: 0, opacity: 0.8 }} />
              {artifact.dateLabel}
            </div>
          </div>
          {/* Period badge — on its own line */}
          <div style={{ display: 'flex', justifyContent: isRight ? 'flex-end' : 'flex-start' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center',
              fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(245, 240, 230, 0.65)',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(185,154,96,0.18)',
              padding: '3px 10px', borderRadius: '2px',
            }}>
              {artifact.period}
            </span>
          </div>
        </div>

        {/* Artifact Title */}
        <h3 ref={titleRef} style={{
          fontFamily: 'var(--font-editorial)',
          fontSize: 'clamp(1.7rem, 2.8vw, 2.6rem)',
          fontWeight: 500,
          color: 'var(--color-soft-ivory)',
          lineHeight: 1.15,
          letterSpacing: '-0.01em',
          marginBottom: '10px'
        }}>
          {artifact.title}
        </h3>

        {/* Artist / Tradition */}
        <p style={{
          fontFamily: 'var(--font-editorial)',
          fontStyle: 'italic',
          fontSize: '0.98rem',
          color: 'var(--color-antique-parchment)',
          opacity: 0.8,
          marginBottom: '18px',
          letterSpacing: '0.01em'
        }}>
          {artifact.artistOrTradition} · {artifact.material}
        </p>

        {/* Summary */}
        <p ref={summaryRef} style={{
          fontSize: 'clamp(0.88rem, 1.05vw, 0.98rem)',
          lineHeight: 1.72,
          color: 'rgba(245, 240, 230, 0.8)',
          marginBottom: '22px',
          maxWidth: '460px',
          marginLeft: isRight ? 'auto' : '0',
          marginRight: isRight ? '0' : 'auto',
        }}>
          {artifact.summary}
        </p>

        {/* Meta tags */}
        <div ref={metaRef} style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '26px',
          justifyContent: isRight ? 'flex-end' : 'flex-start'
        }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '5px',
            fontSize: '0.75rem', color: 'rgba(233,223,201,0.55)',
            letterSpacing: '0.05em'
          }}>
            <Layers size={11} /> {artifact.artForm}
          </span>
          <span style={{ fontSize: '0.75rem', color: 'rgba(233,223,201,0.25)' }}>·</span>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '5px',
            fontSize: '0.75rem', color: 'rgba(233,223,201,0.55)',
            letterSpacing: '0.05em'
          }}>
            <MapPin size={11} /> {artifact.origin}
          </span>
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', justifyContent: isRight ? 'flex-end' : 'flex-start' }}>
          <button
            ref={btnRef}
            onClick={() => onSelect(artifact)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '9px',
              padding: '11px 24px',
              background: hovered ? `${artifact.themeColor}20` : 'rgba(185,154,96,0.07)',
              border: `1px solid ${hovered ? artifact.themeColor + '88' : 'rgba(185,154,96,0.28)'}`,
              color: hovered ? artifact.themeColor : 'var(--color-antique-parchment)',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              borderRadius: '2px',
              cursor: 'pointer',
              transition: 'all 0.3s var(--transition-smooth)',
              fontFamily: 'var(--font-ui)',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <span>Examine Masterpiece</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────
   ANIMATED SPINE SVG — draws progressively on scroll
   ───────────────────────────────────────────────────────── */
const AnimatedSpine: React.FC<{ progress: number }> = ({ progress }) => {
  return (
    <div style={{
      position: 'absolute',
      top: 0, bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '2px',
      zIndex: 1,
      pointerEvents: 'none',
    }}>
      {/* Static dim track */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, rgba(185,154,96,0.08) 0%, rgba(185,154,96,0.04) 100%)',
      }} />
      {/* Active progress fill */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: `${Math.min(100, progress * 100)}%`,
        background: 'linear-gradient(180deg, rgba(185,154,96,0.8) 0%, rgba(185,154,96,0.3) 100%)',
        transition: 'height 0.1s linear',
        boxShadow: '0 0 12px rgba(185,154,96,0.4)'
      }} />
    </div>
  );
};

/* ─────────────────────────────────────────────────────────
   FLOATING ERA PROGRESS INDICATOR
   ───────────────────────────────────────────────────────── */
const EraProgressPill: React.FC<{
  eras: HistoricalEra[];
  activeArtifactId: string;
  artifacts: Artifact[];
  onNavigate: (id: string) => void;
}> = ({ eras, activeArtifactId, artifacts, onNavigate }) => {
  const [visible, setVisible] = useState(false);
  const pillRef = useRef<HTMLDivElement>(null);

  const activeArtifact = artifacts.find(a => a.id === activeArtifactId);
  const activeEra = eras.find(e => e.id === activeArtifact?.traditionId);
  const activeEraIndex = eras.findIndex(e => e.id === activeArtifact?.traditionId);

  useEffect(() => {
    const handleScroll = () => {
      const timelineEl = document.getElementById('timeline');
      if (!timelineEl) return;
      const rect = timelineEl.getBoundingClientRect();
      setVisible(rect.top < 0 && rect.bottom > 200);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div ref={pillRef} style={{
      position: 'fixed',
      bottom: '28px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      background: 'rgba(17,19,15,0.92)',
      border: '1px solid rgba(185,154,96,0.28)',
      borderRadius: '40px',
      padding: '8px 16px',
      backdropFilter: 'blur(16px)',
      boxShadow: '0 16px 48px rgba(0,0,0,0.8)',
      animation: 'fadeIn 0.4s ease'
    }}>
      {eras.map((era, i) => {
        const isActive = era.id === activeEra?.id;
        return (
          <button
            key={era.id}
            onClick={() => {
              const eraArtifacts = artifacts.filter(a => a.traditionId === era.id);
              if (eraArtifacts[0]) {
                const el = document.getElementById(`artifact-${eraArtifacts[0].id}`);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }}
            title={era.title}
            style={{
              width: isActive ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              background: isActive ? era.themeColor : 'rgba(185,154,96,0.2)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.35s var(--transition-smooth)',
              padding: 0,
              flexShrink: 0,
              boxShadow: isActive ? `0 0 10px ${era.themeColor}55` : 'none'
            }}
            aria-label={era.title}
          />
        );
      })}

      {activeEra && (
        <span style={{
          marginLeft: '8px',
          fontSize: '0.68rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: activeEra.themeColor,
          fontWeight: 600,
          fontFamily: 'var(--font-ui)',
          whiteSpace: 'nowrap'
        }}>
          {ROMAN[activeEraIndex]} · {activeEra.title.split(' ')[0]}
        </span>
      )}
    </div>
  );
};

/* ─────────────────────────────────────────────────────────
   SECTION HEADER — Cinematic entrance for "The Living Chronicle"
   ───────────────────────────────────────────────────────── */
const SectionHeader: React.FC = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const chevRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 82%',
        toggleActions: 'play none none none',
      }
    });

    tl.fromTo(badgeRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
    )
    .fromTo(titleRef.current,
      { opacity: 0, y: 30, clipPath: 'inset(0 0 100% 0)' },
      { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 0.9, ease: 'power3.out' },
      '-=0.2'
    )
    .fromTo(paraRef.current,
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.65, ease: 'power2.out' },
      '-=0.4'
    )
    .fromTo(chevRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4 },
      '-=0.2'
    );

    return () => { tl.kill(); };
  }, []);

  return (
    <div ref={wrapRef} style={{ textAlign: 'center', marginBottom: '100px' }}>
      <span ref={badgeRef} className="museum-badge" style={{ marginBottom: '20px', display: 'inline-block' }}>
        Historical Odyssey
      </span>

      {/* Decorative rule above title */}
      <div style={{
        width: '1px', height: '40px', margin: '0 auto 20px',
        background: 'linear-gradient(180deg, transparent, rgba(185,154,96,0.5), transparent)'
      }} />

      <h2 ref={titleRef} style={{
        fontFamily: 'var(--font-editorial)',
        fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
        fontWeight: 400,
        color: 'var(--color-soft-ivory)',
        letterSpacing: '-0.025em',
        lineHeight: 1.05,
        marginBottom: '24px'
      }}>
        The Living<br />
        <em style={{ color: 'var(--color-aged-brass)', opacity: 0.85 }}>Chronicle</em>
      </h2>

      <p ref={paraRef} style={{
        maxWidth: '600px',
        margin: '0 auto 32px',
        color: 'rgba(245, 240, 230, 0.65)',
        fontSize: 'clamp(0.9rem, 1.1vw, 1.05rem)',
        lineHeight: 1.72,
        fontWeight: 300
      }}>
        Explore the unbroken arc of Indian creative expression across five millennia.
        Trace how sacred ideas, material technologies, and aesthetic canons were
        preserved, transformed, and reborn.
      </p>

      <div ref={chevRef} style={{ animation: 'bobChev 2.5s ease-in-out infinite' }}>
        <ChevronDown size={20} style={{ color: 'rgba(185,154,96,0.45)', margin: '0 auto' }} />
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────
   MAIN TIMELINE SECTION
   ───────────────────────────────────────────────────────── */
export const TimelineSection: React.FC<TimelineSectionProps> = ({
  artifacts,
  onSelectArtifact
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeArtifactId, setActiveArtifactId] = useState<string>(artifacts[0]?.id || '');
  const [spineProgress, setSpineProgress] = useState(0);

  // Track spine scroll progress
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const scrolled = Math.max(0, -rect.top);
      const progress = Math.min(1, scrolled / (sectionHeight - window.innerHeight));
      setSpineProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleArtifactVisible = useCallback((id: string) => {
    setActiveArtifactId(id);
  }, []);

  // Refresh ScrollTrigger after mount
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);
    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  let globalArtifactIndex = 0;

  return (
    <>
      <section
        ref={sectionRef}
        id="timeline"
        style={{
          position: 'relative',
          padding: 'clamp(80px, 10vw, 140px) clamp(16px, 4vw, 40px) clamp(80px, 10vw, 140px)',
          maxWidth: '1320px',
          margin: '0 auto',
        }}
      >
        {/* Section header */}
        <SectionHeader />

        {/* Era chapters */}
        <div style={{ position: 'relative' }}>
          {/* Animated vertical spine — runs through all chapters */}
          <AnimatedSpine progress={spineProgress} color="var(--color-aged-brass)" />

          {/* Chapters */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(80px, 10vw, 140px)', position: 'relative', zIndex: 2 }}>
            {HISTORICAL_ERAS.map((era, eraIndex) => {
              const eraArtifacts = artifacts.filter(a => a.traditionId === era.id);
              if (eraArtifacts.length === 0) return null;

              return (
                <div key={era.id} style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(60px, 8vw, 100px)' }}>
                  {/* Chapter Banner */}
                  <ChapterBanner era={era} index={eraIndex} />

                  {/* Artifacts in this era */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(60px, 9vw, 120px)' }}>
                    {eraArtifacts.map((artifact) => {
                      const idx = globalArtifactIndex++;
                      return (
                        <div key={artifact.id} id={`artifact-${artifact.id}`}>
                          <ArtifactEntry
                            artifact={artifact}
                            index={idx}
                            onSelect={onSelectArtifact}
                            isActive={activeArtifactId === artifact.id}
                            onVisible={handleArtifactVisible}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── KEYFRAME STYLES ── */}
        <style>{`
          @keyframes nodeGlow {
            0%, 100% { transform: scale(1); opacity: 1; }
            50%       { transform: scale(1.6); opacity: 0; }
          }

          @keyframes bobChev {
            0%, 100% { transform: translateY(0); }
            50%       { transform: translateY(7px); }
          }

          /* Responsive: mobile vertical layout */
          @media (max-width: 800px) {
            .kaal-artifact-entry {
              display: flex !important;
              flex-direction: column !important;
              gap: 24px !important;
            }
          }

          /* Image hover scale — via JS GSAP, but fallback */
          .kaal-artifact-entry img {
            will-change: transform;
          }

          /* Spine node hover */
          .kaal-artifact-entry button:focus-visible {
            outline: 2px solid var(--color-aged-brass);
            outline-offset: 4px;
          }

          /* Ensure timeline section is above bg */
          #timeline {
            position: relative;
            z-index: 1;
          }
        `}</style>
      </section>

      {/* Floating era progress pill */}
      <EraProgressPill
        eras={HISTORICAL_ERAS}
        activeArtifactId={activeArtifactId}
        artifacts={artifacts}
        onNavigate={(id) => {
          const el = document.getElementById(`artifact-${id}`);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }}
      />
    </>
  );
};

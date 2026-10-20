import React, { useEffect, useRef, useState, useMemo } from 'react';

interface Glyph {
  id: string;
  char: string;
  label: string;
  period: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  baseSize: number; // px
  driftSpeedX: number;
  driftSpeedY: number;
  phase: number;
  layer: number; // 1, 2, or 3 for parallax
}

interface ArchitecturalLine {
  id: string;
  path: string;
  era: string;
  x: number;
  y: number;
  scale: number;
}

export const LivingArchiveBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cursor, setCursor] = useState<{ x: number; y: number; active: boolean }>({ x: -1000, y: -1000, active: false });
  const [hoveredGlyph, setHoveredGlyph] = useState<Glyph | null>(null);

  // Check touch device
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  // Historically verified script symbols and epigraphical glyphs
  const glyphsData: Glyph[] = useMemo(() => [
    // 1. INDUS VALLEY (Harappan Seal Glyphs — Undeciphered pictographic scripts, c. 2300 BCE)
    {
      id: 'indus-fish',
      char: '𓆛',
      label: 'Indus Seal Fish Glyph (M-24)',
      period: 'Mature Harappan (c. 2300 BCE)',
      x: 12,
      y: 18,
      baseSize: 32,
      driftSpeedX: 0.008,
      driftSpeedY: 0.012,
      phase: 0.5,
      layer: 1
    },
    {
      id: 'indus-jar',
      char: '𐤈',
      label: 'Harappan Pictogram (Standard Sign)',
      period: 'Mature Harappan (c. 2300 BCE)',
      x: 82,
      y: 22,
      baseSize: 28,
      driftSpeedX: -0.009,
      driftSpeedY: 0.008,
      phase: 1.2,
      layer: 2
    },
    {
      id: 'indus-horns',
      char: '𓂝',
      label: 'Steatite Seal Motif (Lord of Animals)',
      period: 'Mature Harappan (c. 2300 BCE)',
      x: 25,
      y: 42,
      baseSize: 30,
      driftSpeedX: 0.007,
      driftSpeedY: -0.01,
      phase: 2.1,
      layer: 1
    },

    // 2. MAURYAN & BUDDHIST (Ashokan Brahmi Script — Edicts of Sarnath & Sanchi, c. 250 BCE)
    {
      id: 'brahmi-dhamma',
      char: '𑀥',
      label: 'Brahmi "Dha" (Dharmachakra)',
      period: 'Mauryan Imperial Edicts (c. 250 BCE)',
      x: 75,
      y: 50,
      baseSize: 34,
      driftSpeedX: -0.006,
      driftSpeedY: 0.011,
      phase: 3.4,
      layer: 2
    },
    {
      id: 'brahmi-buddha',
      char: '𑀩',
      label: 'Brahmi "Ba" (Buddha / Awakening)',
      period: 'Sanchi Stupa Epigraphy (c. 2nd C. BCE)',
      x: 35,
      y: 68,
      baseSize: 30,
      driftSpeedX: 0.01,
      driftSpeedY: 0.006,
      phase: 4.0,
      layer: 3
    },
    {
      id: 'brahmi-anitya',
      char: '𑀅',
      label: 'Brahmi "A" (Anitya / Ephemerality)',
      period: 'Ashokan Rock Inscription (c. 250 BCE)',
      x: 88,
      y: 72,
      baseSize: 28,
      driftSpeedX: -0.008,
      driftSpeedY: -0.009,
      phase: 5.2,
      layer: 1
    },

    // 3. CHOLA & SOUTH INDIAN (Grantha & Classical Tamil Epigraphy, c. 11th C. CE)
    {
      id: 'chola-pranava',
      char: 'ௐ',
      label: 'Grantha Sacred Pranava',
      period: 'Imperial Chola Epigraphy (c. 1010 CE)',
      x: 18,
      y: 84,
      baseSize: 36,
      driftSpeedX: 0.007,
      driftSpeedY: -0.007,
      phase: 1.8,
      layer: 2
    },
    {
      id: 'chola-shiva',
      char: '𑌶',
      label: 'Grantha "Sha" (Sacred Bronze Dedication)',
      period: 'Thanjavur Temple Bronze Inscription (c. 11th C.)',
      x: 62,
      y: 88,
      baseSize: 32,
      driftSpeedX: -0.011,
      driftSpeedY: 0.007,
      phase: 2.9,
      layer: 3
    },

    // 4. MUGHAL ROYAL ATELIERS (Courtly Calligraphic Flourishes, c. 17th C. CE)
    {
      id: 'mughal-qalam',
      char: 'قلم',
      label: 'Nasta\'liq "Qalam" (The Master\'s Pen)',
      period: 'Mughal Imperial Atelier (c. 1615 CE)',
      x: 70,
      y: 32,
      baseSize: 26,
      driftSpeedX: 0.009,
      driftSpeedY: -0.008,
      phase: 3.1,
      layer: 1
    },
    {
      id: 'mughal-zar',
      char: 'زر',
      label: 'Courtly Illumination Gold Mark',
      period: 'St. Petersburg Royal Album (c. 1618 CE)',
      x: 15,
      y: 58,
      baseSize: 24,
      driftSpeedX: -0.007,
      driftSpeedY: 0.012,
      phase: 4.8,
      layer: 2
    },

    // 5. INDIGENOUS FOLK & TRIBAL GEOMETRY (Warli & Mithila Sacred Motifs)
    {
      id: 'folk-chauk',
      char: '◈',
      label: 'Sacred Lagna Chauk (Palaghata Enclosure)',
      period: 'Warli Indigenous Tradition',
      x: 48,
      y: 26,
      baseSize: 28,
      driftSpeedX: 0.006,
      driftSpeedY: 0.009,
      phase: 0.9,
      layer: 2
    },
    {
      id: 'folk-witness',
      char: '☼',
      label: 'Surya-Chandra Eternal Witnesses',
      period: 'Mithila Nuptial Tradition',
      x: 52,
      y: 78,
      baseSize: 30,
      driftSpeedX: -0.008,
      driftSpeedY: -0.006,
      phase: 2.7,
      layer: 1
    }
  ], []);

  // Heritage Architectural Linework SVG paths (temple elevation, Torana arch, stone jali, halo contours)
  const architecturalLines: ArchitecturalLine[] = useMemo(() => [
    // Torana Arch elevation (Buddhist Gateway geometry)
    {
      id: 'torana-arch',
      path: 'M 0 100 Q 150 40 300 100 M 0 120 Q 150 60 300 120 M 40 100 L 40 220 M 260 100 L 260 220',
      era: 'Sanchi Torana Gateway',
      x: 10,
      y: 28,
      scale: 0.75
    },
    // Dravidian Shikhara tiered vimana lines (Chola structural temple geometry)
    {
      id: 'shikhara-geometry',
      path: 'M 100 0 L 160 80 L 40 80 Z M 20 80 L 180 80 L 170 140 L 30 140 Z M 10 140 L 190 140 L 180 210 L 20 210 Z',
      era: 'Chola Vimana Elevation',
      x: 82,
      y: 60,
      scale: 0.65
    },
    // Cosmic Prabhamandala Flaming Halo arc (Chola bronze contour)
    {
      id: 'prabhamandala-ring',
      path: 'M 100 20 A 80 80 0 1 1 99 20 M 100 30 A 70 70 0 1 1 99 30',
      era: 'Chola Prabhamandala Contour',
      x: 78,
      y: 12,
      scale: 0.8
    },
    // Jali Geometric Interlocking Diamond Screen (Mughal architectural tracery)
    {
      id: 'jali-screen',
      path: 'M 0 50 L 50 0 L 100 50 L 50 100 Z M 100 50 L 150 0 L 200 50 L 150 100 Z M 50 100 L 100 50 L 150 100 L 100 150 Z',
      era: 'Fatehpur Sikri Jali Lattice',
      x: 20,
      y: 70,
      scale: 0.6
    }
  ], []);

  // Track cursor position smoothly
  useEffect(() => {
    if (isTouchDevice) return;

    let rafId: number;
    let targetX = -1000;
    let targetY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          setCursor({ x: targetX, y: targetY, active: true });
          rafId = 0;
        });
      }
    };

    const handleMouseLeave = () => {
      setCursor((prev) => ({ ...prev, active: false }));
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isTouchDevice]);

  // Micro Ambient Dust / Gold Mica Particles Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // 24 subtle floating particles (dust / aged gold mica specks)
    const particles = Array.from({ length: 24 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5,
      speedY: -(Math.random() * 0.18 + 0.05),
      speedX: (Math.random() - 0.5) * 0.08,
      alpha: Math.random() * 0.12 + 0.04,
      hue: Math.random() > 0.4 ? '185, 154, 96' : '99, 124, 107' // aged brass or mineral verdigris
    }));

    let animId: number;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;

        // Wrap around borders
        if (p.y < 0) p.y = height;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.hue}, ${p.alpha})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        backgroundColor: '#11130F', // Nearly black charcoal base
        backgroundImage: `
          radial-gradient(ellipse 90% 80% at 50% -20%, rgba(32, 41, 31, 0.45) 0%, transparent 70%),
          radial-gradient(ellipse 60% 60% at 85% 65%, rgba(46, 56, 42, 0.25) 0%, transparent 60%),
          radial-gradient(ellipse 65% 55% at 15% 85%, rgba(32, 41, 31, 0.3) 0%, transparent 65%)
        `
      }}
    >
      {/* ─── LAYER 1: CURSOR LIGHT (SOFT ANTIQUE-GOLD OIL LAMP SPOTLIGHT) ──────── */}
      {!isTouchDevice && cursor.active && (
        <div
          style={{
            position: 'absolute',
            left: `${cursor.x}px`,
            top: `${cursor.y}px`,
            transform: 'translate(-50%, -50%)',
            width: '540px',
            height: '540px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(185, 154, 96, 0.08) 0%, rgba(32, 41, 31, 0.05) 45%, transparent 70%)',
            pointerEvents: 'none',
            transition: 'opacity 0.4s ease',
            opacity: 1
          }}
        />
      )}

      {/* ─── LAYER 2: INTERACTIVE HERITAGE ARCHITECTURAL LINEWORK ────────── */}
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }}
      >
        <defs>
          <linearGradient id="brassStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B99A60" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#858174" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#20291F" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {architecturalLines.map((line) => {
          // Distance to cursor for dynamic stroke illumination
          let strokeAlpha = 0.06;
          if (!isTouchDevice && cursor.active) {
            const linePixelX = (line.x / 100) * window.innerWidth;
            const linePixelY = (line.y / 100) * window.innerHeight;
            const dist = Math.hypot(cursor.x - linePixelX, cursor.y - linePixelY);
            if (dist < 260) {
              strokeAlpha = 0.06 + (1 - dist / 260) * 0.22;
            }
          }

          return (
            <g
              key={line.id}
              transform={`translate(${(line.x / 100) * (typeof window !== 'undefined' ? window.innerWidth : 1200)}, ${(line.y / 100) * (typeof window !== 'undefined' ? window.innerHeight : 800)}) scale(${line.scale})`}
              style={{
                transition: 'opacity 0.3s ease',
                opacity: strokeAlpha
              }}
            >
              <path
                d={line.path}
                fill="none"
                stroke="url(#brassStroke)"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          );
        })}
      </svg>

      {/* ─── LAYER 3: SPARSE DRIFTING HISTORICAL GLYPHS WITH PROXIMITY ───── */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {glyphsData.map((glyph) => {
          // Calculate distance to pointer
          let proximityFactor = 0;
          if (!isTouchDevice && cursor.active && typeof window !== 'undefined') {
            const glyphPixelX = (glyph.x / 100) * window.innerWidth;
            const glyphPixelY = (glyph.y / 100) * window.innerHeight;
            const dist = Math.hypot(cursor.x - glyphPixelX, cursor.y - glyphPixelY);
            if (dist < 180) {
              proximityFactor = 1 - dist / 180; // 0 to 1
            }
          }

          const currentOpacity = 0.08 + proximityFactor * 0.65;
          const currentScale = 1 + proximityFactor * 0.15;
          const isNear = proximityFactor > 0.45;

          return (
            <div
              key={glyph.id}
              style={{
                position: 'absolute',
                left: `${glyph.x}%`,
                top: `${glyph.y}%`,
                transform: `translate(-50%, -50%) scale(${currentScale})`,
                transition: 'opacity 0.25s ease, transform 0.25s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                opacity: currentOpacity
              }}
            >
              {/* Glyph Character */}
              <div
                style={{
                  fontFamily: 'serif',
                  fontSize: `${glyph.baseSize}px`,
                  color: isNear ? '#B99A60' : 'rgba(233, 223, 201, 0.45)',
                  textShadow: isNear ? '0 0 16px rgba(185, 154, 96, 0.4)' : 'none',
                  userSelect: 'none',
                  lineHeight: 1,
                  filter: isNear ? 'none' : 'blur(0.4px)'
                }}
              >
                {glyph.char}
              </div>

              {/* Delicate Gold Proximity Label (fades in only when pointer approaches) */}
              {isNear && (
                <div
                  style={{
                    marginTop: '8px',
                    padding: '3px 8px',
                    background: 'rgba(17, 19, 15, 0.88)',
                    border: '1px solid rgba(185, 154, 96, 0.35)',
                    borderRadius: '2px',
                    fontSize: '0.62rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#B99A60',
                    whiteSpace: 'nowrap',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.8)',
                    animation: 'fadeIn 0.25s ease'
                  }}
                >
                  <span>{glyph.label}</span>
                  <span style={{ opacity: 0.4, margin: '0 4px' }}>•</span>
                  <span style={{ color: 'rgba(233, 223, 201, 0.7)' }}>{glyph.period}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ─── LAYER 4: MICRO PARTICLES CANVAS (SLOW GOLD MICA / STONE DUST) ─── */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
};

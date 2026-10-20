import React from 'react';
import { ArrowRight, Calendar, Layers, MapPin, Eye, Compass, Landmark } from 'lucide-react';
import { Artifact, HISTORICAL_ERAS } from '../../data/artifacts';

interface TimelineSectionProps {
  artifacts: Artifact[];
  onSelectArtifact: (artifact: Artifact) => void;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({
  artifacts,
  onSelectArtifact
}) => {
  // Global counter for alternating layout
  let globalCardIndex = 0;

  return (
    <section
      id="timeline"
      style={{
        position: 'relative',
        padding: '120px 24px 140px',
        maxWidth: '1360px',
        margin: '0 auto',
        minHeight: '100vh'
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <span className="museum-badge" style={{ marginBottom: '14px' }}>
          Historical Odyssey
        </span>
        <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', color: 'var(--color-soft-ivory)', marginBottom: '16px' }}>
          The Living Chronicle
        </h2>
        <p style={{ maxWidth: '640px', margin: '0 auto', color: 'rgba(245, 240, 230, 0.75)', fontSize: '1.05rem', lineHeight: 1.6 }}>
          Explore the unbroken arc of Indian creative expression across five millennia. Trace how sacred ideas, material technologies, and aesthetic canons were preserved, transformed, and reborn.
        </p>
      </div>

      {/* Vertical Spine & Timeline Chapters */}
      <div style={{ position: 'relative' }}>
        {/* Continuous Architectural Vertical Line Spine */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '2px',
            background: 'linear-gradient(180deg, var(--color-aged-brass), rgba(185, 154, 96, 0.25) 90%, transparent 100%)',
            zIndex: 1
          }}
          className="timeline-spine-line"
        />

        {/* Epoch Chapters Sequence */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', position: 'relative', zIndex: 2 }}>
          {HISTORICAL_ERAS.map((era, eraIndex) => {
            const eraArtifacts = artifacts.filter((a) => a.traditionId === era.id);
            if (eraArtifacts.length === 0) return null;

            return (
              <div key={era.id} style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
                {/* ─── ERA CHAPTER PARTITION PLAQUE ─────────────────────────── */}
                <div
                  style={{
                    position: 'relative',
                    zIndex: 10,
                    maxWidth: '880px',
                    margin: '0 auto',
                    width: '100%',
                    background: 'radial-gradient(ellipse at center, #24221c 0%, #171612 80%, #141411 100%)',
                    border: `1px solid ${era.themeColor}66`,
                    borderRadius: '4px',
                    padding: '32px clamp(20px, 4vw, 44px)',
                    boxShadow: 'var(--shadow-deep)',
                    textAlign: 'center'
                  }}
                  className="era-partition-card"
                >
                  {/* Spine Milestone Node on Top of Plaque */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '-16px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'var(--surface-base)',
                      border: `1px solid ${era.themeColor}`,
                      padding: '4px 16px',
                      borderRadius: '12px',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: era.themeColor,
                      boxShadow: `0 0 16px ${era.themeColor}33`,
                      fontFamily: 'var(--font-editorial)',
                      fontStyle: 'italic'
                    }}
                  >
                    {['Chapter I', 'Chapter II', 'Chapter III', 'Chapter IV', 'Chapter V', 'Chapter VI'][eraIndex] || `Chapter ${eraIndex + 1}`}
                  </div>

                  {/* Title & Subtitle */}
                  <h3
                    style={{
                      fontSize: 'clamp(1.6rem, 3.2vw, 2.3rem)',
                      color: 'var(--color-soft-ivory)',
                      marginTop: '6px',
                      marginBottom: '8px',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    {era.title}
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: 'var(--color-antique-parchment)', fontStyle: 'italic', opacity: 0.85, marginBottom: '16px' }}>
                    {era.subtitle}
                  </p>

                  {/* Date & Location Metadata Badges */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '12px',
                      marginBottom: '18px'
                    }}
                  >
                    {/* Date Range Badge */}
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: 'rgba(20, 20, 17, 0.75)',
                        border: '1px solid var(--border-subtle)',
                        padding: '5px 12px',
                        borderRadius: '2px',
                        fontSize: '0.82rem',
                        color: era.themeColor,
                        fontWeight: 600
                      }}
                    >
                      <Calendar size={13} />
                      <span>{era.dateRange}</span>
                    </div>

                    {/* Location Badge */}
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: 'rgba(20, 20, 17, 0.75)',
                        border: '1px solid var(--border-subtle)',
                        padding: '5px 12px',
                        borderRadius: '2px',
                        fontSize: '0.82rem',
                        color: 'rgba(245, 240, 230, 0.85)'
                      }}
                    >
                      <MapPin size={13} style={{ color: era.themeColor }} />
                      <span>{era.location}</span>
                    </div>
                  </div>

                  {/* Brief Curatorial Description */}
                  <p
                    style={{
                      maxWidth: '720px',
                      margin: '0 auto',
                      fontSize: '0.94rem',
                      lineHeight: 1.68,
                      color: 'rgba(245, 240, 230, 0.88)'
                    }}
                  >
                    {era.description}
                  </p>
                </div>

                {/* ─── ARTIFACT MASTERPIECES OF THIS ERA ────────────────────── */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
                  {eraArtifacts.map((artifact) => {
                    const isEven = globalCardIndex % 2 === 0;
                    globalCardIndex++;

                    return (
                      <div
                        key={artifact.id}
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(2, 1fr)',
                          gap: 'clamp(24px, 5vw, 64px)',
                          alignItems: 'center',
                          position: 'relative'
                        }}
                        className="timeline-entry-row"
                      >
                        {/* Timeline Center Node / Dot */}
                        <div
                          style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 10,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                          }}
                          className="timeline-center-node"
                        >
                          <button
                            onClick={() => onSelectArtifact(artifact)}
                            title={`View ${artifact.title}`}
                            style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '50%',
                              background: 'var(--surface-base)',
                              border: `2px solid ${artifact.themeColor}`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              boxShadow: `0 0 16px ${artifact.themeColor}55`,
                              cursor: 'pointer',
                              transition: 'transform 0.25s ease'
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.2)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                          >
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: artifact.themeColor }} />
                          </button>
                        </div>

                        {/* Left Column */}
                        <div
                          style={{
                            order: isEven ? 1 : 2,
                            textAlign: isEven ? 'right' : 'left'
                          }}
                          className="timeline-col-content"
                        >
                          {isEven ? (
                            /* Image Presentation Card */
                            <div
                              onClick={() => onSelectArtifact(artifact)}
                              style={{
                                position: 'relative',
                                borderRadius: '3px',
                                overflow: 'hidden',
                                border: '1px solid var(--border-subtle)',
                                background: 'var(--surface-card)',
                                boxShadow: 'var(--shadow-plaque)',
                                cursor: 'pointer',
                                transition: 'transform 0.4s var(--transition-smooth), border-color 0.4s ease'
                              }}
                              className="timeline-card-hover"
                            >
                              <div style={{
                                position: 'relative',
                                height: '380px',
                                width: '100%',
                                overflow: 'hidden',
                                background: '#0d0d0b'
                              }}>
                                <img
                                  src={artifact.image}
                                  alt={artifact.imageAlt}
                                  loading="lazy"
                                  style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: artifact.imageFit || 'contain',
                                    objectPosition: artifact.imagePosition || 'center center',
                                    transition: 'transform 0.6s var(--transition-smooth)'
                                  }}
                                />

                                {/* Museum Image Overlay Vignette */}
                                <div style={{
                                  position: 'absolute',
                                  inset: 0,
                                  background: 'linear-gradient(180deg, transparent 65%, rgba(14,14,11,0.85) 100%)'
                                }} />

                                {/* Hover Prompt */}
                                <div style={{
                                  position: 'absolute',
                                  bottom: '16px',
                                  left: '16px',
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '6px',
                                  color: 'var(--color-antique-parchment)',
                                  fontSize: '0.8rem',
                                  letterSpacing: '0.08em',
                                  textTransform: 'uppercase'
                                }}>
                                  <Eye size={14} style={{ color: 'var(--color-aged-brass)' }} />
                                  <span>Explore Exhibition Details</span>
                                </div>
                              </div>
                            </div>
                          ) : (
                            /* Curatorial Text Dossier */
                            <div style={{ padding: '20px clamp(12px, 3vw, 36px)' }}>
                              <div
                                className="timeline-meta-row"
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '12px',
                                  marginBottom: '10px',
                                  justifyContent: 'flex-end',
                                  flexWrap: 'wrap'
                                }}
                              >
                                <span className="museum-badge" style={{ borderColor: artifact.themeColor, color: artifact.themeColor, fontSize: '0.72rem' }}>
                                  {artifact.period}
                                </span>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                  <Calendar size={14} style={{ color: artifact.themeColor }} />
                                  <span style={{ fontSize: '0.92rem', color: artifact.themeColor, fontWeight: 600, letterSpacing: '0.08em' }}>
                                    {artifact.dateLabel}
                                  </span>
                                </div>
                              </div>

                              <h3 style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)', color: 'var(--color-soft-ivory)', marginBottom: '10px', lineHeight: 1.2 }}>
                                {artifact.title}
                              </h3>

                              <p style={{ fontSize: '0.98rem', color: 'var(--color-antique-parchment)', fontStyle: 'italic', marginBottom: '16px' }}>
                                {artifact.artistOrTradition} • {artifact.material}
                              </p>

                              <p style={{ fontSize: '0.95rem', color: 'rgba(245, 240, 230, 0.85)', lineHeight: 1.65, marginBottom: '20px' }}>
                                {artifact.summary}
                              </p>

                              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px', fontSize: '0.82rem', color: 'rgba(233, 223, 201, 0.65)', justifyContent: 'flex-end' }} className="timeline-tags-row">
                                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                  <Layers size={13} /> {artifact.artForm}
                                </span>
                                <span>•</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                  <MapPin size={13} /> {artifact.origin}
                                </span>
                              </div>

                              <button
                                onClick={() => onSelectArtifact(artifact)}
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '8px',
                                  padding: '10px 22px',
                                  background: 'rgba(185, 154, 96, 0.1)',
                                  border: '1px solid var(--border-brass)',
                                  color: 'var(--color-antique-parchment)',
                                  fontSize: '0.82rem',
                                  fontWeight: 600,
                                  letterSpacing: '0.12em',
                                  textTransform: 'uppercase',
                                  borderRadius: '2px',
                                  transition: 'all 0.25s ease'
                                }}
                              >
                                <span>Examine Masterpiece</span>
                                <ArrowRight size={14} />
                              </button>
                            </div>
                          )}
                        </div>

                        {/* Right Column */}
                        <div
                          style={{
                            order: isEven ? 2 : 1,
                            textAlign: isEven ? 'left' : 'right'
                          }}
                          className="timeline-col-content"
                        >
                          {isEven ? (
                            /* Curatorial Text Dossier */
                            <div style={{ padding: '20px clamp(12px, 3vw, 36px)' }}>
                              <div
                                className="timeline-meta-row"
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '12px',
                                  marginBottom: '10px',
                                  justifyContent: 'flex-start',
                                  flexWrap: 'wrap'
                                }}
                              >
                                <span className="museum-badge" style={{ borderColor: artifact.themeColor, color: artifact.themeColor, fontSize: '0.72rem' }}>
                                  {artifact.period}
                                </span>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                  <Calendar size={14} style={{ color: artifact.themeColor }} />
                                  <span style={{ fontSize: '0.92rem', color: artifact.themeColor, fontWeight: 600, letterSpacing: '0.08em' }}>
                                    {artifact.dateLabel}
                                  </span>
                                </div>
                              </div>

                              <h3 style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)', color: 'var(--color-soft-ivory)', marginBottom: '10px', lineHeight: 1.2 }}>
                                {artifact.title}
                              </h3>

                              <p style={{ fontSize: '0.98rem', color: 'var(--color-antique-parchment)', fontStyle: 'italic', marginBottom: '16px' }}>
                                {artifact.artistOrTradition} • {artifact.material}
                              </p>

                              <p style={{ fontSize: '0.95rem', color: 'rgba(245, 240, 230, 0.85)', lineHeight: 1.65, marginBottom: '20px' }}>
                                {artifact.summary}
                              </p>

                              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px', fontSize: '0.82rem', color: 'rgba(233, 223, 201, 0.65)', justifyContent: 'flex-start' }} className="timeline-tags-row">
                                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                  <Layers size={13} /> {artifact.artForm}
                                </span>
                                <span>•</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                  <MapPin size={13} /> {artifact.origin}
                                </span>
                              </div>

                              <button
                                onClick={() => onSelectArtifact(artifact)}
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '8px',
                                  padding: '10px 22px',
                                  background: 'rgba(185, 154, 96, 0.1)',
                                  border: '1px solid var(--border-brass)',
                                  color: 'var(--color-antique-parchment)',
                                  fontSize: '0.82rem',
                                  fontWeight: 600,
                                  letterSpacing: '0.12em',
                                  textTransform: 'uppercase',
                                  borderRadius: '2px',
                                  transition: 'all 0.25s ease'
                                }}
                              >
                                <span>Examine Masterpiece</span>
                                <ArrowRight size={14} />
                              </button>
                            </div>
                          ) : (
                            /* Image Presentation Card */
                            <div
                              onClick={() => onSelectArtifact(artifact)}
                              style={{
                                position: 'relative',
                                borderRadius: '3px',
                                overflow: 'hidden',
                                border: '1px solid var(--border-subtle)',
                                background: 'var(--surface-card)',
                                boxShadow: 'var(--shadow-plaque)',
                                cursor: 'pointer',
                                transition: 'transform 0.4s var(--transition-smooth), border-color 0.4s ease'
                              }}
                              className="timeline-card-hover"
                            >
                              <div style={{
                                position: 'relative',
                                height: '380px',
                                width: '100%',
                                overflow: 'hidden',
                                background: '#0d0d0b'
                              }}>
                                <img
                                  src={artifact.image}
                                  alt={artifact.imageAlt}
                                  loading="lazy"
                                  style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: artifact.imageFit || 'contain',
                                    objectPosition: artifact.imagePosition || 'center center',
                                    transition: 'transform 0.6s var(--transition-smooth)'
                                  }}
                                />

                                {/* Museum Image Overlay Vignette */}
                                <div style={{
                                  position: 'absolute',
                                  inset: 0,
                                  background: 'linear-gradient(180deg, transparent 65%, rgba(14,14,11,0.85) 100%)'
                                }} />

                                {/* Hover Prompt */}
                                <div style={{
                                  position: 'absolute',
                                  bottom: '16px',
                                  left: '16px',
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '6px',
                                  color: 'var(--color-antique-parchment)',
                                  fontSize: '0.8rem',
                                  letterSpacing: '0.08em',
                                  textTransform: 'uppercase'
                                }}>
                                  <Eye size={14} style={{ color: 'var(--color-aged-brass)' }} />
                                  <span>Explore Exhibition Details</span>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Responsive adjustments for mobile timeline */}
      <style>{`
        @media (max-width: 860px) {
          .timeline-spine-line {
            left: 20px !important;
            transform: none !important;
          }
          .timeline-entry-row {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
            padding-left: 48px;
          }
          .timeline-center-node {
            left: 20px !important;
            top: 28px !important;
            transform: translate(-50%, 0) !important;
          }
          .timeline-col-content {
            order: initial !important;
            text-align: left !important;
          }
          .timeline-meta-row {
            justify-content: flex-start !important;
          }
          .timeline-tags-row {
            justify-content: flex-start !important;
          }
          .era-partition-card {
            padding: 24px 16px !important;
          }
        }
      `}</style>
    </section>
  );
};

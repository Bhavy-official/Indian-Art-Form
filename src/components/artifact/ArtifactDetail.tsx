import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink, Box, Image as ImageIcon, MapPin, Calendar, Award, Info, Sparkles } from 'lucide-react';
import { Artifact, ArtifactHotspot } from '../../data/artifacts';
import { Artifact3DViewer } from './Artifact3DViewer';

interface ArtifactDetailProps {
  artifact: Artifact | null;
  onClose: () => void;
  onNavigateNext?: () => void;
  onNavigatePrev?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
}

export const ArtifactDetail: React.FC<ArtifactDetailProps> = ({
  artifact,
  onClose,
  onNavigateNext,
  onNavigatePrev,
  hasNext,
  hasPrev
}) => {
  const [viewMode, setViewMode] = useState<'image' | '3d'>('image');
  const [activeHotspot, setActiveHotspot] = useState<ArtifactHotspot | null>(null);

  // Reset view mode and hotspots on artifact change
  useEffect(() => {
    setViewMode(artifact?.modelType ? '3d' : 'image');
    setActiveHotspot(null);
  }, [artifact?.id]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && onNavigateNext && hasNext) {
        onNavigateNext();
      } else if (e.key === 'ArrowLeft' && onNavigatePrev && hasPrev) {
        onNavigatePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNavigateNext, onNavigatePrev, hasNext, hasPrev]);

  if (!artifact) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="artifact-modal-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        backgroundColor: 'rgba(14, 14, 12, 0.92)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px 16px',
        overflowY: 'auto'
      }}
    >
      {/* Background Dim Backdrop Click to Close */}
      <div
        onClick={onClose}
        style={{ position: 'absolute', inset: 0, zIndex: 0 }}
      />

      {/* Main Exhibition Display Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: '1240px',
          maxHeight: '92vh',
          backgroundColor: 'var(--surface-elevated)',
          border: '1px solid var(--border-brass)',
          boxShadow: 'var(--shadow-deep)',
          borderRadius: '4px',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        {/* Exhibition Header Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 28px',
          borderBottom: '1px solid var(--border-subtle)',
          backgroundColor: 'var(--surface-card)'
        }}>
          {/* Era / Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="museum-badge" style={{ borderColor: artifact.themeColor, color: artifact.themeColor }}>
              {artifact.era}
            </span>
            <span style={{ fontSize: '0.85rem', color: 'rgba(233, 223, 201, 0.6)', letterSpacing: '0.05em' }}>
              {artifact.period}
            </span>
          </div>

          {/* Action Tools & Close */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* View Mode Switcher if 3D model available */}
            {artifact.modelType && (
              <div style={{
                display: 'flex',
                background: 'rgba(20, 20, 17, 0.8)',
                padding: '3px',
                borderRadius: '3px',
                border: '1px solid var(--border-subtle)'
              }}>
                <button
                  onClick={() => setViewMode('image')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    fontSize: '0.78rem',
                    borderRadius: '2px',
                    background: viewMode === 'image' ? 'var(--color-aged-brass)' : 'transparent',
                    color: viewMode === 'image' ? 'var(--color-obsidian)' : 'var(--color-antique-parchment)',
                    fontWeight: 600
                  }}
                >
                  <ImageIcon size={14} /> Archival Image
                </button>
                <button
                  onClick={() => setViewMode('3d')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    fontSize: '0.78rem',
                    borderRadius: '2px',
                    background: viewMode === '3d' ? 'var(--color-aged-brass)' : 'transparent',
                    color: viewMode === '3d' ? 'var(--color-obsidian)' : 'var(--color-antique-parchment)',
                    fontWeight: 600
                  }}
                >
                  <Box size={14} /> Interactive 3D
                </button>
              </div>
            )}

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close Exhibition Viewer"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(233, 223, 201, 0.08)',
                color: 'var(--color-soft-ivory)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.2s ease',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Exhibition Content Area (Split Screen on Desktop) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          overflowY: 'auto',
          flex: 1
        }}>
          {/* Left Column: Visual Centerpiece (Image or 3D + Hotspots) */}
          <div style={{
            position: 'relative',
            background: '#11110f',
            borderRight: '1px solid var(--border-subtle)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '440px',
            padding: '24px'
          }}>
            {/* Visual Centerpiece Renderer */}
            {viewMode === '3d' && artifact.modelType ? (
              <Artifact3DViewer
                modelType={artifact.modelType}
                title={artifact.title}
                hotspots={artifact.hotspots}
                onHotspotClick={(h) => setActiveHotspot(h)}
                activeHotspotId={activeHotspot?.id}
              />
            ) : (
              <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                  src={artifact.image}
                  alt={artifact.imageAlt}
                  style={{
                    maxHeight: '520px',
                    width: 'auto',
                    maxWidth: '100%',
                    objectFit: artifact.imageFit || 'contain',
                    objectPosition: artifact.imagePosition || 'center center',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.85)',
                    borderRadius: '2px',
                    border: '1px solid rgba(233, 223, 201, 0.15)'
                  }}
                />

                {/* Interactive Visual Hotspots */}
                {artifact.hotspots?.map((hotspot) => (
                  <button
                    key={hotspot.id}
                    onClick={() => setActiveHotspot(activeHotspot?.id === hotspot.id ? null : hotspot)}
                    aria-label={`Hotspot: ${hotspot.title}`}
                    style={{
                      position: 'absolute',
                      left: `${hotspot.x}%`,
                      top: `${hotspot.y}%`,
                      transform: 'translate(-50%, -50%)',
                      width: '26px',
                      height: '26px',
                      borderRadius: '50%',
                      background: activeHotspot?.id === hotspot.id ? 'var(--color-aged-brass)' : 'rgba(20, 20, 17, 0.85)',
                      border: '2px solid var(--color-aged-brass)',
                      color: activeHotspot?.id === hotspot.id ? 'var(--color-obsidian)' : 'var(--color-aged-brass)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 16px var(--color-brass-glow)',
                      cursor: 'pointer',
                      zIndex: 10,
                      transition: 'transform 0.2s ease, background 0.2s ease'
                    }}
                  >
                    <Sparkles size={13} />
                  </button>
                ))}
              </div>
            )}

            {/* Hotspot Annotation Callout Card */}
            {activeHotspot && (
              <div style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                right: '24px',
                background: 'rgba(27, 26, 22, 0.95)',
                backdropFilter: 'blur(12px)',
                border: '1px solid var(--color-aged-brass)',
                padding: '16px 20px',
                borderRadius: '3px',
                boxShadow: 'var(--shadow-deep)',
                zIndex: 20,
                animation: 'fadeIn 0.25s ease'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Sparkles size={15} style={{ color: 'var(--color-aged-brass)' }} />
                    <h5 style={{ color: 'var(--color-antique-parchment)', fontSize: '0.98rem', fontWeight: 600 }}>
                      {activeHotspot.title}
                    </h5>
                  </div>
                  <button
                    onClick={() => setActiveHotspot(null)}
                    style={{ color: 'rgba(233, 223, 201, 0.6)', padding: '2px' }}
                  >
                    <X size={15} />
                  </button>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'rgba(245, 240, 230, 0.85)', lineHeight: 1.5 }}>
                  {activeHotspot.description}
                </p>
              </div>
            )}

            {/* Image Attribution Tag */}
            <div style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '16px',
              fontSize: '0.74rem',
              color: 'rgba(233, 223, 201, 0.5)'
            }}>
              <span>{artifact.imageCredit}</span>
              <span className="museum-badge" style={{ fontSize: '0.65rem', padding: '2px 6px' }}>
                {artifact.imageLicense}
              </span>
            </div>
          </div>

          {/* Right Column: Museum Curatorial Dossier & Analysis */}
          <div style={{
            padding: '36px 32px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            background: 'var(--surface-elevated)'
          }}>
            {/* Title & Date */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <Calendar size={14} style={{ color: 'var(--color-aged-brass)' }} />
                <span style={{ fontSize: '0.9rem', color: 'var(--color-aged-brass)', fontWeight: 600, letterSpacing: '0.05em' }}>
                  {artifact.dateLabel}
                </span>
              </div>
              <h2 id="artifact-modal-title" style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)', color: 'var(--color-soft-ivory)', lineHeight: 1.15, marginBottom: '8px' }}>
                {artifact.title}
              </h2>
              <p style={{ fontSize: '1rem', fontStyle: 'italic', color: 'var(--color-antique-parchment)', opacity: 0.85 }}>
                {artifact.artistOrTradition}
              </p>
            </div>

            {/* Museum Fast Metadata Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '12px',
              padding: '16px',
              background: 'var(--surface-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '2px'
            }}>
              <div>
                <span style={{ display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(233, 223, 201, 0.5)', marginBottom: '4px' }}>
                  Art Form
                </span>
                <span style={{ fontSize: '0.88rem', color: 'var(--color-soft-ivory)', fontWeight: 500 }}>
                  {artifact.artForm}
                </span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(233, 223, 201, 0.5)', marginBottom: '4px' }}>
                  Material & Medium
                </span>
                <span style={{ fontSize: '0.88rem', color: 'var(--color-soft-ivory)', fontWeight: 500 }}>
                  {artifact.material}
                </span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(233, 223, 201, 0.5)', marginBottom: '4px' }}>
                  Technique
                </span>
                <span style={{ fontSize: '0.88rem', color: 'var(--color-soft-ivory)', fontWeight: 500 }}>
                  {artifact.technique}
                </span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(233, 223, 201, 0.5)', marginBottom: '4px' }}>
                  Current Custody
                </span>
                <span style={{ fontSize: '0.88rem', color: 'var(--color-soft-ivory)', fontWeight: 500 }}>
                  {artifact.currentLocation}
                </span>
              </div>
            </div>

            {/* Curatorial Sections */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Historical Context */}
              <div>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--color-aged-brass)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Info size={14} /> Historical Context & Provenance
                </h4>
                <p style={{ fontSize: '0.94rem', lineHeight: 1.65, color: 'rgba(245, 240, 230, 0.88)' }}>
                  {artifact.historicalContext}
                </p>
              </div>

              {/* Visual Analysis */}
              <div>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--color-aged-brass)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Award size={14} /> Visual & Material Analysis
                </h4>
                <p style={{ fontSize: '0.94rem', lineHeight: 1.65, color: 'rgba(245, 240, 230, 0.88)' }}>
                  {artifact.visualAnalysis}
                </p>
              </div>

              {/* Cultural Significance */}
              <div>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--color-aged-brass)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <MapPin size={14} /> Cultural & Philosophic Significance
                </h4>
                <p style={{ fontSize: '0.94rem', lineHeight: 1.65, color: 'rgba(245, 240, 230, 0.88)' }}>
                  {artifact.culturalSignificance}
                </p>
              </div>
            </div>

            {/* Academic Sources */}
            <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '16px' }}>
              <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(233, 223, 201, 0.5)', display: 'block', marginBottom: '8px' }}>
                Institutional References & Scholarly Sources
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {artifact.sources.map((src, i) => (
                  <a
                    key={i}
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.82rem',
                      color: 'var(--color-aged-brass)',
                      padding: '4px 10px',
                      borderRadius: '2px',
                      background: 'rgba(185, 154, 96, 0.08)',
                      border: '1px solid var(--border-brass)'
                    }}
                  >
                    {src.title} <ExternalLink size={12} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Chronological Paging Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 28px',
          borderTop: '1px solid var(--border-subtle)',
          backgroundColor: 'var(--surface-card)'
        }}>
          <button
            onClick={onNavigatePrev}
            disabled={!hasPrev}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.85rem',
              color: hasPrev ? 'var(--color-antique-parchment)' : 'rgba(233, 223, 201, 0.25)',
              cursor: hasPrev ? 'pointer' : 'not-allowed'
            }}
          >
            <ChevronLeft size={16} /> Previous Masterpiece
          </button>

          <span style={{ fontSize: '0.78rem', color: 'rgba(233, 223, 201, 0.5)', letterSpacing: '0.08em' }}>
            Use ← → keys to navigate • ESC to close
          </span>

          <button
            onClick={onNavigateNext}
            disabled={!hasNext}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.85rem',
              color: hasNext ? 'var(--color-antique-parchment)' : 'rgba(233, 223, 201, 0.25)',
              cursor: hasNext ? 'pointer' : 'not-allowed'
            }}
          >
            Next Masterpiece <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

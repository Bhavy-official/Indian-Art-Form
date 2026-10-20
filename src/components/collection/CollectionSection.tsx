import React, { useState, useMemo } from 'react';
import { Search, Filter, SlidersHorizontal, ArrowUpDown, X, Check, Eye, Columns } from 'lucide-react';
import { Artifact, HISTORICAL_ERAS } from '../../data/artifacts';

interface CollectionSectionProps {
  artifacts: Artifact[];
  onSelectArtifact: (artifact: Artifact) => void;
}

export const CollectionSection: React.FC<CollectionSectionProps> = ({
  artifacts,
  onSelectArtifact
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEra, setSelectedEra] = useState('all');
  const [selectedArtForm, setSelectedArtForm] = useState('all');
  const [sortOrder, setSortOrder] = useState<'chronological' | 'reverse'>('chronological');

  // Comparison State
  const [comparisonIds, setComparisonIds] = useState<string[]>([]);
  const [isComparingModalOpen, setIsComparingModalOpen] = useState(false);

  // Filter & Search Logic
  const filteredAndSortedArtifacts = useMemo(() => {
    let result = [...artifacts];

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter((a) =>
        a.title.toLowerCase().includes(q) ||
        a.artistOrTradition.toLowerCase().includes(q) ||
        a.period.toLowerCase().includes(q) ||
        a.material.toLowerCase().includes(q) ||
        a.origin.toLowerCase().includes(q) ||
        a.artForm.toLowerCase().includes(q) ||
        a.summary.toLowerCase().includes(q)
      );
    }

    // Era Filter
    if (selectedEra !== 'all') {
      result = result.filter((a) => a.traditionId === selectedEra);
    }

    // Art Form Filter
    if (selectedArtForm !== 'all') {
      result = result.filter((a) => a.artForm === selectedArtForm);
    }

    // Sort Order
    result.sort((a, b) => {
      return sortOrder === 'chronological'
        ? a.startYear - b.startYear
        : b.startYear - a.startYear;
    });

    return result;
  }, [artifacts, searchQuery, selectedEra, selectedArtForm, sortOrder]);

  const toggleComparison = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (comparisonIds.includes(id)) {
      setComparisonIds(comparisonIds.filter((item) => item !== id));
    } else {
      if (comparisonIds.length >= 2) {
        // Replace second item
        setComparisonIds([comparisonIds[0], id]);
      } else {
        setComparisonIds([...comparisonIds, id]);
      }
    }
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedEra('all');
    setSelectedArtForm('all');
    setSortOrder('chronological');
  };

  // Compare Objects
  const comparedArtifacts = useMemo(() => {
    return comparisonIds
      .map((id) => artifacts.find((a) => a.id === id))
      .filter((a): a is Artifact => Boolean(a));
  }, [artifacts, comparisonIds]);

  return (
    <section
      id="collection"
      style={{
        padding: '120px 24px 140px',
        maxWidth: '1360px',
        margin: '0 auto',
        minHeight: '100vh'
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <span className="museum-badge" style={{ marginBottom: '14px' }}>
          Permanent Collection
        </span>
        <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', color: 'var(--color-soft-ivory)', marginBottom: '16px' }}>
          Museum Catalogue
        </h2>
        <p style={{ maxWidth: '640px', margin: '0 auto', color: 'rgba(245, 240, 230, 0.75)', fontSize: '1.05rem', lineHeight: 1.6 }}>
          Comprehensive archival index of Indian sculptural, architectural, miniature, and ritual art forms. Filter by epoch or compare two works side by side.
        </p>
      </div>

      {/* Search & Filter Toolbar */}
      <div
        style={{
          background: 'var(--surface-elevated)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '4px',
          padding: '20px 24px',
          marginBottom: '36px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          boxShadow: 'var(--shadow-plaque)'
        }}
      >
        {/* Top Row: Search Input & Sort */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Search Bar */}
          <div style={{
            position: 'relative',
            flex: '1 1 300px',
            maxWidth: '520px'
          }}>
            <Search
              size={18}
              style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--color-aged-brass)',
                opacity: 0.7
              }}
            />
            <input
              type="text"
              placeholder="Search by name, medium, era, dynasty, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                background: 'var(--surface-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '2px',
                padding: '12px 14px 12px 42px',
                color: 'var(--color-soft-ivory)',
                fontSize: '0.9rem',
                outline: 'none',
                fontFamily: 'inherit'
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'rgba(233, 223, 201, 0.5)'
                }}
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Sort & Compare Trigger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Sort Toggle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ArrowUpDown size={15} style={{ color: 'var(--color-aged-brass)' }} />
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as 'chronological' | 'reverse')}
                style={{
                  background: 'var(--surface-card)',
                  color: 'var(--color-soft-ivory)',
                  border: '1px solid var(--border-subtle)',
                  padding: '8px 12px',
                  borderRadius: '2px',
                  fontSize: '0.85rem',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="chronological">Oldest First (Antiquity → Modern)</option>
                <option value="reverse">Newest First (Modern → Antiquity)</option>
              </select>
            </div>

            {/* Comparison Open Button if >= 2 selected */}
            {comparisonIds.length > 0 && (
              <button
                onClick={() => setIsComparingModalOpen(true)}
                disabled={comparisonIds.length < 2}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  borderRadius: '2px',
                  background: comparisonIds.length === 2 ? 'var(--color-aged-brass)' : 'rgba(185, 154, 96, 0.2)',
                  color: comparisonIds.length === 2 ? 'var(--color-obsidian)' : 'var(--color-antique-parchment)',
                  fontWeight: 600,
                  fontSize: '0.82rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  cursor: comparisonIds.length === 2 ? 'pointer' : 'not-allowed'
                }}
              >
                <Columns size={15} />
                <span>Compare Selected ({comparisonIds.length}/2)</span>
              </button>
            )}
          </div>
        </div>

        {/* Second Row: Filter Tabs & Result Count */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '16px'
        }}>
          {/* Era Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            <button
              onClick={() => setSelectedEra('all')}
              style={{
                padding: '4px 10px',
                fontSize: '0.76rem',
                borderRadius: '2px',
                background: selectedEra === 'all' ? 'var(--color-aged-brass)' : 'transparent',
                color: selectedEra === 'all' ? 'var(--color-obsidian)' : 'var(--color-antique-parchment)',
                border: '1px solid var(--border-subtle)',
                fontWeight: selectedEra === 'all' ? 600 : 400
              }}
            >
              All Traditions
            </button>
            {HISTORICAL_ERAS.map((era) => (
              <button
                key={era.id}
                onClick={() => setSelectedEra(era.id)}
                style={{
                  padding: '4px 10px',
                  fontSize: '0.76rem',
                  borderRadius: '2px',
                  background: selectedEra === era.id ? era.themeColor : 'transparent',
                  color: selectedEra === era.id ? 'var(--color-obsidian)' : 'var(--color-antique-parchment)',
                  border: '1px solid var(--border-subtle)',
                  fontWeight: selectedEra === era.id ? 600 : 400
                }}
              >
                {era.title}
              </button>
            ))}
          </div>

          {/* Counts & Clear Filters */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '0.82rem', color: 'rgba(233, 223, 201, 0.65)' }}>
            <span>Showing <strong>{filteredAndSortedArtifacts.length}</strong> of {artifacts.length} works</span>
            {(searchQuery || selectedEra !== 'all' || selectedArtForm !== 'all') && (
              <button
                onClick={clearFilters}
                style={{
                  color: 'var(--color-aged-brass)',
                  textDecoration: 'underline',
                  fontSize: '0.8rem'
                }}
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Grid of Artifacts or Empty State */}
      {filteredAndSortedArtifacts.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '80px 24px',
          background: 'var(--surface-card)',
          borderRadius: '4px',
          border: '1px dashed var(--border-subtle)'
        }}>
          <Filter size={36} style={{ color: 'var(--color-aged-brass)', margin: '0 auto 16px', opacity: 0.5 }} />
          <h3 style={{ fontSize: '1.4rem', color: 'var(--color-antique-parchment)', marginBottom: '8px' }}>
            No Masterpieces Match Your Criteria
          </h3>
          <p style={{ color: 'rgba(245, 240, 230, 0.6)', maxWidth: '420px', margin: '0 auto 20px', fontSize: '0.9rem' }}>
            We could not find any artifacts matching &quot;{searchQuery}&quot;. Try adjusting your search keywords or resetting filters.
          </p>
          <button
            onClick={clearFilters}
            style={{
              padding: '8px 20px',
              background: 'var(--color-aged-brass)',
              color: 'var(--color-obsidian)',
              fontWeight: 600,
              fontSize: '0.82rem',
              borderRadius: '2px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '32px'
          }}
        >
          {filteredAndSortedArtifacts.map((artifact) => {
            const isSelectedForCompare = comparisonIds.includes(artifact.id);

            return (
              <div
                key={artifact.id}
                onClick={() => onSelectArtifact(artifact)}
                style={{
                  background: 'var(--surface-card)',
                  border: isSelectedForCompare ? '1px solid var(--color-aged-brass)' : '1px solid var(--border-subtle)',
                  borderRadius: '3px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s var(--transition-smooth), border-color 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: 'var(--shadow-plaque)'
                }}
                className="catalogue-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = 'var(--border-brass)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  if (!isSelectedForCompare) {
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  }
                }}
              >
                {/* Image Container */}
                <div style={{
                  position: 'relative',
                  height: '280px',
                  width: '100%',
                  background: '#0e0e0c',
                  overflow: 'hidden'
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
                      transition: 'transform 0.5s ease'
                    }}
                  />

                  {/* Top Badges */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    right: '12px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span className="museum-badge" style={{ borderColor: artifact.themeColor, color: artifact.themeColor, fontSize: '0.65rem' }}>
                      {artifact.period}
                    </span>

                    {/* Compare Selection Checkbox Button */}
                    <button
                      onClick={(e) => toggleComparison(artifact.id, e)}
                      title={isSelectedForCompare ? 'Remove from comparison' : 'Select to compare'}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '4px 8px',
                        borderRadius: '2px',
                        background: isSelectedForCompare ? 'var(--color-aged-brass)' : 'rgba(20, 20, 17, 0.75)',
                        border: '1px solid var(--border-brass)',
                        color: isSelectedForCompare ? 'var(--color-obsidian)' : 'var(--color-antique-parchment)',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        backdropFilter: 'blur(6px)'
                      }}
                    >
                      {isSelectedForCompare ? <Check size={12} /> : <Columns size={12} />}
                      <span>{isSelectedForCompare ? 'Selected' : 'Compare'}</span>
                    </button>
                  </div>
                </div>

                {/* Card Editorial Info */}
                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-aged-brass)', fontWeight: 600, letterSpacing: '0.06em', marginBottom: '6px' }}>
                    {artifact.dateLabel}
                  </div>

                  <h3 style={{ fontSize: '1.25rem', color: 'var(--color-soft-ivory)', marginBottom: '8px', lineHeight: 1.25 }}>
                    {artifact.title}
                  </h3>

                  <p style={{ fontSize: '0.85rem', color: 'rgba(245, 240, 230, 0.7)', fontStyle: 'italic', marginBottom: '14px' }}>
                    {artifact.artistOrTradition}
                  </p>

                  <p style={{
                    fontSize: '0.86rem',
                    color: 'rgba(245, 240, 230, 0.85)',
                    lineHeight: 1.55,
                    marginBottom: '18px',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {artifact.summary}
                  </p>

                  <div style={{
                    marginTop: 'auto',
                    borderTop: '1px solid var(--border-subtle)',
                    paddingTop: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.76rem',
                    color: 'rgba(233, 223, 201, 0.6)'
                  }}>
                    <span>{artifact.material}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-aged-brass)', fontWeight: 600 }}>
                      <Eye size={13} /> View
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Artifact Comparison Modal */}
      {isComparingModalOpen && comparedArtifacts.length === 2 && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 3000,
            backgroundColor: 'rgba(14, 14, 12, 0.94)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px 16px',
            overflowY: 'auto'
          }}
        >
          <div style={{
            background: 'var(--surface-elevated)',
            border: '1px solid var(--border-brass)',
            borderRadius: '4px',
            maxWidth: '1160px',
            width: '100%',
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: 'var(--shadow-deep)',
            overflow: 'hidden'
          }}>
            {/* Modal Header */}
            <div style={{
              padding: '16px 24px',
              borderBottom: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'var(--surface-card)'
            }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-soft-ivory)' }}>
                  Comparative Art Historical Analysis
                </h3>
                <span style={{ fontSize: '0.78rem', color: 'rgba(233, 223, 201, 0.6)' }}>
                  Side-by-side examination of material culture across traditions
                </span>
              </div>
              <button
                onClick={() => setIsComparingModalOpen(false)}
                style={{ padding: '8px', color: 'var(--color-soft-ivory)' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Comparison Side-by-Side Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2px',
              background: 'var(--border-subtle)',
              overflowY: 'auto',
              flex: 1
            }}>
              {comparedArtifacts.map((art) => (
                <div key={art.id} style={{ background: 'var(--surface-elevated)', padding: '28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {/* Artwork Image */}
                  <div style={{ height: '240px', background: '#0e0e0c', borderRadius: '2px', overflow: 'hidden', border: '1px solid var(--border-subtle)' }}>
                    <img
                      src={art.image}
                      alt={art.imageAlt}
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  </div>

                  <div>
                    <span className="museum-badge" style={{ borderColor: art.themeColor, color: art.themeColor, marginBottom: '6px' }}>
                      {art.period}
                    </span>
                    <h4 style={{ fontSize: '1.4rem', color: 'var(--color-soft-ivory)', marginBottom: '4px' }}>
                      {art.title}
                    </h4>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-aged-brass)', fontWeight: 600 }}>
                      {art.dateLabel}
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.88rem' }}>
                    <div>
                      <strong style={{ color: 'var(--color-antique-parchment)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        Medium & Technique:
                      </strong>
                      <span style={{ color: 'rgba(245, 240, 230, 0.85)' }}>{art.material} — {art.technique}</span>
                    </div>

                    <div>
                      <strong style={{ color: 'var(--color-antique-parchment)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        Geographic Origin:
                      </strong>
                      <span style={{ color: 'rgba(245, 240, 230, 0.85)' }}>{art.origin}</span>
                    </div>

                    <div>
                      <strong style={{ color: 'var(--color-antique-parchment)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        Visual Analysis:
                      </strong>
                      <p style={{ color: 'rgba(245, 240, 230, 0.85)', lineHeight: 1.5, marginTop: '4px' }}>{art.visualAnalysis}</p>
                    </div>

                    <div>
                      <strong style={{ color: 'var(--color-antique-parchment)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        Cultural & Theological Importance:
                      </strong>
                      <p style={{ color: 'rgba(245, 240, 230, 0.85)', lineHeight: 1.5, marginTop: '4px' }}>{art.culturalSignificance}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

import React from 'react';
import { ExternalLink, BookOpen, ShieldCheck, Landmark } from 'lucide-react';
import { ARTIFACTS_DATA } from '../../data/artifacts';

export const ReferencesSection: React.FC = () => {
  const primaryInstitutions = [
    {
      name: "Archaeological Survey of India (ASI)",
      role: "Custodian of India's National Monuments & Sarnath, Ajanta, Mamallapuram Excavations",
      url: "https://asi.nic.in/"
    },
    {
      name: "National Museum, New Delhi",
      role: "Primary repository for Indus Valley Antiquities & Chola Bronzes",
      url: "https://nationalmuseumindia.gov.in/"
    },
    {
      name: "UNESCO World Heritage Centre",
      role: "Documentation on Ajanta Caves (No. 242) & Sanchi Monuments (No. 524)",
      url: "https://whc.unesco.org/en/list/"
    },
    {
      name: "Freer Gallery of Art (Smithsonian Institution)",
      role: "Imperial Mughal Atelier Collections & St. Petersburg Album",
      url: "https://asia.si.edu/"
    },
    {
      name: "The Metropolitan Museum of Art, New York",
      role: "South Asian Curatorial Department & Open Access Initiative",
      url: "https://www.metmuseum.org/art/collection"
    },
    {
      name: "National Crafts Museum & Hastkala Academy, New Delhi",
      role: "Mithila (Madhubani) & Warli Tribal Indigenous Art Documentation",
      url: "https://nationalcraftsmuseum.nic.in/"
    },
    {
      name: "Los Angeles County Museum of Art (LACMA)",
      role: "South & Southeast Asian Sacred Metal Sculpture Archives",
      url: "https://www.lacma.org/"
    },
    {
      name: "National Gallery of Modern Art (NGMA), New Delhi",
      role: "Pioneering Modern Indian Art & Amrita Sher-Gil National Art Treasure Collection",
      url: "https://ngmaindia.gov.in/"
    }
  ];

  return (
    <section
      id="references"
      style={{
        padding: '120px 24px 140px',
        maxWidth: '1280px',
        margin: '0 auto',
        minHeight: '80vh'
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <span className="museum-badge" style={{ marginBottom: '14px' }}>
          Scholarly Transparency
        </span>
        <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', color: 'var(--color-soft-ivory)', marginBottom: '16px' }}>
          References &amp; Academic Provenance
        </h2>
        <p style={{ maxWidth: '680px', margin: '0 auto', color: 'rgba(245, 240, 230, 0.75)', fontSize: '1.05rem', lineHeight: 1.6 }}>
          KAAL is an educational digital museum platform. All historical timelines, material analyses, theological interpretations, and visual assets are rigorously anchored in peer-reviewed scholarship and accredited museum catalogues.
        </p>
      </div>

      {/* Institutional Archives Grid */}
      <div style={{ marginBottom: '64px' }}>
        <h3 style={{
          fontSize: '1.4rem',
          color: 'var(--color-antique-parchment)',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <Landmark size={20} style={{ color: 'var(--color-aged-brass)' }} />
          Primary Institutional Archives &amp; Museum Collections
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '16px'
        }}>
          {primaryInstitutions.map((inst, idx) => (
            <a
              key={idx}
              href={inst.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                padding: '20px',
                background: 'var(--surface-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '3px',
                transition: 'all 0.25s ease'
              }}
              className="inst-card-hover"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-brass)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <h4 style={{ fontSize: '1rem', color: 'var(--color-soft-ivory)', fontWeight: 600 }}>
                  {inst.name}
                </h4>
                <ExternalLink size={14} style={{ color: 'var(--color-aged-brass)', opacity: 0.8 }} />
              </div>
              <p style={{ fontSize: '0.82rem', color: 'rgba(233, 223, 201, 0.65)', lineHeight: 1.5 }}>
                {inst.role}
              </p>
            </a>
          ))}
        </div>
      </div>

      {/* Individual Artifact Academic Citations Table */}
      <div style={{
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '4px',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-plaque)'
      }}>
        <div style={{ padding: '24px 28px', borderBottom: '1px solid var(--border-subtle)' }}>
          <h3 style={{ fontSize: '1.3rem', color: 'var(--color-antique-parchment)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BookOpen size={18} style={{ color: 'var(--color-aged-brass)' }} />
            Curatorial Bibliography &amp; Image Licensing Registry
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'rgba(233, 223, 201, 0.65)', marginTop: '4px' }}>
            Individual citations for every masterpiece featured within the KAAL permanent timeline.
          </p>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
            <thead>
              <tr style={{ background: 'rgba(20, 20, 17, 0.6)', borderBottom: '1px solid var(--border-subtle)' }}>
                <th style={{ padding: '14px 20px', color: 'var(--color-aged-brass)', fontWeight: 600, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Artifact</th>
                <th style={{ padding: '14px 20px', color: 'var(--color-aged-brass)', fontWeight: 600, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Period / Date</th>
                <th style={{ padding: '14px 20px', color: 'var(--color-aged-brass)', fontWeight: 600, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Image Source &amp; Credit</th>
                <th style={{ padding: '14px 20px', color: 'var(--color-aged-brass)', fontWeight: 600, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Licence</th>
                <th style={{ padding: '14px 20px', color: 'var(--color-aged-brass)', fontWeight: 600, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Academic Source</th>
              </tr>
            </thead>
            <tbody>
              {ARTIFACTS_DATA.map((art, idx) => (
                <tr
                  key={art.id}
                  style={{
                    borderBottom: '1px solid rgba(233, 223, 201, 0.06)',
                    background: idx % 2 === 0 ? 'transparent' : 'rgba(233, 223, 201, 0.02)'
                  }}
                >
                  <td style={{ padding: '14px 20px', fontWeight: 500, color: 'var(--color-soft-ivory)' }}>
                    {art.title}
                  </td>
                  <td style={{ padding: '14px 20px', color: 'rgba(233, 223, 201, 0.8)' }}>
                    {art.dateLabel}
                  </td>
                  <td style={{ padding: '14px 20px', color: 'rgba(233, 223, 201, 0.7)' }}>
                    {art.imageCredit}
                  </td>
                  <td style={{ padding: '14px 20px' }}>
                    <span className="museum-badge" style={{ fontSize: '0.66rem', padding: '2px 6px' }}>
                      {art.imageLicense}
                    </span>
                  </td>
                  <td style={{ padding: '14px 20px' }}>
                    {art.sources[0] && (
                      <a
                        href={art.sources[0].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          color: 'var(--color-aged-brass)',
                          textDecoration: 'underline'
                        }}
                      >
                        {art.sources[0].title} <ExternalLink size={11} />
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Ethical Research Statement */}
      <div style={{
        marginTop: '48px',
        padding: '24px 28px',
        background: 'rgba(185, 154, 96, 0.06)',
        border: '1px solid var(--border-brass)',
        borderRadius: '3px',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '16px'
      }}>
        <ShieldCheck size={24} style={{ color: 'var(--color-aged-brass)', flexShrink: 0, marginTop: '2px' }} />
        <div>
          <h4 style={{ color: 'var(--color-antique-parchment)', fontSize: '0.98rem', marginBottom: '6px' }}>
            Academic Assignment &amp; Public Domain Cultural Heritage Notice
          </h4>
          <p style={{ fontSize: '0.86rem', color: 'rgba(245, 240, 230, 0.8)', lineHeight: 1.6 }}>
            This educational website was conceived as an interactive academic project. In accordance with open heritage mandates, photographic records and historical descriptions are utilized under Public Domain, Creative Commons (CC BY-SA), and educational fair use guidelines. No commercial copyright ownership is claimed over cultural antiquities.
          </p>
        </div>
      </div>
    </section>
  );
};

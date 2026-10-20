// ─────────────────────────────────────────────────────────
// TRADITION META (chronological order + display info)
// ─────────────────────────────────────────────────────────
const traditionMeta = [
    {
        id: 'indus-valley',
        name: 'Indus Valley',
        period: 'c. 3300 – 1300 BCE',
        type: 'ancient-civilization',
        description: 'The earliest known urban civilization of the Indian subcontinent, producing some of the world\'s first works of art.',
    },
    {
        id: 'ajanta',
        name: 'Ajanta',
        period: 'c. 2nd Century BCE – 480 CE',
        type: 'classical',
        description: 'Rock-cut Buddhist cave monuments in Maharashtra, home to extraordinary murals and sculptures.',
    },
    {
        id: 'chola',
        name: 'Chola',
        period: 'c. 9th – 13th Century CE',
        type: 'dynastic',
        description: 'A South Indian dynasty celebrated for its magnificent bronze sculptures and temple architecture.',
    },
    {
        id: 'mughal',
        name: 'Mughal',
        period: '16th – 19th Century CE',
        type: 'imperial',
        description: 'The Mughal Empire produced an exquisite fusion of Persian, Central Asian, and Indian artistic traditions.',
    },
    {
        id: 'madhubani',
        name: 'Madhubani',
        period: 'Continuous Tradition',
        type: 'living',
        description: 'A vibrant living art form from the Mithila region of Bihar, practised by women for centuries.',
    },
    {
        id: 'warli',
        name: 'Warli',
        period: 'Continuous Tradition',
        type: 'living',
        description: 'A tribal art form from Maharashtra using geometric forms to depict daily life, ritual, and community.',
    },
];

// ─────────────────────────────────────────────────────────
// UTILITY
// ─────────────────────────────────────────────────────────
function groupByTradition(data) {
    const map = new Map();
    traditionMeta.forEach(t => map.set(t.id, []));
    data.forEach(a => {
        if (map.has(a.traditionId)) map.get(a.traditionId).push(a);
    });
    return map;
}

function esc(str) {
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
}

// ─────────────────────────────────────────────────────────
// BUILD TIMELINE
// ─────────────────────────────────────────────────────────
function buildTimeline() {
    const grouped = groupByTradition(artifactData);
    const container = document.getElementById('timeline-content');
    container.innerHTML = '';

    traditionMeta.forEach((meta, idx) => {
        const artifacts = grouped.get(meta.id) || [];
        const isLiving = meta.type === 'living';

        const section = document.createElement('section');
        section.className = 'tradition-section fade-in';
        section.id = `section-${meta.id}`;
        section.setAttribute('data-tradition', meta.id);
        section.style.transitionDelay = `${idx * 0.06}s`;

        section.innerHTML = `
            <div class="tradition-dot"></div>
            <div class="tradition-header">
                <span class="tradition-era-label">${esc(meta.period)}</span>
                <h2 class="tradition-name">${esc(meta.name)}</h2>
                <p class="tradition-date">${esc(meta.description)}</p>
                ${isLiving ? `<span class="tradition-type-badge">Traditional &amp; Living Art Form</span>` : ''}
            </div>
            <div class="artifacts-grid" id="grid-${meta.id}"></div>
        `;

        container.appendChild(section);

        const grid = section.querySelector(`#grid-${meta.id}`);
        artifacts.forEach(artifact => {
            grid.appendChild(buildCard(artifact));
        });
    });
}

// ─────────────────────────────────────────────────────────
// BUILD ARTIFACT CARD
// ─────────────────────────────────────────────────────────
function buildCard(artifact) {
    const card = document.createElement('div');
    card.className = 'artifact-card';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View details for ${artifact.artifactName}`);

    const fit = artifact.imageFit || 'cover';
    const pos = artifact.imagePosition || 'center center';

    card.innerHTML = `
        <div class="card-img-wrap">
            <img
                class="card-img"
                src="${esc(artifact.image)}"
                alt="${esc(artifact.artifactName)}"
                loading="lazy"
                style="object-fit:${fit};object-position:${pos}"
                onerror="this.parentElement.innerHTML='<div class=\\'card-img-placeholder\\'><svg width=\\'36\\' height=\\'36\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'1\\'><rect x=\\'3\\' y=\\'3\\' width=\\'18\\' height=\\'18\\' rx=\\'2\\'/><circle cx=\\'9\\' cy=\\'9\\' r=\\'2\\'/><path d=\\'m21 15-5-5L5 21\\'/></svg><span>Image unavailable</span></div>'"
            >
            <div class="card-img-overlay">
                <span class="card-overlay-text">${esc(artifact.shortDescription)}</span>
            </div>
        </div>
        <div class="card-body">
            <p class="card-tradition-tag">${esc(artifact.tradition)} &middot; ${esc(artifact.date)}</p>
            <h3 class="card-title">${esc(artifact.artifactName)}</h3>
            <p class="card-desc">${esc(artifact.shortDescription)}</p>
            <span class="card-cta">
                View Details
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </span>
        </div>
    `;

    card.addEventListener('click', () => openModal(artifact));
    card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(artifact); }
    });

    return card;
}

// ─────────────────────────────────────────────────────────
// MODAL
// ─────────────────────────────────────────────────────────
const backdrop = document.getElementById('modal-backdrop');
const modalClose = document.getElementById('modal-close');

function openModal(artifact) {
    // Image – show loading state first
    const imgWrap = document.querySelector('.modal-img-wrap');
    imgWrap.classList.add('loading');

    const img = document.getElementById('modal-img');
    img.style.opacity = '0';
    img.src = '';

    // Apply positioning
    img.style.objectFit = artifact.imageFit || 'contain';
    img.style.objectPosition = artifact.imagePosition || 'center center';

    img.onload = () => {
        imgWrap.classList.remove('loading');
        img.style.transition = 'opacity 0.4s ease';
        img.style.opacity = '1';
    };

    img.onerror = () => {
        imgWrap.classList.remove('loading');
        img.style.opacity = '1';
        imgWrap.innerHTML = '<div class="card-img-placeholder" style="height:100%;flex-direction:column;display:flex;align-items:center;justify-content:center;color:var(--text-3);gap:.5rem;padding:2rem;"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/></svg><span style="font-size:.8rem">Image unavailable</span></div>';
    };

    img.alt = artifact.artifactName;
    img.src = artifact.image;

    // Text content
    document.getElementById('modal-badge').textContent = artifact.tradition;
    document.getElementById('modal-artifact-name').textContent = artifact.artifactName;
    document.getElementById('modal-period').textContent = `${artifact.period} · ${artifact.date}`;
    document.getElementById('modal-context').textContent = artifact.historicalContext;
    document.getElementById('modal-significance').textContent = artifact.significance;
    document.getElementById('modal-material').textContent = artifact.material;
    document.getElementById('modal-technique').textContent = artifact.technique;
    document.getElementById('modal-cultural').textContent = artifact.culturalImportance;

    const srcLink = document.getElementById('modal-source-link');
    srcLink.innerHTML = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5.5 2.5H2.5a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1V8.5M9 1.5h3.5m0 0v3.5m0-3.5L5.5 8.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg> ${esc(artifact.source)}`;
    srcLink.href = artifact.sourceUrl;

    document.getElementById('modal-attribution').textContent = artifact.attribution
        ? `Image: ${artifact.attribution}`
        : `Source: ${artifact.source}`;

    // Show
    backdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Scroll info pane to top each time
    document.getElementById('modal-info-col').scrollTop = 0;

    modalClose.focus();
}

function closeModal() {
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
backdrop.addEventListener('click', e => { if (e.target === backdrop) closeModal(); });
document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && backdrop.getAttribute('aria-hidden') === 'false') closeModal();
});

// ─────────────────────────────────────────────────────────
// FILTER / NAV
// ─────────────────────────────────────────────────────────
function initFilters() {
    const btns = document.querySelectorAll('.nf-btn');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const target = btn.getAttribute('data-target');

            document.querySelectorAll('.tradition-section').forEach(s => {
                const show = target === 'all' || s.getAttribute('data-tradition') === target;
                s.classList.toggle('hidden', !show);
            });

            // Close mobile menu if open
            document.getElementById('nav-filters').classList.remove('mobile-open');

            if (target !== 'all') {
                const sec = document.getElementById(`section-${target}`);
                if (sec) {
                    setTimeout(() => {
                        const navH = document.getElementById('site-nav').offsetHeight;
                        const top = sec.getBoundingClientRect().top + window.scrollY - navH - 24;
                        window.scrollTo({ top, behavior: 'smooth' });
                    }, 50);
                }
            } else {
                window.scrollTo({ top: document.getElementById('timeline').offsetTop - 70, behavior: 'smooth' });
            }
        });
    });
}

// ─────────────────────────────────────────────────────────
// ACTIVE SECTION HIGHLIGHT (IntersectionObserver on sections)
// Auto-updates the filter button as you scroll
// ─────────────────────────────────────────────────────────
function initActiveSection() {
    const sections = document.querySelectorAll('.tradition-section');
    const btns = document.querySelectorAll('.nf-btn[data-target]');

    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('data-tradition');
                btns.forEach(b => {
                    const isAll = b.getAttribute('data-target') === 'all';
                    const isMatch = b.getAttribute('data-target') === id;
                    b.classList.toggle('active', isMatch);
                });
            }
        });
    }, { threshold: 0.35 });

    sections.forEach(s => io.observe(s));
}

// ─────────────────────────────────────────────────────────
// SCROLL ANIMATIONS (fade-in sections)
// ─────────────────────────────────────────────────────────
function initScrollAnimations() {
    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.06 });

    document.querySelectorAll('.fade-in').forEach(el => io.observe(el));
}

// ─────────────────────────────────────────────────────────
// SCROLL PROGRESS BAR
// ─────────────────────────────────────────────────────────
function initProgressBar() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        bar.style.width = pct + '%';
    }, { passive: true });
}

// ─────────────────────────────────────────────────────────
// NAV SCROLL SHADOW
// ─────────────────────────────────────────────────────────
function initNavScroll() {
    const nav = document.getElementById('site-nav');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
}

// ─────────────────────────────────────────────────────────
// BACK TO TOP BUTTON
// ─────────────────────────────────────────────────────────
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 600);
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ─────────────────────────────────────────────────────────
// HERO CTA SMOOTH SCROLL
// ─────────────────────────────────────────────────────────
function initHeroCta() {
    document.getElementById('hero-cta').addEventListener('click', e => {
        e.preventDefault();
        const navH = document.getElementById('site-nav').offsetHeight;
        const top = document.getElementById('timeline').offsetTop - navH;
        window.scrollTo({ top, behavior: 'smooth' });
    });
}

// ─────────────────────────────────────────────────────────
// MOBILE NAV TOGGLE (CSS class-based, not inline styles)
// ─────────────────────────────────────────────────────────
function initMobileNav() {
    const toggle = document.getElementById('nav-menu-toggle');
    const filters = document.getElementById('nav-filters');
    toggle.addEventListener('click', () => {
        filters.classList.toggle('mobile-open');
        toggle.setAttribute('aria-expanded', filters.classList.contains('mobile-open'));
    });

    // Close on outside click
    document.addEventListener('click', e => {
        if (!e.target.closest('.nav-inner')) {
            filters.classList.remove('mobile-open');
        }
    });
}

// ─────────────────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    buildTimeline();
    initFilters();
    initScrollAnimations();
    initActiveSection();
    initNavScroll();
    initProgressBar();
    initBackToTop();
    initHeroCta();
    initMobileNav();
});

export interface ArtifactHotspot {
  id: string;
  x: number; // percentage (0-100)
  y: number; // percentage (0-100)
  title: string;
  description: string;
}

export interface Artifact {
  id: string;
  title: string;
  artistOrTradition: string;
  traditionId: string;
  dateLabel: string;
  startYear: number; // negative for BCE, positive for CE
  endYear?: number;
  period: string;
  era: string; // Thematic era chapter
  artForm: 'Sculpture' | 'Painting' | 'Architecture' | 'Folk & Living Art' | 'Miniature Painting';
  material: string;
  technique: string;
  origin: string;
  currentLocation: string;
  summary: string;
  historicalContext: string;
  visualAnalysis: string;
  culturalSignificance: string;
  image: string;
  imageAlt: string;
  imageCredit: string;
  imageLicense: string;
  sources: { title: string; url: string }[];
  hotspots?: ArtifactHotspot[];
  themeColor: string; // Period accent
  imageFit?: 'contain' | 'cover';
  imagePosition?: string;
}

export interface HistoricalEra {
  id: string;
  title: string;
  subtitle: string;
  dateRange: string;
  location: string;
  description: string;
  themeColor: string;
}

export const HISTORICAL_ERAS: HistoricalEra[] = [
  {
    id: 'indus-valley',
    title: 'Harappan Civilization (Indus Valley)',
    subtitle: 'Prehistoric Metallurgy & Urban Form',
    dateRange: 'c. 3300 – 1300 BCE (Mature: c. 2600–1900 BCE)',
    location: 'Indus River Basin (Mohenjo-daro, Harappa, Dholavira, Rakhigarhi)',
    description: 'One of the earliest urban civilizations of antiquity, celebrated for advanced brick engineering, lost-wax bronze metallurgy, and miniature steatite seal iconography.',
    themeColor: '#A6533B'
  },
  {
    id: 'ajanta',
    title: 'Ajanta Cave Sanctuaries (Classical Golden Age)',
    subtitle: 'Rock-Cut Sanctuaries & Compassionate Frescoes',
    dateRange: 'c. 2nd Century BCE – 480 CE (Vakataka Dynasty)',
    location: 'Waghora River Gorge, Aurangabad District, Maharashtra',
    description: 'Thirty rock-cut Buddhist monasteries and prayer halls hewn into volcanic basalt cliffs, housing India\'s most celebrated classical fresco-secco murals.',
    themeColor: '#637C6B'
  },
  {
    id: 'chola',
    title: 'Imperial Chola Dynasty',
    subtitle: 'Lost-Wax Bronze Sculpture & Temple Architecture',
    dateRange: 'c. 9th – 13th Century CE',
    location: 'Thanjavur, Gangaikonda Cholapuram & Chidambaram, Tamil Nadu',
    description: 'The zenith of South Indian sacred bronze casting. Chola master sthapathis perfected solid lost-wax casting, crafting dynamic cosmic icons for grand temple processions.',
    themeColor: '#B99A60'
  },
  {
    id: 'mughal',
    title: 'Mughal Imperial Ateliers',
    subtitle: 'Courtly Illumination & Naturalist Studies',
    dateRange: '16th – 19th Century CE (Akbar, Jahangir, Shah Jahan)',
    location: 'Agra, Delhi, Lahore & Fatehpur Sikri',
    description: 'An exquisite synthesis of Persian refinement, indigenous Indian expressive vibrancy, and European observation in royal albums and natural history portraits.',
    themeColor: '#41476C'
  },
  {
    id: 'madhubani',
    title: 'Mithila (Madhubani) Ritual Tradition',
    subtitle: 'Matriarchal Wall Painting & Cosmic Geometry',
    dateRange: 'Ancient to Continuous Living Tradition',
    location: 'Mithila Region, Northern Bihar & Southern Terai of Nepal',
    description: 'A sacred domestic art form practiced by women across generations. Using twigs, bamboo nibs, and natural dyes to paint ceremonial nuptial chambers and blessed scrolls.',
    themeColor: '#A6533B'
  },
  {
    id: 'warli',
    title: 'Warli Indigenous Tribal Art',
    subtitle: 'Elemental Geometry & Ecological Harmony',
    dateRange: 'Prehistoric Roots to Continuous Living Tradition',
    location: 'Northern Sahyadri Range, Thane & Palghar Districts, Maharashtra',
    description: 'An unbroken tribal tradition celebrating the rhythm of the cosmos. Painted with white rice paste on ochre mud walls, employing rudimentary circles, triangles, and spirals.',
    themeColor: '#858174'
  }
];

export const ARTIFACTS_DATA: Artifact[] = [
  // 1. INDUS DANCING GIRL
  {
    id: "indus-dancing-girl",
    title: "Dancing Girl",
    artistOrTradition: "Harappan Master Metallurgist",
    traditionId: "indus-valley",
    dateLabel: "c. 2300–1750 BCE",
    startYear: -2300,
    endYear: -1750,
    period: "Harappan Civilization",
    era: "Indus Valley",
    artForm: "Sculpture",
    material: "Bronze",
    technique: "Lost-wax casting (cire perdue)",
    origin: "Mohenjo-daro (Indus Valley, present-day Sindh)",
    currentLocation: "National Museum, New Delhi",
    summary: "A prehistoric bronze sculpture of a young woman standing with confident poise, hand on hip, adorned with an arm of bangles.",
    historicalContext: "Discovered in 1926 in the ancient city of Mohenjo-daro. It is one of the most famous artifacts of the Indus Valley Civilization, showcasing early urban life and artistic expression.",
    visualAnalysis: "Demonstrates advanced understanding of metallurgy and the lost-wax casting technique over 4,500 years ago. Her right arm rests boldly on her hip, while her hair is styled in an elaborate coiled chignon.",
    culturalSignificance: "Provides insight into the social life, physical appearance, attire, and metallurgical mastery of the Harappan people.",
    image: "assets/indus/dancing-girl.jpg",
    imageAlt: "Bronze statuette of the Dancing Girl of Mohenjo-daro",
    imageCredit: "National Museum, New Delhi",
    imageLicense: "Public Domain / Educational",
    sources: [
      { title: "National Museum, New Delhi", url: "https://nationalmuseumindia.gov.in/" },
      { title: "Archaeological Survey of India", url: "https://asi.nic.in/" }
    ],
    themeColor: "#A6533B",
    imageFit: "contain",
    imagePosition: "center 15%",
    hotspots: [
      {
        id: "dg-bangles",
        x: 62,
        y: 48,
        title: "Stacked Arm Bangles",
        description: "Her left arm carries an unbroken stack of bangles made from shell, bone, or terracotta."
      },
      {
        id: "dg-posture",
        x: 42,
        y: 42,
        title: "Self-Assured Stance",
        description: "The hand-on-hip posture conveys natural dynamic posture and cultural poise."
      },
      {
        id: "dg-coiffure",
        x: 52,
        y: 18,
        title: "Intricate Coiled Chignon",
        description: "A meticulously styled bun swept over the right shoulder reflecting personal grooming in Harappan society."
      }
    ]
  },

  // 2. INDUS PASHUPATI SEAL
  {
    id: "indus-pashupati",
    title: "Pashupati Seal",
    artistOrTradition: "Harappan Stone Engraver",
    traditionId: "indus-valley",
    dateLabel: "c. 2300–1750 BCE",
    startYear: -2300,
    endYear: -1750,
    period: "Harappan Civilization",
    era: "Indus Valley",
    artForm: "Sculpture",
    material: "Steatite (Soapstone)",
    technique: "Carving and intaglio engraving, followed by kiln heating",
    origin: "Mohenjo-daro, Indus Valley",
    currentLocation: "National Museum, New Delhi",
    summary: "A steatite seal depicting a seated figure in a yogic posture surrounded by wild animals, with undeciphered Indus script.",
    historicalContext: "Excavated at Mohenjo-daro in the 1920s. Seals like this were used for trade, identification of goods, and administrative purposes.",
    visualAnalysis: "The central horned figure is seated with heels pressed together. Surrounding him are four powerful beasts: an elephant, tiger, rhinoceros, and water buffalo.",
    culturalSignificance: "Often interpreted as an early proto-Shiva or 'Lord of Animals' (Pashupati), suggesting an ancient root of meditative and yogic practice.",
    image: "assets/indus/pashupati-seal.jpg",
    imageAlt: "Steatite Pashupati Seal found at Mohenjo-daro",
    imageCredit: "National Museum, New Delhi",
    imageLicense: "Public Domain / Educational",
    sources: [
      { title: "National Museum, New Delhi", url: "https://nationalmuseumindia.gov.in/" },
      { title: "Archaeological Survey of India", url: "https://asi.nic.in/" }
    ],
    themeColor: "#858174",
    imageFit: "contain",
    imagePosition: "center center",
    hotspots: [
      {
        id: "ps-horns",
        x: 50,
        y: 28,
        title: "Horned Headdress",
        description: "Bovine horns flanking a central floral crest, signifying sacred authority."
      },
      {
        id: "ps-animals",
        x: 78,
        y: 42,
        title: "Surrounding Fauna",
        description: "Elephant, tiger, rhinoceros, and buffalo depicted with acute naturalism."
      },
      {
        id: "ps-script",
        x: 50,
        y: 12,
        title: "Undeciphered Indus Script",
        description: "Seven pictographic glyphs carved along the top register."
      }
    ]
  },

  // 3. AJANTA PADMAPANI
  {
    id: "ajanta-padmapani",
    title: "Padmapani Bodhisattva",
    artistOrTradition: "Vakataka Royal Painters",
    traditionId: "ajanta",
    dateLabel: "c. 5th Century CE",
    startYear: 450,
    endYear: 500,
    period: "Vakataka Dynasty",
    era: "Ajanta Caves",
    artForm: "Painting",
    material: "Rock wall, natural mineral pigments",
    technique: "Fresco-secco (painting on dry lime-clay plaster)",
    origin: "Cave 1, Ajanta Caves, Maharashtra",
    currentLocation: "Ajanta Caves (UNESCO World Heritage Site No. 242)",
    summary: "A magnificent classical mural of the Lotus-bearing Bodhisattva Avalokiteshvara in Cave 1.",
    historicalContext: "Located in Cave 1 of the Ajanta Caves in Maharashtra. The caves were carved into a horseshoe cliff and served as Buddhist monasteries and prayer halls.",
    visualAnalysis: "Subtle shading, elegant rhythmic linework, and a profound expression of compassion epitomize the zenith of classical Buddhist painting in India.",
    culturalSignificance: "Represents the Mahayana Buddhist ideal of the Bodhisattva, a being who delays nirvana to help all sentient beings achieve liberation.",
    image: "assets/ajanta/padmapani.jpg",
    imageAlt: "Fresco of Bodhisattva Padmapani holding a blue lotus in Cave 1 at Ajanta",
    imageCredit: "Archaeological Survey of India / UNESCO",
    imageLicense: "Public Domain / Educational",
    sources: [
      { title: "UNESCO World Heritage List — Ajanta", url: "https://whc.unesco.org/en/list/242/" },
      { title: "Archaeological Survey of India", url: "https://asi.nic.in/" }
    ],
    themeColor: "#637C6B",
    imageFit: "cover",
    imagePosition: "center 20%",
    hotspots: [
      {
        id: "pp-lotus",
        x: 68,
        y: 65,
        title: "The Blue Lotus (Utpala)",
        description: "Symbol of spiritual purity blossoming unblemished out of mundane mud."
      },
      {
        id: "pp-gaze",
        x: 48,
        y: 35,
        title: "Downcast Contemplative Eyes",
        description: "Half-closed eyes embodying deep meditation and universal compassion."
      }
    ]
  },

  // 4. AJANTA INDRA WITH APSARAS
  {
    id: "ajanta-apsara",
    title: "Indra with Apsaras",
    artistOrTradition: "Ajanta Royal Guild",
    traditionId: "ajanta",
    dateLabel: "c. 5th Century CE",
    startYear: 450,
    endYear: 480,
    period: "Vakataka Dynasty",
    era: "Ajanta Caves",
    artForm: "Painting",
    material: "Fresco-secco on dry lime plaster",
    technique: "Fresco-secco with mineral washes",
    origin: "Cave 17, Ajanta Caves, Maharashtra",
    currentLocation: "Ajanta Caves (Cave 17)",
    summary: "A celestial narrative mural depicting Indra accompanied by heavenly nymphs floating through the skies.",
    historicalContext: "Located in Cave 17 of the Ajanta Caves, renowned for its rich narrative murals patronized under King Harisena of the Vakatakas.",
    visualAnalysis: "Exemplifies mastery of naturalistic form, expressive gesture, luminous pearls, and weightless kinetic grace.",
    culturalSignificance: "Illustrates the rich cosmological worldview where celestial beings intermingled with earthly narratives.",
    image: "assets/ajanta/apsara.jpg",
    imageAlt: "Celestial mural of Indra and floating apsaras in Cave 17 of Ajanta",
    imageCredit: "Archaeological Survey of India / UNESCO",
    imageLicense: "Public Domain / Educational",
    sources: [
      { title: "UNESCO World Heritage — Ajanta", url: "https://whc.unesco.org/en/list/242/" },
      { title: "Archaeological Survey of India", url: "https://asi.nic.in/" }
    ],
    themeColor: "#637C6B",
    imageFit: "cover",
    imagePosition: "center top",
    hotspots: [
      {
        id: "ap-floating",
        x: 52,
        y: 30,
        title: "Weightless Kinetic Flight",
        description: "Diagonal composition expressing soaring flight through the celestial realms."
      },
      {
        id: "ap-pearls",
        x: 45,
        y: 48,
        title: "Luminous Pearl Strands",
        description: "Fine white lime highlights depicting natural river pearls reflecting lamp light."
      }
    ]
  },

  // 5. CHOLA NATARAJA
  {
    id: "chola-nataraja",
    title: "Nataraja",
    artistOrTradition: "Chola Sthapathi Master Sculptor",
    traditionId: "chola",
    dateLabel: "c. 11th Century CE",
    startYear: 1000,
    endYear: 1100,
    period: "Chola Dynasty",
    era: "Chola Dynasty",
    artForm: "Sculpture",
    material: "Bronze (Panchaloha alloy)",
    technique: "Lost-wax solid casting",
    origin: "Tamil Nadu, South India",
    currentLocation: "National Museum, New Delhi / LACMA",
    summary: "Shiva depicted as the Lord of the Cosmic Dance within a flaming ring of fire.",
    historicalContext: "Created during the height of the imperial Chola dynasty in South India, celebrated for prolific temple construction and bronze casting.",
    visualAnalysis: "Visualizes the cosmic cycles of creation and dissolution. Damaru drum in upper right hand, flame of transformation in upper left, abhaya gesture in lower right.",
    culturalSignificance: "One of the most iconic symbols of Indian art globally, embodying complex philosophical theology in a single harmonious form.",
    image: "assets/chola/nataraja.jpg",
    imageAlt: "Chola bronze sculpture of Shiva Nataraja dancing within a circle of flame",
    imageCredit: "National Museum, New Delhi / LACMA",
    imageLicense: "Public Domain / Educational",
    sources: [
      { title: "LACMA South Asian Collection", url: "https://www.lacma.org/" },
      { title: "National Museum, New Delhi", url: "https://nationalmuseumindia.gov.in/" }
    ],
    themeColor: "#B99A60",
    imageFit: "contain",
    imagePosition: "center center",
    hotspots: [
      {
        id: "nt-drum",
        x: 28,
        y: 28,
        title: "Damaru (Creation Drum)",
        description: "Produces the primordial vibration from which space and time unfold."
      },
      {
        id: "nt-fire",
        x: 72,
        y: 28,
        title: "Agni (Transformative Fire)",
        description: "Consumes cosmic illusion at the close of every universal epoch."
      },
      {
        id: "nt-demon",
        x: 52,
        y: 84,
        title: "Apasmara (Dwarf of Ignorance)",
        description: "Trampled beneath Shiva's right foot, releasing humankind into liberation."
      }
    ]
  },

  // 6. CHOLA SOMASKANDA
  {
    id: "chola-somaskanda",
    title: "Somaskanda",
    artistOrTradition: "Chola Master Sculptors",
    traditionId: "chola",
    dateLabel: "c. 11th Century CE",
    startYear: 1000,
    endYear: 1050,
    period: "Chola Dynasty",
    era: "Chola Dynasty",
    artForm: "Sculpture",
    material: "Bronze",
    technique: "Lost-wax casting",
    origin: "Tamil Nadu, South India",
    currentLocation: "National Museum, New Delhi",
    summary: "A sacred bronze group showing Shiva, Uma (Parvati), and the child Skanda.",
    historicalContext: "A popular iconic form during the Pallava and Chola periods. These portable bronze deities were paraded during temple festivals (utsava murtis).",
    visualAnalysis: "Represents the ideal divine family in Hindu iconography, emphasizing companionate affection and cosmic harmony.",
    culturalSignificance: "Reflects the integration of domestic family ideals into divine worship and processional temple traditions.",
    image: "assets/chola/somaskanda.jpg",
    imageAlt: "Chola bronze group showing Shiva, Uma, and Skanda",
    imageCredit: "National Museum, New Delhi",
    imageLicense: "Public Domain / Educational",
    sources: [
      { title: "National Museum, New Delhi", url: "https://nationalmuseumindia.gov.in/" },
      { title: "Archaeological Survey of India", url: "https://asi.nic.in/" }
    ],
    themeColor: "#B99A60",
    imageFit: "contain",
    imagePosition: "center center",
    hotspots: [
      {
        id: "sk-shiva",
        x: 32,
        y: 42,
        title: "Shiva in Royal Ease",
        description: "Seated in sukhasana with deer and battle-axe held in rear hands."
      },
      {
        id: "sk-uma",
        x: 68,
        y: 46,
        title: "Uma (Parvati)",
        description: "Holding a blue water lily with maternal poise and crown."
      }
    ]
  },

  // 7. MUGHAL JAHANGIR
  {
    id: "mughal-jahangir",
    title: "Jahangir Preferring a Sufi Shaikh to Kings",
    artistOrTradition: "Bichitr (Imperial Court Painter)",
    traditionId: "mughal",
    dateLabel: "c. 1615–1618 CE",
    startYear: 1615,
    endYear: 1618,
    period: "Mughal Empire",
    era: "Mughal Empire",
    artForm: "Miniature Painting",
    material: "Opaque watercolor, gold, and ink on paper",
    technique: "Miniature illumination with single-hair brushwork",
    origin: "Mughal Imperial Atelier, Agra",
    currentLocation: "Freer Gallery of Art (Smithsonian Institution)",
    summary: "An allegorical miniature painting depicting Emperor Jahangir preferring spiritual wisdom to earthly kings.",
    historicalContext: "Painted for the St. Petersburg Album during the reign of Emperor Jahangir, who was a great patron of the arts and curious about world philosophies.",
    visualAnalysis: "Blends Persian, Indian, and European influences (including King James I of England and European putti) to assert spiritual supremacy over temporal power.",
    culturalSignificance: "Highlights the cosmopolitan nature of the Mughal court and the high status of Sufi mysticism in royal ideology.",
    image: "assets/mughal/jahangir.jpg",
    imageAlt: "Mughal miniature by Bichitr showing Jahangir and a Sufi Shaikh",
    imageCredit: "Freer Gallery of Art, Smithsonian Institution",
    imageLicense: "Public Domain / Open Access",
    sources: [
      { title: "Smithsonian Freer Gallery of Art", url: "https://asia.si.edu/" },
      { title: "Metropolitan Museum of Art — Mughal Art", url: "https://www.metmuseum.org/" }
    ],
    themeColor: "#41476C",
    imageFit: "cover",
    imagePosition: "center 15%",
    hotspots: [
      {
        id: "mj-shaikh",
        x: 32,
        y: 42,
        title: "Sufi Shaikh",
        description: "Receiving a holy book in cloth-wrapped hands to avoid touching royal gold."
      },
      {
        id: "mj-kings",
        x: 20,
        y: 65,
        title: "European & Ottoman Monarchs",
        description: "Including King James I of England, placed below the spiritual master."
      }
    ]
  },

  // 8. MUGHAL TURKEY COCK
  {
    id: "mughal-zebra",
    title: "Turkey Cock",
    artistOrTradition: "Ustad Mansur (Imperial Atelier)",
    traditionId: "mughal",
    dateLabel: "c. 1612 CE",
    startYear: 1612,
    endYear: 1612,
    period: "Mughal Empire",
    era: "Mughal Empire",
    artForm: "Miniature Painting",
    material: "Opaque watercolor and gold on paper",
    technique: "Natural history observation and miniature painting",
    origin: "Mughal Imperial Atelier",
    currentLocation: "Victoria and Albert Museum / St. Petersburg Album",
    summary: "A precise natural history study of an exotic Turkey Cock by court master Ustad Mansur.",
    historicalContext: "Emperor Jahangir commissioned detailed studies of rare flora and fauna. Ustad Mansur earned the title 'Wonder of the Age' for his natural history studies.",
    visualAnalysis: "Demonstrates scientific precision and acute observation, rendering each feather's iridescence and the fleshy texture of the wattle.",
    culturalSignificance: "Combines Persian artistic refinement with early modern scientific inquiry, preceding European natural history painting by over a century.",
    image: "assets/mughal/zebra.jpg",
    imageAlt: "Turkey Cock natural history study by Ustad Mansur",
    imageCredit: "Victoria and Albert Museum / Wikimedia Commons",
    imageLicense: "Public Domain / CC0",
    sources: [
      { title: "Victoria and Albert Museum, London", url: "https://www.vam.ac.uk/" },
      { title: "Smithsonian Asian Art — Mughal Fauna", url: "https://asia.si.edu/" }
    ],
    themeColor: "#41476C",
    imageFit: "contain",
    imagePosition: "center center",
    hotspots: [
      {
        id: "mz-head",
        x: 35,
        y: 35,
        title: "Carnal Wattle & Beak",
        description: "Painted with micro-stippling to mimic skin texture and vivid coloration."
      },
      {
        id: "mz-feathers",
        x: 58,
        y: 55,
        title: "Individual Plumage Stroke",
        description: "Single-hair brushstrokes creating the visual effect of natural feather luster."
      }
    ]
  },

  // 9. MADHUBANI TREE OF LIFE
  {
    id: "madhubani-tree",
    title: "Tree of Life (Mithila Art)",
    artistOrTradition: "Mithila Women Painters",
    traditionId: "madhubani",
    dateLabel: "Continuous Tradition",
    startYear: 1800,
    period: "Traditional / Living Art Form",
    era: "Madhubani Art",
    artForm: "Folk & Living Art",
    material: "Natural dyes and pigments on handmade paper/cloth",
    technique: "Line drawing using twigs, nib-pens, and flat pigment filling",
    origin: "Mithila region (Madhubani), Bihar",
    currentLocation: "National Crafts Museum, New Delhi",
    summary: "A recurring Mithila motif representing growth, connection, fertility, and cosmic balance.",
    historicalContext: "Originating in Bihar, Madhubani art was traditionally painted by women on freshly plastered mud walls of huts for festivals and domestic rites.",
    visualAnalysis: "Characterized by dense double outline strokes, fine hatching (kachni), and the lively inclusion of peacocks and birds nestled in the canopy.",
    culturalSignificance: "Symbolizes the interconnectedness of all living beings, deeply grounded in the nature-centered philosophy of Mithila.",
    image: "assets/madhubani/tree-of-life.jpg",
    imageAlt: "Madhubani painting of the Tree of Life with birds",
    imageCredit: "Wikimedia Commons (CC BY-SA 4.0)",
    imageLicense: "CC BY-SA 4.0",
    sources: [
      { title: "National Crafts Museum, New Delhi", url: "https://nationalcraftsmuseum.nic.in/" },
      { title: "Ministry of Culture, Government of India", url: "https://indiaculture.gov.in/" }
    ],
    themeColor: "#A6533B",
    imageFit: "cover",
    imagePosition: "center center",
    hotspots: [
      {
        id: "mt-birds",
        x: 35,
        y: 42,
        title: "Peacocks & Parrots",
        description: "Symbols of romantic harmony, monsoon prosperity, and auspicious fertility."
      },
      {
        id: "mt-hatch",
        x: 65,
        y: 55,
        title: "Kachni Line Technique",
        description: "Parallel geometric hatching giving texture without modern shadows."
      }
    ]
  },

  // 10. MADHUBANI KOHBAR GHAR
  {
    id: "madhubani-kohbar",
    title: "Kohbar Ghar",
    artistOrTradition: "Mithila Women Painters",
    traditionId: "madhubani",
    dateLabel: "Continuous Tradition",
    startYear: 1850,
    period: "Traditional / Living Art Form",
    era: "Madhubani Art",
    artForm: "Folk & Living Art",
    material: "Natural dyes on paper/mud wall",
    technique: "Intricate ceremonial line drawing and flat color application",
    origin: "Mithila region, Bihar",
    currentLocation: "National Crafts Museum, New Delhi",
    summary: "A traditional bridal chamber painting created to sanctify and bless the wedding chamber.",
    historicalContext: "Drawn on the inner walls of the nuptial room (Kohbar Ghar) to invoke divine protection and blessings for the newlyweds.",
    visualAnalysis: "Filled with complex symbols including the lotus (female principle), bamboo (male principle), fish, turtles, and celestial witnesses (Sun and Moon).",
    culturalSignificance: "A profound expression of women's ritual authority and cultural transmission of sacred art in rural Mithila.",
    image: "assets/madhubani/kohbar.jpg",
    imageAlt: "Ceremonial Kohbar nuptial painting from Madhubani",
    imageCredit: "Wikimedia Commons (CC BY-SA 4.0)",
    imageLicense: "CC BY-SA 4.0",
    sources: [
      { title: "National Crafts Museum, New Delhi", url: "https://nationalcraftsmuseum.nic.in/" },
      { title: "Indira Gandhi National Centre for the Arts", url: "http://ignca.gov.in/" }
    ],
    themeColor: "#A6533B",
    imageFit: "cover",
    imagePosition: "center center",
    hotspots: [
      {
        id: "kb-center",
        x: 50,
        y: 50,
        title: "Lotus & Bamboo Motif",
        description: "The cosmic union of life forces ensuring generational prosperity."
      }
    ]
  },

  // 11. WARLI TARPA DANCE
  {
    id: "warli-tarpa",
    title: "Tarpa Dance Scene",
    artistOrTradition: "Warli Tribal Community",
    traditionId: "warli",
    dateLabel: "Continuous Tradition",
    startYear: 1800,
    period: "Traditional / Living Art Form",
    era: "Warli Art",
    artForm: "Folk & Living Art",
    material: "Rice paste with water and gum on ochre mud surface",
    technique: "Geometric line painting using chewed bamboo sticks",
    origin: "Sahyadri range, Maharashtra",
    currentLocation: "Tribal Research Institute, Pune",
    summary: "A rhythmic depiction of community dancing in an outward-spiraling circle around a central musician.",
    historicalContext: "Created by the indigenous Warli community in Maharashtra, traditionally painted by women during social and agricultural harvest festivals.",
    visualAnalysis: "Constructed using simple geometric shapes (circle, triangle, line). The spiral formation represents the unbroken circle of life.",
    culturalSignificance: "Captures the essence of tribal solidarity, where art is an integral part of communal and agrarian life rather than isolated exhibition.",
    image: "assets/warli/tarpa.jpg",
    imageAlt: "Warli circular Tarpa dance painting",
    imageCredit: "Wikimedia Commons (CC BY-SA 4.0)",
    imageLicense: "CC BY-SA 4.0",
    sources: [
      { title: "Ministry of Tribal Affairs, India", url: "https://tribal.nic.in/" },
      { title: "National Crafts Museum, New Delhi", url: "https://nationalcraftsmuseum.nic.in/" }
    ],
    themeColor: "#858174",
    imageFit: "contain",
    imagePosition: "center center",
    hotspots: [
      {
        id: "wt-center",
        x: 50,
        y: 50,
        title: "Tarpa Musician",
        description: "Musician playing the wind instrument made from dried gourd and bamboo."
      },
      {
        id: "wt-circle",
        x: 65,
        y: 35,
        title: "Endless Spiral",
        description: "Dancers linked hand-in-hand following the cyclical rhythm of nature."
      }
    ]
  },

  // 12. WARLI VILLAGE WEDDING
  {
    id: "warli-wedding",
    title: "Village Wedding (Lagna Chauk)",
    artistOrTradition: "Warli Married Women (Suhasinis)",
    traditionId: "warli",
    dateLabel: "Continuous Tradition",
    startYear: 1850,
    period: "Traditional / Living Art Form",
    era: "Warli Art",
    artForm: "Folk & Living Art",
    material: "Rice paste on mud ground/canvas",
    technique: "Geometric line drawing and ritual chauk framing",
    origin: "Thane & Palghar, Maharashtra",
    currentLocation: "National Crafts Museum, New Delhi",
    summary: "A sacred ceremonial painting centered around Palaghata, the goddess of fertility and abundance.",
    historicalContext: "Created specifically during Warli weddings. Unlike everyday decorative scenes, the sacred square chauk is strictly ritualistic.",
    visualAnalysis: "The square enclosure represents the consecrated domain of the goddess, surrounded by wedding processions, drummers, and animals.",
    culturalSignificance: "An indispensable sacred component of the Warli marriage rite, blessing the bride and groom with fertility and harvest.",
    image: "assets/warli/wedding.jpg",
    imageAlt: "Warli marriage chauk and village celebration",
    imageCredit: "Wikimedia Commons (CC BY-SA 4.0)",
    imageLicense: "CC BY-SA 4.0",
    sources: [
      { title: "Ministry of Tribal Affairs, India", url: "https://tribal.nic.in/" },
      { title: "Crafts Museum, New Delhi", url: "https://nationalcraftsmuseum.nic.in/" }
    ],
    themeColor: "#858174",
    imageFit: "contain",
    imagePosition: "center center",
    hotspots: [
      {
        id: "ww-goddess",
        x: 50,
        y: 45,
        title: "Palaghata Enclosure",
        description: "The fertility goddess enclosed within a geometric protective border."
      }
    ]
  }
];

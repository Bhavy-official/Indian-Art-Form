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
  modelType?: 'dancing-girl' | 'nataraja' | 'stupa';
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
  description: string;
  themeColor: string;
  bgTextureClass: string;
  visualAtmosphere: string;
}

export const HISTORICAL_ERAS: HistoricalEra[] = [
  {
    id: 'indus-valley',
    title: 'The Earliest Traces',
    subtitle: 'Bronze, Terracotta & Urban Form in the Indus Valley',
    dateRange: 'c. 3300 – 1300 BCE',
    description: 'One of the world\'s earliest cradle civilizations, marked by sophisticated brick cities, refined bronze metallurgy, and cryptic script engraved on steatite seals.',
    themeColor: '#A6533B', // Terracotta
    bgTextureClass: 'era-terracotta',
    visualAtmosphere: 'Warm terracotta dust, kiln-fired clay, and the earliest whisper of human rhythm.'
  },
  {
    id: 'mauryan-buddhist',
    title: 'Stone and Empire',
    subtitle: 'Monumental Pillars, Stupas & The Imperial Dhamma',
    dateRange: 'c. 3rd – 1st Century BCE',
    description: 'The Mauryan and Shunga ages ushered in monumental stone carving with extraordinary mirror polish, establishing sacred Buddhist architecture across the subcontinent.',
    themeColor: '#858174', // Muted stone & sandstone
    bgTextureClass: 'era-stone',
    visualAtmosphere: 'Monolithic polished Chunar sandstone, carved rock sanctuaries, and cosmic wheels.'
  },
  {
    id: 'ajanta',
    title: 'Painted Sacred Worlds',
    subtitle: 'Cave Sanctuaries of Compassion & Mineral Murals',
    dateRange: 'c. 2nd Century BCE – 5th Century CE',
    description: 'Hewn into basalt cliffs in Maharashtra, Ajanta\'s fresco-secco murals represent the sublime peak of ancient Indian painting, suffused with Buddhist spiritual compassion.',
    themeColor: '#637C6B', // Verdigris / Earth minerals
    bgTextureClass: 'era-mineral',
    visualAtmosphere: 'Lapis lazuli, yellow ochre, lampblack, and divine celestial grace on rock walls.'
  },
  {
    id: 'chola',
    title: 'Bronze in Motion',
    subtitle: 'Lost-Wax Castings & Sacred Dynastic Radiance',
    dateRange: 'c. 9th – 13th Century CE',
    description: 'Under the imperial Cholas of South India, master sthapathis perfected lost-wax bronze casting, creating celestial icons of unprecedented dynamic equilibrium and cosmic symbolism.',
    themeColor: '#B99A60', // Aged brass
    bgTextureClass: 'era-bronze',
    visualAtmosphere: 'Dark granite sanctums illuminated by flicker lamps, aged bronze patina, and rhythmic cosmic dance.'
  },
  {
    id: 'mughal',
    title: 'Manuscripts and Courts',
    subtitle: 'Imperial Atelier, Lapis, Gold & Naturalist Precision',
    dateRange: '16th – 19th Century CE',
    description: 'The Mughal royal ateliers synthesized Persian refinement, Central Asian motifs, and indigenous Indian expressive intensity into masterworks of political allegory and scientific flora-fauna studies.',
    themeColor: '#41476C', // Royal Indigo
    bgTextureClass: 'era-indigo',
    visualAtmosphere: 'Burnished wasli paper, crushed lapis lazuli, real gold leaf leafing, and delicate squirrel-hair brushwork.'
  },
  {
    id: 'folk-living',
    title: 'The Living Present',
    subtitle: 'Ritual Wall Murals, Sacred Geometry & Indigenous Memory',
    dateRange: 'Continuous Living Tradition',
    description: 'Deeply rooted traditions practiced over generations across rural and tribal communities. Madhubani women bless nuptial chambers with sacred iconography, while Warli circles celebrate the harvest and cosmic cycles.',
    themeColor: '#A6533B', // Terracotta & Rice paste
    bgTextureClass: 'era-folk',
    visualAtmosphere: 'Cow dung plaster, rice flour paste on ochre, and unbroken communal remembrance.'
  }
];

export const ARTIFACTS_DATA: Artifact[] = [
  // 1. INDUS DANCING GIRL
  {
    id: "indus-dancing-girl",
    title: "The Dancing Girl",
    artistOrTradition: "Harappan Master Metallurgist",
    traditionId: "indus-valley",
    dateLabel: "c. 2300–1750 BCE",
    startYear: -2300,
    endYear: -1750,
    period: "Mature Harappan Civilization",
    era: "The Earliest Traces",
    artForm: "Sculpture",
    material: "Bronze (Copper-Tin Alloy)",
    technique: "Lost-wax casting (cire perdue)",
    origin: "HR Area, Mohenjo-daro (Indus Valley, present-day Sindh, Pakistan)",
    currentLocation: "National Museum, New Delhi (Gallery of Harappan Art)",
    summary: "A prehistoric bronze sculpture of a young woman standing with confident poise, hand on hip, adorned with bangles.",
    historicalContext: "Discovered in 1926 by archaeologist Ernest J. H. Mackay in Mohenjo-daro. Despite standing just 10.5 cm tall, it revolutionized the understanding of ancient metallurgy, proving that bronze casting with intricate anatomical liveliness was mastered over 4,500 years ago.",
    visualAnalysis: "The figure exhibits a naturalistic contrapposto-like stance: right arm on hip, left hand resting on her upper thigh. Her hair is intricately gathered in a heavy coiled bun, resting gracefully above her right shoulder. Slender limbs and elongated fingers evoke vitality rather than rigid monumentality.",
    culturalSignificance: "Rather than an enslaved figure or passive idol, her upright carriage and gaze indicate autonomy and status. Her left arm is enveloped almost completely in bone or shell bangles, a visual tradition still echoed among women in pastoral communities of Rajasthan and Sindh today.",
    image: "assets/indus/dancing-girl.jpg",
    imageAlt: "Bronze statuette of the Dancing Girl of Mohenjo-daro",
    imageCredit: "National Museum, New Delhi / Archaeological Survey of India",
    imageLicense: "Public Domain / Educational fair use",
    sources: [
      { title: "National Museum, New Delhi — Indus Valley Civilization", url: "https://nationalmuseumindia.gov.in/" },
      { title: "Archaeological Survey of India Archives", url: "https://asi.nic.in/" }
    ],
    modelType: "dancing-girl",
    themeColor: "#A6533B",
    imageFit: "contain",
    imagePosition: "center 15%",
    hotspots: [
      {
        id: "dg-arm-bangles",
        x: 62,
        y: 48,
        title: "Arm Stacked with Bangles",
        description: "Her left arm carries an unbroken stack of 24 to 25 bangles, believed to be crafted from shell, terracotta, or bone—an ornament tradition persisting in western India today."
      },
      {
        id: "dg-posture",
        x: 42,
        y: 42,
        title: "Confident Hand-on-Hip Stance",
        description: "The right hand resting at the hip with bent elbow communicates self-assurance and theatrical presence rarely seen in contemporary third-millennium BCE art."
      },
      {
        id: "dg-coiffure",
        x: 52,
        y: 18,
        title: "Elaborate Hair Bun",
        description: "A meticulously styled chignon bun swept across the right shoulder indicates sophisticated grooming rituals and personal ornamentation in Harappan urban society."
      }
    ]
  },

  // 2. INDUS PASHUPATI SEAL
  {
    id: "indus-pashupati",
    title: "Pashupati Seal (Proto-Shiva)",
    artistOrTradition: "Harappan Stone Engraver",
    traditionId: "indus-valley",
    dateLabel: "c. 2300–1750 BCE",
    startYear: -2300,
    endYear: -1750,
    period: "Mature Harappan Civilization",
    era: "The Earliest Traces",
    artForm: "Sculpture",
    material: "Steatite (Soapstone)",
    technique: "Intaglio carving and low-relief engraving, followed by kiln heating",
    origin: "Mohenjo-daro, Indus Valley",
    currentLocation: "National Museum, New Delhi",
    summary: "A carved steatite seal depicting a horned, three-faced yogic figure encircled by wild beasts.",
    historicalContext: "Excavated in the 1920s during Sir John Marshall's landmark excavations. Small steatite seals served both as commercial emblems for trade parcels and as ritual amulets signifying authority across the vast trade routes spanning from Mesopotamia to Gujarat.",
    visualAnalysis: "The seated figure is depicted in a seated yogic asana with heels pressed together. He wears a horned headdress surmounted by a tall fan-shaped crest. Surrounding him are four powerful beasts: an elephant, a tiger, a rhinoceros, and a water buffalo, with two antelopes beneath the dais.",
    culturalSignificance: "Widely interpreted by art historians as an archetype of Pashupati ('Lord of Animals'), an early antecedence of Shiva Mahayogi. It is crucial evidence of early introspective meditation practices in the Indian subcontinent.",
    image: "assets/indus/pashupati-seal.jpg",
    imageAlt: "Steatite Pashupati Seal found at Mohenjo-daro showing horned figure surrounded by animals",
    imageCredit: "National Museum, New Delhi / Archaeological Survey of India",
    imageLicense: "Public Domain / Educational fair use",
    sources: [
      { title: "National Museum, New Delhi — Seal Collections", url: "https://nationalmuseumindia.gov.in/" },
      { title: "Harappa.com Archaeological Archive", url: "https://www.harappa.com/" }
    ],
    themeColor: "#858174",
    imageFit: "contain",
    imagePosition: "center center",
    hotspots: [
      {
        id: "ps-horns",
        x: 50,
        y: 28,
        title: "Bovine Horned Headdress",
        description: "The magnificent pair of spreading horns symbolizes divine authority and fertility, flanking a ceremonial floral or tree motif."
      },
      {
        id: "ps-animals",
        x: 78,
        y: 42,
        title: "Surrounding Fauna",
        description: "A tiger, elephant, rhinoceros, and buffalo are carved with remarkable zoological accuracy, paying homage to the master seated at the cosmological center."
      },
      {
        id: "ps-script",
        x: 50,
        y: 12,
        title: "Undeciphered Indus Script",
        description: "A row of seven pictographic Indus glyphs runs along the upper border, representing one of antiquity's greatest remaining linguistic mysteries."
      }
    ]
  },

  // 3. LION CAPITAL OF ASHOKA (Mauryan)
  {
    id: "mauryan-lion-capital",
    title: "Lion Capital of Ashoka",
    artistOrTradition: "Mauryan Imperial Workshop",
    traditionId: "mauryan-buddhist",
    dateLabel: "c. 250 BCE",
    startYear: -250,
    endYear: -232,
    period: "Mauryan Empire",
    era: "Stone and Empire",
    artForm: "Sculpture",
    material: "Chunar Sandstone with Mirror Polish",
    technique: "Monolithic stone carving and high 'Mauryan glaze' polishing",
    origin: "Sarnath, Uttar Pradesh (Site of the Buddha's First Sermon)",
    currentLocation: "Sarnath Archaeological Museum, Uttar Pradesh",
    summary: "The celebrated four-lion capital that crowned the Ashoka Pillar at the Deer Park in Sarnath, adopted as the National Emblem of India.",
    historicalContext: "Commissioned by Emperor Ashoka the Great following his embrace of Buddhism after the Kalinga War. Placed at Sarnath, where the Buddha first turned the Wheel of the Law (Dharmachakra Pravartana), the pillar communicated imperial edicts of non-violence, righteousness, and universal welfare.",
    visualAnalysis: "Four Asiatic lions stand back-to-back atop an abacus adorned with high-relief sculptures of an elephant, a galloping horse, a bull, and a lion, separated by four 24-spoke Dharmachakra wheels, resting on an inverted lotus bell.",
    culturalSignificance: "An unparalleled triumph of Indian monumental sculpture. Its mirror-like sheen remains smooth after 2,300 years. On 26 January 1950, it became the official National Emblem of the Republic of India, symbolizing courage, wisdom, and moral law.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Sarnath_Lion_Capital_of_Ashoka.jpg/800px-Sarnath_Lion_Capital_of_Ashoka.jpg",
    imageAlt: "The Mauryan Lion Capital at Sarnath Archaeological Museum",
    imageCredit: "Archaeological Survey of India / Wikimedia Commons",
    imageLicense: "CC BY-SA 4.0",
    sources: [
      { title: "Archaeological Survey of India — Sarnath Site", url: "https://asi.nic.in/" },
      { title: "National Portal of India — State Emblem", url: "https://www.india.gov.in/my-india/india-at-a-glance/national-emblems" }
    ],
    themeColor: "#858174",
    imageFit: "contain",
    imagePosition: "center center",
    hotspots: [
      {
        id: "lc-lions",
        x: 50,
        y: 22,
        title: "Four Addorsed Lions",
        description: "Roaring in the four cardinal directions, the four lions proclaim the universal moral teachings (Dhamma) across the known world."
      },
      {
        id: "lc-chakra",
        x: 50,
        y: 65,
        title: "Ashoka Chakra (Wheel of Law)",
        description: "The 24-spoke wheel represents cosmic order and eternal progression. It sits at the very center of India's national flag today."
      },
      {
        id: "lc-lotus",
        x: 50,
        y: 85,
        title: "Inverted Bell-Shaped Lotus",
        description: "The sacred lotus base reflects the purity and spiritual awakening arising out of the mundane mud of worldly existence."
      }
    ]
  },

  // 4. GREAT STUPA AT SANCHI
  {
    id: "sanchi-great-stupa",
    title: "The Great Stupa at Sanchi (Stupa No. 1)",
    artistOrTradition: "Buddhist Guilds of Ivory Carvers & Stone Masons",
    traditionId: "mauryan-buddhist",
    dateLabel: "c. 3rd Century BCE – 1st Century CE",
    startYear: -300,
    endYear: 100,
    period: "Mauryan to Satavahana Period",
    era: "Stone and Empire",
    artForm: "Architecture",
    material: "Sandstone Masonry, Balustrades & Torana Gateways",
    technique: "Ashlar stone masonry, narrative bas-relief carving",
    origin: "Sanchi, Raisen District, Madhya Pradesh",
    currentLocation: "Sanchi UNESCO World Heritage Site, Madhya Pradesh",
    summary: "The oldest existing stone structure in India, crowned by four elaborately carved monumental torana gateways depicting Jataka tales.",
    historicalContext: "Originally commissioned by Emperor Ashoka in the 3rd century BCE as a brick mound enshrining relics of the Buddha, it was subsequently enlarged with sandstone casing and exquisite stone toranas under the Shungas and Satavahanas.",
    visualAnalysis: "The hemispherical dome (anda) represents the vault of heaven enclosing the sacred relics. A square railing (harmika) crowns the summit, holding a triple umbrella (chhatravali). Four monumental gateways face the cardinal directions, carved with an astonishing abundance of narrative scenes, yakshis, and floral scrolls.",
    culturalSignificance: "A masterpiece of early Buddhist art. Its gateways were carved by guilds of ivory workers from nearby Vidisha, translating the delicate precision of ivory craft into enduring living stone.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Sanchi_Stupa_Northern_Gateway.jpg/800px-Sanchi_Stupa_Northern_Gateway.jpg",
    imageAlt: "Northern Torana Gateway of the Great Stupa at Sanchi",
    imageCredit: "UNESCO World Heritage Centre / Wikimedia Commons",
    imageLicense: "CC BY-SA 4.0",
    sources: [
      { title: "UNESCO World Heritage List — Buddhist Monuments at Sanchi", url: "https://whc.unesco.org/en/list/524/" },
      { title: "Archaeological Survey of India — Sanchi Circle", url: "https://asi.nic.in/" }
    ],
    modelType: "stupa",
    themeColor: "#858174",
    imageFit: "contain",
    imagePosition: "center center",
    hotspots: [
      {
        id: "st-torana",
        x: 50,
        y: 35,
        title: "Monumental Torana Gateway",
        description: "Three gently arched architraves supported by monumental pillars, carved on every surface with Buddhist Jataka tales and guardian lions."
      },
      {
        id: "st-yakshi",
        x: 80,
        y: 48,
        title: "Salabhanjika (Tree Nymph)",
        description: "The sensuous tree-goddess bracket figure grasping a blossoming tree branch embodies fertility, nature spirits, and auspicious joy."
      }
    ]
  },

  // 5. AJANTA PADMAPANI
  {
    id: "ajanta-padmapani",
    title: "Bodhisattva Padmapani",
    artistOrTradition: "Vakataka Master Guild Painters",
    traditionId: "ajanta",
    dateLabel: "c. 5th Century CE",
    startYear: 450,
    endYear: 500,
    period: "Vakataka Dynasty / Golden Age",
    era: "Painted Sacred Worlds",
    artForm: "Painting",
    material: "Natural mineral pigments on mud plaster over basalt rock",
    technique: "Fresco-secco (painting on dry lime-clay plaster layer)",
    origin: "Cave 1, Ajanta Caves, Aurangabad District, Maharashtra",
    currentLocation: "Ajanta Caves (UNESCO World Heritage Site No. 242)",
    summary: "The world-renowned cave mural depicting the Bodhisattva of Infinite Compassion holding a blue lotus blossom.",
    historicalContext: "Painted during the reign of Harisena of the Vakataka dynasty. Cave 1 was an imperial royal monastery, designed so that natural light from the entrance softly illuminated the face of the Bodhisattva as devotees walked into the sanctum.",
    visualAnalysis: "The figure bends in a gentle tribhanga (triple-flexion) posture, holding a blue lotus (utpala) in his right hand. His downcast, half-closed eyes emanate profound contemplative mercy. Delicate pearl necklaces, a jewelled coronet, and sheer drapery flow seamlessly over his luminous golden torso.",
    culturalSignificance: "Considered the pinnacle of Asian classical mural painting. It inspired subsequent Buddhist art from Sigiriya in Sri Lanka across Central Asian Silk Road caves to Dunhuang and Horyu-ji in Japan.",
    image: "assets/ajanta/padmapani.jpg",
    imageAlt: "Fresco of Bodhisattva Padmapani holding a blue lotus in Cave 1 at Ajanta",
    imageCredit: "Archaeological Survey of India / UNESCO",
    imageLicense: "Public Domain / Educational fair use",
    sources: [
      { title: "UNESCO World Heritage List — Ajanta Caves", url: "https://whc.unesco.org/en/list/242/" },
      { title: "Archaeological Survey of India — Ajanta Murals", url: "https://asi.nic.in/" }
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
        description: "Held tenderly between fingertips, the lotus signifies purity rising unblemished from the muddy waters of earthly existence."
      },
      {
        id: "pp-gaze",
        x: 48,
        y: 35,
        title: "Contemplative Downcast Gaze",
        description: "The elongated eyes look inward in meditation while compassionately beholding the suffering of all sentient beings."
      },
      {
        id: "pp-crown",
        x: 48,
        y: 18,
        title: "Imperial Jeweled Coronet",
        description: "Meticulously rendered with pearls, cabochon rubies, and gold filigree, illustrating the royal patronage and luxury aesthetic of the Vakataka court."
      }
    ]
  },

  // 6. AJANTA INDRA WITH APSARAS
  {
    id: "ajanta-apsara",
    title: "Indra with Apsaras (Celestial Beings)",
    artistOrTradition: "Ajanta Royal Guild",
    traditionId: "ajanta",
    dateLabel: "c. 5th Century CE",
    startYear: 450,
    endYear: 480,
    period: "Vakataka Dynasty",
    era: "Painted Sacred Worlds",
    artForm: "Painting",
    material: "Fresco-secco (natural mineral pigments on dry plaster)",
    technique: "Fresco-secco with mineral washes and calligraphic linework",
    origin: "Cave 17, Ajanta Caves, Maharashtra",
    currentLocation: "Ajanta Caves (Cave 17)",
    summary: "A luminous celestial mural depicting the Vedic god Indra descending through clouds accompanied by flying apsaras and celestial musicians.",
    historicalContext: "Cave 17 was commissioned by an aristocratic feudatory named Varahadeva and contains the most complete and best-preserved narrative murals at Ajanta, celebrating both earthly courtly pageantry and spiritual transcendence.",
    visualAnalysis: "Figures seem to float through the dark space with weightless rhythm. Translucent scarves drift behind the dancers, while their dark skin tones are offset by luminous white pearls, garlands of fresh blossoms, and delicate headgear.",
    culturalSignificance: "Exemplifies the Ajanta artists' mastery of kinetic grace and aerial perspective, merging divine transcendence with celebration of the human form.",
    image: "assets/ajanta/apsara.jpg",
    imageAlt: "Celestial mural of Indra and floating apsaras in Cave 17 of Ajanta",
    imageCredit: "Archaeological Survey of India / UNESCO",
    imageLicense: "Public Domain / Educational fair use",
    sources: [
      { title: "UNESCO World Heritage List — Ajanta", url: "https://whc.unesco.org/en/list/242/" },
      { title: "National Museum Institute of Art History", url: "https://nationalmuseumindia.gov.in/" }
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
        description: "The bodies curve diagonally across the composition, conveying airborne velocity without wings or heavy mechanical apparatus."
      },
      {
        id: "ap-jewelry",
        x: 45,
        y: 48,
        title: "Strands of Natural River Pearls",
        description: "Painted with quick dabs of lime white, the luminous pearl necklaces catch the eye as if illuminated by flickering oil lamps."
      }
    ]
  },

  // 7. CHOLA NATARAJA
  {
    id: "chola-nataraja",
    title: "Shiva Nataraja (Lord of the Cosmic Dance)",
    artistOrTradition: "Chola Sthapathi Master Sculptor",
    traditionId: "chola",
    dateLabel: "c. 11th Century CE",
    startYear: 1000,
    endYear: 1100,
    period: "Chola Dynasty (Golden Age of Bronzes)",
    era: "Bronze in Motion",
    artForm: "Sculpture",
    material: "Panchaloha (Five-Metal Sacred Bronze Alloy)",
    technique: "Lost-wax solid casting (Madhuchehishtavidhana)",
    origin: "Thanjavur or Chidambaram region, Tamil Nadu",
    currentLocation: "National Museum, New Delhi / LACMA (Los Angeles County Museum of Art)",
    summary: "The quintessential icon of South Indian sacred bronze sculpture: Shiva performing the Ananda Tandava within a flaming ring of fire.",
    historicalContext: "Under the devout patronage of Chola monarchs—most notably Queen Sembiyan Mahadevi and Emperor Rajaraja I—sacred mobile bronze sculptures (utsava murtis) were commissioned for magnificent temple processions.",
    visualAnalysis: "Framed within an arch of cosmic fire (prabhamandala), Shiva dances upon Apasmara, the dwarf demon of ignorance. His upper right hand holds the damaru drum (creation), upper left holds agni fire (dissolution), lower right grants abhaya mudra (protection), and lower left points gracefully to his lifted foot (salvation).",
    culturalSignificance: "Celebrated worldwide by physicists, philosophers, and art historians (from Auguste Rodin to Carl Sagan) as the most poetically profound visual metaphor for the dynamic cycles of the cosmos ever conceived by human art.",
    image: "assets/chola/nataraja.jpg",
    imageAlt: "Chola bronze sculpture of Shiva Nataraja dancing within a circle of flame",
    imageCredit: "Los Angeles County Museum of Art (LACMA) / National Museum, New Delhi",
    imageLicense: "Public Domain / CC0 Open Access",
    sources: [
      { title: "LACMA Collections — South & Southeast Asian Art", url: "https://www.lacma.org/" },
      { title: "National Museum, New Delhi — Chola Bronzes", url: "https://nationalmuseumindia.gov.in/" }
    ],
    modelType: "nataraja",
    themeColor: "#B99A60",
    imageFit: "contain",
    imagePosition: "center center",
    hotspots: [
      {
        id: "nt-damaru",
        x: 28,
        y: 28,
        title: "Damaru Drum of Creation",
        description: "The hourglass-shaped drum produces the primordial sound (Nada) from which space, time, and the universe unfold."
      },
      {
        id: "nt-fire",
        x: 72,
        y: 28,
        title: "Agni — Flame of Transformation",
        description: "The fire cradled in the palm of his upper left hand consumes the old universe at the close of every cosmic cosmic cycle."
      },
      {
        id: "nt-abhaya",
        x: 44,
        y: 42,
        title: "Abhaya Mudra (Fear-Dispelling Gesture)",
        description: "Reassures devotees: 'Fear not, for the cosmic dancer watches over you.'"
      },
      {
        id: "nt-apasmara",
        x: 52,
        y: 84,
        title: "Apasmara Demon of Ignorance",
        description: "The illusion of spiritual ignorance is trampled underfoot, releasing humankind into enlightenment."
      }
    ]
  },

  // 8. CHOLA SOMASKANDA
  {
    id: "chola-somaskanda",
    title: "Somaskanda (Shiva, Uma, and Skanda)",
    artistOrTradition: "Chola Imperial Atelier",
    traditionId: "chola",
    dateLabel: "c. 11th Century CE",
    startYear: 1000,
    endYear: 1050,
    period: "Chola Dynasty",
    era: "Bronze in Motion",
    artForm: "Sculpture",
    material: "Cast Bronze",
    technique: "Lost-wax solid casting and chased surface ornamentation",
    origin: "Tamil Nadu, South India",
    currentLocation: "National Museum, New Delhi",
    summary: "An intimate and regal bronze icon showing Shiva seated alongside consort Uma (Parvati) with the child Skanda dancing between them.",
    historicalContext: "Originally popularized by the Pallavas and elevated to lyrical perfection by the Cholas, the Somaskanda icon was the premier utsava-murti placed in temple sanctums and paraded on chariot festivals.",
    visualAnalysis: "Shiva sits majestically in sukhasana, crowned by an intricate jatamukuta, while Uma sits with quiet maternal grace. Between them, child Skanda dances playfully, synthesizing cosmic transcendence with tender family affection.",
    culturalSignificance: "Represents the sanctification of familial harmony in Hindu theology, bridging ascetic renunciation with domestic love and dynastic continuity.",
    image: "assets/chola/somaskanda.jpg",
    imageAlt: "Chola bronze group depicting Shiva, Uma, and the child Skanda",
    imageCredit: "National Museum, New Delhi",
    imageLicense: "Public Domain / Educational fair use",
    sources: [
      { title: "National Museum, New Delhi — Bronze Gallery", url: "https://nationalmuseumindia.gov.in/" },
      { title: "Archaeological Survey of India — Chola Temple Archives", url: "https://asi.nic.in/" }
    ],
    themeColor: "#B99A60",
    imageFit: "contain",
    imagePosition: "center center",
    hotspots: [
      {
        id: "sk-shiva",
        x: 32,
        y: 42,
        title: "Shiva in Sukhasana",
        description: "Seated in sovereign ease with axe (parashu) and deer (mriga) held gracefully in rear hands."
      },
      {
        id: "sk-uma",
        x: 68,
        y: 46,
        title: "Uma (Parvati)",
        description: "Adorned with the karandamukuta crown and holding a nilotpala flower, expressing serene companionate grace."
      },
      {
        id: "sk-child",
        x: 50,
        y: 56,
        title: "The Child Skanda",
        description: "The youthful god of valor and wisdom dances playfully, uniting the masculine and feminine divine principles."
      }
    ]
  },

  // 9. SHORE TEMPLE AT MAHABALIPURAM (Pallava)
  {
    id: "shore-temple-mahabalipuram",
    title: "The Shore Temple at Mahabalipuram",
    artistOrTradition: "Pallava Royal Sculptors & Masons",
    traditionId: "chola",
    dateLabel: "c. 700–728 CE",
    startYear: 700,
    endYear: 728,
    period: "Pallava Dynasty (Narasimhavarman II)",
    era: "Stone and Empire",
    artForm: "Architecture",
    material: "Carved Granitic Gneiss Blocks",
    technique: "Dressed stone masonry with bas-relief perimeter walls",
    origin: "Mamallapuram (Mahabalipuram), Coromandel Coast, Tamil Nadu",
    currentLocation: "Group of Monuments at Mahabalipuram (UNESCO Site No. 249)",
    summary: "One of the earliest structural stone temples of Southern India, standing dramatically on the edge of the Bay of Bengal.",
    historicalContext: "Built under King Rajasimha (Narasimhavarman II), this seaside complex served as both a spiritual sanctuary and a beacon for maritime merchants sailing between South India and Southeast Asia along the Spice Route.",
    visualAnalysis: "Features two pyramidal vimanas rising over granite shrines, enclosed by a perimeter wall lined with monolithic Nandi bull sculptures weathered by centuries of salt winds.",
    culturalSignificance: "Marks the historic transition from rock-cut cave sanctuaries to free-standing monumental structural masonry in South Indian Dravidian architecture.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Shore_Temple_at_Mamallapuram.jpg/800px-Shore_Temple_at_Mamallapuram.jpg",
    imageAlt: "The Shore Temple overlooking the sea at Mahabalipuram",
    imageCredit: "UNESCO World Heritage Centre / Wikimedia Commons",
    imageLicense: "CC BY-SA 4.0",
    sources: [
      { title: "UNESCO World Heritage — Mahabalipuram Monuments", url: "https://whc.unesco.org/en/list/249/" },
      { title: "Archaeological Survey of India — Chennai Circle", url: "https://asi.nic.in/" }
    ],
    themeColor: "#858174",
    imageFit: "contain",
    imagePosition: "center center",
    hotspots: [
      {
        id: "st-vimana",
        x: 48,
        y: 35,
        title: "Pyramidal Dravidian Vimana",
        description: "Multi-tiered tower tapering to an octagonal shikhara dome, crowned by a finial kalasha."
      },
      {
        id: "st-nandi",
        x: 75,
        y: 75,
        title: "Row of Recumbent Nandi Bulls",
        description: "Scores of carved granitic Nandis line the courtyard enclosure, standing vigil facing the breaking sea surf."
      }
    ]
  },

  // 10. MUGHAL JAHANGIR SUFI SHAIKH
  {
    id: "mughal-jahangir",
    title: "Jahangir Preferring a Sufi Shaikh to Kings",
    artistOrTradition: "Bichitr (Imperial Court Painter)",
    traditionId: "mughal",
    dateLabel: "c. 1615–1618 CE",
    startYear: 1615,
    endYear: 1618,
    period: "Mughal Empire (Reign of Jahangir)",
    era: "Manuscripts and Courts",
    artForm: "Miniature Painting",
    material: "Opaque watercolor, gold leaf, and ink on burnished paper",
    technique: "Miniature illumination with single-hair brush detailing",
    origin: "Agra or Lahore, Mughal Royal Atelier",
    currentLocation: "Freer Gallery of Art, Smithsonian Institution, Washington D.C.",
    summary: "A dazzling allegorical miniature where Emperor Jahangir hands a holy book to a humble Sufi mystic while ignoring the Ottoman Sultan, King James I of England, and the artist Bichitr himself.",
    historicalContext: "Created for the famed St. Petersburg Album. Jahangir ('World Seizer') was deeply fascinated by mysticism and global diplomacy, having British ambassador Sir Thomas Roe at his court.",
    visualAnalysis: "The emperor sits upon an hourglass throne inscribed with Persian verses pleading that time may not run out. A radiant halo combining the sun and crescent moon surrounds his head. Putti (cherubs) borrowed from European prints weep above.",
    culturalSignificance: "A masterpiece of political philosophy and cross-cultural visual synthesis, declaring that spiritual wisdom outranks all earthly empires.",
    image: "assets/mughal/jahangir.jpg",
    imageAlt: "Mughal miniature by Bichitr depicting Emperor Jahangir with a Sufi shaikh and world kings",
    imageCredit: "Freer Gallery of Art, Smithsonian Institution (F1942.15a)",
    imageLicense: "Public Domain / Smithsonian Open Access",
    sources: [
      { title: "Smithsonian National Museum of Asian Art (Freer Gallery)", url: "https://asia.si.edu/" },
      { title: "Metropolitan Museum of Art — The Art of the Mughals", url: "https://www.metmuseum.org/" }
    ],
    themeColor: "#41476C",
    imageFit: "cover",
    imagePosition: "center 15%",
    hotspots: [
      {
        id: "mj-shaikh",
        x: 32,
        y: 42,
        title: "Shaikh Husain of the Chishti Shrine",
        description: "The revered venerable Sufi accepts a gift of a holy book with cloth-wrapped hands so as not to touch royal gold directly."
      },
      {
        id: "mj-james",
        x: 20,
        y: 65,
        title: "King James I of England",
        description: "Copied meticulously from an Elizabethan portrait miniature, standing beneath the Ottoman Sultan in the diplomatic hierarchy."
      },
      {
        id: "mj-bichitr",
        x: 25,
        y: 85,
        title: "Self-Portrait of Artist Bichitr",
        description: "The master Hindu painter depicts himself clad in yellow robes, humbly holding a painting of himself bowing before the Emperor."
      },
      {
        id: "mj-halo",
        x: 65,
        y: 25,
        title: "Solar-Lunar Imperial Nimbus",
        description: "The fused gold sun disc and silver crescent moon halo visually asserts Jahangir's divine mandate as master of day and night."
      }
    ]
  },

  // 11. MUGHAL TURKEY COCK BY USTAD MANSUR
  {
    id: "mughal-zebra",
    title: "Study of a Turkey Cock",
    artistOrTradition: "Ustad Mansur ('Wonder of the Age')",
    traditionId: "mughal",
    dateLabel: "c. 1612 CE",
    startYear: 1612,
    endYear: 1612,
    period: "Mughal Empire (Court of Jahangir)",
    era: "Manuscripts and Courts",
    artForm: "Miniature Painting",
    material: "Opaque watercolor and gold on wasli paper",
    technique: "Precise natural history observation and miniature portraiture",
    origin: "Mughal Imperial Atelier, Agra",
    currentLocation: "Victoria and Albert Museum, London / St. Petersburg Album",
    summary: "An extraordinary natural history study of an exotic North American turkey cock presented to Jahangir by his court nobleman.",
    historicalContext: "In 1612, nobleman Muqarrab Khan brought back an exotic turkey from the Portuguese port of Goa. Emperor Jahangir, fascinated by its novel plumage and behavior, ordered his supreme naturalist painter Ustad Mansur to document it.",
    visualAnalysis: "The bird's iridescent feathers, wrinkled red wattle, and alert black eye are painted with micro-stroke precision against a minimal pale parchment background surrounded by exquisite gold-illuminated floral margins.",
    culturalSignificance: "Ustad Mansur's animal paintings anticipate European scientific illustration (like Audubon) by over a century, exemplifying the inquisitive scientific spirit of the 17th-century Mughal Renaissance.",
    image: "assets/mughal/zebra.jpg",
    imageAlt: "Miniature painting of a Turkey Cock by Mughal court master Ustad Mansur",
    imageCredit: "Victoria and Albert Museum, London / Wikimedia Commons",
    imageLicense: "Public Domain / Open Access",
    sources: [
      { title: "Victoria and Albert Museum — Mughal Collections", url: "https://www.vam.ac.uk/" },
      { title: "Jahangirnama: Memoirs of Jahangir, Emperor of India", url: "https://asia.si.edu/" }
    ],
    themeColor: "#41476C",
    imageFit: "contain",
    imagePosition: "center center",
    hotspots: [
      {
        id: "mz-wattle",
        x: 35,
        y: 35,
        title: "Detailed Caruncles & Wattle",
        description: "Rendered with minute dabs of carmine and vermilion to capture the texture and color changes described in Jahangir's personal diaries."
      },
      {
        id: "mz-feathers",
        x: 58,
        y: 55,
        title: "Iridescent Feather Plumage",
        description: "Each feather is delineated with individual brushstrokes of ink and opaque gouache to mimic light reflecting off feathers."
      }
    ]
  },

  // 12. MADHUBANI TREE OF LIFE
  {
    id: "madhubani-tree",
    title: "Tree of Life (Mithila Art)",
    artistOrTradition: "Women Artists of Mithila",
    traditionId: "madhubani",
    dateLabel: "Continuous Living Tradition",
    startYear: 1800,
    period: "Mithila Living Tradition",
    era: "The Living Present",
    artForm: "Folk & Living Art",
    material: "Natural plant dyes and mineral pigments on handmade paper",
    technique: "Fine line drawing using bamboo twigs, nibs, and flat pigment filling",
    origin: "Mithila region (Madhubani), Bihar",
    currentLocation: "National Crafts Museum & Hastkala Academy, New Delhi",
    summary: "A sacred Mithila composition representing the cosmic tree connecting the subterranean roots, earthly trunk, and celestial canopy filled with birds.",
    historicalContext: "Madhubani painting was traditionally executed by women on the freshly plastered mud walls of village homes during weddings, births, and harvesting rites, passed down maternally across centuries.",
    visualAnalysis: "Dense with double outline strokes, hatched filler lines (kachni), and vibrant yellow, crimson, and green washes (bharni). Peacocks, parrots, and fishes nestle among leafy branches, leaving no surface void.",
    culturalSignificance: "Symbolizes harmony between humankind, fauna, and flora, representing nature not as a resource to exploit but as a living cosmic matrix.",
    image: "assets/madhubani/tree-of-life.jpg",
    imageAlt: "Vibrant Madhubani painting showing the Tree of Life with birds and animals",
    imageCredit: "Wikimedia Commons (CC BY-SA 4.0)",
    imageLicense: "CC BY-SA 4.0",
    sources: [
      { title: "National Crafts Museum, New Delhi", url: "https://nationalcraftsmuseum.nic.in/" },
      { title: "Ministry of Textiles, Government of India — Mithila Heritage", url: "https://texmin.nic.in/" }
    ],
    themeColor: "#A6533B",
    imageFit: "cover",
    imagePosition: "center center",
    hotspots: [
      {
        id: "mt-peacock",
        x: 35,
        y: 42,
        title: "Sacred Peacocks",
        description: "Peacocks in Madhubani art embody romantic devotion, beauty, and the joyous arrival of the monsoon showers."
      },
      {
        id: "mt-kachni",
        x: 65,
        y: 55,
        title: "Kachni Fine Hatching Technique",
        description: "Intricate parallel hatch marks done with fine nibs create optical rhythm without Western shaded chiaroscuro."
      }
    ]
  },

  // 13. MADHUBANI KOHBAR GHAR
  {
    id: "madhubani-kohbar",
    title: "Kohbar Ghar (Nuptial Chamber Mural)",
    artistOrTradition: "Mithila Women Painters",
    traditionId: "madhubani",
    dateLabel: "Continuous Living Tradition",
    startYear: 1850,
    period: "Mithila Living Tradition",
    era: "The Living Present",
    artForm: "Folk & Living Art",
    material: "Natural pigments (soot, turmeric, indigo, sindoor) on paper/wall",
    technique: "Ritual wall and paper painting with consecrated natural dyes",
    origin: "Madhubani district, Northern Bihar",
    currentLocation: "Mithila Museum, Tokamachi, Japan / Crafts Museum New Delhi",
    summary: "The most sacred and complex icon of Madhubani art, painted on the walls of the bridal room to ensure marital fertility, harmony, and cosmic protection.",
    historicalContext: "When newlyweds enter the Kohbar chamber, this painting greets them. Each symbol is chosen to evoke prosperity and fertility, blessed by women elders who sing ritual songs during its creation.",
    visualAnalysis: "Dominated by a monumental central lotus leaf stalk pierced by a bamboo stem (embodying female and male fertility principles). Surrounding it are motifs of the sun, moon, turtles, fishes, and nine planetary deities (Navagraha).",
    culturalSignificance: "A profound testimonial of women's agency and ritual authority in traditional Indian societies, transmitting philosophical cosmology across generations through domestic spaces.",
    image: "assets/madhubani/kohbar.jpg",
    imageAlt: "Intricate ceremonial Kohbar bridal chamber painting of Madhubani",
    imageCredit: "Wikimedia Commons (CC BY-SA 4.0)",
    imageLicense: "CC BY-SA 4.0",
    sources: [
      { title: "Indira Gandhi National Centre for the Arts (IGNCA)", url: "http://ignca.gov.in/" },
      { title: "National Crafts Museum, New Delhi", url: "https://nationalcraftsmuseum.nic.in/" }
    ],
    themeColor: "#A6533B",
    imageFit: "cover",
    imagePosition: "center center",
    hotspots: [
      {
        id: "kb-lotus",
        x: 50,
        y: 50,
        title: "Central Lotus & Bamboo Axis",
        description: "The intersection of the round lotus leaf and vertical bamboo shaft represents cosmic union and the continuation of life."
      },
      {
        id: "kb-celestial",
        x: 20,
        y: 20,
        title: "Sun and Moon Witnesses",
        description: "Surya and Chandra are invoked as eternal celestial witnesses to the marriage vows."
      }
    ]
  },

  // 14. WARLI TARPA DANCE
  {
    id: "warli-tarpa",
    title: "Tarpa Dance (Circle of Life)",
    artistOrTradition: "Warli Tribal Community",
    traditionId: "warli",
    dateLabel: "Continuous Living Tradition",
    startYear: 1800,
    period: "Indigenous Tribal Tradition",
    era: "The Living Present",
    artForm: "Folk & Living Art",
    material: "Rice flour paste mixed with water and binding gum on mud plaster",
    technique: "Geometric line painting using chewed bamboo twigs",
    origin: "Dahanu & Palghar regions, Sahyadri Mountains, Maharashtra",
    currentLocation: "Tribal Research & Training Institute, Pune / Crafts Museum Delhi",
    summary: "The iconic circular dance of the Warli community, where men and women spiral outwards hand-in-hand around a central horn player.",
    historicalContext: "The Warli people have inhabited the northern Sahyadri range since antiquity. Their art was brought to global prominence in the 1970s by visionary master artist Jivya Soma Mashe.",
    visualAnalysis: "Constructed strictly from basic geometric primitives: two inverted triangles touching at their apex represent the human torso; circles depict the head and the sun/moon. The spiral dance never closes, reflecting the infinite cyclical continuum of nature.",
    culturalSignificance: "Celebrates community solidarity and reverence for mother nature (Palaghat). In Warli philosophy, the human is not separate from the forest, but an ephemeral dancer in an eternal cosmic reel.",
    image: "assets/warli/tarpa.jpg",
    imageAlt: "Warli tribal painting depicting circular Tarpa dance around musician",
    imageCredit: "Wikimedia Commons (CC BY-SA 4.0)",
    imageLicense: "CC BY-SA 4.0",
    sources: [
      { title: "Ministry of Tribal Affairs, Government of India", url: "https://tribal.nic.in/" },
      { title: "Tribal Research and Training Institute, Maharashtra", url: "https://trti.maharashtra.gov.in/" }
    ],
    themeColor: "#858174",
    imageFit: "contain",
    imagePosition: "center center",
    hotspots: [
      {
        id: "wt-musician",
        x: 50,
        y: 50,
        title: "The Tarpa Musician",
        description: "Playing the trumpet-like wind instrument fashioned from dried bottle gourd and bamboo, setting the tempo for the community."
      },
      {
        id: "wt-dancers",
        x: 65,
        y: 35,
        title: "Interlocked Spiral of Dancers",
        description: "Dancers join hands without breaking ranks, their rhythmic steps echoing the movement of celestial constellations."
      }
    ]
  },

  // 15. WARLI VILLAGE WEDDING (Lagna Chauk)
  {
    id: "warli-wedding",
    title: "The Sacred Marriage Chauk (Palaghata)",
    artistOrTradition: "Suhasinis (Married Warli Women Priests/Painters)",
    traditionId: "warli",
    dateLabel: "Continuous Living Tradition",
    startYear: 1850,
    period: "Indigenous Tribal Tradition",
    era: "The Living Present",
    artForm: "Folk & Living Art",
    material: "White rice pigment on red geru (iron oxide) coated cow dung ground",
    technique: "Geometric ceremonial chauk painting",
    origin: "Maharashtra-Gujarat border villages",
    currentLocation: "National Crafts Museum, New Delhi",
    summary: "The sacred rectangular enclosure housing Palaghata, the goddess of fertility and abundance, surrounded by scenes of village wedding rites.",
    historicalContext: "Unlike everyday decorative Warli art, the Chauk is strictly ceremonial and can only be painted by married women known as suhasinis. A Warli wedding cannot sanctify without this consecrated painting on the bridal wall.",
    visualAnalysis: "A square ornamental frame filled with geometric chevron borders encloses the goddess. Around this sacred core, everyday life unfolds in kinetic joy: grooms on horseback, drummers with dholaks, women carrying water pots, and birds singing in the toddy palms.",
    culturalSignificance: "Demonstrates the seamless unity of sacred ritual and daily agrarian reality in Indian indigenous communities.",
    image: "assets/warli/wedding.jpg",
    imageAlt: "Warli wedding painting depicting the sacred square chauk and wedding procession",
    imageCredit: "Wikimedia Commons (CC BY-SA 4.0)",
    imageLicense: "CC BY-SA 4.0",
    sources: [
      { title: "Ministry of Tribal Affairs, Government of India", url: "https://tribal.nic.in/" },
      { title: "Indira Gandhi Rashtriya Manav Sangrahalaya (Museum of Mankind)", url: "https://www.igrms.gov.in/" }
    ],
    themeColor: "#858174",
    imageFit: "contain",
    imagePosition: "center center",
    hotspots: [
      {
        id: "ww-palaghata",
        x: 50,
        y: 45,
        title: "Palaghata in the Sacred Chauk",
        description: "The corn goddess of fertility, residing within an ornate square that wards off malignant spirits."
      },
      {
        id: "ww-procession",
        x: 75,
        y: 75,
        title: "Wedding Procession & Musicians",
        description: "Villagers playing dhols and trumpets accompany the bride and groom across the harvested fields."
      }
    ]
  },

  // 16. THREE GIRLS BY AMRITA SHER-GIL (Modern Indian Art)
  {
    id: "modern-three-girls",
    title: "Three Girls (Group of Three)",
    artistOrTradition: "Amrita Sher-Gil",
    traditionId: "modern",
    dateLabel: "1935 CE",
    startYear: 1935,
    endYear: 1935,
    period: "Modern Indian Art Renaissance",
    era: "New Artistic Languages",
    artForm: "Painting",
    material: "Oil on canvas",
    technique: "Modernist oil painting blending Post-Impressionism with Ajanta mural aesthetics",
    origin: "Amritsar / Shimla, Punjab",
    currentLocation: "National Gallery of Modern Art (NGMA), New Delhi",
    summary: "A celebrated modernist masterpiece depicting three young Indian women sitting together in contemplative, wistful silence.",
    historicalContext: "Painted in 1935 after Sher-Gil returned from the École des Beaux-Arts in Paris. It was the first painting she produced that won the Gold Medal at the Bombay Art Society, establishing her as the pioneer of modern Indian art.",
    visualAnalysis: "Three figures clad in rich plum, fiery vermilion, and warm yellow drapery sit closely together. Their dark complexions, downcast eyes, and heavy stylized hands evoke both Gauguin's quietude and the classical frescoes of Ajanta.",
    culturalSignificance: "Designated as a 'National Art Treasure' by the Government of India. It marks the moment Indian art moved beyond romantic colonial orientalism to confront the poignant inner life and dignity of ordinary Indian women.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Three_Girls_by_Amrita_Sher-Gil.jpg/800px-Three_Girls_by_Amrita_Sher-Gil.jpg",
    imageAlt: "Oil painting Three Girls by pioneer Indian modernist Amrita Sher-Gil",
    imageCredit: "National Gallery of Modern Art (NGMA), New Delhi / Wikimedia Commons",
    imageLicense: "Public Domain / National Art Treasure of India",
    sources: [
      { title: "National Gallery of Modern Art (NGMA), New Delhi", url: "https://ngmaindia.gov.in/" },
      { title: "Google Arts & Culture — Amrita Sher-Gil Retrospective", url: "https://artsandculture.google.com/" }
    ],
    themeColor: "#A6533B",
    imageFit: "contain",
    imagePosition: "center center",
    hotspots: [
      {
        id: "tg-colors",
        x: 45,
        y: 60,
        title: "Expressive Pigment Contrast",
        description: "The dramatic juxtaposition of deep crimson, earthy yellow, and plum drapery echoes Indian village textiles rendered through modern oil pigments."
      },
      {
        id: "tg-gaze",
        x: 65,
        y: 25,
        title: "Introspective Melancholy",
        description: "Rather than posing for exotic male gazes, the women are absorbed in deep interior reverie, reflecting the quiet resilience of rural Indian women."
      }
    ]
  }
];

const artifactData = [
    // ----------------------------------------------------
    // INDUS VALLEY
    // ----------------------------------------------------
    {
        id: "indus-dancing-girl",
        tradition: "Indus Valley",
        traditionId: "indus-valley",
        period: "Harappan Civilization",
        date: "c. 2300–1750 BCE",
        artifactName: "Dancing Girl",
        image: "assets/indus/dancing-girl.jpg",
        shortDescription: "A prehistoric bronze sculpture of a young woman.",
        historicalContext: "Discovered in 1926 in the ancient city of Mohenjo-daro (present-day Pakistan). It is one of the most famous artifacts of the Indus Valley Civilization, showcasing early urban life and artistic expression.",
        significance: "Demonstrates advanced understanding of metallurgy and the lost-wax casting technique over 4,000 years ago. The confident posture suggests a sophisticated society with cultural activities.",
        material: "Bronze",
        technique: "Lost-wax casting (cire perdue)",
        culturalImportance: "Provides insight into the social life, physical appearance, and attire of the Harappan people.",
        source: "National Museum, New Delhi",
        sourceUrl: "https://nationalmuseumindia.gov.in/",
        // Show the complete figure — do not crop the face or feet
        imagePosition: "center 15%",
        imageFit: "contain"
    },
    {
        id: "indus-pashupati",
        tradition: "Indus Valley",
        traditionId: "indus-valley",
        period: "Harappan Civilization",
        date: "c. 2300–1750 BCE",
        artifactName: "Pashupati Seal",
        image: "assets/indus/pashupati-seal.jpg",
        shortDescription: "A steatite seal depicting a seated figure surrounded by animals.",
        historicalContext: "Excavated at Mohenjo-daro. Seals like this were likely used for trade and administrative purposes. The script on the seal remains undeciphered.",
        significance: "The central figure is often interpreted as a proto-Shiva or 'Lord of Animals' (Pashupati), suggesting an early form of yogic or religious practice that influenced later Hinduism.",
        material: "Steatite (Soapstone)",
        technique: "Carving and intaglio",
        culturalImportance: "A crucial piece of evidence for understanding the religious and symbolic beliefs of the Indus Valley Civilization.",
        source: "National Museum, New Delhi",
        sourceUrl: "https://nationalmuseumindia.gov.in/",
        // Show the complete seal including border inscriptions
        imagePosition: "center center",
        imageFit: "contain"
    },

    // ----------------------------------------------------
    // AJANTA
    // ----------------------------------------------------
    {
        id: "ajanta-padmapani",
        tradition: "Ajanta",
        traditionId: "ajanta",
        period: "Vakataka Dynasty",
        date: "c. 5th Century CE",
        artifactName: "Padmapani Bodhisattva",
        image: "assets/ajanta/padmapani.jpg",
        shortDescription: "A magnificent mural of the Lotus-bearing Bodhisattva.",
        historicalContext: "Located in Cave 1 of the Ajanta Caves in Maharashtra. The caves were carved into a horseshoe-shaped cliff and served as Buddhist monasteries and prayer halls.",
        significance: "A masterpiece of Indian classical painting. The subtle shading, elegant linework, and profound expression of compassion epitomize the zenith of Buddhist art in India.",
        material: "Rock wall, natural pigments",
        technique: "Fresco-secco (painting on dry plaster)",
        culturalImportance: "Represents the Mahayana Buddhist ideal of the Bodhisattva, a being who delays nirvana to help others achieve enlightenment.",
        source: "Archaeological Survey of India / UNESCO",
        sourceUrl: "https://whc.unesco.org/en/list/242/",
        // Favour the face of the Bodhisattva — the most recognisable element
        imagePosition: "center 20%",
        imageFit: "cover"
    },
    {
        id: "ajanta-apsara",
        tradition: "Ajanta",
        traditionId: "ajanta",
        period: "Vakataka Dynasty",
        date: "c. 5th Century CE",
        artifactName: "Indra with Apsaras",
        image: "assets/ajanta/apsara.jpg",
        shortDescription: "A celestial mural depicting Indra accompanied by heavenly nymphs.",
        historicalContext: "Located in Cave 17 of the Ajanta Caves, renowned for its rich and complex narrative murals. The cave was patronised by the Vakataka king Harisena and contains some of the finest surviving examples of ancient Indian painting.",
        significance: "Exemplifies the Ajanta artists' extraordinary mastery of naturalistic form, expressive gesture, and luminous colour. The apsaras (celestial maidens) float weightlessly, conveying divine grace and beauty.",
        material: "Fresco-secco (natural pigments on dry lime plaster)",
        technique: "Fresco-secco",
        culturalImportance: "Illustrates the rich cosmological worldview of ancient India, where celestial beings intermingled with earthly narratives and divine worship was expressed through extraordinary beauty.",
        source: "Archaeological Survey of India / UNESCO",
        sourceUrl: "https://whc.unesco.org/en/list/242/",
        // Show celestial figures from the top
        imagePosition: "center top",
        imageFit: "cover"
    },

    // ----------------------------------------------------
    // CHOLA
    // ----------------------------------------------------
    {
        id: "chola-nataraja",
        tradition: "Chola",
        traditionId: "chola",
        period: "Chola Dynasty",
        date: "c. 11th Century CE",
        artifactName: "Nataraja",
        image: "assets/chola/nataraja.jpg",
        shortDescription: "Shiva depicted as the Lord of the Dance.",
        historicalContext: "Created during the height of the Chola empire in South India, a period known for its prolific temple building and exceptional bronze casting.",
        significance: "One of the most iconic symbols of Indian art globally. It visualizes the cosmic cycles of creation and destruction, embodying complex theological concepts in a single harmonious form.",
        material: "Bronze",
        technique: "Lost-wax casting",
        culturalImportance: "Central to Shaivite worship, it represents Shiva's five activities: creation, protection, destruction, embodiment, and release.",
        source: "Los Angeles County Museum of Art (LACMA)",
        sourceUrl: "https://www.lacma.org/",
        // Preserve the complete silhouette — Nataraja must be seen in full
        imagePosition: "center center",
        imageFit: "contain"
    },
    {
        id: "chola-somaskanda",
        tradition: "Chola",
        traditionId: "chola",
        period: "Chola Dynasty",
        date: "c. 11th Century CE",
        artifactName: "Somaskanda",
        image: "assets/chola/somaskanda.jpg",
        shortDescription: "A bronze group showing Shiva, Uma (Parvati), and Skanda.",
        historicalContext: "A popular iconic form during the Pallava and Chola periods. These portable bronze deities were used in temple processions (utsava murtis).",
        significance: "Represents the ideal divine family in Hindu iconography. The composition highlights the familial aspect of Shiva, contrasting with his ascetic or destructive forms.",
        material: "Bronze",
        technique: "Lost-wax casting",
        culturalImportance: "Reflects the integration of domestic family ideals into divine worship and the importance of processional festivals in South Indian temple culture.",
        source: "National Museum, New Delhi",
        sourceUrl: "https://nationalmuseumindia.gov.in/",
        // Show the full group of three figures
        imagePosition: "center center",
        imageFit: "contain"
    },

    // ----------------------------------------------------
    // MUGHAL
    // ----------------------------------------------------
    {
        id: "mughal-jahangir",
        tradition: "Mughal",
        traditionId: "mughal",
        period: "Mughal Empire",
        date: "c. 1615–1618 CE",
        artifactName: "Jahangir Preferring a Sufi Shaikh to Kings",
        image: "assets/mughal/jahangir.jpg",
        shortDescription: "An allegorical miniature painting by the master artist Bichitr.",
        historicalContext: "Painted for the St. Petersburg Album during the reign of Emperor Jahangir, who was a great patron of the arts and possessed an intense curiosity about the world.",
        significance: "A masterpiece of political propaganda and artistic synthesis. It blends Persian, Indian, and European influences (like cupids and a portrait of King James I of England) to assert Jahangir's spiritual and temporal supremacy.",
        material: "Opaque watercolor, gold, and ink on paper",
        technique: "Miniature painting",
        culturalImportance: "Highlights the cosmopolitan nature of the Mughal court and the importance of Sufi mysticism in royal ideology.",
        source: "Freer Gallery of Art (Smithsonian)",
        sourceUrl: "https://asia.si.edu/",
        // Show the top half of the composition (emperor + shaikh) — the critical allegory
        imagePosition: "center 15%",
        imageFit: "cover"
    },
    {
        id: "mughal-zebra",
        tradition: "Mughal",
        traditionId: "mughal",
        period: "Mughal Empire",
        date: "c. 1612 CE",
        artifactName: "Turkey Cock",
        image: "assets/mughal/zebra.jpg",
        shortDescription: "A precise natural history study of a Turkey Cock by Ustad Mansur.",
        historicalContext: "Emperor Jahangir commissioned detailed studies of exotic flora and fauna. Ustad Mansur served as the imperial court painter and documented rare animals with extraordinary scientific accuracy.",
        significance: "Demonstrates the scientific precision and acute observational skills of Mughal miniature painters. Mansur earned the title 'Wonder of the Age' (Nadir al-Asr) for his unrivalled natural history paintings.",
        material: "Opaque watercolor and gold on paper",
        technique: "Miniature painting",
        culturalImportance: "Reflects the Mughal emperors' deep interest in the natural world and their desire to document exotic fauna — a tradition that combined Persian artistic refinement with European scientific observation.",
        source: "Wikimedia Commons (via St. Petersburg collection)",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Turkey_Cock,_by_Mansur,_opaque_watercolour_and_gold_on_paper,_Mughal,_ca._1612.jpg",
        // Show the complete painting — this is a precise scientific study
        imagePosition: "center center",
        imageFit: "contain"
    },

    // ----------------------------------------------------
    // MADHUBANI (Traditional/Living Art)
    // ----------------------------------------------------
    {
        id: "madhubani-tree",
        tradition: "Madhubani",
        traditionId: "madhubani",
        period: "Traditional / Living Art Form",
        date: "Continuous Tradition",
        artifactName: "Tree of Life (Representative Art)",
        image: "assets/madhubani/tree-of-life.jpg",
        shortDescription: "A recurring motif representing growth, connection, and fertility.",
        historicalContext: "Originating in the Mithila region of Bihar, Madhubani art was traditionally painted by women on freshly plastered mud walls of huts for festivals and ceremonies.",
        significance: "The Tree of Life is a universal symbol, but in Madhubani art, it is characterized by intricate geometric patterns, vibrant colors, and the inclusion of birds and animals within its branches.",
        material: "Natural dyes and pigments on paper/cloth (originally mud walls)",
        technique: "Line drawing using twigs, nib-pens, or fingers",
        culturalImportance: "Symbolizes the interconnectedness of all living beings and nature, central to the philosophy of the Mithila region.",
        source: "Wikimedia Commons",
        sourceUrl: "https://commons.wikimedia.org/wiki/Category:Madhubani_paintings",
        attribution: "CC BY-SA 4.0 - Artist/Photographer via Wikimedia Commons",
        // Cover to fill the card and show the overall pattern / composition
        imagePosition: "center center",
        imageFit: "cover"
    },
    {
        id: "madhubani-kohbar",
        tradition: "Madhubani",
        traditionId: "madhubani",
        period: "Traditional / Living Art Form",
        date: "Continuous Tradition",
        artifactName: "Kohbar Ghar (Representative Art)",
        image: "assets/madhubani/kohbar.jpg",
        shortDescription: "A traditional nuptial chamber painting.",
        historicalContext: "These intricate paintings were drawn on the walls of the bridal chamber (Kohbar Ghar) to bless the newlywed couple.",
        significance: "Filled with complex symbolism including the lotus (female), bamboo (male), and various deities to ensure fertility, prosperity, and protection.",
        material: "Natural dyes (like turmeric, indigo) on paper/wall",
        technique: "Intricate line work and flat color application",
        culturalImportance: "A profound expression of women's rituals and the cultural transmission of knowledge and blessings through art in rural Bihar.",
        source: "Wikimedia Commons",
        sourceUrl: "https://commons.wikimedia.org/wiki/Category:Madhubani_paintings",
        attribution: "CC BY-SA 4.0 - Artist/Photographer via Wikimedia Commons",
        // Show central symbolic motifs of the nuptial painting
        imagePosition: "center center",
        imageFit: "cover"
    },

    // ----------------------------------------------------
    // WARLI (Traditional/Living Art)
    // ----------------------------------------------------
    {
        id: "warli-tarpa",
        tradition: "Warli",
        traditionId: "warli",
        period: "Traditional / Living Art Form",
        date: "Continuous Tradition",
        artifactName: "Tarpa Dance Scene (Representative Art)",
        image: "assets/warli/tarpa.jpg",
        shortDescription: "A rhythmic depiction of community dancing.",
        historicalContext: "Created by the Warli tribe in Maharashtra. Traditionally painted by women on the ochre mud walls of their homes using a white paste made from rice.",
        significance: "The circular formation around the Tarpa (a wind instrument) represents the circle of life. The rudimentary geometric shapes (circle, triangle, square) convey dynamic movement and unity.",
        material: "Rice paste with water and gum on an ochre mud surface",
        technique: "Painting with a chewed bamboo stick",
        culturalImportance: "Captures the essence of tribal community life, where art is not meant for display but is an integral part of social and agricultural rituals.",
        source: "Wikimedia Commons",
        sourceUrl: "https://commons.wikimedia.org/wiki/Category:Warli_art",
        attribution: "CC BY-SA 4.0 - Artist/Photographer via Wikimedia Commons",
        // Contain so the circular Tarpa formation is fully visible
        imagePosition: "center center",
        imageFit: "contain"
    },
    {
        id: "warli-wedding",
        tradition: "Warli",
        traditionId: "warli",
        period: "Traditional / Living Art Form",
        date: "Continuous Tradition",
        artifactName: "Village Wedding (Representative Art)",
        image: "assets/warli/wedding.jpg",
        shortDescription: "A painting centered around Palaghata, the marriage goddess.",
        historicalContext: "A sacred painting created during Warli weddings. Unlike other Warli art which often depicts daily life, the Chauk is strictly ritualistic.",
        significance: "The square enclosure represents the sacred space of the goddess. It is one of the few instances in Warli art where a specific deity is the central focus.",
        material: "Rice paste on mud wall/canvas",
        technique: "Geometric line drawing",
        culturalImportance: "An essential component of the Warli wedding ritual, ensuring the blessings of the goddess for fertility and a successful marriage.",
        source: "Wikimedia Commons",
        sourceUrl: "https://commons.wikimedia.org/wiki/Category:Warli_art",
        attribution: "CC BY-SA 4.0 - Artist/Photographer via Wikimedia Commons",
        // Contain so the village narrative scene is legible in full
        imagePosition: "center center",
        imageFit: "contain"
    }
];

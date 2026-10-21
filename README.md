# KAAL — The Living Museum of Indian Art

> *"Civilizations change. Materials endure. Art remembers."*

**KAAL** is an immersive, interactive digital museum and educational timeline tracing 5,000 years of Indian art, material culture, architectural monuments, and living folk traditions.

Designed to feel like a contemporary physical gallery hewn from dark stone, aged bronze, warm sandstone, and archival parchment, the experience connects prehistoric Indus Valley metallurgy to sacred classical murals, imperial miniature paintings, and ongoing indigenous ritual arts.

---

## 🏛️ Core Exhibition Spaces

1. **The Museum Entrance (Hero):**
   - Monumental editorial typography (*Cormorant Garamond* & *Manrope*).
   - Atmospheric museum lighting and layered architectural silhouettes.
   - Immediate entry into the timeline or direct access to the permanent collection.

2. **The Vertical Timeline:**
   - Continuous architectural vertical spine connecting six historical epochs:
     - **The Earliest Traces:** Mature Harappan Civilization (c. 2300–1750 BCE)
     - **Stone and Empire:** Mauryan & Early Buddhist monumental art (c. 3rd C. BCE – 1st C. CE)
     - **Painted Sacred Worlds:** Ajanta cave fresco-secco murals (c. 5th C. CE)
     - **Bronze in Motion:** Imperial Chola lost-wax panchaloha castings (c. 11th C. CE)
     - **Manuscripts and Courts:** Mughal royal atelier miniature paintings (c. 17th C. CE)
     - **The Living Present:** Mithila (Madhubani) & Warli tribal ceremonial wall traditions
   - Filter by epoch or art medium (Sculpture, Painting, Architecture, Miniature, Folk Art).
   - Alternating monumental cards with curated metadata, dates, and historical analysis.

3. **Interactive Exhibition & Hotspot Analysis:**
   - Full-screen exhibition display with high-resolution photography.
   - Interactive visual hotspots detailing casting techniques, mudras, pigments, and iconographic symbols.

4. **Permanent Catalogue & Side-by-Side Comparison:**
   - Live search across titles, periods, mediums, and origins.
   - Chronological sorting (Antiquity to Modern / Modern to Antiquity).
   - Comparative Art Historical Analysis tool: select any two masterpieces to compare them side by side.

5. **Curatorial References & Academic Bibliography:**
   - Documented provenance and direct links to the Archaeological Survey of India (ASI), National Museum New Delhi, UNESCO World Heritage Centre, Smithsonian Freer Gallery, and LACMA.
   - Transparent licensing and attribution registry.

6. **Ambient Soundscape:**
   - Optional, user-controlled procedural acoustic drone synthesizing meditative tanpura frequencies (136.1 Hz root harmonic resonance) via the Web Audio API without external audio dependencies.

---

## 🛠️ Technology Architecture

- **Core:** React 18, TypeScript, Vite
- **3D & Graphics:** Three.js, WebGL, ACES Filmic Tone Mapping
- **Audio:** Web Audio API (procedural harmonic drone synthesis)
- **Icons:** Lucide React
- **Typography:** Cormorant Garamond, Manrope
- **Styling:** Modular CSS tokens, fluid clamp sizing, architectural museum gradients

---

## 🚀 Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Bhavy-official/Indian-Art-Form.git
   cd Indian-Art-Form
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local museum dev server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📜 Academic & Cultural Heritage Notice

Developed for educational purposes. All photographic records and historical citations are utilized under Public Domain, Creative Commons (CC BY-SA), and fair use standards. No commercial ownership is asserted over national cultural heritage.

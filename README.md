# Villa Victorina El Roque

Een moderne, hoogwaardige statische website voor vakantieverhuur van Villa Victorina in El Roque, Fuerteventura. Gebouwd met pure HTML en CSS, volledig geoptimaliseerd voor performance, accessibility en SEO.

## 🏠 Over het Project

Villa Victorina El Roque is een elegante vakantievilla gelegen in El Roque, Fuerteventura. De accommodatie beschikt over 3 slaapkamers, 3 badkamers en een verwarmd binnenzwembad. Deze website is ontworpen als een stijlvolle one-pager die de unieke faciliteiten en locatie van de villa presenteert met focus op visuele presentatie en gebruiksvriendelijkheid.

### Property Details
- **Locatie**: El Roque, Fuerteventura
- **Grootte**: 150 m²
- **Slaapkamers**: 3
- **Badkamers**: 3
- **Zwembad**: Verwarmd binnenzwembad (het hele jaar open)
- **Afstand strand**: 2,2 km tot Playa del Castillo
- **Afstand luchthaven**: 42 km tot Fuerteventura Airport

## ✨ Features

### Design & User Experience
- 📱 **Mobile-first responsive design** - Perfect op alle apparaten
- 🎨 **Authentieke Fuerteventura-stijl** - Kleurenpalet geïnspireerd op vulkanische steen, witte muren en natuurlijk hout
- 🖼️ **Foto-centrisch** - Masonry grid met alle villa foto's
- 🎬 **Slideshow/Lightbox** - Volledig werkende foto slideshow met touch gestures
- 🗺️ **Google Maps embed** - Werkende kaart voor locatie
- 🎯 **Duidelijke CTA's** - Prominente call-to-actions naar verhuursite
- ⚡ **Strakke gallery** - Grid begint direct boven page fold

### Performance Optimalisaties
- ⚡ **Core Web Vitals geoptimaliseerd**
  - LCP (Largest Contentful Paint) < 2.5s
  - FID (First Input Delay) < 100ms
  - CLS (Cumulative Layout Shift) < 0.1
- 🚀 **Inline critical CSS** - Above-the-fold content laadt direct
- 📦 **Deferred non-critical CSS** - Niet-essentiële styles worden uitgesteld
- 🔗 **Resource hints** - Preconnect en DNS-prefetch voor externe resources
- 🖼️ **Geoptimaliseerde afbeeldingen**
  - Responsive images met `srcset` en `sizes`
  - WebP formaat met JPEG/PNG fallback
  - Lazy loading voor below-the-fold afbeeldingen
  - Width en height attributes om layout shift te voorkomen
- 📝 **Minimale CSS** - Geen frameworks, pure CSS
- 🎭 **System fonts** - Geen externe font downloads nodig

### Accessibility (WCAG 2.1 AA Compliant)
- ♿ **Semantische HTML5** - Proper heading hierarchy en landmark regions
- 🎯 **Skip links** - Direct naar hoofdcontent springen
- ⌨️ **Keyboard navigatie** - Alle interactieve elementen zijn keyboard accessible
- 👁️ **Focus indicators** - Duidelijke focus states (contrast ratio 3:1)
- 🎨 **Kleurencontrast** - Minimaal 4.5:1 voor normale tekst, 3:1 voor grote tekst
- 📖 **Screen reader support** - Descriptive ARIA labels en alt teksten
- 🔊 **Reduced motion support** - Animaties worden uitgeschakeld voor gebruikers met motion sensitivity
- 🎨 **High contrast mode** - Ondersteuning voor high contrast preferences

### SEO Optimalisaties
- 🔍 **Meta tags** - Complete set van title, description, keywords
- 📱 **Open Graph** - Optimale social media sharing (Facebook, LinkedIn)
- 🐦 **Twitter Cards** - Rich previews op Twitter
- 📊 **Structured Data (JSON-LD)**
  - Accommodation schema met volledige property details
  - LocalBusiness schema voor lokale SEO
  - Image metadata voor rich snippets
- 🗺️ **Sitemap.xml** - XML sitemap voor search engines
- 🤖 **Robots.txt** - Crawler instructies
- 🔗 **Canonical URLs** - Voorkomt duplicate content
- 🌐 **Language tags** - Correct Nederlands taalgmarkering

### AI & Chatbot Search Engine Optimalisatie
- 🤖 **JSON-LD structured data** - Uitgebreide machine-readable property informatie
- 📝 **Plain text content** - Alle belangrijke informatie in tekst (niet alleen in afbeeldingen)
- 📋 **List format** - Faciliteiten en features in overzichtelijke lijstjes
- 💬 **Natural language** - Conversational, contextrijke beschrijvingen
- 🎯 **Semantic HTML** - Duidelijke content hiërarchie voor AI parsing
- 📊 **FAQPage schema ready** - Voorbereid voor veelgestelde vragen

### Marketing & Analytics Ready
- 📊 **Google Analytics placeholder** - Commented out, klaar om te activeren
- 🏷️ **Google Tag Manager placeholder** - Commented out, klaar om te activeren
- 📘 **Facebook Pixel placeholder** - Commented out, klaar om te activeren
- 🎯 **Google Ads ready** - Structured data en conversion tracking voorbereid

## 📁 Project Structuur

```
casavictoria/
├── index.html          # Hoofdpagina met volledige content + JavaScript
├── css/
│   └── styles.css      # Complete stylesheet met responsive design
├── images/             # Alle villa foto's (80+ afbeeldingen)
├── robots.txt          # SEO: crawler instructies
├── sitemap.xml         # SEO: XML sitemap
├── .nojekyll           # GitHub Pages: disable Jekyll processing
└── README.md           # Deze file
```

## 🖼️ Fotogalerij Features

### Dubbele Gallery Structuur

#### Top 10 Gallery (Bovenaan)
- **Locatie**: Direct na hero sectie
- **Content**: 10 beste/meest representatieve foto's
- **Layout**: Kleinere, gecentreerde masonry grid (max-width: 900-1200px)
- **Loading**: Eager loading voor optimale LCP score
- **Responsive**: 2 kolommen (mobile) → 3 (tablet) → 4 (desktop) → 5 (large desktop)

#### Volledige Gallery (Onderaan)
- **Locatie**: Voor footer, als laatste sectie
- **Content**: Alle overige foto's (70+)
- **Layout**: Kleinere, gecentreerde masonry grid (max-width: 900-1200px)
- **Loading**: Lazy loading voor performance
- **Responsive**: 2 kolommen (mobile) → 3 (tablet) → 4 (desktop) → 5 (large desktop)
- **Titel**: "Alle Foto's" heading

### Masonry Grid Layout
- **Minimum 2 kolommen**: Ook op mobile altijd minimaal 2 kolommen
- **Gecentreerd**: Beide galleries hebben max-width en auto margins
- **Pure CSS**: Column-based layout zonder JavaScript dependencies
- **Responsive columns**: 2 (mobile) → 3 (tablet) → 4 (desktop) → 5 (large desktop)

### Lightbox/Slideshow (Gedeeld)
- **Beide galleries delen dezelfde lightbox**: Klik op foto in top 10 of volledige gallery
- **Complete collectie**: Lightbox toont alle 80+ foto's
- **Correcte index**: Opens op de juiste foto ongeacht uit welke gallery
- **Navigatie**: Pijltjestoetsen (←/→), swipe gestures (mobile), prev/next knoppen
- **Keyboard accessible**: ESC om te sluiten, Tab navigatie
- **Mobile optimized**: Edge-to-edge op mobile, knoppen onderaan voor duim bereik
- **Touch gestures**: Swipe left/right voor volgende/vorige foto
- **Counter**: Toont huidige foto positie (bijv. "12 / 80")
- **Pure JavaScript**: Geen externe libraries, lightweight (~2KB)

### Performance Optimalisaties
- **Top 10**: Eager loading voor snelle LCP
- **Rest**: Lazy loading voor betere initial page load
- CSS columns voor snelle rendering
- Lightweight JavaScript (geen jQuery, geen externe slideshow libraries)
- Touch events met passive listeners voor smooth scrolling

## 🗺️ Google Maps Embed

De site gebruikt een gratis Google Maps embed voor de locatie sectie. Dit is volledig gratis zonder API key nodig voor basis gebruik.

### Locatie Aanpassen
Om de exacte locatie aan te passen, vervang de `src` URL in de iframe (index.html, locatie sectie):

1. Ga naar [Google Maps](https://www.google.com/maps)
2. Zoek de exacte locatie van Villa Victorina El Roque
3. Klik op "Delen" → "Kaart insluiten"
4. Kopieer de iframe code
5. Vervang de huidige iframe src in `index.html`

**Let op**: Voor extra features (custom markers, stijlen) heb je een API key nodig, maar basis embed is gratis.

## 📐 Compacte Footer

De footer is geoptimaliseerd voor minimale ruimte:
- Copyright tekst
- Reserveer knop
- Geen uitgebreide navigatie of sitemap links
- Mobile-friendly layout (stacked op mobile, row op desktop)

## 🚀 GitHub Pages Setup

### Stap 1: Repository Aanmaken
1. Maak een nieuwe repository aan op GitHub
2. Upload alle bestanden naar de repository
3. Zorg dat `index.html` in de root staat

### Stap 2: GitHub Pages Activeren
1. Ga naar **Settings** in je repository
2. Scroll naar **Pages** in het linker menu
3. Bij **Source** selecteer **main** branch en **/ (root)**
4. Klik op **Save**
5. Je site is binnen enkele minuten live op `https://[username].github.io/[repository-name]/`

### Stap 3: Custom Domain (Optioneel)
1. Voeg een `CNAME` file toe aan de root met je custom domain:
   ```
   villavictorinafuerteventura.com
   ```
2. Configureer je DNS settings bij je domain provider:
   - Type: `CNAME`
   - Name: `www` (of `@` voor apex domain)
   - Value: `[username].github.io`
3. Wacht op DNS propagatie (kan tot 48 uur duren)
4. Activeer HTTPS in GitHub Pages settings

### Stap 4: URLs Updaten
Update de volgende URLs in de bestanden naar je echte domain:
- `index.html`: Canonical URL, Open Graph URL, Twitter Card URL
- `sitemap.xml`: Alle `<loc>` tags
- `robots.txt`: Sitemap URL

Zoek en vervang: `https://villavictorinafuerteventura.com/`

## 📸 Afbeeldingen Toevoegen

### Stap 1: Foto's Voorbereiden
1. Maak een `images` directory in de root
2. Optimaliseer je foto's:
   - **Hero afbeelding**: 1920x800px (landscape)
   - **Galerij afbeeldingen**: 800x600px minimaal
   - **Social sharing**: 1200x630px voor Open Graph
3. Converteer naar WebP voor betere performance
4. Behoud originele JPEG/PNG als fallback

### Stap 2: Placeholder Vervangen
Vervang in `index.html` alle placeholder URLs:
- `https://placehold.co/...` 
- Naar je eigen afbeeldingen: `images/hero.jpg`, `images/living-room.jpg`, etc.

### Aanbevolen Afbeeldingen:
- `hero.jpg` - Hoofdafbeelding villa of verwarmd binnenzwembad (1920x800px)
- `living-room.jpg` - Woonkamer met zitgedeelte
- `pool.jpg` - **Verwarmd binnenzwembad** (niet outdoor!)
- `bedroom.jpg` - Een van de 3 slaapkamers
- `kitchen.jpg` - Volledig uitgeruste keuken
- `terrace.jpg` - Terras met outdoor meubelen
- `exterior.jpg` - Buitenkant villa
- `og-image.jpg` - Social sharing (1200x630px)

### Tools voor Image Optimalisatie:
- **TinyPNG/TinyJPG** - https://tinypng.com/
- **Squoosh** - https://squoosh.app/
- **ImageOptim** (Mac) - https://imageoptim.com/
- **WebP Converter** - https://cloudconvert.com/

## 🔧 Tracking & Analytics Activeren

### Google Analytics
1. Maak een Google Analytics property aan
2. Zoek in `index.html` naar de Google Analytics placeholder
3. Uncomment de code
4. Vervang `GA_MEASUREMENT_ID` met je tracking ID

### Google Tag Manager
1. Maak een GTM container aan
2. Zoek in `index.html` naar de GTM placeholders (2 locaties)
3. Uncomment beide code blokken
4. Vervang `GTM-XXXXXX` met je container ID

### Facebook Pixel
1. Maak een Facebook Pixel aan
2. Zoek in `index.html` naar de Facebook Pixel placeholder
3. Uncomment de code
4. Vervang `YOUR_PIXEL_ID` met je pixel ID

## 🧪 Testing & Validatie

### Performance Testing
- **Google PageSpeed Insights**: https://pagespeed.web.dev/
  - Doel: 90+ score voor mobile en desktop
- **Lighthouse**: Via Chrome DevTools (F12 → Lighthouse)
- **WebPageTest**: https://www.webpagetest.org/

### Accessibility Testing
- **WAVE**: https://wave.webaim.org/
- **axe DevTools**: Browser extension
- **Keyboard test**: Tab door de hele site zonder muis
- **Screen reader test**: Test met NVDA (Windows) of VoiceOver (Mac)
- **Color contrast**: https://webaim.org/resources/contrastchecker/

### SEO Testing
- **Google Search Console**: https://search.google.com/search-console
- **Structured Data Testing**: https://validator.schema.org/
- **Rich Results Test**: https://search.google.com/test/rich-results
- **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly

### AI Search Engine Testing
Test of AI modellen je content kunnen vinden:
- Vraag aan ChatGPT: "Wat weet je over Villa Victorina Fuerteventura?"
- Zoek in Perplexity naar je villa
- Test of de structured data correct wordt gelezen

### Cross-Browser Testing
Test de site in:
- ✅ Chrome (laatste versie)
- ✅ Firefox (laatste versie)
- ✅ Safari (laatste versie)
- ✅ Edge (laatste versie)
- ✅ Mobile Safari (iOS)
- ✅ Chrome Mobile (Android)

## 🎨 Kleurenpalet

Het ontwerp gebruikt een authentiek Fuerteventura kleurenpalet:

| Kleur | Hex | Gebruik |
|-------|-----|---------|
| Wit | `#FFFFFF` | Achtergronden, tekst op donker |
| Off-white | `#FAFAFA` | Secundaire achtergronden |
| Beige | `#F5E6D3` | Accenten, kaders |
| Beige Donker | `#E8DCC6` | Hover states |
| Vulkanische Steen | `#3A3A3A` | Primaire tekst, footer |
| Steen Licht | `#4A4A4A` | Secundaire tekst |
| Hout | `#8B6F47` | Primaire CTA, accenten |
| Hout Licht | `#A0826D` | Hover states |
| Oceaan Blauw | `#6B9BD1` | Links, accenten |

## 📝 Content Updates

### Teksten Aanpassen
Alle content bevindt zich in `index.html`:
- **Hero sectie**: Titel en subtitle (regel ~174-176)
- **Galerij**: Afbeelding captions (regel ~192+)
- **Beschrijving**: Introductie tekst (regel ~301+)
- **Features**: Faciliteiten lijst (regel ~310+)
- **Locatie**: Locatie beschrijving (regel ~436+)

### Verhuursite Link
Vervang de Booking.com links (3 locaties):
1. Hero CTA (regel ~177)
2. CTA Sectie (regel ~426)
3. Footer (regel ~461)

Vervang `https://www.booking.com` met je eigen verhuursite URL.

## 🔒 Privacy & GDPR

Wanneer je tracking activeert:
1. Voeg een cookie banner toe
2. Maak een privacy policy pagina
3. Update de footer met links naar privacy policy
4. Implementeer cookie consent management
5. Respecteer Do Not Track preferences

## 🚀 Volgende Stappen

1. ✅ **Upload echte foto's** - Vervang placeholders
2. ✅ **Update URLs** - Vervang alle placeholder URLs
3. ✅ **Activeer tracking** - Uncomment analytics code
4. ⏳ **Test alles** - Performance, accessibility, SEO
5. ⏳ **Deploy naar GitHub Pages**
6. ⏳ **Submit naar Google Search Console**
7. ⏳ **Monitor Core Web Vitals**
8. ⏳ **A/B test CTA's** - Optimaliseer conversie

## 📞 Support & Vragen

Voor vragen of problemen:
- 📧 Email: [je-email@example.com]
- 🌐 Website: [je-website.com]

## 📄 Licentie

© 2026 Villa Victorina Fuerteventura. Alle rechten voorbehouden.

---

**Gemaakt met ❤️ voor onze gasten**

*Performance. Accessibility. SEO. AI-Ready.*


# Villa Victorina El Roque

Een moderne, hoogwaardige statische website voor vakantieverhuur van Villa Victorina in El Roque, Fuerteventura. Gebouwd met pure HTML en CSS, volledig geoptimaliseerd voor performance, accessibility en SEO.

## 🏠 Over het Project

Villa Victorina El Roque is een elegante vakantievilla gelegen in El Roque, Fuerteventura. De accommodatie beschikt over 3 slaapkamers, 3 badkamers en een verwarmd binnenzwembad. Deze website is ontworpen als een stijlvolle one-pager die de unieke faciliteiten en locatie van de villa presenteert met focus op visuele presentatie en gebruiksvriendelijkheid.

### Property Details
- **Locatie**: El Roque, Fuerteventura
- **Grootte**: 150 m²
- **Slaapkamers**: 3
- **Badkamers**: 3
- **Zwembad**: Verwarmd buitenzwembad 

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

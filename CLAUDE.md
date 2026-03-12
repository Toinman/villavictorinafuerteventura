# Villa Victorina - Project Notes

## Deployment
- **Hosting**: GitHub Pages
- **Repo**: https://github.com/Toinman/villavictorinafuerteventura.git
- **Branch**: `main`
- **Deploy**: Push to `main` triggers automatic deployment via GitHub Pages
  ```bash
  cd "/Users/robi2-test/Library/Mobile Documents/com~apple~CloudDocs/Victorina"
  git add <files>
  git commit -m "message"
  git push origin main
  ```
- **Live URL**: https://villavictorinafuerteventura.com
- **Build time**: ~30-60 seconds after push
- Always deploy after making changes — do not ask the user, just push

## Dev Server
- Run locally via `.claude/launch.json` config (`victorina-site` on port 3000)

## Key Files
- `index.html` — Homepage (async CSS loading, critical inline CSS in `<style>`)
- `css/styles.css` — Main stylesheet (shared by all pages)
- `contact.html` — Contact page
- `explore-fuerteventura.html` — Explore guide
- `fuerteventura-history.html` — History page
- `fuerteventura-blog-article.html` — Blog article
- `sitemap.xml` — Sitemap with image extensions + xhtml:link hreflang
- `js/menu.js` — Hamburger menu logic
- `js/i18n.js` — Language switcher + auto-detect handler
- `nl/index.html` — Dutch (NL) homepage
- `nl/contact.html` — Dutch (NL) contact page
- `be-nl/index.html` — Belgian Dutch (BE-NL) homepage
- `be-nl/contact.html` — Belgian Dutch (BE-NL) contact page

## Architecture & Gotchas
- **Critical inline CSS**: Homepage loads stylesheet async via `media="print" onload="this.media='all'"`. Any above-the-fold styles (nav toggle, hero, buttons, overlay) MUST also exist in the critical inline `<style>` block in `<head>` to prevent FOUC
- **Nav toggle**: Scroll-adaptive — glass (white) on dark hero, subtle gray on light content. Controlled via `.nav--scrolled` class added by scroll listener in the hero script
- **Nav toggle visibility**: Starts `opacity: 0`, gets `.is-visible` class when hero image loads. This prevents flash of unstyled button
- **Hero fade-in**: Dark base (#1a1a2e) → image fades in (0.6s) → content slides up (staggered). Script is inline right after `</header>`
- **Glass design**: Used on hero CTA button (`btn--outline`) and nav toggle. Dark glass: `rgba(0,0,0,0.35)` bg + `blur(24px)`. Light glass: `rgba(255,255,255,0.12)` bg + `blur(20px)`
- **Footer**: Redesigned 3-column layout on homepage only; other pages (explore, history, contact) still use the old single-row footer — needs updating to match
- **Images**: Hero images converted to progressive JPEG via `jpegtran`. Images in `images/large/` are full-size, `images/thumbs/` are smaller
- **Phosphor Icons**: All inline SVGs from Phosphor Icons (MIT licensed), light weight variant
- **Booking partner**: Manuel Rimondi van Unam Holiday Lettings (https://arcotrust-holidaylettings.com) — direct booking link used throughout

## i18n (Multi-Language)
- **Architecture**: Country+language subdirectories, EN at root (default)
- **Active locales**: `en` (root), `nl` (/nl/), `be-nl` (/be-nl/)
- **Future locales**: `be-fr`, `fr`, `de`, `es`, `it`, `se`, `no`, `fi`, `dk`
- **Pages per locale**: `index.html`, `contact.html` (explore + history later)
- **Shared resources**: CSS, JS, images, video — all via absolute paths (`/css/...`, `/images/...`)
- **Auto-detect**: Inline script in `<head>` of EN pages only — checks `navigator.language`, redirects via `location.replace()`. Respects `localStorage('vv-locale')` preference
- **Language switcher**: Flag + country name in hamburger menu (`.nav__lang`), handled by `js/i18n.js`
- **SEO**: hreflang tags (en, nl-NL, nl-BE, x-default) on all translated pages, og:locale, canonical per version, sitemap xhtml:link cross-references
- **Key files**: `js/i18n.js` (switcher logic + localStorage), `css/styles.css` (.nav__lang styles)
- **Adding a new locale**: 1) Create `/{locale}/` directory with translated pages, 2) Add locale to `js/i18n.js` LOCALES + PAGES, 3) Update hreflang on ALL existing pages, 4) Update sitemap.xml, 5) Add to language switcher HTML on all pages

## User Preferences
- Prefers Apple-style glassmorphism design
- Likes smooth, subtle animations (no loading bars)
- Compact and modern layouts over spacious card-based ones
- Content language: English (owner speaks English & Dutch)

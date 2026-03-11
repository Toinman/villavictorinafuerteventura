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

## Dev Server
- Run locally via `.claude/launch.json` config (`victorina-site` on port 3000)

## Key Files
- `index.html` — Homepage (async CSS loading, critical inline CSS in `<style>`)
- `css/styles.css` — Main stylesheet
- `contact.html` — Contact page
- `explore-fuerteventura.html` — Explore guide
- `fuerteventura-history.html` — History page
- `sitemap.xml` — Sitemap with image extensions

## Notes
- Homepage loads stylesheet async via `media="print" onload="this.media='all'"` — any above-the-fold styles must also be in the critical inline `<style>` block in `<head>`
- Nav toggle adapts on scroll: glass on dark hero, subtle gray on white content
- Footer updated on homepage only; other pages still use the old footer structure

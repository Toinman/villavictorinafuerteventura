/**
 * Chapter Navigation Rail
 * Dynamic, scroll-tracking chapter navigator for the history page.
 * Self-contained: injects its own CSS and DOM elements.
 *
 * Desktop (≥1100px): full sidebar with all titles visible, article shifts right.
 * Tablet  (768–1099px): compact overlay — numerals + active title.
 * Mobile  (<768px): thin progress strip with expand toggle.
 */
(function() {
    'use strict';

    /* ── 1. GATHER DATA FROM DOM ────────────────────────────── */

    var sections = document.querySelectorAll('.article__section[id]');
    if (!sections.length) return;

    var tocNav = document.querySelector('.toc');
    var chapters = [];

    sections.forEach(function(section) {
        var header = section.querySelector('.chapter-header');
        if (!header) return;
        var numberEl = header.querySelector('.chapter-header__number');
        var titleEl  = header.querySelector('.chapter-header__title');
        var numeral  = numberEl ? numberEl.textContent.replace(/^Chapter\s*/i, '').trim() : '';
        var title    = titleEl  ? titleEl.textContent.trim() : '';

        chapters.push({
            id: section.id,
            numeral: numeral,
            title: title,
            el: section,
            progress: 0
        });
    });

    if (!chapters.length) return;

    /* ── 2. INJECT STYLES ───────────────────────────────────── */

    var css = [

        /* ============================================================
           ARTICLE LAYOUT SHIFT — Desktop sidebar mode
           Shift the article right so the rail has dedicated space.
           Always applied (not conditional on rail visibility) to
           avoid layout shift when rail fades in.
           ============================================================ */
        '@media (min-width: 1100px) {',
        '  .article {',
        '    margin-left: clamp(230px, 18vw, 400px);',
        '    margin-right: auto;',
        '  }',
        '}',

        /* ============================================================
           RAIL CONTAINER — Desktop (base styles, ≥ 1100px)
           ============================================================ */
        '.chapter-rail {',
        '  position: fixed;',
        '  left: 0;',
        '  top: 50%;',
        '  transform: translateY(-50%);',
        '  z-index: 9998;',
        '  width: 210px;',
        '  padding: 16px 0;',
        '  background: rgba(249, 246, 242, 0.82);',
        '  backdrop-filter: blur(24px) saturate(1.6);',
        '  -webkit-backdrop-filter: blur(24px) saturate(1.6);',
        '  border-right: 1px solid rgba(0, 0, 0, 0.06);',
        '  border-radius: 0 16px 16px 0;',
        '  box-shadow: 2px 0 28px rgba(0, 0, 0, 0.05);',
        '  opacity: 0;',
        '  transition: opacity 0.4s ease-out;',
        '  pointer-events: none;',
        '}',
        '.chapter-rail.is-visible {',
        '  opacity: 1;',
        '  pointer-events: auto;',
        '}',

        /* ── List ── */
        '.chapter-rail__list {',
        '  list-style: none;',
        '  padding: 0;',
        '  margin: 0;',
        '  display: flex;',
        '  flex-direction: column;',
        '  gap: 2px;',
        '}',

        /* ── Button (each chapter) ── */
        '.chapter-rail__btn {',
        '  position: relative;',
        '  display: flex;',
        '  align-items: center;',
        '  gap: 10px;',
        '  padding: 8px 18px 8px 16px;',
        '  border: none;',
        '  background: transparent;',
        '  cursor: pointer;',
        '  font-family: "Cormorant Garamond", Georgia, serif;',
        '  transition: background 150ms ease;',
        '  width: 100%;',
        '  text-align: left;',
        '  overflow: hidden;',
        '}',
        '.chapter-rail__btn:hover {',
        '  background: rgba(0, 0, 0, 0.03);',
        '}',

        /* ── Progress fill ── */
        '.chapter-rail__progress {',
        '  position: absolute;',
        '  left: 0;',
        '  top: 0;',
        '  bottom: 0;',
        '  width: calc(var(--progress, 0) * 100%);',
        '  background: rgba(139, 111, 71, 0.10);',
        '  border-radius: 0 3px 3px 0;',
        '  transition: width 80ms linear;',
        '  pointer-events: none;',
        '}',

        /* ── Numeral ── */
        '.chapter-rail__numeral {',
        '  font-size: 14px;',
        '  font-weight: 600;',
        '  color: #8B6F47;',
        '  min-width: 30px;',
        '  text-align: center;',
        '  letter-spacing: 0.03em;',
        '  position: relative;',
        '  z-index: 1;',
        '  flex-shrink: 0;',
        '  transition: color 200ms ease;',
        '}',

        /* ── Title (desktop: always visible) ── */
        '.chapter-rail__title {',
        '  font-size: 12.5px;',
        '  font-weight: 400;',
        '  color: #999;',
        '  white-space: nowrap;',
        '  overflow: hidden;',
        '  text-overflow: ellipsis;',
        '  min-width: 0;',
        '  flex: 1;',
        '  position: relative;',
        '  z-index: 1;',
        '  transition: color 200ms ease;',
        '}',

        /* ── Active chapter ── */
        '.chapter-rail__item.is-active .chapter-rail__numeral {',
        '  color: #3A3A3A;',
        '  font-weight: 700;',
        '}',
        '.chapter-rail__item.is-active .chapter-rail__title {',
        '  color: #4A4A4A;',
        '  font-weight: 500;',
        '}',
        '.chapter-rail__item.is-active .chapter-rail__progress {',
        '  background: rgba(139, 111, 71, 0.18);',
        '}',

        /* ── Hover: brighten title ── */
        '.chapter-rail__btn:hover .chapter-rail__title,',
        '.chapter-rail__btn:focus-visible .chapter-rail__title {',
        '  color: #5A5A5A;',
        '}',

        /* ── Past (completed) chapters ── */
        '.chapter-rail__item.is-past .chapter-rail__numeral {',
        '  color: #B0926F;',
        '}',
        '.chapter-rail__item.is-past .chapter-rail__title {',
        '  color: #B5B5B5;',
        '}',

        /* ── Hide when nav menu is open ── */
        'body.nav-open .chapter-rail {',
        '  opacity: 0 !important;',
        '  pointer-events: none !important;',
        '}',

        /* ── Mobile toggle (hidden on desktop) ── */
        '.chapter-rail__mobile-toggle {',
        '  display: none;',
        '}',

        /* ============================================================
           TABLET — 768 – 1099 px
           Compact overlay: numerals always, title only for active/hover.
           No article shift — rail floats over the left margin.
           ============================================================ */
        '@media (max-width: 1099px) {',
        '  .chapter-rail {',
        '    width: auto;',
        '    padding: 10px 0;',
        '    border-radius: 0 12px 12px 0;',
        '  }',
        '  .chapter-rail__btn {',
        '    padding: 5px 14px 5px 10px;',
        '    gap: 8px;',
        '  }',
        '  .chapter-rail__numeral {',
        '    font-size: 12px;',
        '    min-width: 24px;',
        '  }',
        '  .chapter-rail__title {',
        '    max-width: 0;',
        '    opacity: 0;',
        '    flex: 0 0 auto;',
        '    transition: max-width 0.3s ease, opacity 0.2s ease, color 0.2s ease;',
        '  }',
        '  .chapter-rail__item.is-active .chapter-rail__title {',
        '    max-width: 180px;',
        '    opacity: 1;',
        '  }',
        '  .chapter-rail__btn:hover .chapter-rail__title,',
        '  .chapter-rail__btn:focus-visible .chapter-rail__title {',
        '    max-width: 180px;',
        '    opacity: 1;',
        '  }',
        '}',

        /* ============================================================
           MOBILE — < 768 px
           Thin progress strip with expand-toggle.
           ============================================================ */
        '@media (max-width: 767px) {',
        '  .chapter-rail {',
        '    top: auto;',
        '    bottom: 90px;',
        '    transform: none;',
        '    padding: 0;',
        '    background: transparent;',
        '    backdrop-filter: none;',
        '    -webkit-backdrop-filter: none;',
        '    border: none;',
        '    box-shadow: none;',
        '    border-radius: 0;',
        '    width: 5px;',
        '    transition: width 0.3s ease, background 0.3s ease, opacity 0.3s ease,',
        '                padding 0.3s ease, border-radius 0.3s ease, box-shadow 0.3s ease;',
        '  }',
        '  .chapter-rail__list { gap: 1px; }',
        '  .chapter-rail__btn {',
        '    padding: 0;',
        '    height: 18px;',
        '    width: 5px;',
        '    min-height: 10px;',
        '    overflow: hidden;',
        '  }',
        '  .chapter-rail__numeral,',
        '  .chapter-rail__title { display: none; }',
        '  .chapter-rail__progress {',
        '    width: auto;',
        '    left: 0; right: 0;',
        '    top: auto; bottom: 0;',
        '    height: calc(var(--progress, 0) * 100%);',
        '    border-radius: 2px 2px 0 0;',
        '    background: #8B6F47;',
        '    opacity: 0.4;',
        '    transition: height 80ms linear, opacity 150ms ease;',
        '  }',
        '  .chapter-rail__item.is-active .chapter-rail__progress {',
        '    opacity: 0.85;',
        '  }',

        /* Mobile toggle visible */
        '  .chapter-rail__mobile-toggle {',
        '    display: flex;',
        '    align-items: center;',
        '    justify-content: center;',
        '    position: absolute;',
        '    top: -36px;',
        '    left: 0;',
        '    width: 28px;',
        '    height: 28px;',
        '    border: 1px solid rgba(0,0,0,0.1);',
        '    border-radius: 0 8px 8px 0;',
        '    background: rgba(249,246,242,0.88);',
        '    backdrop-filter: blur(16px);',
        '    -webkit-backdrop-filter: blur(16px);',
        '    cursor: pointer;',
        '    padding: 0;',
        '    box-shadow: 2px 2px 8px rgba(0,0,0,0.06);',
        '    color: #8B6F47;',
        '    transition: background 200ms ease;',
        '  }',
        '  .chapter-rail__mobile-toggle:hover,',
        '  .chapter-rail__mobile-toggle:active {',
        '    background: rgba(249,246,242,1);',
        '  }',
        '  .chapter-rail__mobile-toggle svg {',
        '    width: 16px;',
        '    height: 16px;',
        '  }',

        /* Mobile expanded */
        '  .chapter-rail.is-expanded {',
        '    width: auto;',
        '    background: rgba(249, 246, 242, 0.92);',
        '    backdrop-filter: blur(24px) saturate(1.6);',
        '    -webkit-backdrop-filter: blur(24px) saturate(1.6);',
        '    border-right: 1px solid rgba(0,0,0,0.06);',
        '    border-radius: 0 12px 12px 0;',
        '    padding: 10px 0;',
        '    box-shadow: 2px 0 24px rgba(0,0,0,0.08);',
        '  }',
        '  .chapter-rail.is-expanded .chapter-rail__btn {',
        '    height: auto;',
        '    width: auto;',
        '    padding: 5px 14px 5px 10px;',
        '  }',
        '  .chapter-rail.is-expanded .chapter-rail__numeral,',
        '  .chapter-rail.is-expanded .chapter-rail__title {',
        '    display: inline;',
        '  }',
        '  .chapter-rail.is-expanded .chapter-rail__item.is-active .chapter-rail__title {',
        '    max-width: 160px;',
        '    opacity: 1;',
        '  }',
        '  .chapter-rail.is-expanded .chapter-rail__progress {',
        '    height: auto;',
        '    width: calc(var(--progress, 0) * 100%);',
        '    top: 0; bottom: 0;',
        '    left: 0; right: auto;',
        '    border-radius: 0 3px 3px 0;',
        '    background: rgba(139, 111, 71, 0.10);',
        '    opacity: 1;',
        '  }',
        '  .chapter-rail.is-expanded .chapter-rail__item.is-active .chapter-rail__progress {',
        '    background: rgba(139, 111, 71, 0.16);',
        '  }',
        '}',

        /* ============================================================
           ACCESSIBILITY
           ============================================================ */
        '@media (prefers-reduced-motion: reduce) {',
        '  .chapter-rail,',
        '  .chapter-rail__progress,',
        '  .chapter-rail__title,',
        '  .chapter-rail__btn,',
        '  .chapter-rail__mobile-toggle {',
        '    transition-duration: 0.01ms !important;',
        '  }',
        '}',
        '@media print {',
        '  .chapter-rail { display: none !important; }',
        '}'
    ].join('\n');

    var styleEl = document.createElement('style');
    styleEl.textContent = css;
    document.head.appendChild(styleEl);

    /* ── 3. BUILD THE DOM ───────────────────────────────────── */

    var rail = document.createElement('nav');
    rail.className = 'chapter-rail';
    rail.setAttribute('aria-label', 'Chapter navigation');

    var list = document.createElement('ol');
    list.className = 'chapter-rail__list';

    var items = []; // parallel array for quick access

    chapters.forEach(function(ch) {
        var li = document.createElement('li');
        li.className = 'chapter-rail__item';
        li.dataset.chapter = ch.id;

        var btn = document.createElement('button');
        btn.className = 'chapter-rail__btn';
        btn.setAttribute('aria-label', ch.numeral + ': ' + ch.title);
        btn.dataset.target = ch.id;

        var progress = document.createElement('span');
        progress.className = 'chapter-rail__progress';
        progress.setAttribute('aria-hidden', 'true');

        var numSpan = document.createElement('span');
        numSpan.className = 'chapter-rail__numeral';
        numSpan.textContent = ch.numeral;

        var titleSpan = document.createElement('span');
        titleSpan.className = 'chapter-rail__title';
        titleSpan.textContent = ch.title;

        btn.appendChild(progress);
        btn.appendChild(numSpan);
        btn.appendChild(titleSpan);
        li.appendChild(btn);
        list.appendChild(li);

        items.push({ li: li, progress: progress, btn: btn });
    });

    rail.appendChild(list);

    // Mobile toggle (Phosphor list-bullets icon, light weight)
    var mobileToggle = document.createElement('button');
    mobileToggle.className = 'chapter-rail__mobile-toggle';
    mobileToggle.setAttribute('aria-label', 'Toggle chapter list');
    mobileToggle.setAttribute('aria-expanded', 'false');
    mobileToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M80,64h136a8,8,0,0,0,0-16H80a8,8,0,0,0,0,16Zm136,56H80a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,72H80a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM44,52A12,12,0,1,0,56,64,12,12,0,0,0,44,52Zm0,72a12,12,0,1,0,12,12A12,12,0,0,0,44,124Zm0,72a12,12,0,1,0,12,12A12,12,0,0,0,44,196Z"/></svg>';
    rail.appendChild(mobileToggle);

    document.body.appendChild(rail);

    /* ── 4. VISIBILITY: show after scrolling past TOC ───────── */

    var railVisible = false;

    if (tocNav && 'IntersectionObserver' in window) {
        var tocObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (!entry.isIntersecting && !railVisible) {
                    railVisible = true;
                    rail.classList.add('is-visible');
                } else if (entry.isIntersecting && railVisible) {
                    railVisible = false;
                    rail.classList.remove('is-visible');
                }
            });
        }, { threshold: 0 });
        tocObserver.observe(tocNav);
    } else {
        // No TOC or no observer support: always visible
        rail.classList.add('is-visible');
    }

    /* ── 5. ACTIVE CHAPTER (IntersectionObserver) ───────────── */

    var activeIndex = -1;

    if ('IntersectionObserver' in window) {
        var chapterObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var idx = -1;
                    for (var i = 0; i < chapters.length; i++) {
                        if (chapters[i].el === entry.target) { idx = i; break; }
                    }
                    if (idx !== -1 && idx !== activeIndex) {
                        if (activeIndex >= 0) items[activeIndex].li.classList.remove('is-active');
                        activeIndex = idx;
                        items[activeIndex].li.classList.add('is-active');
                    }
                }
            });
        }, {
            rootMargin: '-10% 0px -70% 0px',
            threshold: 0
        });

        chapters.forEach(function(ch) {
            chapterObserver.observe(ch.el);
        });
    }

    /* ── 6. PER-CHAPTER PROGRESS (scroll + rAF) ────────────── */

    var ticking = false;

    function updateProgress() {
        var scrollY = window.pageYOffset || document.documentElement.scrollTop;
        var viewportH = window.innerHeight;

        for (var i = 0; i < chapters.length; i++) {
            var ch = chapters[i];
            var rect = ch.el.getBoundingClientRect();
            var sectionTop = rect.top + scrollY;
            var sectionHeight = ch.el.offsetHeight;

            if (sectionHeight === 0) continue;

            var rawProgress = (scrollY + viewportH * 0.2 - sectionTop) / sectionHeight;
            var progress = Math.max(0, Math.min(1, rawProgress));

            // Only update DOM if meaningful change (>1%)
            if (Math.abs(progress - ch.progress) > 0.01) {
                ch.progress = progress;
                items[i].progress.style.setProperty('--progress', progress.toFixed(3));

                // Mark past chapters
                if (progress >= 0.95) {
                    items[i].li.classList.add('is-past');
                } else {
                    items[i].li.classList.remove('is-past');
                }
            }
        }

        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(updateProgress);
        }
    }, { passive: true });

    // Initial update
    updateProgress();

    /* ── 7. CLICK TO NAVIGATE ───────────────────────────────── */

    list.addEventListener('click', function(e) {
        var btn = e.target.closest('.chapter-rail__btn');
        if (!btn) return;

        var targetEl = document.getElementById(btn.dataset.target);
        if (!targetEl) return;

        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Collapse mobile rail after navigation
        if (rail.classList.contains('is-expanded')) {
            rail.classList.remove('is-expanded');
            mobileToggle.setAttribute('aria-expanded', 'false');
        }
    });

    /* ── 8. MOBILE TOGGLE ───────────────────────────────────── */

    mobileToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        var expanded = rail.classList.toggle('is-expanded');
        mobileToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });

    // Close on outside click
    document.addEventListener('click', function(e) {
        if (rail.classList.contains('is-expanded') && !rail.contains(e.target)) {
            rail.classList.remove('is-expanded');
            mobileToggle.setAttribute('aria-expanded', 'false');
        }
    });

    /* ── 9. KEYBOARD NAVIGATION ─────────────────────────────── */

    rail.addEventListener('keydown', function(e) {
        var btns = Array.prototype.slice.call(list.querySelectorAll('.chapter-rail__btn'));
        var idx = btns.indexOf(document.activeElement);
        if (idx === -1) return;

        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
            e.preventDefault();
            btns[(idx + 1) % btns.length].focus();
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            e.preventDefault();
            btns[(idx - 1 + btns.length) % btns.length].focus();
        } else if (e.key === 'Home') {
            e.preventDefault();
            btns[0].focus();
        } else if (e.key === 'End') {
            e.preventDefault();
            btns[btns.length - 1].focus();
        } else if (e.key === 'Escape' && rail.classList.contains('is-expanded')) {
            rail.classList.remove('is-expanded');
            mobileToggle.setAttribute('aria-expanded', 'false');
            mobileToggle.focus();
        }
    });

})();

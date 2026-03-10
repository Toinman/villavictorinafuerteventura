/**
 * Explore Fuerteventura — Scroll Reveal Animations
 * Uses IntersectionObserver for performant scroll-driven reveals
 */
(function () {
    'use strict';

    var reveals = document.querySelectorAll('.explore-reveal');
    if (!reveals.length) return;

    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('explore-reveal--visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        reveals.forEach(function (el) {
            observer.observe(el);
        });
    } else {
        // Fallback: show everything immediately
        reveals.forEach(function (el) {
            el.classList.add('explore-reveal--visible');
        });
    }
})();

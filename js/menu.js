(function() {
    'use strict';

    var nav = document.querySelector('.nav');
    var toggle = document.querySelector('.nav__toggle');
    var overlay = document.querySelector('.nav__overlay');
    if (!nav || !toggle || !overlay) return;

    var links = overlay.querySelectorAll('.nav__link');
    var isOpen = false;

    function open() {
        isOpen = true;
        nav.classList.add('nav--open');
        document.body.classList.add('nav-open');
        toggle.setAttribute('aria-expanded', 'true');
        overlay.setAttribute('aria-hidden', 'false');
        toggle.setAttribute('aria-label', 'Close menu');
        // Focus first link
        if (links.length) links[0].focus();
    }

    function close() {
        isOpen = false;
        nav.classList.remove('nav--open');
        document.body.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
        overlay.setAttribute('aria-hidden', 'true');
        toggle.setAttribute('aria-label', 'Open menu');
        toggle.focus();
    }

    // Toggle
    toggle.addEventListener('click', function() {
        isOpen ? close() : open();
    });

    // Close on overlay background click
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) close();
    });

    // Close on Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isOpen) close();
    });

    // Close after clicking a nav link
    links.forEach(function(link) {
        link.addEventListener('click', function() {
            close();
        });
    });

    // Focus trap
    document.addEventListener('keydown', function(e) {
        if (!isOpen || e.key !== 'Tab') return;

        var focusable = [toggle].concat(Array.prototype.slice.call(links));
        var first = focusable[0];
        var last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    });
})();

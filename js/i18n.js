/**
 * Villa Victorina — i18n (Internationalization)
 * Handles language switcher click events and localStorage preference.
 * Auto-detect logic lives as an inline <script> in <head> of EN pages only.
 */
(function() {
    'use strict';

    var STORAGE_KEY = 'vv-locale';

    // Locale → base path mapping (only locales with existing pages)
    var LOCALES = {
        'en':    '/',
        'nl':    '/nl/',
        'be-nl': '/be-nl/'
    };

    // Which pages exist per locale (relative to locale base)
    var PAGES = {
        'en':    ['', 'contact.html'],
        'nl':    ['', 'contact.html'],
        'be-nl': ['', 'contact.html']
    };

    /**
     * Determine the current page slug from the URL path.
     * Returns '' for index/homepage, or 'contact.html', etc.
     */
    function getCurrentPage() {
        var path = window.location.pathname;
        // Strip locale prefix to get the page part
        var localeKeys = Object.keys(LOCALES);
        for (var i = 0; i < localeKeys.length; i++) {
            var base = LOCALES[localeKeys[i]];
            if (base !== '/' && path.indexOf(base) === 0) {
                var page = path.substring(base.length);
                return page || '';
            }
        }
        // Root locale (EN)
        var page = path.replace(/^\//, '');
        if (page === 'index.html') page = '';
        return page;
    }

    /**
     * Check if a page exists for a given locale.
     */
    function pageExistsForLocale(locale, page) {
        var pages = PAGES[locale];
        if (!pages) return false;
        return pages.indexOf(page) !== -1;
    }

    /**
     * Navigate to a locale, setting localStorage preference.
     */
    function setLocale(locale) {
        var page = getCurrentPage();
        localStorage.setItem(STORAGE_KEY, locale);

        // If page exists in target locale, go there
        if (pageExistsForLocale(locale, page)) {
            var target = LOCALES[locale] + page;
            // Avoid navigating to current page
            if (window.location.pathname !== target) {
                window.location.href = target;
            }
        } else {
            // Page doesn't exist in target locale — go to homepage of that locale
            window.location.href = LOCALES[locale];
        }
    }

    /**
     * Initialize click handlers for language switcher links.
     * Links must have data-locale="en|nl|be-nl" attribute.
     */
    function initSwitcher() {
        var items = document.querySelectorAll('[data-locale]');
        items.forEach(function(item) {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                var locale = this.getAttribute('data-locale');
                if (locale && LOCALES[locale]) {
                    setLocale(locale);
                }
            });
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSwitcher);
    } else {
        initSwitcher();
    }

    // Expose for potential external use
    window.VVi18n = {
        setLocale: setLocale,
        getCurrentPage: getCurrentPage,
        LOCALES: LOCALES
    };
})();

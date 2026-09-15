/**
 * Saud Alanazi — personal site
 *
 * Three small progressive enhancements, each of which no-ops safely if the
 * page it runs on does not contain the relevant markup:
 *   1. Theme toggle, persisted in localStorage and synced to the OS setting.
 *   2. Sticky-header state + scroll-spy that marks the active nav link.
 *   3. A lightbox for certificate images (the cards stay plain links if this
 *      never runs, or if <dialog> is unsupported).
 */
(function () {
    'use strict';

    var root = document.documentElement;
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    /* ---------------------------------------------------------------- theme */

    function initTheme() {
        var toggle = document.getElementById('theme-toggle');
        if (!toggle) return;

        var media = window.matchMedia('(prefers-color-scheme: light)');

        function apply(theme, persist) {
            if (theme === 'light') {
                root.setAttribute('data-theme', 'light');
            } else {
                root.removeAttribute('data-theme');
            }
            toggle.setAttribute('aria-pressed', String(theme === 'light'));
            if (persist) {
                try {
                    localStorage.setItem('theme', theme);
                } catch (err) {
                    /* Private mode or blocked storage — the toggle still works
                       for this page view, it just will not be remembered. */
                }
            }
        }

        var stored = null;
        try {
            stored = localStorage.getItem('theme');
        } catch (err) { /* ignore */ }

        apply(stored || (media.matches ? 'light' : 'dark'), false);

        toggle.addEventListener('click', function () {
            apply(root.getAttribute('data-theme') === 'light' ? 'dark' : 'light', true);
        });

        // Follow the OS only while the visitor has not made a choice.
        media.addEventListener('change', function (event) {
            var choice = null;
            try {
                choice = localStorage.getItem('theme');
            } catch (err) { /* ignore */ }
            if (!choice) apply(event.matches ? 'light' : 'dark', false);
        });
    }

    /* ------------------------------------------------- header + scroll-spy */

    function initHeader() {
        var header = document.querySelector('.site-header');
        var links = Array.prototype.slice.call(
            document.querySelectorAll('.nav a[href^="#"]')
        );

        if (header && 'IntersectionObserver' in window) {
            var sentinel = document.createElement('div');
            sentinel.setAttribute('aria-hidden', 'true');
            document.body.prepend(sentinel);
            new IntersectionObserver(function (entries) {
                header.dataset.stuck = String(!entries[0].isIntersecting);
            }).observe(sentinel);
        }

        if (!links.length || !('IntersectionObserver' in window)) return;

        var byId = {};
        var sections = [];

        links.forEach(function (link) {
            var section = document.getElementById(link.hash.slice(1));
            if (!section) return;
            byId[section.id] = link;
            sections.push(section);
        });

        var visible = new Set();

        var spy = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    visible.add(entry.target.id);
                } else {
                    visible.delete(entry.target.id);
                }
            });

            // Highlight the topmost section currently in the viewport.
            var active = sections.filter(function (section) {
                return visible.has(section.id);
            })[0];

            links.forEach(function (link) {
                link.removeAttribute('aria-current');
            });
            if (active && byId[active.id]) {
                byId[active.id].setAttribute('aria-current', 'true');
            }
        }, { rootMargin: '-25% 0px -60% 0px' });

        sections.forEach(function (section) {
            spy.observe(section);
        });
    }

    /* --------------------------------------------------------- cert dialog */

    function initLightbox() {
        var dialog = document.getElementById('cert-dialog');
        var triggers = Array.prototype.slice.call(
            document.querySelectorAll('[data-lightbox]')
        );

        if (!dialog || !triggers.length || typeof dialog.showModal !== 'function') return;

        var image = dialog.querySelector('img');
        var title = dialog.querySelector('h3');
        var source = dialog.querySelector('[data-source]');

        triggers.forEach(function (trigger) {
            trigger.addEventListener('click', function (event) {
                if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
                event.preventDefault();
                image.src = trigger.href;
                image.alt = trigger.dataset.lightbox;
                title.textContent = trigger.dataset.lightbox;
                source.href = trigger.href;
                dialog.showModal();
            });
        });

        // Click outside the panel closes it.
        dialog.addEventListener('click', function (event) {
            if (event.target === dialog) dialog.close();
        });

        dialog.addEventListener('close', function () {
            image.removeAttribute('src');
        });
    }

    /* -------------------------------------------------------- reveal on scroll */

    function initReveal() {
        var items = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
        if (!items.length) return;

        if (reduceMotion.matches || !('IntersectionObserver' in window)) {
            items.forEach(function (item) {
                item.classList.add('is-visible');
            });
            return;
        }

        root.classList.add('reveal-on');

        var observer = new IntersectionObserver(function (entries, self) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                self.unobserve(entry.target);
            });
        }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

        items.forEach(function (item, index) {
            item.style.transitionDelay = Math.min(index, 4) * 60 + 'ms';
            observer.observe(item);
        });
    }

    /* ------------------------------------------------------------- copyright */

    function initYear() {
        var slot = document.getElementById('year');
        if (slot) slot.textContent = new Date().getFullYear();
    }

    /* ------------------------------------------------------------------ go */

    function start() {
        initTheme();
        initHeader();
        initLightbox();
        initReveal();
        initYear();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start);
    } else {
        start();
    }
})();

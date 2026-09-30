(function () {
    var root = document.documentElement;

    /* ---------- Theme toggle ---------- */
    var toggle = document.getElementById('themeToggle');
    if (toggle) {
        toggle.addEventListener('click', function () {
            var isLight = root.getAttribute('data-theme') === 'light';
            if (isLight) {
                root.removeAttribute('data-theme');
                try { localStorage.setItem('theme', 'dark'); } catch (e) {}
            } else {
                root.setAttribute('data-theme', 'light');
                try { localStorage.setItem('theme', 'light'); } catch (e) {}
            }
        });
    }

    var reduceMotion = window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---------- Scroll progress bar ---------- */
    var progress = document.getElementById('progress');
    if (progress) {
        var onScroll = function () {
            var h = document.documentElement;
            var max = h.scrollHeight - h.clientHeight;
            var pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
            progress.style.width = pct + '%';
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    /* ---------- Reveal on scroll ---------- */
    var revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && !reduceMotion) {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        revealEls.forEach(function (el) { io.observe(el); });
    } else {
        revealEls.forEach(function (el) { el.classList.add('in'); });
    }

    /* ---------- Ambient "cursed energy" motes ---------- */
    var canvas = document.getElementById('bgCanvas');
    if (!canvas || reduceMotion) return;
    var ctx = canvas.getContext('2d');
    var motes = [];
    var w, h, dpr;

    function accentColor() {
        var c = getComputedStyle(root).getPropertyValue('--accent').trim();
        return c || '#6fb6a2';
    }
    var color = accentColor();

    function resize() {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        w = canvas.width = Math.floor(window.innerWidth * dpr);
        h = canvas.height = Math.floor(window.innerHeight * dpr);
        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';
    }

    function seed() {
        var count = Math.min(46, Math.floor(window.innerWidth / 26));
        motes = [];
        for (var i = 0; i < count; i++) {
            motes.push({
                x: Math.random() * w,
                y: Math.random() * h,
                r: (Math.random() * 1.6 + 0.4) * dpr,
                vx: (Math.random() - 0.5) * 0.12 * dpr,
                vy: (-Math.random() * 0.28 - 0.05) * dpr,
                a: Math.random() * 0.5 + 0.1,
                tw: Math.random() * 0.02 + 0.005
            });
        }
    }

    function hexToRgb(hex) {
        var m = hex.replace('#', '');
        if (m.length === 3) m = m[0] + m[0] + m[1] + m[1] + m[2] + m[2];
        var n = parseInt(m, 16);
        return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
    }

    function draw() {
        ctx.clearRect(0, 0, w, h);
        var rgb = hexToRgb(color);
        for (var i = 0; i < motes.length; i++) {
            var m = motes[i];
            m.x += m.vx;
            m.y += m.vy;
            m.a += m.tw;
            if (m.a > 0.65 || m.a < 0.08) m.tw = -m.tw;
            if (m.y < -10) { m.y = h + 10; m.x = Math.random() * w; }
            if (m.x < -10) m.x = w + 10;
            if (m.x > w + 10) m.x = -10;

            ctx.beginPath();
            ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ',' + m.a.toFixed(3) + ')';
            ctx.fill();
        }
        requestAnimationFrame(draw);
    }

    resize();
    seed();
    draw();

    var rt;
    window.addEventListener('resize', function () {
        clearTimeout(rt);
        rt = setTimeout(function () { resize(); seed(); }, 200);
    });

    // refresh accent color when theme switches
    if (toggle) {
        toggle.addEventListener('click', function () {
            setTimeout(function () { color = accentColor(); }, 50);
        });
    }
})();

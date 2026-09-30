(function () {
    var open = document.getElementById('open');
    var top = document.getElementById('top');
    var bottom = document.getElementById('bottom');
    var inside = document.getElementById('inside');
    var seam = document.getElementById('seam');
    var ties = document.getElementById('ties');
    var hint = document.getElementById('hint');
    if (!open || !top || !bottom) return;

    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Build the cross-stitches along the seam.
    var COUNT = 9;
    var tieEls = [];
    for (var i = 0; i < COUNT; i++) {
        var x = (1000 / COUNT) * (i + 0.5);
        var p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        p.setAttribute('class', 'tie');
        p.setAttribute('d', 'M' + (x - 7) + ' 10 L' + (x + 7) + ' 30 M' + (x + 7) + ' 10 L' + (x - 7) + ' 30');
        ties.appendChild(p);
        tieEls.push(p);
    }

    // Cut order: from the centre outwards, alternating sides.
    var order = [];
    var mid = Math.floor(COUNT / 2);
    order.push(mid);
    for (var d = 1; d <= mid; d++) {
        if (mid - d >= 0) order.push(mid - d);
        if (mid + d < COUNT) order.push(mid + d);
    }

    function clamp(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
    function ease(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }

    var ticking = false;

    function render() {
        ticking = false;
        var max = open.offsetHeight - window.innerHeight;
        var p = max > 0 ? clamp((window.scrollY - open.offsetTop) / max) : 1;

        // 1) cut the ties one by one (0.04 → 0.40)
        for (var k = 0; k < order.length; k++) {
            var at = 0.04 + (k / order.length) * 0.36;
            tieEls[order[k]].classList.toggle('cut', p > at);
        }

        // 2) the thread slackens and fades (0.38 → 0.50)
        var threadFade = 1 - clamp((p - 0.38) / 0.12);
        seam.style.opacity = threadFade;

        // 3) the halves split apart (0.42 → 0.90)
        var o = ease(clamp((p - 0.42) / 0.48));
        top.style.transform = 'translateY(' + (-o * 102) + '%)';
        bottom.style.transform = 'translateY(' + (o * 102) + '%)';

        // 4) what's underneath comes up (0.50 → 0.85)
        var r = clamp((p - 0.5) / 0.35);
        inside.style.opacity = r;
        inside.style.transform = 'scale(' + (0.94 + r * 0.06) + ')';
        inside.style.pointerEvents = r > 0.6 ? 'auto' : 'none';

        // the breathing animation would override opacity, so drop it once scrolling starts
        hint.style.animation = p > 0.01 ? 'none' : '';
        hint.style.opacity = p > 0.01 ? clamp(1 - p * 8) : '';
    }

    function onScroll() {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(render);
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    render();
})();

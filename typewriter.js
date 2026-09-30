(function () {
    var sheet = document.getElementById('sheet');
    var skip = document.getElementById('skip');
    if (!sheet) return;

    // Today's date in the dateline.
    var today = document.getElementById('today');
    if (today) {
        today.textContent = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    }

    // Add the handwritten signature after "Regards,".
    var closing = sheet.querySelector('.closing');
    var sig = document.createElement('span');
    sig.className = 'sig';
    sig.textContent = 'S. Alanazi';
    if (closing) closing.appendChild(sig);

    function finish() {
        sheet.classList.add('done');
        if (skip) skip.classList.add('gone');
    }

    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { finish(); return; }

    // Collect every visible text node, then empty it; we'll re-type it.
    var walker = document.createTreeWalker(sheet, NodeFilter.SHOW_TEXT, {
        acceptNode: function (n) {
            if (!n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
            if (n.parentNode.closest('.stamp, .sig')) return NodeFilter.FILTER_REJECT;
            return NodeFilter.FILTER_ACCEPT;
        }
    });

    var jobs = [];
    var n;
    while ((n = walker.nextNode())) jobs.push(n);

    jobs = jobs.map(function (node) {
        var text = node.nodeValue.replace(/\s+/g, ' ');
        var holder = document.createElement('span');
        node.parentNode.replaceChild(holder, node);
        return { holder: holder, text: text };
    });

    // A tiny random "strike" per letter: uneven ink and a wobbly baseline.
    function strike(ch) {
        if (ch === ' ') return document.createTextNode(' ');
        var s = document.createElement('span');
        s.className = 'ch';
        s.textContent = ch;
        s.style.opacity = (0.72 + Math.random() * 0.28).toFixed(2);
        s.style.top = ((Math.random() - 0.5) * 1.2).toFixed(2) + 'px';
        return s;
    }

    var caret = document.createElement('span');
    caret.className = 'caret';

    var j = 0, i = 0, timer = null, skipped = false;

    function step() {
        if (j >= jobs.length) {
            if (caret.parentNode) caret.parentNode.removeChild(caret);
            finish();
            return;
        }
        var job = jobs[j];
        if (i < job.text.length) {
            var ch = job.text[i++];
            job.holder.appendChild(strike(ch));
            job.holder.appendChild(caret);
            var delay = 14 + Math.random() * 26;
            if (/[.,:;]/.test(ch)) delay += 90;
            timer = setTimeout(step, delay);
        } else {
            j++; i = 0;
            timer = setTimeout(step, 120);   // carriage return
        }
    }

    function skipAll() {
        if (skipped) return;
        skipped = true;
        clearTimeout(timer);
        for (; j < jobs.length; j++) {
            var job = jobs[j];
            for (; i < job.text.length; i++) job.holder.appendChild(strike(job.text[i]));
            i = 0;
        }
        if (caret.parentNode) caret.parentNode.removeChild(caret);
        finish();
    }

    document.addEventListener('click', function (e) {
        if (e.target.closest('a')) return;
        skipAll();
    });
    document.addEventListener('keydown', skipAll);

    setTimeout(step, 400);
})();

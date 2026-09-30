(function () {
    var sheet = document.getElementById('sheet');
    if (!sheet) return;

    // Today's date in the dateline.
    var today = document.getElementById('today');
    if (today) {
        today.textContent = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    }

    // Uneven typewriter ink: each letter gets a slightly different strength
    // and sits a hair off the baseline. Seeded, so the page looks the same
    // on every visit. Nothing moves.
    var seed = 20260930;
    function rand() {
        seed = (seed * 1664525 + 1013904223) % 4294967296;
        return seed / 4294967296;
    }

    var walker = document.createTreeWalker(sheet, NodeFilter.SHOW_TEXT, {
        acceptNode: function (n) {
            if (!n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
            if (n.parentNode.closest('.stamp, .sig')) return NodeFilter.FILTER_REJECT;
            return NodeFilter.FILTER_ACCEPT;
        }
    });

    var nodes = [];
    var n;
    while ((n = walker.nextNode())) nodes.push(n);

    nodes.forEach(function (node) {
        var text = node.nodeValue.replace(/\s+/g, ' ');
        var frag = document.createDocumentFragment();
        for (var i = 0; i < text.length; i++) {
            var ch = text[i];
            if (ch === ' ') {
                frag.appendChild(document.createTextNode(' '));
                continue;
            }
            var s = document.createElement('span');
            s.className = 'ch';
            s.textContent = ch;
            s.style.opacity = (0.72 + rand() * 0.28).toFixed(2);
            s.style.top = ((rand() - 0.5) * 1.2).toFixed(2) + 'px';
            frag.appendChild(s);
        }
        node.parentNode.replaceChild(frag, node);
    });
})();

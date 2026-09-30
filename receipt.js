(function () {
    // Print today's date and time on the receipt.
    var d = new Date();
    function pad(n) { return (n < 10 ? '0' : '') + n; }
    var date = document.getElementById('date');
    if (date) {
        date.textContent = pad(d.getDate()) + '/' + pad(d.getMonth() + 1) + '/' + d.getFullYear() +
            ' ' + pad(d.getHours()) + ':' + pad(d.getMinutes());
    }

    // Draw a barcode from a string (deterministic, decorative).
    var svg = document.getElementById('barcode');
    if (!svg) return;
    var code = '0XSAUD-RESEARCH-2026';
    var bars = [];
    var x = 0;
    for (var i = 0; i < code.length; i++) {
        var c = code.charCodeAt(i);
        for (var b = 0; b < 4; b++) {
            var w = 1 + ((c >> b) & 1) + ((c >> (b + 3)) & 1);   // 1..3
            var gap = 1 + ((c >> (b + 1)) & 1);                  // 1..2
            bars.push('<rect x="' + x + '" y="0" width="' + w + '" height="52"/>');
            x += w + gap;
        }
    }
    svg.setAttribute('viewBox', '0 0 ' + x + ' 52');
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.innerHTML = '<g fill="#262626">' + bars.join('') + '</g>';
})();

(function () {
    var viewer = document.getElementById('viewer');
    if (!viewer || typeof viewer.showModal !== 'function') return;

    var img = viewer.querySelector('img');
    var title = viewer.querySelector('.viewer-title');
    var sub = viewer.querySelector('.viewer-sub');
    var links = Array.prototype.slice.call(document.querySelectorAll('#certs a.what'));
    var at = 0;

    function show(i) {
        at = (i + links.length) % links.length;
        var a = links[at];
        var s = a.querySelector('.sub');
        img.src = a.getAttribute('href');
        title.textContent = a.firstChild.textContent.trim();
        sub.textContent = s ? s.textContent : '';
        img.alt = title.textContent + ' certificate';
    }

    links.forEach(function (a, i) {
        a.addEventListener('click', function (e) {
            e.preventDefault();
            show(i);
            viewer.showModal();
        });
    });

    viewer.querySelector('.viewer-close').addEventListener('click', function () { viewer.close(); });
    viewer.querySelector('.viewer-prev').addEventListener('click', function () { show(at - 1); });
    viewer.querySelector('.viewer-next').addEventListener('click', function () { show(at + 1); });

    viewer.addEventListener('click', function (e) { if (e.target === viewer) viewer.close(); });

    viewer.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') show(at - 1);
        else if (e.key === 'ArrowRight') show(at + 1);
    });
})();

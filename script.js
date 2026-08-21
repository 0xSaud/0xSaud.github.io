(function () {
    var root = document.documentElement;
    var toggle = document.getElementById('themeToggle');
    var stored = localStorage.getItem('theme');
    var prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    var initial = stored || (prefersLight ? 'light' : 'dark');

    if (initial === 'light') {
        root.setAttribute('data-theme', 'light');
    }

    if (toggle) {
        toggle.addEventListener('click', function () {
            var isLight = root.getAttribute('data-theme') === 'light';
            if (isLight) {
                root.removeAttribute('data-theme');
                localStorage.setItem('theme', 'dark');
            } else {
                root.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            }
        });
    }
})();
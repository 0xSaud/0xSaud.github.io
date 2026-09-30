(function () {
    var root = document.documentElement;
    var toggle = document.getElementById('themeToggle');
    if (!toggle) return;

    toggle.addEventListener('click', function () {
        var isDark = root.getAttribute('data-theme') === 'dark';
        if (isDark) {
            root.removeAttribute('data-theme');
            try { localStorage.setItem('theme', 'light'); } catch (e) {}
        } else {
            root.setAttribute('data-theme', 'dark');
            try { localStorage.setItem('theme', 'dark'); } catch (e) {}
        }
    });
})();

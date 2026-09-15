# 0xsaud.github.io

Personal site for Saud Alanazi — penetration tester and bug hunter.
Static HTML, CSS and JavaScript with no build step; GitHub Pages serves the
repository root as-is.

**Live:** https://0xsaud.github.io/

## Files

| Path | Purpose |
| --- | --- |
| `index.html` | English page (LTR) |
| `ar.html` | Arabic page (RTL) — same structure, translated content |
| `style.css` | The whole stylesheet, shared by both languages |
| `script.js` | Theme toggle, scroll-spy, certificate lightbox, scroll reveal |
| `404.html` | Not-found page served by GitHub Pages |
| `favicon.svg` | Icon; adapts to the visitor's light/dark preference |
| `robots.txt`, `sitemap.xml` | Crawler hints |
| `Cert/` | Certificate images |

## How it works

**Two pages, one stylesheet.** Each language is its own static document so that
search engines index both and neither depends on JavaScript to render. They are
cross-linked with `hreflang`, and `index.html` is the `x-default`.

**Direction.** Layout is written with CSS logical properties
(`margin-inline`, `border-block-start`, `inset-inline-start`, …), so `ar.html`
mirrors correctly from `dir="rtl"` alone — there is no separate RTL stylesheet.
`html[dir="rtl"]` only flips the two directional gradients. Arabic overrides its
own font stack, because Fraunces has no Arabic coverage.

**Theming.** Colours are custom properties on `:root`, re-declared under
`:root[data-theme="light"]`. A small inline script in `<head>` sets the
attribute before first paint so the theme never flashes; `script.js` handles the
toggle and keeps following the OS setting until the visitor picks one. All text
meets WCAG AA contrast in both themes.

**Progressive enhancement.** Every enhancement degrades: certificate cards are
ordinary links to the images and the lightbox only intercepts them if `<dialog>`
is supported; the reveal animation is applied by `script.js` itself, so a
blocked or failed script leaves the page fully readable rather than blank.
`prefers-reduced-motion` disables motion throughout.

## Editing

**Add a certificate** — drop the image in `Cert/`, then copy one `<li>` in the
`.cert-grid` of *both* pages, updating `href`, `src`, `width`/`height`,
`alt`, `data-lightbox` and the title. Also add an entry to `hasCredential` in
the JSON-LD block at the bottom of `index.html`.

**Publish a write-up** — replace the `.note` placeholder in the `#writeups`
section with the `.post-list` markup shown in the HTML comment beside it.
The styles for it are already in `style.css` under *Write-ups*.

**Keep the two languages in step.** Any structural change to `index.html`
should be mirrored in `ar.html`.

## Local preview

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

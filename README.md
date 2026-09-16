# SynesisLab Website

Static site for the SynesisLab GitHub organization — https://github.com/SynesisLab

Minimalist, bilingual (English / 繁體中文), zero dependencies, zero build step,
zero network requests — no web fonts, no images, no tracking. System fonts only.

## Deploy to GitHub Pages (org root domain)

Create a new repository named **`SynesisLab.github.io`** under the org, then push these files:

```bash
cd synesislab-site
git init
git add -A
git commit -m "SynesisLab site"
git branch -M main
git remote add origin https://github.com/SynesisLab/SynesisLab.github.io.git
git push -u origin main
```

The site goes live at **https://synesislab.github.io** within a minute or two
(Pages deploys automatically for the `<org>.github.io` repo — no settings change needed).

### Alternative: project subpath

Push these files to any existing repo's `main` branch and enable
**Settings → Pages → Deploy from branch → main / (root)**.
The site uses only relative paths, so it also works under a subpath
(`https://synesislab.github.io/<repo>/`).

## Local preview

```bash
python3 -m http.server 8090
# → http://localhost:8090
```

## Files

- `index.html` — all content, with `data-en` / `data-zh` attributes for the language toggle
- `styles.css` — monochrome light theme + automatic dark mode via `prefers-color-scheme`
- `script.js` — EN/繁中 toggle only (persists in localStorage)
- `.nojekyll` — skips Jekyll processing (harmless, keeps things predictable)
# Ayush Dubey — Portfolio

Static site. No build step, no framework — just `index.html`, `style.css`, `script.js`, and `assets/photo.jpg`.

## Deploy on GitHub Pages (free)

1. Create a new repo on GitHub, e.g. `ayush-dubey-04/portfolio`.
2. Upload all files in this folder (keep the `assets/` folder intact — don't rename `photo.jpg`).
3. Go to the repo's **Settings → Pages**.
4. Under "Build and deployment", set **Source: Deploy from a branch**, branch: `main`, folder: `/ (root)`.
5. Save. GitHub gives you a live URL in a minute or two, usually:
   `https://ayush-dubey-04.github.io/portfolio/`

## Editing later

- Text/content → edit `index.html` directly.
- Colors/fonts/spacing → `style.css` (custom properties are at the top of the file under `:root`).
- Terminal animation text → `script.js`, the `lines` array at the top.

## Notes

- Phone number is intentionally left off — a public portfolio page gets scraped, and a public phone number becomes spam/scam bait. Email + LinkedIn is enough for recruiters to reach you.
- Swap `assets/photo.jpg` with a new file of the same name to update your photo without touching any code.

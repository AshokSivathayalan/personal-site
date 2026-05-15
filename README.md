# AshokSivathayalan.github.io

Personal website. Plain HTML, CSS, and a sprinkle of vanilla JavaScript — no build step, no dependencies. Deployed via GitHub Pages from the root of the `main` branch.

## What's here

```
/
├── index.html              # Home / About
├── projects.html           # Projects index
├── tools.html              # Small side tools / utilities
├── experience.html         # CV-style page
├── publications.html       # Publications & posters
├── 404.html                # Custom 404
├── .nojekyll               # Disable Jekyll on GitHub Pages
├── assets/
│   ├── css/style.css       # Single stylesheet, themed via CSS custom properties
│   ├── js/main.js          # Theme toggle + footer year
│   ├── img/favicon.svg     # SVG favicon
│   └── docs/               # PDFs (CV, posters) — drop your files here
└── README.md
```

## First-time setup: fill in the placeholders

Every page uses `{{PLACEHOLDER}}` tokens for personal info. Replace them with a single find-and-replace pass across the repo:

| Placeholder              | Example                                  |
| ------------------------ | ---------------------------------------- |
| `Ashok Sivathayalan`          | `Jane Doe`                               |
| `ashok.sivathayalan@gmail.com`              | `jane@example.com`                       |
| `AshokSivathayalan`    | `janedoe`                                |
| `ashsiva`    | `jane-doe` (the part after `/in/`)       |
| `{{PAPERIO_REPO_URL}}`   | `https://github.com/janedoe/paperio-rl`  |
| `{{WILDFIRE_REPO_URL}}`  | `https://github.com/janedoe/wildfire`    |
| `{{CV_PDF_PATH}}`        | `/assets/docs/cv.pdf` (default)          |
| `{{WILDFIRE_POSTER_PDF}}`| `/assets/docs/wildfire-poster.pdf`       |
| `{{TWIN_CITIES_URL}}`    | `https://example.com/twin-cities`        |
| `{{TWIN_CITIES_REPO_URL}}` | `https://github.com/janedoe/twin-cities` (optional) |
| `{{CYRILLIC_URL}}`       | `https://example.com/cyrillic`           |
| `{{CYRILLIC_REPO_URL}}`  | `https://github.com/janedoe/cyrillic` (optional) |

`2026` in the footer is replaced at runtime by `main.js`, so leave it alone.

## Preview locally

Open `index.html` directly in your browser, or serve the directory:

```bash
python3 -m http.server
# then visit http://localhost:8000
```

Use a local server (not `file://`) if you want absolute paths like `/assets/css/style.css` to resolve the same way they will on GitHub Pages.

## Deploying to GitHub Pages (username site)

1. Create a repo on GitHub named exactly `<username>.github.io`.
2. Push the contents of this directory to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<username>/<username>.github.io.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**. Confirm the source is **Deploy from a branch**, branch **`main`**, folder **`/ (root)`**.
4. Wait 1–2 minutes. The site goes live at `https://<username>.github.io`.

The empty `.nojekyll` file at the repo root tells GitHub Pages to serve files as-is without running Jekyll.

## Maintaining the site

- **Add a project:** open `projects.html` and copy an existing `<article class="project-card">` block. There's a `TODO` comment marking the insertion point. *Use this for substantial work you designed and built.*
- **Add a tool:** open `tools.html` and copy an existing `<article class="tool-card">` block. *Use this for small side things you mostly built with Claude from an idea — kept separate from projects on purpose.*
- **Add a publication:** open `publications.html` and add a `<li>` to the `.pub-list` ordered list. There's a `TODO` comment at the bottom.
- **Add a work / TA / research entry:** open `experience.html` and replace the `.cv-placeholder` block with `.cv-entry` blocks following the Education entry as a template.
- **Update the CV:** drop the file at `assets/docs/cv.pdf` (or change the link target if you prefer a different name).
- **Tweak colors / typography:** edit the CSS custom properties at the top of `assets/css/style.css`. The `:root` block is light mode; `[data-theme="dark"]` is dark mode.

## Custom domain (later, optional)

If you want to point a custom domain at the site, add a `CNAME` file at the repo root containing just the domain (e.g. `janedoe.com`) and configure DNS per GitHub's instructions. Not included by default.

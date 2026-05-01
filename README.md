# dimasadyaksa.github.io

Personal website for Dimas Adiyaksa — backend & infrastructure engineer.

A static, single-author site. No build step, no Node, no Ruby. Just push to a GitHub repo named `<your-username>.github.io` and it's live.

The visual direction is **minimalist · journal · Apple-inspired** — light by default, with system-aware dark mode and a manual theme toggle. Body prose is set in Newsreader (a serif tuned for screens); UI is set in the system font stack so it picks up SF Pro on Apple devices and Inter or system defaults elsewhere.

## Structure

```
.
├── index.html              # About / Bio (homepage)
├── cv.html                 # Curriculum Vitae
├── projects.html           # Selected projects
├── blog.html               # Writings index
├── posts/
│   └── welcome.html        # Sample essay
├── 404.html                # Custom not-found page
├── assets/
│   ├── css/style.css       # The whole stylesheet — light + dark, no preprocessor
│   └── js/main.js          # Theme toggle + nav active state (~1.5 KB)
├── .nojekyll               # Tells GitHub Pages to skip Jekyll
└── README.md
```

## Deploying to GitHub Pages

A user/organization site at `https://dimasadyaksa.github.io`:

```bash
# Inside this folder:
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/dimasadyaksa/dimasadyaksa.github.io.git
git push -u origin main
```

Then in the repo on GitHub, open **Settings → Pages**, confirm the source is **Deploy from a branch**, branch **main**, folder **`/ (root)`**. The site is live within ~30 seconds.

If you'd rather host as a project page (e.g. `https://<user>.github.io/<repo>/`), use any repo name. All internal links are relative, so it works without changes.

## Local preview

You don't need a build tool — just serve the files over HTTP:

```bash
# Python 3
python3 -m http.server 4000

# or Node
npx serve .
```

Then open http://localhost:4000.

## Customizing

**The palette and type live as CSS custom properties** at the top of `assets/css/style.css` under `:root` (light mode) and `[data-theme="dark"]` (dark mode). Change `--accent`, `--bg`, `--ink`, etc. and the rest of the site updates.

**Add a blog post:** copy `posts/welcome.html` to `posts/<slug>.html`, edit the title, date, and body, then add a row to the `<ul class="notes">` in `blog.html`.

**Custom domain:** add a `CNAME` file at the repo root containing your domain on a single line (no protocol), then point your DNS at GitHub Pages per their [docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

**Why no Jekyll?** GitHub Pages runs Jekyll by default for any repo without a `.nojekyll` marker. Since this site is hand-written HTML and doesn't need Liquid templating, the marker tells Pages to serve files as-is — faster builds and one fewer thing to debug. The structure is friendly to a future Jekyll migration if you ever want tag pages or RSS.

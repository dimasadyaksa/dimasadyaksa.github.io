# dimasadyaksa.github.io

Personal website for Dimas Adiyaksa — backend & infrastructure engineer.

A static, single-author site built with hand-written HTML & CSS. No build step, no Node, no Ruby. Drop the files into a GitHub repo named `<your-username>.github.io`, push, and it's live.

## Structure

```
.
├── index.html         # About / Bio (homepage)
├── cv.html            # Curriculum Vitae
├── projects.html      # Selected projects
├── blog.html          # Writings index
├── posts/
│   └── welcome.html   # Sample essay
├── 404.html           # Custom not-found page
├── assets/
│   └── css/
│       └── style.css  # Dark academia stylesheet
├── .nojekyll          # Tells GitHub Pages to skip Jekyll processing
└── README.md
```

## Deploying to GitHub Pages

The simplest path — a user/organization site at `https://<username>.github.io`:

1. Create a new public repository named exactly `<your-username>.github.io` (e.g. `dimasadyaksa.github.io`).
2. From inside this folder, initialize and push:

   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```

3. In the repo on GitHub, open **Settings → Pages**. Confirm the source is set to **Deploy from a branch**, branch **main**, folder **`/ (root)`**.
4. Wait ~30 seconds. Your site will be live at `https://<your-username>.github.io`.

If you'd rather host as a project page (e.g. `https://<username>.github.io/personal-site/`), use any repo name and enable Pages the same way — the site will work without changes since all internal links are relative.

## Local preview

You don't need a build tool, but you do need to serve the files over HTTP (browsers block some `file://` behavior). Either of these works:

```bash
# Python 3
python3 -m http.server 4000

# Node (if you have npx)
npx serve .
```

Then open http://localhost:4000.

## Customizing

**Add a new blog post:** copy `posts/welcome.html` to `posts/<slug>.html`, edit the title, date, and body, then add a row to the `<ul class="posts">` in `blog.html`.

**Tweak the palette:** all colors live as CSS custom properties at the top of `assets/css/style.css` under `:root` — change `--accent`, `--bg`, `--ink`, etc., and the rest of the site updates.

**Add a real avatar:** replace the `<div class="profile__avatar">DA</div>` block in `index.html` with `<img class="profile__avatar" src="assets/img/me.jpg" alt="Dimas Adiyaksa" />` and drop the image at that path. The CSS already styles the round border for either case.

**Custom domain:** add a `CNAME` file at the repo root containing your domain (one line, no protocol) and point your DNS at GitHub Pages per their [docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Why no Jekyll?

GitHub Pages will run Jekyll by default for any repo without a `.nojekyll` marker. Since this site is hand-written HTML and doesn't need Liquid templating, the `.nojekyll` file tells Pages to serve the files as-is — faster builds and one fewer thing to debug.

If you later want to convert this to Jekyll (for tag pages, RSS, etc.), the structure is friendly to that migration.

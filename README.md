# PingSorted — marketing site

The public marketing site for PingSorted (WhatsApp AI ordering + restaurant
operations platform). Plain HTML/CSS/JS, no build step — deployed via
GitHub Pages straight from this repo.

## Structure

- `index.html` — the whole site (single page)
- `assets/styles.css` — design system + all styling
- `assets/script.js` — mobile nav toggle, footer year

## Local preview

```
python3 -m http.server 8899
```
then open `http://localhost:8899/`.

## Deploying

Pushing to `main` redeploys automatically via GitHub Pages
(Settings → Pages → Deploy from branch → `main` / `/root`).

Once the `pingsorted.com` domain is registered, add a `CNAME` file at the
repo root containing just the domain, and point its DNS at GitHub Pages.

## Legal

PingSorted is a trading name of NEEVGLOBALS LTD (Company No. 17424409),
registered in England and Wales — see the site footer.

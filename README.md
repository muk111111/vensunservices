# Vensun Global Services — Corporate Website

Static, dependency-free website for **Vensun Global Services** — *Your Supply Chain. One Reliable Partner.*
Built to be hosted on GitHub Pages at **https://vensunservices.com** (no `github.io` in the URL).

## Pages

| File | Page |
|---|---|
| `index.html` | Home — hero, capability strip, intro, 8 services, how we work, industries, why Vensun, CTA |
| `about.html` | About Us — who we are, vision / mission / approach, values, capabilities |
| `services.html` | Services — all 8 service lines in detail (anchors: `#trading`, `#packaging`, `#manpower`, `#logistics`, `#warehousing`, `#fulfilment`, `#infrastructure`, `#supply-chain`) |
| `industries.html` | Industries We Serve — 8 industry cards |
| `why-vensun.html` | Why Vensun — 6 differentiators + process flow |
| `contact.html` | Contact Us — enquiry form + phone / email / address / business hours |
| `404.html` | Not-found page (served automatically by GitHub Pages) |

Supporting files: `assets/css/styles.css`, `assets/js/main.js` (nav + reveal), `assets/js/form.js` (enquiry form),
`assets/img/favicon.svg`, `assets/img/og-image.svg`, `sitemap.xml`, `robots.txt`, `CNAME`, `.nojekyll`.

Header and footer markup is repeated in each HTML file (plain static site, no build step) — if you change a nav
link or a phone number, update it in all pages.

## Things to fill in before going live

These are placeholders — search and replace across all files:

1. **Phone** — `+91 00000 00000` and the link `tel:+910000000000` (footer + contact page).
2. **WhatsApp number** — `WHATSAPP_NUMBER` at the top of `assets/js/form.js`, and the two
   `https://wa.me/910000000000` links in `contact.html`. Format: country code + number, digits only.
3. **Email** — `info@vensunservices.com`.
4. **Office address** — `Corporate Office Address Line 1 / Area, City, State — PIN Code` in `contact.html`
   and the footer of every page.
5. **Business hours** — currently `Mon – Sat: 9:30 AM – 6:30 PM`.
6. **Organization schema** — address/phone block at the bottom of `index.html` (JSON-LD).

## Photography

Section and banner photos are loaded from the Unsplash CDN (free to use, no attribution required) and are
declared as CSS backgrounds in `assets/css/styles.css` (`.hero`, `.ph-*`, `.media-*`, `.cta`).
Each one sits on a navy gradient, so if an image ever fails to load the layout still looks intentional.

To use your own photos instead: drop the files into `assets/img/` and change the matching `url(...)` in
`assets/css/styles.css` to e.g. `url("../img/warehouse.jpg")`. Keep JPEGs under ~300 KB.

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Hosting (GitHub Pages + custom domain)

1. Create an **empty public repo** on the GitHub account that will own the site.
2. Push this folder to its `main` branch.
3. Repo → **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main`, folder `/ (root)`.
4. Same page → **Custom domain** → enter `vensunservices.com` → Save, then tick **Enforce HTTPS**
   (available once the certificate is issued, usually a few minutes to an hour).
5. At your domain registrar, point DNS at GitHub:

   **Apex domain `vensunservices.com` — four A records (and optionally the AAAA records for IPv6):**

   | Type | Name | Value |
   |---|---|---|
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | CNAME | `www` | `<github-username>.github.io` |

   The `CNAME` file in this repo already contains `vensunservices.com`, which is what makes the site
   answer on the custom domain instead of `<username>.github.io`. Don't delete it.

6. DNS can take 30 minutes to a few hours to propagate. Check with:
   `dig vensunservices.com +short`


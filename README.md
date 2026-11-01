# Gelmatic UK website

Next.js homepage for gelmatic.co.uk, styled with the design tokens from icecreamvanspares.co.uk.
Built as a static export and hosted on Cloudflare Workers (static assets), deployed from GitHub.

- **Dev site:** https://gelmatic-website.justin-b8f.workers.dev
- Every push to `main` rebuilds and redeploys automatically (Cloudflare Workers Builds).

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run preview    # production build served by wrangler, as on Cloudflare
```

## Cloudflare setup (one-off)

Cloudflare dashboard → **Workers & Pages** → **Create** → **Import a repository** → choose
`broadlanddigital2/gelmatic-website`, then:

| Setting | Value |
|---|---|
| Project name | `gelmatic-website` (must match `name` in `wrangler.jsonc`) |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Production branch | `main` |

To go live later, add `gelmatic.co.uk` under the Worker's **Settings → Domains & Routes**.

## Structure

- `app/page.tsx` – the page (header, hero, feature strip, machines, parts, trusted-by)
- `app/globals.css` – all styling, design tokens at the top in `:root`
- `app/layout.tsx` – font + metadata
- `components/Icons.tsx` – Gelmatic swirl mark and button arrows
- `public/images/` – photos and icons
- `wrangler.jsonc` – Cloudflare config (serves the `out/` folder that `npm run build` produces)

## Design tokens (from icecreamvanspares.co.uk)

| Token | Value |
|---|---|
| Background (cream) | `#f2f1ea` |
| Foreground / dark bands | `#242021` |
| Accent green (buttons, ticks) | `#86bb48` |
| Hover brown | `#8b5e3c` |
| Content width | `1400px` |
| Header | 6px dark rule top and bottom |
| Buttons | square corners, white bold uppercase on green |

**Font:** the reference site uses the licensed *Franklin Gothic ATF*. This project uses **Libre Franklin**
(Google Fonts) by default. Put licensed `FranklinGothicATF-Bold.woff2` / `.woff` files in `public/fonts/`
and they're picked up automatically.

## Still to do

- `e-pronto.jpg`, `hero-machine.jpg` and `van.jpg` are cropped from the design mockup: swap in full-resolution originals (same file names).
- Link targets (`/shop`, `/machines`, `/parts`, machine pages) and the Instagram URL are placeholders.

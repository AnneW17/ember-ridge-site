# Ember Ridge

A ministry of **Firebrand Revivalists** · Moravian Falls, North Carolina

> Ember Ridge exists to tend the fire God has entrusted to His people. It is a
> house that ministers first to the Lord, restores people who carry great
> responsibility, and sends them back strengthened for the work of the Kingdom.

A 16-page static site built with **Astro 5 + Tailwind CSS v4**. No client-side
framework, ~55 KB of CSS, ~2 KB of JavaScript, self-hosted fonts, no third-party
trackers.

**New here? Read `HANDOFF.md` first** — it explains where the project stands and
what is still open.

---

## 1. Sitemap

| # | Page | Route | Main nav | Footer |
|---|------|-------|----------|--------|
| 1 | Home | `/` | Home | yes |
| 2 | The Vision | `/vision` | Vision | yes |
| 3 | The Story | `/story` | Story | yes |
| 4 | The House of Prayer | `/house-of-prayer` | — | yes |
| 5 | The Place | `/the-place` | — | yes |
| 6 | The Ministry Model | `/ministry-model` | Ministry | yes |
| 7 | The Campus Vision | `/campus-vision` | Campus | yes |
| 8 | Leadership & Accountability | `/leadership` | Leadership | yes |
| 9 | Financial Stewardship | `/financial-stewardship` | — | yes |
| 10 | Partner With Us | `/partner` | Partner + CTA button | yes |
| 11 | Contact | `/contact` | Contact | yes |
| 11b | Remodel & Grounds | `/remodel-and-grounds` | — | yes |
| 12 | Privacy Policy | `/legal/privacy-policy` | — | legal row |
| 13 | Terms of Use | `/legal/terms-of-use` | — | legal row |
| 14 | Cookie Notice | `/legal/cookie-notice` | — | legal row |
| 15 | Disclaimer | `/legal/disclaimer` | — | legal row |
| 16 | Accessibility Statement | `/legal/accessibility-statement` | — | legal row |

Plus two utility pages: `/contact/thank-you` (Netlify form success) and `/404`.

**Navigation logic.** The main menu carries the eight pages specified in the
brief. *The House of Prayer*, *The Place* and *Financial Stewardship* are reached
from the footer and from contextual in-page links on Home, Vision, Campus and
Leadership — this keeps the top bar calm while leaving every page two clicks
away. `Partner With Us` also appears as the gold CTA button in the header on
every page. Legal pages appear **only** in the footer.

---

## 2. Architecture and folder structure

```
ember-ridge/
├── HANDOFF.md                # start here — status and decisions
├── README.md                 # this file
├── DESIGN-SYSTEM.md          # palette, type, components, motion
├── CONTENT-OUTLINE.md        # page-by-page copy outline + SEO metadata
├── REVIEW-CHECKLIST.md       # 31 open items before launch
├── astro.config.mjs          # site URL, sitemap, Tailwind via Vite plugin
├── netlify.toml              # build command, headers, redirects
├── package.json
├── .nvmrc                    # Node 20
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/
│       ├── ember-ridge-logo.png        # original (light backgrounds / print)
│       ├── ember-ridge-logo-dark.png   # cream + gold version used on the site
│       ├── ember-ridge-mark.png        # circular mark — social share image
│       ├── firebrand-logo.png          # original
│       ├── firebrand-logo-dark.png     # used in the footer attribution
│       └── leadership/
│           ├── shannon-suttles.jpg
│           ├── jason-suttles.jpg
│           ├── anne-whaley.jpg
│           └── placeholder-portrait.svg  # swap in Mark Burgett's portrait
└── src/
    ├── styles/
    │   └── global.css        # ← THE DESIGN SYSTEM. All tokens live here.
    ├── data/
    │   ├── site.ts           # org name, contact details, all three nav arrays
    │   └── leadership.ts     # names, titles, summaries, bios, photo paths
    ├── layouts/
    │   ├── BaseLayout.astro  # head/SEO/schema, skip link, header, footer, reveal observer
    │   └── LegalLayout.astro # cream policy shell + standing "needs review" banner
    ├── components/
    │   ├── Header.astro          Footer.astro
    │   ├── HomeHero.astro        PageHero.astro
    │   ├── Section.astro         SectionHeading.astro    Prose.astro
    │   ├── Card.astro            Callout.astro           PullQuote.astro
    │   ├── Reveal.astro          ReviewNote.astro
    │   ├── LeadershipTeam.astro  CapitalTable.astro
    │   ├── ContactForm.astro     CTASection.astro
    └── pages/                # one file per route (see sitemap above)
```

**Where to edit what**

| To change… | Edit |
|---|---|
| Email addresses, location, nav order | `src/data/site.ts` |
| Leader names, titles, bios, portraits | `src/data/leadership.ts` |
| Colors, type scale, buttons, cards, spacing | `src/styles/global.css` |
| Capital planning figures | `src/components/CapitalTable.astro` |
| Any page's words | that page's file in `src/pages/` |

---

## 3. Local development

```bash
nvm use            # Node 20
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
npm run preview    # serve the production build locally
```

---

## 4. Netlify + GitHub

### First-time setup

```bash
git init
git add .
git commit -m "Ember Ridge — initial site"
git branch -M main
git remote add origin https://github.com/<your-org>/ember-ridge.git
git push -u origin main
```

Then in Netlify: **Add new site → Import an existing project → GitHub →
ember-ridge**. `netlify.toml` already declares everything, so accept the
defaults:

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 20 (set via `netlify.toml` and `.nvmrc`)

Every push to `main` redeploys. Every pull request gets its own Deploy Preview
URL — useful for letting counsel review the legal pages before they go live.

### Before launch

1. **Domain.** Netlify → Domain management → add the confirmed domain. Netlify
   provisions the TLS certificate automatically.
2. **Update `site` in `astro.config.mjs`** to the real domain. This drives
   canonical URLs, `sitemap-index.xml` and social share tags.
3. **Update the sitemap line in `public/robots.txt`** to match.
4. **Forms — route submissions to the ministry inbox.** The contact form uses
   Netlify Forms, so there is nothing to configure in code. The destination
   address is a dashboard setting and must be set once after the first deploy:

   > Netlify → **Site configuration** → **Forms** → **Form notifications**
   > → **Add notification** → **Email notification**
   > → Event: `New form submission` · Form: `ember-ridge-inquiry`
   > → Email to notify: `info@firebrandrevivalists.com`

   Submissions are also stored in the dashboard under **Forms**, so nothing is
   lost if the email is misconfigured. A honeypot field is already enabled; add
   reCAPTCHA in the same panel if spam becomes an issue.
5. **Password-protect the site** while it is in review (Netlify → Site
   configuration → Access control), so the draft legal pages are not public.

### Deploy without Git (drag and drop)

Run `npm run build`, then drag the `dist` folder onto
[app.netlify.com/drop](https://app.netlify.com/drop). Use this for a quick
preview; the GitHub connection is the maintainable path.

---

## 5. SEO metadata

`BaseLayout.astro` generates the title, description, canonical URL, Open Graph
and Twitter card tags, and `Organization` JSON-LD from two props per page. Every
page already passes a hand-written `title` and `description` — see
`CONTENT-OUTLINE.md` for the full table.

Titles render as `Page · Ember Ridge`; the home page renders as
`Ember Ridge — A house that ministers first to the Lord.`

**To add.** Purpose-built social share images (1200×630) per page. Drop them at
`public/images/og/<page>.jpg` and pass `ogImage="/images/og/<page>.jpg"` to
`BaseLayout`. Until then, every page shares the circular Ember Ridge mark.

---

## 6. Accessibility

Verified in this build:

- One `<h1>` per page; headings in order; `<header>`, `<main>`, `<footer>`, `<nav aria-label>` landmarks
- "Skip to main content" as the first focusable element on every page
- Gold `:focus-visible` ring at 2px with 3px offset on every interactive element
- Mobile menu and bio disclosures fully keyboard operable; Escape closes the menu
- `aria-expanded` / `aria-controls` on both disclosure patterns
- All decorative images and SVGs `aria-hidden` or `alt=""`; meaningful images described
- Capital table uses `<caption>`, `scope="col"`, `scope="row"`, and a keyboard-focusable scroll region
- All motion disabled under `prefers-reduced-motion: reduce`
- Text contrast measured against WCAG AA — body copy 10.5:1, muted 5.4:1, gold accent 8.2:1, gold-on-black buttons 8.2:1, legal pages 7.1:1

Re-test after launch with a screen reader and Lighthouse; note results in
`/legal/accessibility-statement`.

---

## 7. Open items before launch

See `REVIEW-CHECKLIST.md`. In short: every legal page is a **draft awaiting
counsel**, all four leadership bios await each leader's own approved text, Mark
Burgett's portrait is a placeholder, and contact addresses are placeholders.
Search the repo for `TODO`, `Needs review`, and `ReviewNote` to find all of them.

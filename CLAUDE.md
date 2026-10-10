# WISERMAX HN — Website redesign brief

**Reference implementation**: `reference/wisermax-e-atelier.html` (static HTML, opens standalone in browser — treat this as the source of truth for layout, spacing, copy).

---

## 1 · Project context

- **Client**: Wisermax HN (Wiser Max HN Company Limited), garment manufacturer in Gia Lam, Hanoi. Est. 2014.
- **Current site**: `wisermaxhn.com` — a Nuxt SSR site deployed on Vercel Hobby. Design is dated; SEO is broken; site does not rank for US/EU buyer queries.
- **Goal**: Redesign as a refined "atelier" (workshop) landing page targeting **US and EU brand buyers / sourcing managers**. Ship it, then fix SEO.
- **Position**: quiet, materials-focused, credible — not a startup, not a cheap sweatshop. Reference: Loro Piana / Vitale Barberis Canonico / Kaihara Denim "About" pages.
- **Non-goals**: don't redesign as a fashion brand site; don't chase design-award trends (heavy motion, gradients, 3D). Buyers value legibility and specificity.

---

## 2 · Design system

### Palette

```
--paper:    #F5F1E6   /* bone / undyed linen — main background */
--paper-2:  #EFE9D8   /* slightly darker bone — clients band, materials bg */
--card:     #FBF7EC   /* card / swatch background */
--ink:      #231F1A   /* warm dark ink — all body text */
--mute:     #7A7368   /* secondary text, captions, labels */
--rule:     rgba(35,31,26,.14)  /* dividers */
--hair:     rgba(35,31,26,.09)  /* very subtle rules */
--rust:     #B7532F   /* accent — italic emphasis only, used sparingly */
--sage:     #7A886C   /* reserved secondary, not used yet */
```

Rule: `--rust` only appears on italic serif emphasis words (e.g. *atelier*, *ships*, *approved*, *waterproof*, *audited*). Never on buttons except the primary CTA. Never on paragraphs.

### Typography

- **Display / serif**: [Newsreader](https://fonts.google.com/specimen/Newsreader) — variable, use `opsz` axis. Weights 300–600, italic on emphasis.
- **Body / sans**: [Inter](https://fonts.google.com/specimen/Inter). Weights 400–600.
- **No mono**, no third font.

Optical size settings:
- Big display headlines: `font-variation-settings: "opsz" 72`
- Medium (numbers, card headlines): `"opsz" 36–60`
- Body serif quotes: `"opsz" 36`

Load only these weights to keep CSS light:
```html
<link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,300;1,6..72,400;1,6..72,500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

### Spacing & layout

- Max content width: `1320px`
- Horizontal padding: `clamp(24px, 4.5vw, 80px)` — generous on desktop
- Section vertical padding: `clamp(80px, 10vw, 144px)` — generous
- Grid gaps: mostly `12px` for tight card grids, `clamp(28px, 4vw, 72px)` for section splits

### Motion

- Hero entrance only: fade + translateY(16px) → 0, 0.9s ease. Stagger metadata → headline → layout.
- `prefers-reduced-motion: reduce` disables all of it.
- No scroll-triggered animations. No parallax. No hover-anywhere-else motion.

---

## 3 · Page structure (in order)

1. **Header** (sticky, `--paper` bg with 92% alpha + backdrop-blur, 72px tall)
   - Left: brand `Wisermax HN` + `Hanoi` subtitle
   - Center: nav (Capabilities · Materials · By the numbers · FOB & lanes)
   - Right: primary CTA button `Request a quote` (ink bg, hover to rust)

2. **Hero**
   - 4-column metadata row (Est / Port / Trade / MOQ) with hair-line divider below
   - Huge serif headline: *"A garment atelier in Hanoi, running full package for US and EU brands."* — with "atelier" in rust italic
   - Sub layout: serif lede left + CTA buttons right

3. **Photo Plate** — one 16:9 factory photo, full-width within padding. Caption row below in 3 cols (label · italic mid · right meta).

4. **Manifesto band** — centered kicker + big serif quote with *ships* and *approved* in rust italic + signature line.

5. **Specimens** (capabilities) — 2×2 grid of "plate" cards. Each card:
   - Header: `Pl. I · Knit` (mono-uppercase-ish label) + right italic serif label
   - 4:3 product photo
   - Headline with italic accent word in rust
   - Description paragraph
   - Spec `dl` (Monthly capacity / MOQ / Fabrics)

6. **Materials & mills** — 4 swatch cards with **CSS-generated fabric textures** (see HTML for exact backgrounds):
   - M/01 Cotton twill diagonal
   - M/02 Woven ribbing verticals
   - M/03 Outerwear shell diagonal navy
   - M/04 Trims rust polka dots

7. **By the numbers** — 4 big thin-weight serif numbers (`2014 / 6M / 20+ / 100%`) with italic sub, on a bordered strip.

8. **FOB & lanes** — table-styled board with port codes (LAX / LGB / NYC / YVR / RTM / HAM / PUS), destinations with italic sub, transit type, frequency, days.

9. **Clients band** on `--paper-2` — 7 client names in italic serif at ~40px.

10. **Final CTA** — big serif "Send a tech pack. We'll come back with a plan.", CTA row, 3-col contact grid.

11. **Footer** — copyright · nav · tagline.

---

## 4 · SEO keywords to weave in naturally

Do NOT keyword-stuff. Use them in H1/H2/H3, alt text, and descriptive sentences. Already integrated in the reference HTML — preserve when porting.

**Primary**: Vietnam apparel manufacturer · Garment factory in Vietnam · Full package apparel manufacturing Vietnam · Cut and sew manufacturer Vietnam · FOB garment manufacturer Vietnam

**Category**: Custom t-shirt factory Vietnam · Bulk polo shirt manufacturer · Knit dress manufacturer · Woven pants supplier Vietnam · Waterproof jacket manufacturer · Jacket manufacturer Vietnam · Outerwear factory Vietnam · FOB sportswear manufacturer Vietnam with AQL inspection

**Trust / positioning**: OEM clothing factory Vietnam · ODM apparel manufacturer · Private label clothing manufacturer Vietnam · Contract garment manufacturer Vietnam · Reliable apparel sourcing partner in Vietnam · Apparel factory in Vietnam for US brands · Audited clothing factory Vietnam for EU buyers · High capacity garment manufacturer Vietnam

---

## 5 · Technical stack

- **Framework**: Nuxt 3 (matches current site — reuse infra)
- **Rendering**: SSG preferred (`nuxt generate`) for max SEO + edge cacheability. If SSR needed for a form, use `nuxt build --preset=cloudflare_pages`.
- **Hosting**: **Cloudflare Pages** (free, allows commercial use — Vercel Hobby doesn't). Not Vercel.
- **Domain**: `wisermaxhn.com` — keep it, just point DNS at Cloudflare.
- **Fonts**: Google Fonts CDN (Newsreader + Inter, only the subset in §2).
- **Images**: use `<NuxtImg>` with WebP output. Current site images are heavy — recompress before shipping.
- **Icons**: none needed in E-atelier. If required later, use inline SVG.

### Nuxt module setup

```bash
pnpm add -D @nuxtjs/sitemap @nuxtjs/robots @nuxt/image nuxt-schema-org
```

Minimum `nuxt.config.ts` additions:

```ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/sitemap', '@nuxtjs/robots', '@nuxt/image', 'nuxt-schema-org'],
  site: {
    url: 'https://www.wisermaxhn.com',
    name: 'Wisermax HN'
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'canonical', href: 'https://www.wisermaxhn.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ]
    }
  },
  nitro: { prerender: { crawlLinks: true, routes: ['/'] } }
})
```

### SEO must-haves (currently missing on the live site — fix them in this rebuild)

- Title: `WISERMAX HN — Garment manufacturer & ODM atelier, Hanoi` (unique per page)
- Meta description: written per page, ≤160 chars, contains one primary keyword
- H1: exactly one, at top of `<main>`
- Canonical: `<link rel="canonical">`
- OG tags: `og:title`, `og:description`, `og:image` (a factory photo, 1200×630)
- JSON-LD: `Organization` schema with legal name, address, sameAs (LinkedIn), founder, foundingDate, contactPoint
- `robots.txt`: allow all except drafts; sitemap URL at bottom
- `sitemap.xml`: generated by @nuxtjs/sitemap
- Alt text on every `<img>` / background image — use the keywords naturally

---

## 6 · Component split (suggestion)

```
components/
  layout/
    SiteHeader.vue
    SiteFooter.vue
  hero/
    HeroBrief.vue          # metadata row + headline + CTA
    HeroPlate.vue          # the 16:9 factory photo + museum caption
  sections/
    ManifestoBand.vue
    SpecimenGrid.vue       # capabilities
    MaterialsStrip.vue     # swatch cards
    FiguresBlock.vue       # by the numbers
    LanesBoard.vue         # FOB shipping table
    ClientsBand.vue
    FinalCTA.vue
  cards/
    SpecimenCard.vue       # one plate; used 4× in SpecimenGrid
    SwatchCard.vue         # one material; used 4× in MaterialsStrip
```

Content lives in `content/` or `assets/data/` as JSON so it's easy to translate later if needed:

```
content/
  specimens.json   # 4 capability cards
  materials.json   # 4 swatches
  lanes.json       # 7 shipping rows
  clients.json     # 7 client names
```

---

## 7 · Content — copy to use verbatim

Every string used in the reference HTML is production-ready English. Don't rewrite — use as-is. If you translate the site later (Vietnamese, Korean), add a `/vi`, `/ko` route later; English stays the primary market.

Placeholders to confirm with the client before publishing:
- Tax code (Vietnamese business ID)
- Exact partner-factory count per province (currently a working guess)
- Certifications actually held (BSCI / WRAP / OEKO-TEX — confirm before writing them)
- Contact emails (`info@wiser.vn`, `helen@wiser.vn`) — confirm
- Client logos permission (currently listed as text: Calvin Klein, Tommy Hilfiger, DKNY, Karl Lagerfeld, Guess, Huckberry, CJ Home Shopping)

---

## 8 · Implementation order

1. Scaffold Nuxt 3 project + install modules from §5
2. Set up global CSS with the design tokens from §2
3. Load Newsreader + Inter in `nuxt.config.ts`
4. Build `SiteHeader` + `SiteFooter` first (used on every page)
5. Port the single homepage in this order: Hero → PhotoPlate → Manifesto → Specimens → Materials → Figures → Lanes → Clients → FinalCTA
6. Wire content JSON files
7. Add SEO tags (title/description/OG/canonical/JSON-LD)
8. Add sitemap + robots
9. Test at 375 / 768 / 1024 / 1440 / 1920 px viewports
10. Test `prefers-reduced-motion` and `prefers-color-scheme` (no dark mode needed — cream stays cream)
11. Deploy to Cloudflare Pages via GitHub push
12. Point wisermaxhn.com DNS at Cloudflare
13. Submit sitemap to Google Search Console + request indexing
14. Create Google Business Profile + LinkedIn company page

---

## 9 · Definition of done

- Lighthouse: Performance ≥ 95, Accessibility 100, Best Practices ≥ 95, SEO 100
- All headings hierarchical, exactly one `<h1>`
- All images have descriptive alt text (with keywords woven in)
- Site loads full hero in under 1.5s on 4G
- No CLS on hero (reserve space for the fonts + photo)
- Works with JavaScript disabled (SSG output)
- Passes W3C HTML validator with 0 errors
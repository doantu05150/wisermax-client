# WISERMAX HN — Style variant: A · Editorial

**This is a re-skin, not a rebuild.**

The `feature/e-atelier-redesign` branch already contains the working site:
SEO, schema, sitemap, robots, image pipeline, content JSON, routing, deploy config.
All of that stays exactly as it is. Only the **presentation layer** changes.

**Reference implementation**: `reference/wisermax-a-editorial.html`
(static HTML, opens standalone — this is the source of truth for the new look).

---

## 1 · What changes, what doesn't

### Must NOT change
- Everything under SEO: `useSeoMeta` / `useHead` calls, JSON-LD `Organization` schema,
  canonical tags, OG tags, `@nuxtjs/sitemap` + `@nuxtjs/robots` config, `nitro.prerender`
- All copy strings — headlines, descriptions, spec numbers, client names, contact details.
  A-editorial uses the same content as E-atelier, laid out differently.
- Content data files (`content/*.json` or wherever the capability/lane/client data lives)
- Alt text on images (keywords are baked in there)
- Routing, deploy target (Cloudflare Pages), build commands
- `@nuxt/image` usage and the image assets themselves

### Changes
- Design tokens (`assets/css/tokens.css`) — new palette below
- Font family — Archivo variable replaces Newsreader + Inter
- Component templates + scoped styles — new layout per section
- One new structural motif: the **selvedge line** (see §3)

If a change to a component would break an SEO tag, keep the tag and restructure the
markup around it.

---

## 2 · Design tokens — A · Editorial

```css
:root{
  --paper:    #FBFAF7;   /* bleached cotton — main background */
  --muslin:   #EFEBE3;   /* raw undyed — image placeholders, alt panels */
  --thread:   #8B8F8A;   /* grey thread — secondary text, captions */
  --ink:      #1B1E23;   /* deep ink — body text */
  --indigo:   #22385C;   /* rope-dyed denim — primary brand, buttons, quality band */
  --selvedge: #C1352E;   /* the red selvedge line — structural accent only */
  --rule:     #D9D4C9;   /* dividers */

  --f: "Archivo", system-ui, sans-serif;
  --maxw: 1320px;
  --gutter: clamp(20px, 4vw, 56px);
}
```

Colour discipline:
- `--indigo` is the brand colour: buttons, the quality band background, emphasis.
- `--selvedge` is **structural, not decorative** — it is the vertical thread on the left
  edge of every band (§3) and the focus-visible outline. It never appears as text colour,
  never as a button fill, never as a highlight.
- No third accent. No gradients.

### Typography — single family, width axis

**Archivo** variable, both `wdth` (62–125) and `wght` (300–800) axes.
This is the whole type system — no serif, no mono, no second family.

```html
<link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wdth,wght@0,62..125,300..800;1,62..125,300..800&display=swap" rel="stylesheet">
```

Scale:
```css
.display { font-weight:500; font-stretch:78%;  font-size:clamp(44px,7.2vw,108px); line-height:.94; letter-spacing:-.025em; }
h2       { font-weight:500; font-stretch:82%;  font-size:clamp(32px,4.2vw,60px);  line-height:1.02; letter-spacing:-.02em; }
h3       { font-weight:600; font-size:20px; line-height:1.25; }
.lede    { font-size:clamp(18px,1.5vw,21px); line-height:1.45; max-width:34em; color:#3a3e44; }
.small   { font-size:14px; color:var(--thread); }
.wide    { font-stretch:112%; font-weight:600; letter-spacing:.01em; }  /* labels, client names */
```

The trick: headlines are **condensed** (`font-stretch:78–82%`) so they compress large;
labels and client names are **extended** (`font-stretch:105–112%`). Same family,
opposite ends of the width axis. Don't substitute a different font to fake this.

---

## 3 · The selvedge motif

The one structural idea in this variant. Every full-width section (`.band`) carries a
2px red thread down its left edge, sitting in the gutter:

```css
.band{
  position:relative;
  padding: clamp(64px,9vw,128px) 0;
  border-top:1px solid var(--rule);
}
.band::before{
  content:"";
  position:absolute;
  left:calc(var(--gutter) - 10px);
  top:0; bottom:0;
  width:2px;
  background:var(--selvedge);
  opacity:.9;
}
```

On the indigo quality band, the thread flips to white at 50% opacity.
In Nuxt this belongs in the global stylesheet, not per-component, so every section
inherits it automatically.

---

## 4 · Section layout (replaces the E-atelier arrangement)

Same content, different structure. Order:

1. **Header** — sticky, `rgba(251,250,247,.86)` + backdrop-blur, 68px, 1px bottom rule.
   Brand left (`WISERMAX` extended 112% + `Hanoi, Vietnam` in thread), nav centre,
   `Request a quote` button right (indigo fill).

2. **Hero** — two columns, `1.35fr / .85fr`, aligned to baseline.
   - Left: condensed display headline (max 15ch) + lede + two CTAs
   - Right: **the spec sheet** — a `<dl>` with a 2px ink rule on top, rows of
     `Monthly capacity / Bulk lead time / Minimum order / Inspection standard / Shipping to`.
     Labels left in grey, values right-aligned and bold with a small unit suffix.
     Footnote in `.small` underneath.
   - Below both: image strip, `2fr / 1fr` grid, `10px` gap, one large factory photo
     plus a stacked column of two. Dark caption chips bottom-left of each.

3. **Clients** — thin band, no border. `Produced for` label + client names in
   extended weight, uppercase, 14px, spread horizontally.

4. **Capabilities** — split `.9fr / 1.1fr`. Section title + lede on the left; on the
   right a **ruled list** (not cards): each row is
   `name / description / tag`, separated by 1px rules. Top rule is ink, rest are `--rule`.

5. **Process** — five columns, top rule 2px ink. Each step: number in selvedge red,
   title, description, duration in thread grey. Vertical hairline between columns,
   none after the last.

6. **Products** — four columns, `10px` gap, portrait images, name + one-line
   description + underlined link below each.

7. **Quality** — full band on `--indigo`, white text, selvedge thread flips to white.
   Heading + lede, then three facts across with hairline dividers.

8. **Factory network** — split with a photo left, heading + lede + ruled fact list right.

9. **RFQ** — split. Left: heading, lede, direct contact block below a rule.
   Right: a real form — two-column inputs, full-width textarea, dashed upload area,
   indigo submit button.

10. **Footer** — brand + blurb, three link columns, copyright row on top of a rule.

---

## 5 · Git workflow

```bash
# from the repo root, with feature/e-atelier-redesign checked out and clean
git checkout feature/e-atelier-redesign
git pull
git checkout -b feature/a-editorial-redesign
```

Branch from `feature/e-atelier-redesign`, **not** from `main` — that's how the SEO work
comes along for free.

Keep both branches alive so the client can compare. Neither merges to `main` until
they pick one.

Commit in the same section order as §4, one commit per section, so a bad section can be
reverted without touching the rest.

---

## 6 · Definition of done

- Every SEO tag present on `feature/e-atelier-redesign` is still present and identical
  (diff the rendered `<head>` between branches — only `<title>`-adjacent styling differs,
  nothing semantic)
- Lighthouse SEO 100, Accessibility 100, Performance ≥ 95
- `prefers-reduced-motion` honoured (hero entrance only)
- Renders correctly at 375 / 768 / 1024 / 1440 / 1920
- Only one font family loaded; check the network tab
- The selvedge thread appears on every band including the indigo one
- No visual regressions in the RFQ form's validation or submit behaviour

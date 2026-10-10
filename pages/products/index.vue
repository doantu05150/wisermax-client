<template>
  <div class="products-index">
    <!-- HERO -->
    <section class="band pi-hero">
      <div class="wrap">
        <div class="pi-meta">
          <span><b>Programmes</b> Menswear <em>·</em> Womenswear <em>·</em> Kidswear</span>
          <span><b>Category lines</b> Knit <em>·</em> Woven <em>·</em> Outerwear <em>·</em> Sport</span>
          <span><b>Trade</b> OEM <em>·</em> ODM <em>·</em> Private label</span>
          <span><b>Port</b> FOB Hai Phong</span>
        </div>

        <h1>
          Every category, one <em>merchandising</em> desk.
        </h1>

        <div class="pi-hero-layout">
          <p class="lede">
            Full package apparel manufacturing Vietnam across women's, men's and kids'
            programmes — knitwear, woven, outerwear and sportswear. Sampled in Gia Lam,
            produced across twenty audited partner factories, shipped FOB Hai Phong.
          </p>
          <a class="btn" href="/contact#quote">Request a quote</a>
        </div>
      </div>
    </section>

    <!-- CATEGORY GRID -->
    <section class="band cat-grid">
      <div class="wrap">
        <div class="head">
          <div class="kicker">Programmes</div>
          <h2>Three category programmes, run through one <em>merchandiser</em>.</h2>
        </div>

        <div class="grid">
          <NuxtLink
            v-for="c in categories"
            :key="c.slug"
            :to="c.url"
            class="cat"
          >
            <div class="cat-hd">
              <span>{{ c.tag }}</span>
              <b>{{ c.label }}</b>
            </div>
            <div class="cat-media">
              <NuxtImg :src="c.image" :alt="c.alt" loading="lazy" format="webp" sizes="sm:100vw md:50vw lg:400px" />
            </div>
            <h3>
              {{ c.title }} <em>{{ c.titleAccent }}</em>
            </h3>
            <p>{{ c.blurb }}</p>
            <span class="cat-cta">See programme →</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CROSS-CATEGORY: outerwear, sport, trims -->
    <section class="band cross">
      <div class="wrap">
        <div class="head">
          <div class="kicker">Cross-category lines</div>
          <h2>And the technical runs we're <em>known for.</em></h2>
        </div>

        <div class="cross-grid">
          <article v-for="c in cross" :key="c.title" class="cross-card">
            <div class="cross-code">{{ c.code }}</div>
            <h3>{{ c.title }}</h3>
            <p>{{ c.description }}</p>
            <NuxtImg :src="c.image" :alt="c.alt" loading="lazy" format="webp" sizes="sm:100vw md:50vw lg:430px" />
          </article>
        </div>
      </div>
    </section>

    <TuRfqSection />
  </div>
</template>

<script setup>
const title = 'Products & programmes — Vietnam apparel manufacturer | Wisermax HN'
const description = `Women's, men's and kids' clothing programmes from a Vietnam garment factory in Hanoi. Knitwear, woven, outerwear and sportswear — OEM, ODM and private label, FOB Hai Phong.`
const url = 'https://www.wisermaxhn.com/products'

useHead({
  title,
  meta: [
    { hid: 'description', name: 'description', content: description },
    { hid: 'og:title', property: 'og:title', content: title },
    { hid: 'og:description', property: 'og:description', content: description },
    { hid: 'og:url', property: 'og:url', content: url },
    { hid: 'twitter:title', name: 'twitter:title', content: title },
    { hid: 'twitter:description', name: 'twitter:description', content: description },
  ],
  link: [{ rel: 'canonical', href: url }],
})

useBreadcrumb([
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
])

const categories = [
  {
    slug: 'women',
    tag: 'Pr. I · Women',
    label: `Women's clothing manufacturer`,
    url: '/products/women',
    image: '/products/banners/banner_top_women.png',
    alt: `Women's clothing programme — knit dress manufacturer Vietnam and woven blouses supplier`,
    title: `Knit dresses, blouses, coats and`,
    titleAccent: `activewear.`,
    blurb: `Knit dress manufacturer Vietnam. Blouses in viscose and linen blends, tailored coats, activewear and sleepwear across full retail programmes.`,
  },
  {
    slug: 'men',
    tag: 'Pr. II · Men',
    label: `Men's clothing manufacturer`,
    url: '/products/men',
    image: '/products/banners/banner_top_men.png',
    alt: `Men's clothing programme — bulk polo shirt manufacturer and woven pants supplier Vietnam`,
    title: `Polos, shirting, suits and`,
    titleAccent: `outerwear.`,
    blurb: `Custom t-shirt factory Vietnam and bulk polo shirt manufacturer. Cut and sew woven shirts, tailored vests and suiting, chinos and outerwear.`,
  },
  {
    slug: 'kids',
    tag: 'Pr. III · Kids',
    label: `Kids' clothing manufacturer`,
    url: '/products/kids',
    image: '/products/banners/banner_top_kids.png',
    alt: `Kidswear programme — Vietnam kids' clothing manufacturer to CPSIA and EN 14682`,
    title: `Baby, boys' and girls' full`,
    titleAccent: `ranges.`,
    blurb: `Kidswear ages 2–14 sampled to CPSIA and EN 14682. Baby zip sleepsuits, boys' and girls' seasonal ranges — inspected AQL before packing.`,
  },
]

const cross = [
  {
    code: 'X / 01',
    title: 'Jackets & outerwear',
    description: 'Jacket manufacturer Vietnam for padded and puffer jackets, wool and felt coats, softshell and waterproof shells with taped seams. Down and synthetic fill on request.',
    image: '/products/banners/banner_jacket.png',
    alt: 'Jacket manufacturer Vietnam — padded and waterproof outerwear on the finishing line',
  },
  {
    code: 'X / 02',
    title: 'Protective & technical wear',
    description: 'Waterproof jacket manufacturer with DWR finishing. Knitting and woven programmes — activewear, swimwear, sleepwear, workwear on dedicated lines.',
    image: '/products/banners/banner_protective.png',
    alt: 'Technical protective clothing — Vietnam apparel manufacturer with AQL inspection',
  },
  {
    code: 'X / 03',
    title: 'Accessories & trims',
    description: 'Socks, gloves, neckties and pantyhose. YKK zippers, custom labels and hangtags — retail-ready packing to your carton specification.',
    image: '/products/banners/banner_assessories.png',
    alt: 'Apparel accessories — Vietnam garment factory for socks, gloves, neckties and pantyhose',
  },
]
</script>

<style lang="scss" scoped>
.pi-hero {
  padding-top: clamp(48px, 6vw, 88px);
  padding-bottom: clamp(48px, 6vw, 88px);
}

.pi-meta {
  display: flex;
  justify-content: space-between;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--rule);
  font: 500 12px/1 var(--f);
  color: var(--thread);
  letter-spacing: .06em;
  flex-wrap: wrap;
  gap: 16px;

  b { color: var(--ink); font-weight: 600; margin-right: 4px; }
  em { font-style: normal; color: var(--thread); }
}

h1 {
  font-size: clamp(48px, 7.4vw, 108px);
  line-height: .96;
  margin: clamp(48px, 6vw, 80px) 0 0;
  max-width: 15ch;
  font-weight: 500;
  font-stretch: 78%;
  letter-spacing: -.025em;

  em { font-style: normal; color: inherit; }
}

.pi-hero-layout {
  display: grid;
  grid-template-columns: 1.4fr auto;
  gap: clamp(32px, 5vw, 72px);
  align-items: end;
  margin-top: clamp(40px, 5vw, 64px);
}

.lede {
  font-family: var(--f);
  font-size: clamp(18px, 1.5vw, 21px);
  line-height: 1.45;
  color: #3a3e44;
  margin: 0;
  max-width: 44ch;
}

.cat-grid .head {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(28px, 4vw, 64px);
  align-items: end;
  margin-bottom: 56px;
}

.cat-grid h2 {
  font-size: clamp(32px, 4vw, 54px);
  line-height: 1;
  max-width: 18ch;
  em { font-style: normal; color: inherit; }
}
.cat-grid .kicker { margin-bottom: 16px; }

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px clamp(24px, 4vw, 64px);
}

.cat {
  color: var(--ink);
  padding: 24px 0 32px;
  border-top: 1.5px solid var(--ink);
  display: flex;
  flex-direction: column;
  transition: opacity .2s;

  &:hover { opacity: .85; }
  &:hover .cat-cta { color: var(--indigo); }

  &-hd {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 20px;
    font: 500 12px/1 var(--f);
    color: var(--thread);
    letter-spacing: .08em;
    text-transform: uppercase;

    b {
      font-family: var(--f);
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      color: var(--ink);
      text-transform: none;
      letter-spacing: 0;
    }
  }

  &-media {
    aspect-ratio: 4 / 5;
    background: var(--muslin);
    margin-bottom: 24px;
    overflow: hidden;

    :deep(img) { width: 100%; height: 100%; object-fit: cover; }
  }

  h3 {
    font-size: 26px;
    line-height: 1.1;
    margin: 0 0 10px;

    em { font-style: normal; color: inherit; }
  }

  p {
    color: #3a3e44;
    font-size: 14.5px;
    line-height: 1.6;
    margin: 0 0 20px;
  }

  &-cta {
    font: 600 12px/1 var(--f);
    letter-spacing: .12em;
    text-transform: uppercase;
    color: var(--ink);
    margin-top: auto;
  }
}

.cross {
  background: var(--muslin);

  .head { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(28px, 4vw, 64px); align-items: end; margin-bottom: 48px; }
  .kicker { margin-bottom: 16px; }
  h2 { font-size: clamp(32px, 4vw, 54px); line-height: 1; max-width: 18ch; em { font-style: normal; color: inherit; } }

  &-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }

  &-card {
    padding: 20px 0 0;
    border-top: 1px solid var(--ink);
    display: flex;
    flex-direction: column;

    .cross-code {
      font: 600 11px/1 var(--f);
      letter-spacing: .14em;
      color: var(--selvedge);
      text-transform: uppercase;
    }

    h3 {
      font-family: var(--f);
      font-size: 22px;
      margin: 12px 0 10px;
      line-height: 1.15;
    }

    p {
      color: var(--thread);
      font-size: 13.5px;
      line-height: 1.55;
      margin: 0 0 20px;
    }

    :deep(img) {
      width: 100%;
      display: block;
    }
  }
}

@media (max-width: 1000px) {
  .cat-grid .head, .cross .head { grid-template-columns: 1fr; }
  .pi-hero-layout { grid-template-columns: 1fr; }
  .grid { grid-template-columns: 1fr 1fr; }
  .cross-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 600px) {
  .grid, .cross-grid { grid-template-columns: 1fr; }
}
</style>

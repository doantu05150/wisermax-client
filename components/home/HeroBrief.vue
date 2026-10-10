<template>
  <section class="band hero">
    <div class="wrap">
      <div class="hero-grid">
        <div>
          <h1 class="display atelier-up">
            Apparel manufacturing in Vietnam for brands that ship to the US and Europe.
          </h1>
          <p class="lede atelier-up delay-1">
            Knit, woven, outerwear and kidswear, produced across our network of partner factories in
            Northern and Central Vietnam. Send us a tech pack and we come back with a costed sample
            plan within five working days.
          </p>
          <div class="hero-cta atelier-up delay-2">
            <a class="btn" href="#rfq">Send a tech pack</a>
            <a class="btn ghost" href="#capabilities">See capabilities</a>
          </div>
        </div>

        <div class="spec-sheet atelier-up delay-2">
          <dl class="spec" aria-label="Factory at a glance">
            <div v-for="row in spec" :key="row.term" class="spec-row">
              <dt>{{ row.term }}</dt>
              <dd>
                {{ row.value }}<small v-if="row.unit">{{ row.unit }}</small>
              </dd>
            </div>
          </dl>
          <p class="spec-foot">
            Figures are typical for FOB Hai Phong orders. Lead time excludes fabric development.
          </p>
        </div>
      </div>

      <div class="hero-visual">
        <div class="ph">
          <NuxtImg
            src="/about/service-1.jpg"
            alt="Sewing line at a partner factory in Nam Dinh — garment factory in Vietnam running full package production"
            sizes="sm:100vw md:66vw lg:880px"
            loading="eager"
            fetchpriority="high"
            format="webp"
          />
          <span class="cap">Sewing line, partner factory, Nam Dinh</span>
        </div>
        <div class="col">
          <div class="ph">
            <NuxtImg
              src="/home/so-sampleroom.jpg"
              alt="In-house sample room — cut and sew manufacturer Vietnam making proto and fit samples"
              sizes="sm:100vw md:33vw lg:440px"
              format="webp"
              loading="lazy"
            />
            <span class="cap">Sample room</span>
          </div>
          <div class="ph dark">
            <NuxtImg
              src="/home/so-design.jpg"
              alt="Pattern making and design desk — OEM clothing factory Vietnam handling tech pack development"
              sizes="sm:100vw md:33vw lg:440px"
              format="webp"
              loading="lazy"
            />
            <span class="cap">Pattern &amp; design</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import spec from '@/data/hero-spec.json'
</script>

<style lang="scss" scoped>
.hero {
  border-top: 0;
  padding-top: clamp(56px, 7vw, 104px);
}

.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(300px, .85fr);
  gap: clamp(40px, 6vw, 96px);
  align-items: end;
}

.hero :deep(.display) { max-width: 15ch; }

.hero .lede { margin-top: 28px; }

.hero-cta {
  display: flex;
  gap: 14px;
  margin-top: 36px;
  flex-wrap: wrap;
}

/* The spec sheet — a factory's own data, set as a ledger. */
.spec {
  margin: 0;
  border-top: 2px solid var(--ink);
}

.spec-row {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 24px;
  align-items: baseline;
  padding: 16px 0;
  border-bottom: 1px solid var(--rule);

  dt {
    color: #5a5f66;
    font-size: 15px;
    margin: 0;
  }

  dd {
    margin: 0;
    font-weight: 600;
    font-stretch: 88%;
    font-size: clamp(20px, 1.8vw, 26px);
    letter-spacing: -.01em;
    text-align: right;
    white-space: nowrap;

    small {
      font-weight: 400;
      font-size: 14px;
      color: var(--thread);
      margin-left: 6px;
      letter-spacing: 0;
    }
  }
}

.spec-foot {
  padding-top: 14px;
  margin: 0;
  font-size: 13px;
  color: var(--thread);
}

.hero-visual {
  margin-top: clamp(56px, 7vw, 96px);
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 10px;
  height: clamp(320px, 46vw, 620px);

  .col {
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 10px;
  }
}

@media (max-width: 820px) {
  .hero-grid { grid-template-columns: 1fr; }

  .hero-visual {
    grid-template-columns: 1fr;
    height: auto;

    .ph { height: 260px; }

    .col { grid-template-rows: none; grid-template-columns: 1fr 1fr; }
  }
}

@media (max-width: 480px) {
  .hero-visual .col { grid-template-columns: 1fr; }
}
</style>

<template>
  <section class="band cert">
    <div class="wrap">
      <div class="head">
        <div>
          <div class="kicker">Compliance &amp; standards</div>
          <h2>Audited factory Vietnam for <em>EU</em> and <em>US</em> buyers.</h2>
        </div>
        <p>
          We work only with partner factories that hold, or are willing to hold,
          the ethical and technical audits our buyers require. Certificates are
          provided on request as part of the vendor package.
        </p>
      </div>

      <div class="cert-grid">
        <article v-for="c in items" :key="c.code" class="cert-card">
          <div class="cert-code">{{ c.code }}</div>
          <h3>{{ c.name }}</h3>
          <p>{{ c.detail }}</p>
        </article>
      </div>

      <figure class="cert-figure">
        <NuxtImg
          src="/about/certification.png"
          alt="Certifications held by Wisermax HN partner factories in Vietnam — BSCI, WRAP, OEKO-TEX and buyer-specific audits"
          loading="lazy"
          format="webp"
          sizes="sm:100vw md:720px"
        />
        <figcaption>
          Certificates provided per programme on request. New audits arranged
          in advance where a specific buyer requires one we do not yet hold.
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<script setup>
const items = [
  {
    code: 'C / 01',
    name: 'BSCI',
    detail: 'Business Social Compliance Initiative — ethical audit held by partner factories on request.',
  },
  {
    code: 'C / 02',
    name: 'WRAP',
    detail: 'Worldwide Responsible Accredited Production — ethical audit for US-facing programmes.',
  },
  {
    code: 'C / 03',
    name: 'OEKO-TEX / GOTS',
    detail: 'Chemical safety and organic certifications available at fabric level from nominated mills.',
  },
  {
    code: 'C / 04',
    name: 'AQL 1.0 · 2.5',
    detail: 'ISO 2859-1 acceptance quality limit inspection on every shipment; 100% on request.',
  },
]
</script>

<style lang="scss" scoped>
.head {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(28px, 4vw, 64px);
  align-items: end;
  margin-bottom: 48px;
}

.kicker { margin-bottom: 16px; }

h2 {
  font-size: clamp(32px, 4vw, 54px);
  line-height: 1;
  max-width: 16ch;

  em { font-style: normal; color: inherit; }
}

.head p {
  margin: 0;
  color: #3a3e44;
  font-size: 16px;
  max-width: 44ch;
  justify-self: end;
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  margin-bottom: 56px;
}

/* Ruled columns, not cards — the A-editorial idiom. */
.cert-card {
  padding: 20px 24px 0 0;
  border-top: 1px solid var(--ink);
  border-right: 1px solid var(--rule);
  margin-right: 24px;

  &:last-child { border-right: 0; margin-right: 0; }

  .cert-code {
    font: 600 11px/1 var(--f);
    letter-spacing: .14em;
    color: var(--selvedge);
    text-transform: uppercase;
  }

  h3 {
    font-family: var(--f);
    font-size: 22px;
    margin: 12px 0 10px;
    line-height: 1.1;
  }

  p {
    margin: 0;
    color: var(--thread);
    font-size: 13.5px;
    line-height: 1.55;
  }
}

.cert-figure {
  margin: 0;
  border-top: 1px solid var(--rule);
  padding-top: 32px;
  text-align: center;

  :deep(img) {
    max-width: min(720px, 100%);
    margin: 0 auto;
  }

  figcaption {
    margin: 24px auto 0;
    font-family: var(--f);
    font-style: normal;
    color: var(--thread);
    font-size: 14px;
    max-width: 60ch;
  }
}

@media (max-width: 900px) {
  .head { grid-template-columns: 1fr; p { justify-self: start; } }
  .cert-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 540px) {
  .cert-grid { grid-template-columns: 1fr; }
}
</style>

<template>
  <section class="band about-services">
    <div class="wrap">
      <div class="head">
        <div class="kicker">Services</div>
        <h2>From sourcing to sea freight, under <em>one roof.</em></h2>
        <p>
          Full package apparel manufacturing Vietnam. We take responsibility for
          the whole chain, so the buyer talks to one merchandiser — not four vendors.
        </p>
      </div>

      <ol class="services-list">
        <li v-for="(s, i) in services" :key="s.key" class="svc">
          <div class="svc-media">
            <NuxtImg
              :src="`/about/${s.img}`"
              :alt="s.alt"
              loading="lazy"
              format="webp"
              sizes="sm:100vw md:50vw lg:600px"
              densities="x1 x2"
            />
          </div>
          <div class="svc-body">
            <div class="svc-index">
              {{ String(i + 1).padStart(2, '0') }} <span>/ 04</span>
            </div>
            <h3>{{ s.title }}</h3>
            <p>{{ s.description }}</p>
            <dl>
              <template v-for="item in s.items" :key="item.term">
                <dt>{{ item.term }}</dt>
                <dd>{{ item.value }}</dd>
              </template>
            </dl>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    key: 'sourcing',
    img: 'service-41.jpg',
    alt: 'Fabric sourcing and mill selection at a Vietnam apparel manufacturer — cotton, poplin, twill, viscose and technical shells',
    title: 'Sourcing & material development',
    description:
      'We open every programme with a fabric conversation. Nominated mills for the buyer who has one; approved mills in Nam Dinh, Hung Yen and Hanoi for the buyer who does not. GOTS-certified cottons and recycled polyesters on request.',
    items: [
      { term: 'Mill relationships', value: 'Nominated & approved' },
      { term: 'Certifications', value: 'GOTS · OEKO-TEX on request' },
    ],
  },
  {
    key: 'design',
    img: 'service-21.jpg',
    alt: 'Design and pattern room for a Vietnam garment factory — sampling knitwear, woven, outerwear and sportswear',
    title: 'Development & sampling',
    description:
      'ODM apparel manufacturer for brands who want the design pushed forward, and a disciplined OEM sample room for brands who bring the tech pack. Pattern making, first proto, PP and shipment samples handled in our own room in Hanoi.',
    items: [
      { term: 'Turnaround', value: 'Proto in 10 working days' },
      { term: 'Formats accepted', value: 'PDF · AI · Excel · reference garment' },
    ],
  },
  {
    key: 'production',
    img: 'service-11.jpeg',
    alt: 'Production line at an audited garment factory in Vietnam under AQL inspection — cut and sew for US and EU brands',
    title: 'Production & quality',
    description:
      'Twenty audited partner factories across five Northern provinces. Each category has a dedicated line and QA lead. AQL 1.0 / 2.5 as required, 100% individual inspection before packing on kids and technical outerwear programmes.',
    items: [
      { term: 'AQL level', value: '1.0 · 2.5 · 100% pieces on request' },
      { term: 'Ethical audits', value: 'BSCI / WRAP available on request' },
    ],
  },
  {
    key: 'shipping',
    img: 'service-51.jpg',
    alt: 'Finished garments packed in export cartons at FOB Hai Phong — Vietnam clothing manufacturer',
    title: 'Finishing & shipping',
    description:
      'Retail-ready packing to buyer carton specification, labelling, GS1 barcodes, hangtags. FOB Hai Phong on weekly Trans-Pacific and Trans-Suez lanes. Air freight from Noi Bai (HAN) on request.',
    items: [
      { term: 'Standard term', value: 'FOB Hai Phong' },
      { term: 'Also offered', value: 'FCA HAN · CIF · DDP on request' },
    ],
  },
]
</script>

<style lang="scss" scoped>
.head {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(28px, 4vw, 64px);
  align-items: end;
  margin-bottom: 56px;
}

.kicker { margin-bottom: 16px; }

h2 {
  font-size: clamp(34px, 4.4vw, 56px);
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

.services-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.svc {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(28px, 5vw, 80px);
  padding: 48px 0;
  border-top: 1px solid var(--rule);
  align-items: start;

  &:last-child { border-bottom: 1px solid var(--rule); }
  &:nth-child(even) { direction: rtl; }
  &:nth-child(even) > * { direction: ltr; }
}

.svc-media {
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: var(--muslin);

  img,
  :deep(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.svc-index {
  font: 600 12px/1 var(--f);
  letter-spacing: .14em;
  color: var(--selvedge);
  text-transform: uppercase;
  margin-bottom: 16px;

  span { color: var(--thread); }
}

h3 {
  font-size: clamp(24px, 2.6vw, 34px);
  line-height: 1.1;
  margin: 0 0 16px;
  max-width: 18ch;
}

.svc-body p {
  color: #3a3e44;
  font-size: 16px;
  line-height: 1.65;
  margin: 0 0 20px;
  max-width: 42ch;
}

.svc-body dl {
  margin: 0;
  padding: 16px 0 0;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 6px 20px;
  border-top: 1px solid var(--rule);
  font-size: 13.5px;
  max-width: 42ch;

  dt { color: var(--thread); font-weight: 500; letter-spacing: .02em; }
  dd { margin: 0; color: var(--ink); font-weight: 500; }
}

@media (max-width: 900px) {
  .svc {
    grid-template-columns: 1fr;
    &:nth-child(even) { direction: ltr; }
  }
  .head { grid-template-columns: 1fr; p { justify-self: start; } }
}
</style>

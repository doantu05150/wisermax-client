<template>
  <section class="band about-intro">
    <div class="wrap">
      <div class="head">
        <div class="kicker">About Wisermax HN</div>
        <h1>
          A quiet Vietnam apparel <em>manufacturer</em> in Hanoi, sampling and shipping for US and EU brands since 2014.
        </h1>
      </div>

      <div class="body">
        <div class="prose">
          <p>
            Wiser Max HN Company Limited is a garment factory in Vietnam headquartered in
            Trau Quy Ward, Gia Lam District, Hanoi. Founded in 2014, we run a full-package
            programme across knitwear, woven, outerwear and sportswear — every category
            merchandised in-house, produced across twenty audited partner factories in
            five Northern provinces, and shipped FOB Hai Phong.
          </p>
          <p>
            Our buyers are US and EU brand and department-store programmes.
            We are a cut and sew manufacturer Vietnam for retail chains,
            an OEM clothing factory for private-label programmes, and an
            ODM apparel manufacturer for teams who want the design pushed forward.
            One merchandising desk, one QA lead per category, one signature on
            the container seal.
          </p>
          <p>
            We are quality-oriented and detail-focused. Every garment is inspected
            to AQL before packing. Every fabric roll is inspected before cutting.
            Every tech pack is answered inside one working day.
          </p>
        </div>

        <aside class="side">
          <div class="side-block">
            <div class="side-label">Company</div>
            <div class="side-value">Wiser Max HN Company Limited</div>
          </div>
          <div class="side-block">
            <div class="side-label">Founded</div>
            <div class="side-value">2014 · Gia Lam, Hanoi</div>
          </div>
          <div class="side-block">
            <div class="side-label">Position</div>
            <div class="side-value">Full package · OEM · ODM · Private label</div>
          </div>
          <div class="side-block">
            <div class="side-label">Markets</div>
            <div class="side-value">United States · Canada · European Union · South Korea</div>
          </div>
          <div class="side-block">
            <div class="side-label">Capacity</div>
            <div class="side-value">6,000,000+ pcs / year across 20+ partner factories</div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about-intro {
  padding-top: clamp(56px, 8vw, 120px);
}

.kicker { margin-bottom: 24px; }

.head h1 {
  font-size: clamp(38px, 5vw, 72px);
  line-height: 1.02;
  max-width: 22ch;
  font-weight: 500;
  font-stretch: 80%;
  letter-spacing: -.022em;

  em { font-style: normal; color: inherit; }
}

.body {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: clamp(32px, 5vw, 80px);
  align-items: start;
  margin-top: clamp(48px, 6vw, 80px);
  padding-top: 40px;
  border-top: 1px solid var(--rule);
}

.prose p {
  margin: 0 0 20px;
  font-size: 17px;
  line-height: 1.7;
  color: #3a3e44;
  max-width: 60ch;
}

.side {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 0 0;
  border-top: 1px solid var(--rule);

  .side-label {
    font: 600 11px/1 var(--f);
    letter-spacing: .14em;
    text-transform: uppercase;
    color: var(--thread);
    margin-bottom: 8px;
  }

  .side-value {
    font-family: var(--f);
    font-size: 18px;
    color: var(--ink);
    line-height: 1.35;
  }
}

@media (max-width: 900px) {
  .body { grid-template-columns: 1fr; }
}
</style>

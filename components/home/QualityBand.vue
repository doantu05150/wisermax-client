<template>
  <section id="quality" class="band indigo quality">
    <div class="wrap">
      <h2>Quality you can audit</h2>
      <p class="lede">
        Every piece is checked individually before it goes into the carton. Inspection reports,
        fabric test results and factory audit documents are shared with your team, not kept in a
        drawer — an audited clothing factory Vietnam setup EU buyers can verify.
      </p>
      <div class="facts">
        <div v-for="f in facts" :key="f.value" class="fact">
          <b>{{ f.value }}</b>
          <span>{{ f.label }}</span>
        </div>
      </div>
      <p class="small">
        Social compliance and chemical certifications (e.g. BSCI, WRAP, OEKO-TEX) are listed per
        partner factory and available on request.
      </p>
    </div>
  </section>
</template>

<script setup>
import facts from '@/data/quality.json'
</script>

<style lang="scss" scoped>
.quality {
  background: var(--indigo);
  color: #fff;
  border-top: 0;

  h2 { color: #fff; }

  .lede { color: rgba(255, 255, 255, .78); }

  .small { color: rgba(255, 255, 255, .55); margin-top: 28px; }
}

.facts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  margin-top: 56px;
  border-top: 1px solid rgba(255, 255, 255, .28);
}

.fact {
  padding: 28px 28px 28px 0;
  border-right: 1px solid rgba(255, 255, 255, .28);
  margin-right: 28px;

  &:last-child { border-right: 0; margin-right: 0; }

  b {
    display: block;
    font-weight: 500;
    font-stretch: 80%;
    font-size: clamp(40px, 4.4vw, 68px);
    line-height: 1;
    letter-spacing: -.02em;
  }

  span {
    display: block;
    margin-top: 10px;
    color: rgba(255, 255, 255, .78);
    font-size: 15px;
  }
}

@media (max-width: 820px) {
  .facts { grid-template-columns: 1fr; }

  .fact {
    border-right: 0;
    margin-right: 0;
    border-bottom: 1px solid rgba(255, 255, 255, .28);

    &:last-child { border-bottom: 0; }
  }
}
</style>

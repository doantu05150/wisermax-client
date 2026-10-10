<template>
  <section id="process" class="band">
    <div class="wrap">
      <h2>How an order moves</h2>
      <p class="lede">
        Every order follows the same five stages. You get a named merchandiser and a shared timeline
        from day one.
      </p>
      <div class="steps">
        <div v-for="step in steps" :key="step.n" class="step">
          <div class="n">{{ step.n }}</div>
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
          <div class="t">{{ step.duration }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import steps from '@/data/process.json'
</script>

<style lang="scss" scoped>
/* A real sequence, so it gets numbers. */
.steps {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0;
  border-top: 2px solid var(--ink);
  margin-top: 8px;
}

.step {
  padding: 26px 28px 0 0;
  border-right: 1px solid var(--rule);
  margin-right: 28px;
  position: relative;

  &:last-child { border-right: 0; margin-right: 0; }

  /* The one place selvedge red is allowed to carry meaning. */
  .n {
    font-stretch: 120%;
    font-weight: 700;
    font-size: 13px;
    letter-spacing: .08em;
    color: var(--selvedge);
  }

  h3 { margin-top: 14px; margin-bottom: 8px; }

  p { margin: 0; color: #3a3e44; font-size: 15px; }

  .t { margin-top: 18px; font-size: 14px; color: var(--thread); }
}

@media (max-width: 1024px) {
  .steps { grid-template-columns: repeat(3, 1fr); }
  .step:nth-child(3) { border-right: 0; }
  .step:nth-child(n+4) { border-top: 1px solid var(--rule); margin-top: 28px; }
}

@media (max-width: 820px) {
  .steps { grid-template-columns: 1fr; }

  .step {
    border-right: 0;
    margin-right: 0;
    padding-right: 0;

    &:nth-child(n+2) { border-top: 1px solid var(--rule); margin-top: 24px; }
  }
}
</style>

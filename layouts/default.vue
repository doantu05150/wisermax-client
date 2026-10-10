<template>
  <div class="site-shell">
    <a class="skip-link" href="#main-content">Skip to content</a>
    <TuHeader />
    <main id="main-content" class="site-main" tabindex="-1">
      <slot />
    </main>
    <TuFooter />
  </div>
</template>

<script setup>
// Header and Footer auto-imported via components/common with the 'Tu' prefix.
</script>

<style lang="scss">
.site-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--paper);
  color: var(--ink);
}

.site-main {
  flex: 1;

  &:focus { outline: none; }
}

// Keyboard-only skip link. Hidden until focused, then anchored to the top-left.
.skip-link {
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 100;
  padding: 10px 18px;
  background: var(--ink);
  color: var(--paper);
  font: 600 13px/1 var(--f);
  letter-spacing: .04em;
  border: 1px solid var(--ink);
  transform: translateY(-200%);
  transition: transform .15s;

  &:focus,
  &:focus-visible {
    transform: translateY(0);
    outline: 2px solid var(--selvedge);
    outline-offset: 2px;
  }
}
</style>

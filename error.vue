<template>
  <NuxtLayout>
    <section class="band err-band">
      <div class="wrap">
        <div class="err-code">{{ error.statusCode }}</div>
        <h1 v-if="error.statusCode === 404" class="display">Opps! Page not found</h1>
        <h1 v-else class="display">An error occurred</h1>
        <NuxtLink to="/" class="btn" @click="handleError">Back to Home page</NuxtLink>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup>
defineProps({
  error: { type: Object, required: true },
})

const handleError = () => clearError({ redirect: '/' })
</script>

<style lang="scss" scoped>
.err-band { border-top: 0; }

.err-code {
  font-stretch: 120%;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: .08em;
  color: var(--selvedge);
  margin-bottom: 24px;
}

.display { max-width: 14ch; }

.btn { margin-top: 36px; }
</style>

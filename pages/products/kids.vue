<template>
  <ProductCategory :data="data" />
</template>

<script setup>
import data from '@/data/products-kids.json'
import ProductCategory from '@/components/products/ProductCategory.vue'

const title = `Kids' clothing manufacturer Vietnam — CPSIA & EN 14682 compliant kidswear | Wisermax HN`
const description = `Kidswear factory Vietnam ages 2–14 — baby zip sleepsuits, boys' and girls' ranges. Sampled to CPSIA and EN 14682, AQL inspection, from a Hanoi garment manufacturer.`
const url = 'https://www.wisermaxhn.com/products/kids'

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
  { name: `Kids' clothing`, path: '/products/kids' },
])
</script>

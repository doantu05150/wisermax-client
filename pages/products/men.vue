<template>
  <ProductCategory :data="data" />
</template>

<script setup>
import data from '@/data/products-men.json'
import ProductCategory from '@/components/products/ProductCategory.vue'

const title = `Men's clothing manufacturer Vietnam — polos, shirting, suits & outerwear | Wisermax HN`
const description = `Custom t-shirt factory Vietnam, bulk polo shirt manufacturer and woven pants supplier for men's retail programmes — OEM, ODM and private label from a Hanoi garment factory.`
const url = 'https://www.wisermaxhn.com/products/men'

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
  { name: `Men's clothing`, path: '/products/men' },
])
</script>

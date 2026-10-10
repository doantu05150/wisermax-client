<template>
  <div>
    <TuIntroduction />
    <TuServices />
    <TuMembers />
    <TuCertification />
    <TuRfqSection />
  </div>
</template>

<script setup>
const title = 'About Wisermax HN — Vietnam garment factory & OEM clothing manufacturer, Hanoi'
const description = 'Founded 2014 in Gia Lam, Hanoi. Full package apparel manufacturing Vietnam across 20+ audited partner factories — OEM, ODM and private label clothing manufacturer for US and EU brands.'
const url = 'https://www.wisermaxhn.com/about-us'

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
  { name: 'About', path: '/about-us' },
])
</script>

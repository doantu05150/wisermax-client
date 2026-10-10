<template>
  <div>
    <TuHeroBrief />
    <TuClientsBand />
    <TuCapabilityList />
    <TuProcessSteps />
    <TuProductsGrid />
    <TuQualityBand />
    <TuFactoryNetwork />
    <TuRfqSection />
  </div>
</template>

<script setup>
const title = 'WISERMAX HN — Vietnam apparel manufacturer & garment factory, Hanoi'
const description = 'A Vietnam garment manufacturer in Hanoi running full package OEM, ODM and private label for US and EU brands — knitwear, woven, outerwear and sportswear. Cut and sew, FOB Hai Phong, audited factories.'
const url = 'https://www.wisermaxhn.com/'

useHead({
  title,
  meta: [
    { hid: 'description', name: 'description', content: description },
    { hid: 'keywords', name: 'keywords', content: 'Vietnam apparel manufacturer, garment factory in Vietnam, clothing manufacturer Vietnam, cut and sew manufacturer Vietnam, FOB garment manufacturer Vietnam, OEM clothing factory Vietnam, ODM apparel manufacturer, full package apparel manufacturing Vietnam, private label clothing manufacturer Vietnam, jacket manufacturer Vietnam, custom t-shirt factory Vietnam, bulk polo shirt manufacturer, knit dress manufacturer Vietnam, woven pants supplier Vietnam, waterproof jacket manufacturer, outerwear factory Vietnam, FOB sportswear manufacturer Vietnam' },
    { hid: 'og:title', property: 'og:title', content: title },
    { hid: 'og:description', property: 'og:description', content: description },
    { hid: 'og:url', property: 'og:url', content: url },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'twitter:title', name: 'twitter:title', content: title },
    { hid: 'twitter:description', name: 'twitter:description', content: description },
  ],
  link: [
    { rel: 'canonical', href: url },
  ],
})
</script>

// https://nuxt.com/docs/api/configuration/nuxt-config
const SITE_URL = 'https://www.wisermaxhn.com'
const SITE_NAME = 'Wisermax HN'
const DEFAULT_TITLE = 'WISERMAX HN — Garment manufacturer & ODM atelier, Hanoi'
const DEFAULT_DESCRIPTION = 'A Vietnam apparel manufacturer in Hanoi producing knitwear, woven, outerwear and sportswear for US and EU brands. Full package OEM, ODM and private label — FOB Hai Phong.'

// Trau Quy Ward, Gia Lam, Hanoi — approximate office coordinates.
// Replace with the exact lat/lng once confirmed with the client.
const OFFICE_GEO = { latitude: 21.0175, longitude: 105.9425 }

// Paste the raw token from Google Search Console "HTML tag" verification here
// (the string inside content="..."), and it will be emitted as a <meta> tag.
const GSC_VERIFICATION = process.env.NUXT_GSC_VERIFICATION || ''

export default defineNuxtConfig({
  compatibilityDate: '2025-09-15',
  devtools: { enabled: true },
  ssr: true,

  components: [
    { path: '~/components/common', prefix: 'Tu' },
    { path: '~/components/home', prefix: 'Tu' },
    { path: '~/components/about', prefix: 'Tu' },
    { path: '~/components', pathPrefix: false },
  ],

  modules: [
    '@element-plus/nuxt',
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],

  site: {
    url: SITE_URL,
    name: SITE_NAME,
  },

  app: {
    head: {
      title: DEFAULT_TITLE,
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: DEFAULT_DESCRIPTION },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'author', content: 'Wiser Max HN Company Limited' },
        { name: 'theme-color', content: '#F5F1E6' },
        // Google Search Console verification (leave GSC_VERIFICATION empty
        // and this meta tag will not be rendered)
        ...(GSC_VERIFICATION
          ? [{ name: 'google-site-verification', content: GSC_VERIFICATION }]
          : []),
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: SITE_NAME },
        { property: 'og:title', content: DEFAULT_TITLE },
        { property: 'og:description', content: DEFAULT_DESCRIPTION },
        { property: 'og:url', content: SITE_URL },
        { property: 'og:image', content: `${SITE_URL}/og-image.jpg` },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Wisermax HN production line — Vietnam apparel manufacturer in Hanoi' },
        { property: 'og:locale', content: 'en_US' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: DEFAULT_TITLE },
        { name: 'twitter:description', content: DEFAULT_DESCRIPTION },
        { name: 'twitter:image', content: `${SITE_URL}/og-image.jpg` },
        { name: 'twitter:image:alt', content: 'Wisermax HN production line — Vietnam apparel manufacturer in Hanoi' },
      ],
      link: [
        // Favicons
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/logo1.svg' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'mask-icon', href: '/logo1.svg', color: '#B7532F' },
        { rel: 'manifest', href: '/site.webmanifest' },
        // SEO
        { rel: 'canonical', href: SITE_URL },
        // Fonts — self-hosted, see assets/css/fonts.css. Preloading the latin
        // subset lets the hero headline paint without waiting on a CDN chain.
        {
          rel: 'preload',
          as: 'font',
          type: 'font/woff2',
          href: '/fonts/archivo-latin.woff2',
          crossorigin: 'anonymous',
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            // Both Organization and LocalBusiness (subtype ClothingStore) so
            // Google can surface us in Knowledge Panels and Maps.
            '@type': ['Organization', 'LocalBusiness', 'ClothingStore'],
            '@id': `${SITE_URL}/#organization`,
            name: 'Wisermax HN',
            legalName: 'Wiser Max HN Company Limited',
            alternateName: ['Wiser Max HN', 'WISERMAX HN'],
            url: SITE_URL,
            logo: `${SITE_URL}/logo1.svg`,
            image: `${SITE_URL}/og-image.jpg`,
            foundingDate: '2014',
            founders: [{ '@type': 'Person', name: 'Helen Hoang' }],
            description: DEFAULT_DESCRIPTION,
            slogan: 'Made in Hanoi · Shipped FOB Hai Phong',
            priceRange: '$$',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Trau Quy Ward, Gia Lam District',
              addressLocality: 'Hanoi',
              addressRegion: 'Hanoi',
              addressCountry: 'VN',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: OFFICE_GEO.latitude,
              longitude: OFFICE_GEO.longitude,
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                opens: '08:00',
                closes: '17:30',
              },
            ],
            contactPoint: [
              {
                '@type': 'ContactPoint',
                telephone: '+84-974-806625',
                contactType: 'sales',
                email: 'info@wiser.vn',
                availableLanguage: ['English', 'Vietnamese'],
                areaServed: ['US', 'CA', 'EU', 'KR'],
              },
              {
                '@type': 'ContactPoint',
                telephone: '+84-974-806625',
                contactType: 'customer service',
                email: 'helen@wiser.vn',
                availableLanguage: ['English', 'Vietnamese'],
                areaServed: ['US', 'CA', 'EU', 'KR'],
              },
            ],
            sameAs: [],
            areaServed: [
              { '@type': 'Country', name: 'United States' },
              { '@type': 'Country', name: 'Canada' },
              { '@type': 'Country', name: 'Germany' },
              { '@type': 'Country', name: 'Netherlands' },
              { '@type': 'Country', name: 'South Korea' },
            ],
            knowsAbout: [
              'Vietnam apparel manufacturing',
              'Garment factory operations',
              'Cut and sew manufacturing',
              'OEM clothing production',
              'ODM apparel manufacturing',
              'Private label clothing manufacturing',
              'Full package apparel manufacturing',
              'FOB Hai Phong shipping',
              'Knitwear manufacturing',
              'Woven apparel manufacturing',
              'Outerwear manufacturing',
              'Waterproof jacket production',
              'Kidswear manufacturing (CPSIA / EN 14682)',
              'Sportswear manufacturing with AQL inspection',
            ],
            makesOffer: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'OEM garment manufacturing', areaServed: 'Worldwide' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ODM apparel manufacturing', areaServed: 'Worldwide' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Private label clothing manufacturing', areaServed: 'Worldwide' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'FOB sportswear manufacturing with AQL inspection', areaServed: 'Worldwide' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom t-shirt manufacturing', areaServed: 'Worldwide' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bulk polo shirt manufacturing', areaServed: 'Worldwide' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Knit dress manufacturing', areaServed: 'Worldwide' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Woven pants manufacturing', areaServed: 'Worldwide' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Waterproof jacket manufacturing', areaServed: 'Worldwide' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kids apparel manufacturing (CPSIA / EN 14682)', areaServed: 'Worldwide' } },
            ],
          }),
        },
      ],
    },
  },

  css: [
    '~/assets/css/fonts.css',
    '~/assets/css/tokens.css',
    '~/assets/css/global.scss',
    '~/assets/css/animations.scss',
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/variables.scss" as *;\n',
          silenceDeprecations: ['legacy-js-api', 'import', 'global-builtin'],
        },
      },
    },
  },

  image: {
    dir: 'assets/images',
    format: ['webp'],
    quality: 80,
    densities: [1, 2],
  },

  runtimeConfig: {
    public: {
      apiBase:
        process.env.NUXT_PUBLIC_API_BASE ||
        'https://wisermax-mailserver.herokuapp.com',
      siteUrl: SITE_URL,
    },
  },

  elementPlus: {
    importStyle: 'css',
  },

  // ---- SEO modules ----
  sitemap: {
    autoLastmod: true,
    xslColumns: [
      { label: 'URL', width: '75%' },
      { label: 'Last Modified', select: 'sitemap:lastmod', width: '25%' },
    ],
    urls: [
      {
        loc: '/',
        priority: 1.0,
        changefreq: 'weekly',
        images: [{ loc: `${SITE_URL}/og-image.jpg`, caption: 'Wisermax HN production line, Hanoi — Vietnam apparel manufacturer' }],
      },
      { loc: '/about-us',       priority: 0.8, changefreq: 'monthly' },
      { loc: '/products',       priority: 0.9, changefreq: 'weekly' },
      { loc: '/products/men',   priority: 0.8, changefreq: 'monthly' },
      { loc: '/products/women', priority: 0.8, changefreq: 'monthly' },
      { loc: '/products/kids',  priority: 0.8, changefreq: 'monthly' },
      { loc: '/contact',        priority: 0.7, changefreq: 'monthly' },
    ],
  },

  robots: {
    allow: '/',
    sitemap: `${SITE_URL}/sitemap.xml`,
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/about-us', '/products', '/products/men', '/products/women', '/products/kids', '/contact'],
    },
  },
})

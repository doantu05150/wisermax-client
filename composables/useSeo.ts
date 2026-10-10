// Helpers for per-page SEO metadata and JSON-LD.
//
// useAtelierHead({...}) sets title/description/canonical/OG/Twitter in one call.
// useBreadcrumb([...]) emits a BreadcrumbList JSON-LD script so inner pages
// show a rich breadcrumb in Google SERPs instead of the raw URL path.

type AtelierHead = {
  title: string
  description: string
  path: string
  image?: string
  imageAlt?: string
  keywords?: string
}

const SITE_URL = 'https://www.wisermaxhn.com'

export function useAtelierHead(opts: AtelierHead) {
  const url = `${SITE_URL}${opts.path.startsWith('/') ? opts.path : `/${opts.path}`}`
  const image = opts.image ?? `${SITE_URL}/og-image.jpg`
  const imageAlt = opts.imageAlt ?? 'Wisermax HN — Vietnam apparel manufacturer, Hanoi'

  useHead({
    title: opts.title,
    meta: [
      { hid: 'description',      name: 'description',      content: opts.description },
      ...(opts.keywords ? [{ hid: 'keywords', name: 'keywords', content: opts.keywords }] : []),
      { hid: 'og:title',         property: 'og:title',       content: opts.title },
      { hid: 'og:description',   property: 'og:description', content: opts.description },
      { hid: 'og:url',           property: 'og:url',         content: url },
      { hid: 'og:image',         property: 'og:image',       content: image },
      { hid: 'og:image:alt',     property: 'og:image:alt',   content: imageAlt },
      { hid: 'twitter:title',    name: 'twitter:title',       content: opts.title },
      { hid: 'twitter:description', name: 'twitter:description', content: opts.description },
      { hid: 'twitter:image',    name: 'twitter:image',       content: image },
      { hid: 'twitter:image:alt', name: 'twitter:image:alt',  content: imageAlt },
    ],
    link: [
      { rel: 'canonical', href: url },
    ],
  })
}

export type BreadcrumbCrumb = { name: string; path: string }

export function useBreadcrumb(crumbs: BreadcrumbCrumb[]) {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        // A stable key so navigating between pages replaces (not stacks) the
        // breadcrumb JSON-LD in the head.
        key: 'breadcrumb-jsonld',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: crumbs.map((c, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: c.name,
            item: `${SITE_URL}${c.path.startsWith('/') ? c.path : `/${c.path}`}`,
          })),
        }),
      },
    ],
  })
}

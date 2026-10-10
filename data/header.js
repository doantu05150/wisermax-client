// Primary navigation shown in the sticky site header
export const headers = [
  { title: 'Products', key: 'products', url: '/products' },
  { title: 'About', key: 'about_us', url: '/about-us' },
  { title: 'Contact', key: 'contact_us', url: '/contact' },
]

// Anchor nav rendered only on the homepage
export const homeAnchors = [
  { title: 'Capabilities', href: '#capabilities' },
  { title: 'How we work', href: '#process' },
  { title: 'Products', href: '#products' },
  { title: 'Quality', href: '#quality' },
  { title: 'Factory', href: '#factory' },
]

// Category quick-links kept for programmatic use (product landing / footer)
export const productCategories = [
  { title: `Women's wear`, key: 'women', url: '/products/women' },
  { title: `Men's wear`, key: 'men', url: '/products/men' },
  { title: `Kids' wear`, key: 'kids', url: '/products/kids' },
]

/* ==================================================================
   JSON-LD structured data for search engines.

   Each function returns a plain object that gets serialised into a
   <script type="application/ld+json"> tag by the JsonLd component.
   Google, Bing and other crawlers read these to build rich results —
   star ratings, breadcrumbs, FAQ accordions, course cards, etc.
================================================================== */

const BASE = (process.env.NEXT_PUBLIC_SITE_URL || 'https://techcaddludhiana.com').replace(/\/$/, '')
const LOGO = `${BASE}/tece_new_logo.png`

/* ---- Organisation ---- */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': `${BASE}/#organization`,
    name: 'techcadd Computer Education',
    alternateName: 'techcadd',
    url: BASE,
    logo: LOGO,
    image: LOGO,
    description:
      'Practical, industry-focused IT training institute in Ludhiana offering courses in AI, programming, data science, digital marketing, cyber security and cloud computing.',
    foundingDate: '2016',
    founder: {
      '@type': 'Person',
      name: 'Gourav Gupta',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'SCO 23, Feroze Gandhi Market',
      addressLocality: 'Ludhiana',
      addressRegion: 'Punjab',
      postalCode: '141001',
      addressCountry: 'IN',
    },
    telephone: '+919888122667',
    email: 'info@techcadd.com',
    sameAs: [
      // Add social media URLs when available
    ],
    areaServed: {
      '@type': 'State',
      name: 'Punjab',
    },
  }
}

/* ---- Local Business (for Google Maps / local pack) ---- */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': `${BASE}/#localbusiness`,
    name: 'techcadd Ludhiana',
    url: BASE,
    logo: LOGO,
    image: LOGO,
    telephone: '+919888122667',
    email: 'info@techcadd.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'SCO 23, Feroze Gandhi Market',
      addressLocality: 'Ludhiana',
      addressRegion: 'Punjab',
      postalCode: '141001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.9010,
      longitude: 75.8573,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    priceRange: '$$',
  }
}

/* ---- Website (sitelinks search box) ---- */
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE}/#website`,
    name: 'techcadd',
    url: BASE,
    publisher: { '@id': `${BASE}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE}/courses?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

/* ---- Breadcrumbs ---- */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${BASE}${item.url}`,
    })),
  }
}

/* ---- Course ---- */
export function courseSchema(course: {
  name: string
  slug: string
  sub: string
  duration: string
  category: string
  level: string
  mode: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.name,
    description: course.sub,
    url: `${BASE}/courses/${course.slug}`,
    provider: {
      '@type': 'EducationalOrganization',
      name: 'techcadd',
      url: BASE,
    },
    educationalLevel: course.level,
    timeRequired: course.duration,
    courseMode: course.mode,
    inLanguage: 'en',
    isAccessibleForFree: false,
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'Blended',
      courseWorkload: course.duration,
      instructor: {
        '@type': 'Organization',
        name: 'techcadd',
      },
    },
    offers: {
      '@type': 'Offer',
      category: 'Paid',
      availability: 'https://schema.org/InStock',
    },
    about: {
      '@type': 'Thing',
      name: course.category,
    },
  }
}

/* ---- FAQ ---- */
export function faqSchema(questions: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}

/* ---- Blog / Article ---- */
export function articleSchema(post: {
  title: string
  slug: string
  excerpt: string
  date: string
  cover?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    url: `${BASE}/blog/${post.slug}`,
    image: post.cover || LOGO,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'techcadd',
      url: BASE,
    },
    publisher: {
      '@type': 'Organization',
      name: 'techcadd',
      logo: { '@type': 'ImageObject', url: LOGO },
    },
  }
}

/* ---- Review aggregate ---- */
export function aggregateRatingSchema(rating: number, count: number) {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'techcadd Ludhiana',
    url: BASE,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: rating.toFixed(1),
      bestRating: '5',
      worstRating: '1',
      ratingCount: String(count),
    },
  }
}

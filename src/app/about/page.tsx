import type { Metadata } from 'next'
import AboutPage from '@/views/AboutPage'
import JsonLd from '@/components/seo/JsonLd'
import { breadcrumbSchema } from '@/lib/structuredData'
import { HERO } from '@/data/aboutPage'

export const metadata: Metadata = {
  title: 'About techcadd — our people, our story, our approach',
  description: HERO.lead,
  alternates: { canonical: '/about' },
}

const BREADCRUMB = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
])

export default function AboutRoute() {
  return (
    <>
      <JsonLd data={BREADCRUMB} />
      <AboutPage />
    </>
  )
}

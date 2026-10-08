import type { Metadata } from 'next'
import FounderPage from '@/views/FounderPage'
import JsonLd from '@/components/seo/JsonLd'
import { breadcrumbSchema } from '@/lib/structuredData'
import { FD_HERO } from '@/data/founder'

export const metadata: Metadata = {
  title: 'Our Founder — Gourav Gupta, techcadd Ludhiana',
  description: FD_HERO.lead,
  alternates: { canonical: '/founder' },
}

const BREADCRUMB = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Founder', url: '/founder' },
])

export default function FounderRoute() {
  return (
    <>
      <JsonLd data={BREADCRUMB} />
      <FounderPage />
    </>
  )
}

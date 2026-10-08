import type { Metadata } from 'next'
import PartnershipsPage from '@/views/PartnershipsPage'
import JsonLd from '@/components/seo/JsonLd'
import { breadcrumbSchema } from '@/lib/structuredData'
import { PT_HERO } from '@/data/partnerships'

export const metadata: Metadata = {
  title: 'College Partnerships — industrial training and workshops with techcadd',
  description: PT_HERO.lead,
  alternates: { canonical: '/college-partnerships' },
}

const BREADCRUMB = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'College Partnerships', url: '/college-partnerships' },
])

export default function PartnershipsRoute() {
  return (
    <>
      <JsonLd data={BREADCRUMB} />
      <PartnershipsPage />
    </>
  )
}

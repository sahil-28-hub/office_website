import type { Metadata } from 'next'
import CookiePolicyPage from '@/views/CookiePolicyPage'
import JsonLd from '@/components/seo/JsonLd'
import { breadcrumbSchema } from '@/lib/structuredData'
import { COOKIE_POLICY } from '@/data/legal'

export const metadata: Metadata = {
  title: COOKIE_POLICY.metaTitle,
  description: COOKIE_POLICY.hero.lead,
  alternates: { canonical: COOKIE_POLICY.path },
  robots: { index: false, follow: true },
}

const BREADCRUMB = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Cookie Policy', url: COOKIE_POLICY.path },
])

export default function CookiePolicyRoute() {
  return (
    <>
      <JsonLd data={BREADCRUMB} />
      <CookiePolicyPage />
    </>
  )
}

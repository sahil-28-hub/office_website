import type { Metadata } from 'next'
import FaqPage from '@/views/FaqPage'
import JsonLd from '@/components/seo/JsonLd'
import { faqPageSchema, breadcrumbSchema } from '@/lib/structuredData'
import { FAQ_HERO, FAQS } from '@/data/faq'
import { cmsFetchAll } from '@/lib/cms.server'
import { mapFaq } from '@/lib/cms'

export const metadata: Metadata = {
  title: 'FAQ — courses, fees, batches and placements at techcadd',
  description: FAQ_HERO.lead,
  alternates: { canonical: '/faq' },
}

const BREADCRUMB = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'FAQ', url: '/faq' },
])

export default async function FaqRoute() {
  const faqs = await cmsFetchAll('/faqs', { map: mapFaq })

  const schemaFaqs = faqs?.length ? faqs : FAQS

  return (
    <>
      <JsonLd data={faqPageSchema(schemaFaqs)} />
      <JsonLd data={BREADCRUMB} />
      <FaqPage initialFaqs={faqs} />
    </>
  )
}

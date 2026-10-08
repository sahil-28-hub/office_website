import type { Metadata } from 'next'
import ContactPage from '@/views/ContactPage'
import JsonLd from '@/components/seo/JsonLd'
import { breadcrumbSchema, contactPageSchema } from '@/lib/structuredData'
import { ADDRESS_FULL, PHONE_DISPLAY } from '@/data/contact'
import { getSiteSettings } from '@/lib/siteSettings'
import { cmsFetchList } from '@/lib/cms.server'
import { mapFaq } from '@/lib/cms'

/* The address and the number are in the title and description on
   purpose: "techcadd ludhiana contact number" and "techcadd ludhiana
   address" are what people type, and this is the page that answers
   both. */
const DESCRIPTION = `Visit techcadd Ludhiana at ${ADDRESS_FULL}, or call ${PHONE_DISPLAY} to ask about courses, batch timings and fees, or to book a free demo class and counselling session.`

export const metadata: Metadata = {
  title: 'Contact techcadd Ludhiana — Address, Phone Number & Free Demo',
  description: DESCRIPTION,
  keywords: [
    'techcadd ludhiana contact number',
    'techcadd ludhiana address',
    'techcadd bharat nagar chowk',
    'techcadd ludhiana phone number',
    'techcadd ludhiana demo class',
    'computer institute in ludhiana contact',
  ],
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact techcadd Ludhiana — Address, Phone Number & Free Demo',
    description: DESCRIPTION,
    url: '/contact',
    type: 'website',
  },
}

const BREADCRUMB = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Contact', url: '/contact' },
])

export default async function ContactRoute() {
  const [settings, faqs] = await Promise.all([
    getSiteSettings(),
    cmsFetchList('/faqs?featured=1', { map: mapFaq }),
  ])

  return (
    <>
      <JsonLd data={BREADCRUMB} />
      <JsonLd data={contactPageSchema()} />
      <ContactPage settings={settings} faqs={faqs} />
    </>
  )
}

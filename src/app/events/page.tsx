import type { Metadata } from 'next'
import EventsPage from '@/views/EventsPage'
import JsonLd from '@/components/seo/JsonLd'
import { breadcrumbSchema } from '@/lib/structuredData'
import { cmsFetchList } from '@/lib/cms.server'
import { mapEvent } from '@/lib/cms'

export const metadata: Metadata = {
  title: 'Events — workshops and seminars at techcadd Ludhiana',
  description:
    'Hands-on workshops, industry talks and guest sessions at the techcadd Ludhiana campus.',
  alternates: { canonical: '/events' },
}

const BREADCRUMB = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Events', url: '/events' },
])

/*
  The events module has existed in the CMS from the start — agendas,
  speakers, venues, registration links — and the website had no page
  that showed any of it, so everything an editor entered there was
  written for nobody.

  There is no bundled fallback for this one, and there should not be:
  a fabricated workshop with a date on it is worse than an empty
  calendar, and the page says plainly when there is nothing on.
*/
export default async function EventsRoute() {
  const events = await cmsFetchList('/events', { map: mapEvent, limit: 100 })

  return (
    <>
      <JsonLd data={BREADCRUMB} />
      <EventsPage events={events ?? []} />
    </>
  )
}

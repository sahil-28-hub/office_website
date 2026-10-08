import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import EventPage from '@/views/EventPage'
import JsonLd from '@/components/seo/JsonLd'
import { breadcrumbSchema, SITE_URL } from '@/lib/structuredData'
import { cmsFetchRecord, cmsFetchSlugs } from '@/lib/cms.server'
import { mapEvent } from '@/lib/cms'

export async function generateStaticParams() {
  const slugs = await cmsFetchSlugs('/events')
  return slugs.map((slug) => ({ slug }))
}

async function getEvent(slug: string) {
  return cmsFetchRecord(`/events/${encodeURIComponent(slug)}`, { map: mapEvent })
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const event = await getEvent(slug)

  if (!event) return { title: 'Event not found — techcadd', robots: { index: false, follow: true } }

  const title = event.metaTitle || `${event.title} — techcadd`
  const description = event.metaDescription || event.summary || ''

  return {
    title,
    description,
    alternates: { canonical: `/events/${slug}` },
    openGraph: {
      title,
      description,
      type: 'article',
      ...(event.cover ? { images: [event.cover] } : {}),
    },
  }
}

/**
 * schema.org/Event, built only from fields the CMS actually holds.
 *
 * Written here rather than in structuredData.ts because it is the only
 * page that emits one, and because every property is conditional: a
 * rich result that claims a venue for an online session, or a start
 * time the CMS never recorded, is worse than a smaller valid one.
 */
function eventSchema(event: any) {
  const online = /online/i.test(event.mode || '')

  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    ...(event.summary ? { description: event.summary } : {}),
    /* Date only — the CMS stores the time separately and as a label,
       not as something that can be combined into a valid ISO stamp. */
    ...(event.startsOn ? { startDate: String(event.startsOn).slice(0, 10) } : {}),
    ...(event.endsOn ? { endDate: String(event.endsOn).slice(0, 10) } : {}),
    eventAttendanceMode: online
      ? 'https://schema.org/OnlineEventAttendanceMode'
      : 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    ...(event.cover ? { image: event.cover } : {}),
    ...(event.venueName || event.venueAddress
      ? {
          location: {
            '@type': 'Place',
            name: event.venueName || event.city || 'techcadd',
            ...(event.venueAddress ? { address: event.venueAddress } : {}),
          },
        }
      : {}),
    organizer: {
      '@type': 'Organization',
      name: event.hostName || 'TechCadd Computer Education',
      url: SITE_URL,
    },
    /* Only speakers the CMS actually names. An empty `performer` array is
       worse than none: it asserts the event has no speakers. */
    ...(event.speakers?.length
      ? {
          performer: event.speakers.map((speaker: any) => ({
            '@type': 'Person',
            name: speaker.name,
            ...(speaker.role ? { jobTitle: speaker.role } : {}),
            ...(speaker.org ? { worksFor: { '@type': 'Organization', name: speaker.org } } : {}),
          })),
        }
      : {}),
    ...(event.registrationUrl && !event.past
      ? {
          offers: {
            '@type': 'Offer',
            url: event.registrationUrl,
            availability: 'https://schema.org/InStock',
          },
        }
      : {}),
  }
}

export default async function EventRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const event = await getEvent(slug)

  if (!event) notFound()

  return (
    <>
      <JsonLd data={eventSchema(event)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Events', url: '/events' },
          { name: event.title, url: `/events/${slug}` },
        ])}
      />
      <EventPage event={event} />
    </>
  )
}

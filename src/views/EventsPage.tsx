'use client'

import { useMemo, useState } from 'react'
import SmartLink from '../components/common/SmartLink'
import PageHero from '../components/kit/PageHero'
import PageCta from '../components/kit/PageCta'
import { EventIcon } from '../components/events/EventIcons'
import { useFilteredReveal } from '../hooks/usePageMotion'
import '../components/kit/page-kit.css'
import '../components/events/events.css'

/* ------------------------------------------------------------------
   /events — the seminars and workshops the CMS holds.

   The card carries only what somebody scanning a list decides on:
   what kind of thing it is, whether it has already happened, when it
   is, and the first line of what it covers. Everything else — agenda,
   speakers, who it is for, the gallery — is on the event's own page,
   because a card that tries to hold all of it stops being scannable.

   UPCOMING AND PAST IN ONE REQUEST, SPLIT HERE

   The API returns the whole published set and leaves the judgement to
   the site — deliberately, so "which side of today is this" is decided
   in one place rather than by two endpoints that have to agree.
   `mapEvent` makes that call against the event's LAST day, and an
   editor can override it per event.
------------------------------------------------------------------ */

export type EventCard = {
  id: string
  slug: string
  title: string
  type: string
  category?: string
  lifecycle?: string
  mode: string
  summary: string
  startsOn?: string
  cover?: string
  coverAlt: string
  dateLabel: string
  city: string
  past: boolean
}

/** 'guest-lecture' → 'Guest lecture'. The CMS stores the machine form. */
export function label(value: string) {
  if (!value) return ''
  const spaced = value.replace(/-/g, ' ')
  return spaced.charAt(0).toUpperCase() + spaced.slice(1)
}

function Card({ event }: { event: EventCard }) {
  const stage = event.lifecycle === 'ongoing' ? 'Live' : event.past ? 'Past' : 'Upcoming'

  return (
    <li className="ev-cell" data-reveal>
      <SmartLink className="ev-card" href={`/events/${event.slug}`}>
        <span className="ev-card-media">
          {event.cover ? (
            <img src={event.cover} alt={event.coverAlt} loading="lazy" decoding="async" />
          ) : (
            /* No cover uploaded yet. A branded panel rather than a
               broken frame or a stretched placeholder. */
            <span className="ev-card-blank" aria-hidden="true" />
          )}

          {/* Two marks in opposite corners: the stage top-right, because
              it is the thing most likely to change a reader's mind, and
              the kind bottom-left over the image's quieter edge. */}
          <span className={`ev-badge ev-badge--${stage.toLowerCase()}`}>{stage}</span>
          {event.type && <span className="ev-kind">{label(event.type)}</span>}
        </span>

        <span className="ev-card-body">
          {event.dateLabel && (
            <span className="ev-card-when">
              <EventIcon name="calendar" />
              {event.dateLabel}
            </span>
          )}

          <span className="ev-card-title">{event.title}</span>

          {event.summary && <span className="ev-card-lead">{event.summary}</span>}

          {(event.category || event.city) && (
            <span className="ev-card-meta">
              {[event.category, event.city].filter(Boolean).join(' · ')}
            </span>
          )}
        </span>
      </SmartLink>
    </li>
  )
}

export default function EventsPage({ events = [] }: { events?: EventCard[] }) {
  const [tab, setTab] = useState<'upcoming' | 'past'>('upcoming')

  const upcoming = useMemo(
    /*
      Soonest first. The API sorts newest-first, which is right for a
      past list and backwards for a future one — the next thing
      happening belongs at the top.

      An event an editor has marked as running now leads regardless of
      its dates: it is the most useful thing on the page.
    */
    () =>
      events
        .filter((event) => !event.past)
        .sort((a, b) => {
          const live = (e: EventCard) => (e.lifecycle === 'ongoing' ? 0 : 1)
          return live(a) - live(b) || String(a.startsOn ?? '').localeCompare(String(b.startsOn ?? ''))
        }),
    [events]
  )

  const past = useMemo(() => events.filter((event) => event.past), [events])

  /* Opens on whichever list has something in it, so a site with only
     finished events does not greet a visitor with an empty tab. */
  const active = tab === 'upcoming' && !upcoming.length && past.length ? 'past' : tab
  const visible = active === 'upcoming' ? upcoming : past

  const ref = useFilteredReveal(`${active}:${visible.length}`)

  return (
    <div className="tc-page tc-page--events">
      <main id="main">
        <PageHero
          eyebrow="Events"
          title="Seminars, workshops and"
          accent="the days we spend teaching in public."
          lead="Hands-on sessions at our campus and at colleges across Punjab — taught by the people who run our courses."
          image="/lab-demo.webp"
          stats={undefined}
          facts={undefined}
          actions={undefined}
          id="events-top"
        />

        <section className="ap-light ap-sec" id="listing">
          <div className="shell" ref={ref}>
            <div className="ev-head">
              <p className="ap-eyebrow">Events</p>

              {/* Tabs only when both sides have something — a single tab
                  is a label pretending to be a control. Otherwise the
                  count, which is the same information without the lie. */}
              {upcoming.length > 0 && past.length > 0 ? (
                <ul className="ev-tabs">
                  {(['upcoming', 'past'] as const).map((key) => (
                    <li key={key}>
                      <button
                        type="button"
                        className={active === key ? 'is-active' : undefined}
                        aria-pressed={active === key}
                        onClick={() => setTab(key)}
                      >
                        {key === 'upcoming' ? 'Upcoming' : 'Past'}
                        <span>{key === 'upcoming' ? upcoming.length : past.length}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="ev-count">
                  {visible.length} {visible.length === 1 ? 'event' : 'events'}
                </p>
              )}
            </div>

            {visible.length ? (
              <ul className="ev-grid">
                {visible.map((event) => (
                  <Card event={event} key={event.id} />
                ))}
              </ul>
            ) : (
              <p className="tc-empty">
                Nothing on the calendar just now. New workshops are announced here first —
                and the counselling desk can tell you what is being planned.
              </p>
            )}
          </div>
        </section>

        <PageCta
          eyebrow="Want a session at your college?"
          title="We run these on campus too."
          lead="Talk to us about a workshop or a guest lecture for your department."
          primary={{ label: 'Get in touch', href: '/contact' }}
          secondary={{ label: 'College partnerships', href: '/college-partnerships' }}
        />
      </main>
    </div>
  )
}

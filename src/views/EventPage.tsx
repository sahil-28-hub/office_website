'use client'

import SmartLink from '../components/common/SmartLink'
import VideoPlayer from '../components/common/VideoPlayer'
import PageCta from '../components/kit/PageCta'
import { EventIcon } from '../components/events/EventIcons'
import { label } from './EventsPage'
import { useFilteredReveal } from '../hooks/usePageMotion'
import '../components/kit/page-kit.css'
import '../components/events/events.css'

/* ------------------------------------------------------------------
   One event — /events/<slug>.

   THE SHAPE

   A dark banner carrying the three things that decide whether to read
   on — what kind of session, how it runs, whether it has happened —
   then a strip of the three facts people actually came for (when,
   what time, where), then the detail in two columns.

   The right-hand column is sticky and holds the one action: register,
   or, for something that has finished, an honest note and a way to
   see what is next. It stays in view because a visitor deep in an
   agenda should not have to scroll back up to act on it.

   EVERY BAND IS CONDITIONAL

   An event with no agenda, no speakers and no gallery is a title, a
   date and a paragraph — which is what most of them are — and it
   should not leave a trail of empty headings behind it.
------------------------------------------------------------------ */

export default function EventPage({ event }: { event: any }) {
  const ref = useFilteredReveal(`${event.slug}`)

  /* An event that has finished should not still be inviting people to
     register — the link usually outlives the date. */
  const canRegister = Boolean(event.registrationUrl) && !event.past

  const stage =
    event.lifecycle === 'ongoing'
      ? 'Happening now'
      : event.past
        ? 'Already happened'
        : 'Upcoming'

  /* The three facts the banner promises, each dropped when the CMS has
     nothing for it — an empty "Where" is worse than one fewer column. */
  const facts = [
    { icon: 'calendar', label: 'Date', value: event.dateLabel },
    { icon: 'clock', label: 'Time', value: event.timeLabel || 'To be announced' },
    {
      icon: 'pin',
      label: 'Where',
      value: [event.venueName, event.city].filter(Boolean).join(', '),
    },
  ].filter((fact) => fact.value)

  const hasContact = event.contactName || event.contactPhone || event.contactEmail

  return (
    <div className="tc-page tc-page--event" ref={ref}>
      <main id="main">
        {/* ---- banner ------------------------------------------------ */}
        <section className="evd-hero">
          <span className="evd-hero-grid" aria-hidden="true" />
          <span className="evd-hero-orb" aria-hidden="true" />

          <div className="shell evd-hero-inner">
            <SmartLink className="evd-back" href="/events">
              <EventIcon name="arrowLeft" />
              All events
            </SmartLink>

            <ul className="evd-pills">
              {event.type && <li>{label(event.type)}</li>}
              {event.mode && <li>{label(event.mode)}</li>}
              <li className={`evd-pill--stage is-${event.past ? 'past' : 'live'}`}>{stage}</li>
            </ul>

            <h1>{event.title}</h1>

            {event.summary && <p className="evd-lead">{event.summary}</p>}
          </div>
        </section>

        {/* ---- the facts strip --------------------------------------- */}
        {facts.length > 0 && (
          <section className="evd-facts">
            <div className="shell evd-facts-inner">
              {facts.map((fact) => (
                <div className="evd-fact" key={fact.label}>
                  <p className="evd-fact-key">
                    <EventIcon name={fact.icon} />
                    {fact.label}
                  </p>
                  <p className="evd-fact-value">{fact.value}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ---- body + sidebar ---------------------------------------- */}
        <section className="ap-light ap-sec evd-main">
          <div className="shell evd-cols">
            <div className="evd-body">
              {event.cover && (
                <figure className="evd-cover" data-reveal>
                  <img
                    src={event.cover}
                    alt={event.coverAlt || event.title}
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              )}

              {event.highlights.length > 0 && (
                <ul className="evd-highlights" data-reveal>
                  {event.highlights.map((highlight: string) => (
                    <li key={highlight}>
                      <EventIcon name="arrowRight" size={14} />
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}

              {/* Authored in the CMS by a signed-in editor, rendered
                  through the same class a blog post's body uses. */}
              {event.body?.trim() && (
                <div
                  className="tc-article-body"
                  data-reveal
                  dangerouslySetInnerHTML={{ __html: event.body }}
                />
              )}

              {/* Played on the page rather than sending anyone to
                  YouTube mid-decision. */}
              {event.videoUrl && (
                <div className="evd-video" data-reveal>
                  <VideoPlayer
                    url={event.videoUrl}
                    title={event.videoTitle || `${event.title} — video`}
                  />
                </div>
              )}

              {event.whoCanAttend && (
                <div className="evd-block" data-reveal>
                  <h2>Who can attend</h2>
                  <p>{event.whoCanAttend}</p>
                </div>
              )}

              {event.prerequisites && (
                <div className="evd-block" data-reveal>
                  <h2>What you need beforehand</h2>
                  <p>{event.prerequisites}</p>
                </div>
              )}

              {event.agenda.length > 0 && (
                <div className="evd-block" data-reveal>
                  <h2>Schedule</h2>
                  <ol className="evd-agenda">
                    {event.agenda.map((item: any) => (
                      <li key={item.id}>
                        {item.timeLabel && <span className="evd-agenda-time">{item.timeLabel}</span>}
                        <span className="evd-agenda-body">
                          <strong>{item.title}</strong>
                          {item.detail && <span>{item.detail}</span>}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {event.speakers.length > 0 && (
                <div className="evd-block" data-reveal>
                  <h2>Who is taking it</h2>
                  <ul className="evd-speakers">
                    {event.speakers.map((speaker: any) => (
                      <li key={speaker.id}>
                        {speaker.photo ? (
                          <img
                            className="evd-speaker-photo"
                            src={speaker.photo}
                            alt=""
                            loading="lazy"
                            decoding="async"
                          />
                        ) : (
                          <span
                            className="evd-speaker-photo evd-speaker-photo--blank"
                            aria-hidden="true"
                          >
                            {speaker.name.charAt(0)}
                          </span>
                        )}
                        <div>
                          <p className="evd-speaker-name">{speaker.name}</p>
                          {(speaker.role || speaker.org) && (
                            <p className="evd-speaker-role">
                              {[speaker.role, speaker.org].filter(Boolean).join(' · ')}
                            </p>
                          )}
                          {speaker.bio && <p className="evd-speaker-bio">{speaker.bio}</p>}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Photographs from the day. Uploaded through the CMS's
                  gallery block on the event, and shown only once there
                  are any — an empty "From the day" heading on an
                  upcoming event promises something that does not exist. */}
              {event.images.length > 0 && (
                <div className="evd-block" data-reveal>
                  <h2>From the day</h2>
                  <ul className="evd-gallery">
                    {event.images.map((image: any, i: number) => (
                      <li key={`${image.src}-${i}`}>
                        <figure>
                          <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
                          {image.caption && <figcaption>{image.caption}</figcaption>}
                        </figure>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {event.faqs.length > 0 && (
                <div className="evd-block" data-reveal>
                  <h2>Questions</h2>
                  <dl className="evd-faqs">
                    {event.faqs.map((faq: any) => (
                      <div key={faq.id || faq.question}>
                        <dt>{faq.question}</dt>
                        <dd>{faq.answer}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              {event.venueAddress && (
                <div className="evd-block" data-reveal>
                  <h2>Getting there</h2>
                  <p>{event.venueAddress}</p>
                  {event.mapUrl && (
                    <p>
                      <SmartLink
                        className="evd-inline-link"
                        href={event.mapUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Open in maps
                        <EventIcon name="arrowRight" size={14} />
                      </SmartLink>
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* ---- the sticky panel ---------------------------------- */}
            <aside className="evd-aside">
              <div className="evd-panel">
                {canRegister ? (
                  <>
                    <h2 className="evd-panel-title">
                      {event.lifecycle === 'ongoing' ? 'This is running now.' : 'Come along.'}
                    </h2>
                    <p className="evd-panel-note">
                      {typeof event.seats === 'number'
                        ? `Seats are limited — ${event.seats} in the room.`
                        : 'Tell us you are coming and we will send the joining details.'}
                    </p>
                    <SmartLink
                      className="evd-panel-cta"
                      href={event.registrationUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {event.registrationLabel || 'Register'}
                      <EventIcon name="arrowRight" size={16} />
                    </SmartLink>
                  </>
                ) : (
                  <>
                    <h2 className="evd-panel-title">
                      {event.past ? 'This one has finished.' : 'Registration opens soon.'}
                    </h2>
                    <p className="evd-panel-note">
                      We run sessions like this through the year. Tell us what you would like us
                      to cover and we will let you know when the next one is booked.
                    </p>
                    <SmartLink className="evd-panel-cta" href="/events">
                      See what is coming up
                      <EventIcon name="arrowRight" size={16} />
                    </SmartLink>
                  </>
                )}

                <dl className="evd-panel-facts">
                  {event.dateLabel && (
                    <div>
                      <dt>Date</dt>
                      <dd>{event.dateLabel}</dd>
                    </div>
                  )}
                  {event.timeLabel && (
                    <div>
                      <dt>Time</dt>
                      <dd>{event.timeLabel}</dd>
                    </div>
                  )}
                  {event.mode && (
                    <div>
                      <dt>Format</dt>
                      <dd>{label(event.mode)}</dd>
                    </div>
                  )}
                  {event.category && (
                    <div>
                      <dt>Category</dt>
                      <dd>{event.category}</dd>
                    </div>
                  )}
                  {event.venueName && (
                    <div>
                      <dt>Venue</dt>
                      <dd>{event.venueName}</dd>
                    </div>
                  )}
                  {event.hostName && (
                    <div>
                      <dt>Run with</dt>
                      <dd>{event.hostName}</dd>
                    </div>
                  )}
                </dl>

                {hasContact && (
                  <div className="evd-panel-contact">
                    <p className="evd-panel-key">Who to ask</p>
                    {event.contactName && <p>{event.contactName}</p>}
                    {event.contactPhone && (
                      <p>
                        <SmartLink href={`tel:${event.contactPhone.replace(/[^\d+]/g, '')}`}>
                          {event.contactPhone}
                        </SmartLink>
                      </p>
                    )}
                    {event.contactEmail && (
                      <p>
                        <SmartLink href={`mailto:${event.contactEmail}`}>
                          {event.contactEmail}
                        </SmartLink>
                      </p>
                    )}
                  </div>
                )}

                {event.social.length > 0 && (
                  <div className="evd-panel-contact">
                    <p className="evd-panel-key">Follow this event</p>
                    <p className="evd-panel-social">
                      {event.social.map((link: any, i: number) => (
                        <span key={link.platform}>
                          {i > 0 && ' · '}
                          <SmartLink href={link.url} target="_blank" rel="noreferrer noopener">
                            {label(link.platform)}
                          </SmartLink>
                        </span>
                      ))}
                    </p>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </section>

        <PageCta
          eyebrow={canRegister ? 'Seats are limited' : 'Get in touch'}
          title={canRegister ? 'Register for this session.' : 'Ask about the next one.'}
          lead={
            canRegister
              ? 'Tell us you are coming so we can keep a seat and send you the joining details.'
              : 'Tell us what you would like to attend and we will let you know when it is scheduled.'
          }
          primary={
            canRegister
              ? { label: event.registrationLabel || 'Register', href: event.registrationUrl }
              : { label: 'Contact us', href: '/contact' }
          }
          secondary={{ label: 'All events', href: '/events' }}
        />
      </main>
    </div>
  )
}

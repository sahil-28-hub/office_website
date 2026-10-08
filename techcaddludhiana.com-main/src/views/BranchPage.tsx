'use client'

import { useReveal } from '../hooks/useCourseMotion'
import '../components/kit/page-kit.css'
import './BranchPage.css'
import PageHero from '../components/kit/PageHero'
import Cta from '../components/sections/Cta'
import SmartLink from '../components/common/SmartLink'
import PageIcon from '../components/kit/icons'
import { getBranch, CATEGORY_LABELS } from '../data/branches'

/* ------------------------------------------------------------------
   One page per campus — /branches/jalandhar, /branches/mohali,
   /branches/ludhiana, /branches/phagwara, /branches/maqsudan,
   /branches/hoshiarpur, /branches/amritsar. Jalandhar and Mohali each
   run their own site and Ludhiana is this entire site, so those three
   pages lean on a hero action and a "Full site" row (see branch.
   externalSite in data/branches.js) to hand the visitor on rather
   than duplicating content that already exists elsewhere. The other
   four say plainly that a campus-specific address isn't published
   yet, rather than guessing at one.

   Same one-component-many-cities shape as CoursePage — the slug picks
   which branches.js entry fills the template.

     §1  banner            dark, city name
     §2  what you get here light
     §3  the catalogue     dark, category chips linking to /courses
     §4  reach this campus light
     §5  the CTA band      shared with every other page
------------------------------------------------------------------ */

function NotFound({ slug }) {
  return (
    <div className="tc-page tc-page--branch">
      <main id="main">
        <PageHero
          eyebrow="techcadd campus"
          title="No campus at"
          accent={`“${slug}”`}
          lead="That's not one of our listed campuses — see the Branches menu for the ones we do have, or ask at Contact Us."
          id="branch-top"
        />
        <section className="ap-light ap-sec">
          <div className="shell tc-branch-notfound">
            <SmartLink className="ap-btn ap-btn--dark" href="/contact">
              Contact us
              <PageIcon name="arrowRight" />
            </SmartLink>
          </div>
        </section>
        <Cta />
      </main>
    </div>
  )
}

function Intro({ branch }) {
  const ref = useReveal()

  return (
    <section className="ap-light ap-sec" id="about" ref={ref}>
      <div className="shell">
        <div className="ap-head">
          <p className="ap-eyebrow" data-reveal>{branch.intro.eyebrow}</p>
          <h2 className="ap-title" data-reveal style={{ '--d': '80ms' }}>{branch.intro.title}</h2>
        </div>

        <div className="ap-body tc-branch-intro-body">
          {branch.intro.body.map((paragraph, i) => (
            <p key={i} data-reveal style={{ '--d': `${140 + i * 90}ms` }}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

function Catalogue({ city }) {
  const ref = useReveal()

  return (
    <section className="ap-dark ap-sec" id="courses" ref={ref}>
      <div className="shell">
        <div className="ap-head ap-head--center">
          <p className="ap-eyebrow" data-reveal>One catalogue, every campus</p>
          <h2 className="ap-title" data-reveal style={{ '--d': '80ms' }}>
            Everything we teach, taught in {city} too
          </h2>
        </div>

        <ul className="tc-branch-chips" data-reveal="rise" style={{ '--d': '140ms' }}>
          {CATEGORY_LABELS.map((label) => (
            <li key={label}>
              <span className="ap-chip">{label}</span>
            </li>
          ))}
        </ul>

        <div className="tc-branch-catalogue-cta" data-reveal style={{ '--d': '220ms' }}>
          <SmartLink className="ap-btn ap-btn--primary" href="/courses">
            Browse the full catalogue
            <PageIcon name="arrowRight" />
          </SmartLink>
        </div>
      </div>
    </section>
  )
}

function Reach({ branch }) {
  const ref = useReveal()
  const { contact } = branch
  const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.mapQuery)}`

  return (
    <section className="ap-light ap-light--tint ap-sec" id="contact" ref={ref}>
      <div className="shell">
        <div className="tc-split">
          <div className="ap-head">
            <p className="ap-eyebrow" data-reveal>{contact.eyebrow}</p>
            <h2 className="ap-title" data-reveal style={{ '--d': '80ms' }}>{contact.title}</h2>
            <p className="ap-lead" data-reveal style={{ '--d': '150ms' }}>{contact.body}</p>
          </div>

          <dl className="tc-kv" data-reveal="right">
            {branch.address && (
              <div>
                <dt>Address</dt>
                <dd>{branch.address}</dd>
              </div>
            )}
            <div>
              <dt>Call</dt>
              <dd><SmartLink href={`tel:${contact.phoneDial}`}>{contact.phoneDisplay}</SmartLink></dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd><SmartLink href={`mailto:${contact.email}`}>{contact.email}</SmartLink></dd>
            </div>
            <div>
              <dt>Find it on the map</dt>
              <dd>
                <SmartLink href={directionsHref}>
                  {branch.address ? 'Get directions' : `Search ${branch.city} on Google Maps`}
                </SmartLink>
              </dd>
            </div>
            {branch.externalSite && (
              <div>
                <dt>Full site</dt>
                <dd><SmartLink href={branch.externalSite.href}>{branch.externalSite.label}</SmartLink></dd>
              </div>
            )}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default function BranchPage({ slug }: { slug: string }) {
  const branch = getBranch(slug)

  if (!branch) return <NotFound slug={slug} />

  return (
    <div className="tc-page tc-page--branch">
      <main id="main">
        <PageHero {...branch.hero} id="branch-top" />
        <Intro branch={branch} />
        <Catalogue city={branch.city} />
        <Reach branch={branch} />
        <Cta />
      </main>
    </div>
  )
}

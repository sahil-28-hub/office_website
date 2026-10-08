'use client'

import '../components/contact/contact-base.css'
import ContactHero from '../components/contact/ContactHero'
import ContactChannels from '../components/contact/ContactChannels'
import VisitSteps from '../components/contact/VisitSteps'
import Ask from '../components/sections/Ask'
import ContactForm from '../components/contact/ContactForm'
import SupportDesk from '../components/contact/SupportDesk'
import VirtualCounselling from '../components/contact/VirtualCounselling'
import Centres from '../components/contact/Centres'
import ContactMap from '../components/contact/ContactMap'
import PageLinks from '../components/sections/PageLinks'
import Cta from '../components/sections/Cta'

/* ------------------------------------------------------------------
   Contact us — the group's contact page, in this site's own design.

   The running order is the one the group's reference page uses:

     1  banner              call, WhatsApp, or jump to the form
     2  channels            call · WhatsApp · email · visit
     3  support desks       who to ask for
     4  virtual counselling the three-step booking dialog
     5  the enquiry form    writes to the leads table
     6  the map             the campus, with directions
     7  a campus visit      the three steps before enrolling
     8  the other centres   every techcadd centre
     9  questions           the featured FAQs
    10  call to action

   The fastest routes come first — ringing and messaging — and the form,
   the slowest, sits under them for the visitor who would rather write.
------------------------------------------------------------------ */
/**
 * @param settings the CMS settings row, fetched by
 *   src/app/contact/page.tsx. Every place this page prints a phone
 *   number, an email or a social profile reads it from here, so the
 *   contact page and the footer can never disagree.
 */
export default function ContactPage({
  settings,
  faqs
}: {
  settings?: any
  /** the featured questions, fetched by the route */
  faqs?: any[] | null
} = {}) {
  return (
    <div className="contact-page">
      <main id="main">
        <ContactHero settings={settings} />
        <ContactChannels settings={settings} />
        <SupportDesk settings={settings} />
        <VirtualCounselling />
        <div id="enquiry">
          <ContactForm settings={settings} />
        </div>
        <ContactMap />
        <VisitSteps />
        <Centres />
        <Ask initialFaqs={faqs} />
        <PageLinks
          eyebrow="Not ready to enquire yet?"
          links={[
            { label: 'Browse all courses', href: '/courses' },
            { label: 'Read our story', href: '/about' },
            { label: 'See the campus gallery', href: '/gallery' }
          ]}
        />
        <Cta />
      </main>
    </div>
  )
}

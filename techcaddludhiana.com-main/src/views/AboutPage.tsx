'use client'

import '../components/about/about-base.css'
import AboutHero from '../components/about/AboutHero'
import AboutStory from '../components/about/AboutStory'
import AboutTeam from '../components/about/AboutTeam'
import AboutEcosystem from '../components/about/AboutEcosystem'
import AboutOutlook from '../components/about/AboutOutlook'
import AboutAudience from '../components/about/AboutAudience'
import AboutPath from '../components/about/AboutPath'
import AboutEdge from '../components/about/AboutEdge'
import AboutDomains from '../components/about/AboutDomains'
import AboutApproach from '../components/about/AboutApproach'
import AboutIndustry from '../components/about/AboutIndustry'
import AboutRecognition from '../components/about/AboutRecognition'
import AboutBelief from '../components/about/AboutBelief'
import Cta from '../components/sections/Cta'

/* ------------------------------------------------------------------
   About techcadd — reachable at #/about, linked from the About Us
   menu.

   The page opens on a photographic banner and then alternates dark
   and light bands the whole way down:

     §2  banner + the four figures            dark, photo
     §3  who we are                           light
     §3b the team, standing in a row          light
     §4  a skill-building ecosystem           dark
     §5  preparing learners                   light
     §6  learning for every stage             dark
     §7  learn → practice → build → grow      light
     §8  what makes techcadd different        dark
     §9  building skills across domains       light
     §10 practical, future-focused            dark
     §11 connecting education with industry   light
     §12 recognition + §13 a decade           dark
     §14 technology changes, learning never stops   light
     §15 start building your career today     dark

   The navbar and footer come from App, above and below this.
------------------------------------------------------------------ */
export default function AboutPage() {
  return (
    <div className="about-page">
      <main id="main">
        <AboutHero />
        <AboutStory />
        <AboutTeam />
        <AboutEcosystem />
        <AboutOutlook />
        <AboutAudience />
        <AboutPath />
        <AboutEdge />
        <AboutDomains />
        <AboutApproach />
        <AboutIndustry />
        <AboutRecognition />
        <AboutBelief />
        <Cta />
      </main>
    </div>
  )
}

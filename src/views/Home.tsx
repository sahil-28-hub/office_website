'use client'

import { lazy } from 'react'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import PopularCourses from '../components/sections/PopularCourses'
import WhyTechCadd from '../components/sections/WhyTechCadd'
import Deferred from '../components/common/Deferred'
import { SectionSkeleton } from '../components/common/Skeleton'

/* The first four bands are what a visitor sees before scrolling, so
   they ship in the entry chunk. Everything below is code-split and
   fetched as it comes within about a screen and a half — the
   Technologies wall alone carries ~98KB of brand marks that nobody
   waiting on the hero should be paying for. */
const Universe = lazy(() => import('../components/sections/Universe'))
const CourseCategories = lazy(() => import('../components/sections/CourseCategories'))
const Journey = lazy(() => import('../components/sections/Journey'))
const Capabilities = lazy(() => import('../components/sections/Capabilities'))
const Blog = lazy(() => import('../components/sections/Blog'))
const Community = lazy(() => import('../components/sections/Community'))
const Ask = lazy(() => import('../components/sections/Ask'))
const Cta = lazy(() => import('../components/sections/Cta'))

/**
 * The three bands that read the CMS are handed their content by
 * src/app/page.tsx rather than fetching it themselves — see the note
 * on `initial` in src/hooks/useCms.ts. Everything else on this page is
 * bundled copy and takes no props.
 */
export default function Home({
  initialPosts,
  initialFaqs,
  initialTestimonials
}: {
  initialPosts?: any[] | null
  initialFaqs?: any[] | null
  initialTestimonials?: any[] | null
} = {}) {
  return (
    <main id="main">
      {/* Order sets the light/dark rhythm down the page:
          Hero D · About L · Popular D · Why L · Tech L · Track D ·
          Journey L · Capabilities D · Blog L · Reviews D · FAQ L · CTA D
          Find Your Track sits after Technologies (not before Why) so
          the two dark bands either side of it are separated.
          Each skeleton below carries its band's tone, so the rhythm
          holds even while a section is still in flight. */}
      <Hero />
      <About />
      <PopularCourses />
      <WhyTechCadd />

      <Deferred skeleton={<SectionSkeleton band="paper" minHeight="720px" cards={0} label="Loading technologies" />}>
        <Universe />
      </Deferred>

      <Deferred skeleton={<SectionSkeleton band="ink" minHeight="760px" label="Loading course tracks" />}>
        <CourseCategories />
      </Deferred>

      <Deferred skeleton={<SectionSkeleton band="tint" minHeight="640px" cards={4} label="Loading journey" />}>
        <Journey />
      </Deferred>

      <Deferred skeleton={<SectionSkeleton band="ink" minHeight="680px" label="Loading capabilities" />}>
        <Capabilities />
      </Deferred>

      <Deferred skeleton={<SectionSkeleton band="paper" minHeight="620px" label="Loading articles" />}>
        <Blog initialPosts={initialPosts} />
      </Deferred>

      <Deferred skeleton={<SectionSkeleton band="ink" minHeight="700px" label="Loading reviews" />}>
        <Community initialTestimonials={initialTestimonials} />
      </Deferred>

      <Deferred skeleton={<SectionSkeleton band="paper" minHeight="640px" cards={2} label="Loading questions" />}>
        <Ask initialFaqs={initialFaqs} />
      </Deferred>

      {/* the placeholder carries id="demo" too: nav and footer link to
          it, and until Cta's chunk lands its own section — and that id
          — does not exist yet, so the anchor would go nowhere */}
      <Deferred id="demo" skeleton={<SectionSkeleton band="ink" minHeight="420px" cards={0} label="Loading" />}>
        <Cta />
      </Deferred>
    </main>
  )
}

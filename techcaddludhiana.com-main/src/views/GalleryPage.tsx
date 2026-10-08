'use client'

import GalleryHero from '../components/gallery/GalleryHero'
import Gallery from '../components/sections/Gallery'
import PageLinks from '../components/sections/PageLinks'
import Cta from '../components/sections/Cta'

/* ------------------------------------------------------------------
   Gallery — reachable at /gallery and linked from the Resources menu.

   The drifting wall is the gallery. There was a static grid under it
   for a while, there to guarantee every photograph was reachable at
   every width — the wall used to hide columns as the screen narrowed.
   The wall now deals the whole set across however many columns fit,
   so the grid was showing the same fourteen photographs a second
   time and it is gone.

   The photographs come from the CMS gallery albums, fetched by
   src/app/gallery/page.tsx. The set in src/data/gallery.ts is the
   fallback for a CMS with nothing published in it yet.
------------------------------------------------------------------ */
export default function GalleryPage({ photos }: { photos?: any[] | null } = {}) {
  return (
    <div className="gallery-page">
      <main id="main">
        <GalleryHero />
        <Gallery photos={photos} />
        <PageLinks
          eyebrow="Like what you see?"
          links={[
            { label: 'Browse all courses', href: '/courses' },
            { label: 'Get in touch', href: '/contact' },
            { label: 'Learn about techcadd', href: '/about' }
          ]}
        />
        <Cta />
      </main>
    </div>
  )
}

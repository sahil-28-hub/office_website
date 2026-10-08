import type { Metadata } from 'next'
import SmartLink from '@/components/common/SmartLink'
import PageHero from '@/components/kit/PageHero'
import PageCta from '@/components/kit/PageCta'
import { COURSE_INDEX, coursePath } from '@/data/courses/catalog'
import { COURSE_CATEGORIES, categoryPath, categoryTitle } from '@/data/courseCategories'
import { MORE_CATEGORIES, moreCoursesPath } from '@/data/moreCourses'
import { TRAINING_DOMAINS, trainingPath } from '@/data/trainingTracks'
import { BRANCHES, branchPath } from '@/data/branches'
import { BRANCH_CITY } from '@/data/branch'
import '@/components/kit/page-kit.css'
import './sitemap-html.css'

/* ==================================================================
   /sitemap-html — every page on the site, for a person.

   sitemap.xml is the same list for a crawler. This is the one the
   footer links to: grouped the way the navigation is, so somebody who
   cannot find a page in the menus can find it here.

   Built from the same data the pages are — the catalogue, the category
   lists, the training domains, the branches — so a course added to the
   catalogue is listed here without a second edit.
================================================================== */

export const metadata: Metadata = {
  title: `Sitemap — All Pages | techcadd ${BRANCH_CITY}`,
  description: `Every page on techcadd ${BRANCH_CITY} — courses, training, resources and legal pages, organised by section.`,
  alternates: { canonical: '/sitemap-html' },
}

type Group = { title: string; links: { label: string; href: string }[] }

/* the catalogue, under the same headings /courses filters by */
const courseGroups: Group[] = [...new Set(COURSE_INDEX.map((course) => course.category))].map(
  (category) => ({
    title: `${category} courses`,
    links: COURSE_INDEX.filter((course) => course.category === category).map((course) => ({
      label: course.name,
      href: coursePath(course.slug),
    })),
  })
)

const GROUPS: Group[] = [
  {
    title: 'Main pages',
    links: [
      { label: 'Home', href: '/' },
      { label: 'All courses', href: '/courses' },
      { label: 'Contact us', href: '/contact' },
      { label: 'Student reviews', href: '/reviews' },
      { label: 'College partnerships', href: '/college-partnerships' },
    ],
  },
  {
    title: 'About us',
    links: [
      { label: 'About techcadd', href: '/about' },
      { label: 'Founder', href: '/founder' },
      { label: 'Mission & vision', href: '/mission-vision' },
      { label: 'Our team', href: '/team' },
    ],
  },
  {
    title: 'Course categories',
    links: [
      ...COURSE_CATEGORIES.map((category) => ({
        label: categoryTitle(category),
        href: categoryPath(category.slug),
      })),
      ...MORE_CATEGORIES.map((category) => ({
        label: `${category.name} in ${BRANCH_CITY}`,
        href: moreCoursesPath(category.slug),
      })),
    ],
  },
  ...courseGroups,
  {
    title: 'Internship & training',
    links: TRAINING_DOMAINS.map((domain) => ({
      label: `${domain.name} training`,
      href: trainingPath(domain.slug),
    })),
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Events', href: '/events' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Pages', href: '/pages' },
    ],
  },
  {
    title: 'Branches',
    links: BRANCHES.map((branch) => ({
      label: `techcadd ${branch.city}`,
      href: branchPath(branch.slug),
    })),
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookie-policy' },
      { label: 'Refund Policy', href: '/refund-policy' },
      { label: 'Disclaimer', href: '/disclaimer' },
    ],
  },
]

export default function SitemapHtml() {
  return (
    <div className="tc-page tc-page--sitemap">
      <main id="main">
        <PageHero
          eyebrow="Sitemap"
          title="Every page,"
          accent="in one place."
          lead={`All the pages on techcadd ${BRANCH_CITY}, grouped the way the menus are.`}
          image="/lab-demo.webp"
          stats={undefined}
          facts={undefined}
          actions={undefined}
          id="sitemap-top"
        />

        <section className="ap-light ap-sec">
          <div className="shell smap-grid">
            {GROUPS.map((group) => (
              <nav className="smap-group" key={group.title} aria-label={group.title}>
                <h2>{group.title}</h2>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <SmartLink href={link.href}>{link.label}</SmartLink>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </section>

        <PageCta
          eyebrow="Cannot find it?"
          title="Ask us directly."
          lead="If the page you are after is not listed here, the counselling desk can point you at it."
          primary={{ label: 'Contact us', href: '/contact' }}
          secondary={{ label: 'Browse courses', href: '/courses' }}
        />
      </main>
    </div>
  )
}

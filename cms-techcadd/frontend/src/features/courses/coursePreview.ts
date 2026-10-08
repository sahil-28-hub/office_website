import { publicAssetUrl } from '../../api/client'
import { blocksForPreview } from '../shared/contentBlockSchema'
import type { CourseFormValues } from './courseSchema'

/**
 * The shape the website's preview route expects.
 *
 * Mirrors `CourseDraft` in the site's lib/course-preview.ts. It is restated
 * here rather than imported because the two apps are separate builds with no
 * shared package — so this file is the seam, and it is deliberately the only
 * place in the CMS that knows the site's field names.
 */
export interface CoursePreviewDraft {
  title: string
  slug: string
  segment: CourseFormValues['segment']
  categoryName?: string
  tagline?: string
  /* The card blurb and the long description. Both are on the record
     and both feed the page — the short one is the hero's standfirst
     when nothing more specific is set, the long one the overview's
     lead — and neither was ever put on the wire, so editing either
     changed the preview not at all. */
  shortDescription?: string
  description?: string
  /* The hero picture. It is on the record and the page draws it beside
     the heading, and it was never put on the wire — so choosing or
     replacing it changed nothing in the preview until the course was
     saved and the page reloaded. */
  thumbnail?: { url: string; alt?: string }
  tools: string[]
  highlights: string[]
  duration?: string
  level: string
  mode: string
  overview?: string
  videoUrl?: string
  videoTitle?: string
  hiddenSections: string[]
  sectionOrder: string[]
  sections: CourseFormValues['sections']

  /**
   * Everything the course builder added.
   *
   * A hand-kept mirror of `CmsCourse` on the website, because the two apps do
   * not share a module graph — the same reason previewProtocol duplicates the
   * site's preview-protocol. Derived from the form's own types wherever it
   * can be, so a field that changes shape there fails here rather than
   * silently arriving as the wrong thing.
   */
  eyebrow?: string
  badge?: string
  h1?: string
  intro?: string
  eligibility?: string
  certification?: string
  ctaPrimary?: CourseFormValues['ctaPrimary']
  ctaSecondary?: CourseFormValues['ctaSecondary']
  facts: CourseFormValues['facts']
  audience: CourseFormValues['audience']
  audienceIntro?: string
  valueTitle?: string
  valueText?: string
  valueStat?: { num: string; label: string; sub: string }
  benefits: CourseFormValues['benefits']
  careerRoles: CourseFormValues['careerRoles']
  projects: CourseFormValues['projects']
  workflow: CourseFormValues['workflow']
  whyPoints: CourseFormValues['whyPoints']
  whyIntro?: string
  learnTitle?: string
  learnIntro?: string
  learnPoints?: { title: string; body?: string }[]
  learnOutro?: string
  futureTitle?: string
  futureLead?: string
  futureHorizon?: { label?: string; title: string; body?: string }[]
  futureTrends?: { title: string; body?: string }[]
  futureIndustriesNote?: string
  futureIndustries?: string[]
  comparisonRows: CourseFormValues['comparisonRows']
  comparisonIntro?: string
  comparisonOthers?: string
  comparisonNote?: string
  toolItems: CourseFormValues['toolItems']
  syllabusIntro?: string
  syllabusNote?: string

  /** Converted from the form's text to the numbers the mapping expects. */
  plans: (Omit<CourseFormValues['plans'][number], 'months'> & { months?: number })[]
  syllabus: (Omit<CourseFormValues['syllabus'][number], 'fromPlan'> & {
    fromPlan?: number
  })[]
}

/**
 * Form state, as the website would read it.
 *
 * The category is sent by name, not id: the site groups courses under the
 * category's label and has no way to resolve an id it never sees.
 */
export function toPreviewDraft(
  values: Partial<CourseFormValues>,
  categoryOptions: { value: string; label: string }[],
): CoursePreviewDraft {
  return {
    title: values.title ?? '',
    slug: values.slug ?? '',
    segment: values.segment ?? 'courses',
    categoryName: categoryOptions.find((c) => c.value === values.categoryId)?.label,
    tagline: values.tagline || undefined,
    shortDescription: values.shortDescription || undefined,
    description: values.description || undefined,
    /* With a full address: the frame is the website, and a bare
       "/uploads/…" would be asked of the wrong host. */
    thumbnail: values.thumbnail?.url
      ? {
          url: publicAssetUrl(values.thumbnail.url) ?? values.thumbnail.url,
          alt: values.thumbnail.alt ?? undefined,
        }
      : undefined,
    tools: values.tools ?? [],
    highlights: values.highlights ?? [],
    syllabus: (values.syllabus ?? []).map((module) => ({
      ...module,
      fromPlan: module.fromPlan?.trim() ? Number(module.fromPlan) : undefined,
    })),
    duration: values.duration || undefined,
    level: values.level ?? 'beginner',
    mode: values.mode ?? 'offline',
    overview: values.overview || undefined,
    videoUrl: values.videoUrl || undefined,
    videoTitle: values.videoTitle || undefined,
    hiddenSections: values.hiddenSections ?? [],
    sectionOrder: values.sectionOrder ?? [],
    sections: blocksForPreview(values.sections),

    /* ---- Everything the course builder added. ---- */
    eyebrow: values.eyebrow || undefined,
    badge: values.badge || undefined,
    h1: values.h1 || undefined,
    intro: values.intro || undefined,
    eligibility: values.eligibility || undefined,
    certification: values.certification || undefined,
    /* Keyed on the label, which is what the API keys the save on: it
       writes a button's type and URL only when there is text to put on
       it. Carrying a label-less button here would show the preview a
       button that saving is about to discard. */
    ctaPrimary: values.ctaPrimary?.text ? values.ctaPrimary : undefined,
    ctaSecondary: values.ctaSecondary?.text ? values.ctaSecondary : undefined,
    facts: values.facts ?? [],
    audience: values.audience ?? [],
    audienceIntro: values.audienceIntro || undefined,
    valueTitle: values.valueTitle || undefined,
    valueText: values.valueText || undefined,
    /* Carried only when the figure is set — the page draws no stat without
       one, so sending a half-filled record would show the preview a slot the
       published page will not have. */
    valueStat: values.valueStat?.num ? values.valueStat : undefined,
    benefits: values.benefits ?? [],
    careerRoles: values.careerRoles ?? [],
    /* The select's string becomes the boolean, exactly as `forApi` does on
       save — otherwise the preview shows a capstone the save would not make,
       or none where the save would. */
    projects: (values.projects ?? []).map((project: any) => ({
      ...project,
      isCapstone: project.capstone === 'yes',
    })),
    workflow: values.workflow ?? [],
    whyPoints: values.whyPoints ?? [],
    whyIntro: values.whyIntro || undefined,
    learnTitle: values.learnTitle || undefined,
    learnIntro: values.learnIntro || undefined,
    learnPoints: values.learnPoints ?? [],
    learnOutro: values.learnOutro || undefined,
    futureTitle: values.futureTitle || undefined,
    futureLead: values.futureLead || undefined,
    futureHorizon: values.futureHorizon ?? [],
    futureTrends: values.futureTrends ?? [],
    futureIndustriesNote: values.futureIndustriesNote || undefined,
    futureIndustries: values.futureIndustries ?? [],
    comparisonRows: values.comparisonRows ?? [],
    comparisonIntro: values.comparisonIntro || undefined,
    comparisonOthers: values.comparisonOthers || undefined,
    comparisonNote: values.comparisonNote || undefined,
    toolItems: values.toolItems ?? [],
    syllabusIntro: values.syllabusIntro || undefined,
    syllabusNote: values.syllabusNote || undefined,

    /**
     * Numbers, as the mapping expects them.
     *
     * The form holds these as text — a select's value always is — and the
     * preview shares its mapping with the published page, so they have to be
     * converted here exactly as they are on save. Skipping this showed every
     * plan as unnumbered and every module as reachable from plan one.
     */
    plans: (values.plans ?? []).map((plan) => ({
      ...plan,
      months: plan.months?.trim() ? Number(plan.months) : undefined,
    })),

    /**
     * Chosen FAQs, reviews and related courses are not carried.
     *
     * The preview has no lists to resolve ids against, so it shows the
     * generated selection instead — the one place it knowingly differs from
     * the published page, and it differs by showing the fallback rather than
     * by showing something wrong.
     */
  }
}

/**
 * The editor's sections, and the part of the rendered page each one drives.
 *
 * `anchor` is the DOM id the website's course template gives that block, so
 * selecting a section here scrolls the preview to the thing being edited
 * rather than leaving the editor to hunt for it.
 *
 * These are the site's real ids — the `id` on each band in its
 * src/components/course/*, and `demo` for the closing call to action. They
 * used to be this app's own section names ('hero', 'modules', 'who-can-do'),
 * none of which is an id on the page, so every tab scrolled the preview
 * nowhere. A band the course has no content for is simply not on the page;
 * the frame then stays where it is.
 */
export const COURSE_SECTIONS = [
  { id: 'basics', label: 'Basics', anchor: 'course-top' },
  { id: 'page-copy', label: 'Page copy', anchor: 'course-overview' },
  { id: 'curriculum', label: 'Curriculum', anchor: 'course-roadmap' },
  { id: 'layout', label: 'Page layout', anchor: 'course-overview' },
  { id: 'details', label: 'Details', anchor: 'course-who' },
  { id: 'media', label: 'Media', anchor: 'course-top' },
  { id: 'publishing', label: 'Publishing', anchor: 'demo' },
  { id: 'seo', label: 'SEO', anchor: 'course-top' },
] as const

export type CourseSectionId = (typeof COURSE_SECTIONS)[number]['id']

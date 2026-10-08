import { z } from 'zod'

export const faqSchema = z.object({
  question: z.string().min(1, 'A question is required.').max(300),
  answer: z.string().min(1, 'An answer is required.'),
  /** The heading, by name. Resolved to a row by the API — new names are created. */
  categoryName: z.string().min(1, 'Choose or type a category.').max(80),
  order: z.number(),
  featured: z.boolean(),
  status: z.enum(['published', 'draft', 'review']),
})

export type FaqFormValues = z.infer<typeof faqSchema>

export function emptyFaq(): FaqFormValues {
  return {
    question: '',
    answer: '',
    categoryName: '',
    order: 0,
    featured: false,
    status: 'draft',
  }
}

/**
 * The topics the website's FAQ page is organised by.
 *
 * Kept word for word with FAQ_GROUPS in the site's src/data/faq.ts, so a
 * question filed from the dropdown lands under a chip the page already shows.
 * Always offered, even before a question uses them — the API creates the
 * category row the first time one is picked.
 */
export const WEBSITE_FAQ_CATEGORIES = [
  'Courses',
  'Admissions & fees',
  'How it runs',
  'Placements & certificates',
]

/**
 * The dropdown's options: the website's topics first, then anything else the
 * CMS already holds, then the category this question is filed under if it is
 * in neither. Compared case-insensitively so "courses" is not offered twice.
 */
export function faqCategoryOptions(existing: string[], current?: string) {
  const seen = new Set<string>()
  const names: string[] = []
  for (const name of [...WEBSITE_FAQ_CATEGORIES, ...existing, current ?? '']) {
    const key = name.trim().toLowerCase()
    if (!key || seen.has(key)) continue
    seen.add(key)
    names.push(name.trim())
  }
  return names.map((name) => ({ value: name, label: name }))
}

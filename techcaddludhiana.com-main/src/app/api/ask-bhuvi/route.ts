import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { bhuviAnswer, type BhuviCourse, type BhuviFaq, type BhuviKnowledge, type BhuviSources } from '@/lib/bhuvi'
import { cmsFetchList } from '@/lib/cms.server'
import { dedupeCoursesBySlug } from '@/lib/cms'
import { getSiteSettings } from '@/lib/siteSettings'
import { SITE_URL } from '@/lib/structuredData'
import { COURSE_INDEX, coursePath } from '@/data/courses/catalog'
import { FAQS } from '@/data/faq'
import { FOUNDER, FD_PROFILE } from '@/data/founder'
import { STORY } from '@/data/aboutPage'
import { WHATSAPP } from '@/data/contact'
import { BRANCH_CITY } from '@/data/branch'

/* ==================================================================
   POST /api/ask-bhuvi — the Ask Bhuvi chat.

   The browser sends the conversation so far and gets one reply back:

     { answer: string, mode: 'knowledge' | 'ai' }

   NO KEY NEEDED

   With no ANTHROPIC_API_KEY the reply is matched from what the team
   has already written — CMS → AI Knowledge, the FAQs and the course
   catalogue (see src/lib/bhuvi.ts). That is the normal configuration,
   not a degraded one: the widget is always there and always answers.

   With a key, the same sources are handed to Claude as the only facts
   it may use, and the matcher is what answers if the API fails or
   times out. The key stays on the server; the browser never talks to
   Anthropic.

   NOTHING IS STORED

   A chat message is not a lead. Nothing here writes to a database; a
   visitor who wants a call back is pointed at the forms that do.
================================================================== */

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const MODEL = process.env.BHUVI_MODEL || 'claude-opus-5-5'
const API_KEY = process.env.ANTHROPIC_API_KEY || ''

/* Per visitor: a burst allowance. In memory, so a restart clears it —
   the same trade /api/leads makes. */
const WINDOW_MS = 60_000
const MAX_PER_WINDOW = 10
const hits = new Map<string, { count: number; resetAt: number }>()

function limited(ip: string) {
  const now = Date.now()
  const entry = hits.get(ip)
  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return false
  }
  entry.count += 1
  return entry.count > MAX_PER_WINDOW
}

/* The conversation as the browser sends it. Bounded, so one request
   can never carry an essay or an unbounded history. */
const bodySchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(['user', 'assistant']),
        content: z.string().trim().min(1).max(4000)
      })
    )
    .min(1)
    .max(20)
})

/*
  What the website already says about the institute, as knowledge entries.

  Without these, Bhuvi could answer a question about a course and had
  nothing to say about the institute teaching it — "who is the founder"
  and "what is techcadd" both ended in a handoff. Every line is taken from
  a page on this site (About, Founder), not written for the bot.
*/
const SITE_KNOWLEDGE: BhuviKnowledge[] = [
  {
    title: 'Who is the founder of techcadd? Founder, director, owner',
    category: 'About',
    content: `${FOUNDER.name} is the ${FOUNDER.role}. ${FD_PROFILE.body[0]} ${FD_PROFILE.body[1]}`,
    links: [`${SITE_URL}/founder`],
  },
  {
    title: 'What is techcadd? About techcadd Computer Education, the institute',
    category: 'About',
    content: STORY.body.join(' '),
    links: [`${SITE_URL}/about`],
  },
]

/* The CMS holds several hundred FAQs and serves a hundred a page. */
const FAQ_PAGES = 8

/** What the matcher searches: AI Knowledge, the FAQs, and both catalogues. */
async function gatherSources(): Promise<BhuviSources> {
  const [settings, knowledge, cmsCourses, ...faqPages] = await Promise.all([
    getSiteSettings(),
    cmsFetchList<BhuviKnowledge>('/ai-knowledge', { limit: 100 }),
    cmsFetchList('/courses', { limit: 100 }),
    ...Array.from({ length: FAQ_PAGES }, (_, i) =>
      cmsFetchList<BhuviFaq>('/faqs', { limit: 100, page: i + 1 })
    )
  ])

  const cmsFaqs = faqPages.flatMap((page) => page ?? []).filter((faq) => faq?.question && faq?.answer)
  /* The bundled questions are always in the mix, not only when the CMS
     is silent: they are the general ones — which course, how admission
     works, what placement support means — and the CMS's hundreds are
     nearly all about one course each. */
  const faqs: BhuviFaq[] = [...FAQS.map((faq) => ({ question: faq.q, answer: faq.a })), ...cmsFaqs]

  /* The CMS record wins where a course exists in both, as on /courses. */
  const bySlug = new Map<string, BhuviCourse>()
  for (const course of COURSE_INDEX) {
    bySlug.set(course.slug, {
      title: course.name,
      url: `${SITE_URL}${coursePath(course.slug)}`,
      category: course.category,
      duration: course.duration
    })
  }
  for (const course of cmsCourses ? dedupeCoursesBySlug(cmsCourses) : []) {
    if (!course?.slug || !course?.title) continue
    bySlug.set(course.slug, {
      title: course.title,
      url: `${SITE_URL}${coursePath(course.slug)}`,
      duration: course.duration || undefined
    })
  }

  return {
    siteUrl: SITE_URL,
    phone: settings.phoneDisplay,
    whatsapp: WHATSAPP,
    address: settings.address,
    /* An editor's entries first — they win a tie — then what the website
       itself says about the institute. */
    knowledge: [
      ...(knowledge ?? []).filter((entry) => entry?.title && entry?.content),
      ...SITE_KNOWLEDGE,
    ],
    faqs,
    courses: [...bySlug.values()]
  }
}

/** The facts Claude may use, and the rules for using them. */
function systemPrompt(sources: BhuviSources) {
  const knowledge = sources.knowledge
    .map((entry) => `### ${entry.title}\n${entry.content}`)
    .join('\n\n')
  const courses = sources.courses
    .map((course) => `- ${course.title}${course.duration ? ` (${course.duration})` : ''}: ${course.url}`)
    .join('\n')

  return [
    `You are Bhuvi, the assistant on the website of techcadd ${BRANCH_CITY}, a computer training institute.`,
    'Answer briefly, in plain text, in the language the visitor writes in.',
    'Use ONLY the facts below. If they do not answer the question, say you do not have that written down and give the contact details. Never state a fee, a date, a salary or a placement figure that is not written below.',
    `Contact: phone ${sources.phone}; WhatsApp https://wa.me/${sources.whatsapp}; address ${sources.address}; counselling booking ${sources.siteUrl}/contact`,
    knowledge ? `## Knowledge\n${knowledge}` : '',
    `## Courses\n${courses}`
  ]
    .filter(Boolean)
    .join('\n\n')
}

async function askClaude(messages: Array<{ role: string; content: string }>, sources: BhuviSources) {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': API_KEY,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({ model: MODEL, max_tokens: 700, system: systemPrompt(sources), messages }),
    signal: AbortSignal.timeout(30_000),
    cache: 'no-store'
  })
  if (!response.ok) throw new Error(`Anthropic responded ${response.status}`)

  const data = await response.json()
  const text = (data?.content ?? [])
    .filter((block: any) => block?.type === 'text')
    .map((block: any) => block.text)
    .join('')
    .trim()
  if (!text) throw new Error('empty reply')
  return text
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || req.headers.get('x-real-ip') || 'unknown'
  if (limited(ip)) {
    return NextResponse.json(
      { error: 'Too many messages just now — give it a minute, or call the centre.' },
      { status: 429 }
    )
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'That message could not be read.' }, { status: 400 })
  }

  const parsed = bodySchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'That message could not be read.' }, { status: 400 })
  }

  const { messages } = parsed.data
  const last = messages[messages.length - 1]
  if (last.role !== 'user' || last.content.length > 1500) {
    return NextResponse.json({ error: 'Please keep your question under 1,500 characters.' }, { status: 400 })
  }

  const sources = await gatherSources()

  if (API_KEY) {
    try {
      /* the API wants the conversation to open with the visitor */
      const first = messages.findIndex((message) => message.role === 'user')
      const answer = await askClaude(messages.slice(first), sources)
      return NextResponse.json({ answer, mode: 'ai' }, { headers: { 'cache-control': 'no-store' } })
    } catch (error) {
      const reason = error instanceof Error ? error.message : String(error)
      console.warn(`[bhuvi] the model did not answer (${reason}) — answering from the CMS instead.`)
    }
  }

  return NextResponse.json(
    { answer: bhuviAnswer(last.content, sources), mode: 'knowledge' },
    { headers: { 'cache-control': 'no-store' } }
  )
}

/* ==================================================================
   Bhuvi without a model: answers by matching the question against
   what the team has already written.

   This is how Ask Bhuvi works with no API key at all, and what it
   falls back to when a key is set and the API fails. It retrieves, it
   does not compose — the reply is an editor's own AI Knowledge entry
   or FAQ answer, word for word, plus the course pages the question
   names. So it can never state a fee or a date nobody wrote down.
   When nothing matches well enough it says so and hands over to a
   counsellor, which is the right answer to a question the CMS does not
   cover.

   Matching is coverage-based, with words weighted by rarity (one that
   appears in every entry, like "course", counts for little): a reply
   needs most of the question's weight to be found in the entry, and
   the entry's own question to be mostly about those words — so "What
   is SEO?" picks that FAQ over "Why is SEO important?", and a question
   nothing covers gets a handoff rather than whichever entry shares one
   word with it. Courses match on the distinctive words of their name
   ("python", "machine learning").

   Common Romanised Hindi / Punjabi words for the usual questions are
   folded into their English equivalents, since that is how many
   visitors type.

   Pure functions, no I/O — the route gathers the sources and hands
   them in.
================================================================== */

import { BRANCH_CITY } from '@/data/branch'

export type BhuviKnowledge = { title: string; content: string; category?: string; links?: string[] }
export type BhuviFaq = { question: string; answer: string }
export type BhuviCourse = { title: string; url: string; category?: string; duration?: string }

export type BhuviSources = {
  siteUrl: string
  phone: string
  whatsapp: string
  address: string
  knowledge: BhuviKnowledge[]
  faqs: BhuviFaq[]
  courses: BhuviCourse[]
}

/* ------------------------------------------------------------ tokens */

const STOPWORDS = new Set(
  (
    'a an the is are was were be been am i me my you your we our us it its this that these those ' +
    'to of in on at for from by with about as and or but if so do does did can could would should will ' +
    'what which who whom how when why there here have has had any some all more most very just ' +
    'please tell know want need like get give much many also into than then them they he she his her ' +
    'hi hello hey sir mam madam ji ' +
    /* Romanised Hindi / Punjabi function words */
    'kya hai hain ka ki ke ko se me mein main mai mujhe mera meri mere aap ap tusi tuhada koi kuch ' +
    'bhi hi ho hoga hogi karna karni karke kar krna kro karo da di de nu vich te ae ne ' +
    'milega milegi milta milti chahiye hota hoti sakta sakti sakde'
  ).split(' ')
)

/* Variants folded onto one token, so "fees", "kitne paise" and "cost" meet. */
const SYNONYMS: Record<string, string> = {
  fees: 'fee', price: 'fee', cost: 'fee', costs: 'fee', charges: 'fee', charge: 'fee', paisa: 'fee',
  paise: 'fee', rupees: 'fee', rs: 'fee', kitni: 'fee', kitne: 'fee', kinni: 'fee', kinne: 'fee', emi: 'fee',
  installment: 'fee', instalment: 'fee', installments: 'fee', discount: 'fee', scholarship: 'fee',
  placement: 'placement', placements: 'placement', job: 'placement', jobs: 'placement', naukri: 'placement',
  salary: 'placement', package: 'placement', hiring: 'placement',
  internship: 'internship', internships: 'internship',
  duration: 'duration', months: 'duration', month: 'duration', weeks: 'duration', long: 'duration',
  din: 'duration', mahine: 'duration', mahina: 'duration',
  admission: 'admission', admissions: 'admission', enrol: 'admission', enroll: 'admission',
  enrolment: 'admission', enrollment: 'admission', join: 'admission', joining: 'admission',
  register: 'admission', registration: 'admission', dakhla: 'admission',
  address: 'location', location: 'location', located: 'location', where: 'location', kahan: 'location',
  kithe: 'location', kidhar: 'location', reach: 'location', directions: 'location', map: 'location',
  timing: 'timing', timings: 'timing', time: 'timing', batch: 'timing', batches: 'timing',
  schedule: 'timing', weekend: 'timing', evening: 'timing', morning: 'timing', samay: 'timing',
  certificate: 'certificate', certificates: 'certificate', certification: 'certificate', certified: 'certificate',
  demo: 'demo', trial: 'demo',
  online: 'online', offline: 'offline', classroom: 'offline',
  '12th': '12th', twelfth: '12th', '12': '12th', '10th': '10th', tenth: '10th',
  website: 'web', career: 'career', careers: 'career',
  contact: 'contact', phone: 'contact', number: 'contact', mobile: 'contact', call: 'contact',
  email: 'contact', whatsapp: 'contact',
  founder: 'founder', owner: 'founder', director: 'founder', founded: 'founder'
}

function stem(word: string): string {
  if (SYNONYMS[word]) return SYNONYMS[word]
  if (word.length > 4 && word.endsWith('ies')) return `${word.slice(0, -3)}y`
  if (word.length > 4 && word.endsWith('es') && !word.endsWith('ses')) return word.slice(0, -2)
  if (word.length > 3 && word.endsWith('s') && !word.endsWith('ss')) return word.slice(0, -1)
  return word
}

export function tokenize(text: string): string[] {
  return String(text || '')
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    /* an FAQ answer may be rich text */
    .replace(/<[^>]*>/g, ' ')
    .replace(/[^a-z0-9ऀ-੿+#]+/g, ' ')
    .split(' ')
    .filter((word) => word && !STOPWORDS.has(word))
    .map(stem)
}

/* ----------------------------------------------------------- scoring */

type Doc = {
  kind: 'knowledge' | 'faq'
  /** the entry's own question or title — what the visitor's is compared with */
  title: string[]
  /** everything searchable: title, category and body */
  all: Set<string>
  answer: string
  links: string[]
}

const plain = (html: string) =>
  String(html || '')
    .replace(/<\/(p|li|h[1-6])>/gi, '\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\n{3,}/g, '\n\n')
    .trim()

function toDocs({ knowledge, faqs }: BhuviSources): Doc[] {
  const docs: Doc[] = []
  for (const entry of knowledge) {
    const title = tokenize(entry.title)
    docs.push({
      kind: 'knowledge',
      title,
      all: new Set([...title, ...tokenize(entry.category || ''), ...tokenize(entry.content)]),
      answer: plain(entry.content),
      links: entry.links || []
    })
  }
  for (const faq of faqs) {
    const title = tokenize(faq.question)
    docs.push({
      kind: 'faq',
      title,
      all: new Set([...title, ...tokenize(faq.answer)]),
      answer: plain(faq.answer),
      links: []
    })
  }
  return docs
}

/* Rarity of each token across every entry: rare words decide, common
   ones barely count. */
function weights(docs: Doc[]): (token: string) => number {
  const df = new Map<string, number>()
  for (const doc of docs) for (const token of doc.all) df.set(token, (df.get(token) ?? 0) + 1)
  return (token) => Math.log(1 + docs.length / (1 + (df.get(token) ?? 0)))
}

/* What a question is about in general, as opposed to its subject:
   "placement" in "do you give placements" is a topic, "SEO" in "what
   is SEO" a subject. A FAQ is only matched on its subject — otherwise
   "do you give placements" lands on whichever FAQ mentions jobs —
   while an AI Knowledge entry, written for Bhuvi, may match on a topic
   alone (an entry titled "Placements"). */
const TOPICS = new Set([
  'fee', 'placement', 'timing', 'admission', 'certificate', 'demo', 'duration', 'career',
  'internship', 'online', 'offline', 'location', 'course', 'learn', 'study', 'start', 'centre', 'center'
])

/* 0–1: how much of the question the entry answers, blended with how
   much of the entry's own question is about what was asked. */
function match(query: string[], doc: Doc, w: (token: string) => number) {
  const q = [...new Set(query)]
  const qTotal = q.reduce((n, t) => n + w(t), 0)
  const overall = q.filter((t) => doc.all.has(t)).reduce((n, t) => n + w(t), 0) / (qTotal || 1)

  const subject = q.filter((t) => !TOPICS.has(t))
  const sTotal = subject.reduce((n, t) => n + w(t), 0)
  const covered = subject.length
    ? subject.filter((t) => doc.all.has(t)).reduce((n, t) => n + w(t), 0) / (sTotal || 1)
    : doc.kind === 'knowledge'
      ? overall
      : 0

  const title = [...new Set(doc.title)]
  const tTotal = title.reduce((n, t) => n + w(t), 0)
  const focus = title.filter((t) => q.includes(t)).reduce((n, t) => n + w(t), 0) / (tTotal || 1)

  return { score: 0.6 * overall + 0.4 * focus, covered, focus }
}

/* Words that name no particular course, ignored when matching titles. */
const GENERIC = new Set([
  'course', 'training', 'program', 'programme', 'certification', 'certificate', 'class', 'in',
  'programming', 'development', BRANCH_CITY.toLowerCase()
])

function matchCourses(query: string[], courses: BhuviCourse[]): BhuviCourse[] {
  const q = new Set(query)
  return courses
    .map((course) => ({
      course,
      key: [...new Set(tokenize(course.title))].filter((t) => !GENERIC.has(t))
    }))
    .filter(({ key }) => key.length > 0 && key.every((t) => q.has(t)))
    /* the most specific name first */
    .sort((a, b) => b.key.length - a.key.length)
    .map(({ course }) => course)
}

/* ----------------------------------------------------------- replies */

const GREETING = /^(hi+|hello+|hey+|namaste|namaskar|sat ?sri ?akal|ssa|good (morning|afternoon|evening))\b/i
const THANKS = /\b(thanks?|thank you|thx|dhanyavad|dhanvaad|shukriya)\b/i

const NAME = `techcadd ${BRANCH_CITY}`

function contactBlock({ phone, whatsapp, siteUrl }: BhuviSources): string {
  return [
    `Call: ${phone}`,
    `WhatsApp: https://wa.me/${whatsapp}`,
    `Book a free counselling session: ${siteUrl}/contact`
  ].join('\n')
}

function courseLine(course: BhuviCourse): string {
  return `- ${course.title}${course.duration ? ` (${course.duration})` : ''}: ${course.url}`
}

function handoff(sources: BhuviSources): string {
  return (
    `I don't have an answer to that written down yet. A counsellor at ${NAME} can help you directly:\n` +
    contactBlock(sources)
  )
}

/* A general question with no entry to answer it — "do you give
   placements", "batch timings". Each line states only what the site
   already says everywhere (every course page lists placement support
   and a certificate; the demo class and counselling are free), then
   hands over for the specifics. */
function topicReply(query: string[], sources: BhuviSources): string | null {
  const has = (token: string) => query.includes(token)
  const lines: string[] = []
  if (has('fee')) lines.push('Fees depend on the course and the batch — a counsellor will share the current fee and any instalment options.')
  if (has('placement')) lines.push('Our courses include placement assistance — resume and portfolio review, mock interviews and interview referrals. It is support, not a guarantee of a job.')
  if (has('certificate')) lines.push('Courses include a techcadd certificate on completion.')
  if (has('timing')) lines.push(`Weekday, evening and weekend batches run at the ${BRANCH_CITY} centre, so you can train alongside college or work.`)
  if (has('online') || has('offline')) lines.push(`You can attend in the classroom at the ${BRANCH_CITY} centre or join online batches.`)
  if (has('demo')) lines.push('The demo class and counselling are free.')
  if (has('duration')) lines.push(`Duration depends on the course — each course page lists it: ${sources.siteUrl}/courses`)
  if (has('internship')) lines.push(`Industrial training and internship formats are listed at ${sources.siteUrl}/courses`)
  if (has('admission')) lines.push('To take admission, talk to a counsellor or visit the centre — they will help you pick a batch.')
  if (!lines.length) return null
  return `${lines.join('\n')}\n\n${contactBlock(sources)}`
}

/** The reply to the visitor's latest message. Plain text; the widget
    turns the URLs in it into links. */
export function bhuviAnswer(question: string, sources: BhuviSources): string {
  const text = String(question || '').trim()
  const query = tokenize(text)

  if (GREETING.test(text) && query.length <= 2) {
    return `Hi! I'm Bhuvi 👋 Ask me about courses, fees, timings, admissions, certificates or placements at ${NAME}.`
  }
  if (THANKS.test(text) && query.length <= 3) {
    return `You're welcome! If you'd like to talk to a counsellor:\n${contactBlock(sources)}`
  }

  /* "contact number", "phone", "how do I reach you": the details themselves. */
  if (query.includes('contact') && query.length <= 4) {
    return `You can reach ${NAME} here:
${contactBlock(sources)}
Address: ${sources.address}`
  }

  /* Where / how to reach us: answered from the contact details. */
  if (query.includes('location') && query.length <= 4) {
    return `${NAME} is at ${sources.address}.\n${contactBlock(sources)}`
  }

  if (!query.length) return handoff(sources)

  /* "What is techcadd", "about techcadd", "tell me about the institute".
     The brand name is in every entry, so the rarity weighting below gives
     it almost nothing and the question matches no entry in particular —
     it is answered from the About entry directly. */
  const ABOUT = new Set(['techcadd', 'about', 'institute', 'company', 'academy', 'centre', 'center'])
  if (query.includes('techcadd') && query.every((token) => ABOUT.has(token))) {
    const about = sources.knowledge.find((entry) => /^what is techcadd/i.test(entry.title))
    if (about) return [plain(about.content), ...(about.links || [])].join('\n\n')
  }

  const docs = toDocs(sources)
  const w = weights(docs)
  const best = docs
    .map((doc) => ({ doc, ...match(query, doc, w) }))
    /* ties go to the entry an editor wrote for Bhuvi, then to the
       shorter question */
    .sort(
      (a, b) =>
        b.score - a.score ||
        Number(b.doc.kind === 'knowledge') - Number(a.doc.kind === 'knowledge') ||
        a.doc.title.length - b.doc.title.length
    )[0]

  /* Most of the question has to be found, and the entry has to be
     mostly about it. Below this the honest reply is a handoff, not the
     nearest entry. */
  const MIN_SCORE = 0.6
  const MIN_COVERED = 0.6
  /* And the entry's own question has to be about what was asked. With
     several hundred FAQs in the CMS, a one-word question ("what is SEO")
     is fully covered by every entry that mentions the word — including
     ones answering something else entirely ("do I need web development
     to learn SEO?" — "No. …"). Half the entry's question, by weight,
     must be the visitor's. */
  const MIN_FOCUS = 0.5

  const parts: string[] = []

  if (best && best.score >= MIN_SCORE && best.covered >= MIN_COVERED && best.focus >= MIN_FOCUS) {
    parts.push(best.doc.answer)
    const links = best.doc.links.filter((link) => !best.doc.answer.includes(link))
    if (links.length) parts.push(links.join('\n'))
  }

  const courses = matchCourses(query, sources.courses).slice(0, 3)
  if (courses.length) {
    parts.push(
      `${courses.length === 1 ? 'Course page' : 'Related courses'}:\n${courses.map(courseLine).join('\n')}`
    )
  }

  if (!parts.length) {
    const topic = topicReply(query, sources)
    if (topic) return topic

    /* "Which course is best for me?" and the like: point at the catalogue. */
    if (query.some((t) => ['course', 'best', 'suggest', 'recommend', 'career', '12th'].includes(t))) {
      return (
        `We teach programming, AI and data science, digital marketing, cyber security and cloud, design, CAD and accounting courses — browse them all at ${sources.siteUrl}/courses.\n\n` +
        `For a recommendation that fits your background, a counsellor can help (it's free):\n${contactBlock(sources)}`
      )
    }
    return handoff(sources)
  }

  /* The question also asked about fees, timings, admission…: answer
     that part too. */
  const topic = topicReply(query, sources)
  if (topic) parts.push(topic)

  return parts.join('\n\n')
}

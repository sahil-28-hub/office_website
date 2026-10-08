/* ==================================================================
   PLACEHOLDER POSTS — the same warning the home page's Blog section
   carries applies here: these titles and excerpts exist to show the
   layout. Swap in real articles, real dates and real hrefs before
   this goes live.

   The first six are the ones the home page rail already shows, so
   the index and the rail agree with each other.

   `tone` picks the cover gradient: blue | violet | cyan | indigo.
================================================================== */

export const BLOG_HERO = {
  eyebrow: 'Blogs',
  title: 'Notes from the classroom',
  accent: 'and the codebase.',
  lead:
    'What we are teaching, what the industry is hiring for, and the advice we end up repeating in every counselling session — written down once, properly.',
  image: '/lab-demo.webp',
  stats: [
    { to: 12, suffix: '', label: 'Articles published' },
    { to: 6, suffix: '', label: 'Topics covered' },
    { to: 7, suffix: ' min', label: 'Average read' },
    { to: 2, suffix: '/mo', label: 'New posts' }
  ]
}

const POST_SEEDS = [
  {
    id: 'ai-course',
    tag: 'AI & Data',
    tone: 'blue',
    date: 'Jul 28, 2026',
    read: '6 min read',
    title: 'Which AI course should you actually take after B.Tech?',
    excerpt:
      'Machine learning, deep learning or generative AI — the three tracks overlap far less than the course names suggest. Here’s how to pick.',
    featured: true
  },
  {
    id: 'mern-mean',
    tag: 'Full-Stack',
    tone: 'violet',
    date: 'Jul 14, 2026',
    read: '8 min read',
    title: 'MERN vs MEAN in 2026: what Ludhiana employers are hiring for',
    excerpt:
      'We pulled the stack requirements from every drive our placement cell ran last quarter. The gap between the two is smaller than you think.',
  },
  {
    id: 'training',
    tag: 'Careers',
    tone: 'cyan',
    date: 'Jun 30, 2026',
    read: '5 min read',
    title: 'How to make your 6-month industrial training actually count',
    excerpt:
      'Most students treat training as a formality for their university file. The ones who get placed treat it as their first job.',
  },
  {
    id: 'cloud-first',
    tag: 'Cloud',
    tone: 'indigo',
    date: 'Jun 12, 2026',
    read: '7 min read',
    title: 'Docker before Kubernetes: the order most self-taught engineers get wrong',
    excerpt:
      'Orchestration makes no sense until containers do. A sequence for learning the deployment stack without skipping the part that matters.',
  },
  {
    id: 'first-project',
    tag: 'Projects',
    tone: 'blue',
    date: 'May 26, 2026',
    read: '6 min read',
    title: 'Your first real project should be boring, and that is the point',
    excerpt:
      'A working CRUD app you can explain beats an ambitious half-finished one. What interviewers actually probe when they open your repo.',
  },
  {
    id: 'security-basics',
    tag: 'Cyber',
    tone: 'violet',
    date: 'May 09, 2026',
    read: '9 min read',
    title: 'Learn networking before you learn hacking',
    excerpt:
      'Every security course that starts with tools produces students who cannot debug their own lab. Start where the packets are.',
  },
  {
    id: 'prompting',
    tag: 'AI & Data',
    tone: 'cyan',
    date: 'Apr 22, 2026',
    read: '5 min read',
    title: 'Prompt engineering is a debugging skill, not a writing skill',
    excerpt:
      'The people who get the most out of these models are the ones who treat a bad answer as a reproducible bug rather than bad luck.',
  },
  {
    id: 'sql-still',
    tag: 'AI & Data',
    tone: 'indigo',
    date: 'Apr 05, 2026',
    read: '7 min read',
    title: 'SQL is still the highest-return week of any data course',
    excerpt:
      'Dashboards change, libraries churn, and the join you learned in week two keeps paying for itself a decade later.',
  },
  {
    id: 'portfolio',
    tag: 'Careers',
    tone: 'blue',
    date: 'Mar 18, 2026',
    read: '6 min read',
    title: 'What a hiring manager sees in the first thirty seconds of your portfolio',
    excerpt:
      'A live link, a readable README and one project you can defend line by line. Everything else is decoration.',
  },
  {
    id: 'python-first',
    tag: 'Programming',
    tone: 'violet',
    date: 'Feb 27, 2026',
    read: '5 min read',
    title: 'Why we still start almost everyone on Python',
    excerpt:
      'Not because it is easy — because it gets a beginner to a working program fast enough that the habit survives the first hard week.',
  },
  {
    id: 'after-12th',
    tag: 'Careers',
    tone: 'cyan',
    date: 'Feb 09, 2026',
    read: '8 min read',
    title: 'After 12th: choosing a technology track without a degree to lean on',
    excerpt:
      'A six-month certificate can be worth more than three years of the wrong course. How to tell which situation you are in.',
  },
  {
    id: 'marketing-data',
    tag: 'Marketing',
    tone: 'indigo',
    date: 'Jan 21, 2026',
    read: '6 min read',
    title: 'Digital marketing is now a data job wearing a creative hat',
    excerpt:
      'Campaign instinct still matters, but the person who can read the analytics is the one who gets to keep spending the budget.',
  }
]

/* Topic filters, built from the posts so a new tag never needs a
   second edit here. 'All' is prepended by the page. */
/* Every card links to /blog/<id>, and BlogPostPage reads that same id
   back out of the URL — so the link and the article can never point at
   different things. The id IS the slug; there is no second field to
   keep in step, and no post can ship with the '#' placeholder these
   used to carry.

   Change an id and you change a public URL. If a post has been shared
   or indexed, add a redirect rather than renaming it. */
export const POSTS = POST_SEEDS.map((post) => ({
  ...post,
  href: `/blog/${post.id}`
}))

export const BLOG_TOPICS = [...new Set(POSTS.map((post) => post.tag))]

export const BLOG_CTA = {
  eyebrow: 'Still deciding?',
  title: 'An article can only take you so far',
  lead:
    'Tell us your background and what you want to build, and we will point you at the track that fits — or tell you honestly if we do not run it.',
  primary: { label: 'Talk to a counsellor', href: '/contact', icon: 'chat' },
  secondary: { label: 'Browse all courses', href: '/courses', icon: 'arrowUpRight' },
  note: 'No pressure, no obligation — the advice is free either way.'
}

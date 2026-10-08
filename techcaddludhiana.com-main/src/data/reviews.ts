/* ==================================================================
   PLACEHOLDER REVIEWS — the same warning the home page's Community
   section carries applies here. Replace every entry below with real,
   consented student feedback before this goes live, and keep the
   shape: the marquee, the grid and the rating breakdown all lay
   themselves out from whatever length this list happens to be.

   The first twelve are the ones already on the home page, kept word
   for word so the two never disagree.
================================================================== */

export const RV_HERO = {
  eyebrow: 'Reviews',
  title: 'What learners say',
  accent: 'once they are out.',
  lead:
    'Feedback from students across every track — the courses they took, the projects they shipped, and what happened after the batch ended.',
  image: '/gallery/7.png',
  stats: [
    { to: 4, suffix: '.8', label: 'Average rating' },
    { to: 15, suffix: 'K+', label: 'Learners trained' },
    { to: 98, suffix: '%', label: 'Would recommend' },
    { to: 20, suffix: '+', label: 'Tracks reviewed' }
  ]
}

export const REVIEWS = [
  { id: 's1', name: 'Harsimran Kaur', course: 'Full Stack Development', batch: '2024 batch', rating: 5, quote: 'I came in knowing only basic HTML. By the end I had built and deployed a full MERN application on my own, and I could explain every line of it in an interview.' },
  { id: 's2', name: 'Arjun Mehta', course: 'Data Science', batch: '2024 batch', rating: 5, quote: 'The classes never stopped at theory. Every concept came with a dataset in front of us, and the doubt sessions after class were where most of my learning actually happened.' },
  { id: 's3', name: 'Navjot Singh', course: 'AI & Machine Learning', batch: '2023 batch', rating: 5, quote: 'Our mentor had shipped real ML systems, so he knew which shortcuts break in production. That perspective is what I use every day now.' },
  { id: 's4', name: 'Simran Bhatia', course: 'Digital Marketing', batch: '2025 batch', rating: 5, quote: 'We ran live campaigns with real budgets instead of imaginary case studies. I walked out with a portfolio of results, not just a certificate.' },
  { id: 's5', name: 'Rohit Verma', course: 'Java Development', batch: '2024 batch', rating: 5, quote: 'Core Java was taught slowly and properly before we touched Spring Boot. That foundation is the reason backend interviews stopped scaring me.' },
  { id: 's6', name: 'Ishita Sharma', course: 'Cyber Security', batch: '2025 batch', rating: 5, quote: 'The lab setup let us break things safely. Doing my first web pentest on a machine I had configured myself made the whole subject click.' },
  { id: 's7', name: 'Gurpreet Sandhu', course: 'Cloud & DevOps', batch: '2024 batch', rating: 5, quote: 'From a plain Linux box to a containerised app running through a CI pipeline — we built the whole chain ourselves rather than watching a demo.' },
  { id: 's8', name: 'Ananya Gupta', course: 'Python Programming', batch: '2025 batch', rating: 5, quote: 'I switched fields after graduation and was worried I would be the slowest in the room. The trainers paced things so nobody got left behind.' },
  { id: 's9', name: 'Karan Malhotra', course: 'Full Stack Development', batch: '2023 batch', rating: 5, quote: 'The mock interviews were harder than the real ones. Uncomfortable at the time, but it meant nothing caught me off guard later.' },
  { id: 's10', name: 'Priya Nair', course: 'Data Analytics', batch: '2024 batch', rating: 5, quote: 'Excel to SQL to Power BI in a sequence that actually made sense. I now build the weekly reporting dashboard for my team.' },
  { id: 's11', name: 'Manav Chopra', course: 'AI & Machine Learning', batch: '2025 batch', rating: 5, quote: 'The GenAI module was current — we worked with the tools that had come out that same year, not a syllabus written three years ago.' },
  { id: 's12', name: 'Jasleen Kaur', course: 'Web Development', batch: '2024 batch', rating: 5, quote: 'Small batch, so the trainer knew exactly where each of us was stuck. That is the difference between a classroom and a video course.' },
  { id: 's13', name: 'Aman Preet', course: 'Industrial Training — 6 Months', batch: '2024 batch', rating: 5, quote: 'My college asked for a training letter. I left with the letter, a deployed project and two interview calls that came from it.' },
  { id: 's14', name: 'Ritika Jain', course: 'AutoCAD & Revit', batch: '2023 batch', rating: 4, quote: 'Drafting was taught on real drawings rather than exercise files. I would have liked more hours on Revit specifically, but the base was solid.' },
  { id: 's15', name: 'Sahil Arora', course: 'Ethical Hacking', batch: '2025 batch', rating: 5, quote: 'We started with networking fundamentals, which felt slow for a fortnight and then made every tool afterwards make sense.' },
  { id: 's16', name: 'Neha Bansal', course: 'SEO & Social Media', batch: '2024 batch', rating: 5, quote: 'I run a small business and needed this for myself, not for a job. Three months in, I stopped paying an agency to do it badly.' },
  { id: 's17', name: 'Vikram Sethi', course: 'Machine Learning', batch: '2023 batch', rating: 5, quote: 'The maths was not skipped, but it was never taught for its own sake either. Every formula arrived attached to a model we were building.' },
  { id: 's18', name: 'Kirandeep Kaur', course: 'Web Designing', batch: '2025 batch', rating: 5, quote: 'I finished with four live pages in a portfolio and a freelance client before the course had even ended.' }
]

/* score/total match techcadd's real, public Google Business Profile
   rating (4.8 from 181 reviews) — keep these two in sync with that
   listing. The star-row percentages below are illustrative, not a
   real per-star breakdown pulled from Google. */
export const RV_BREAKDOWN = {
  score: '4.8',
  outOf: 'out of 5',
  total: '181 ratings on Google',
  rows: [
    { stars: 5, pct: 92 },
    { stars: 4, pct: 6 },
    { stars: 3, pct: 1 },
    { stars: 2, pct: 0.6 },
    { stars: 1, pct: 0.4 }
  ]
}

export const RV_THEMES = {
  eyebrow: 'What comes up again and again',
  title: 'The four things reviewers keep mentioning',
  lead:
    'Read enough feedback and the same four sentences appear in different words. These are they.',
  themes: [
    { no: '01', icon: 'terminal', title: 'The practice, not the lecture', text: 'Almost every review credits the supervised lab hours rather than the sessions — the part where the mentor is in the room while it goes wrong.' },
    { no: '02', icon: 'mentor', title: 'Trainers who have shipped', text: 'Learners notice quickly when the person teaching a stack has used it in production, and they say so.' },
    { no: '03', icon: 'stack', title: 'Something to show at the end', text: 'A deployed project that survives being questioned turns up in more reviews than the certificate does.' },
    { no: '04', icon: 'support', title: 'Doubts answered after hours', text: 'The nine-o’clock question, answered — mentioned far more often than we expected when we started reading these.' }
  ]
}

export const RV_STORIES = {
  eyebrow: 'In their own words',
  title: 'Three longer stories',
  lead:
    'Where they started, what they built, and what happened next. Placeholder profiles — replace with real, consented stories.',
  stories: [
    {
      id: 'story-1',
      name: 'Harsimran Kaur',
      course: 'Full Stack Development',
      before: 'Final-year B.Tech, no code outside coursework',
      after: 'Junior developer at a Mohali product firm',
      text: 'The turning point was the second project. The first one I followed along with; the second one broke in a way nobody had covered, and fixing that myself is when I stopped feeling like a student.'
    },
    {
      id: 'story-2',
      name: 'Priya Nair',
      course: 'Data Analytics',
      before: 'Two years in operations, working with spreadsheets',
      after: 'Owns her team’s weekly reporting stack',
      text: 'I did not want to become an engineer. I wanted to stop waiting three days for someone else to pull a number for me. The SQL and Power BI modules paid for the course inside a month.'
    },
    {
      id: 'story-3',
      name: 'Gurpreet Sandhu',
      course: 'Cloud & DevOps',
      before: 'Support role, comfortable on Linux',
      after: 'Runs deployment pipelines for a services company',
      text: 'We built the whole chain — server, container, registry, pipeline — rather than watching a recorded demo of it. When my current job asked whether I had set up CI before, I could say yes and mean it.'
    }
  ]
}

export const RV_CTA = {
  eyebrow: 'Your turn',
  title: 'The next review on this page could be yours',
  lead:
    'Sit through a free demo class, meet the trainer who would take your batch, and decide from the room rather than from a testimonial.',
  primary: { label: 'Book a free demo class', href: '#demo' },
  secondary: { label: 'See the campus', href: '/gallery', icon: 'arrowUpRight' },
  note: 'Reviews shown here are collected from learners with their consent.'
}

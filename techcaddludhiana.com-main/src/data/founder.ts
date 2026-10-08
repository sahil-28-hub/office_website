/* ==================================================================
   Our Founder — every word on the page.

   The biography below is written from what the site already says
   about Mr. Gourav Gupta on the About page. Dates and details marked
   with a comment are placeholders: confirm them before this goes
   live, the way the placeholder posts and reviews elsewhere are
   flagged.
================================================================== */

export const FOUNDER = {
  name: 'Gourav Gupta',
  role: 'Founder & Director, techcadd Computer Education',
  photo: { src: '/about/gourav-gupta.jpg', file: 'photos/founder.jpg', alt: 'Gourav Gupta, founder of techcadd' }
}

export const FD_HERO = {
  eyebrow: 'Our founder',
  title: 'The person who',
  accent: 'started it.',
  lead:
    'techcadd began with one trainer, a rented room in Ludhiana and a stubborn conviction that software is learned by writing it. Everything on this campus still follows from that.',
  image: '/about/gourav-gupta.jpg',
  facts: [
    { k: 'Founder', v: 'Gourav Gupta' },
    { k: 'Founded', v: 'Ludhiana, 2016' },
    { k: 'Still teaches', v: 'Yes' }
  ]
}

export const FD_PROFILE = {
  eyebrow: 'Profile',
  title: 'A trainer first,',
  accent: 'a director second.',
  body: [
    'Gourav Gupta founded techcadd after years of watching capable graduates fail interviews for a reason nobody had told them about: they had studied technology without ever building anything with it.',
    'His answer was not a better syllabus. It was a different arrangement — small batches, a mentor in the room during lab hours, and a project at the end of every module that had to actually run.',
    'That arrangement is now the house rule across every track on campus, from the first Python class to the advanced AI and cybersecurity programmes. He still takes sessions himself, which is the simplest way to know whether the rule is being kept.'
  ],
  chips: ['Curriculum design', 'Industry mentoring', 'Placement partnerships', 'Live project reviews', 'Trainer development'],
  quote:
    'A certificate says you attended. A working project says you can do the job. We built this place around the second one.',
  quoteBy: 'Gourav Gupta'
}

export const FD_MESSAGE = {
  eyebrow: 'A message to learners',
  /* words in *asterisks* take the gradient accent */
  text:
    'You are not behind because you started late. You are behind only if you never *build* anything. Write the code, break it, fix it — and do that often enough that it stops feeling like a *test* and starts feeling like work.',
  body: [
    'Most people who walk into this campus are worried about the same thing: that everyone else already knows more. Almost none of them do. What separates the learners who get placed from the ones who do not is not talent, and it is certainly not the college on the certificate.',
    'It is the number of times they sat down with a problem they could not yet solve and stayed with it until it worked. That is the whole method. Our job is to make sure you never have to do it alone or in the wrong order.'
  ]
}

export const FD_MILESTONES = {
  eyebrow: 'The road here',
  title: 'How a rented room became a campus',
  lead:
    'A short history of the decisions that shaped how techcadd teaches. The trajectory matters more than the dates.',
  /* placeholder dates — confirm against the institute's own records */
  steps: [
    {
      tag: '2016',
      title: 'The first batch',
      text: 'One room, one trainer, and a handful of students learning core programming in the evenings after college hours.'
    },
    {
      tag: '2017 — 2018',
      title: 'Labs and live projects',
      text: 'Practice hours are separated from lecture hours and given their own supervised lab, so building stops competing with listening.'
    },
    {
      tag: '2019 — 2020',
      title: 'Industrial training formats',
      text: 'Six-week, six-month and internship programmes are built to match what universities require and what employers respect.'
    },
    {
      tag: '2021 — 2022',
      title: 'Data and cloud tracks',
      text: 'Data science, analytics and cloud computing join the catalogue as full tracks rather than modules bolted onto other courses.'
    },
    {
      tag: '2023 — 2024',
      title: 'AI moves to the centre',
      text: 'Machine learning, deep learning and generative AI are taught as first-class programmes, with projects on current tooling.'
    },
    {
      tag: 'Today',
      title: 'A full campus',
      text: 'Over 120 courses and programmes, classroom and online batches, and 15,000+ learners trained across every track.'
    }
  ]
}

export const FD_PRINCIPLES = {
  eyebrow: 'How he runs it',
  title: 'Four rules that never got relaxed',
  values: [
    { no: '01', icon: 'terminal', title: 'The trainer writes code too', text: 'Anyone teaching a stack here is expected to still be building with it. Explaining production trade-offs requires having met them.' },
    { no: '02', icon: 'student', title: 'Nobody is left at the back', text: 'Batches stay small enough that a trainer can name where every learner is stuck by the end of the first week.' },
    { no: '03', icon: 'stack', title: 'Every module ships something', text: 'A module that ends in notes rather than in a running artefact gets rewritten before the next intake.' },
    { no: '04', icon: 'compass', title: 'Say what you can’t promise', text: 'Placement assistance is real and it is described honestly. Nobody on this campus guarantees an offer letter.' }
  ]
}

export const FD_CTA = {
  eyebrow: 'Meet the team',
  title: 'Come and sit through a class',
  lead:
    'The fastest way to judge a training institute is to watch one of its sessions. Book a free demo and see how the room is run.',
  primary: { label: 'Book a free demo class', href: '#demo' },
  secondary: { label: 'Read our story', href: '/about', icon: 'arrowUpRight' },
  note: 'techcadd Computer Education · Ludhiana, Punjab'
}

/* The team section on the Founder page is the leadership row shared
   with the About page — TEAM in ./aboutPage.ts, rendered by
   components/about/AboutTeam.tsx. */

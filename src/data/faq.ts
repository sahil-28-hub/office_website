/* ==================================================================
   FAQ — the full list.

   The first eight are the ones the home page's Ask section already
   answers, kept word for word so the two never contradict each
   other. The rest cover what the counselling desk is asked after
   those.

   `group` drives the topic filter on the page.
================================================================== */

export const FAQ_HERO = {
  eyebrow: 'Frequently asked questions',
  title: 'Everything people ask',
  accent: 'before they enrol.',
  lead:
    'Fees, batches, prerequisites, placements and certificates — answered plainly, including the ones where the honest answer is not the one you were hoping for.',
  image: '/mentoring.webp',
  facts: [
    { k: 'Answered here', v: '20 questions' },
    { k: 'Not answered here', v: 'Call the campus' },
    { k: 'Response time', v: 'Same working day' }
  ]
}

export const FAQ_GROUPS = [
  { key: 'courses', label: 'Courses' },
  { key: 'admissions', label: 'Admissions & fees' },
  { key: 'learning', label: 'How it runs' },
  { key: 'careers', label: 'Placements & certificates' }
]

export const FAQS = [
  {
    id: 'courses',
    group: 'courses',
    q: 'What courses does techcadd offer?',
    a: 'We offer industry-focused programs across Full Stack Development, AI & Machine Learning, Data Science, Cybersecurity, Cloud & DevOps, Digital Marketing and more. Each one is built around the tools the industry actually hires for, and every program ends with work you can show and defend.'
  },
  {
    id: 'which',
    group: 'courses',
    q: 'Which course is right for me?',
    a: 'That depends on what you enjoy more than what you already know. If you like building things people can see and click, Full Stack is the natural start. If you prefer finding patterns in numbers, look at Data Science. Book a free counselling session and we will walk through your background and goals before you commit to anything.'
  },
  {
    id: 'background',
    group: 'courses',
    q: 'Do I need a programming background to start?',
    a: 'No. Most of our learners start from zero, and the foundation modules assume nothing. What matters far more than prior experience is showing up consistently and doing the practice work between sessions.'
  },
  {
    id: 'certificate',
    group: 'careers',
    q: 'Do you provide certificates?',
    a: 'Yes. You receive a techcadd completion certificate at the end of your program, and separate certification for any internship or live project you complete with us. The projects themselves usually carry more weight in an interview than the certificate does.'
  },
  {
    id: 'placement',
    group: 'careers',
    q: 'Is placement assistance provided?',
    a: 'Yes. Placement assistance includes resume and portfolio reviews, mock technical interviews, guidance on how to present your projects, and referrals to companies hiring in the roles you have trained for. We support you through the process — we do not guarantee a specific outcome, and you should be cautious of anyone who does.'
  },
  {
    id: 'mode',
    group: 'learning',
    q: 'Are classes held online or at the campus?',
    a: 'Both. Classroom batches run at the Ludhiana campus with the labs and mentors on site, and live online batches follow the same syllabus and the same trainers. You can switch between them if your schedule changes mid-program.'
  },
  {
    id: 'projects',
    group: 'learning',
    q: 'Will I build real projects?',
    a: 'Yes, and this is the part we care most about. You build and ship applications end to end rather than copying tutorial exercises, so by the end you can open your own code in an interview and explain every decision in it.'
  },
  {
    id: 'demo',
    group: 'admissions',
    q: 'How do I book a free demo class?',
    a: 'Use the Book Demo button in the navigation or the contact form, tell us which program you are curious about, and we will slot you into the next running batch so you can sit through a real session before deciding.'
  },
  {
    id: 'fees',
    group: 'admissions',
    q: 'What are the fees, and can they be paid in instalments?',
    a: 'Fees vary by programme and duration, so we quote them per course rather than publishing one number that would be wrong for most people. Instalment options are available on the longer programmes. Call the campus or send an enquiry and you will get the exact figure for the track you are considering, with nothing added later.'
  },
  {
    id: 'batches',
    group: 'admissions',
    q: 'When do new batches start?',
    a: 'New batches open through the year rather than on a single annual intake, with the heaviest starts around the summer and winter training seasons. Tell us which course you want and we will give you the next two or three start dates for it.'
  },
  {
    id: 'duration',
    group: 'courses',
    q: 'How long do the courses run?',
    a: 'Short-term formats run 45 days or six weeks, the core courses typically run four to six months, and the certificate programmes run six months or a year. Every course page lists its own duration and weekly hours.'
  },
  {
    id: 'timings',
    group: 'learning',
    q: 'Can I attend while I am working or still in college?',
    a: 'Yes. Evening and weekend batches exist for exactly that reason, and a large share of our learners are either in final year or holding a full-time job. Tell us your availability before you enrol and we will place you in a batch that fits it.'
  },
  {
    id: 'batch-size',
    group: 'learning',
    q: 'How big are the batches?',
    a: 'Small enough that the trainer knows where each person is stuck — typically around twenty learners, and fewer on the advanced tracks. That constraint is the reason batches fill and close rather than expanding indefinitely.'
  },
  {
    id: 'missed',
    group: 'learning',
    q: 'What happens if I miss a class?',
    a: 'Talk to your trainer and you will be given the material, a catch-up session where one is needed, and — on most tracks — the option to sit the same session with another running batch. Missing the practice work is the part that actually hurts, so that is what we help you recover first.'
  },
  {
    id: 'doubts',
    group: 'learning',
    q: 'Is there support outside class hours?',
    a: 'Yes. Doubt support runs outside class hours, because the question that decides whether a concept sticks usually arrives at nine in the evening rather than during the session.'
  },
  {
    id: 'internship',
    group: 'careers',
    q: 'Do you offer internships and industrial training letters?',
    a: 'Yes. We run internship programmes and industrial training in the formats universities ask for — 45 days, six weeks, four months and six months — each ending with a live project and the documentation your college requires.'
  },
  {
    id: 'college',
    group: 'admissions',
    q: 'Do you work with colleges directly?',
    a: 'We do. Colleges partner with us for industrial training batches, workshops, faculty development and campus-wide skill programmes. There is a dedicated college desk for this — see the College Partnerships page.'
  },
  {
    id: 'laptop',
    group: 'learning',
    q: 'Do I need my own laptop?',
    a: 'The campus labs are equipped, so you can complete classroom training without one. You will get much further with your own machine, though, because the practice work between sessions is where most of the learning happens.'
  },
  {
    id: 'switch',
    group: 'courses',
    q: 'I am switching careers from a non-technical background. Is that realistic?',
    a: 'Realistic, and common. What it costs is time and consistency rather than a prior degree in the subject. We will be straight with you about how long the track you are eyeing actually takes for someone starting where you are.'
  },
  {
    id: 'refund',
    group: 'admissions',
    q: 'What if the course turns out not to be for me?',
    a: 'Sit through the free demo first — it exists precisely so this decision is made before money changes hands. If something goes wrong after enrolment, talk to the student desk; switching to a track that fits better is usually the sensible answer, and refund terms are explained in writing at admission rather than buried.'
  }
]

export const FAQ_CTA = {
  eyebrow: 'Not answered here?',
  title: 'Ask us the awkward one',
  lead:
    'Fees for a specific track, whether a batch fits your college timetable, whether we are honestly the right place for you — someone answers the same working day.',
  primary: { label: 'Send an enquiry', href: '/contact', icon: 'mail' },
  secondary: { label: 'Call the campus', href: 'tel:+919888122667', icon: 'phone' },
  note: 'Mon – Sat · techcadd Ludhiana campus'
}

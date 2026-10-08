/* ==================================================================
   Long-form copy for the Advanced Certificate in Digital Marketing
   and Communication.

   This is the page the "Digital Marketing & Communication" entry
   points at in both the Courses menu and the After 12th menu's
   "6 Month Certificates" group, and the one the alias
   `digital-marketing-and-communication` resolves to.

   Split out of marketing.js on purpose. That file seeds six courses;
   this is one course's editorial content and it is longer than all
   six seeds put together. Keeping it here leaves marketing.js
   scannable as what it is — a list of course definitions.

   The copy is written to rank, so the terms the page targets are
   marked **like this** and RichText renders them inside <strong>.
   See RichText.jsx for the one rule it implements.

   Narrative sections declare the `slot` they mount into:

     overview  after the course overview, before the roadmap
     syllabus  after the roadmap, before "who can join"
     careers   after "where it leads", before the enquiry form

   "Who can do this course" is not a narrative section — it fills the
   standard "who can join" block, which asks the same question.

   Tones alternate against the fixed bands around them, so no two
   neighbouring sections share a background. The three sections at the
   `careers` slot run tint, paper, tint into the dark enquiry form.
================================================================== */

export const DIGITAL_MARKETING_OVERVIEW = {
  title: 'The advanced certificate in digital marketing and communication',
  lead: 'Looking to build a future-ready career in digital marketing? The **Advanced Certificate in Digital Marketing and Communication in Ludhiana** at techcadd is designed for students, graduates, and job seekers who want practical, industry-relevant skills — not just theory. Based in Ludhiana, Punjab, the programme covers SEO, social media marketing, Google Ads, content strategy, email marketing, analytics, and the communication skills needed to thrive in today’s digital economy.',
  body: [
    'Whether you’re a 12th-pass student exploring career options, a graduate from a Ludhiana college, or a working professional planning a switch, this course gives you hands-on training with live projects, real campaigns, and expert mentorship. The Ludhiana centre combines classroom learning with practical tools training, so every student graduates job-ready.',
    'With Ludhiana’s growing business ecosystem — from local retail brands to manufacturing exporters — demand for skilled digital marketers is rising fast. This advanced certificate positions you to meet that demand, with certification, placement support, and a curriculum built around what employers actually need.'
  ]
}

/* ---------------------------------------------------------------- */

/* Who can do this course.

   Fills the standard "who can join" block rather than sitting as a
   narrative section, replacing the six generic groups the factory
   writes for every other course. See joiners() in shared.js. */
export const DIGITAL_MARKETING_JOINERS = {
  eyebrow: 'Eligibility',
  title: 'Who can do this course',
  lead: 'The **Advanced Certificate in Digital Marketing and Communication in Ludhiana** is built to welcome learners from every background and stage of life. You don’t need a technical degree or prior marketing experience to get started — just curiosity, willingness to learn, and a goal to build a digital career in Ludhiana’s fast-growing job market.',
  groups: [
    {
      icon: 'curriculum',
      title: '12th Pass Students in Ludhiana',
      text: 'If you’ve just completed your 12th and are unsure whether to go the traditional college route or start something career-focused right away, this course is an excellent starting point. Students from schools across Ludhiana — Model Town, Sarabha Nagar, Civil Lines, BRS Nagar — are increasingly choosing skill-based certificate programs alongside or instead of conventional degrees. This certificate gives you a head start with real, employable skills while you decide on your long-term academic path.',
      tag: 'Head start'
    },
    {
      icon: 'career',
      title: 'Graduates Looking for Job-Ready Skills',
      text: 'Many graduates from Ludhiana-based colleges complete their degrees but still feel unprepared for the actual job market. A B.A., B.Com, or BBA teaches theory, but employers today want practical, tool-based skills. This course bridges that exact gap, turning your degree into a launchpad rather than just a certificate on paper.',
      tag: 'Any stream'
    },
    {
      icon: 'spark',
      title: 'Job Seekers & Career Switchers',
      text: 'If you’re currently job hunting in Ludhiana or feel stuck in a role that doesn’t excite you, digital marketing offers a genuine second chance. It’s one of the few fields where skills matter more than your educational background or years of experience. Career switchers from customer service, retail, teaching, or unrelated technical fields have moved into digital marketing roles after structured training like this.',
      tag: 'Start from zero'
    },
    {
      icon: 'chart',
      title: 'Small Business Owners & Entrepreneurs',
      text: 'Ludhiana is home to thousands of small and medium businesses — hosiery and textile units, auto-parts manufacturers, retail showrooms, local service providers. If you run or plan to run a business, this course teaches you to market it yourself: building a Google Business Profile, running local Facebook and Instagram ads, improving local SEO so customers in Ludhiana find you online, and tracking real return instead of guessing what works.',
      tag: 'Market it yourself'
    },
    {
      icon: 'server',
      title: 'Working Professionals Wanting an Upgrade',
      text: 'Already employed but want to add a high-demand skill to your resume? Professionals in sales, HR, content, or administrative roles across Ludhiana’s corporate and industrial sectors are adding digital marketing certification to increase their value, switch departments, or negotiate better roles.',
      tag: 'Evening batches'
    },
    {
      icon: 'terminal',
      title: 'Freelancers & Content Creators',
      text: 'If you want to freelance or build a personal brand — as a content creator, copywriter, or social media manager — this course gives you the structured foundation to turn scattered skills into a professional, income-generating service you can offer to clients locally in Ludhiana or remotely.',
      tag: 'Turn it into income'
    }
  ],
  note: 'No prior marketing or technical background is required. The course starts from fundamentals and progresses to advanced topics, which keeps it beginner-friendly while still worthwhile for anyone who already knows some marketing.'
}

/* ---------------------------------------------------------------- */

const CURRICULUM = {
  id: 'dm-curriculum',
  slot: 'syllabus',
  tone: 'paper',
  eyebrow: 'What you learn',
  title: 'What you’ll learn and the tools you’ll master',
  lead: 'The programme is designed to take you from foundational concepts to advanced, job-ready execution. Here’s what the curriculum covers and the real tools you’ll get hands-on experience with.',
  items: [
    {
      title: 'Digital Marketing Fundamentals & Strategy',
      text: 'You’ll start with the building blocks — understanding the digital marketing funnel, buyer personas, market research, and how to build a complete marketing strategy from scratch. This foundation ensures you understand *why* a campaign works, not just how to click buttons.'
    },
    {
      title: 'Search Engine Optimization (SEO)',
      text: 'Learn on-page SEO, off-page SEO, technical SEO, keyword research, local SEO — especially relevant for Ludhiana businesses wanting to rank in local search — and Core Web Vitals. Tools covered include **Google Search Console**, Google Keyword Planner, Ahrefs and SEMrush basics, Ubersuggest, and Yoast SEO.'
    },
    {
      title: 'Search Engine Marketing & Google Ads',
      text: 'Master paid search campaigns using **Google Ads** — campaign structure, keyword bidding strategies, Quality Score optimization, ad copywriting, and conversion tracking through Google Tag Manager.'
    },
    {
      title: 'Social Media Marketing',
      text: 'Practical training on running organic and paid campaigns across **Meta Business Suite** (Facebook and Instagram Ads), LinkedIn Ads, and emerging platforms. You’ll learn audience targeting, content calendars, community management, and paid ad creation from the ground up.'
    },
    {
      title: 'Content Marketing & Communication Skills',
      text: 'This is where the “Communication” half of the certificate comes in. You’ll learn blog writing, persuasive copywriting, brand storytelling, email copywriting, and client-facing communication — the skills that make you a strategic communicator businesses trust, not just a tool operator.'
    },
    {
      title: 'Email Marketing & Marketing Automation',
      text: 'Build real email campaigns, lead nurturing sequences, and automation workflows using platforms like **Mailchimp** and HubSpot fundamentals — essential for retaining customers and driving repeat business.'
    },
    {
      title: 'Google Analytics & Data-Driven Marketing',
      text: 'Learn to read and interpret data using **Google Analytics (GA4)**, track conversions, measure return, and make informed decisions instead of guesswork. This module also covers basic reporting and dashboard building.'
    },
    {
      title: 'Video & YouTube Marketing',
      text: 'With short-form and video content dominating the current landscape, you’ll get an introduction to YouTube SEO, video content strategy, and how video fits into a broader marketing funnel.'
    },
    {
      title: 'AI Tools in Digital Marketing',
      text: 'Stay current with how AI is reshaping marketing — from AI-assisted content creation and prompting for marketing copy, to AI-powered ad optimization and the analytics tools agencies increasingly use.'
    },
    {
      title: 'Live Projects & Portfolio Building',
      text: 'Throughout the course you’ll apply everything to real or simulated business campaigns, building a portfolio you can show employers or clients — whether you’re pursuing a job in Ludhiana’s growing digital economy or launching a freelance career.'
    }
  ],
  tools: {
    label: 'Key tools you’ll work with',
    items: [
      'Google Ads',
      'Google Analytics (GA4)',
      'Google Search Console',
      'Google Tag Manager',
      'Meta Business Suite',
      'Mailchimp',
      'HubSpot basics',
      'Canva',
      'WordPress & Yoast SEO',
      'Ubersuggest',
      'SEMrush / Ahrefs basics'
    ]
  },
  close: 'By the end of the programme you won’t just understand digital marketing theory — you’ll have hands-on command of the actual tools employers and clients expect you to know.'
}

/* ---------------------------------------------------------------- */

const WHY_THIS_PROGRAMME = {
  id: 'dm-why-programme',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Why this programme',
  title: 'Why this program',
  lead: 'Ludhiana is Punjab’s largest industrial and business hub — hosiery, textiles, auto-parts and manufacturing, alongside a fast-growing retail and startup scene. Most digital marketing courses teach generic, one-size-fits-all content. This one is built for the market around you.',
  items: [
    {
      title: 'Local Relevance Meets Global Standards',
      text: 'The programme blends globally recognised digital marketing frameworks — Google, Meta and HubSpot-aligned practices — with real examples and case studies drawn from local Ludhiana businesses, so what you learn in class is immediately applicable to the market outside the door.'
    },
    {
      title: 'Communication Skills, Not Just Marketing Tools',
      text: 'Most institutes only teach tools — Google Ads, Meta Business Suite, SEO plugins. This programme embeds communication into the curriculum: persuasive writing, client communication, presentation skills, and content storytelling. In a competitive job and freelance market, the ability to explain a marketing strategy to a client, a manager, or an audience is what separates a good marketer from a great one.'
    },
    {
      title: 'Hands-On, Project-Based Learning',
      text: 'Instead of passive lectures, you’ll work on live campaigns, client-style projects, and practical assignments — running actual ad campaigns, optimising real websites for search, and building content calendars. By the time you finish, your portfolio holds tangible proof of your skills, not just a certificate.'
    },
    {
      title: 'Certification That Adds Credibility',
      text: 'On completion you receive an Advanced Certificate from techcadd, a known name in Ludhiana’s IT and digital training space. It strengthens your resume, LinkedIn profile and freelance portfolio — though what employers examine hardest is the campaign work behind it.'
    },
    {
      title: 'Placement & Career Support',
      text: 'The Ludhiana centre offers placement assistance, connecting trained students with local agencies, businesses and startups hiring digital marketing executives, social media managers, SEO specialists and content strategists. For students who prefer freelancing or entrepreneurship, mentorship is available to help you find your first clients.'
    },
    {
      title: 'Flexible Learning for Every Schedule',
      text: 'Whether you’re a student balancing college, a professional working full-time, or a business owner managing daily operations, batch timings — morning, evening and weekend — are designed to fit around your life rather than the other way around.'
    },
    {
      title: 'Industry-Experienced Faculty',
      text: 'Learn from trainers who have actually run digital campaigns, not people reading from slides. That grounding means you learn what currently works, including AI-assisted marketing, short-form video, and how Google’s algorithms keep shifting underneath everyone.'
    },
    {
      title: 'Growing Demand in Ludhiana’s Digital Economy',
      text: 'As more Ludhiana businesses shift budgets from traditional advertising to digital channels, demand for skilled local digital marketers keeps increasing. Completing this course puts you in a field with genuine long-term growth, locally and beyond.'
    }
  ],
  close: 'This programme isn’t just about learning digital marketing — it’s about becoming job-ready, client-ready and future-ready, right here in Ludhiana.'
}

/* ---------------------------------------------------------------- */

const WHY_TECHCADD = {
  id: 'dm-why-techcadd',
  slot: 'careers',
  tone: 'paper',
  eyebrow: 'Why techcadd',
  title: 'Why choose techcadd',
  lead: 'With plenty of institutes across Ludhiana offering digital marketing training, here is what actually distinguishes this one.',
  items: [
    {
      title: '15+ Years of IT & Digital Training Experience',
      text: 'techcadd Computer Education isn’t a new player experimenting with digital marketing training — it’s an established IT training institute with over 15 years of experience and 45+ awards for training excellence. You’re choosing an institute with a track record, not an untested startup.'
    },
    {
      title: 'Ludhiana-Based, Locally Accessible',
      text: 'Unlike online-only or metro-headquartered institutes that treat Ludhiana as a secondary market, techcadd has a dedicated physical presence here. That means in-person classroom training, direct access to faculty for doubt-clearing, a real campus environment for networking with fellow students, and local support for enrolment, batch changes or career guidance — none of which a purely online programme can offer.'
    },
    {
      title: 'A Full IT & Digital Ecosystem Under One Roof',
      text: 'techcadd isn’t limited to digital marketing — it also runs Web & App Development, Cloud Computing, Cyber Security, AI & Data Science, and CAD/CAM courses. That matters because digital marketing increasingly overlaps with technology, from AI-powered marketing tools to basic web and analytics skills. A multi-disciplinary institute means cross-trained faculty and exposure to how marketing connects with tech.'
    },
    {
      title: 'A Placement-Focused Approach',
      text: 'The courses are built around a job-oriented philosophy: the goal isn’t just to teach concepts but to get you hired. That includes resume support, interview preparation, and connections with local businesses and agencies hiring in Ludhiana’s growing digital economy.'
    },
    {
      title: 'Certified, Experienced Faculty',
      text: 'Instructors bring real, hands-on campaign experience rather than theoretical knowledge alone. Student feedback consistently highlights that the curriculum is kept current with industry standards and taught by instructors who are genuinely knowledgeable and supportive.'
    },
    {
      title: 'Recognised Across Punjab’s Education Community',
      text: 'techcadd regularly conducts sessions and seminars at institutions across the region — including Khalsa College Ludhiana, CT University Ludhiana, GNDU Jalandhar, DAV College Amritsar, and Lovely Professional University — covering digital marketing, SEO, AI-based branding and entrepreneurship. That reflects an active role in Punjab’s education ecosystem, not a single classroom operation.'
    },
    {
      title: 'Flexible Batches & Affordable Options',
      text: 'Morning, evening and weekend batch options, along with EMI-friendly fee structures, make the certificate accessible to students, working professionals and business owners alike — whatever their schedule or budget.'
    },
    {
      title: 'A Name Ludhiana Students Already Trust',
      text: 'Word-of-mouth and student reviews consistently point to techcadd as a leading choice for computer and IT education in Ludhiana. Choosing it means joining a community of learners who have already used this training to build real careers, in digital marketing and beyond.'
    }
  ],
  close: 'Fifteen years of training, a physical campus you can walk into, faculty who have run campaigns, and a curriculum that treats communication as a skill in its own right.'
}

/* ---------------------------------------------------------------- */

/* The closing pitch, immediately above the enquiry form. */
const ENROL_NOW = {
  id: 'dm-enrol',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Enrol now',
  title: 'Start your digital marketing career in Ludhiana',
  lead: 'Turn your career goals into real, job-ready skills.',
  items: [
    {
      title: 'What you get',
      text: 'The **Advanced Certificate in Digital Marketing and Communication** — SEO, Google Ads, social media, content and communication, email marketing, GA4 analytics, video and AI tools, all applied to live campaigns that become your portfolio.'
    },
    {
      title: 'Before you enrol',
      text: 'The course typically runs 3 to 6 months depending on whether you join a regular, weekend or fast-track batch, in classroom mode at the Ludhiana centre. Batch sizes are limited, so contact the centre for the current schedule, exact duration and fees.'
    }
  ]
}

export const DIGITAL_MARKETING_NARRATIVE = [
  CURRICULUM,
  WHY_THIS_PROGRAMME,
  WHY_TECHCADD,
  ENROL_NOW
]

/* ------------------------------------------------------------------
   UNVERIFIED TESTIMONIALS — CHECK BEFORE THIS PAGE GOES LIVE.

   Same caveat as the other pages carrying supplied reviews: full
   names, home localities, named colleges, and named employment
   outcomes ("got placed as a Social Media Executive with a local
   agency", "moved into a marketing coordinator role"). If they were
   written as sample copy rather than collected from the students
   named, they must not be published — invented reviews attributed to
   identifiable people, carrying employment claims, mislead
   prospective students and are unlawful in many jurisdictions.

   One entry also references a techcadd seminar at Khalsa College,
   which names a third party in an endorsement. That one in particular
   should be confirmed before it goes out.

   Confirm each entry against a real, attributable review. Anything
   that cannot be confirmed should be removed — or delete the
   `testimonials` line from the seed in marketing.js, which makes the
   page fall back to the generic quotes in shared.js.
------------------------------------------------------------------ */
export const DIGITAL_MARKETING_TESTIMONIALS = [
  {
    quote:
      'I joined this course right after my graduation from a Ludhiana college and honestly had zero clue about digital marketing. The trainers broke everything down so simply — from SEO to Google Ads. Within a month of finishing, I got placed as a Social Media Executive with a local agency.',
    name: 'Simran Kaur',
    course: 'Digital Marketing',
    detail: 'Model Town, Ludhiana',
    rating: 5,
    initials: 'SK'
  },
  {
    quote:
      'I run a small hosiery business in Ludhiana and always struggled to get customers online. This course taught me exactly how to set up Google My Business, run local Facebook ads, and actually track what’s working. My online enquiries have genuinely increased since I applied what I learned.',
    name: 'Rohit Sharma',
    course: 'Digital Marketing',
    detail: 'Sarabha Nagar, Ludhiana',
    rating: 5,
    initials: 'RS'
  },
  {
    quote:
      'Coming from a CT University background, I thought I already knew marketing basics. This program showed me how much practical stuff isn’t taught in college. The live project work was the best part — I built a real portfolio, not just notes.',
    name: 'Anmol Preet Singh',
    course: 'Digital Marketing',
    detail: 'Civil Lines, Ludhiana',
    rating: 5,
    initials: 'AP'
  },
  {
    quote:
      'Great course overall. The SEO and Google Analytics modules were especially strong. Only thing I’d suggest is a bit more time on advanced Meta Ads, but the trainers were always open to extra doubt-clearing sessions after class.',
    name: 'Harleen Kaur',
    course: 'Digital Marketing',
    detail: 'BRS Nagar, Ludhiana',
    rating: 4,
    initials: 'HK'
  },
  {
    quote:
      'I used to commute from Chandigarh for weekend batches and it was worth every trip. The communication and content writing modules really stood out — most institutes only teach tools, but here I actually learned how to pitch and present strategy to clients.',
    name: 'Karan Mehta',
    course: 'Digital Marketing',
    detail: 'Chandigarh',
    rating: 5,
    initials: 'KM'
  },
  {
    quote:
      'After a career break, I wanted to restart professionally without going back to a full degree. This certificate gave me exactly that — practical and fast. I’m now working as a content and social media coordinator.',
    name: 'Navjot Kaur',
    course: 'Digital Marketing',
    detail: 'Dugri, Ludhiana',
    rating: 5,
    initials: 'NK'
  },
  {
    quote:
      'Best decision after 12th. Instead of jumping straight into a generic degree, I did this course first. Now I freelance for two small Ludhiana businesses doing their SEO and social media, and I’m only 19.',
    name: 'Vishal Kumar',
    course: 'Digital Marketing',
    detail: 'Ghumar Mandi, Ludhiana',
    rating: 5,
    initials: 'VK'
  },
  {
    quote:
      'Solid curriculum and very hands-on. I appreciated that the trainers used real Ludhiana and Punjab-based business examples instead of only generic global case studies — made everything easier to relate to and apply.',
    name: 'Ritika Bansal',
    course: 'Digital Marketing',
    detail: 'Sector 32, Chandigarh',
    rating: 4,
    initials: 'RB'
  },
  {
    quote:
      'techcadd’s trainers actually visited our college for a seminar on AI-based branding, which is how I first heard about this course. Signed up right after graduating and it was one of the most practical decisions I’ve made for my career.',
    name: 'Gurpreet Singh',
    course: 'Digital Marketing',
    detail: 'Khalsa College alumnus, Ludhiana',
    rating: 5,
    initials: 'GS'
  },
  {
    quote:
      'I was a working professional in an unrelated field wanting to switch careers. The evening batches made it possible to study without quitting my job. Within a few months of completing, I moved into a marketing coordinator role.',
    name: 'Priya Chopra',
    course: 'Digital Marketing',
    detail: 'Field Ganj, Ludhiana',
    rating: 5,
    initials: 'PC'
  },
  {
    quote:
      'Even though I’m from Jalandhar, I chose techcadd Ludhiana because of their reputation. The faculty’s real campaign experience made a huge difference — they taught from experience, not just textbooks.',
    name: 'Manpreet Singh',
    course: 'Digital Marketing',
    detail: 'Jalandhar, commuted for classes',
    rating: 5,
    initials: 'MS'
  }
]

/* ------------------------------------------------------------------
   The page's own questions. The seed sets `ownFaqs`, so these replace
   the standard seven the factory writes rather than sitting on top of
   them — half of them ask the same things.
------------------------------------------------------------------ */
export const DIGITAL_MARKETING_FAQS = [
  {
    q: 'What is the Advanced Certificate in Digital Marketing and Communication at techcadd, Ludhiana?',
    a: 'It is a career-focused certification programme that trains students in SEO, Google Ads, social media marketing, content strategy, email marketing, analytics, and professional communication skills for real-world **digital marketing** roles.'
  },
  {
    q: 'Who can enrol in this course?',
    a: 'The course is open to 12th-pass students, graduates, job seekers, working professionals, business owners, and freelancers in and around Ludhiana. No prior marketing or technical background is required.'
  },
  {
    q: 'What is the duration of the course?',
    a: 'The duration typically ranges from **3 to 6 months**, depending on the batch schedule chosen — regular, weekend, or fast-track. Exact duration is confirmed at the time of enrolment at the Ludhiana centre.'
  },
  {
    q: 'Is this course available in offline, online, or hybrid mode?',
    a: 'techcadd Ludhiana offers this course in classroom (offline) mode at its Ludhiana centre, with flexible morning, evening, and weekend batch timings to suit students and working professionals.'
  },
  {
    q: 'Does techcadd provide placement assistance after course completion?',
    a: 'Yes. techcadd offers placement support, connecting trained students with local agencies, businesses, and startups in Ludhiana that are hiring digital marketing executives, SEO specialists, and social media managers.'
  },
  {
    q: 'What tools will I learn during this course?',
    a: 'You’ll gain hands-on experience with **Google Ads**, **Google Analytics (GA4)**, Google Search Console, **Meta Business Suite**, Mailchimp, Canva, WordPress and Yoast SEO, Google Tag Manager, and keyword research tools like Ubersuggest and SEMrush basics.'
  },
  {
    q: 'Is this course suitable for someone with no prior marketing experience?',
    a: 'Yes. The course is structured to start from fundamentals and progressively move to advanced topics, making it beginner-friendly while still valuable for those with some existing marketing knowledge.'
  },
  {
    q: 'Will I receive a certificate after completing the course?',
    a: 'Yes. On successful completion you receive an Advanced Certificate in Digital Marketing and Communication from techcadd, which you can add to your resume, LinkedIn profile, and freelance portfolio. In practice, employers weigh the campaign portfolio behind it more heavily than the certificate itself.'
  },
  {
    q: 'How is techcadd different from other digital marketing institutes in Ludhiana?',
    a: 'techcadd combines 15+ years of IT training experience, a physical Ludhiana campus, industry-experienced faculty, a job-oriented curriculum, and hands-on live projects — rather than purely theoretical or online-only training.'
  },
  {
    q: 'Can business owners and entrepreneurs benefit from this course?',
    a: 'Yes. Many enrolled students are small business owners from Ludhiana’s retail, textile, and manufacturing sectors who use the skills to market their own businesses online, run local ad campaigns, and improve their local search visibility.'
  },
  {
    q: 'What career opportunities are available after completing this course?',
    a: 'Graduates can pursue roles such as Digital Marketing Executive, SEO Specialist, Social Media Manager, Content Marketing Associate, and PPC Executive, or start freelancing and consulting for local Ludhiana businesses.'
  },
  {
    q: 'Are weekend batches available for working professionals?',
    a: 'Yes. techcadd Ludhiana offers weekend and evening batch options specifically designed for working professionals and students balancing other commitments.'
  }
]

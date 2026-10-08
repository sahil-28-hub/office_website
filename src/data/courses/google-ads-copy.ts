/* ==================================================================
   Long-form copy for the Google Ads course page.

   Third of the courses in marketing.js to carry editorial copy of its
   own, and split out for the same reason as the other two — that file
   seeds six courses, and this is one course's content. See
   ./digital-marketing-copy.js and ./social-media-marketing-copy.js.

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
   neighbouring sections share a background. The two sections at the
   `careers` slot run tint, paper into the dark enquiry form.
================================================================== */

export const GOOGLE_ADS_OVERVIEW = {
  title: 'The Google Ads course in Ludhiana built around live campaigns',
  lead: 'Looking to build a career in paid advertising, PPC, or performance marketing? The **Google Ads Course in Ludhiana** by techcadd is designed to help students, fresh graduates, job seekers, freelancers, and business owners learn how to create and manage result-focused Google Ads campaigns.',
  body: [
    'Google Ads is one of the most widely used platforms for reaching customers who are actively searching for products and services. With practical training, learners can understand keyword research, campaign setup, ad copywriting, bidding strategies, audience targeting, conversion tracking, remarketing, and campaign optimization.',
    'The course focuses on hands-on **Google Ads training in Ludhiana**, helping students move beyond theory and understand how paid search works in real business situations. Learners can explore Search Ads, Display Ads, Performance Max, remarketing, analytics, and essential PPC concepts.',
    'For students searching for a **Google Ads course in Ludhiana**, **PPC training in Ludhiana**, or **Google Ads certification training in Ludhiana**, techcadd provides a career-oriented learning pathway focused on practical skills and industry-relevant knowledge.'
  ]
}

/* ---------------------------------------------------------------- */

/* Who can do this course.

   Fills the standard "who can join" block rather than sitting as a
   narrative section, replacing the six generic groups the factory
   writes for every other course. See joiners() in shared.js. */
export const GOOGLE_ADS_JOINERS = {
  eyebrow: 'Eligibility',
  title: 'Who can do a Google Ads course in Ludhiana',
  lead: 'A **Google Ads Course in Ludhiana** is suitable for anyone who wants to develop practical skills in paid advertising, PPC, and performance marketing. You do not need to be an expert in digital marketing to begin. With the right training and regular practice, students from different educational and professional backgrounds can learn how Google Ads works and how businesses use paid campaigns to generate leads, sales, website traffic, and enquiries.',
  groups: [
    {
      icon: 'curriculum',
      title: '12th Pass Students',
      text: 'Students who have completed their 12th can start learning Google Ads as an additional career skill. Instead of waiting until graduation to explore digital careers, they can begin understanding search advertising, keywords, ad campaigns, and online customer targeting early.',
      tag: 'Start early'
    },
    {
      icon: 'code',
      title: 'College Students',
      text: 'College students can use Google Ads training to build practical skills alongside their academic studies. Learning PPC can strengthen their resumes and give them an opportunity to develop a portfolio of campaign-based projects before entering the job market.',
      tag: 'Alongside a degree'
    },
    {
      icon: 'career',
      title: 'Graduates and Freshers',
      text: 'Graduates looking for career-oriented skills can consider Google Ads training to enter digital marketing and performance marketing roles. A practical understanding of campaign creation, keyword targeting, bidding, conversion tracking, and optimization can complement a degree in business, commerce, management, IT, or other fields.',
      tag: 'Any stream'
    },
    {
      icon: 'spark',
      title: 'Job Seekers',
      text: 'If you are searching for a **Google Ads job in Ludhiana**, learning PPC can help you develop a specialized digital marketing skill. Employers often look for candidates who understand not only marketing concepts but also how advertising platforms work in practical situations.',
      tag: 'A specialist skill'
    },
    {
      icon: 'mentor',
      title: 'Digital Marketing Beginners',
      text: 'You can take this course even if you are new to paid advertising. A structured **Google Ads training course in Ludhiana** can introduce you to the fundamentals step by step, from understanding search intent and keywords to creating campaigns and evaluating performance.',
      tag: 'No background needed'
    },
    {
      icon: 'terminal',
      title: 'Freelancers',
      text: 'Freelancers can learn Google Ads to add PPC services to their existing digital marketing skill set. With experience and continued practice, they can potentially offer campaign setup, optimization, reporting, and advertising management services to clients.',
      tag: 'Add a service'
    },
    {
      icon: 'chart',
      title: 'Business Owners and Entrepreneurs',
      text: 'Local business owners can also benefit from learning Google Ads. Understanding paid search can help entrepreneurs make more informed decisions about advertising budgets, target audiences, keywords, leads, and campaign performance.',
      tag: 'Run it in-house'
    },
    {
      icon: 'stack',
      title: 'Social Media or Digital Marketing Professionals',
      text: 'Professionals already working with SEO, social media marketing, content marketing, or website development can expand their skill set by learning PPC. Combining organic and paid marketing knowledge can provide a broader understanding of how businesses attract and convert online customers.',
      tag: 'Broaden the mix'
    },
    {
      icon: 'support',
      title: 'Career Switchers',
      text: 'People planning to move from another field into digital marketing can use Google Ads as a specialized entry point. The course can help them understand performance marketing concepts and build practical knowledge that complements other digital skills.',
      tag: 'A way in'
    },
    {
      icon: 'star',
      title: 'Students Looking for Practical Training in Ludhiana',
      text: 'For learners specifically searching for a **Google Ads course Ludhiana**, classroom or practical training can provide a structured environment to learn, ask questions, practice campaign concepts, and understand how paid advertising is used in real business scenarios.',
      tag: 'Learn locally'
    }
  ],
  note: 'You do not need programming knowledge to begin. Basic computer skills, an interest in how customers search, and a willingness to practise on real campaigns are enough of a starting point.'
}

/* ---------------------------------------------------------------- */

const CURRICULUM = {
  id: 'gads-curriculum',
  slot: 'syllabus',
  tone: 'paper',
  eyebrow: 'What you learn',
  title: 'What you’ll learn in the Google Ads course',
  lead: 'The **Google Ads Course in Ludhiana** by techcadd is designed to help learners develop practical knowledge of paid advertising and PPC campaign management. The focus is on understanding how Google Ads works, how customers search online, how campaigns are structured, and how advertising performance can be measured and improved.',
  items: [
    {
      title: 'Google Ads Fundamentals',
      text: 'Students begin with the fundamentals of Google Ads and PPC advertising. You will understand how paid search works, how advertisers compete for search visibility, and how businesses use Google Ads to generate website traffic, enquiries, leads, and sales.'
    },
    {
      title: 'Keyword Research',
      text: 'Keyword research is an important part of successful paid search campaigns. You will learn how to identify relevant keywords, understand search intent, differentiate between keyword types, and develop keyword lists based on business objectives.'
    },
    {
      title: 'Google Search Ads',
      text: 'You will learn how to plan and structure Search campaigns, create relevant ad groups, write effective ad copy, and understand how ads can match different user searches. Students can also learn the importance of negative keywords for reducing irrelevant traffic.'
    },
    {
      title: 'Ad Copywriting',
      text: 'Creating an advertisement involves more than adding keywords. The course covers principles of writing relevant and compelling ad copy, using appropriate calls to action, highlighting business benefits, and aligning advertisements with landing-page intent.'
    },
    {
      title: 'Bidding and Budget Management',
      text: 'Students will learn the basics of Google Ads bidding and budget planning. Topics can include manual and automated bidding concepts, campaign budgets, cost control, and understanding how bidding strategies relate to campaign objectives.'
    },
    {
      title: 'Conversion Tracking',
      text: 'Understanding conversions is essential for performance marketing. You will learn why conversion tracking matters and how businesses can measure actions such as enquiries, calls, purchases, registrations, or other valuable customer actions.'
    },
    {
      title: 'Campaign Optimization',
      text: 'Launching a campaign is not enough. You will learn how to evaluate campaign performance and identify areas for improvement. Important metrics include impressions, clicks, CTR, CPC, conversions, conversion rate, and advertising costs.'
    },
    {
      title: 'Remarketing and Audience Targeting',
      text: 'The course also introduces audience-based advertising concepts and remarketing. Students can understand how businesses reconnect with people who have previously interacted with their website or online presence.'
    },
    {
      title: 'Display and Performance Campaign Concepts',
      text: 'Learners can explore Google’s wider advertising ecosystem, including Display advertising and **Performance Max** concepts. This helps students understand how paid advertising can extend beyond traditional search campaigns.'
    },
    {
      title: 'Google Analytics and Reporting',
      text: 'Students can learn the fundamentals of using analytics and reporting to understand campaign performance and user behaviour. Learning to read advertising reports can help future PPC professionals communicate results and make data-informed decisions.'
    }
  ],
  tools: {
    label: 'Tools you can learn',
    items: [
      'Google Ads',
      'Google Keyword Planner',
      'Google Analytics',
      'Google Tag Manager',
      'Google Search Console',
      'Looker Studio',
      'Spreadsheet reporting'
    ]
  },
  close: 'Which tools you spend most time in depends on the curriculum you join and the practical exercises your batch runs, but the principles behind campaign planning, testing, measurement and optimisation stay the same across all of them.'
}

/* ---------------------------------------------------------------- */

const WHY_THIS_PROGRAMME = {
  id: 'gads-why-programme',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Why this programme',
  title: 'Why this Google Ads program in Ludhiana',
  lead: 'Choosing the right **Google Ads Course in Ludhiana** can make a significant difference when your goal is to develop practical PPC and performance marketing skills. Google Ads is not simply about creating an advertisement and setting a budget. Successful campaigns require an understanding of search intent, keyword selection, ad relevance, bidding, audience targeting, landing pages, conversion tracking, and continuous optimization. A structured program helps students understand these areas in a systematic way.',
  items: [
    {
      title: 'Learn Practical PPC Skills',
      text: 'A career-focused Google Ads program should go beyond definitions and theory. Students need to understand how campaigns are planned, created, monitored, and improved. Practical learning can help you become familiar with campaign structures, keyword research, ad groups, responsive search ads, negative keywords, bidding strategies, and performance metrics.'
    },
    {
      title: 'Understand How Customers Search',
      text: 'Google Ads works around user search behaviour. Learning how to identify relevant search queries and understand search intent helps students create more focused campaigns. This knowledge is also valuable when working with SEO, content marketing, landing pages, and broader digital marketing strategies.'
    },
    {
      title: 'Develop Campaign Optimization Skills',
      text: 'Launching a campaign is only the beginning. Students need to understand important metrics such as impressions, clicks, click-through rate, cost per click, conversions, conversion rate, and return on advertising spend. Learning how to evaluate these metrics can help future PPC professionals make more informed optimization decisions.'
    },
    {
      title: 'Build Job-Ready Knowledge',
      text: 'For students and freshers searching for **Google Ads training in Ludhiana**, the objective should be to develop skills that can be applied in professional environments. Practical knowledge of paid search can support career opportunities such as PPC Executive, Google Ads Executive, Performance Marketing Executive, Digital Marketing Executive, and Paid Media Specialist.'
    },
    {
      title: 'Useful for Freelancing and Business',
      text: 'Google Ads skills are not limited to traditional employment. Freelancers can use PPC knowledge as part of their digital marketing service portfolio, while entrepreneurs can learn how paid advertising works and make better decisions when promoting their products or services online.'
    },
    {
      title: 'Learn Alongside Other Digital Skills',
      text: 'Google Ads becomes even more useful when combined with SEO, social media marketing, analytics, content marketing, and conversion optimization. Students can therefore use PPC training as a specialized skill within a broader digital marketing career path.'
    },
    {
      title: 'Career-Focused Learning in Ludhiana',
      text: 'Local students searching for a **Google Ads course in Ludhiana**, **PPC course in Ludhiana**, or **Google Ads certification course in Ludhiana** often want accessible training that connects learning with career goals. A structured local program allows students to learn in a focused environment while developing practical understanding of modern paid advertising.'
    },
    {
      title: 'Keep Learning After the Course',
      text: 'Google Ads evolves continuously, with changes in automation, campaign types, targeting, measurement, and AI-powered features. The real value of training is therefore not memorizing one platform interface — it is learning the principles behind campaign planning, testing, measurement, and optimization.'
    }
  ],
  close: 'For anyone interested in paid advertising, the right Google Ads program can provide a strong starting point. With consistent practice, project work, and continued learning, students can turn PPC knowledge into a valuable digital marketing skill for employment, freelancing, or business growth.'
}

/* ---------------------------------------------------------------- */

/* The details a prospective student checks before enquiring. Sits last
   at the `careers` slot, immediately above the enquiry form, so the
   facts and the form that asks about them are together. */
const COURSE_DETAILS = {
  id: 'gads-course-details',
  slot: 'careers',
  tone: 'paper',
  eyebrow: 'Course details',
  title: 'The programme at a glance',
  lead: 'Ready to learn Google Ads in Ludhiana and develop practical skills in PPC and performance marketing? techcadd offers career-focused Google Ads training covering campaign planning, keyword research, ad creation, bidding, conversion tracking, remarketing, reporting, and optimization.',
  items: [
    { title: 'Course name', text: 'Google Ads Course in Ludhiana.' },
    { title: 'Institute', text: 'techcadd.' },
    { title: 'Location', text: 'Ludhiana, Punjab, India.' },
    {
      title: 'Duration',
      text: 'Around 6–8 weeks. Confirm the current schedule and batch dates with techcadd.'
    },
    {
      title: 'Mode',
      text: 'Classroom and the training modes currently available at the Ludhiana centre.'
    },
    {
      title: 'Suitable for',
      text: '12th-pass students, graduates, freshers, job seekers, freelancers, and business owners.'
    },
    {
      title: 'Focus',
      text: 'Google Ads, PPC, paid search, campaign management, and performance marketing.'
    }
  ]
}

export const GOOGLE_ADS_NARRATIVE = [CURRICULUM, WHY_THIS_PROGRAMME, COURSE_DETAILS]

/* ------------------------------------------------------------------
   What students say.

   The source reviews are anonymous — each is identified by the kind of
   learner who wrote it rather than by a name — so `name` carries that
   label and no personal names are invented. It also has to be unique
   per entry: CourseTestimonials keys both the slides and the dots on
   it. See testimonials() in shared.js for the shape.
------------------------------------------------------------------ */
export const GOOGLE_ADS_TESTIMONIALS = [
  {
    quote:
      'The practical approach made Google Ads much easier to understand. I learned how keywords, campaigns, ad groups and bidding work instead of only studying theory.',
    name: 'Ludhiana student',
    course: 'Google Ads',
    detail: 'techcadd student, Ludhiana',
    rating: 5,
    initials: 'LS'
  },
  {
    quote:
      'I was looking for a skill that could improve my digital marketing profile after graduation. The Google Ads modules helped me understand PPC and campaign optimization in a structured way.',
    name: 'Fresh graduate',
    course: 'Google Ads',
    detail: 'techcadd student',
    rating: 5,
    initials: 'FG'
  },
  {
    quote:
      'The course gave me a better understanding of how businesses use paid search to generate leads. I especially found keyword research and campaign optimization useful.',
    name: 'Career starter',
    course: 'Google Ads',
    detail: 'techcadd student',
    rating: 5,
    initials: 'CS'
  },
  {
    quote:
      'Before joining the course, Google Ads looked complicated to me. The step-by-step training helped me understand the different campaign concepts and important performance metrics.',
    name: 'Ludhiana learner',
    course: 'Google Ads',
    detail: 'techcadd student, Ludhiana',
    rating: 5,
    initials: 'LL'
  },
  {
    quote:
      'I wanted to add PPC skills to my digital marketing knowledge. The Google Ads training helped me understand advertising from a performance perspective and gave me a clearer career direction.',
    name: 'Chandigarh region learner',
    course: 'Google Ads',
    detail: 'techcadd student, Chandigarh region',
    rating: 5,
    initials: 'CR'
  },
  {
    quote:
      'The focus on practical campaign concepts was helpful for someone preparing for a digital marketing job. I now have a better understanding of CTR, CPC, conversions and campaign performance.',
    name: 'Job seeker',
    course: 'Google Ads',
    detail: 'techcadd student',
    rating: 5,
    initials: 'JS'
  },
  {
    quote:
      'Learning Google Ads has helped me understand another important area of digital marketing. The sections on keywords, ad copy and campaign optimization were particularly useful.',
    name: 'Freelancer',
    course: 'Google Ads',
    detail: 'techcadd student',
    rating: 5,
    initials: 'FR'
  },
  {
    quote:
      'I joined to understand paid advertising for business promotion. The training helped me learn how advertising budgets, targeting and campaign results are connected.',
    name: 'Business learner',
    course: 'Google Ads',
    detail: 'techcadd student',
    rating: 5,
    initials: 'BL'
  },
  {
    quote:
      'The course provided a useful introduction to PPC and Google Ads. I liked learning how campaign data can be used to identify what is working and what needs improvement.',
    name: 'Digital marketing learner',
    course: 'Google Ads',
    detail: 'techcadd student',
    rating: 5,
    initials: 'DM'
  },
  {
    quote:
      'I was searching for Google Ads training in Ludhiana that focused on career-oriented skills. The course helped me understand the fundamentals of paid advertising and gave me a foundation to continue learning.',
    name: 'Career-focused learner',
    course: 'Google Ads',
    detail: 'techcadd student',
    rating: 5,
    initials: 'CF'
  }
]

/* ------------------------------------------------------------------
   The page's own questions. The seed sets `ownFaqs`, so these replace
   the standard seven the factory writes rather than sitting on top of
   them — several ask the same things.
------------------------------------------------------------------ */
export const GOOGLE_ADS_FAQS = [
  {
    q: 'What is a Google Ads course?',
    a: 'A Google Ads course teaches students how to plan, create, manage, track, and optimize paid advertising campaigns on Google. It generally covers keywords, Search Ads, bidding, ad copy, conversion tracking, remarketing, campaign analysis, and optimization.'
  },
  {
    q: 'Who can join a Google Ads course in Ludhiana?',
    a: 'Students, 12th-pass learners, graduates, freshers, job seekers, freelancers, entrepreneurs, and digital marketing professionals can learn Google Ads. Basic computer knowledge and an interest in online advertising are generally sufficient to get started.'
  },
  {
    q: 'Is Google Ads difficult to learn for beginners?',
    a: 'Google Ads can be learned by beginners when the concepts are taught progressively. Students can start with PPC fundamentals and keywords before moving into campaign creation, bidding, conversion tracking, and optimization.'
  },
  {
    q: 'What will I learn in a Google Ads course?',
    a: 'A typical course covers keyword research, Search Ads, ad copywriting, campaign structure, bidding strategies, budget management, negative keywords, conversion tracking, remarketing, performance analysis, and campaign optimization.'
  },
  {
    q: 'Is Google Ads useful for a digital marketing career?',
    a: 'Yes. Google Ads is an important performance marketing skill. Knowledge of paid advertising can support career paths such as PPC Executive, Google Ads Executive, Performance Marketing Executive, Paid Media Executive, and Digital Marketing Executive.'
  },
  {
    q: 'Can I learn Google Ads after 12th?',
    a: 'Yes. Students who have completed 12th can learn Google Ads as a career-oriented digital marketing skill. Having basic computer knowledge and an interest in online marketing can provide a suitable starting point.'
  },
  {
    q: 'Is Google Ads useful for freelancing?',
    a: 'Yes. Freelancers can add PPC and Google Ads management to their digital marketing services. However, building practical experience and understanding campaign performance is important before independently managing client advertising budgets.'
  },
  {
    q: 'What tools are used in Google Ads training?',
    a: 'Training may include tools such as **Google Ads**, **Google Keyword Planner**, **Google Analytics**, **Google Tag Manager**, Google Search Console, Looker Studio, and spreadsheet-based reporting tools, depending on the course curriculum.'
  },
  {
    q: 'Can Google Ads help me get a job in Ludhiana?',
    a: 'Google Ads can be a useful skill for candidates targeting digital marketing and PPC-related roles in Ludhiana. Job opportunities depend on factors such as practical ability, communication skills, experience, portfolio quality, and the requirements of individual employers.'
  },
  {
    q: 'Do I need coding knowledge to learn Google Ads?',
    a: 'No. Basic Google Ads campaign management does not require programming knowledge. However, understanding websites, landing pages, analytics, tracking, and basic technical concepts can be helpful as you progress.'
  },
  {
    q: 'What is the difference between Google Ads and SEO?',
    a: 'Google Ads is primarily a paid advertising channel, where businesses pay to show advertisements according to campaign settings. **SEO** focuses on improving a website’s organic visibility in search results. Both can be valuable components of a broader digital marketing strategy.'
  },
  {
    q: 'Where can I learn Google Ads in Ludhiana?',
    a: 'Students looking for **Google Ads training in Ludhiana** can evaluate institutes based on curriculum, practical training, trainer experience, projects, learning support, course duration, and career guidance. techcadd offers a career-focused learning option for students interested in Google Ads and digital marketing.'
  }
]

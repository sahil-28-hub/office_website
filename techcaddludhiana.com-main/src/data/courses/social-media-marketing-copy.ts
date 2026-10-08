/* ==================================================================
   Long-form copy for the Social Media Marketing course page.

   Split out of marketing.js for the same reason the digital marketing
   copy is — that file seeds six courses, and this is one course's
   editorial content. Keeping it here leaves marketing.js scannable as
   what it is: a list of course definitions.

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

export const SMM_OVERVIEW = {
  title: 'The social media marketing course in Ludhiana built around practical work',
  lead: 'Social media marketing has become an essential skill for businesses, brands, creators, and professionals looking to build visibility and generate customers online. techcadd’s **Social Media Marketing Course in Ludhiana** is designed for students, graduates, job seekers, freelancers, and aspiring digital marketers who want practical knowledge of modern social media marketing.',
  body: [
    'The course focuses on understanding social media strategy, content planning, audience targeting, organic growth, paid advertising, campaign optimization, and performance measurement. Learners can develop skills relevant to platforms such as Facebook, Instagram, LinkedIn, YouTube, and other major social channels. Practical learning is particularly valuable because current digital marketing programs in Ludhiana increasingly emphasize social media, paid ads, content creation, analytics, and hands-on campaign work.',
    'For students searching for **social media marketing course Ludhiana**, **SMM training in Ludhiana**, or **social media marketing classes in Ludhiana**, techcadd provides a career-focused learning path that can help build skills for roles such as Social Media Executive, Social Media Manager, Content Marketing Executive, and Digital Marketing Executive.'
  ]
}

/* ---------------------------------------------------------------- */

/* Who can do this course.

   Fills the standard "who can join" block rather than sitting as a
   narrative section, replacing the six generic groups the factory
   writes for every other course. See joiners() in shared.js. */
export const SMM_JOINERS = {
  eyebrow: 'Eligibility',
  title: 'Who can do a social media marketing course in Ludhiana',
  lead: 'A **Social Media Marketing Course in Ludhiana** is suitable for anyone who wants to develop practical digital skills and build a career around social platforms, content, online advertising, and brand growth. You do not need to be an expert in marketing or have advanced technical knowledge to begin — beginner-level SMM programs generally accept learners without prior social media marketing experience.',
  groups: [
    {
      icon: 'curriculum',
      title: 'Students After 12th',
      text: 'Students who have completed Class 12 can consider social media marketing training as a practical skill alongside their graduation or other studies. If you enjoy Instagram, Facebook, YouTube, content creation, photography, video, writing, or understanding online trends, SMM can provide a structured way to turn that interest into a professional skill. You learn how businesses use social media to attract audiences, generate leads, build communities, promote products, and communicate with customers.',
      tag: 'No background needed'
    },
    {
      icon: 'career',
      title: 'College Students and Graduates',
      text: 'BBA, B.Com, BCA, BA, BJMC, MBA, and other graduates can add social media marketing skills to their existing academic qualifications. Marketing knowledge combined with practical social media skills can make a candidate more relevant for entry-level digital marketing positions. Students can learn content planning, social media strategy, platform-specific marketing, paid advertising, analytics, and campaign management.',
      tag: 'Any stream'
    },
    {
      icon: 'spark',
      title: 'Job Seekers',
      text: 'If you are looking for your first job or want to move into digital marketing, **SMM training in Ludhiana** can help you develop a focused skill set. Instead of learning social media only as a personal activity, you learn how to approach it from a business perspective — content calendars, captions, target audiences, campaign planning, engagement monitoring and performance data. These abilities support applications for roles such as Social Media Executive, Social Media Coordinator, Content Executive and Junior Social Media Manager.',
      tag: 'Start from zero'
    },
    {
      icon: 'stack',
      title: 'Working Professionals',
      text: 'Professionals from sales, marketing, customer service, public relations, communications, or business development can also benefit from SMM training. Social platforms increasingly form part of broader marketing strategies, so understanding social media can complement existing professional skills. For working learners, flexible or online options may make it easier to study alongside a job.',
      tag: 'Flexible batches'
    },
    {
      icon: 'code',
      title: 'Freelancers and Aspiring Freelancers',
      text: 'Social media marketing can also be useful for people who want to explore freelancing. A freelancer may eventually provide services such as social media management, content planning, Instagram marketing, Meta advertising, page management, or campaign reporting to businesses. Learning through practical assignments and real-world campaign examples can help learners understand what clients expect rather than relying only on theoretical knowledge.',
      tag: 'Turn it into income'
    },
    {
      icon: 'chart',
      title: 'Small Business Owners and Entrepreneurs',
      text: 'Business owners can learn SMM to understand how their own brand can use social platforms more effectively. Whether the business operates in retail, education, fashion, food, real estate, healthcare, manufacturing, or local services, social media can be used for awareness, customer engagement, enquiries, and promotions. For Ludhiana entrepreneurs, learning locally also helps them understand the difference between creating content for personal use and content designed around a specific customer segment.',
      tag: 'Run it in-house'
    },
    {
      icon: 'star',
      title: 'Creators and Content Enthusiasts',
      text: 'If you already enjoy creating Reels, posts, short videos, graphics, or YouTube content, an SMM course can help you understand the marketing side of content creation. You can learn why certain content formats work, how audiences behave, how campaigns are measured, and how paid promotion differs from organic reach.',
      tag: 'The marketing side'
    },
    {
      icon: 'support',
      title: 'Anyone Interested in a Digital Career',
      text: 'You do not need to come from a purely technical background to learn social media marketing. SMM combines creativity, communication, marketing, research, analytics, and basic technology, which makes it approachable for learners from different educational backgrounds.',
      tag: 'Non-technical welcome'
    }
  ],
  note: 'For students searching for **social media marketing classes in Ludhiana**, the most important consideration is not simply eligibility. Look for a course that combines structured learning with practical assignments, current platform knowledge, campaign exercises, analytics, and career guidance.'
}

/* ---------------------------------------------------------------- */

const CURRICULUM = {
  id: 'smm-curriculum',
  slot: 'syllabus',
  tone: 'paper',
  eyebrow: 'What you learn',
  title: 'What you’ll learn and the tools covered',
  lead: 'A professional **Social Media Marketing Course in Ludhiana** should help students understand both the creative and the analytical sides of social media. At techcadd, learners build practical knowledge of how brands use social platforms to attract audiences, create meaningful content, generate leads, promote products and measure marketing performance.',
  items: [
    {
      title: 'Social Media Marketing Fundamentals',
      text: 'Students begin by understanding the fundamentals of social media marketing, including social media strategy, customer personas, audience research, marketing objectives, content pillars, brand positioning and platform selection. You learn how to connect social media activity with wider business goals rather than simply posting content.'
    },
    {
      title: 'Facebook and Instagram Marketing',
      text: 'Facebook and Instagram remain important channels for businesses across industries. Students learn how to plan content, optimise business profiles, create engaging posts and understand different content formats. The course also introduces learners to Meta Business Suite and the fundamentals of Meta advertising, including campaign objectives, audiences, budgets, placements, creatives and performance metrics.'
    },
    {
      title: 'Instagram Reels and Content Strategy',
      text: 'Short-form video has become an important part of social media communication. Students learn how to develop Reel ideas, content hooks, captions, hashtags and content calendars while maintaining brand consistency. The focus is not simply on creating attractive content but on understanding why a particular piece of content is created, which audience it targets and what action it is intended to encourage.'
    },
    {
      title: 'LinkedIn Marketing',
      text: '**LinkedIn** is particularly useful for professional branding, B2B marketing, recruitment and personal branding. Learners understand LinkedIn content strategy, company pages, professional communication, audience targeting and engagement. This is valuable for students who want to develop personal branding or eventually work with businesses that use LinkedIn for marketing and lead generation.'
    },
    {
      title: 'YouTube Marketing',
      text: 'Students explore the basics of **YouTube** marketing, including channel optimisation, video content planning, titles, descriptions, thumbnails, audience engagement and YouTube analytics. Understanding video marketing expands a learner’s skill set beyond traditional image-based social media content.'
    },
    {
      title: 'Content Planning and Social Media Calendars',
      text: 'Professional marketers need consistency. Students learn how to develop monthly and weekly content calendars based on campaigns, audience interests, festivals, promotions and business objectives. They also learn to organise content categories such as educational, promotional, entertaining, informational and engagement-focused posts.'
    },
    {
      title: 'Social Media Advertising',
      text: 'Paid advertising is an important component of modern social media marketing. Learners understand the fundamentals of creating and managing paid campaigns, audience segmentation, ad creatives, budgets, campaign objectives and performance tracking. The objective is to understand how paid campaigns complement organic content and help businesses reach specific audiences.'
    },
    {
      title: 'Analytics and Performance Measurement',
      text: 'Students also learn why analytics matters. Important metrics include reach, impressions, engagement, clicks, leads, conversions, follower growth and advertising performance. Tools such as **Meta Ads Manager**, Meta Business Suite, **Google Analytics** and platform-specific analytics dashboards help marketers evaluate campaigns and identify areas for improvement.'
    },
    {
      title: 'Canva and Creative Content',
      text: 'Visual communication is an essential social media skill. Learners use **Canva** to understand the basics of creating social media graphics, promotional posts, stories, presentations and other marketing creatives. The emphasis is on creating content that communicates a clear message while maintaining visual consistency with a brand.'
    },
    {
      title: 'AI-Assisted Social Media Marketing',
      text: 'Modern marketers can also use AI-assisted tools to support brainstorming, content ideation, research, caption development, content calendars and workflow efficiency. Students learn how to use AI responsibly as a productivity aid while maintaining human creativity, originality, accuracy and brand voice.'
    },
    {
      title: 'Hashtag, Keyword and Audience Research',
      text: 'Effective social media content starts with understanding the audience. Students learn basic keyword and hashtag research, competitor analysis, audience interests and search behaviour. These skills help them create content that is more relevant to the people a business wants to reach.'
    },
    {
      title: 'Practical Projects and Campaign Exercises',
      text: 'The most valuable part of an **SMM course in Ludhiana** is practical application. Students work on social media strategies, content calendars, creative concepts, campaign plans, advertisements, analytics reports and optimisation exercises.'
    }
  ],
  tools: {
    label: 'Tools you’ll work with',
    items: [
      'Meta Business Suite',
      'Meta Ads Manager',
      'Instagram',
      'Facebook',
      'LinkedIn',
      'YouTube Studio',
      'Canva',
      'Google Analytics',
      'Google Trends',
      'AI marketing tools'
    ]
  },
  close: 'By combining strategy, content creation, paid advertising, analytics and practical projects, learners develop a stronger foundation for roles such as Social Media Executive, Social Media Marketing Executive, Content Executive and Digital Marketing Executive.'
}

/* ---------------------------------------------------------------- */

const WHY_THIS_PROGRAMME = {
  id: 'smm-why-programme',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Why this programme',
  title: 'Why this program',
  lead: 'Choosing a **Social Media Marketing Course in Ludhiana** can be a practical step for students and aspiring digital marketers who want to develop skills that businesses increasingly use to connect with customers online. Social media is no longer limited to posting photos or creating occasional updates — professional social media marketing involves strategy, audience research, content planning, advertising, analytics, brand communication, and continuous optimization.',
  items: [
    {
      title: 'Build a Career-Ready Skill Set',
      text: 'A structured SMM program helps learners move beyond basic social media usage and understand how professional marketing works. Instead of simply learning how to create a post, students learn how to decide what to post, who to target, which platform to use, how to promote the content, and how to measure its performance. This practical approach is useful for students looking for entry-level opportunities in digital marketing.'
    },
    {
      title: 'Learn Skills Relevant to Multiple Platforms',
      text: 'Different social platforms require different content and marketing approaches. Instagram may require a strong focus on visual content and Reels, while LinkedIn generally requires a more professional communication style. YouTube focuses heavily on video content, discoverability, audience retention, and channel development. A good social media marketing training program should help learners understand platform-specific strategies rather than treating every social network in exactly the same way.'
    },
    {
      title: 'Gain Practical Marketing Experience',
      text: 'One of the strongest reasons to choose a dedicated SMM program is the opportunity to practise what you learn. Social media marketing is a skill-oriented field, so theoretical knowledge alone may not be enough. Practical assignments allow learners to work on content ideas, social media calendars, campaign concepts, ad creatives, audience profiles, reporting dashboards, and marketing strategies — helping students develop a portfolio that demonstrates their abilities to employers or freelance clients.'
    },
    {
      title: 'Understand Paid Social Advertising',
      text: 'Organic social media is only one part of modern social marketing. Businesses may also use paid campaigns to reach specific audiences, generate enquiries, promote products, drive website traffic, or increase conversions. Learning the fundamentals of paid social advertising gives students a broader understanding of digital marketing — campaign objectives, audiences, budgets, creatives, placements, clicks, impressions, conversions, and return on advertising spend.'
    },
    {
      title: 'Develop Analytical Thinking',
      text: 'Successful social media marketing is not based entirely on creativity. Marketers also need to understand data. A structured course introduces learners to metrics such as reach, impressions, engagement, clicks, follower growth, leads, conversions, and campaign performance. By analysing these metrics, students learn to identify what is working and what needs improvement.'
    },
    {
      title: 'Explore Freelancing Opportunities',
      text: 'Another reason students choose **social media marketing classes in Ludhiana** is the possibility of developing freelance skills. Local businesses, startups, creators, and online brands may require support with content planning, social media management, advertising, and reporting. Training helps aspiring freelancers understand how to structure services, communicate requirements, prepare content calendars, report campaign results, and work according to client objectives. Freelancing success still depends on skill, portfolio quality, communication, consistency, and the ability to acquire and retain clients.'
    },
    {
      title: 'Learn in a Career-Focused Environment',
      text: 'For students in Ludhiana, learning locally provides the convenience of attending training at a nearby centre while developing skills relevant to the digital employment market. Learners can also interact with instructors and other students, discuss practical assignments, and receive feedback during their learning journey.'
    },
    {
      title: 'Prepare for the Digital Marketing Industry',
      text: 'Social media marketing can also serve as an entry point into the wider digital marketing ecosystem. Once students understand social platforms, they can explore related areas such as content marketing, SEO, paid advertising, email marketing, influencer marketing, analytics, and conversion optimization. That makes an SMM program useful not only for a future social media specialist but also for learners who eventually want to become broader digital marketing professionals.'
    }
  ],
  close: 'For students, graduates, and job seekers in Ludhiana, the right program should provide practical knowledge, platform understanding, analytical skills, project experience, and a clear view of how social media contributes to business growth.'
}

/* ---------------------------------------------------------------- */

const WHY_TECHCADD = {
  id: 'smm-why-techcadd',
  slot: 'careers',
  tone: 'paper',
  eyebrow: 'Why techcadd',
  title: 'Why choose techcadd',
  lead: 'Choosing the right institute is an important decision when starting a career in social media marketing. With many options available for **social media marketing courses in Ludhiana**, students should look beyond advertisements and compare practical training, curriculum, trainer guidance, projects, tools, and career support.',
  items: [
    {
      title: 'Practical, Student-Focused Learning',
      text: 'Social media marketing is a practical skill. Students need more than definitions and theoretical concepts to understand how professional social media campaigns work. techcadd focuses on helping learners understand the complete process — from developing a social media strategy and identifying a target audience to creating content, running campaigns, monitoring results, and improving performance. Students gradually understand how social media is used by businesses for brand awareness, audience engagement, lead generation, customer communication, and sales.'
    },
    {
      title: 'Learn Multiple Social Media Platforms',
      text: 'A professional social media marketer needs to understand that every platform has its own audience, content formats, and marketing opportunities. techcadd’s learning approach helps students explore major platforms and understand how businesses can use them strategically — Facebook, Instagram, LinkedIn and YouTube marketing, content strategy, organic growth, paid social advertising, audience targeting, campaign planning, analytics and performance reporting. This broader exposure helps learners identify the areas of social media marketing that match their interests and career goals.'
    },
    {
      title: 'Career-Oriented Skill Development',
      text: 'For students and job seekers, the ultimate objective of training is often to become professionally ready. techcadd helps learners understand how a social media professional approaches real marketing requirements. Instead of looking at social media only from a user’s perspective, students learn to think like marketers — considering business objectives, customer personas, content goals, campaign performance, and measurable outcomes.'
    },
    {
      title: 'Suitable for Beginners',
      text: 'You do not have to be an experienced marketer to start learning social media marketing. The field combines communication, creativity, marketing knowledge, research, analytics, and technology, making it accessible to learners from different academic backgrounds. For beginners searching for **social media marketing classes in Ludhiana**, a structured learning environment makes it easier to move from basic platform knowledge to professional marketing concepts.'
    },
    {
      title: 'Focus on Current Digital Marketing Practices',
      text: 'Social media platforms and their marketing features change regularly. Algorithms, advertising formats, content trends, audience behaviour, and measurement methods continue to evolve, which means students need adaptable marketing thinking rather than a fixed set of outdated techniques. techcadd aims to help learners understand fundamental principles while becoming familiar with contemporary social media marketing practices.'
    },
    {
      title: 'Build Confidence Through Projects',
      text: 'Practical projects play an important role in developing marketing confidence. By working on social media planning, content ideas, campaign concepts, audience research, and performance analysis, students begin building evidence of what they know. A project-based approach also helps learners understand the complete workflow followed by a social media marketer — valuable when preparing for interviews, internships, entry-level positions, or freelance opportunities.'
    },
    {
      title: 'Learn With a Career in Mind',
      text: 'techcadd’s focus is not simply on teaching students how to use social media. The broader objective is to help learners understand how social media becomes a professional marketing channel. For anyone comparing a **social media marketing course in Ludhiana**, factors such as practical exposure, platform knowledge, projects, analytics, trainer guidance, and career relevance should be considered carefully.'
    }
  ],
  close: 'techcadd’s program is designed around practical, career-focused social media marketing learning, so students develop knowledge of social media strategy, content planning, platform marketing, paid advertising, analytics and related digital marketing skills.'
}

/* ---------------------------------------------------------------- */

/* The details a prospective student checks before enquiring. Sits last
   at the `careers` slot, immediately above the enquiry form, so the
   facts and the form that asks about them are together. */
const COURSE_DETAILS = {
  id: 'smm-course-details',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Course details',
  title: 'The programme at a glance',
  lead: 'Turn your interest in Instagram, Facebook, content creation and digital marketing into a structured, career-focused skill set. Whether you are a 12th-pass student, graduate, job seeker, working professional, freelancer or aspiring entrepreneur, you can enquire about the programme and understand whether it matches your career goals.',
  items: [
    { title: 'Course name', text: 'Social Media Marketing Course.' },
    { title: 'Institute', text: 'techcadd.' },
    { title: 'Location', text: 'Ludhiana, Punjab, India.' },
    { title: 'Centre', text: 'techcadd Ludhiana centre.' },
    {
      title: 'Duration',
      text: 'Around 2–3 months. Confirm the current duration and batch schedule with techcadd.'
    },
    {
      title: 'Mode',
      text: 'Classroom and online options. Confirm the formats currently running with techcadd.'
    },
    {
      title: 'Suitable for',
      text: 'Students, graduates, job seekers, working professionals, freelancers and entrepreneurs.'
    }
  ]
}

export const SMM_NARRATIVE = [
  CURRICULUM,
  WHY_THIS_PROGRAMME,
  WHY_TECHCADD,
  COURSE_DETAILS
]

/* ------------------------------------------------------------------
   What students say.

   Replaces the four generic quotes the factory writes from the course
   subject. Single given names, so the avatar carries one initial
   rather than an invented surname — see testimonials() in shared.js
   for the shape.
------------------------------------------------------------------ */
export const SMM_TESTIMONIALS = [
  {
    quote:
      'I joined the Social Media Marketing Course because I wanted to move into digital marketing after graduation. The practical approach helped me understand content planning, Instagram marketing and social media campaigns much better.',
    name: 'Aman',
    course: 'Social Media Marketing',
    detail: 'Ludhiana',
    rating: 5,
    initials: 'A'
  },
  {
    quote:
      'I was using Instagram personally but didn’t know how professional marketing worked. The course helped me understand content calendars, audience targeting and campaign performance. The learning experience was easy to follow as a beginner.',
    name: 'Simran',
    course: 'Social Media Marketing',
    detail: 'Ludhiana',
    rating: 5,
    initials: 'S'
  },
  {
    quote:
      'I wanted to add a digital skill to my existing qualification. The social media modules were useful, especially the practical work around content strategy and paid advertising. It gave me a better understanding of what a social media executive actually does.',
    name: 'Harpreet',
    course: 'Social Media Marketing',
    detail: 'Chandigarh',
    rating: 5,
    initials: 'H'
  },
  {
    quote:
      'The best part for me was learning how to plan content instead of randomly posting on social media. I learned about Instagram, Facebook, Canva and analytics and now feel more confident discussing social media marketing.',
    name: 'Neha',
    course: 'Social Media Marketing',
    detail: 'Ludhiana',
    rating: 5,
    initials: 'N'
  },
  {
    quote:
      'I was looking for an SMM course in Ludhiana that focused on practical learning. The projects and campaign exercises helped me connect the concepts with real business requirements.',
    name: 'Gagandeep',
    course: 'Social Media Marketing',
    detail: 'Ludhiana',
    rating: 5,
    initials: 'G'
  },
  {
    quote:
      'I came from a non-technical background and initially thought digital marketing would be difficult. The concepts were explained step by step, and the social media section was particularly interesting because I could immediately understand its practical use.',
    name: 'Riya',
    course: 'Social Media Marketing',
    detail: 'Chandigarh region',
    rating: 5,
    initials: 'R'
  },
  {
    quote:
      'I wanted to explore freelancing and chose social media marketing as a starting point. Learning about content calendars, client requirements, social media strategy and reporting helped me understand the skills I need to develop further.',
    name: 'Manpreet',
    course: 'Social Media Marketing',
    detail: 'Ludhiana',
    rating: 5,
    initials: 'M'
  },
  {
    quote:
      'The course gave me a broader understanding of how businesses use social media for branding and leads. I especially liked learning about Meta advertising and performance metrics because these were completely new to me.',
    name: 'Karan',
    course: 'Social Media Marketing',
    detail: 'Ludhiana',
    rating: 5,
    initials: 'K'
  },
  {
    quote:
      'I joined to improve my digital marketing knowledge along with my studies. The social media marketing lessons were practical and beginner-friendly. I particularly enjoyed working on content ideas and campaign planning.',
    name: 'Jasleen',
    course: 'Social Media Marketing',
    detail: 'Chandigarh',
    rating: 5,
    initials: 'J'
  },
  {
    quote:
      'I was searching for social media marketing classes in Ludhiana because I wanted a career-oriented skill. The course helped me understand the difference between normal social media use and professional social media marketing.',
    name: 'Rohit',
    course: 'Social Media Marketing',
    detail: 'Ludhiana',
    rating: 5,
    initials: 'R'
  }
]

/* ------------------------------------------------------------------
   The page's own questions. The seed sets `ownFaqs`, so these replace
   the standard seven the factory writes rather than sitting on top of
   them — several ask the same things.
------------------------------------------------------------------ */
export const SMM_FAQS = [
  {
    q: 'What is a Social Media Marketing Course in Ludhiana?',
    a: 'A **Social Media Marketing Course in Ludhiana** teaches students how to use social media platforms for professional marketing. It can cover content strategy, Facebook and Instagram marketing, LinkedIn, YouTube, paid advertising, audience targeting, analytics, campaign planning and social media management.'
  },
  {
    q: 'Who can join the Social Media Marketing Course?',
    a: 'Students who have completed 12th, college students, graduates, job seekers, working professionals, freelancers, entrepreneurs and beginners can learn social media marketing. Prior professional marketing experience is generally not required for a beginner-level course.'
  },
  {
    q: 'Is social media marketing suitable for beginners?',
    a: 'Yes. Social media marketing can be learned by beginners because it combines practical skills such as content planning, communication, creativity, audience research and analytics. A structured course helps learners progress from basic concepts to professional marketing practices.'
  },
  {
    q: 'What will I learn in an SMM course in Ludhiana?',
    a: 'Students learn social media strategy, content creation, content calendars, Facebook marketing, Instagram marketing, LinkedIn marketing, YouTube marketing, paid social advertising, audience targeting, analytics, campaign optimisation and reporting.'
  },
  {
    q: 'Which social media platforms are covered?',
    a: 'Depending on the course curriculum, students may learn platforms such as **Facebook**, **Instagram**, **LinkedIn** and **YouTube**. They may also learn supporting tools for content creation, advertising, analytics and social media management.'
  },
  {
    q: 'Will I learn Meta Ads?',
    a: 'A comprehensive social media marketing programme introduces students to **Meta advertising** concepts, including campaign objectives, audiences, ad creatives, budgets, placements, performance metrics and optimisation.'
  },
  {
    q: 'Does the course include practical training?',
    a: 'Practical learning is important for social media marketing. Students work on activities such as content calendars, social media strategies, campaign planning, creative concepts, audience research and performance analysis to understand how marketing works in practical situations.'
  },
  {
    q: 'Can I learn social media marketing after 12th?',
    a: 'Yes. Students who have completed 12th can explore social media marketing as an additional career-oriented skill. It can be learned alongside graduation or used as a foundation for exploring broader digital marketing careers.'
  },
  {
    q: 'Can graduates join social media marketing training?',
    a: 'Yes. Graduates from different academic backgrounds can learn SMM. Adding digital marketing skills to an existing qualification can help candidates explore opportunities in social media, content marketing and broader digital marketing roles.'
  },
  {
    q: 'What career opportunities are available after learning social media marketing?',
    a: 'Depending on skills, experience and employer requirements, learners can explore roles such as Social Media Executive, Social Media Marketing Executive, Content Executive, Social Media Coordinator and Digital Marketing Executive. Freelancing and entrepreneurship can also be explored with appropriate skills and experience.'
  },
  {
    q: 'Can I become a freelancer after an SMM course?',
    a: 'An SMM course can provide foundational skills for freelancing, but completing a course does not guarantee freelance income. Freelancers also need practical experience, a portfolio, communication skills, client acquisition abilities and the capacity to deliver measurable marketing work.'
  },
  {
    q: 'Which tools can I learn during social media marketing training?',
    a: 'Depending on the curriculum, learners may work with tools such as **Meta Business Suite**, **Meta Ads Manager**, **Canva**, **Google Analytics**, YouTube Studio, Google Trends and platform-specific analytics dashboards.'
  },
  {
    q: 'Is social media marketing a technical course?',
    a: 'No. Social media marketing does not require advanced programming knowledge. It combines marketing strategy, communication, creativity, content, audience research, advertising and analytics. Basic computer and internet skills are helpful for beginners.'
  },
  {
    q: 'How do I choose the best social media marketing course in Ludhiana?',
    a: 'Compare the curriculum, practical assignments, platforms covered, advertising modules, analytics training, trainer experience, projects, learning mode, course duration and career support. Avoid choosing an institute solely on the basis of promotional claims or a low course fee.'
  },
  {
    q: 'Why choose techcadd for social media marketing training in Ludhiana?',
    a: 'techcadd’s programme is designed around practical, career-focused social media marketing learning. Students develop knowledge of social media strategy, content planning, platform marketing, paid advertising, analytics and related digital marketing skills.'
  },
  {
    q: 'Is a certificate provided after completing the course?',
    a: 'Certificate availability and eligibility depend on the specific techcadd programme and its current terms. Confirm the current certification details with the techcadd centre before enrolment.'
  },
  {
    q: 'Can working professionals learn social media marketing?',
    a: 'Yes. Working professionals can learn SMM to add digital marketing skills to their existing careers or explore a transition into marketing. The appropriate learning mode and schedule should be selected according to individual availability.'
  },
  {
    q: 'What should I know before joining social media marketing classes in Ludhiana?',
    a: 'You do not generally need advanced technical knowledge. Basic computer skills, communication ability, willingness to practise and an interest in digital platforms provide a good starting point.'
  }
]

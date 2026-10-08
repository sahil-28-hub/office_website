/* Digital marketing track. See ./shared.js for the factory. */

/* Five of the six courses here carry long-form editorial copy the
   sixth does not. Each lives in its own file because any one of them
   is longer than all six seeds together — see
   ./digital-marketing-copy.js, ./social-media-marketing-copy.js,
   ./google-ads-copy.js, ./wordpress-copy.js and ./shopify-copy.js */
import {
  DIGITAL_MARKETING_OVERVIEW,
  DIGITAL_MARKETING_JOINERS,
  DIGITAL_MARKETING_NARRATIVE,
  DIGITAL_MARKETING_TESTIMONIALS,
  DIGITAL_MARKETING_FAQS
} from './digital-marketing-copy'

import {
  SMM_OVERVIEW,
  SMM_JOINERS,
  SMM_NARRATIVE,
  SMM_TESTIMONIALS,
  SMM_FAQS
} from './social-media-marketing-copy'

import {
  GOOGLE_ADS_OVERVIEW,
  GOOGLE_ADS_JOINERS,
  GOOGLE_ADS_NARRATIVE,
  GOOGLE_ADS_TESTIMONIALS,
  GOOGLE_ADS_FAQS
} from './google-ads-copy'

import {
  WORDPRESS_OVERVIEW,
  WORDPRESS_JOINERS,
  WORDPRESS_NARRATIVE,
  WORDPRESS_TESTIMONIALS,
  WORDPRESS_FAQS
} from './wordpress-copy'

import {
  SHOPIFY_OVERVIEW,
  SHOPIFY_JOINERS,
  SHOPIFY_NARRATIVE,
  SHOPIFY_TESTIMONIALS,
  SHOPIFY_FAQS
} from './shopify-copy'

export const MARKETING = [
  {
    slug: 'digital-marketing',
    name: 'Digital Marketing Course',
    short: 'Digital Marketing',
    subject: 'digital marketing',
    category: 'Digital Marketing',
    eyebrow: 'Every channel, measured',
    /* The page copy and its FAQ both state 3 to 6 months depending on
       batch type, and this field feeds the hero, the course index and
       the enquiry metadata — so it has to agree with them. */
    duration: '3–6 months',
    /* the one course with its own hero artwork rather than the pixel
       field every other page draws — see CourseHeroArt */
    heroArt: '/digital_marketing_course.png',
    heroArtSize: [1224, 1285],
    heroArtAlt:
      'A megaphone bursting out of a laptop of campaign dashboards, ringed by the social platforms a campaign runs on and the target, growth curve and spend split it is judged by',
    /* The page's <h1>, and the one this course is written to rank on —
       so it names the subject and the city rather than the outcome
       alone. The second line is the one that carries the gradient, so
       "Ludhiana" lands in the accent. Both lines are kept short: the
       copy column is under 600px and the type clamps to 4.35rem, so a
       line much past 22 characters wraps. */
    headline: ['Digital marketing.', 'Job-ready in Ludhiana.'],
    sub: 'SEO, paid ads, social, email, content and analytics — taught on live budgets and real accounts, with attribution that stands up to a finance question.',
    projectCount: 'Six shipped',
    highlights: [
      'Live ad accounts with a real budget',
      'Certifications from Google and Meta included',
      'Every campaign ends in a measured report'
    ],
    code: {
      lang: 'txt',
      file: 'funnel.md',
      lines: [
        'Awareness  → SEO + organic social',
        'Interest   → content + email capture',
        'Decision   → retargeting + landing page',
        'Action     → offer + checkout',
        'Retention  → lifecycle email + community'
      ],
      command: 'Review campaign',
      output: 'ROAS 4.2× · CPL ₹48'
    },
    badges: ['SEO', 'Google Ads', 'Meta', 'GA4'],
    modules: [
      {
        title: 'Marketing Foundations & Strategy',
        tag: 'Weeks 1–3',
        description: 'Audience, positioning and funnel thinking — the part that decides whether any channel works.',
        skills: ['Audience research', 'Buyer personas', 'Funnel design', 'Positioning', 'Competitor analysis', 'Budget planning'],
        tech: ['Google Trends', 'SEMrush', 'Canva'],
        outcome: 'A complete marketing strategy document for a real business.'
      },
      {
        title: 'Website, SEO & Content',
        tag: 'Weeks 4–9',
        description: 'Being found without paying for every click — technical SEO, content and authority.',
        skills: ['Keyword research', 'On-page SEO', 'Technical SEO', 'Content planning', 'Link building', 'Local SEO'],
        tech: ['WordPress', 'Search Console', 'Ahrefs', 'Screaming Frog'],
        outcome: 'A live site ranking for real keywords, with a documented before-and-after.'
      },
      {
        title: 'Paid Advertising',
        tag: 'Weeks 10–14',
        description: 'Search, social and shopping campaigns run on live budgets with real consequences.',
        skills: ['Google Search & Display', 'Meta Ads Manager', 'Audience targeting', 'Creative testing', 'Bidding strategies', 'Conversion tracking'],
        tech: ['Google Ads', 'Meta Ads', 'Google Tag Manager'],
        outcome: 'A live campaign optimised over four weeks with cost-per-lead brought down.'
      },
      {
        title: 'Social, Email & Automation',
        tag: 'Weeks 15–19',
        description: 'Owned channels — the ones that keep working after the ad budget stops.',
        skills: ['Content calendars', 'Community management', 'Influencer basics', 'Email sequences', 'Segmentation', 'Marketing automation'],
        tech: ['Meta Business Suite', 'Mailchimp', 'HubSpot', 'Buffer'],
        outcome: 'A running email automation and a month of scheduled, on-brand social content.'
      },
      {
        title: 'Analytics, CRO & Reporting',
        tag: 'Weeks 20–24',
        description: 'Measuring honestly, improving conversion and reporting in language a client understands.',
        skills: ['GA4 configuration', 'UTM discipline', 'Attribution models', 'A/B testing', 'Landing page CRO', 'Client reporting'],
        tech: ['GA4', 'Looker Studio', 'Hotjar', 'Google Optimize'],
        outcome: 'An automated performance dashboard plus a presented campaign review.'
      }
    ],
    technologies: [
      { name: 'Google Ads', note: 'Search & display' },
      { name: 'Meta Ads', note: 'Paid social' },
      { name: 'GA4', note: 'Analytics & attribution' },
      { name: 'Search Console', note: 'Organic performance' },
      { name: 'SEMrush', note: 'SEO research' },
      { name: 'WordPress', note: 'Sites & landing pages' },
      { name: 'Mailchimp', note: 'Email marketing' },
      { name: 'Looker Studio', note: 'Reporting dashboards' }
    ],
    careers: [
      { icon: 'chart', title: 'Digital Marketing Executive', text: 'Run the day-to-day channels for a brand or agency.' },
      { icon: 'spark', title: 'SEO Specialist', text: 'Own organic growth from technical audit to content strategy.' },
      { icon: 'bot', title: 'Performance Marketer', text: 'Manage paid budgets against a target cost per acquisition.' },
      { icon: 'code', title: 'Social Media Manager', text: 'Build and run the presence a brand is judged by.' },
      { icon: 'database', title: 'Marketing Analyst', text: 'Measure what worked and tell the business why.' },
      { icon: 'career', title: 'Freelance Marketing Consultant', text: 'Serve local businesses across every channel they need.' }
    ],
    featured: {
      title: 'End-to-End Campaign for a Local Business',
      kicker: 'Capstone project',
      text: 'A real client engagement: audit, strategy, a rebuilt landing page, an SEO content plan, live Google and Meta campaigns on a managed budget, an email nurture flow, GA4 tracking and a final presentation showing leads, cost per lead and return against the starting baseline.',
      tags: ['SEO', 'Google Ads', 'GA4', 'CRO'],
      difficulty: 'Advanced',
      status: 'Live campaign',
      lines: [
        'Baseline   Leads 34/mo   CPL ₹310',
        '',
        'Week 4     Leads 61/mo   CPL ₹172',
        'Week 8     Leads 98/mo   CPL ₹104',
        'Week 12    Leads 143/mo  CPL ₹71',
        '',
        'Organic share of leads: 12% → 39%'
      ]
    },
    projects: [
      { title: 'SEO Audit', text: 'A full technical and content audit with a fix list.', tags: ['SEO'], size: 'sm' },
      { title: 'Google Ads Campaign', text: 'Live search campaign with conversion tracking.', tags: ['Google Ads'], size: 'lg' },
      { title: 'Social Content Month', text: 'A calendar, assets and scheduled publishing.', tags: ['Meta'], size: 'sm' },
      { title: 'Email Funnel', text: 'A five-email nurture sequence with segmentation.', tags: ['Mailchimp'], size: 'sm' },
      { title: 'Analytics Dashboard', text: 'Channel performance in one automated report.', tags: ['GA4'], size: 'lg' }
    ],
    audience: 'Students after 12th or graduation, business owners marketing their own company, and working professionals moving into marketing. No technical background required.',
    prerequisite: 'None. The course assumes only that you can use a browser. Everything else is taught from the first session.',

    /* The one course written as a local landing page. Its copy names
       Ludhiana throughout, so the page states that as its centre
       rather than the Ludhiana every other course defaults to —
       otherwise the chrome and the copy contradict each other. */
    city: 'Ludhiana',

    overviewTitle: DIGITAL_MARKETING_OVERVIEW.title,
    overviewLead: DIGITAL_MARKETING_OVERVIEW.lead,
    overviewBody: DIGITAL_MARKETING_OVERVIEW.body,

    /* replaces the six generic groups the factory writes, so the page
       answers "who can do this course" once, in its own words */
    joiners: DIGITAL_MARKETING_JOINERS,
    narrative: DIGITAL_MARKETING_NARRATIVE,

    /* UNVERIFIED quotes carrying named localities, a named college and
       placement outcomes. Read the banner above
       DIGITAL_MARKETING_TESTIMONIALS in ./digital-marketing-copy.js
       before this page goes live. Deleting this one line falls back to
       the generic quotes in shared.js. */
    testimonials: DIGITAL_MARKETING_TESTIMONIALS,

    /* a complete question set of its own, so the standard seven the
       factory writes are replaced rather than appended to */
    ownFaqs: true,
    faqs: DIGITAL_MARKETING_FAQS,

    enquireEyebrow: 'Talk to our experts',
    enquireTitle: 'Start your digital marketing career in Ludhiana',
    enquireText:
      'Not sure if this course is right for you? Get personalized guidance from techcadd’s course counsellors — no pressure, just honest answers to help you make the right decision for your career.'
  },

  {
    slug: 'social-media-marketing',
    heroArt: '/courses/social-media-marketing-hero.webp',
    heroArtSize: [1200, 675],
    heroArtAlt:
      'A social media campaign in one frame — a phone feed surrounded by ' +
      'the platform marks, engagement counters and a performance chart',
    name: 'Social Media Marketing Course',
    short: 'Social Media Marketing',
    subject: 'social media marketing',
    category: 'Digital Marketing',
    eyebrow: 'Content, community and paid social',
    duration: '2–3 months',
    headline: ['Build an audience.', 'Then convert it.'],
    sub: 'Strategy, content production, community management and paid social across Instagram, LinkedIn, YouTube and Facebook — measured against followers that actually buy.',
    projectCount: 'Four shipped',
    highlights: [
      'A real account grown during the course',
      'Content produced in batches, not one at a time',
      'Paid social run on a live budget'
    ],
    code: {
      lang: 'txt',
      file: 'calendar.md',
      lines: [
        'Mon  Reel      — educational hook',
        'Wed  Carousel  — case study',
        'Fri  Story set — behind the scenes',
        'Sun  LinkedIn  — long-form insight',
        '',
        'Paid: retarget 30-day engagers'
      ],
      command: 'Review week',
      output: 'Reach +64% · saves +112%'
    },
    badges: ['Instagram', 'LinkedIn', 'Meta Ads', 'Canva'],
    modules: [
      {
        title: 'Platform Strategy',
        tag: 'Weeks 1–2',
        description: 'Which platforms matter for which business, and what each one actually rewards.',
        skills: ['Platform selection', 'Audience research', 'Competitor teardown', 'Content pillars', 'Goal setting', 'Profile optimisation'],
        tech: ['Meta Business Suite', 'LinkedIn', 'Instagram'],
        outcome: 'A documented social strategy with pillars, cadence and defined success metrics.'
      },
      {
        title: 'Content Creation & Production',
        tag: 'Weeks 3–5',
        description: 'Making a month of content in a day — reels, carousels, stories and copy that stops the scroll.',
        skills: ['Hook writing', 'Reel editing', 'Carousel design', 'Caption craft', 'Batch production', 'Brand consistency'],
        tech: ['Canva', 'CapCut', 'Lightroom', 'Metricool'],
        outcome: 'Thirty publish-ready assets produced in one working session.'
      },
      {
        title: 'Growth & Community',
        tag: 'Weeks 6–7',
        description: 'Algorithms, engagement and turning followers into a community rather than a number.',
        skills: ['Algorithm signals', 'Hashtag & SEO strategy', 'Engagement tactics', 'Collaborations', 'Community management', 'Crisis handling'],
        tech: ['Instagram', 'LinkedIn', 'Buffer'],
        outcome: 'A measured growth run on a real account with the tactics that moved it identified.'
      },
      {
        title: 'Paid Social & Measurement',
        tag: 'Weeks 8–10',
        description: 'Ads Manager, audiences, creative testing and proving the channel earns its budget.',
        skills: ['Ads Manager', 'Custom audiences', 'Retargeting', 'Creative testing', 'Pixel & conversions', 'Reporting'],
        tech: ['Meta Ads', 'Meta Pixel', 'GA4', 'Looker Studio'],
        outcome: 'A live paid campaign with a tested creative set and a reported cost per result.'
      }
    ],
    technologies: [
      { name: 'Instagram', note: 'Reels & community' },
      { name: 'Meta Ads', note: 'Paid social' },
      { name: 'LinkedIn', note: 'B2B & professional' },
      { name: 'YouTube', note: 'Long-form & shorts' },
      { name: 'Canva', note: 'Design production' },
      { name: 'CapCut', note: 'Video editing' },
      { name: 'Buffer', note: 'Scheduling' },
      { name: 'Meta Pixel', note: 'Conversion tracking' }
    ],
    careers: [
      { icon: 'code', title: 'Social Media Manager', text: 'Own strategy, content and community for a brand.' },
      { icon: 'spark', title: 'Content Creator', text: 'Produce the video and design work brands pay for.' },
      { icon: 'chart', title: 'Paid Social Specialist', text: 'Run Meta and LinkedIn budgets against a cost target.' },
      { icon: 'bot', title: 'Community Manager', text: 'Build and moderate the audience around a product.' },
      { icon: 'database', title: 'Influencer Marketing Executive', text: 'Plan and measure creator partnerships.' },
      { icon: 'career', title: 'Freelance Social Manager', text: 'Handle multiple client accounts independently.' }
    ],
    featured: {
      title: 'Brand Account Growth Sprint',
      kicker: 'Capstone project',
      text: 'Take a real account from baseline to measured growth over eight weeks: strategy, thirty produced assets, a consistent posting cadence, community engagement, a retargeting campaign on a live budget, and a report showing reach, saves, follower quality and leads generated.',
      tags: ['Instagram', 'Meta Ads', 'Canva', 'Reporting'],
      difficulty: 'Advanced',
      status: 'Live account',
      lines: [
        'Week 0   Followers 840    Reach 3.1k',
        'Week 4   Followers 1,920  Reach 22k',
        'Week 8   Followers 3,460  Reach 61k',
        '',
        'Leads from DMs: 0 → 38',
        'Paid retarget CPL: ₹67'
      ]
    },
    projects: [
      { title: 'Profile Optimisation', text: 'Bio, highlights and links rebuilt for conversion.', tags: ['Instagram'], size: 'sm' },
      { title: 'Reel Series', text: 'Five edited reels with tested hooks.', tags: ['CapCut'], size: 'lg' },
      { title: 'Carousel Set', text: 'Educational carousels designed for saves.', tags: ['Canva'], size: 'sm' },
      { title: 'LinkedIn Campaign', text: 'B2B content plus a targeted ad set.', tags: ['LinkedIn'], size: 'sm' },
      { title: 'Retargeting Funnel', text: 'Pixel-driven ads to warm audiences.', tags: ['Meta Ads'], size: 'lg' }
    ],

    audience:
      'Students after 12th, graduates from any stream, job seekers, working professionals, freelancers, small business owners and content creators. No marketing or technical background is required.',
    prerequisite:
      'None. Basic computer and internet skills are enough. The course starts from social media strategy and fundamentals, so a complete beginner can follow it from the first session.',

    /* The second course written as a local landing page. Its copy
       names Ludhiana throughout, which is also the default centre, so
       nothing here has to override `city`. */
    overviewTitle: SMM_OVERVIEW.title,
    overviewLead: SMM_OVERVIEW.lead,
    overviewBody: SMM_OVERVIEW.body,

    /* replaces the six generic groups the factory writes, so the page
       answers "who can do this course" once, in its own words */
    joiners: SMM_JOINERS,
    narrative: SMM_NARRATIVE,

    /* the ten quotes the page carries, replacing the four the factory
       writes from the course subject */
    testimonials: SMM_TESTIMONIALS,

    /* a complete question set of its own, so the standard seven the
       factory writes are replaced rather than appended to */
    ownFaqs: true,
    faqs: SMM_FAQS,

    enquireEyebrow: 'Talk to our experts',
    enquireTitle: 'Start your social media marketing journey with techcadd',
    enquireText:
      'Interested in the course? Send your details and a counsellor calls you back — batch dates, timings, fees, and an honest answer on whether this programme fits the career you are aiming at.'
  },

  {
    slug: 'google-ads',
    heroArt: '/courses/google-ads-hero.webp',
    heroArtSize: [1200, 800],
    heroArtAlt:
      'A Google Ads workspace — a search ad in a browser, a campaign ' +
      'performance chart, a megaphone and a target',
    name: 'Google Ads Course',
    short: 'Google Ads',
    subject: 'Google Ads',
    category: 'Digital Marketing',
    eyebrow: 'Paid search that pays back',
    duration: '6–8 weeks',
    headline: ['Buy intent.', 'Not impressions.'],
    sub: 'Search, Performance Max, display, shopping and YouTube — campaign structure, bidding, conversion tracking and the optimisation routine that lowers cost per acquisition week after week.',
    projectCount: 'Four shipped',
    highlights: [
      'Live account with a real spend',
      'Conversion tracking configured correctly',
      'Google Ads certification prep included'
    ],
    code: {
      lang: 'txt',
      file: 'structure.md',
      lines: [
        'Campaign: Search — Ludhiana — Courses',
        '  Ad group: python course',
        '    kw: [python course ludhiana]  exact',
        '    kw: "python training near me"  phrase',
        '  Ad group: data science',
        '    Target CPA ₹450 · tCPA bidding'
      ],
      command: 'Review account',
      output: 'Conv. 214 · CPA ₹387 · IS 71%'
    },
    badges: ['Search', 'PMax', 'GTM', 'Shopping'],
    modules: [
      {
        title: 'Account Structure & Keyword Research',
        tag: 'Weeks 1–2',
        description: 'Campaigns, ad groups and match types — the structure everything else depends on.',
        skills: ['Account hierarchy', 'Keyword research', 'Match types', 'Negative keywords', 'Search intent', 'Budget allocation'],
        tech: ['Google Ads', 'Keyword Planner'],
        outcome: 'A built account structure with a researched keyword and negative list.'
      },
      {
        title: 'Ads, Landing Pages & Quality Score',
        tag: 'Weeks 3–4',
        description: 'Writing ads that earn the click and pages that deserve it — and why Quality Score is a budget lever.',
        skills: ['Responsive search ads', 'Ad extensions', 'Quality Score factors', 'Landing page relevance', 'Ad testing', 'Copy frameworks'],
        tech: ['Google Ads', 'Unbounce', 'WordPress'],
        outcome: 'A tested ad set with an improved Quality Score and a matched landing page.'
      },
      {
        title: 'Conversion Tracking & Bidding',
        tag: 'Weeks 5–6',
        description: 'Measuring the right action, then letting the bidding strategy work with clean data.',
        skills: ['Google Tag Manager', 'Conversion actions', 'Enhanced conversions', 'Smart bidding', 'Target CPA & ROAS', 'Attribution settings'],
        tech: ['Google Tag Manager', 'GA4', 'Google Ads'],
        outcome: 'Verified end-to-end conversion tracking feeding an automated bidding strategy.'
      },
      {
        title: 'PMax, Shopping, YouTube & Scaling',
        tag: 'Weeks 7–8',
        description: 'The rest of the inventory, plus the weekly optimisation routine that compounds.',
        skills: ['Performance Max', 'Shopping feeds', 'YouTube campaigns', 'Audience signals', 'Optimisation cadence', 'Reporting & scripts'],
        tech: ['Merchant Center', 'Performance Max', 'Looker Studio'],
        outcome: 'A multi-campaign account optimised over four weeks with a falling cost per acquisition.'
      }
    ],
    technologies: [
      { name: 'Google Ads', note: 'Campaign platform' },
      { name: 'Google Tag Manager', note: 'Tracking deployment' },
      { name: 'GA4', note: 'Behaviour & attribution' },
      { name: 'Merchant Center', note: 'Shopping feeds' },
      { name: 'Keyword Planner', note: 'Research & forecasts' },
      { name: 'Looker Studio', note: 'Client reporting' },
      { name: 'Performance Max', note: 'Cross-inventory campaigns' },
      { name: 'Unbounce', note: 'Landing pages' }
    ],
    careers: [
      { icon: 'chart', title: 'PPC Specialist', text: 'Run paid search accounts against a cost-per-acquisition target.' },
      { icon: 'spark', title: 'Performance Marketer', text: 'Own the paid budget across search, shopping and video.' },
      { icon: 'bot', title: 'SEM Executive', text: 'Manage search campaigns for an agency or in-house team.' },
      { icon: 'database', title: 'E-commerce Ads Manager', text: 'Drive shopping and PMax revenue for online stores.' },
      { icon: 'code', title: 'Marketing Analyst', text: 'Connect ad spend to revenue with clean attribution.' },
      { icon: 'career', title: 'Freelance Ads Consultant', text: 'Manage accounts for local businesses on retainer.' }
    ],
    featured: {
      title: 'Live Account Turnaround',
      kicker: 'Capstone project',
      text: 'Take over a real underperforming account: audit, restructure, negative keyword cleanup, rebuilt ad copy, corrected conversion tracking, a switch to smart bidding, and eight weeks of documented optimisation — presented as a client report with cost per acquisition before and after.',
      tags: ['Google Ads', 'GTM', 'Smart bidding', 'Audit'],
      difficulty: 'Advanced',
      status: 'Live account',
      lines: [
        'Before   CPA ₹1,240   Conv. 41    IS 28%',
        '',
        'Fixes    · 312 negatives added',
        '         · tracking corrected (was double-counting)',
        '         · 4 campaigns → 2, by intent',
        '',
        'After    CPA ₹388     Conv. 167   IS 74%'
      ]
    },
    projects: [
      { title: 'Keyword Plan', text: 'Researched keywords, match types and negatives.', tags: ['Search'], size: 'sm' },
      { title: 'Search Campaign', text: 'A live campaign with tested responsive ads.', tags: ['Google Ads'], size: 'lg' },
      { title: 'Tracking Setup', text: 'GTM conversion tracking verified end to end.', tags: ['GTM'], size: 'sm' },
      { title: 'Shopping Feed', text: 'A Merchant Center feed with optimised titles.', tags: ['Shopping'], size: 'sm' },
      { title: 'Client Report', text: 'An automated dashboard with plain-language insight.', tags: ['Looker'], size: 'lg' }
    ],

    audience:
      '12th-pass students, college students, graduates and freshers, job seekers, freelancers, business owners, career switchers, and marketers already working in SEO or social who want the paid side too.',
    prerequisite:
      'None, and no coding. Basic computer skills and an interest in how customers search are enough — the course starts at PPC fundamentals and keywords before any campaign is built.',

    /* The third course written as a local landing page. Its copy names
       Ludhiana throughout, which is also the default centre, so
       nothing here has to override `city`. */
    overviewTitle: GOOGLE_ADS_OVERVIEW.title,
    overviewLead: GOOGLE_ADS_OVERVIEW.lead,
    overviewBody: GOOGLE_ADS_OVERVIEW.body,

    /* replaces the six generic groups the factory writes, so the page
       answers "who can do this course" once, in its own words */
    joiners: GOOGLE_ADS_JOINERS,
    narrative: GOOGLE_ADS_NARRATIVE,

    /* the ten quotes the page carries, replacing the four the factory
       writes from the course subject */
    testimonials: GOOGLE_ADS_TESTIMONIALS,

    /* a complete question set of its own, so the standard seven the
       factory writes are replaced rather than appended to */
    ownFaqs: true,
    faqs: GOOGLE_ADS_FAQS,

    enquireEyebrow: 'Want to know more?',
    enquireTitle: 'Start your Google Ads career with techcadd',
    enquireText:
      'Send your enquiry and connect with the techcadd team to ask about the Google Ads course in Ludhiana — current batch schedule, course duration, training mode, fees, syllabus and the admission process.'
  },

  {
    slug: 'seo',
    heroArt: '/courses/seo-hero.webp',
    heroArtSize: [1200, 675],
    heroArtAlt:
      'An SEO workspace — a search results page, ranking and traffic ' +
      'charts, a target and the audit badges the course works through',
    name: 'SEO Course',
    short: 'SEO',
    subject: 'SEO',
    category: 'Digital Marketing',
    eyebrow: 'Rankings that survive updates',
    duration: '2–3 months',
    headline: ['Earn the ranking.', 'Then keep it.'],
    sub: 'Technical SEO, content strategy, link building and local search — worked on a live site, measured in Search Console, with none of the tactics that stop working after the next core update.',
    projectCount: 'Four shipped',
    highlights: [
      'A real site audited and improved',
      'Technical SEO taught with the tools professionals use',
      'Local SEO for businesses that sell in one city'
    ],
    code: {
      lang: 'txt',
      file: 'audit.md',
      lines: [
        '✗ 42 pages   — missing meta description',
        '✗ 18 pages   — duplicate H1',
        '✗ LCP 4.8s   — hero image unoptimised',
        '✓ 312 pages  — indexed',
        '! 27 pages   — crawled, currently not indexed'
      ],
      command: 'Run site crawl',
      output: '312 URLs · 87 issues found'
    },
    badges: ['Technical', 'Content', 'Links', 'Local'],
    modules: [
      {
        title: 'How Search Works',
        tag: 'Weeks 1–2',
        description: 'Crawling, indexing and ranking — the model everything else in SEO is derived from.',
        skills: ['Crawling & indexing', 'Ranking signals', 'Search intent', 'SERP features', 'Core updates', 'Measurement basics'],
        tech: ['Search Console', 'Google', 'Bing Webmaster'],
        outcome: 'A Search Console account configured with a baseline you can measure against.'
      },
      {
        title: 'Keyword & Content Strategy',
        tag: 'Weeks 3–5',
        description: 'Finding what people actually search, and building content that deserves to answer it.',
        skills: ['Keyword research', 'Search intent mapping', 'Topic clusters', 'Content briefs', 'On-page optimisation', 'Internal linking'],
        tech: ['Ahrefs', 'SEMrush', 'Google Trends'],
        outcome: 'A content plan with clustered topics and optimised briefs for a real site.'
      },
      {
        title: 'Technical SEO',
        tag: 'Weeks 6–8',
        description: 'Site architecture, speed, structured data and the crawl issues that quietly cap a site.',
        skills: ['Site architecture', 'Core Web Vitals', 'Schema markup', 'robots & sitemaps', 'Canonicals & redirects', 'JavaScript SEO'],
        tech: ['Screaming Frog', 'PageSpeed Insights', 'Search Console'],
        outcome: 'A completed technical audit with fixes deployed and re-crawl confirmation.'
      },
      {
        title: 'Links, Local & Reporting',
        tag: 'Weeks 9–12',
        description: 'Authority, local visibility and reporting SEO in numbers a business owner cares about.',
        skills: ['Link prospecting', 'Digital PR basics', 'Google Business Profile', 'Local citations', 'Review strategy', 'Rank & traffic reporting'],
        tech: ['Ahrefs', 'Google Business Profile', 'Looker Studio'],
        outcome: 'A measured ranking and traffic improvement, reported with the work that caused it.'
      }
    ],
    technologies: [
      { name: 'Search Console', note: 'Google\'s own data' },
      { name: 'Ahrefs', note: 'Keywords & backlinks' },
      { name: 'SEMrush', note: 'Competitive research' },
      { name: 'Screaming Frog', note: 'Technical crawling' },
      { name: 'GA4', note: 'Traffic & behaviour' },
      { name: 'Schema.org', note: 'Structured data' },
      { name: 'PageSpeed', note: 'Core Web Vitals' },
      { name: 'Business Profile', note: 'Local search' }
    ],
    careers: [
      { icon: 'chart', title: 'SEO Specialist', text: 'Own organic growth for a site or a client portfolio.' },
      { icon: 'code', title: 'Technical SEO Analyst', text: 'Fix the crawl, speed and structure problems that cap rankings.' },
      { icon: 'spark', title: 'Content Strategist', text: 'Plan content around search demand and business value.' },
      { icon: 'bot', title: 'Local SEO Consultant', text: 'Get local businesses visible in map and near-me searches.' },
      { icon: 'database', title: 'Digital Marketing Executive', text: 'Combine SEO with the paid and social channels around it.' },
      { icon: 'career', title: 'Freelance SEO Consultant', text: 'Take on retainer clients with a documented process.' }
    ],
    featured: {
      title: 'Full Site SEO Turnaround',
      kicker: 'Capstone project',
      text: 'A live site taken through the complete process: crawl audit, technical fixes, Core Web Vitals work, a clustered content plan with published articles, internal link restructuring, local profile optimisation and a twelve-week Search Console report showing impressions, clicks and position change.',
      tags: ['Technical SEO', 'Content', 'Local', 'Search Console'],
      difficulty: 'Advanced',
      status: 'Live site',
      lines: [
        'Week 0    Clicks 1,240/mo   Avg pos 24.1',
        '',
        'Fixed     · 87 technical issues',
        '          · LCP 4.8s → 1.9s',
        '          · 14 cluster articles published',
        '',
        'Week 12   Clicks 6,830/mo   Avg pos 9.4'
      ]
    },
    projects: [
      { title: 'Technical Audit', text: 'A crawl-based audit with a prioritised fix list.', tags: ['Screaming Frog'], size: 'sm' },
      { title: 'Content Cluster', text: 'A pillar page with supporting articles and links.', tags: ['Content'], size: 'lg' },
      { title: 'Schema Markup', text: 'Structured data deployed and validated.', tags: ['Schema'], size: 'sm' },
      { title: 'Local Optimisation', text: 'A Business Profile ranking in the map pack.', tags: ['Local'], size: 'sm' },
      { title: 'SEO Report', text: 'Search Console data turned into a client story.', tags: ['Looker'], size: 'lg' }
    ]
  },

  {
    slug: 'wordpress',
    heroArt: '/courses/wordpress-hero.webp',
    heroArtSize: [1200, 800],
    heroArtAlt:
      'A WordPress build in progress — the dashboard, a page being edited ' +
      'and the plugin and theme tools around the WordPress mark',
    name: 'WordPress Development Course',
    short: 'WordPress',
    subject: 'WordPress',
    category: 'Digital Marketing',
    eyebrow: 'Build client sites that last',
    duration: '6–8 weeks',
    headline: ['Build it fast.', 'Hand it over clean.'],
    sub: 'Themes, page builders, WooCommerce, custom post types, speed and security — everything needed to deliver a client site you are not embarrassed to maintain.',
    projectCount: 'Four shipped',
    highlights: [
      'Live hosting from the first week',
      'Speed and security treated as deliverables',
      'A client-ready handover process'
    ],
    code: {
      lang: 'php',
      file: 'functions.php',
      lines: [
        'function techcadd_register_courses() {',
        '    register_post_type("course", [',
        '        "public"       => true,',
        '        "has_archive"  => true,',
        '        "supports"     => ["title", "editor", "thumbnail"]',
        '    ]);',
        '}'
      ],
      command: 'wp cache flush',
      output: 'Success: Cache flushed'
    },
    badges: ['WooCommerce', 'Elementor', 'ACF', 'SEO'],
    modules: [
      {
        title: 'Setup, Hosting & Core',
        tag: 'Weeks 1–2',
        description: 'Domains, hosting, installation and the WordPress concepts underneath every plugin.',
        skills: ['Hosting & domains', 'WordPress installation', 'Posts vs pages', 'Media & menus', 'User roles', 'Backups'],
        tech: ['cPanel', 'WordPress', 'LocalWP'],
        outcome: 'A live site on your own domain with backups configured.'
      },
      {
        title: 'Themes, Builders & Design',
        tag: 'Weeks 3–4',
        description: 'Building the design — with a page builder and with the block editor, knowing when to use which.',
        skills: ['Theme selection', 'Block editor', 'Elementor', 'Global styles', 'Responsive design', 'Child themes'],
        tech: ['Elementor', 'Astra', 'Gutenberg'],
        outcome: 'A responsive multi-page business site built to a real design brief.'
      },
      {
        title: 'WooCommerce & Custom Content',
        tag: 'Weeks 5–6',
        description: 'Selling online, and modelling content that does not fit a blog post.',
        skills: ['WooCommerce setup', 'Products & variations', 'Payments & shipping', 'Custom post types', 'ACF fields', 'Custom queries'],
        tech: ['WooCommerce', 'ACF', 'Razorpay'],
        outcome: 'A working store with real payment integration and a custom content type.'
      },
      {
        title: 'Speed, Security, SEO & Handover',
        tag: 'Weeks 7–8',
        description: 'The professional half — making the site fast, safe, findable and someone else\'s to run.',
        skills: ['Caching & optimisation', 'Image compression', 'Security hardening', 'SEO plugins', 'Migration', 'Client documentation'],
        tech: ['WP Rocket', 'Wordfence', 'Rank Math', 'UpdraftPlus'],
        outcome: 'Your capstone site scoring well on PageSpeed, hardened, and handed over with documentation.'
      }
    ],
    technologies: [
      { name: 'WordPress', note: 'Core platform' },
      { name: 'WooCommerce', note: 'E-commerce' },
      { name: 'Elementor', note: 'Visual building' },
      { name: 'ACF', note: 'Custom fields' },
      { name: 'Rank Math', note: 'SEO' },
      { name: 'WP Rocket', note: 'Performance' },
      { name: 'Wordfence', note: 'Security' },
      { name: 'cPanel', note: 'Hosting & deployment' }
    ],
    careers: [
      { icon: 'code', title: 'WordPress Developer', text: 'Build and maintain sites for agencies and clients.' },
      { icon: 'stack', title: 'Web Designer', text: 'Deliver complete design-and-build projects.' },
      { icon: 'bot', title: 'WooCommerce Specialist', text: 'Set up and optimise online stores end to end.' },
      { icon: 'spark', title: 'Freelance Web Developer', text: 'Run your own client pipeline with recurring maintenance.' },
      { icon: 'chart', title: 'Digital Marketing Executive', text: 'Own the website alongside the campaigns that drive it.' },
      { icon: 'career', title: 'Site Maintenance Provider', text: 'Build a retainer business around updates and support.' }
    ],
    featured: {
      title: 'Client E-commerce Site',
      kicker: 'Capstone project',
      text: 'A complete WooCommerce build for a real brief: custom design, product catalogue with variations, live payment gateway, shipping rules, SEO configuration, caching and image optimisation to a strong PageSpeed score, security hardening, and a documented handover the client can actually run.',
      tags: ['WooCommerce', 'Elementor', 'Razorpay', 'PageSpeed'],
      difficulty: 'Advanced',
      status: 'Live site',
      lines: [
        'add_filter("woocommerce_package_rates",',
        '    function ($rates, $package) {',
        '        if ($package["contents_cost"] > 999) {',
        '            unset($rates["flat_rate:1"]);',
        '        }',
        '        return $rates;',
        '    }, 10, 2);'
      ]
    },
    projects: [
      { title: 'Business Website', text: 'A five-page site live on a custom domain.', tags: ['Elementor'], size: 'sm' },
      { title: 'Blog with SEO', text: 'Content site configured for search from day one.', tags: ['Rank Math'], size: 'lg' },
      { title: 'Online Store', text: 'Products, cart and checkout with real payments.', tags: ['WooCommerce'], size: 'sm' },
      { title: 'Custom Portfolio Type', text: 'ACF-driven content beyond posts and pages.', tags: ['ACF'], size: 'sm' },
      { title: 'Speed Optimisation', text: 'A slow site taken to a strong PageSpeed score.', tags: ['WP Rocket'], size: 'lg' }
    ],
    prerequisite: 'None. Basic HTML and CSS help in the later modules, and both are introduced as needed.',

    audience:
      'Students after 12th, college students from any stream, graduates looking for jobs, career changers, freelancers, small business owners, digital marketing learners, and anyone who wants to build websites. No programming background required.',

    /* The fourth course written as a local landing page. Its copy names
       Ludhiana throughout, which is also the default centre, so
       nothing here has to override `city`. */
    overviewTitle: WORDPRESS_OVERVIEW.title,
    overviewLead: WORDPRESS_OVERVIEW.lead,
    overviewBody: WORDPRESS_OVERVIEW.body,

    /* replaces the six generic groups the factory writes, so the page
       answers "who can do this course" once, in its own words */
    joiners: WORDPRESS_JOINERS,
    narrative: WORDPRESS_NARRATIVE,

    /* the ten quotes the page carries, replacing the four the factory
       writes from the course subject */
    testimonials: WORDPRESS_TESTIMONIALS,

    /* a complete question set of its own, so the standard seven the
       factory writes are replaced rather than appended to */
    ownFaqs: true,
    faqs: WORDPRESS_FAQS,

    enquireEyebrow: 'Ready to build',
    enquireTitle: 'Start your WordPress learning journey with techcadd',
    enquireText:
      'Send your enquiry and the techcadd team will call you back about the WordPress course in Ludhiana — current curriculum, duration, training mode, fees, batch timings and centre details.'
  },

  {
    slug: 'shopify',
    heroArt: '/courses/shopify-hero.webp',
    heroArtSize: [798, 532],
    heroArtAlt:
      'A Shopify storefront on desktop and mobile beside the Shopify ' +
      'mark, with the checkout padlock the course configures',
    name: 'Shopify Development Course',
    short: 'Shopify',
    subject: 'Shopify',
    category: 'Digital Marketing',
    eyebrow: 'Launch and grow a store',
    duration: '6–8 weeks',
    heroArt: '/courses/shopify.png',
    heroArtSize: [798, 532],
    heroArtAlt:
      'A Shopify storefront in development — the theme, the product catalogue and the checkout behind it',
    headline: ['Open the store.', 'Then make it sell.'],
    sub: 'Store setup, theme customisation with Liquid, apps, payments, shipping and conversion optimisation — building a store that converts, not just one that exists.',
    projectCount: 'Four shipped',
    highlights: [
      'A real store built and launched',
      'Liquid taught, so you are not stuck with the theme',
      'Conversion optimisation with measured results'
    ],
    code: {
      lang: 'txt',
      file: 'product.liquid',
      lines: [
        '{% for variant in product.variants %}',
        '  <option value="{{ variant.id }}">',
        '    {{ variant.title }} — {{ variant.price | money }}',
        '  </option>',
        '{% endfor %}'
      ],
      command: 'shopify theme dev',
      output: 'Preview ready · syncing'
    },
    badges: ['Liquid', 'Payments', 'Apps', 'CRO'],
    modules: [
      {
        title: 'Store Setup & Catalogue',
        tag: 'Weeks 1–2',
        description: 'From an empty store to a complete, well-organised product catalogue.',
        skills: ['Store configuration', 'Products & variants', 'Collections', 'Inventory', 'Product photography basics', 'Copywriting'],
        tech: ['Shopify', 'Canva'],
        outcome: 'A fully populated store with a structured catalogue and written product pages.'
      },
      {
        title: 'Themes & Liquid Customisation',
        tag: 'Weeks 3–4',
        description: 'Customising beyond the theme settings — sections, snippets and Liquid templating.',
        skills: ['Theme architecture', 'Liquid syntax', 'Sections & blocks', 'Custom snippets', 'Metafields', 'Responsive tuning'],
        tech: ['Liquid', 'Shopify CLI', 'Dawn theme'],
        outcome: 'A customised theme with sections you built rather than settings you toggled.'
      },
      {
        title: 'Payments, Shipping & Operations',
        tag: 'Weeks 5–6',
        description: 'The operational reality — getting paid, shipping goods and handling what goes wrong.',
        skills: ['Payment gateways', 'Shipping rules', 'Taxes', 'Order workflow', 'Returns & refunds', 'Apps & integrations'],
        tech: ['Shopify Payments', 'Razorpay', 'Shiprocket'],
        outcome: 'A store processing real test orders end to end, including a refund.'
      },
      {
        title: 'Marketing & Conversion',
        tag: 'Weeks 7–8',
        description: 'Traffic, abandoned carts and the changes that lift conversion rate measurably.',
        skills: ['Shopify SEO', 'Email & SMS flows', 'Abandoned cart recovery', 'Upsells & bundles', 'A/B testing', 'Analytics'],
        tech: ['Klaviyo', 'Meta Pixel', 'Google Analytics', 'Judge.me'],
        outcome: 'A launched store with recovery flows running and a measured conversion improvement.'
      }
    ],
    technologies: [
      { name: 'Shopify', note: 'Commerce platform' },
      { name: 'Liquid', note: 'Theme templating' },
      { name: 'Shopify CLI', note: 'Local theme development' },
      { name: 'Klaviyo', note: 'Email & SMS flows' },
      { name: 'Razorpay', note: 'Payments in India' },
      { name: 'Shiprocket', note: 'Shipping & fulfilment' },
      { name: 'Meta Pixel', note: 'Ad tracking' },
      { name: 'Judge.me', note: 'Reviews & social proof' }
    ],
    careers: [
      { icon: 'code', title: 'Shopify Developer', text: 'Build and customise stores for brands and agencies.' },
      { icon: 'bot', title: 'E-commerce Manager', text: 'Run catalogue, operations and growth for an online store.' },
      { icon: 'chart', title: 'CRO Specialist', text: 'Improve conversion rate with tested changes.' },
      { icon: 'spark', title: 'Store Owner', text: 'Launch and operate your own D2C brand.' },
      { icon: 'stack', title: 'Shopify Partner', text: 'Build a services business around store builds and support.' },
      { icon: 'career', title: 'E-commerce Marketer', text: 'Drive traffic and retention for online retail.' }
    ],
    featured: {
      title: 'D2C Brand Store Launch',
      kicker: 'Capstone project',
      text: 'A complete Shopify launch: catalogue and copy, a Liquid-customised theme with custom sections, live payments and shipping, review collection, Klaviyo welcome and abandoned-cart flows, pixel tracking, and a post-launch report with conversion rate and average order value.',
      tags: ['Liquid', 'Klaviyo', 'Payments', 'CRO'],
      difficulty: 'Advanced',
      status: 'Live store',
      lines: [
        'Launch    Sessions 1,840   CR 0.9%   AOV ₹740',
        '',
        'Changes   · bundle upsell on cart',
        '          · abandoned-cart flow (3 emails)',
        '          · reviews on product page',
        '',
        'Week 6    Sessions 2,110   CR 2.4%   AOV ₹1,120'
      ]
    },
    projects: [
      { title: 'Store Setup', text: 'A complete catalogue with collections and copy.', tags: ['Shopify'], size: 'sm' },
      { title: 'Custom Section', text: 'A Liquid section built from scratch.', tags: ['Liquid'], size: 'lg' },
      { title: 'Checkout Flow', text: 'Payments, shipping rules and test orders.', tags: ['Payments'], size: 'sm' },
      { title: 'Email Flows', text: 'Welcome and cart-recovery automations.', tags: ['Klaviyo'], size: 'sm' },
      { title: 'CRO Test', text: 'A measured conversion improvement on a real store.', tags: ['CRO'], size: 'lg' }
    ],

    audience:
      '12th-pass students, graduates from any stream, students from non-technical backgrounds, aspiring freelancers, entrepreneurs and business owners, digital marketing learners, job seekers, working web designers and developers, and career changers.',
    prerequisite:
      'None. Advanced coding is not required for the fundamentals; basic HTML, CSS or JavaScript only helps once you reach advanced theme customisation, and is introduced as needed.',

    /* The fifth course written as a local landing page. Its copy names
       Ludhiana throughout, which is also the default centre, so
       nothing here has to override `city`. */
    overviewTitle: SHOPIFY_OVERVIEW.title,
    overviewLead: SHOPIFY_OVERVIEW.lead,
    overviewBody: SHOPIFY_OVERVIEW.body,

    /* replaces the six generic groups the factory writes, so the page
       answers "who can do this course" once, in its own words */
    joiners: SHOPIFY_JOINERS,
    narrative: SHOPIFY_NARRATIVE,

    /* PLACEHOLDER quotes, not verified reviews — the source copy said
       so explicitly. Read the banner above SHOPIFY_TESTIMONIALS in
       ./shopify-copy.js before this page goes live. Deleting this one
       line falls back to the generic quotes in shared.js. */
    testimonials: SHOPIFY_TESTIMONIALS,

    /* a complete question set of its own, so the standard seven the
       factory writes are replaced rather than appended to */
    ownFaqs: true,
    faqs: SHOPIFY_FAQS,

    enquireEyebrow: 'Build practical skills',
    enquireTitle: 'Join the Shopify course in Ludhiana at techcadd',
    enquireText:
      'Send your enquiry and the techcadd team will call you back about the Shopify course — current curriculum, duration, training mode, fees, batch timings and what the project work involves.'
  }
]

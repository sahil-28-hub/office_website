/* ==================================================================
   Courses dropdown → Digital Marketing column.

   Six courses. Five of them already carry long-form Ludhiana copy in
   their own -copy.js files, so their entries add only the layout flag,
   the search metadata and the salary table.

   SEO is the exception. It is the one course in either dropdown with
   no copy file of its own — it was running on the generated overview
   and the seven standard FAQs — so its entry below is a full page
   rewrite as well.
================================================================== */

import { SALARY_MARKETS as MARKETS, salaryQuestions as questions } from './shared'

/* True of every course in this column, and the reason marketing is the
   most locally employable track techcadd runs: Ludhiana is a city of
   businesses that all sell something and mostly market it badly. */
const LOCAL_MARKETING_EMPLOYERS =
  'Hosiery, garment and textile exporters; bicycle, auto-component and machine-tool manufacturers selling direct; retail chains and wholesale traders; real estate and property groups; hospitals, clinics and diagnostic labs; coaching institutes, schools and colleges; restaurants, hotels and event businesses; and the digital agencies across Ludhiana that serve all of the above.'

export const PAGES_MARKETING = {
  /* ---------------------------------------------------------------- */
  'digital-marketing': {
    layout: 'full',
    metaTitle: 'Digital Marketing Course in Ludhiana — SEO & Ads | techcadd',
    metaDescription:
      'Digital marketing course in Ludhiana at techcadd — SEO, Google Ads, social media, content, email and analytics, taught on live campaigns.',
    certification: {
      title: 'Get certified in Digital Marketing',
      lead:
        'A verifiable techcadd Digital Marketing certificate, an internship letter for the live-campaign phase, and a campaign portfolio with the actual numbers in it — which is the only marketing credential anybody interviews on.'
    },
    salary: {
      title: 'What digital marketing pays in Ludhiana',
      lead:
        'Marketing salaries here start modestly and move on evidence rather than on years. A candidate who can show what they changed about a number is in a different conversation from one who lists tools.',
      regions: MARKETS,
      rows: [
        { role: 'Digital Marketing Executive', level: 'Entry', cells: ['₹1.8–3.6 LPA', '₹3–7 LPA', '₹15k–45k / month'] },
        { role: 'SEO Specialist', level: 'Entry to mid', cells: ['₹2.4–4.5 LPA', '₹4–9 LPA', '₹20k–60k / month'] },
        { role: 'Performance Marketer', level: 'Entry to mid', cells: ['₹3.0–5.5 LPA', '₹5–12 LPA', '10–18% of ad spend'] },
        { role: 'Marketing Manager', level: 'Mid (3–5 yrs)', cells: ['₹5.5–10 LPA', '₹10–20 LPA', '₹1L–3L / retainer'] }
      ],
      questions: questions({
        roles: {
          q: 'Which job roles open after a digital marketing course?',
          a: 'Digital marketing executive, SEO specialist, performance marketer, social media manager, marketing analyst and freelance consultant. It is also the most common course our students take in order to market their own family business properly.'
        },
        growth:
          'Faster than most fields, because the results are measurable. Cost per lead halved, organic traffic doubled, ROAS moved — numbers like those move a salary conversation in a way no certificate has ever done.',
        remote:
          'Extremely. Content, SEO and paid-ads work is contracted remotely at scale, and Ludhiana freelancers routinely hold retainers with clients in Delhi, Mumbai and abroad. Performance marketers are often paid as a share of managed spend.',
        industries: LOCAL_MARKETING_EMPLOYERS,
        higher:
          'Pairs naturally with an MBA in marketing or a mass-communication degree, and a live-campaign portfolio is unusually persuasive in an admissions interview where most applicants bring coursework.'
      })
    }
  },

  /* ---------------------------------------------------------------- */
  'social-media-marketing': {
    layout: 'full',
    metaTitle: 'Social Media Marketing Course in Ludhiana — SMM | techcadd',
    metaDescription:
      'Social media marketing course in Ludhiana at techcadd — Instagram, Facebook, LinkedIn and YouTube strategy, content, paid social and analytics.',
    certification: {
      title: 'Get certified in Social Media Marketing',
      lead:
        'A techcadd Social Media Marketing certificate, an internship letter for the live-account phase, and a content and campaign portfolio with the reach, engagement and spend numbers attached.'
    },
    salary: {
      title: 'What social media work pays in Ludhiana',
      lead:
        'The lowest entry salaries of any course in this column and the easiest freelance income to start — which is why so many students here end up managing accounts before they are employed by anyone.',
      regions: MARKETS,
      rows: [
        { role: 'Social Media Executive', level: 'Entry', cells: ['₹1.8–3.2 LPA', '₹2.8–6.5 LPA', '₹12k–35k / month'] },
        { role: 'Social Media Manager', level: 'Entry to mid', cells: ['₹2.4–4.5 LPA', '₹4–9 LPA', '₹20k–60k / month'] },
        { role: 'Paid Social Specialist', level: 'Entry to mid', cells: ['₹3.0–5.5 LPA', '₹5–11 LPA', '10–18% of ad spend'] },
        { role: 'Content / Brand Manager', level: 'Mid (3–5 yrs)', cells: ['₹5–9 LPA', '₹9–18 LPA', '₹60k–2L / retainer'] }
      ],
      questions: questions({
        roles: {
          q: 'Which roles does a social media marketing course lead to?',
          a: 'Social media executive and manager, content creator, paid social specialist, community manager and freelance account manager. Managing two or three local accounts alongside a job is the normal starting shape here, not the exception.'
        },
        growth:
          'It plateaus quickly on organic work alone and keeps climbing for anyone who learns paid. The gap between a content scheduler and someone who can run a profitable ad account is the biggest pay gap in this column.',
        remote:
          'Yes — this is the most freelance-native course we run. Retainers for two to five accounts are common, and a portfolio of accounts you have grown is the entire pitch.',
        industries: LOCAL_MARKETING_EMPLOYERS,
        higher:
          'Not academic, but it is a common practical addition alongside a BBA, an MBA or a journalism degree, and the portfolio is what makes those applications concrete.'
      })
    }
  },

  /* ---------------------------------------------------------------- */
  'google-ads': {
    layout: 'full',
    metaTitle: 'Google Ads Course in Ludhiana — PPC Training | techcadd',
    metaDescription:
      'Google Ads course in Ludhiana at techcadd — search, Performance Max, shopping and display campaigns, bidding, tracking and reporting on live budgets.',
    certification: {
      title: 'Get certified in Google Ads',
      lead:
        'A techcadd Google Ads certificate alongside preparation for the official Google Ads certifications, plus live campaign accounts with the spend, conversions and cost-per-acquisition on record.'
    },
    salary: {
      title: 'What Google Ads skills pay',
      lead:
        'Paid media is the one marketing skill where your value is arithmetic. If the account makes more than it costs, the conversation about your rate is short.',
      regions: MARKETS,
      rows: [
        { role: 'PPC / SEM Executive', level: 'Entry', cells: ['₹2.0–3.8 LPA', '₹3.5–8 LPA', '₹15k–45k / month'] },
        { role: 'Performance Marketer', level: 'Entry to mid', cells: ['₹3.0–5.5 LPA', '₹5–12 LPA', '10–18% of ad spend'] },
        { role: 'E-commerce Ads Manager', level: 'Entry to mid', cells: ['₹3.2–6.0 LPA', '₹5.5–13 LPA', '₹25k–80k / month'] },
        { role: 'Paid Media Lead', level: 'Mid (3–5 yrs)', cells: ['₹6–11 LPA', '₹11–22 LPA', '₹1L–3L / retainer'] }
      ],
      questions: questions({
        roles: {
          q: 'Which roles hire for Google Ads?',
          a: 'PPC and SEM executive, performance marketer, e-commerce ads manager, marketing analyst and freelance ads consultant. Agencies hire for it constantly because every client eventually asks for paid, and very few executives can actually run an account profitably.'
        },
        growth:
          'The fastest in this column, and the most directly evidenced. An account where you cut cost per acquisition by a third is a portfolio piece that survives any interview.',
        remote:
          'Yes, and the percentage-of-spend model in the table is real: managing three or four local accounts on retainer is a common income for our students within a year, often alongside employment.',
        industries: LOCAL_MARKETING_EMPLOYERS,
        higher:
          'Not an academic subject, but the analytics and attribution material is genuinely useful in an MBA marketing specialisation.'
      })
    }
  },

  /* ---------------------------------------------------------------- */
  seo: {
    layout: 'full',
    metaTitle: 'SEO Course in Ludhiana — Technical & Local SEO | techcadd',
    metaDescription:
      'SEO course in Ludhiana at techcadd — keyword research, on-page and technical SEO, Core Web Vitals, link building and local SEO on live websites.',

    overviewTitle: 'The SEO course in Ludhiana that is measured in rankings, not modules',
    overviewLead:
      'The **SEO course in Ludhiana** at techcadd covers the whole discipline — keyword and intent research, on-page structure, **technical SEO**, Core Web Vitals, content, link building, local SEO and reporting — and then puts you on a live site where the rankings either move or they do not.',
    overviewBody: [
      'SEO is the cheapest customer acquisition most businesses will ever have and the one they understand least. In Ludhiana that gap is unusually wide: thousands of hosiery exporters, manufacturers, clinics, institutes and traders have websites that no one finds, and almost none of them have anybody in-house who knows why.',
      'This course teaches you to be that person. You work through search intent and keyword mapping, page structure and internal linking, crawlability, indexation, site speed and Core Web Vitals, schema markup, content briefs, ethical link building, and **local SEO** — Google Business Profile, citations, reviews and the map pack that decides who gets the call in a city like this one. Every module lands on a real site, and the last phase is a live client brief with rankings tracked weekly.',
      'It suits marketing executives, content writers, web designers and developers adding search to what they already do, business owners who are tired of paying for ads, and graduates entering digital marketing. No coding is required, though the technical module will teach you enough HTML to read a page properly.'
    ],

    valueTitle: 'Rankings are the only opinion in marketing that settles an argument.',
    valueText:
      'Everything else in this field is a matter of taste. Search results are a scoreboard, updated daily, in public — which makes SEO the easiest marketing skill to prove you actually have.',
    valueStat: { num: '2', label: 'Live sites you work on', sub: 'with rankings tracked week by week' },

    certification: {
      title: 'Get certified in SEO',
      lead:
        'A techcadd SEO certificate, an internship letter for the live-client phase, and — the part that decides the interview — before-and-after ranking and traffic reports for sites you actually worked on.'
    },

    salary: {
      title: 'What SEO pays in Ludhiana and beyond',
      lead:
        'SEO starts lower than paid media and overtakes it for anyone who stays. Compounding results and long client retention are the reason the consultant row exists.',
      regions: MARKETS,
      rows: [
        { role: 'SEO Executive', level: 'Entry', cells: ['₹1.8–3.4 LPA', '₹3–7 LPA', '₹12k–40k / month'] },
        { role: 'SEO Specialist', level: 'Entry to mid', cells: ['₹2.6–4.8 LPA', '₹4.5–10 LPA', '₹20k–60k / month'] },
        { role: 'Technical SEO Analyst', level: 'Entry to mid', cells: ['₹3.2–6.0 LPA', '₹5.5–12 LPA', '₹30k–90k / month'] },
        { role: 'SEO Manager / Consultant', level: 'Mid (3–5 yrs)', cells: ['₹5.5–10 LPA', '₹10–20 LPA', '₹60k–2.5L / retainer'] }
      ],
      questions: questions({
        roles: {
          q: 'Which job roles open after an SEO course?',
          a: 'SEO executive and specialist, technical SEO analyst, content strategist, local SEO consultant and digital marketing executive. Technical SEO is the least crowded and best paid of those, and it is the module most courses skip.'
        },
        growth:
          'Slowly for the first year and then unusually well, because SEO results compound and so does the evidence. A consultant with three case studies showing sustained traffic growth sets their own rate in this market.',
        remote:
          'Completely. SEO is delivered as audits, briefs, changes and reports — none of it needs an office. Local SEO for Ludhiana businesses is a particularly good starting freelance line, because the results show up in a map pack the client can see on their own phone.',
        industries: LOCAL_MARKETING_EMPLOYERS,
        higher:
          'Not an academic route, but it is a strong practical complement to an MBA, a mass-communication degree or a computer applications course.'
      })
    },

    narrative: [
      {
        id: 'seo-local-ludhiana',
        slot: 'careers',
        tone: 'tint',
        eyebrow: 'The local opportunity',
        title: 'Why local SEO is the fastest-paying skill in this course',
        lead:
          'National rankings take months. A **local SEO** result in Ludhiana can take weeks — and the client can see it happening on their own phone.',
        items: [
          {
            title: 'The map pack decides who gets the call',
            text: 'For "dentist near me", "CA in Ludhiana", "hosiery manufacturer Ludhiana", three businesses appear before anything else. Getting a client into that block is the single most valuable thing a new SEO can do, and it is mostly Google Business Profile discipline rather than technical wizardry.'
          },
          {
            title: 'The competition is genuinely weak',
            text: 'Most local business listings have no categories set, no service descriptions, no photographs and no review process. That is not a hard market to beat — it is a market almost nobody has entered.'
          },
          {
            title: 'Results arrive fast enough to keep a client',
            text: 'Enquiry calls, direction requests and profile views move within weeks, and all three are visible in the client\'s own dashboard. That is what turns a one-off project into a retainer.'
          },
          {
            title: 'It scales into national work',
            text: 'The exporters and D2C brands in this city do not only want to be found in Ludhiana. Local work is how you get the account; technical and content SEO is how you keep it.'
          }
        ],
        close:
          'Which is why the live-client phase of this course is deliberately weighted towards local briefs. **You leave with a result somebody paid attention to.**'
      }
    ],

    faqs: [
      {
        q: 'How long is the SEO course in Ludhiana, and what does it cover?',
        a: '2–3 months across weekday, weekend and evening batches. It covers keyword and intent research, on-page structure, technical SEO and Core Web Vitals, content strategy, ethical link building, local SEO and Google Business Profile, plus Search Console, Analytics and reporting.'
      },
      {
        q: 'Do I need coding knowledge for SEO?',
        a: 'No. The technical module teaches you enough HTML, redirects, sitemaps and schema to read and diagnose a page — that is a reading skill, not a programming one. Developers who take the course get more out of the Core Web Vitals work, but nothing assumes you are one.'
      },
      {
        q: 'Will I work on real websites?',
        a: 'Yes. You work on live sites from the second module and the final phase is a client brief with rankings tracked weekly. Students who have their own or a family business site can use it, which is usually the fastest way to see results.'
      },
      {
        q: 'Is SEO still worth learning with AI answers in search results?',
        a: 'The shape of the work has changed and the demand has not. AI summaries pull from pages that are well structured, well cited and trusted — which is what technical and content SEO has always produced. What has genuinely died is keyword-stuffed filler, and this course was never going to teach you that.'
      },
      {
        q: 'Can I take SEO on its own, or should I do full Digital Marketing?',
        a: 'Take SEO on its own if you want a specialisation, if you already work in content or web, or if you want the fastest route to freelance local work. Take Digital Marketing if you want the full discipline including paid ads and social. Many students do SEO first and add the rest later.'
      }
    ],

    enquireEyebrow: 'Course information',
    enquireTitle: 'Ask about the SEO course in Ludhiana',
    enquireText:
      'Have a site that is not ranking — your own, or the family business? Tell us the domain and we will tell you what is actually wrong with it, whether or not you enrol.'
  },

  /* ---------------------------------------------------------------- */
  wordpress: {
    layout: 'full',
    metaTitle: 'WordPress Course in Ludhiana — Sites & WooCommerce | techcadd',
    metaDescription:
      'WordPress course in Ludhiana at techcadd — build, customise and deploy business websites and WooCommerce stores, with speed, security and handover.',
    certification: {
      title: 'Get certified in WordPress',
      lead:
        'A techcadd WordPress certificate, and something more useful than any certificate in this field: live sites you built, deployed and handed over, with the URLs to prove it.'
    },
    salary: {
      title: 'What WordPress work pays in Ludhiana',
      lead:
        'The shortest distance between a course and a paid invoice that techcadd offers. Employment pays modestly; the freelance column is where this skill actually earns.',
      regions: MARKETS,
      rows: [
        { role: 'WordPress Developer', level: 'Entry', cells: ['₹1.8–3.6 LPA', '₹3–7 LPA', '₹12k–45k / site'] },
        { role: 'Web Designer (WordPress)', level: 'Entry', cells: ['₹1.8–3.4 LPA', '₹3–6.5 LPA', '₹12k–40k / site'] },
        { role: 'WooCommerce Specialist', level: 'Entry to mid', cells: ['₹2.4–4.5 LPA', '₹4–9 LPA', '₹25k–80k / store'] },
        { role: 'Freelance Developer / Maintenance', level: 'Mid (2–4 yrs)', cells: ['₹4–8 LPA', '₹8–15 LPA', '₹5k–25k / site / month'] }
      ],
      questions: questions({
        roles: {
          q: 'Can I actually earn from WordPress, or is it too basic?',
          a: 'You can earn from it quickly, which is precisely why it looks basic. Small business sites, WooCommerce stores and ongoing maintenance are commissioned constantly in Ludhiana, and a developer who delivers on time and handles hosting and backups keeps clients for years.'
        },
        growth:
          'Limited as an employee and open-ended as a freelancer or small agency. The recurring maintenance line in the table is the part most people miss — it is the difference between chasing new projects forever and having a base income.',
        remote:
          'Yes, and locally too. Ludhiana businesses prefer somebody they can call, which is an advantage a local freelancer has over any marketplace.',
        industries: LOCAL_MARKETING_EMPLOYERS,
        higher:
          'Not an academic route. Its value is that it earns while you study something else — a large share of this batch is doing exactly that.'
      })
    }
  },

  /* ---------------------------------------------------------------- */
  shopify: {
    layout: 'full',
    metaTitle: 'Shopify Course in Ludhiana — E-commerce Training | techcadd',
    metaDescription:
      'Shopify course in Ludhiana at techcadd — build and launch e-commerce stores with themes, payments, shipping, apps and conversion optimisation.',
    certification: {
      title: 'Get certified in Shopify',
      lead:
        'A techcadd Shopify certificate, and the credential that matters more in e-commerce: live stores you built, with the conversion and checkout work you did on them documented.'
    },
    salary: {
      title: 'What Shopify skills pay',
      lead:
        'Ludhiana is a manufacturing and export city discovering direct-to-consumer selling. That is the whole opportunity here, and it favours people who can build and sell rather than only build.',
      regions: MARKETS,
      rows: [
        { role: 'Shopify Developer', level: 'Entry', cells: ['₹2.0–4.0 LPA', '₹3.6–8 LPA', '₹20k–70k / store'] },
        { role: 'E-commerce Manager', level: 'Entry to mid', cells: ['₹2.6–5.0 LPA', '₹4.5–10 LPA', '₹25k–80k / month'] },
        { role: 'CRO Specialist', level: 'Entry to mid', cells: ['₹3.0–5.5 LPA', '₹5–12 LPA', '₹30k–1L / project'] },
        { role: 'Shopify Partner / Consultant', level: 'Mid (2–4 yrs)', cells: ['₹5–9 LPA', '₹9–18 LPA', '₹60k–2.5L / project'] }
      ],
      questions: questions({
        roles: {
          q: 'Which roles does a Shopify course open?',
          a: 'Shopify developer, e-commerce manager, CRO specialist and Shopify Partner or consultant. A good number of our students use it to launch their own store instead — often for a family manufacturing or trading business that has never sold direct.'
        },
        growth:
          'Store building alone plateaus. What keeps growing is conversion work and marketing: a consultant who can raise a store\'s conversion rate is paid on results rather than on hours.',
        remote:
          'Very. Shopify builds and CRO audits are contracted globally, and the Shopify Partner programme is a genuine route to recurring revenue from Ludhiana.',
        industries:
          'Hosiery, garment and textile units moving into direct-to-consumer selling; bicycle and auto-parts firms building spare-part stores; food, handicraft and home-goods brands; existing e-commerce sellers on marketplaces wanting their own storefront; plus the agencies serving all of them.',
        higher:
          'Not academic, but it is genuinely useful alongside a BBA or MBA — and it is the one course here that can turn into a business rather than a job.'
      })
    }
  }
}

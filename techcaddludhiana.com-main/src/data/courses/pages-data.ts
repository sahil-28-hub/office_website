/* ==================================================================
   Courses dropdown → AI & Data column.

   Five courses here. The other two in that column —
   artificial-intelligence and machine-learning — are also in the AI
   menu and are handled in ./ai-pages.js, so they are not repeated.

   All five already carry long-form Ludhiana copy in their own -copy.js
   files, so what is added here is the layout flag, the search
   metadata, and the salary table with its five questions.
================================================================== */

import { SALARY_MARKETS as MARKETS, salaryQuestions as questions } from './shared'

/* Ludhiana's data market is unusual and worth stating the same way on
   every page in this column: the demand is real but it sits inside
   manufacturing and trade rather than inside software companies. */
const LOCAL_DATA_EMPLOYERS =
  'Manufacturing and auto-component units around Ludhiana and Focal Point running production, quality and maintenance reporting; hosiery and garment exporters on demand and inventory forecasting; retail and distribution chains; hospitals and diagnostic labs; chartered accountancy and finance offices; agri-tech and research work around PAU; and the IT services firms in Ludhiana, Mohali and Chandigarh that serve all of them.'

export const PAGES_DATA = {
  /* ---------------------------------------------------------------- */
  'deep-learning': {
    layout: 'full',
    metaTitle: 'Deep Learning Course in Ludhiana — Neural Networks | techcadd',
    metaDescription:
      'Deep learning course in Ludhiana at techcadd — neural networks, CNNs, transformers, computer vision and NLP with PyTorch and TensorFlow.',
    certification: {
      title: 'Get certified in Deep Learning',
      lead:
        'A verifiable techcadd Deep Learning certificate, an internship letter for the project phase, and trained models with their evaluation written up honestly — including the runs that did not work, which is the part a technical panel probes.'
    },
    salary: {
      title: 'What deep learning work pays',
      lead:
        'The highest-paying and narrowest of the data routes. There are few deep learning titles in Punjab; the roles below are mostly won remotely or in the metros.',
      regions: MARKETS,
      rows: [
        { role: 'Deep Learning Engineer', level: 'Entry', cells: ['₹3.5–6.0 LPA', '₹6–14 LPA', '₹50k–1.4L / project'] },
        { role: 'Computer Vision Engineer', level: 'Entry to mid', cells: ['₹3.6–6.5 LPA', '₹7–16 LPA', '₹60k–1.6L / project'] },
        { role: 'NLP Engineer', level: 'Entry to mid', cells: ['₹3.6–6.5 LPA', '₹7–16 LPA', '₹60k–1.6L / project'] },
        { role: 'Senior AI / DL Engineer', level: 'Mid (3–5 yrs)', cells: ['₹7–13 LPA', '₹14–30 LPA', '₹1.5L–4L / project'] }
      ],
      questions: questions({
        roles: {
          q: 'Which roles open after a deep learning course?',
          a: 'Deep learning engineer, computer vision engineer, NLP engineer, applied AI developer and ML platform engineer. Research-titled roles usually want a postgraduate degree as well; the applied roles want models you have trained and can explain.'
        },
        growth:
          'Strong, from a high base, for people who specialise. Vision and NLP diverge quickly — picking one and going deep is worth more after two years than staying across both.',
        remote:
          'Yes, and often internationally. Model work is reviewed on repositories, notebooks and metrics, all of which travel; several of our students take remote contracts for vision work in manufacturing quality control.',
        industries:
          'Locally, computer vision has the clearest use: quality inspection and defect detection in Ludhiana\'s auto-component and textile units. Beyond that, healthcare imaging, agri-tech near PAU, and remote or metro product teams. It is a smaller local market than data analytics and we would rather say so.',
        higher:
          'The most academically transferable course in this column. Trained models with a proper evaluation write-up read directly as research experience for an M.Tech, MS or PhD application.'
      })
    }
  },

  /* ---------------------------------------------------------------- */
  'data-science': {
    layout: 'full',
    metaTitle: 'Data Science Course in Ludhiana — Python & ML | techcadd',
    metaDescription:
      'Data science course in Ludhiana at techcadd — Python, statistics, pandas, SQL, machine learning and visualisation on real datasets.',
    certification: {
      title: 'Get certified in Data Science',
      lead:
        'A verifiable techcadd Data Science certificate, an internship letter for the project phase, and a portfolio of analyses on real datasets — with the reasoning written out, which is what a hiring manager actually reads.'
    },
    salary: {
      title: 'What data science pays in Ludhiana and beyond',
      lead:
        'Data science covers a wide band, from reporting roles that start modestly to modelling roles that pay like engineering. Which end you land on depends on how far past the dashboard you can go.',
      regions: MARKETS,
      rows: [
        { role: 'Data Analyst', level: 'Entry', cells: ['₹2.4–4.5 LPA', '₹4–9 LPA', '₹25k–70k / project'] },
        { role: 'Data Scientist', level: 'Entry to mid', cells: ['₹3.6–6.5 LPA', '₹6.5–15 LPA', '₹50k–1.5L / project'] },
        { role: 'Analytics Engineer', level: 'Entry to mid', cells: ['₹3.5–6.0 LPA', '₹6–13 LPA', '₹45k–1.2L / project'] },
        { role: 'Senior Data Scientist', level: 'Mid (3–5 yrs)', cells: ['₹7–12 LPA', '₹13–28 LPA', '₹1.2L–3.5L / project'] }
      ],
      questions: questions({
        roles: {
          q: 'Which job roles open after a data science course?',
          a: 'Data analyst, data scientist, business intelligence analyst, analytics engineer, product analyst and machine learning engineer. Most careers start at analyst and move across — very few first jobs in Punjab are titled data scientist, and that is normal rather than a setback.'
        },
        growth:
          'The first move is usually analyst to senior analyst or data scientist between 18 and 30 months. What accelerates it is SQL depth and the ability to explain a result to somebody who does not want the method, only the decision.',
        remote:
          'Yes. Analysis is delivered as notebooks, dashboards and written findings, all reviewable remotely. Freelance work from Punjab tends to be forecasting, reporting automation and dashboard builds for small and mid-sized businesses.',
        industries: LOCAL_DATA_EMPLOYERS,
        higher:
          'Very useful for an M.Tech, MCA or a data-science masters abroad. The applied portfolio is the half most applicants from Punjab cannot show, and it transfers straight into a dissertation.'
      })
    }
  },

  /* ---------------------------------------------------------------- */
  'data-analytics': {
    layout: 'full',
    metaTitle: 'Data Analytics Course in Ludhiana — Excel, SQL, BI | techcadd',
    metaDescription:
      'Data analytics course in Ludhiana at techcadd — advanced Excel, SQL, Power BI, statistics and dashboard design on real business data.',
    certification: {
      title: 'Get certified in Data Analytics',
      lead:
        'A verifiable techcadd Data Analytics certificate, an internship letter for the project phase, and dashboards built on real business data that you can walk an interviewer through end to end.'
    },
    salary: {
      title: 'What data analytics pays in Ludhiana',
      lead:
        'The most locally employable course in this column. Ludhiana businesses may not hire data scientists, but a great many of them badly need somebody who can turn their reports into decisions.',
      regions: MARKETS,
      rows: [
        { role: 'Data Analyst', level: 'Entry', cells: ['₹2.2–4.2 LPA', '₹4–9 LPA', '₹20k–65k / project'] },
        { role: 'MIS / Reporting Executive', level: 'Entry', cells: ['₹1.8–3.6 LPA', '₹3–7 LPA', '₹15k–45k / month'] },
        { role: 'Business Analyst', level: 'Entry to mid', cells: ['₹3.0–5.5 LPA', '₹5–11 LPA', '₹30k–90k / project'] },
        { role: 'BI Developer', level: 'Mid (2–4 yrs)', cells: ['₹5–9 LPA', '₹9–18 LPA', '₹70k–1.8L / project'] }
      ],
      questions: questions({
        roles: {
          q: 'Which job roles open after a data analytics course?',
          a: 'Data analyst, business analyst, MIS executive, BI developer and operations analyst. It is also the most common route for somebody already working in accounts, production planning or sales support to move into a data role without changing industry.'
        },
        growth:
          'Steady and reliable. Analysts who add SQL and one BI tool properly move up within two years; those who stay in Excel alone tend not to. That is the single most useful thing to know before you start.',
        remote:
          'Partly. Reporting and dashboard work is contracted remotely, though many local roles are on-site because the data sits inside the business. Freelance dashboard builds for small firms are a realistic side income.',
        industries: LOCAL_DATA_EMPLOYERS,
        higher:
          'A good practical base before an MBA, an M.Com or a data-science programme, and the SQL half carries into almost any technical course.'
      })
    }
  },

  /* ---------------------------------------------------------------- */
  'power-bi': {
    layout: 'full',
    metaTitle: 'Power BI Course in Ludhiana — DAX & Dashboards | techcadd',
    metaDescription:
      'Power BI course in Ludhiana at techcadd — Power Query, data modelling, DAX, dashboard design and publishing, taught on real business data.',
    certification: {
      title: 'Get certified in Power BI',
      lead:
        'A verifiable techcadd Power BI certificate, plus published reports with the data model behind them — which is what separates a candidate who can use Power BI from one who has watched somebody use it.'
    },
    salary: {
      title: 'What Power BI skills pay in Ludhiana',
      lead:
        'Power BI is the fastest of our data courses to turn into a job, because the tool is already installed at most companies that need it and nobody there knows DAX.',
      regions: MARKETS,
      rows: [
        { role: 'Power BI Developer', level: 'Entry', cells: ['₹2.4–4.5 LPA', '₹4–9.5 LPA', '₹25k–75k / project'] },
        { role: 'MIS / Reporting Executive', level: 'Entry', cells: ['₹1.8–3.6 LPA', '₹3–7 LPA', '₹15k–45k / month'] },
        { role: 'BI Analyst', level: 'Entry to mid', cells: ['₹3.0–5.5 LPA', '₹5–11 LPA', '₹30k–90k / project'] },
        { role: 'Analytics Consultant', level: 'Mid (2–4 yrs)', cells: ['₹5.5–10 LPA', '₹10–20 LPA', '₹80k–2L / project'] }
      ],
      questions: questions({
        roles: {
          q: 'Which roles hire for Power BI?',
          a: 'Power BI developer, BI analyst, MIS and reporting executive, data analyst and analytics consultant. It is also the most common upgrade for somebody already doing reporting work in an accounts or production office.'
        },
        growth:
          'Quick at first — the jump from Excel reporting to Power BI reporting is usually worth a revision on its own. Beyond that, growth comes from adding SQL and data modelling rather than from more visuals.',
        remote:
          'Yes, and dashboard builds are one of the easiest freelance contracts to win locally: a fixed scope, a clear deliverable and a client who can see the result immediately.',
        industries: LOCAL_DATA_EMPLOYERS,
        higher:
          'Not academic on its own, but it pairs well with an MBA or M.Com and is a standard expectation in finance and operations coursework now.'
      })
    }
  },

  /* ---------------------------------------------------------------- */
  tableau: {
    layout: 'full',
    metaTitle: 'Tableau Course in Ludhiana — Data Visualisation | techcadd',
    metaDescription:
      'Tableau course in Ludhiana at techcadd — connections, LOD expressions, calculations, dashboards, stories and publishing on real datasets.',
    certification: {
      title: 'Get certified in Tableau',
      lead:
        'A verifiable techcadd Tableau certificate, and a published portfolio of dashboards — the one credential in visualisation work that an interviewer can check in thirty seconds.'
    },
    salary: {
      title: 'What Tableau skills pay',
      lead:
        'Tableau hiring in India concentrates in larger companies and consultancies rather than in small business, which makes the metro and remote columns matter more here than in the Power BI table.',
      regions: MARKETS,
      rows: [
        { role: 'Tableau Developer', level: 'Entry', cells: ['₹2.4–4.5 LPA', '₹4–9.5 LPA', '₹25k–75k / project'] },
        { role: 'Data Visualisation Specialist', level: 'Entry to mid', cells: ['₹3.0–5.5 LPA', '₹5–11 LPA', '₹30k–95k / project'] },
        { role: 'BI Analyst', level: 'Entry to mid', cells: ['₹3.0–5.5 LPA', '₹5–11 LPA', '₹30k–90k / project'] },
        { role: 'Analytics Consultant', level: 'Mid (2–4 yrs)', cells: ['₹5.5–10 LPA', '₹10–20 LPA', '₹80k–2L / project'] }
      ],
      questions: questions({
        roles: {
          q: 'Should I learn Tableau or Power BI?',
          a: 'Power BI if you want the widest local market — most Ludhiana and Punjab employers are already on Microsoft licensing. Tableau if you are aiming at larger enterprises, consultancies or overseas roles, where it is still the standard. Learning one makes the other a weekend, so the choice matters less than it feels.'
        },
        growth:
          'Comparable to Power BI, with a slightly higher ceiling in consultancy work. Growth comes from data modelling and from being trusted with the question, not just the chart.',
        remote:
          'Strongly remote-friendly. Tableau Public makes a portfolio visible without a client, which is an unusually easy way to be found for contract work.',
        industries:
          'Larger manufacturing and export groups around Ludhiana with formal reporting functions, banking and finance operations, healthcare chains, consultancies serving Punjab industry, and remote or metro analytics teams. Smaller firms here more often ask for Power BI.',
        higher:
          'Useful alongside an MBA or a business-analytics programme; the portfolio counts more than the certificate in both.'
      })
    }
  }
}

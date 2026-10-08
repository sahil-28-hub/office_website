/* ==================================================================
   The After 12th dropdown pages.

   The After 12th menu lists nineteen courses, but only ten of them are
   exclusive to it. The other nine — digital marketing, Python, machine
   learning, cybersecurity, generative AI, cloud computing, data
   science, deep learning, ethical hacking — are also in the Courses or
   AI dropdowns and are already handled in ./course-pages.js and
   ./ai-pages.js. They are deliberately NOT touched here: a page cannot
   be two pages, and those nine belong to the dropdown that came first.

   So this file covers the ten that are After 12th and nothing else:

     6 Month Certificates   tally-erp, computer-basics-excel
     Graphics               graphic-designing, video-editing,
                            2d-3d-animation, ui-ux-design
     Civil / Mechanical     autocad, solidworks, 3ds-max, revit

   They get the same long layout as the rest of the site (`layout:
   'full'`), and content written for the audience that actually lands
   on them: someone who has just finished school, is choosing between a
   degree and a skill, and is usually reading the page with a parent
   looking over their shoulder. Every entry therefore carries an
   after-12th narrative block covering the same four questions —
   stream, timetable, money, and what the first year really looks like.

   Three of the ten (autocad, solidworks, 3ds-max) already carry
   long-form Ludhiana copy in their own -copy.js files. Their existing
   narrative is imported and the after-12th block appended to it, so
   nothing that was already written is lost.

   Merged over the seeds in ./index.js.
================================================================== */

import { SALARY_MARKETS as MARKETS, salaryQuestions as questions } from './shared'
import { AUTOCAD_NARRATIVE } from './autocad-copy'
import { SOLIDWORKS_NARRATIVE } from './solidworks-copy'
import { MAX_NARRATIVE } from './3ds-max-copy'

/* ------------------------------------------------------------------
   The after-12th block.

   Four questions, in the order a seventeen-year-old and their parents
   actually ask them. The shape is shared; every answer is written for
   its own course, because "can I do this from a commerce background"
   has a different honest answer for SolidWorks than it does for video
   editing.
------------------------------------------------------------------ */
function after12({ id, title, lead, stream, alongside, money, firstYear, close }) {
  return {
    id,
    slot: 'overview',
    tone: 'tint',
    eyebrow: 'Straight after 12th',
    title,
    lead,
    items: [
      { title: 'Any stream, including yours', text: stream },
      { title: 'It fits around a degree', text: alongside },
      { title: 'The question your parents will ask', text: money },
      { title: 'What the first year actually looks like', text: firstYear }
    ],
    close
  }
}

/* Ludhiana's colleges, named once. Students reading these pages are
   almost always enrolled at, or about to enrol at, one of them. */
const COLLEGES =
  'GNDEC, PAU, SCD Government College, Khalsa College, Government College for Girls, Ramgarhia, PCTE and Gulzar Group'

export const PAGES_AFTER12 = {
  /* ================================================================
     6 Month Certificates
  ================================================================ */
  'tally-erp': {
    layout: 'full',
    metaTitle: 'Tally Course After 12th in Ludhiana — GST | techcadd',
    metaDescription:
      'Tally ERP with GST course after 12th in Ludhiana at techcadd — accounting entries, inventory, payroll, GST returns and reports, on real books. Any stream.',

    overviewTitle: 'The Tally course after 12th in Ludhiana that ends in a job, not a certificate',
    overviewLead:
      'The **Tally course in Ludhiana** at techcadd takes you from a blank company file to filing **GST** returns — ledgers, vouchers, inventory, payroll, TDS, bank reconciliation and the reports an owner actually reads — on books that look like the ones you will be handed on day one.',
    overviewBody: [
      'Ludhiana runs on accounts. Thousands of hosiery units, auto-parts manufacturers, trading houses and wholesale businesses in this city keep their books in Tally, and every one of them needs somebody who can make an entry correctly the first time. It is the least glamorous course techcadd teaches and one of the most reliably employable, particularly straight after 12th.',
      'The course is built around that reality. You work in Tally Prime from the first session, on realistic company data — purchase and sales cycles, GST-inclusive and exclusive entries, e-way bills, stock groups and godowns, salary structures, and the month-end and year-end routines that separate somebody who can use Tally from somebody who can be left alone with the books.',
      'No commerce background is assumed. Students from arts and science streams take this course every batch and finish at the same place, because accounting logic is taught here from the beginning rather than assumed from a 12th-standard syllabus.'
    ],

    valueTitle: 'Every business in this city keeps books. Almost none of them keep them well.',
    valueText:
      'That gap is the entire opportunity. An accounts assistant who does not make the firm re-do its GST filing is worth keeping, and worth paying more the following year.',
    valueStat: { num: '4', label: 'Full accounting cycles', sub: 'entered, reconciled and closed by you' },

    joiners: {
      title: 'Who this Tally course after 12th is for',
      lead:
        'Mostly school leavers and first-year college students, and mostly not from commerce. If you can do the arithmetic on a shop bill, you can do this course.'
    },

    certification: {
      title: 'Get certified in Tally ERP with GST',
      lead:
        'A verifiable techcadd Tally with GST certificate, and a set of completed company files — entered, reconciled and closed by you — which is what a CA firm or an accounts office will actually ask to see.'
    },

    salary: {
      title: 'What accounts work pays in Ludhiana',
      lead:
        'The most locally employable course on this page and the most modest starting salary on it. Both of those are true and you should hear them together.',
      regions: MARKETS,
      rows: [
        { role: 'Accounts Assistant / Tally Operator', level: 'Entry', cells: ['₹1.4–2.4 LPA', '₹1.8–3.6 LPA', '₹6k–15k / month'] },
        { role: 'Accounts Executive', level: 'Entry to mid', cells: ['₹1.8–3.2 LPA', '₹2.4–5 LPA', '₹8k–22k / month'] },
        { role: 'GST Practitioner', level: 'Entry to mid', cells: ['₹2.4–4.2 LPA', '₹3.5–7 LPA', '₹1.5k–5k / return'] },
        { role: 'Accounts Manager', level: 'Mid (3–5 yrs)', cells: ['₹4–7 LPA', '₹6–12 LPA', '₹25k–60k / client / month'] }
      ],
      questions: questions({
        roles: {
          q: 'What job can I get after a Tally course, straight after 12th?',
          a: 'Accounts assistant, Tally operator, billing executive and back-office accounts roles, moving to accounts executive within a year or two. This is one of very few skills where a 12th-pass candidate with real practice is hired over a graduate without it.'
        },
        growth:
          'Slow in the first year and steady after it. What moves it is taking on GST filing and month-end closing rather than staying on data entry — the firm that trusts you with a return pays differently from one that trusts you with a voucher.',
        remote:
          'Partly. Bookkeeping for two or three small firms on a monthly retainer is common and realistic, and it is how a good number of accounts people in Ludhiana double their income. Full-time remote accounts work is rarer.',
        industries:
          'Hosiery and garment units, auto-component and bicycle-parts manufacturers, wholesale and trading houses across the city\'s markets, transport and logistics firms, chartered accountancy practices — Ludhiana has an unusually high number — retail chains, clinics and schools.',
        higher:
          'It pairs naturally with a B.Com or an M.Com and is genuinely useful during a CA or CS articleship, where practical Tally is assumed and rarely actually taught.'
      })
    },

    narrative: [
      after12({
        id: 'tally-after-12th',
        title: 'Starting a Tally course in Ludhiana right after school',
        lead:
          'A **Tally course after 12th** is the shortest route from school to a paid office job in this city. It is worth being clear about both halves of that sentence.',
        stream:
          'Arts, science or commerce — it makes no difference here. Commerce students recognise the vocabulary in week one and everybody else has caught up by week three, because accounting logic is taught from scratch rather than assumed from your board syllabus.',
        alongside: `Most students run this alongside a B.Com, BBA or BA at ${COLLEGES}. Weekday, evening and Sunday batches exist for that, and the course is short enough that finishing it in your first college year is normal.`,
        money:
          'Honestly: accounts starts low. ₹10,000 to ₹18,000 a month is a realistic first offer in Ludhiana, and it moves once you can file returns rather than only pass entries. What it also does is start immediately — this is a skill that pays during a degree rather than after one.',
        firstYear:
          'Entries, billing, reconciliation, and being the person who checks somebody else\'s work. It is repetitive and it is where the judgement comes from. By the end of a year the ones who paid attention are handling GST filing, and that is the step that changes the salary.',
        close:
          'If you want a skill that earns while you study, this is the least risky course on the site. **It is not the highest ceiling, and we would rather say so.**'
      })
    ],

    faqs: [
      {
        q: 'Can I do a Tally course after 12th from a non-commerce stream?',
        a: 'Yes, and many students do. The course teaches accounting from first principles — what a ledger is, why an entry has two sides — before it opens Tally at all. Arts and science students finish at the same standard as commerce students every batch.'
      },
      {
        q: 'How long is the Tally course in Ludhiana and what does it cover?',
        a: '3–4 months across weekday, evening and Sunday batches. It covers company setup, ledgers and vouchers, inventory and godowns, GST including returns and e-way bills, TDS, payroll, bank reconciliation, and month-end and year-end closing.'
      },
      {
        q: 'Do you teach the latest Tally Prime with GST?',
        a: 'Yes. The course runs on current Tally Prime and GST rules, and the GST module is revised each batch because the rules change more often than the software does.'
      },
      {
        q: 'Will I get a job after this course?',
        a: 'Accounts is one of the strongest local hiring markets in Ludhiana and we support you into it with resume help, mock interviews and referrals — but no institute can guarantee employment and we do not. What we can say is that this is the course where the gap between our students and other applicants shows up fastest, because the work is checkable.'
      },
      {
        q: 'Can I start my own accounting practice with this?',
        a: 'In time, yes. Bookkeeping and GST filing for small firms on a monthly retainer is a common second income and a realistic eventual business — several former students run exactly that. It takes a couple of years of employment first to build the judgement and the client trust.'
      }
    ],

    enquireTitle: 'Ask about the Tally course after 12th in Ludhiana',
    enquireText:
      'Just finished 12th and deciding between this and a degree course? Come and sit through a demo class — it is free, and an hour in the software tells you more than any brochure.'
  },

  /* ---------------------------------------------------------------- */
  'computer-basics-excel': {
    layout: 'full',
    metaTitle: 'Computer & MS Excel Course After 12th in Ludhiana | techcadd',
    metaDescription:
      'Computer basics and MS Excel course after 12th in Ludhiana at techcadd — Windows, Word, Excel formulas, pivot tables, charts and reporting for office work.',

    overviewTitle: 'The computer and Excel course after 12th that makes you employable in an office',
    overviewLead:
      'The **computer course in Ludhiana** at techcadd covers what an office actually runs on — Windows and file handling, MS Word, **MS Excel** from formulas to pivot tables and charts, email, internet and the reporting habits that make somebody useful from their first week.',
    overviewBody: [
      'This is the most basic course on the site and, for a large number of students, the most immediately useful. Every office in Ludhiana — a hosiery unit\'s dispatch desk, a transporter\'s billing counter, a clinic\'s front office, a school\'s admin room — runs on Excel, and a startling number of the people operating it were never taught it.',
      'You start from where you are, including from never having used a computer confidently. By the end you can build a working spreadsheet with formulas that do not break, summarise a thousand rows in a pivot table, produce a chart somebody can read in a meeting, and write the email that goes with it. Data entry speed and accuracy are practised deliberately, because that is what the first job is measured on.',
      'It is also the standard preparation for government and bank clerical exams, most of which include a computer-awareness paper and an Excel-shaped practical expectation.'
    ],

    valueTitle: 'Everybody says they know Excel. Almost nobody can build one that survives a month.',
    valueText:
      'The difference is formulas that reference properly, data that is structured before it is formatted, and a sheet somebody else can pick up. That is what this course drills, and it is why the certificate means something in an interview.',
    valueStat: { num: '30+', label: 'Excel functions used properly', sub: 'not memorised — used on real data' },

    joiners: {
      title: 'Who this computer and Excel course after 12th is for',
      lead:
        'School leavers heading into office work, students preparing for bank and government clerical exams, and anyone who has been quietly avoiding the spreadsheet on their desk.'
    },

    certification: {
      title: 'Get certified in Computer Basics & MS Excel',
      lead:
        'A verifiable techcadd computer and Excel certificate, plus the working files — a formula workbook, a pivot report and a dashboard — that let you show an interviewer what you can do instead of describing it.'
    },

    salary: {
      title: 'What office and MIS work pays in Ludhiana',
      lead:
        'The lowest salaries on the site, and the widest door. Nearly every organisation in the city hires for these roles, and almost every other course here starts from being able to do this one.',
      regions: MARKETS,
      rows: [
        { role: 'Data Entry Operator', level: 'Entry', cells: ['₹1.2–2.2 LPA', '₹1.8–3.5 LPA', '₹8k–18k / month'] },
        { role: 'Office / Back Office Executive', level: 'Entry', cells: ['₹1.4–2.6 LPA', '₹2–4 LPA', '—'] },
        { role: 'MIS Executive', level: 'Entry to mid', cells: ['₹2.0–3.6 LPA', '₹3–6 LPA', '₹12k–30k / month'] },
        { role: 'Senior MIS / Operations Executive', level: 'Mid (3–5 yrs)', cells: ['₹3.5–6 LPA', '₹5–10 LPA', '—'] }
      ],
      questions: questions({
        roles: {
          q: 'What job can I get with a computer and Excel course after 12th?',
          a: 'Data entry operator, office and back-office executive, billing and dispatch roles, receptionist-cum-computer operator, and MIS executive once you can build a report rather than only fill one in. These are the jobs most 12th-pass hiring in Ludhiana is actually for.'
        },
        growth:
          'It depends entirely on whether you move from entering data to explaining it. The step from data entry to MIS is the single biggest percentage jump in this table, and it is a skills step rather than a time-served one.',
        remote:
          'Some. Data entry and reporting work is contracted remotely, though rates are low and the market has plenty of people in it. Treat it as a supplement rather than a plan.',
        industries:
          'Effectively every employer in Ludhiana: manufacturing and export units, transport and logistics, wholesale and retail trade, hospitals and clinics, schools and coaching institutes, government offices, banks, and every professional practice in the city.',
        higher:
          'It is direct preparation for the computer-awareness paper in bank and government clerical exams, and it removes the single most common obstacle in every other course we teach.'
      })
    },

    narrative: [
      after12({
        id: 'basics-after-12th',
        title: 'A computer course after 12th in Ludhiana, without pretending it is more than it is',
        lead:
          'This course does one thing well: it makes you employable in an ordinary office quickly. **That is worth a great deal at seventeen and it is not a career on its own.**',
        stream:
          'Any stream, and no prior computer use assumed. A meaningful share of every batch arrives having only ever used a phone, and the first week exists precisely for them.',
        alongside: `It is short enough to finish in a single college semester, and most students run it alongside a first-year degree at ${COLLEGES} or while preparing for a bank or government exam.`,
        money:
          '₹8,000 to ₹15,000 a month is the realistic first offer in Ludhiana, and that is the honest number to give a parent. What this course really buys is time: it gets you into an office and earning while you decide what to specialise in.',
        firstYear:
          'Entry, filing, billing, reports somebody else designed. Watch how the business actually works while you do it — the students who move to MIS within a year are the ones who understood the numbers they were typing.',
        close:
          'Almost everyone who takes this course takes another one within two years — Tally, digital marketing, graphic design. **That is the intended path, not a failure of this one.**'
      })
    ],

    faqs: [
      {
        q: 'I have never used a computer properly. Can I still join?',
        a: 'Yes. The first module assumes nothing — switching on, files and folders, typing, keyboard and mouse confidence. Every batch has students who arrive having only used a phone, and it is a completely normal starting point here.'
      },
      {
        q: 'How long is the computer and Excel course in Ludhiana?',
        a: '2–3 months across weekday, evening and Sunday batches, with a faster track for students who already use a computer and only need Excel.'
      },
      {
        q: 'Does this course help for bank and government exams?',
        a: 'Yes. The computer-awareness syllabus in most clerical and bank exams is covered by this course, and the typing and Excel practice carries into the practical expectations of those jobs.'
      },
      {
        q: 'What exactly is covered in the Excel part?',
        a: 'Formulas and referencing, text and date functions, IF and lookup functions, sorting and filtering, data validation, conditional formatting, pivot tables, charts, printing and page setup, and building a clean report somebody else can use.'
      },
      {
        q: 'Is this enough to get a job, or should I do something more?',
        a: 'It is enough for office and data entry work, which is a real job and a real start. If you want more than that, the usual next step from here is Tally, digital marketing or graphic design — and doing this one first makes all three easier.'
      }
    ],

    enquireTitle: 'Ask about the computer and Excel course in Ludhiana',
    enquireText:
      'Not sure whether to start here or go straight to something bigger? Tell us what you finished school with and what you want in two years, and we will tell you honestly.'
  },

  /* ================================================================
     Graphics
  ================================================================ */
  'graphic-designing': {
    layout: 'full',
    metaTitle: 'Graphic Design Course After 12th in Ludhiana | techcadd',
    metaDescription:
      'Graphic designing course after 12th in Ludhiana at techcadd — Photoshop, Illustrator, InDesign, branding, print and social design, with a real portfolio.',

    overviewTitle: 'The graphic design course after 12th in Ludhiana that builds a portfolio, not a certificate',
    overviewLead:
      'The **graphic design course in Ludhiana** at techcadd covers **Photoshop**, **Illustrator** and InDesign alongside the part most courses skip — typography, layout, colour, brand systems and print production — because software is what you operate and design is what you are hired for.',
    overviewBody: [
      'Ludhiana is a better city for a designer than it looks. It has one of north India\'s larger printing and packaging industries, several hundred hosiery and garment brands that all need labels, tags, catalogues and campaign artwork, an advertising and wedding-media sector that runs year-round, and a growing set of D2C brands selling online. All of them commission design constantly.',
      'The course is built for that market. You work through brand identity, packaging and label design, print-ready artwork with bleed and colour separation, social media systems, and editorial layout — then take real briefs with real constraints, including the ones where the client changes their mind on the fourth version. Every project lands in a portfolio you leave with.',
      'No drawing ability is assumed and no stream matters. What the course asks for is that you look at things properly, which is a habit rather than a talent.'
    ],

    valueTitle: 'Nobody has ever been hired as a designer on a certificate.',
    valueText:
      'They are hired on a portfolio, in about ninety seconds. Everything in this programme is arranged around what that portfolio has in it when you finish.',
    valueStat: { num: '10+', label: 'Portfolio pieces', sub: 'brand, print, packaging and social' },

    joiners: {
      title: 'Who this graphic design course after 12th is for',
      lead:
        'School leavers with an eye and no training, students already in a degree who want a skill that earns alongside it, and anyone who has been making posters on a phone and wants to do it properly.'
    },

    certification: {
      title: 'Get certified in Graphic Designing',
      lead:
        'A techcadd Graphic Designing certificate and an internship letter for the client-brief phase — behind a portfolio of ten or more finished pieces, which is the only thing a studio in this city will actually look at.'
    },

    salary: {
      title: 'What graphic design pays in Ludhiana',
      lead:
        'Studio salaries here start low and freelance rates start high relative to them. Most designers in this city end up doing both, and that is a sensible plan rather than a compromise.',
      regions: MARKETS,
      rows: [
        { role: 'Graphic Designer', level: 'Entry', cells: ['₹1.8–3.4 LPA', '₹3–7 LPA', '₹10k–40k / project'] },
        { role: 'Social Media Designer', level: 'Entry', cells: ['₹1.8–3.2 LPA', '₹2.8–6 LPA', '₹8k–30k / month'] },
        { role: 'Brand Identity Designer', level: 'Entry to mid', cells: ['₹2.6–4.8 LPA', '₹4.5–10 LPA', '₹25k–1L / identity'] },
        { role: 'Senior Designer / Art Director', level: 'Mid (3–5 yrs)', cells: ['₹4.5–8 LPA', '₹8–16 LPA', '₹60k–2L / project'] }
      ],
      questions: questions({
        roles: {
          q: 'What job can I get after a graphic design course after 12th?',
          a: 'Graphic designer, social media designer, DTP and print operator, packaging designer and brand identity designer. Studios and agencies in Ludhiana hire on portfolio rather than on qualification, which is unusually good news at eighteen.'
        },
        growth:
          'Portfolio-driven and fast for people who keep making work. The jump from executing somebody else\'s layout to owning a brand system is where the money changes, and it usually arrives in the second or third year.',
        remote:
          'Very. Design is briefed and delivered as files, and Ludhiana designers hold retainers with clients in Delhi, Mumbai and abroad. Social media design in particular is commonly a monthly retainer rather than per-piece work.',
        industries:
          'Printing and packaging houses, hosiery and garment brands, advertising and wedding-media studios, real estate and property marketing, coaching institutes and schools, restaurants and retail chains, e-commerce and D2C sellers, and the digital agencies serving all of them.',
        higher:
          'Not academic in itself, but the portfolio is what a design-school or animation-degree application is judged on, and it is far stronger evidence than school marks.'
      })
    },

    narrative: [
      after12({
        id: 'graphics-after-12th',
        title: 'Choosing graphic design straight after 12th in Ludhiana',
        lead:
          'Design is one of the few fields where an eighteen-year-old with good work outranks a graduate with none. **That cuts both ways, and it is worth understanding before you enrol.**',
        stream:
          'Any stream, and no drawing ability required. Every batch has arts, commerce and science students in it and nobody can tell them apart by the third project — what separates people here is how carefully they look at things, not what they studied.',
        alongside: `The course runs 4–6 months and most students take it alongside a BA, B.Com, BCA or BBA at ${COLLEGES}. Weekend and evening batches exist for exactly that, and freelance work usually starts before the degree finishes.`,
        money:
          '₹10,000 to ₹18,000 a month is a realistic first studio offer in Ludhiana, and a single logo and stationery project freelance can be ₹8,000 to ₹25,000. Designers who keep both going are earning more than the salary line suggests within a year or two.',
        firstYear:
          'Resizing other people\'s artwork, fixing files for print, and doing the fourth revision of something you did not design. This is normal, everybody starts there, and the ones who also make their own work in the evenings are the ones who move.',
        close:
          'The single thing that decides how this goes is whether you keep building the portfolio after the course ends. **We will tell you that in week one and again at the end.**'
      })
    ],

    faqs: [
      {
        q: 'Can I do a graphic design course after 12th from any stream?',
        a: 'Yes. There is no stream requirement and no drawing test. Arts, commerce and science students take this course in roughly equal numbers and finish at the same standard.'
      },
      {
        q: 'What software will I learn?',
        a: 'Adobe Photoshop, Illustrator and InDesign as the core, plus Figma for screen work, CorelDRAW where local print houses expect it, and the print-production knowledge — bleed, CMYK, resolution, file handover — that decides whether a job comes back from the press correctly.'
      },
      {
        q: 'How long is the graphic designing course in Ludhiana?',
        a: '4–6 months depending on the batch, with weekday, evening and weekend options. The last phase is client briefs, which is when the portfolio stops being exercises.'
      },
      {
        q: 'Do I need my own laptop?',
        a: 'It helps a great deal and it is not required to start. The lab is available outside class hours and a good number of students work there for the first month while they arrange a machine. We will tell you honestly what specification is worth buying.'
      },
      {
        q: 'Can I earn while I am still studying?',
        a: 'Many students do — social media creatives, posters, wedding invitations and small logo jobs are commissioned constantly in Ludhiana. We do not promise it, but the client-brief phase exists partly to make you ready for that conversation.'
      }
    ],

    enquireTitle: 'Ask about the graphic design course after 12th in Ludhiana',
    enquireText:
      'Bring anything you have already made — posters, edits, phone designs, sketches. It is the fastest way for us to tell you where to start.'
  },

  /* ---------------------------------------------------------------- */
  'video-editing': {
    layout: 'full',
    metaTitle: 'Video Editing Course After 12th in Ludhiana | techcadd',
    metaDescription:
      'Video editing course after 12th in Ludhiana at techcadd — Premiere Pro, After Effects, colour, sound, reels and motion graphics, with a showreel built.',

    overviewTitle: 'The video editing course after 12th in Ludhiana that ends in a showreel',
    overviewLead:
      'The **video editing course in Ludhiana** at techcadd covers **Premiere Pro** and **After Effects** end to end — cutting for story, sound, colour, titles, motion graphics, reels and delivery — on real footage with real deadlines rather than on tutorial clips.',
    overviewBody: [
      'Punjab produces an extraordinary amount of video. Wedding cinematography is an industry here, the music and regional film scene is genuinely large, every coaching institute and clinic now runs a YouTube channel, and every brand in Ludhiana needs reels weekly. All of that is edited by somebody, and demand has outrun the number of editors who can actually finish work on time.',
      'The course is built around finishing. You learn the cut first — pacing, rhythm, when to leave a shot alone — then sound design and mixing, colour correction and grading, titles and motion graphics in After Effects, and the export and delivery settings that decide whether a client can actually use the file. Short-form reels and long-form edits are both covered, because the money in this city comes from both.',
      'No background is needed and no stream matters. What the course asks for is patience: editing is the one creative skill where sitting with something for the fourth hour is the actual job.'
    ],

    valueTitle: 'The edit is where a video is actually made.',
    valueText:
      'Anybody can shoot now. What decides whether something is watched to the end is pacing, sound and restraint — which is craft, and craft is teachable.',
    valueStat: { num: '8+', label: 'Finished edits', sub: 'delivered, graded, mixed and exported' },

    joiners: {
      title: 'Who this video editing course after 12th is for',
      lead:
        'School leavers who already edit on a phone and want to do it properly, students looking for a skill that earns alongside a degree, and anyone working in wedding or event media who wants to move from shooting to post.'
    },

    certification: {
      title: 'Get certified in Video Editing',
      lead:
        'A techcadd Video Editing certificate and an internship letter for the client-brief phase — attached to a showreel, which is the only thing anybody hiring an editor actually watches.'
    },

    salary: {
      title: 'What video editing pays in Ludhiana',
      lead:
        'Per-project and retainer work dominates this field locally. The salary columns matter less here than in almost any other course on the site.',
      regions: MARKETS,
      rows: [
        { role: 'Video Editor', level: 'Entry', cells: ['₹1.8–3.6 LPA', '₹3–7 LPA', '₹3k–15k / video'] },
        { role: 'Social Media / Reels Editor', level: 'Entry', cells: ['₹1.8–3.2 LPA', '₹2.8–6 LPA', '₹15k–45k / month'] },
        { role: 'Motion Graphics Artist', level: 'Entry to mid', cells: ['₹2.6–5.0 LPA', '₹4.5–10 LPA', '₹20k–80k / project'] },
        { role: 'Senior Editor / Post Supervisor', level: 'Mid (3–5 yrs)', cells: ['₹4.5–8 LPA', '₹8–16 LPA', '₹60k–2L / project'] }
      ],
      questions: questions({
        roles: {
          q: 'What work can I get after a video editing course?',
          a: 'Video editor, reels and social media editor, wedding and event post-production, motion graphics artist and YouTube channel editor. In Punjab, wedding and event media is the largest and most reliable first market by a distance.'
        },
        growth:
          'Fast for editors who deliver on time, which is rarer than it should be. Adding motion graphics roughly doubles what you can charge, because most editors in this market cannot do it.',
        remote:
          'Almost entirely. Footage arrives on a drive or a link and the edit goes back the same way. Monthly retainers for brands and creators — three to eight reels a week — are the most common steady income here.',
        industries:
          'Wedding and event cinematography studios, the Punjabi music and regional film scene, YouTube creators and coaching institutes, D2C and hosiery brands producing reels, real estate and healthcare marketing, and the agencies serving all of them.',
        higher:
          'Not an academic route, but the showreel is what a film-school or mass-communication application is judged on.'
      })
    },

    narrative: [
      after12({
        id: 'video-after-12th',
        title: 'Video editing straight after 12th, in a state that films everything',
        lead:
          'Punjab is an unusually good place to start editing. **The wedding season alone is a year-round training ground with a client attached.**',
        stream:
          'Any stream. Roughly half of every batch already edits on a phone and arrives with instincts and no craft — that is a good starting point, and the first month is mostly about unlearning the habits that do not scale to a paying client.',
        alongside: `Three to five months, with evening and weekend batches, so it fits around a first-year degree at ${COLLEGES}. Wedding season work is seasonal by nature, which suits a student timetable better than most jobs do.`,
        money:
          'A wedding highlight edit pays ₹3,000 to ₹12,000 in this market and a reels retainer ₹15,000 to ₹40,000 a month. A studio salary starts around ₹12,000. Most editors here earn more from projects than from a job, and that is worth explaining to a parent early.',
        firstYear:
          'Long hours, other people\'s footage, and revisions. You will cut a great deal of wedding and event work, and it is genuinely where speed and instinct come from. Keep two personal pieces going alongside it or the showreel never grows.',
        close:
          'The editors who do well here are the ones who deliver when they said they would. **That is a bigger differentiator in this market than talent.**'
      })
    ],

    faqs: [
      {
        q: 'Do I need a powerful laptop for video editing?',
        a: 'Eventually, yes — and not to start. The lab machines are specified for editing and available outside class hours. We will tell you exactly what to buy and when, rather than letting you spend before you know what you need.'
      },
      {
        q: 'Which software does the course use?',
        a: 'Adobe Premiere Pro as the main editor and After Effects for motion graphics and titles, plus DaVinci Resolve for colour and Audition for sound. CapCut and mobile workflows are covered for short-form because that is what a good share of client work is actually delivered in.'
      },
      {
        q: 'How long is the video editing course in Ludhiana?',
        a: '3–5 months depending on batch, with evening and weekend options. The final phase is client briefs with real deadlines, which is the part that prepares you for wedding and brand work.'
      },
      {
        q: 'Can I do this after 12th with no experience at all?',
        a: 'Yes. About half of each batch has never opened a professional editor. The course starts from the timeline, the cut and the export, and no stream or prior training is assumed.'
      },
      {
        q: 'Is there real work available in Ludhiana for editors?',
        a: 'More than in most creative fields here. Wedding and event media, Punjabi music video production, YouTube channels, coaching institutes and brand reels all commission editing constantly. We do not guarantee placement, but this is one of the busier local markets we teach into.'
      }
    ],

    enquireTitle: 'Ask about the video editing course after 12th in Ludhiana',
    enquireText:
      'Already editing on a phone? Send us something you have cut — we will tell you what to work on and whether you should start at the beginning or halfway through.'
  },

  /* ---------------------------------------------------------------- */
  '2d-3d-animation': {
    layout: 'full',
    metaTitle: '2D & 3D Animation Course After 12th in Ludhiana | techcadd',
    metaDescription:
      '2D and 3D animation course after 12th in Ludhiana at techcadd — animation principles, Blender modelling, rigging, lighting and rendering, plus a showreel.',

    overviewTitle: 'The 2D and 3D animation course after 12th in Ludhiana',
    overviewLead:
      'The **animation course in Ludhiana** at techcadd runs from the twelve principles of animation through **2D character work** to **Blender** modelling, texturing, rigging, lighting and rendering — the full pipeline, ending in a showreel you can send anywhere.',
    overviewBody: [
      'Animation is the longest and most demanding course in this column, and the one with the least local employment and the widest reach. There is real animation work in Ludhiana — explainer videos for brands, product visualisation for manufacturers, motion graphics for agencies, title and effects work for the Punjabi media scene — but the larger market is remote and studio work in Mumbai, Pune, Hyderabad and Bengaluru, and abroad.',
      'The course is built accordingly. You learn the principles first because they are what separates animation from movement, then 2D character animation, then the 3D pipeline in Blender end to end — modelling, UVs and texturing, rigging, animation, lighting, shading and rendering. Every stage ends in a finished piece rather than a saved file, because a showreel is the qualification in this field.',
      'It asks for patience and hours more than talent. Six to eight months is a real commitment at eighteen and it is fair to say so before anyone enrols.'
    ],

    valueTitle: 'A showreel is the degree in this field.',
    valueText:
      'Studios do not read certificates, they watch ninety seconds. Everything in this programme is arranged around what is in those ninety seconds when you finish.',
    valueStat: { num: '90s', label: 'Showreel you leave with', sub: '2D, 3D, modelling and motion' },

    joiners: {
      title: 'Who this animation course after 12th is for',
      lead:
        'School leavers who want the craft rather than a quick skill, and who understand that this is the longest course on this page. No drawing ability assumed; a great deal of patience assumed.'
    },

    certification: {
      title: 'Get certified in 2D / 3D Animation',
      lead:
        'A techcadd Animation certificate and an internship letter for the project phase, behind the thing that actually matters — a finished showreel with your modelling, rigging and animation work in it.'
    },

    salary: {
      title: 'What animation pays, and where the work is',
      lead:
        'The honest position: local animation work in Ludhiana is thin and the national and remote market is large. Read the second and third columns as the real ones here.',
      regions: MARKETS,
      rows: [
        { role: '2D Animator', level: 'Entry', cells: ['₹2.0–3.6 LPA', '₹3.5–8 LPA', '₹15k–50k / project'] },
        { role: '3D Generalist', level: 'Entry to mid', cells: ['₹2.4–4.5 LPA', '₹4–10 LPA', '₹25k–90k / project'] },
        { role: 'Motion Designer', level: 'Entry to mid', cells: ['₹2.6–5.0 LPA', '₹4.5–11 LPA', '₹20k–80k / project'] },
        { role: 'Senior Animator / Lead', level: 'Mid (3–5 yrs)', cells: ['₹5–9 LPA', '₹9–20 LPA', '₹1L–3L / project'] }
      ],
      questions: questions({
        roles: {
          q: 'Which roles does an animation course lead to?',
          a: '2D animator, 3D generalist, modeller, rigging artist, motion designer and visual effects assistant. Motion design is the most employable of those in Punjab; character animation almost always means a studio elsewhere or remote work.'
        },
        growth:
          'Slow to start, then good, and it follows specialisation. Generalists get the first job; riggers, lighters and character animators build the careers, because those are the roles studios can never fill quickly.',
        remote:
          'Increasingly, yes, and internationally. Modelling, rigging and motion graphics are contracted remotely on a per-asset basis, and a strong reel is the entire application.',
        industries:
          'Locally: agencies making explainer and product videos, manufacturers wanting product visualisation, the Punjabi music and film scene for titles and effects, and architecture studios. Nationally: animation and VFX studios in Mumbai, Pune, Hyderabad and Bengaluru, gaming, and ed-tech.',
        higher:
          'The reel is what an animation degree or a foreign design-school application is assessed on, and this course produces exactly that.'
      })
    },

    narrative: [
      after12({
        id: 'animation-after-12th',
        title: 'Animation after 12th: the honest version',
        lead:
          'This is the longest, hardest and least locally-employable course in this column. **It is also the one with the highest ceiling, and both facts should reach you before you enrol.**',
        stream:
          'Any stream, and no drawing ability required — 3D in particular rewards patience and spatial thinking more than draughtsmanship. What it does require is comfort with sitting on one shot for hours.',
        alongside: `Six to eight months is long enough that most students take it alongside a full degree at ${COLLEGES} rather than instead of one. That is the sensible arrangement here: a degree as the fallback, the reel as the actual qualification.`,
        money:
          'A first animation job in Punjab pays ₹12,000 to ₹20,000 a month and is more likely to be motion graphics than character work. Studio roles elsewhere and remote per-asset work pay considerably more. Anyone promising a large local animation salary at entry is not being straight with you.',
        firstYear:
          'Cleanup, in-betweens, simple modelling and other people\'s corrections. Every animator\'s first year looks like this. What decides the second year is whether the personal reel kept growing while you did it.',
        close:
          'Take this course if the craft interests you enough to do it in the evenings anyway. **If you want the shortest route to a salary, graphic design or video editing is the more honest answer.**'
      })
    ],

    faqs: [
      {
        q: 'Can I join an animation course after 12th with no drawing skill?',
        a: 'Yes, particularly for the 3D half. Modelling, rigging, lighting and rendering are technical crafts and reward patience over draughtsmanship. The 2D module teaches the drawing you need for animation specifically, which is a much narrower skill than general illustration.'
      },
      {
        q: 'Which software does the course use?',
        a: 'Blender for the full 3D pipeline, After Effects for motion graphics and compositing, and 2D animation tooling for the character work. Blender is used deliberately because it is free — you can keep practising at home from day one without a licence.'
      },
      {
        q: 'How long is the animation course in Ludhiana?',
        a: '6–8 months, the longest programme in this column. The pipeline genuinely takes that long to cover properly, and the final phase is the showreel.'
      },
      {
        q: 'Are there animation jobs in Ludhiana?',
        a: 'Some — explainer and product video work, motion graphics for agencies, titles and effects for the regional media scene. The larger market is studios in Mumbai, Pune, Hyderabad and Bengaluru, plus remote per-asset work. We would rather say that plainly than imply a local studio scene that is not here.'
      },
      {
        q: 'Should I do this or graphic design?',
        a: 'Graphic design if you want to be earning within months and locally. Animation if the craft itself pulls at you and you can commit to a longer run with a wider job search at the end. Counsellors will give you the same answer in person.'
      }
    ],

    enquireTitle: 'Ask about the animation course after 12th in Ludhiana',
    enquireText:
      'This is a long course and we would rather you enrol with your eyes open. Come and see the lab, talk to a current batch, then decide.'
  },

  /* ---------------------------------------------------------------- */
  'ui-ux-design': {
    layout: 'full',
    metaTitle: 'UI/UX Design Course After 12th in Ludhiana | techcadd',
    metaDescription:
      'UI/UX design course after 12th in Ludhiana at techcadd — user research, wireframes, Figma, prototyping, design systems and real written case studies.',

    overviewTitle: 'The UI/UX design course after 12th in Ludhiana, taught as a design process',
    overviewLead:
      'The **UI/UX design course in Ludhiana** at techcadd covers the whole process — research, user flows, wireframes, **Figma** interfaces, prototyping, design systems, usability testing and handover to developers — because a screen that looks good and cannot be used is not design.',
    overviewBody: [
      'UI/UX is the best-paid design discipline in India and the one with the clearest route out of a small city, because the work is judged entirely on case studies and almost all of it can be done remotely. It is also the design course with the most competition, which is why this one spends as much time on reasoning as on visuals.',
      'You work through user research and problem framing, information architecture and flows, wireframing, visual design in Figma, component libraries and design systems, interactive prototyping, usability testing with real people, and developer handover. Each project is written up as a case study — the problem, what you tried, what testing showed, what changed — because that write-up is what a hiring designer reads first.',
      'No coding is required, though the handover module will teach you enough about how interfaces are built to design things that can actually be made.'
    ],

    valueTitle: 'A portfolio of screens gets you nothing. A portfolio of decisions gets you hired.',
    valueText:
      'Every reviewer asks the same question about every screen: why is it like that. The case-study discipline in this course exists so that you always have an answer.',
    valueStat: { num: '4', label: 'Full case studies', sub: 'research, testing and the reasoning written out' },

    joiners: {
      title: 'Who this UI/UX course after 12th is for',
      lead:
        'School leavers heading towards product design, students in a BCA or B.Tech who want the design half, and graphic designers moving from print into screens. No stream requirement, no coding.'
    },

    certification: {
      title: 'Get certified in UI/UX Design',
      lead:
        'A techcadd UI/UX certificate and an internship letter for the live-brief phase, behind four written-up case studies — which is the portfolio format every product team in India actually asks for.'
    },

    salary: {
      title: 'What UI/UX design pays',
      lead:
        'The best-paid design track we teach, and the one least dependent on where you live. Very little of this hiring happens in Ludhiana itself and almost none of it needs to.',
      regions: MARKETS,
      rows: [
        { role: 'UI Designer', level: 'Entry', cells: ['₹2.4–4.5 LPA', '₹4–9 LPA', '₹20k–70k / project'] },
        { role: 'UX Designer', level: 'Entry to mid', cells: ['₹3.0–5.5 LPA', '₹5–12 LPA', '₹30k–1L / project'] },
        { role: 'Product Designer', level: 'Entry to mid', cells: ['₹3.6–6.5 LPA', '₹6–14 LPA', '₹40k–1.4L / project'] },
        { role: 'Senior / Lead Designer', level: 'Mid (3–5 yrs)', cells: ['₹6–11 LPA', '₹12–24 LPA', '₹1L–3L / project'] }
      ],
      questions: questions({
        roles: {
          q: 'Which roles does a UI/UX course open?',
          a: 'UI designer, UX designer, product designer, design systems designer and UX researcher. Product designer — where one person owns research through to interface — is the most common title in Indian startups and the one this course is aimed at.'
        },
        growth:
          'Among the fastest of any design field. Designers who can defend decisions with research and testing move to senior roles in three to four years, because that skill is much rarer than visual ability.',
        remote:
          'Almost completely. Product design is reviewed on a portfolio site and conducted over calls and Figma. This is the design course where a Ludhiana address genuinely stops being relevant.',
        industries:
          'Startups and software firms in Mohali, Chandigarh and NCR, agencies in Ludhiana building client products, e-commerce and D2C brands, ed-tech and healthcare platforms, and the remote and international market that takes most of our stronger students.',
        higher:
          'The case studies are strong evidence for a design-school or HCI application, and for any overseas programme that assesses on portfolio rather than marks.'
      })
    },

    narrative: [
      after12({
        id: 'uiux-after-12th',
        title: 'UI/UX after 12th: the design job that does not care where you live',
        lead:
          'Of everything in the After 12th list, this is the course whose ceiling is least limited by being in Ludhiana. **The work is remote by default and judged on case studies.**',
        stream:
          'Any stream, no coding, no drawing. The strongest students in a typical batch come from commerce and arts as often as from science — the discipline is about noticing why something is confusing, which is not a technical instinct.',
        alongside: `Four to six months, so it runs comfortably alongside a first- or second-year degree at ${COLLEGES}. Students already doing a BCA or B.Tech get the most out of it, because they leave able to design what they can also help build.`,
        money:
          '₹18,000 to ₹30,000 a month is a realistic first product-design offer for a strong portfolio, and remote and freelance rates run higher. This is the highest starting range on this page, and the portfolio requirement is correspondingly stricter.',
        firstYear:
          'Screens somebody else specified, component libraries, and a lot of small fixes. Ask why at every opportunity — the designers who move quickly are the ones who understood the product decision behind the ticket.',
        close:
          'Four case studies with real testing in them will do more for you than any certificate on this page. **That is the whole design of this course.**'
      })
    ],

    faqs: [
      {
        q: 'Do I need coding or drawing for a UI/UX course?',
        a: 'Neither. The handover module teaches enough about how interfaces are built to keep your designs buildable, but you will not be writing code, and there is no drawing component at all.'
      },
      {
        q: 'How long is the UI/UX design course in Ludhiana?',
        a: '4–6 months across weekday, evening and weekend batches. The last phase is a live brief with usability testing, which is where the fourth case study comes from.'
      },
      {
        q: 'Which tools does the course use?',
        a: 'Figma throughout — interface design, components, auto layout, prototyping and handover — plus FigJam for research and flows, and a usability testing setup you run with real participants rather than classmates.'
      },
      {
        q: 'Is UI/UX better than graphic design after 12th?',
        a: 'It pays better and is more remote-friendly; graphic design earns locally sooner and has a lower entry bar. If you like solving problems more than making things beautiful, take UI/UX. Both are legitimate answers and a counsellor will not push you either way.'
      },
      {
        q: 'Can I get remote or international work from Ludhiana?',
        a: 'It is the most realistic course here for that, because portfolios and calls are the whole hiring process. It is not automatic — it takes case studies with real research in them, which is exactly what the course is built to produce.'
      }
    ],

    enquireTitle: 'Ask about the UI/UX design course after 12th in Ludhiana',
    enquireText:
      'Tell us the app you find most annoying to use and why. That answer tells us more about whether this course suits you than your marks do.'
  },

  /* ================================================================
     Civil / Mechanical
     autocad, solidworks and 3ds-max already carry long-form Ludhiana
     copy; their existing narrative is imported and the after-12th
     block appended so nothing already written is lost.
  ================================================================ */
  autocad: {
    layout: 'full',
    metaTitle: 'AutoCAD Course After 12th in Ludhiana — 2D & 3D | techcadd',
    metaDescription:
      'AutoCAD course after 12th in Ludhiana at techcadd — 2D drafting, dimensioning, layouts, plotting and 3D modelling for civil and mechanical drawings.',
    certification: {
      title: 'Get certified in AutoCAD',
      lead:
        'A verifiable techcadd AutoCAD certificate and an internship letter for the project phase, behind a folder of complete, dimensioned, plot-ready drawing sets — which is what a design office actually checks.'
    },
    salary: {
      title: 'What CAD drafting pays in Ludhiana',
      lead:
        'One of the strongest local markets on this page. Ludhiana is a manufacturing city and manufacturing runs on drawings.',
      regions: MARKETS,
      rows: [
        { role: 'CAD Draftsman', level: 'Entry', cells: ['₹1.8–3.2 LPA', '₹2.6–5.5 LPA', '₹8k–30k / drawing set'] },
        { role: 'Civil / Mechanical Draftsman', level: 'Entry', cells: ['₹2.0–3.6 LPA', '₹3–6.5 LPA', '₹10k–40k / project'] },
        { role: 'Design Assistant', level: 'Entry to mid', cells: ['₹2.4–4.2 LPA', '₹3.6–8 LPA', '—'] },
        { role: 'Senior Draftsman / CAD Lead', level: 'Mid (3–5 yrs)', cells: ['₹4–7 LPA', '₹6.5–13 LPA', '₹40k–1.2L / project'] }
      ],
      questions: questions({
        roles: {
          q: 'What job can I get after an AutoCAD course after 12th?',
          a: 'CAD draftsman, civil or mechanical draftsman, design assistant and detailing engineer. In Ludhiana this is one of the few technical skills where a 12th-pass candidate with a good drawing folder is hired ahead of a graduate without one.'
        },
        growth:
          'Steady, and it accelerates sharply if you add SolidWorks or Revit. A draftsman who can also model in 3D moves out of the drawing office and into design, which is where the pay changes.',
        remote:
          'Partly. Drawing work is contracted remotely — detailing, conversions, as-built sets — though most local roles are on-site because the drawings are discussed with the shop floor.',
        industries:
          'Auto-component, bicycle-parts and machine-tool manufacturers across Focal Point and the industrial belt, agricultural machinery makers, fabrication and sheet-metal units, architects and interior designers, builders and structural consultants, and the government and PSU offices that hire draftsmen.',
        higher:
          'It complements a diploma or a B.Tech in civil or mechanical directly, and a great many students take it during one. Drawing skill is assumed in those degrees and is rarely taught properly inside them.'
      })
    },
    narrative: [
      ...AUTOCAD_NARRATIVE,
      after12({
        id: 'autocad-after-12th',
        title: 'AutoCAD straight after 12th in a manufacturing city',
        lead:
          'Ludhiana makes things, and everything it makes was drawn first. **That is why this is one of the most locally employable courses on the site.**',
        stream:
          'Non-medical and technical students find the first module familiar, but arts and commerce students take this course every batch and do fine — drafting is a precision skill, not a mathematics one, and the geometry you need is taught here.',
        alongside: `It runs comfortably alongside a diploma or a B.Tech at ${COLLEGES}, and a great many students take it in parallel because the degrees assume drawing ability and rarely teach it properly.`,
        money:
          '₹12,000 to ₹20,000 a month is a realistic first draftsman offer in the Ludhiana industrial belt, and it moves once you can produce a complete set without correction. Adding SolidWorks or Revit afterwards is what takes it past ₹30,000.',
        firstYear:
          'Detailing, revisions and converting somebody else\'s sketches into proper drawings. Learn how the parts are actually made while you do it — the draftsmen who become designers are the ones who spent time on the shop floor.',
        close:
          'This is the shortest route from school to a technical job in this city. **Pair it with SolidWorks or Revit within two years and it stops being a drawing job.**'
      })
    ]
  },

  /* ---------------------------------------------------------------- */
  solidworks: {
    layout: 'full',
    metaTitle: 'SolidWorks Course After 12th in Ludhiana — 3D CAD | techcadd',
    metaDescription:
      'SolidWorks course after 12th in Ludhiana at techcadd — part modelling, assemblies, drawings, sheet metal and simulation basics for mechanical design.',
    certification: {
      title: 'Get certified in SolidWorks',
      lead:
        'A verifiable techcadd SolidWorks certificate and an internship letter for the project phase, behind modelled parts, working assemblies and manufacturing drawings you produced yourself.'
    },
    salary: {
      title: 'What mechanical design pays in Ludhiana',
      lead:
        'Ludhiana designs and manufactures components for the whole country. This is the CAD skill that puts you on the design side of that rather than the drawing side.',
      regions: MARKETS,
      rows: [
        { role: 'CAD Engineer', level: 'Entry', cells: ['₹2.2–4.0 LPA', '₹3.5–7.5 LPA', '₹15k–50k / project'] },
        { role: 'Mechanical Design Engineer', level: 'Entry to mid', cells: ['₹2.8–5.0 LPA', '₹4.5–10 LPA', '₹25k–90k / project'] },
        { role: 'Product Design Engineer', level: 'Entry to mid', cells: ['₹3.0–5.5 LPA', '₹5–11 LPA', '₹30k–1L / project'] },
        { role: 'Senior Design Engineer', level: 'Mid (3–5 yrs)', cells: ['₹5–9 LPA', '₹9–18 LPA', '₹80k–2.5L / project'] }
      ],
      questions: questions({
        roles: {
          q: 'Which roles does a SolidWorks course open?',
          a: 'CAD engineer, mechanical design engineer, product design engineer and design analyst. Note that most design-engineer titles expect a diploma or degree alongside the software — after 12th, this course typically leads into a CAD engineer role first.'
        },
        growth:
          'Good, and it compounds with domain knowledge. A designer who understands how the part is manufactured — and in Ludhiana you can walk into the factory and find out — is worth considerably more than one who only models.',
        remote:
          'Partly. Modelling and detailing are contracted remotely, but design work usually stays close to production because the conversations happen beside the machine.',
        industries:
          'Auto-component and bicycle-parts manufacturers, machine-tool and agricultural machinery makers, fabrication and tooling units, sheet-metal and die shops, and the product companies in Ludhiana, Mohali and Chandigarh that design rather than only produce.',
        higher:
          'Directly relevant to a mechanical diploma or B.Tech, and modelled assemblies make a considerably stronger project portfolio than a report does.'
      })
    },
    narrative: [
      ...SOLIDWORKS_NARRATIVE,
      after12({
        id: 'solidworks-after-12th',
        title: 'SolidWorks after 12th, next door to the factories that use it',
        lead:
          'Very few cities let a student walk from the classroom into a plant that manufactures the part they just modelled. **Ludhiana is one of them.**',
        stream:
          'A non-medical background helps and is not required — the geometry and mechanics you need are taught here. What matters more is being interested in how objects are actually made.',
        alongside: `Most students take it during a mechanical diploma or B.Tech at ${COLLEGES}, or immediately after 12th while deciding on a degree. Evening and weekend batches exist for both.`,
        money:
          '₹15,000 to ₹25,000 a month is a realistic first CAD engineer offer in the local industrial belt, higher than AutoCAD alone. Be aware that most design-engineer roles also want a diploma or degree, so the sensible plan is this course alongside one.',
        firstYear:
          'Modelling existing parts, building assemblies from somebody else\'s drawings, and producing manufacturing drawings. Go and see the parts being made — the design engineers here who progressed fastest are the ones the shop floor knows by name.',
        close:
          'AutoCAD gets you into the drawing office. **SolidWorks is what gets you out of it.**'
      })
    ]
  },

  /* ---------------------------------------------------------------- */
  '3ds-max': {
    layout: 'full',
    metaTitle: '3ds Max Course After 12th in Ludhiana | techcadd',
    metaDescription:
      '3ds Max course after 12th in Ludhiana at techcadd — modelling, materials, lighting and V-Ray rendering for architectural and interior visualisation.',
    certification: {
      title: 'Get certified in 3ds Max',
      lead:
        'A techcadd 3ds Max certificate and an internship letter for the project phase, behind a render portfolio — which is the entire hiring conversation in visualisation work.'
    },
    salary: {
      title: 'What architectural visualisation pays',
      lead:
        'Per-render and per-project work dominates this field. Ludhiana\'s builders, architects and interior designers commission it constantly, and the freelance column is where most visualisers actually earn.',
      regions: MARKETS,
      rows: [
        { role: '3D Visualiser', level: 'Entry', cells: ['₹1.8–3.4 LPA', '₹3–7 LPA', '₹3k–15k / render'] },
        { role: 'Architectural Visualiser', level: 'Entry to mid', cells: ['₹2.4–4.5 LPA', '₹4–9 LPA', '₹8k–40k / view'] },
        { role: 'Interior Design Visualiser', level: 'Entry to mid', cells: ['₹2.4–4.5 LPA', '₹4–9 LPA', '₹10k–50k / project'] },
        { role: 'Senior Visualiser / Studio Lead', level: 'Mid (3–5 yrs)', cells: ['₹4.5–8 LPA', '₹8–16 LPA', '₹60k–2L / project'] }
      ],
      questions: questions({
        roles: {
          q: 'Which roles does a 3ds Max course open?',
          a: '3D visualiser, architectural and interior visualiser, 3D modeller and walkthrough artist. Architects, interior designers and property developers are the clients, and in this city most of them buy visualisation per project rather than employing somebody full time.'
        },
        growth:
          'Driven almost entirely by portfolio quality. Lighting is what separates a render that sells a flat from one that does not, and visualisers who master it set their own rates within a few years.',
        remote:
          'Very. A floor plan arrives by email and renders go back the same way. Visualisers in Ludhiana routinely work for architects in other cities and abroad.',
        industries:
          'Architecture and interior design practices, property developers and builders across Ludhiana, real estate marketing agencies, furniture and modular kitchen manufacturers, exhibition and retail fit-out firms, and manufacturers needing product visualisation.',
        higher:
          'Useful alongside an architecture or interior design degree, and the render portfolio is what those courses assess project work on anyway.'
      })
    },
    narrative: [
      ...MAX_NARRATIVE,
      after12({
        id: 'max-after-12th',
        title: '3ds Max after 12th, in a city that is still building',
        lead:
          'Every new project in Ludhiana is sold from a render before it is built. **Somebody makes those, and there are not many of them here.**',
        stream:
          'Any stream. Architecture and interior students have a head start on reading plans, and everybody else picks that up in the first module — the skill that actually decides your work is lighting, which nobody arrives knowing.',
        alongside: `Two to three months, the shortest course in this column, so it fits easily alongside a degree at ${COLLEGES} or after an AutoCAD course as a natural next step.`,
        money:
          'A single exterior view pays ₹3,000 to ₹15,000 in this market and a full project set considerably more. A studio salary starts around ₹12,000 to ₹18,000. Most visualisers here earn more from projects than from a job within a year or two.',
        firstYear:
          'Modelling from other people\'s plans, material libraries and long render queues. Study how light behaves in real rooms while you do it — that, rather than software knowledge, is what separates the portfolios that get commissioned.',
        close:
          'Pair it with AutoCAD and you can take a project from plan to render on your own. **That combination is what local architects actually want to hire.**'
      })
    ]
  },

  /* ---------------------------------------------------------------- */
  revit: {
    layout: 'full',
    metaTitle: 'Revit Course After 12th in Ludhiana — BIM | techcadd',
    metaDescription:
      'Revit course after 12th in Ludhiana at techcadd — BIM modelling, families, views, schedules, sheets and coordination, on a real building project.',

    overviewTitle: 'The Revit course after 12th in Ludhiana, taught as BIM rather than as drawing',
    overviewLead:
      'The **Revit course in Ludhiana** at techcadd teaches **BIM** properly — a building modelled once, with plans, sections, elevations, schedules and sheets all generated from that model and all updating together — which is why the industry moved to it and why drafting habits have to be unlearned.',
    overviewBody: [
      'Revit is not AutoCAD with 3D added. It is a different way of working: you model walls, floors, roofs, doors and structure as real building elements with properties, and every drawing you issue is a view of that model rather than a separate file somebody has to remember to update. Coordination stops being a checking exercise and becomes something the model does for you.',
      'The course covers levels and grids, walls, floors, roofs and ceilings, doors and windows, families and parameters, stairs and railings, structural elements, views and view templates, schedules and quantities, sheets and title blocks, and the coordination workflow between architecture and structure. You produce a complete set for a real building rather than a set of exercises.',
      'It is the natural second course after AutoCAD and increasingly a first one. Practices in Punjab that have moved to BIM cannot fill Revit roles, and the ones that have not are being pushed there by clients who ask for a model.'
    ],

    valueTitle: 'Draw a building once. Issue it a hundred ways.',
    valueText:
      'That is the whole argument for BIM, and it is why practices that switch do not go back — and why a modeller who understands it is worth more than a draftsman who is faster.',
    valueStat: { num: '1', label: 'Model, fully coordinated', sub: 'plans, sections, schedules and sheets from it' },

    joiners: {
      title: 'Who this Revit course after 12th is for',
      lead:
        'School leavers heading into architecture or civil work, diploma and B.Tech students who already have AutoCAD, and draftsmen whose offices are moving to BIM.'
    },

    certification: {
      title: 'Get certified in Revit',
      lead:
        'A techcadd Revit certificate and an internship letter for the project phase, behind a complete coordinated model with its drawing set and schedules — which is what a BIM office will ask you to open in the interview.'
    },

    salary: {
      title: 'What BIM and Revit work pays',
      lead:
        'Revit pays better than AutoCAD at every level, for one reason: far fewer people in Punjab can actually do it.',
      regions: MARKETS,
      rows: [
        { role: 'BIM Modeller', level: 'Entry', cells: ['₹2.2–4.0 LPA', '₹3.5–8 LPA', '₹15k–60k / project'] },
        { role: 'Revit Architect / Draftsman', level: 'Entry to mid', cells: ['₹2.6–4.8 LPA', '₹4–9 LPA', '₹20k–80k / project'] },
        { role: 'Structural Modeller', level: 'Entry to mid', cells: ['₹2.8–5.0 LPA', '₹4.5–10 LPA', '₹25k–90k / project'] },
        { role: 'BIM Coordinator', level: 'Mid (3–5 yrs)', cells: ['₹5–9 LPA', '₹9–20 LPA', '₹1L–3L / project'] }
      ],
      questions: questions({
        roles: {
          q: 'Which roles does a Revit course open?',
          a: 'BIM modeller, Revit architect or draftsman, structural modeller and — with a few years behind it — BIM coordinator. Government and large private projects increasingly require BIM deliverables, which is what is pulling this demand along.'
        },
        growth:
          'Faster than AutoCAD drafting, because the supply is thinner. Coordination is where it goes: a modeller who can run clash detection and manage a federated model is doing a different job at a different rate.',
        remote:
          'Yes, and it is one of the better remote markets in this column. BIM modelling is contracted internationally — UK, Gulf and Australian practices outsource it steadily — and it is reviewed on the model file itself.',
        industries:
          'Architecture practices and structural consultants in Ludhiana and Chandigarh, property developers and large builders, government infrastructure projects, MEP consultants, and the international BIM outsourcing market.',
        higher:
          'Directly relevant to architecture and civil degrees, and a coordinated model is far stronger project evidence than a drawing set.'
      })
    },

    narrative: [
      after12({
        id: 'revit-after-12th',
        title: 'Revit after 12th: the CAD skill with the least competition',
        lead:
          'There are hundreds of AutoCAD draftsmen in Ludhiana and comparatively few Revit modellers. **That imbalance is the whole opportunity here.**',
        stream:
          'Any stream, though an interest in buildings is close to essential. Non-medical and technical students find the first module familiar; everybody else catches up because Revit is about building logic rather than mathematics.',
        alongside: `Two to three months, so it fits alongside an architecture or civil diploma or degree at ${COLLEGES}, and it is commonly taken straight after an AutoCAD course rather than instead of one.`,
        money:
          '₹15,000 to ₹25,000 a month is a realistic first BIM modeller offer, above the AutoCAD equivalent for the same experience. International outsourcing work pays several times that and is genuinely reachable from here with a good model portfolio.',
        firstYear:
          'Modelling from architects\' sketches, building families, and issuing sheets. Learn how the building actually goes together while you do it — coordination is the well-paid part and it is entirely about understanding sequence and clash.',
        close:
          'If you already have AutoCAD, this is the highest-return three months on this page. **If you do not, take AutoCAD first and come back.**'
      })
    ],

    faqs: [
      {
        q: 'Do I need AutoCAD before joining the Revit course?',
        a: 'It helps and it is not required. Students arrive with no CAD background every batch. Be aware that AutoCAD habits sometimes have to be unlearned — Revit is modelling, not drawing, and people who have drafted for years occasionally take longer to adjust than complete beginners.'
      },
      {
        q: 'How long is the Revit course in Ludhiana?',
        a: '2–3 months across weekday, evening and weekend batches. The final phase is a complete coordinated model with its drawing set and schedules.'
      },
      {
        q: 'What is BIM, and why does it matter?',
        a: 'Building Information Modelling means the building exists once as a model with real properties, and every drawing, schedule and quantity comes out of it. It matters because coordination errors and drawing revisions — the two biggest sources of cost on a project — largely stop being manual work.'
      },
      {
        q: 'Is there Revit work in Punjab?',
        a: 'Growing, and short of people. Architecture practices and structural consultants in Ludhiana and Chandigarh are moving to it, government and large private projects increasingly require BIM deliverables, and international outsourcing is a real remote market for modellers here.'
      },
      {
        q: 'Should I take Revit or AutoCAD after 12th?',
        a: 'AutoCAD if you want the widest local drawing-office market immediately. Revit if you want the better-paid and less crowded route and can commit slightly longer to the first job search. Doing both, in that order, is the strongest position — and it is what we usually suggest.'
      }
    ],

    enquireTitle: 'Ask about the Revit course after 12th in Ludhiana',
    enquireText:
      'Already drafting in AutoCAD, or starting from nothing? Either is a fine place to begin — tell us which and we will tell you what the three months will feel like.'
  }
}

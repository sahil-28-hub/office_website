/* ==================================================================
   The AI dropdown pages.

   Eight courses appear in the site's AI menu, and all eight are on
   the long page layout (`layout: 'full'` — see CoursePage.jsx), which
   mounts the toolchain, certification, projects, career-ladder and
   salary sections as well as the standard ones.

   Six of the eight appear ONLY in the AI menu and carried no
   long-form copy of their own, so their entries below are complete
   page rewrites: overview, narrative, value block, FAQs and all. The
   other two — artificial-intelligence and machine-learning — are also
   in the Courses dropdown and already carry full copy in their own
   files (./artificial-intelligence-copy.js,
   ./machine-learning-copy.js), so their entries add only what the
   extra sections need and leave that copy as the single source.

   The twenty-four Courses-dropdown courses that are not in the AI
   menu are handled the same way one file over, in ./course-pages.js.

   Both maps are merged over the seeds in ./index.js. Anything here
   wins over the seed's own value for the same key.

   Copy conventions, inherited from the other -copy.js files here:
     · terms the page targets are marked **like this**; RichText
       renders them inside <strong>. See RichText.jsx.
     · nothing guarantees employment, anywhere, in any wording.
     · salary bands are ranges with a disclaimer attached, drawn from
       what students report and what the placement cell sees. They are
       an indication and are labelled as one.
================================================================== */

import { SALARY_MARKETS, salaryQuestions } from './shared'

/* The eight, in menu order. Exported so anything that needs to know
   which courses are on this layout can ask rather than repeat the
   list. */
export const AI_LAYOUT_SLUGS = [
  'generative-ai',
  'artificial-intelligence',
  'prompt-engineering',
  'chatgpt-ai-tools',
  'agentic-ai',
  'ai-powered-marketing',
  'rag',
  'machine-learning'
]

/* The three markets and the five questions are shared with
   ./course-pages.js — see shared.js. Only the answers are local. */
const MARKETS = SALARY_MARKETS
const questions = salaryQuestions

/* ------------------------------------------------------------------
   1 · Generative AI
------------------------------------------------------------------ */
const GENERATIVE_AI = {
  layout: 'full',

  metaTitle: 'Generative AI Course in Ludhiana — LLMs & RAG | techcadd',
  metaDescription:
    'Generative AI course in Ludhiana at techcadd — LLMs, prompt engineering, embeddings, RAG, agents and deployment, with five applications shipped.',

  overviewTitle: 'The Generative AI course in Ludhiana that ends in shipped applications',
  overviewLead:
    'The **Generative AI course in Ludhiana** at techcadd takes you from your first API call to a deployed application — prompting, structured output, embeddings, **RAG**, agents, evaluation and cost control, taught in the order a working team actually meets them.',
  overviewBody: [
    'Generative AI stopped being a demo skill some time ago. Businesses in and around Ludhiana — export houses, hosiery and auto-parts manufacturers, D2C brands, digital agencies, hospitals and IT services firms — are wiring language models into support desks, catalogue copy, document search and internal tooling. What they cannot find locally is somebody who can build one of those features so it behaves the same way twice.',
    'That is the gap this programme is built against. Every module closes with something that runs: a structured extraction pipeline, a document assistant that cites its sources and refuses to invent an answer, an agent that completes a multi-step task with a human approval step. The **Gen AI training in Ludhiana** market is full of tool tours; this is not one. You will spend more time on evaluation and cost per request than on prompt tricks, because that is what separates a prototype from a feature somebody pays for.',
    'You need working Python and nothing else. No machine learning background is assumed — this course is about building with models, not training them from scratch — and the first module starts from tokens, context windows and what an API call actually costs.'
  ],

  valueTitle: 'Anyone can call an API. Very few can make it behave.',
  valueText:
    'The distance between a Generative AI demo and a Generative AI feature is measured in evaluation, guardrails and cost. That distance is the entire point of this programme, and it is where the roles are.',
  valueStat: { num: '5', label: 'Applications you deploy', sub: 'not notebooks — running, reviewable links' },

  certification: {
    title: 'Get certified in Generative AI',
    lead:
      'You finish with a verifiable techcadd Generative AI certificate, an internship letter for the live-project phase, and — the part that actually gets read — deployed applications with the evaluation numbers beside them.'
  },

  salary: {
    title: 'What Generative AI work pays, and where',
    lead:
      'Indicative ranges for the roles this course opens. Punjab pays less than the metros for the same skills and always has; the third column is why that matters less every year.',
    regions: MARKETS,
    rows: [
      { role: 'AI Application Developer', level: 'Entry', cells: ['₹3.0–5.4 LPA', '₹5.5–11 LPA', '₹35k–90k / project'] },
      { role: 'Generative AI Engineer', level: 'Entry to mid', cells: ['₹3.6–6.5 LPA', '₹7–16 LPA', '₹50k–1.4L / project'] },
      { role: 'Prompt Engineer', level: 'Entry', cells: ['₹2.6–4.8 LPA', '₹4.5–10 LPA', '₹20k–60k / project'] },
      { role: 'LLM Engineer', level: 'Mid (2–4 yrs)', cells: ['₹6–11 LPA', '₹12–26 LPA', '₹1L–3L / project'] }
    ],
    questions: questions({
      roles: {
        q: 'Which job roles open after a Generative AI course?',
        a: 'AI application developer, generative AI engineer, prompt engineer, LLM engineer, AI product specialist and AI consultant. In smaller Ludhiana firms these collapse into one job with all of those in it, which is a fast way to learn and a good first year.'
      },
      growth:
        'The first serious jump usually lands at 18–24 months, and it follows depth rather than time. Students who go deep on retrieval quality and evaluation move faster than those who stay broad, because those are the two things a team cannot verify from a CV and always has to hire for.',
      remote:
        'Yes, and this is the most remote-friendly skill techcadd teaches. A deployed RAG assistant with an evaluation report reads the same from Ludhiana as from Bengaluru, and contract work on AI features is routinely awarded off a portfolio link and a call.',
      industries:
        'Locally: IT services firms on Ferozepur Road and Pakhowal Road, D2C and e-commerce brands, digital agencies, export and hosiery houses automating catalogue and correspondence work, hospitals and diagnostic chains digitising records, and education groups. Beyond that, most of our Generative AI students take remote or Mohali/Chandigarh roles.',
      higher:
        'It helps with the applied half of an M.Tech, MCA or an overseas AI specialisation. Admissions panels and scholarship committees increasingly ask what you have built; deployed applications with measured evaluation answer that better than marks.'
    })
  },

  narrative: [
    {
      id: 'genai-why-ludhiana',
      slot: 'overview',
      tone: 'tint',
      eyebrow: 'Why here, why now',
      title: 'Why learn Generative AI in Ludhiana',
      lead:
        'Ludhiana is an industrial city with a young technical population and, until recently, almost no structured **Generative AI training**. That combination is exactly why the local opportunity is real.',
      items: [
        {
          title: 'The demand arrived before the supply did',
          text: 'Manufacturers, exporters and agencies across Ludhiana are buying AI features — support assistants, document search, catalogue generation — and mostly buying them from outside Punjab. A local engineer who can build and defend that work is scarce enough to be worth hiring on the spot.'
        },
        {
          title: 'You do not have to leave to compete',
          text: 'Remote hiring made the portfolio the qualification. Students from Model Town, Sarabha Nagar, Dugri, BRS Nagar and further out in Khanna, Jagraon and Moga are shortlisted on what they built, and a **deployed RAG application** is the same evidence whichever pincode it was written in.'
        },
        {
          title: 'Timing beats credentials in a new field',
          text: 'There is no ten-year veteran of production LLM work. The field is three years old commercially, which means a serious two-year head start out of Ludhiana is competitive with anyone — and that window is open now rather than permanently.'
        },
        {
          title: 'Batches built around a Punjab timetable',
          text: 'Weekday, weekend, evening and one-to-one batches run at the techcadd centre, so college students from GNDEC, PAU, PCTE and Khalsa, and professionals already working six days, can both actually finish the course rather than start it twice.'
        }
      ],
      close:
        'The honest version: **Generative AI** is not a shortcut to a salary. It is a skill with an unusually short distance between learning it and being paid for it, provided what you finish with runs.'
    },
    {
      id: 'genai-careers-punjab',
      slot: 'careers',
      tone: 'tint',
      eyebrow: 'The local market',
      title: 'Generative AI jobs in Ludhiana and Punjab',
      lead:
        'What the **Generative AI jobs in Ludhiana** market actually looks like, rather than what a national salary survey says about it.',
      items: [
        {
          title: 'The first job is usually broader than the title',
          text: 'A Punjab-based first role in AI tends to be one person owning prompting, retrieval, the small backend around it and the conversation with the business. That is more responsibility than a metro equivalent and considerably more learning per month.'
        },
        {
          title: 'Agencies hire fastest, product teams pay more',
          text: 'Digital agencies serving Ludhiana and Chandigarh clients hire generative AI skills quickest, because every client is now asking for it. Product companies in Mohali and NCR pay more and interview harder — the evaluation and cost work in this course is aimed squarely at that second interview.'
        },
        {
          title: 'Freelance is a real first income here',
          text: 'Document assistants, support copilots and content pipelines are commonly awarded as fixed-scope projects in the ₹35,000 to ₹1.4 lakh range. Several students bill their first project before finishing the course, which is also the fastest way to learn what a client actually checks.'
        },
        {
          title: 'What the interview is actually about',
          text: 'Nobody will ask you to define a transformer. You will be asked why your retrieval returns what it returns, how you know the answer is grounded, and what the thing costs per query. Those three questions are why the syllabus is shaped the way it is.'
        }
      ]
    }
  ],

  faqs: [
    {
      q: 'What is the duration and fee of the Generative AI course in Ludhiana?',
      a: 'The full programme runs 3–4 months across weekday, weekend and fast-track batches. Fees depend on the batch format and any combination with our Python or AI courses — the counsellor gives you the current figure on the call or at the centre, and there is a demo class before you commit to anything.'
    },
    {
      q: 'Do I need to know Python before joining?',
      a: 'You need to be comfortable writing basic Python — functions, loops, dictionaries, reading a file. You do not need machine learning, mathematics or a computer science degree. If Python itself is new, students commonly take our Python course first or run the two together.'
    },
    {
      q: 'Is this course only theory, or do we build real applications?',
      a: 'Five applications, all deployed. A content assistant, a PDF question-answering bot with citations, a structured data extractor, a research agent and a support copilot, plus the capstone — a grounded knowledge assistant with an evaluation suite and a measured cost per query.'
    },
    {
      q: 'Which tools and models does the course use?',
      a: 'Claude and OpenAI APIs, LangChain and LangGraph, Hugging Face for open models and LoRA fine-tuning, FAISS and Pinecone for vector search, LlamaIndex, FastAPI for serving and Streamlit for interfaces. Model providers change; the course teaches the pattern so switching is a config change, not a relearn.'
    },
    {
      q: 'Can working professionals in Ludhiana attend?',
      a: 'Yes. Evening and Sunday batches exist for exactly this, and the project work is yours to schedule. Roughly a third of every Generative AI batch is already working — mostly developers, marketers and analysts adding this to what they do.'
    },
    {
      q: 'Do you provide placement support after the course?',
      a: 'Placement support covers portfolio and resume review, mock technical rounds, aptitude practice and referrals through our hiring network in Ludhiana, Mohali, Chandigarh and remote roles. We do not guarantee employment and will not pretend to — what we can commit to is that your work is interview-ready and that support does not stop the day the batch ends.'
    }
  ],

  enquireTitle: 'Ask about the Generative AI course in Ludhiana',
  enquireText:
    'Batch timings, fees, whether your Python is enough to start, or what the projects actually involve — ask, and you get a straight answer. A free demo class is available before you enrol.'
}

/* ------------------------------------------------------------------
   2 · Artificial Intelligence
   Long-form copy already lives in ./artificial-intelligence-copy.js;
   this adds only what the AI layout's extra sections need.
------------------------------------------------------------------ */
const ARTIFICIAL_INTELLIGENCE = {
  layout: 'full',

  metaTitle: 'Artificial Intelligence Course in Ludhiana | techcadd',
  metaDescription:
    'Artificial Intelligence course in Ludhiana at techcadd — Python, machine learning, deep learning, NLP and Generative AI with real projects.',

  certification: {
    title: 'Get certified in Artificial Intelligence',
    lead:
      'A verifiable techcadd Artificial Intelligence certificate, an internship letter covering the live-project phase, and a portfolio of AI work built on real datasets — the three things an interviewer in Ludhiana or Mohali actually asks to see.'
  },

  salary: {
    title: 'What AI work pays in Ludhiana and beyond',
    lead:
      'Indicative ranges for the roles an **Artificial Intelligence course in Ludhiana** opens — locally, in the metros hiring from Punjab, and on the remote market that now competes with both.',
    regions: MARKETS,
    rows: [
      { role: 'AI / ML Engineer', level: 'Entry', cells: ['₹3.0–5.5 LPA', '₹5–12 LPA', '₹40k–1.1L / project'] },
      { role: 'Data Analyst (AI-assisted)', level: 'Entry', cells: ['₹2.4–4.5 LPA', '₹4–9 LPA', '₹25k–70k / project'] },
      { role: 'AI Developer', level: 'Entry to mid', cells: ['₹3.6–6.5 LPA', '₹6.5–15 LPA', '₹45k–1.3L / project'] },
      { role: 'AI Specialist / Consultant', level: 'Mid (2–4 yrs)', cells: ['₹6–11 LPA', '₹11–24 LPA', '₹90k–2.6L / project'] }
    ],
    questions: questions({
      roles: {
        q: 'Which job roles open after an AI course in Ludhiana?',
        a: 'AI developer, machine learning engineer, data analyst, NLP or computer vision associate, AI specialist and — for students who pair it with the business side — AI consultant. The first role is usually broader here than its title suggests.'
      },
      growth:
        'Most students see the first meaningful revision at 18–24 months, once there is delivered work behind them. What moves it is specialisation: the people who pick one of NLP, vision or applied ML and go deep tend to overtake the ones who stay general.',
      remote:
        'Increasingly, yes. Model work reviews cleanly over a call, and a repository with a clear README and honest metrics travels. Freelance AI work from Punjab is most commonly automation, document processing and dashboard-plus-model builds for small businesses.',
      industries:
        'In and around Ludhiana: IT services and software firms, manufacturing and auto-component units adding predictive maintenance and quality inspection, hosiery and textile exporters on demand forecasting, hospitals and labs, agri-tech around PAU, logistics, and the education sector. Mohali and Chandigarh add the product companies.',
      higher:
        'Strongly. An M.Tech, MCA or an overseas AI/data-science masters all weigh a practical portfolio, and the project work here — with real datasets and written-up results — is the part most applicants from Punjab are missing.'
    })
  }
}

/* ------------------------------------------------------------------
   3 · Prompt Engineering
------------------------------------------------------------------ */
const PROMPT_ENGINEERING = {
  layout: 'full',

  metaTitle: 'Prompt Engineering Course in Ludhiana | techcadd',
  metaDescription:
    'Prompt engineering course in Ludhiana at techcadd — system prompts, structured output, evaluation, guardrails and testing for ChatGPT and Claude.',

  overviewTitle: 'The Prompt Engineering course in Ludhiana that treats prompting as engineering',
  overviewLead:
    'The **prompt engineering course in Ludhiana** at techcadd teaches the discipline behind the prompt — system design, structured output, evaluation sets, guardrails and version control — so your results hold up on the hundredth run, not just the first.',
  overviewBody: [
    'Most prompt advice circulating online is folklore: a list of magic phrases, screenshotted and passed around. It works once, in a demo, and falls apart the moment a real user types something unexpected. Businesses that put a prompt in front of customers discover this within a week.',
    'This course starts from the opposite end. You learn how a model reads an instruction, why a task fails, how to specify output so it can be parsed rather than admired, and how to build a small evaluation set so you can prove one prompt is better than another instead of arguing about it. Guardrails, refusal behaviour, cost per call and prompt versioning are all treated as ordinary engineering concerns, because that is what they are.',
    'It is the shortest route into AI work for people who are not developers. Marketers, analysts, support leads, teachers, content writers and business owners across Ludhiana take this one first — and a good number then continue into the **Generative AI** course once the applications start suggesting themselves.'
  ],

  valueTitle: 'A prompt that works once is a trick. A prompt that always works is a skill.',
  valueText:
    'The difference is measurement. If you cannot show that version B beats version A on a set of real cases, you are not engineering anything — and that measurement is what this programme drills.',
  valueStat: { num: '100+', label: 'Prompts written, tested, broken', sub: 'against evaluation sets you build' },

  certification: {
    title: 'Get certified in Prompt Engineering',
    lead:
      'A techcadd prompt engineering certificate, plus the artefact that carries more weight in a hiring conversation: a tested prompt library with evaluation results, versions and failure cases documented.'
  },

  salary: {
    title: 'What prompt engineering pays, and where it sits',
    lead:
      'Prompt engineering is rarely the whole job title in Punjab. It is more often the skill that upgrades the job you already have — which is exactly how the ranges below should be read.',
    regions: MARKETS,
    rows: [
      { role: 'Prompt Engineer', level: 'Entry', cells: ['₹2.6–4.8 LPA', '₹4.5–10 LPA', '₹20k–60k / project'] },
      { role: 'AI Content Specialist', level: 'Entry', cells: ['₹2.4–4.2 LPA', '₹4–8.5 LPA', '₹18k–55k / month'] },
      { role: 'AI Support / Ops Analyst', level: 'Entry to mid', cells: ['₹3.0–5.2 LPA', '₹5–11 LPA', '₹25k–70k / project'] },
      { role: 'AI Product Associate', level: 'Mid (2–4 yrs)', cells: ['₹5–9 LPA', '₹9–18 LPA', '₹60k–1.6L / project'] }
    ],
    questions: questions({
      roles: {
        q: 'Is prompt engineering a real job, or just a skill?',
        a: 'Both, and mostly the second. Dedicated prompt engineer roles exist in product teams; far more common is a marketer, analyst, support lead or developer whose salary moved because they could make AI output reliable. In Ludhiana the second path is the realistic one, and it is faster.'
      },
      growth:
        'Quickly at first, because the baseline is low — most teams have nobody doing this properly. It plateaus unless you add the surrounding engineering, which is why students who continue into Generative AI or RAG keep climbing while pure prompt work levels off.',
      remote:
        'Very. Prompt and AI-content work is one of the easiest kinds of freelance work to win from Punjab, because the deliverable is text and the review is a call. Agencies and D2C brands are the usual first clients.',
      industries:
        'Digital agencies and marketing teams across Ludhiana, e-commerce and D2C brands, customer-support operations, education and coaching institutes producing material at scale, real-estate and healthcare groups running enquiry desks, and any exporter dealing with correspondence in several languages.',
      higher:
        'It is not an academic subject on its own, but it pairs well with an MBA, a mass-communication degree or a computer applications course — and it is the least intimidating way for a non-technical student to demonstrate real AI competence on an application.'
    })
  },

  narrative: [
    {
      id: 'prompt-who-ludhiana',
      slot: 'overview',
      tone: 'tint',
      eyebrow: 'Who this is really for',
      title: 'Prompt engineering training in Ludhiana, without a coding background',
      lead:
        'This is the one AI course at techcadd where most of the room has never written a line of code, and the syllabus is built that way on purpose.',
      items: [
        {
          title: 'Marketing and content teams',
          text: 'Agencies and brands across Ludhiana are producing ten times the copy they used to and reviewing it badly. **Prompt engineering** is what turns that volume into something with a consistent voice, a checkable structure and a review process.'
        },
        {
          title: 'Support and operations',
          text: 'Enquiry desks, order support and internal helpdesks are the first place a business tries AI and the first place it embarrasses them. The guardrail and refusal work in this course is aimed exactly at that.'
        },
        {
          title: 'Analysts, teachers and business owners',
          text: 'If your work is reading, summarising, drafting or explaining, this course pays for itself in hours before it pays in salary. Several students take it to run their own business better rather than to change jobs.'
        },
        {
          title: 'Developers who want the reliability half',
          text: 'Engineers already calling an API arrive able to make a model answer and leave able to make it answer the same way every time — structured output, evaluation sets, versioning and cost control.'
        }
      ],
      close:
        'No prerequisite beyond comfortable English reading and a laptop. **Everything else is taught from zero.**'
    }
  ],

  faqs: [
    {
      q: 'Do I need programming knowledge for the prompt engineering course?',
      a: 'No. This is the one AI course at techcadd with no coding prerequisite. You need comfortable English reading and a laptop. Developers get more out of the structured-output and evaluation modules, but nothing in the syllabus assumes you are one.'
    },
    {
      q: 'How long is the prompt engineering course in Ludhiana?',
      a: 'It runs 4–8 weeks depending on the batch, and it is the shortest programme in our AI track. Weekend and evening batches exist for working professionals, and there is a fast-track option for teams training together.'
    },
    {
      q: 'Which AI tools will I actually work in?',
      a: 'Claude and ChatGPT primarily, with Gemini and open models for comparison, plus JSON Schema and Pydantic for structured output and a simple evaluation harness you build yourself. The point is transferable technique — every one of these tools will have changed within a year.'
    },
    {
      q: 'Is prompt engineering worth learning if AI models keep improving?',
      a: 'Better models raise the floor, not the ceiling. They make a mediocre prompt acceptable and make the gap between acceptable and reliable more valuable, not less. The parts of this course that last — specification, evaluation, guardrails — are the parts model upgrades do not touch.'
    },
    {
      q: 'Can I combine this with another course?',
      a: 'Most students do. Prompt engineering plus ChatGPT & AI Tools is the common non-technical pairing; prompt engineering into Generative AI or RAG is the developer route. Counsellors will tell you honestly which sequence fits what you already know.'
    }
  ],

  enquireTitle: 'Ask about prompt engineering training in Ludhiana',
  enquireText:
    'Not sure whether to start here or with ChatGPT & AI Tools? Tell us what you do all day and we will tell you which one actually helps — including if the answer is neither.'
}

/* ------------------------------------------------------------------
   4 · ChatGPT & AI Tools
------------------------------------------------------------------ */
const CHATGPT_AI_TOOLS = {
  layout: 'full',

  metaTitle: 'ChatGPT & AI Tools Course in Ludhiana | techcadd',
  metaDescription:
    'ChatGPT and AI tools course in Ludhiana at techcadd — AI writing, image and video tools, automation and workflows for real work. No coding needed.',

  overviewTitle: 'The ChatGPT and AI tools course in Ludhiana for people with actual work to do',
  overviewLead:
    'The **ChatGPT course in Ludhiana** at techcadd is not a tour of features. It is a practical programme that takes the work you already do — writing, reporting, planning, answering, designing — and rebuilds it around AI tools until the hours come down.',
  overviewBody: [
    'Almost everyone has opened ChatGPT. Very few people have changed how they work because of it. The gap is not knowledge of the tool; it is not knowing which parts of your week are worth handing over, how to brief the tool properly, and how to check what comes back before it reaches a customer.',
    'This course works through that on your own tasks. You build reusable prompt templates for the documents you actually produce, connect tools into small automated workflows, use AI image and video tools for real marketing output, and put a review step in front of everything so nothing goes out unchecked. Sessions are hands-on from the first hour and the homework is your own job.',
    'It suits business owners, shopkeepers and traders across Ludhiana, marketing and admin staff, teachers, accountants, students and anybody who has watched somebody else get twice as much done and wants to know how. No coding, no technical background, no maths.'
  ],

  valueTitle: 'The tool is free. Knowing what to hand it is the skill.',
  valueText:
    'Everyone in your market has the same subscription. The advantage is entirely in judgement — which tasks, which brief, which checks — and judgement is what a course can actually teach.',
  valueStat: { num: '20+', label: 'AI tools used properly', sub: 'across writing, image, video, data and automation' },

  certification: {
    title: 'Get certified in ChatGPT & AI Tools',
    lead:
      'A techcadd certificate in practical AI tools, plus a workflow file of your own: the prompt templates, automations and checklists you built during the course, ready to use at work on the Monday after.'
  },

  salary: {
    title: 'What AI tool skills are worth in Ludhiana',
    lead:
      'This course rarely changes your job title. It changes your output, and output is what gets negotiated — so read the ranges below as the roles this skill upgrades rather than roles it creates.',
    regions: MARKETS,
    rows: [
      { role: 'AI-assisted Content Writer', level: 'Entry', cells: ['₹2.2–4.0 LPA', '₹3.6–8 LPA', '₹15k–50k / month'] },
      { role: 'Digital Marketing Executive', level: 'Entry', cells: ['₹2.4–4.2 LPA', '₹4–9 LPA', '₹18k–55k / month'] },
      { role: 'Operations / Admin Executive', level: 'Entry to mid', cells: ['₹2.4–4.8 LPA', '₹4–9 LPA', '—'] },
      { role: 'AI Trainer / Consultant', level: 'Mid (2–4 yrs)', cells: ['₹4.5–8 LPA', '₹8–16 LPA', '₹1.5k–4k / hour'] }
    ],
    questions: questions({
      roles: {
        q: 'What kind of work does this course lead to?',
        a: 'Content, marketing, operations, admin, sales support and coordination roles — all of them ordinary jobs, done by somebody who is now measurably faster. A smaller number of students go on to train or consult for other local businesses, which is where the hourly rates in the table come from.'
      },
      growth:
        'This is not a course that produces a salary jump on its own. What it produces is the visible output that makes a case for one, usually within a year, and a hard floor under your employability as AI becomes assumed rather than impressive.',
      remote:
        'Content, social media and virtual-assistant work is widely available remotely and AI-tool fluency is now close to a requirement for it. Several students bill Ludhiana businesses for AI setup work part-time while employed elsewhere.',
      industries:
        'Nearly all of them locally, which is unusual: hosiery and garment exporters, bicycle and auto-parts units, retail and wholesale traders, real estate, coaching institutes and schools, clinics, chartered accountancy and legal offices, and every digital agency in the city.',
      higher:
        'Not directly, but it makes every other course easier — including ours. Students who take this first arrive at Prompt Engineering or Digital Marketing already fluent in the tools, and spend their time on the substance instead.'
    })
  },

  narrative: [
    {
      id: 'aitools-ludhiana-business',
      slot: 'careers',
      tone: 'tint',
      eyebrow: 'On the ground',
      title: 'How Ludhiana businesses are actually using AI tools',
      lead:
        'Not the national headlines — the ordinary, unglamorous uses that are already saving people in this city several hours a week.',
      items: [
        {
          title: 'Exporters and manufacturers',
          text: 'Product descriptions and catalogues in several languages, buyer correspondence, quotation drafts, and translating technical specifications for overseas clients. Hosiery and auto-component units on Gill Road and Focal Point were among the earliest adopters here.'
        },
        {
          title: 'Retail, trading and real estate',
          text: 'Listing copy, WhatsApp enquiry responses, follow-up sequences and social media posting handled by one person instead of three, with a review checklist so nothing embarrassing goes out under the firm\'s name.'
        },
        {
          title: 'Institutes, clinics and professional offices',
          text: 'Lesson and test material, patient information sheets, appointment correspondence, first drafts of notices and reports. The review discipline matters most in exactly these settings, and it is taught as part of the workflow rather than as a warning.'
        },
        {
          title: 'Agencies and freelancers',
          text: 'Briefs to drafts to variants in one sitting, image and video generation for campaigns, and reporting written from the numbers rather than around them. This is where the students who go on to consult usually come from.'
        }
      ],
      close:
        'None of this requires code. All of it requires knowing which task to hand over and how to check what comes back — **which is the whole course.**'
    }
  ],

  faqs: [
    {
      q: 'Is this ChatGPT course suitable for non-technical people?',
      a: 'It is designed for them. Business owners, shop and office staff, teachers, accountants, marketers and students with no technical background make up most of every batch. There is no coding, no maths and no jargon that is not explained the first time it appears.'
    },
    {
      q: 'How long is the ChatGPT and AI tools course in Ludhiana?',
      a: '4–6 weeks in the regular batch, with weekend and evening options for working people and a condensed corporate format for teams training together at their own office.'
    },
    {
      q: 'Do I need a paid ChatGPT subscription?',
      a: 'Not to start. A good part of the course runs on free tiers, and we show you where the paid tiers genuinely earn their money and where they do not — so you spend on the one or two tools that fit your work, not on all of them.'
    },
    {
      q: 'What tools are covered besides ChatGPT?',
      a: 'Claude and Gemini for comparison, AI writing and editing tools, image generation, AI video and presentation tools, meeting and transcription assistants, spreadsheet and data helpers, and no-code automation to connect them. Tools change constantly; the selection is reviewed every batch.'
    },
    {
      q: 'Will this help me get a job, or is it only for my current work?',
      a: 'Honestly, mostly the second — it makes you better and faster at work you already do, and it is the cheapest, quickest AI skill to acquire in Ludhiana. Students specifically looking for a new career usually take this alongside Digital Marketing or continue into Prompt Engineering.'
    }
  ],

  enquireTitle: 'Ask about the ChatGPT & AI Tools course in Ludhiana',
  enquireText:
    'Tell us the work you want to speed up — a shop, an export office, a classroom, an agency desk — and we will tell you exactly what this course would change about it.'
}

/* ------------------------------------------------------------------
   5 · Agentic AI
------------------------------------------------------------------ */
const AGENTIC_AI = {
  layout: 'full',

  metaTitle: 'Agentic AI Course in Ludhiana — Build AI Agents | techcadd',
  metaDescription:
    'Agentic AI course in Ludhiana at techcadd — build AI agents with tool use, planning, memory, limits and human approval using Claude and LangGraph.',

  overviewTitle: 'The Agentic AI course in Ludhiana for engineers who want to build systems, not chatbots',
  overviewLead:
    'The **Agentic AI course in Ludhiana** at techcadd covers what happens after a model can answer: tool definitions, agent loops, planning, memory, error recovery, human approval checkpoints and multi-agent patterns that do not quietly destroy something.',
  overviewBody: [
    'An agent is a language model that can act — call your functions, query your database, send your email, update your records. That single change turns every mistake from an embarrassing answer into an actual consequence, which is why this is the most engineering-heavy course in our AI track and why it is not the one to start with.',
    'You will build agents that complete real multi-step work and, more importantly, agents that fail safely: retries with backoff, tool errors handled rather than swallowed, budget and step limits, an audit trail of what was done, and human approval in front of anything irreversible. Multi-agent patterns are taught with their costs stated plainly, because most problems that look like they need five agents need one agent and a better tool.',
    'Prerequisite is real: Python plus some experience calling an LLM API. Take the **Generative AI** course first if either is new — students who skip that step spend this course learning the previous one.'
  ],

  valueTitle: 'The moment an AI can act, "mostly right" stops being good enough.',
  valueText:
    'Everything in this programme follows from that sentence. Approval steps, budgets, audit trails and recovery are not advanced topics here; they are the first week, because they are what makes an agent shippable.',
  valueStat: { num: '4', label: 'Agents built and deployed', sub: 'each with limits, logging and a human in the loop' },

  certification: {
    title: 'Get certified in Agentic AI',
    lead:
      'A techcadd Agentic AI certificate, an internship letter for the live-project phase, and deployed agents with their tool definitions, guardrails and run logs — the evidence a senior engineer will actually read.'
  },

  salary: {
    title: 'What agent engineering pays',
    lead:
      'Agentic work is the highest-paid corner of the AI stack and the smallest. There are few local openings with this exact title; the roles below are the ones this skill wins.',
    regions: MARKETS,
    rows: [
      { role: 'AI Agent Developer', level: 'Entry to mid', cells: ['₹4–7 LPA', '₹8–18 LPA', '₹60k–1.8L / project'] },
      { role: 'Generative AI Engineer', level: 'Entry to mid', cells: ['₹3.6–6.5 LPA', '₹7–16 LPA', '₹50k–1.4L / project'] },
      { role: 'AI Automation Engineer', level: 'Entry to mid', cells: ['₹3.5–6.5 LPA', '₹6.5–14 LPA', '₹45k–1.2L / project'] },
      { role: 'AI Solutions Architect', level: 'Mid (3–5 yrs)', cells: ['₹8–14 LPA', '₹16–32 LPA', '₹2L–5L / project'] }
    ],
    questions: questions({
      roles: {
        q: 'Which roles hire for agent-building skills?',
        a: 'AI agent developer, generative AI engineer, AI automation engineer and, with a few years behind it, AI solutions architect. Job titles in this area are unsettled — most postings describe the work rather than name it, so search by what the role does.'
      },
      growth:
        'Fast, from a high base, for a simple reason: very few engineers can demonstrate an agent that runs unsupervised without a horror story attached. Reliability work is the differentiator and it is what this course spends its time on.',
      remote:
        'Predominantly remote, and often international. Agent work is contracted globally and reviewed on artefacts — repository, run logs, evaluation — which suits an engineer in Ludhiana as well as one anywhere else.',
      industries:
        'Locally the demand comes from IT services firms, logistics and distribution operations around Ludhiana, larger manufacturing groups automating procurement and back-office work, and e-commerce sellers. Product companies in Mohali, Chandigarh, NCR and Bengaluru are the deeper market, and most of it is remote-friendly.',
      higher:
        'It is applied engineering rather than a research subject, but it is unusually strong evidence for a research-track application — an agent with a proper evaluation harness is close to a systems paper in miniature.'
    })
  },

  narrative: [
    {
      id: 'agentic-safety',
      slot: 'syllabus',
      tone: 'paper',
      eyebrow: 'The part most courses skip',
      title: 'Building agents that fail safely',
      lead:
        'Any tutorial can show you an agent that works. This section of the **agentic AI training** is about the far more common case, and it is the reason the course exists.',
      items: [
        {
          title: 'Limits before capabilities',
          text: 'Step budgets, token budgets, wall-clock timeouts and spend caps go in before the agent does anything interesting. An agent without limits is not a prototype, it is a bill.'
        },
        {
          title: 'Human approval on anything irreversible',
          text: 'Sending, paying, deleting, publishing. The approval checkpoint is a design pattern you implement in week one and apply to every project after it.'
        },
        {
          title: 'Tool errors are the normal case',
          text: 'APIs time out, return nonsense and change shape. You learn to hand errors back to the model usefully, retry with backoff, and give up loudly rather than quietly.'
        },
        {
          title: 'An audit trail somebody can read',
          text: 'Every run logs what was decided, which tool was called with what, and what came back. When a client asks why the agent did something at 3am, this is the difference between an answer and an apology.'
        }
      ],
      close:
        'This is also, in practice, the interview. **Senior engineers ask about failure, not features.**'
    }
  ],

  faqs: [
    {
      q: 'What should I know before joining the Agentic AI course?',
      a: 'Python, and some experience calling an LLM API — a script that sends a prompt and handles the response is enough. If either is new, take the Generative AI course first. This is the one course where we will genuinely advise you to wait rather than enrol.'
    },
    {
      q: 'What is the difference between Agentic AI and Generative AI?',
      a: 'Generative AI is about getting a model to produce reliable output. Agentic AI is about letting it act — calling tools, taking multi-step decisions, changing real state. The second is the first plus consequences, which is why the safety, limits and approval work dominates the syllabus.'
    },
    {
      q: 'Which frameworks does the course use?',
      a: 'Claude with native tool use, LangGraph for orchestration, MCP for tool interfaces, plus FastAPI for serving and a logging setup you build yourself. Frameworks in this area turn over fast, so the emphasis is on the loop and the failure modes, which do not.'
    },
    {
      q: 'Are there agent jobs in Ludhiana specifically?',
      a: 'Few with that title today. Most students take this for remote roles, for product companies in Mohali, Chandigarh and NCR, or to be the person at a local IT firm who can build automation nobody else can. We would rather say that plainly than imply a local market that is not there yet.'
    },
    {
      q: 'How long does the course run?',
      a: '2–3 months depending on batch, with the last phase given over to a live project. Because the prerequisite is real, batches are smaller here than in our other AI courses.'
    }
  ],

  enquireTitle: 'Ask about the Agentic AI course in Ludhiana',
  enquireText:
    'Send us what you have already built with an LLM, however small, and we will tell you honestly whether to start here or with Generative AI first.'
}

/* ------------------------------------------------------------------
   6 · AI-Powered Marketing
------------------------------------------------------------------ */
const AI_POWERED_MARKETING = {
  layout: 'full',

  metaTitle: 'AI-Powered Marketing Course in Ludhiana | techcadd',
  metaDescription:
    'AI-powered marketing course in Ludhiana at techcadd — AI for SEO, content, paid ads, creative and analytics, run on live campaigns with real budgets.',

  overviewTitle: 'The AI-powered marketing course in Ludhiana that runs on real campaigns',
  overviewLead:
    'The **AI-powered marketing course in Ludhiana** at techcadd rebuilds the whole marketing workflow around AI — research, **SEO**, content production, ad creative, audience analysis, reporting and automation — and then makes you run it on live campaigns with real money behind them.',
  overviewBody: [
    'Marketing is the function AI changed fastest, and the one where the gap between teams is now widest. One agency produces four campaign variants a week; the agency across the road still produces one. Neither is working harder. The difference is a workflow.',
    'This course builds that workflow. You use AI for keyword and competitor research, brief and produce content at volume without losing a brand voice, generate and test ad creative, write and check the reporting, and automate the repetitive middle of the process. Then you run campaigns — real budgets, real audiences, real numbers reviewed each week — because a marketing course that never spends anything is a writing course.',
    'It suits marketing executives and agency staff in Ludhiana, business owners doing their own marketing, freelancers, and graduates entering the field who would rather start on the current toolset than the one from five years ago. No coding is required at any point.'
  ],

  valueTitle: 'Everyone has the same tools. Almost nobody has the workflow.',
  valueText:
    'The advantage in AI marketing is no longer access — it is knowing the sequence, keeping the brand voice intact at volume, and being able to prove from the numbers that it worked.',
  valueStat: { num: '3', label: 'Live campaigns you run', sub: 'real budget, real audience, weekly review' },

  certification: {
    title: 'Get certified in AI-Powered Marketing',
    lead:
      'A techcadd certificate in AI-powered marketing, an internship letter for the live-campaign phase, and a campaign portfolio with the actual numbers in it — which is the only marketing credential anybody interviews on.'
  },

  salary: {
    title: 'What AI marketing skills pay in Ludhiana',
    lead:
      'Marketing salaries in Punjab are modest at entry and move quickly on demonstrated results. AI fluency mostly affects the speed of that second part.',
    regions: MARKETS,
    rows: [
      { role: 'Digital Marketing Executive', level: 'Entry', cells: ['₹2.4–4.2 LPA', '₹4–9 LPA', '₹18k–55k / month'] },
      { role: 'AI Content & SEO Specialist', level: 'Entry to mid', cells: ['₹3.0–5.5 LPA', '₹5–11 LPA', '₹25k–80k / month'] },
      { role: 'Performance Marketer', level: 'Entry to mid', cells: ['₹3.2–6.0 LPA', '₹6–14 LPA', '10–18% of ad spend'] },
      { role: 'Marketing Manager', level: 'Mid (3–5 yrs)', cells: ['₹5.5–10 LPA', '₹10–22 LPA', '₹1L–3L / retainer'] }
    ],
    questions: questions({
      roles: {
        q: 'Which marketing roles does this course open?',
        a: 'Digital marketing executive, SEO and content specialist, performance marketer, social media manager, and marketing manager with a few years behind it. Every one of those is now assumed to be AI-fluent, which is precisely why the course exists.'
      },
      growth:
        'Faster than most fields, because marketing results are measurable. A portfolio showing you cut cost per lead or tripled content output with the numbers attached moves a salary conversation in a way that a certificate never has.',
      remote:
        'Extremely. Content, SEO and paid-ads work is contracted remotely at scale, and freelance retainers from Ludhiana to clients in Delhi, Mumbai and abroad are common. Performance marketers are frequently paid as a percentage of managed ad spend.',
      industries:
        'Everything in Ludhiana sells something: hosiery and garment exporters, bicycle and auto-parts firms, retail chains, real estate, healthcare and diagnostics, education and coaching institutes, restaurants and hospitality, plus the agencies serving all of them. This is the broadest local market of any course in our AI track.',
      higher:
        'Pairs naturally with an MBA in marketing or a mass-communication degree, and the live-campaign portfolio is unusually persuasive in an admissions interview — most applicants have coursework, not results.'
    })
  },

  narrative: [
    {
      id: 'aim-workflow',
      slot: 'overview',
      tone: 'tint',
      eyebrow: 'The working week',
      title: 'What an AI marketing workflow actually looks like',
      lead:
        'Less impressive and more useful than the demos suggest. This is the shape of the week you leave the course able to run.',
      items: [
        {
          title: 'Research that takes an hour, not a day',
          text: 'Keyword clusters, competitor teardowns, audience language pulled from reviews and comments, and a positioning brief — assembled with AI and then checked by you, because the model will confidently invent a competitor.'
        },
        {
          title: 'Content at volume with the voice intact',
          text: 'A brand voice guide the tools actually follow, templates per format, and a review checklist. Volume without this is the single fastest way to make a brand sound like everyone else in its category.'
        },
        {
          title: 'Creative variants and paid testing',
          text: 'AI image and video generation for ad creative, systematic variant testing rather than one hero asset, and a reading of the numbers that survives a client asking why.'
        },
        {
          title: 'Reporting written from the data',
          text: 'Pull the numbers, have the draft written against them, then edit for the story. The order matters — the other way round is how marketing reports end up saying nothing.'
        }
      ],
      close:
        'You will run this loop three times on live campaigns before the course ends. **The portfolio is the campaign results, not the certificate.**'
    }
  ],

  faqs: [
    {
      q: 'Do I need marketing experience to join?',
      a: 'No. The course covers marketing fundamentals — SEO, paid ads, funnels, analytics — alongside the AI workflow, so beginners can start here. If you already work in marketing you will move faster through the first module and spend longer on the campaign phase.'
    },
    {
      q: 'Is there real ad spend involved?',
      a: 'Yes. Live campaigns run on a small real budget, because the difference between a marketer who has spent money and one who has not is visible in the first interview. Budget arrangements are explained clearly before you enrol.'
    },
    {
      q: 'How is this different from the regular Digital Marketing course?',
      a: 'The Digital Marketing course covers the full discipline in depth over a longer period. This one assumes AI is the default toolset and is built around throughput — research, production, testing and reporting at volume. Students often take Digital Marketing first and this second, or the reverse if they are already in the field.'
    },
    {
      q: 'Which AI tools does the course use?',
      a: 'ChatGPT and Claude for research and content, SEO tooling with AI assistance, AI image and video generation for creative, spreadsheet and analytics assistants for reporting, and no-code automation to connect the pieces. The selection is refreshed each batch because this category turns over quickly.'
    },
    {
      q: 'Will this help my own business rather than get me a job?',
      a: 'Yes, and a large share of every batch is exactly that — owners of hosiery units, retail shops, clinics and coaching centres in Ludhiana who would rather run their marketing than pay for it badly. The live-campaign phase can be run on your own business.'
    }
  ],

  enquireTitle: 'Ask about the AI-powered marketing course in Ludhiana',
  enquireText:
    'Whether you are entering marketing, already in an agency, or marketing your own business in Ludhiana — tell us which, and we will tell you what this course changes for you specifically.'
}

/* ------------------------------------------------------------------
   7 · RAG (Retrieval-Augmented Generation)
------------------------------------------------------------------ */
const RAG = {
  layout: 'full',

  metaTitle: 'RAG Course in Ludhiana — Retrieval-Augmented AI | techcadd',
  metaDescription:
    'RAG course in Ludhiana at techcadd — chunking, embeddings, vector databases, hybrid search, reranking, citations and evaluation for grounded AI.',

  overviewTitle: 'The RAG course in Ludhiana that is really a course in retrieval quality',
  overviewLead:
    'The **RAG course in Ludhiana** at techcadd covers **Retrieval-Augmented Generation** end to end — chunking, embeddings, vector databases, hybrid search, reranking, citations, refusal behaviour and evaluation — because a grounded assistant is only ever as good as what it retrieves.',
  overviewBody: [
    'Retrieval-Augmented Generation is the most requested AI feature in business right now: point a model at your own documents so it answers from them instead of inventing something. Building one that demos well takes an afternoon. Building one an organisation can rely on is a different job, and it is almost entirely a retrieval problem rather than a model problem.',
    'So that is where this course lives. You will work through chunking strategies and why the obvious one fails on tables and contracts, embedding choice, hybrid keyword-plus-vector search, reranking, metadata filtering, citation handling, and a refusal path for when the corpus genuinely has no answer. Then you measure it — recall, MRR and faithfulness on your own document set — because "it seems better" is not a finding.',
    'Prerequisite is Python plus some experience calling an LLM API. This is the natural next course after **Generative AI**, and students often take the two back to back.'
  ],

  valueTitle: 'The model is not the hard part. The retrieval is.',
  valueText:
    'Almost every failed RAG project failed at retrieval and blamed the model. Learning to measure and fix that is the difference between a demo that impresses a manager and a system a company keeps.',
  valueStat: { num: '3', label: 'Metrics you will report on', sub: 'recall, MRR and faithfulness — on your own corpus' },

  certification: {
    title: 'Get certified in Retrieval-Augmented Generation',
    lead:
      'A techcadd RAG certificate, an internship letter for the live-project phase, and a deployed grounded assistant with its evaluation report — a portfolio piece that answers the technical interview before it is asked.'
  },

  salary: {
    title: 'What RAG skills pay',
    lead:
      'RAG is rarely its own job title and almost always the reason somebody got the job. These are the roles it wins.',
    regions: MARKETS,
    rows: [
      { role: 'AI Application Developer', level: 'Entry to mid', cells: ['₹3.2–5.8 LPA', '₹6–13 LPA', '₹40k–1.2L / project'] },
      { role: 'Generative AI Engineer', level: 'Entry to mid', cells: ['₹3.6–6.5 LPA', '₹7–16 LPA', '₹50k–1.4L / project'] },
      { role: 'Search / Retrieval Engineer', level: 'Mid (2–4 yrs)', cells: ['₹6–11 LPA', '₹12–26 LPA', '₹1L–3L / project'] },
      { role: 'AI Solutions Consultant', level: 'Mid (3–5 yrs)', cells: ['₹7–12 LPA', '₹13–28 LPA', '₹1.5L–4L / project'] }
    ],
    questions: questions({
      roles: {
        q: 'Is RAG a job title, or part of a job?',
        a: 'Almost always part of one. You will be hired as an AI application developer or generative AI engineer, and RAG will be the thing they actually needed. Dedicated retrieval roles exist at companies with large document estates — legal, insurance, healthcare, enterprise search.'
      },
      growth:
        'Retrieval quality is measurable, which makes it unusually easy to argue for. Engineers who can show a before-and-after on recall and faithfulness for a real corpus tend to move up faster than the general AI cohort.',
      remote:
        'Yes — this is portfolio-first work. A deployed assistant over a public document set, with an evaluation notebook beside it, is enough to win remote contracts without a local reference.',
      industries:
        'Locally: legal and chartered accountancy practices, hospitals and diagnostic chains, insurance and finance offices, education groups with large syllabus archives, and manufacturers with technical documentation and compliance records. Every one of those is a corpus somebody is currently searching by hand.',
      higher:
        'Very relevant to information-retrieval and NLP specialisations, and the evaluation work translates directly into the methodology section of a dissertation.'
    })
  },

  narrative: [
    {
      id: 'rag-why-it-fails',
      slot: 'syllabus',
      tone: 'paper',
      eyebrow: 'Where projects die',
      title: 'Why most RAG projects quietly fail',
      lead:
        'Every failure below is common, fixable, and covered in the syllabus. Together they are the reason this course spends more time on retrieval than on prompting.',
      items: [
        {
          title: 'Chunking chosen by default',
          text: 'Fixed 500-character splits cut tables in half, separate a clause from its heading, and strip the context that made a paragraph meaningful. Chunking strategy is a design decision per document type, not a config value.'
        },
        {
          title: 'Vector search alone',
          text: 'Pure embedding search misses exact identifiers — part numbers, invoice references, section numbers — precisely the things people search for. Hybrid retrieval with a keyword component fixes most of it.'
        },
        {
          title: 'No reranking, so the top result is noise',
          text: 'Retrieving twenty candidates and passing the first three unranked wastes the retrieval. A reranking pass is the single highest-return change in most projects.'
        },
        {
          title: 'No refusal path',
          text: 'An assistant that cannot say "that is not in these documents" will invent something instead, once, in front of the client. The refusal path is not a nicety; it is what makes the system trustworthy.'
        },
        {
          title: 'Nobody measured anything',
          text: 'Without recall, MRR and faithfulness on a real question set, every change is a guess and every review is an argument. You build the evaluation harness before you tune anything.'
        }
      ],
      close:
        'Fixing these five is, in practice, the job. **It is also the whole interview.**'
    }
  ],

  faqs: [
    {
      q: 'What should I know before the RAG course?',
      a: 'Python, and some experience calling an LLM API. If you have not built anything with a language model yet, take the Generative AI course first — it covers RAG at an introductory depth and makes this course land properly.'
    },
    {
      q: 'How is this different from the Generative AI course?',
      a: 'Generative AI covers RAG as one module among five. This course is that module taken to production depth: chunking strategy, hybrid search, reranking, metadata filtering, citation handling, refusal behaviour and a full evaluation harness on your own corpus.'
    },
    {
      q: 'Which vector databases and tools are used?',
      a: 'FAISS for local work and Pinecone for managed, with LangChain and LlamaIndex for the pipeline, a reranker, RAGAS-style evaluation and FastAPI for serving. The concepts transfer to Weaviate, Qdrant, pgvector or whatever your employer already runs.'
    },
    {
      q: 'Can I build a RAG system on my own company documents?',
      a: 'Yes, and we encourage it — several students build their capstone on their employer\'s or family business\'s document set, which is the fastest route from course to something that gets used. We will talk through what can and cannot be brought into a classroom setting.'
    },
    {
      q: 'How long is the course?',
      a: '6–10 weeks depending on batch. It is a focused specialisation rather than a broad programme, and the final phase is given over to building and measuring one system properly.'
    }
  ],

  enquireTitle: 'Ask about the RAG course in Ludhiana',
  enquireText:
    'Have a document set you want an assistant over — a firm\'s records, a syllabus archive, a technical manual? Tell us about it and we will tell you what building it would actually involve.'
}

/* ------------------------------------------------------------------
   8 · Machine Learning
   Long-form copy already lives in ./machine-learning-copy.js; this
   adds only what the AI layout's extra sections need.
------------------------------------------------------------------ */
const MACHINE_LEARNING = {
  layout: 'full',

  metaTitle: 'Machine Learning Course in Ludhiana — Python ML | techcadd',
  metaDescription:
    'Machine learning course in Ludhiana at techcadd — Python, scikit-learn, regression, classification, evaluation and deployment on real data.',

  certification: {
    title: 'Get certified in Machine Learning',
    lead:
      'A verifiable techcadd Machine Learning certificate, an internship letter for the project phase, and models you trained on real data with the evaluation written up honestly — including what did not work, which is the part interviewers probe.'
  },

  salary: {
    title: 'What machine learning pays in Ludhiana and beyond',
    lead:
      'Indicative ranges for the roles a **machine learning course in Ludhiana** opens, across the three markets that realistically hire from Punjab.',
    regions: MARKETS,
    rows: [
      { role: 'Machine Learning Engineer', level: 'Entry', cells: ['₹3.0–5.5 LPA', '₹5.5–12 LPA', '₹40k–1.1L / project'] },
      { role: 'Data Scientist', level: 'Entry to mid', cells: ['₹3.6–6.5 LPA', '₹7–16 LPA', '₹50k–1.5L / project'] },
      { role: 'Data Analyst', level: 'Entry', cells: ['₹2.4–4.5 LPA', '₹4–9 LPA', '₹25k–70k / project'] },
      { role: 'ML Engineer', level: 'Mid (2–4 yrs)', cells: ['₹6–11 LPA', '₹12–25 LPA', '₹1L–2.8L / project'] }
    ],
    questions: questions({
      roles: {
        q: 'Which job roles open after a machine learning course?',
        a: 'Machine learning engineer, data scientist, data analyst, ML associate and — where the work is more applied than statistical — AI developer. In Punjab the first role usually combines analysis and modelling rather than separating them.'
      },
      growth:
        'The first two years are about proving you can take a model past the notebook. Students who learn deployment, monitoring and honest evaluation move up noticeably faster than those who stop at accuracy scores.',
      remote:
        'Yes. ML work is reviewed on repositories and results, both of which travel. Freelance work from Punjab is typically forecasting, classification and dashboard-plus-model builds for small and mid-sized businesses.',
      industries:
        'Manufacturing and auto-components around Ludhiana using predictive maintenance and quality inspection, hosiery and textile exporters on demand forecasting, agri-tech near PAU, hospitals and diagnostics, logistics, banking and finance offices, and IT services firms. Mohali and Chandigarh add product teams.',
      higher:
        'Directly useful for an M.Tech, MCA or a data-science masters abroad. The projects give you the applied half that most applicants from Punjab cannot show, and the evaluation write-ups transfer straight into a dissertation.'
    })
  }
}

/* ------------------------------------------------------------------
   The map ai-data.js merges over its seeds.
------------------------------------------------------------------ */
export const AI_PAGES = {
  'generative-ai': GENERATIVE_AI,
  'artificial-intelligence': ARTIFICIAL_INTELLIGENCE,
  'prompt-engineering': PROMPT_ENGINEERING,
  'chatgpt-ai-tools': CHATGPT_AI_TOOLS,
  'agentic-ai': AGENTIC_AI,
  'ai-powered-marketing': AI_POWERED_MARKETING,
  rag: RAG,
  'machine-learning': MACHINE_LEARNING
}

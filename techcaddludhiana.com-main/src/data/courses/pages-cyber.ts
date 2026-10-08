/* ==================================================================
   Courses dropdown → Cyber & Cloud column.

   Four courses, all of which already carry long-form Ludhiana copy in
   their own -copy.js files. What is added here is the layout flag, the
   search metadata and the salary table with its five questions.

   One note that applies to the whole column and is worth stating in
   the copy rather than implying: security and cloud hiring in Punjab
   is concentrated in Mohali and Chandigarh, not in Ludhiana itself.
   The pages say so.
================================================================== */

import { SALARY_MARKETS as MARKETS, salaryQuestions as questions } from './shared'

const LOCAL_SECURITY_EMPLOYERS =
  'In Ludhiana: IT services firms, banks and finance offices, hospital and diagnostic chains handling patient data, larger manufacturing and export groups with their own IT departments, internet service providers, and the chartered accountancy and legal practices now facing client data requirements. The deeper market is Mohali and Chandigarh — the IT City campuses and the security and managed-services companies there hire steadily from Ludhiana.'

export const PAGES_CYBER = {
  /* ---------------------------------------------------------------- */
  cybersecurity: {
    layout: 'full',
    metaTitle: 'Cyber Security Course in Ludhiana — SOC & Defence | techcadd',
    metaDescription:
      'Cyber security course in Ludhiana at techcadd — networking, Linux, threat detection, SIEM, incident response and vulnerability management.',
    certification: {
      title: 'Get certified in Cyber Security',
      lead:
        'A verifiable techcadd Cyber Security certificate, an internship letter for the lab and project phase, and preparation aimed squarely at the industry certifications employers actually filter on.'
    },
    salary: {
      title: 'What cyber security pays in Punjab and beyond',
      lead:
        'Security is one of the few fields where demand genuinely outstrips supply in India. The catch is that entry roles are shift-based SOC work, and knowing that in advance is part of choosing this course honestly.',
      regions: MARKETS,
      rows: [
        { role: 'SOC Analyst (L1)', level: 'Entry', cells: ['₹2.6–4.8 LPA', '₹4.5–10 LPA', '—'] },
        { role: 'Security Analyst', level: 'Entry to mid', cells: ['₹3.2–6.0 LPA', '₹6–13 LPA', '₹40k–1.2L / project'] },
        { role: 'Vulnerability Analyst', level: 'Entry to mid', cells: ['₹3.0–5.5 LPA', '₹5.5–12 LPA', '₹35k–1.1L / project'] },
        { role: 'Security Engineer', level: 'Mid (3–5 yrs)', cells: ['₹7–12 LPA', '₹13–26 LPA', '₹1.2L–3L / project'] }
      ],
      questions: questions({
        roles: {
          q: 'Which job roles open after a cyber security course?',
          a: 'SOC analyst, security analyst, vulnerability analyst, incident responder, security engineer and GRC analyst. Almost every career here starts in a SOC — often on rotating shifts — and that first year is where the pattern recognition comes from.'
        },
        growth:
          'Among the steepest in IT after the first two years. The scarcity is real: L1 analysts are plentiful and engineers who can actually tune detection and lead an incident are not.',
        remote:
          'Partly. SOC work is increasingly remote but shift-bound; consulting, audit and vulnerability assessment work is contracted freely. Full remote independence usually comes with experience rather than at entry.',
        industries: LOCAL_SECURITY_EMPLOYERS,
        higher:
          'Useful for an M.Tech in information security and directly relevant to certification tracks — Security+, CEH and later CISSP or OSCP — which count for more than a degree in this field.'
      })
    }
  },

  /* ---------------------------------------------------------------- */
  'ethical-hacking': {
    layout: 'full',
    metaTitle: 'Ethical Hacking Course in Ludhiana — Pen Testing | techcadd',
    metaDescription:
      'Ethical hacking course in Ludhiana at techcadd — reconnaissance, scanning, exploitation, web and network penetration testing and reporting.',
    certification: {
      title: 'Get certified in Ethical Hacking',
      lead:
        'A techcadd Ethical Hacking certificate, an internship letter for the lab phase, and a professional penetration-test report written to the standard a client would actually receive — which is the deliverable this job is really judged on.'
    },
    salary: {
      title: 'What penetration testing pays',
      lead:
        'Offensive security pays well and hires narrowly. Reports and proof of skill matter far more than certificates here, and bug bounty income is genuinely unpredictable — treat the third column as a range, not a plan.',
      regions: MARKETS,
      rows: [
        { role: 'Penetration Tester', level: 'Entry', cells: ['₹2.8–5.0 LPA', '₹5–11 LPA', '₹30k–1L / engagement'] },
        { role: 'VAPT Analyst', level: 'Entry', cells: ['₹2.6–4.8 LPA', '₹4.5–10 LPA', '₹25k–90k / engagement'] },
        { role: 'Application Security Analyst', level: 'Entry to mid', cells: ['₹3.2–6.0 LPA', '₹6–13 LPA', '₹40k–1.3L / engagement'] },
        { role: 'Security Consultant', level: 'Mid (3–5 yrs)', cells: ['₹6.5–12 LPA', '₹12–26 LPA', '₹1L–3.5L / engagement'] }
      ],
      questions: questions({
        roles: {
          q: 'Which roles hire ethical hackers?',
          a: 'Penetration tester, VAPT analyst, application security analyst, red team analyst and security consultant. Bug bounty work is real income for a few and pocket money for most — anybody telling you otherwise is selling something.'
        },
        growth:
          'Strong, and driven almost entirely by demonstrated skill. A public write-up record, CTF results or an OSCP moves you further than years of service in this field.',
        remote:
          'Yes, more than defensive security. Assessments are scoped, executed and reported remotely, and independent consultants working from Punjab for clients elsewhere are common.',
        industries: LOCAL_SECURITY_EMPLOYERS,
        higher:
          'The practical work maps onto an M.Tech in information security, and the course is built around the OSCP and CEH syllabi so the study time carries over.'
      })
    }
  },

  /* ---------------------------------------------------------------- */
  'cloud-computing': {
    layout: 'full',
    metaTitle: 'Cloud Computing Course in Ludhiana — AWS & DevOps | techcadd',
    metaDescription:
      'Cloud computing course in Ludhiana at techcadd — AWS, Linux, networking, Docker, Kubernetes, Terraform and CI/CD, with real deployments.',
    certification: {
      title: 'Get certified in Cloud Computing',
      lead:
        'A techcadd Cloud Computing certificate plus preparation for the AWS associate certifications employers filter on, and infrastructure you actually built and deployed rather than watched somebody deploy.'
    },
    salary: {
      title: 'What cloud and DevOps work pays',
      lead:
        'The highest-paying track in this column and the one with the strongest remote market. Very little of it is hired in Ludhiana itself, and that is worth knowing before you enrol rather than after.',
      regions: MARKETS,
      rows: [
        { role: 'Cloud Engineer', level: 'Entry', cells: ['₹3.0–5.5 LPA', '₹5–11 LPA', '₹35k–1L / project'] },
        { role: 'Systems / Platform Administrator', level: 'Entry', cells: ['₹2.4–4.5 LPA', '₹4–9 LPA', '₹25k–70k / project'] },
        { role: 'DevOps Engineer', level: 'Entry to mid', cells: ['₹3.6–6.5 LPA', '₹6.5–15 LPA', '₹50k–1.5L / project'] },
        { role: 'Senior Cloud / DevOps Engineer', level: 'Mid (3–5 yrs)', cells: ['₹7–13 LPA', '₹14–30 LPA', '₹1.5L–4L / project'] }
      ],
      questions: questions({
        roles: {
          q: 'Which job roles open after a cloud computing course?',
          a: 'Cloud engineer, DevOps engineer, site reliability engineer, platform engineer and systems administrator. DevOps is rarely a first job anywhere — most people arrive at it through support, systems or development work, and this course is designed to make that first step land.'
        },
        growth:
          'Among the best in Indian IT. Cloud and DevOps skills compound with every system you run, and the shortage of people who can actually operate infrastructure — as opposed to pass a certification — has not closed.',
        remote:
          'Excellent. Infrastructure work is remote by nature and contracted internationally. This is the course in the column where a Ludhiana address genuinely stops mattering.',
        industries: LOCAL_SECURITY_EMPLOYERS,
        higher:
          'Not a research subject, but the certifications carry real weight and the practical work supports an M.Tech or an overseas computing programme.'
      })
    }
  },

  /* ---------------------------------------------------------------- */
  linux: {
    layout: 'full',
    metaTitle: 'Linux Course in Ludhiana — System Administration | techcadd',
    metaDescription:
      'Linux course in Ludhiana at techcadd — shell, permissions, processes, networking, services, hardening and scripting, the base under cloud and DevOps.',
    certification: {
      title: 'Get certified in Linux',
      lead:
        'A techcadd Linux certificate and preparation aligned to the RHCSA syllabus, plus a set of configured, hardened, working servers you built yourself in the lab.'
    },
    salary: {
      title: 'What Linux administration pays',
      lead:
        'Linux on its own is a modest salary and an unusually good foundation. Every high-paying track in this column — cloud, DevOps, security — assumes it, which is why most students take it as a first step rather than a destination.',
      regions: MARKETS,
      rows: [
        { role: 'Linux System Administrator', level: 'Entry', cells: ['₹2.2–4.0 LPA', '₹3.6–8 LPA', '₹18k–55k / project'] },
        { role: 'Support Engineer', level: 'Entry', cells: ['₹2.0–3.6 LPA', '₹3–7 LPA', '₹15k–45k / project'] },
        { role: 'DevOps Engineer', level: 'Entry to mid', cells: ['₹3.6–6.5 LPA', '₹6.5–15 LPA', '₹50k–1.5L / project'] },
        { role: 'Senior SysAdmin / SRE', level: 'Mid (3–5 yrs)', cells: ['₹6–11 LPA', '₹11–24 LPA', '₹1L–2.8L / project'] }
      ],
      questions: questions({
        roles: {
          q: 'Is a Linux course enough on its own?',
          a: 'For a system administrator or support engineer role, yes. For the salaries in the bottom two rows, no — Linux is the prerequisite for cloud, DevOps and security rather than the destination, and we will tell you that on the enquiry call before you enrol.'
        },
        growth:
          'Modest as a pure administrator and excellent as a foundation. Administrators who add scripting, then a cloud platform, then automation follow the steepest path in this column.',
        remote:
          'Server administration and support are widely remote. Small freelance work exists — hardening, migrations, hosting setup for local businesses — but it is a supplement rather than an income.',
        industries: LOCAL_SECURITY_EMPLOYERS,
        higher:
          'The RHCSA and RHCE certifications are the recognised route, and the material is assumed in any systems or networking specialisation.'
      })
    }
  }
}

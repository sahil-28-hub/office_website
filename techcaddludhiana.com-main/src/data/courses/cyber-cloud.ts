/* Cyber & Cloud track. See ./shared.js for the factory. */

/* All four courses here carry long-form editorial copy of their own.
   Each lives in its own file because any one of them is longer than
   all four seeds together — see ./cybersecurity-copy.js,
   ./ethical-hacking-copy.js, ./cloud-computing-copy.js and
   ./linux-copy.js */
import {
  CYBERSECURITY_OVERVIEW,
  CYBERSECURITY_JOINERS,
  CYBERSECURITY_NARRATIVE,
  CYBERSECURITY_TESTIMONIALS,
  CYBERSECURITY_FAQS
} from './cybersecurity-copy'

import {
  CLOUD_OVERVIEW,
  CLOUD_JOINERS,
  CLOUD_NARRATIVE,
  CLOUD_TESTIMONIALS,
  CLOUD_FAQS
} from './cloud-computing-copy'

import {
  LINUX_OVERVIEW,
  LINUX_JOINERS,
  LINUX_NARRATIVE,
  LINUX_TESTIMONIALS,
  LINUX_FAQS
} from './linux-copy'

import {
  EH_OVERVIEW,
  EH_JOINERS,
  EH_NARRATIVE,
  EH_TESTIMONIALS,
  EH_FAQS
} from './ethical-hacking-copy'

export const CYBER_CLOUD = [
  {
    slug: 'cybersecurity',
    heroArt: '/courses/cybersecurity-hero.webp',
    heroArtSize: [945, 532],
    heroArtAlt:
      'A shield at the centre of a ring of connected devices — the ' +
      'network the course learns to defend',
    name: 'Cybersecurity Course',
    short: 'Cybersecurity',
    subject: 'cybersecurity',
    category: 'Cyber & Cloud',
    eyebrow: 'Defend systems that matter',
    duration: '4–6 months',
    headline: ['Find the weakness.', 'Close it first.'],
    sub: 'Networking, system hardening, cryptography, SIEM monitoring and incident response — the defensive skill set organisations hire for, practised in a lab you cannot break anything real in.',
    projectCount: 'Five shipped',
    highlights: [
      'An isolated lab environment for every exercise',
      'Blue-team monitoring and response, not just theory',
      'Certification-aligned syllabus (Security+ / CEH)'
    ],
    code: {
      lang: 'sh',
      file: 'harden.sh',
      lines: [
        'sudo ufw default deny incoming',
        'sudo ufw allow 22/tcp',
        'sudo systemctl enable fail2ban',
        '',
        'grep "Failed password" /var/log/auth.log | wc -l'
      ],
      command: './harden.sh',
      output: 'Firewall active · 0 open ports'
    },
    badges: ['SIEM', 'Wireshark', 'Linux', 'IR'],
    modules: [
      {
        title: 'Networking & Security Fundamentals',
        tag: 'Weeks 1–4',
        description: 'How traffic actually moves, and where an attacker looks first.',
        skills: ['TCP/IP & OSI', 'Routing & switching', 'DNS & HTTP', 'Firewalls', 'VPNs', 'Network scanning'],
        tech: ['Wireshark', 'Nmap', 'pfSense', 'VirtualBox'],
        outcome: 'A segmented lab network you built, with traffic captured and explained.'
      },
      {
        title: 'Operating System & Endpoint Hardening',
        tag: 'Weeks 5–8',
        description: 'Locking down Linux and Windows to a defensible baseline.',
        skills: ['Linux permissions', 'Windows security policy', 'Patch management', 'Access control', 'Logging configuration', 'Endpoint protection'],
        tech: ['Linux', 'Windows Server', 'Group Policy', 'CIS Benchmarks'],
        outcome: 'A hardened server audited against a recognised benchmark.'
      },
      {
        title: 'Cryptography & Secure Communication',
        tag: 'Weeks 9–11',
        description: 'What encryption does, what it does not, and how it fails in practice.',
        skills: ['Symmetric & asymmetric encryption', 'Hashing', 'TLS & certificates', 'PKI', 'Key management', 'Common crypto mistakes'],
        tech: ['OpenSSL', 'GPG', 'Let\'s Encrypt'],
        outcome: 'A working PKI setup with issued certificates and verified TLS configuration.'
      },
      {
        title: 'Threats, Vulnerabilities & Assessment',
        tag: 'Weeks 12–17',
        description: 'Understanding attacks well enough to detect and prevent them — in a contained lab.',
        skills: ['Threat modelling', 'Vulnerability scanning', 'OWASP Top 10', 'Social engineering awareness', 'Malware behaviour', 'Risk assessment'],
        tech: ['Nessus', 'OWASP ZAP', 'Metasploitable', 'Kali Linux'],
        outcome: 'A vulnerability assessment report on a deliberately vulnerable lab system.'
      },
      {
        title: 'SOC Operations & Incident Response',
        tag: 'Weeks 18–24',
        description: 'The working blue-team role: monitoring, alerting, investigating and responding.',
        skills: ['SIEM configuration', 'Log analysis', 'Alert triage', 'Incident response process', 'Forensics basics', 'Reporting & compliance'],
        tech: ['Splunk', 'Wazuh', 'ELK Stack', 'Autopsy'],
        outcome: 'A simulated incident investigated end to end with a written response report.'
      }
    ],
    technologies: [
      { name: 'Wireshark', note: 'Traffic analysis' },
      { name: 'Nmap', note: 'Network discovery' },
      { name: 'Splunk', note: 'SIEM & log analysis' },
      { name: 'Wazuh', note: 'Open-source detection' },
      { name: 'Kali Linux', note: 'Assessment toolkit' },
      { name: 'Nessus', note: 'Vulnerability scanning' },
      { name: 'OpenSSL', note: 'Cryptography & TLS' },
      { name: 'ELK Stack', note: 'Log pipeline' }
    ],
    careers: [
      { icon: 'support', title: 'SOC Analyst', text: 'Monitor, triage and escalate security alerts as a first responder.' },
      { icon: 'server', title: 'Security Analyst', text: 'Assess risk, harden systems and own the security baseline.' },
      { icon: 'code', title: 'Security Engineer', text: 'Build and maintain the tooling that protects infrastructure.' },
      { icon: 'chart', title: 'Vulnerability Analyst', text: 'Run assessments and drive remediation across an estate.' },
      { icon: 'bot', title: 'Incident Responder', text: 'Investigate breaches and lead containment and recovery.' },
      { icon: 'career', title: 'GRC Analyst', text: 'Handle compliance, audits and security policy.' }
    ],
    featured: {
      title: 'SOC Lab & Incident Investigation',
      kicker: 'Capstone project',
      text: 'A complete home SOC: a segmented lab network, hardened endpoints, log shipping into a SIEM, custom detection rules, and a simulated multi-stage incident investigated from first alert to a written report with timeline, impact assessment and remediation plan.',
      tags: ['Wazuh', 'ELK', 'Detection rules', 'IR report'],
      difficulty: 'Advanced',
      status: 'Portfolio ready',
      lines: [
        'rule: Multiple failed SSH then success',
        '  detection:',
        '    selection_fail:  event_id: 4625',
        '    selection_ok:    event_id: 4624',
        '    timeframe:       5m',
        '    condition: selection_fail | count() > 10',
        '               and selection_ok'
      ]
    },
    projects: [
      { title: 'Network Lab', text: 'A segmented virtual network with firewall rules.', tags: ['pfSense'], size: 'sm' },
      { title: 'Hardening Audit', text: 'A server brought to a benchmark baseline.', tags: ['CIS'], size: 'lg' },
      { title: 'Traffic Analysis', text: 'Packet capture interpreted and documented.', tags: ['Wireshark'], size: 'sm' },
      { title: 'Vulnerability Report', text: 'A scan turned into a prioritised remediation plan.', tags: ['Nessus'], size: 'sm' },
      { title: 'SIEM Detection Set', text: 'Custom rules that catch simulated attacks.', tags: ['Wazuh'], size: 'lg' }
    ],
    audience: 'IT students, system administrators, developers moving into security and graduates targeting SOC roles. All practical work happens inside an isolated lab you control.',
    prerequisite: 'Basic computer and networking familiarity. The course rebuilds networking from the ground up in the first module.',

    /* Written as a local landing page. Its copy names Ludhiana
       throughout, which is also the default centre, so nothing here
       has to override `city`. */
    overviewTitle: CYBERSECURITY_OVERVIEW.title,
    overviewLead: CYBERSECURITY_OVERVIEW.lead,
    overviewBody: CYBERSECURITY_OVERVIEW.body,

    /* replaces the six generic groups the factory writes, so the page
       answers "who can do this course" once, in its own words */
    joiners: CYBERSECURITY_JOINERS,
    narrative: CYBERSECURITY_NARRATIVE,

    /* UNVERIFIED quotes carrying named placement outcomes. Read the
       banner above CYBERSECURITY_TESTIMONIALS in ./cybersecurity-copy.js
       before this page goes live. Deleting this one line falls back to
       the generic quotes in shared.js. */
    testimonials: CYBERSECURITY_TESTIMONIALS,

    /* a complete question set of its own, so the standard seven the
       factory writes are replaced rather than appended to */
    ownFaqs: true,
    faqs: CYBERSECURITY_FAQS,

    enquireEyebrow: 'Enrol now',
    enquireTitle: 'Start your cybersecurity career in Ludhiana',
    enquireText:
      'Send this form and a counsellor calls you back about the Cyber Security Course — batch schedules, duration, fees, training mode and what the lab work involves.'
  },

  {
    slug: 'ethical-hacking',
    heroArt: '/courses/ethical-hacking-hero.webp',
    heroArtSize: [1200, 675],
    heroArtAlt:
      'An ethical hacking bench — Kali tooling on a laptop, a port scan ' +
      'running, a router and rack behind it',
    name: 'Ethical Hacking Course',
    short: 'Ethical Hacking',
    subject: 'ethical hacking',
    category: 'Cyber & Cloud',
    eyebrow: 'Authorised testing, done properly',
    duration: '3–4 months',
    headline: ['Think like an attacker.', 'Report like a professional.'],
    sub: 'Penetration testing methodology, web and network assessment, and the reporting discipline that turns findings into fixes — practised only against lab targets you are authorised to test.',
    projectCount: 'Four shipped',
    highlights: [
      'Scope, authorisation and legal boundaries taught first',
      'Deliberately vulnerable lab targets, never live systems',
      'Reports written to a professional standard'
    ],
    code: {
      lang: 'sh',
      file: 'recon.sh',
      lines: [
        '# Authorised scope: 10.10.0.0/24 (lab only)',
        'nmap -sV -oA scan/initial 10.10.0.0/24',
        '',
        'gobuster dir -u http://10.10.0.12 \\',
        '  -w wordlists/common.txt -o scan/dirs.txt'
      ],
      command: './recon.sh',
      output: '14 hosts · 3 web services found'
    },
    badges: ['OWASP', 'Burp Suite', 'Kali', 'Reporting'],
    modules: [
      {
        title: 'Methodology, Law & Scope',
        tag: 'Weeks 1–2',
        description: 'Authorisation, rules of engagement and the legal frame every engagement sits inside.',
        skills: ['Engagement scoping', 'Authorisation & contracts', 'Indian IT Act basics', 'Testing methodologies', 'Note-taking discipline', 'Responsible disclosure'],
        tech: ['PTES', 'OWASP Testing Guide'],
        outcome: 'A written rules-of-engagement document for a scoped lab engagement.'
      },
      {
        title: 'Reconnaissance & Enumeration',
        tag: 'Weeks 3–5',
        description: 'Mapping a target properly — most findings come from this phase, not from an exploit.',
        skills: ['OSINT', 'Port scanning', 'Service enumeration', 'Directory discovery', 'Banner analysis', 'Attack surface mapping'],
        tech: ['Nmap', 'Gobuster', 'theHarvester', 'Kali Linux'],
        outcome: 'A complete attack-surface map of a lab environment, with evidence.'
      },
      {
        title: 'Web Application Testing',
        tag: 'Weeks 6–10',
        description: 'The OWASP Top 10, worked through hands-on against intentionally vulnerable applications.',
        skills: ['Injection flaws', 'Broken authentication', 'Access control testing', 'XSS & CSRF', 'Insecure configuration', 'API testing'],
        tech: ['Burp Suite', 'OWASP ZAP', 'DVWA', 'Juice Shop'],
        outcome: 'A documented set of validated web findings with proof of concept for each.'
      },
      {
        title: 'Network Testing & Reporting',
        tag: 'Weeks 11–16',
        description: 'Network-level assessment, privilege review, and the report that is the actual deliverable.',
        skills: ['Service exploitation (lab)', 'Privilege escalation review', 'Wireless assessment', 'Risk rating & CVSS', 'Report writing', 'Client debrief'],
        tech: ['Metasploit', 'Metasploitable', 'CVSS', 'Aircrack-ng'],
        outcome: 'A full penetration test report with executive summary, findings, CVSS ratings and remediation.'
      }
    ],
    technologies: [
      { name: 'Kali Linux', note: 'Testing distribution' },
      { name: 'Burp Suite', note: 'Web application testing' },
      { name: 'Nmap', note: 'Discovery & enumeration' },
      { name: 'Metasploit', note: 'Lab exploitation framework' },
      { name: 'OWASP ZAP', note: 'Open-source web scanner' },
      { name: 'Wireshark', note: 'Traffic inspection' },
      { name: 'CVSS', note: 'Risk scoring' },
      { name: 'DVWA', note: 'Vulnerable lab target' }
    ],
    careers: [
      { icon: 'support', title: 'Penetration Tester', text: 'Run authorised assessments and report findings to clients.' },
      { icon: 'chart', title: 'Vulnerability Assessment Analyst', text: 'Identify and rate weaknesses across an estate.' },
      { icon: 'code', title: 'Application Security Analyst', text: 'Review applications before they reach production.' },
      { icon: 'server', title: 'Security Consultant', text: 'Advise organisations on their real, tested exposure.' },
      { icon: 'bot', title: 'Red Team Analyst', text: 'Simulate adversary behaviour under a defined mandate.' },
      { icon: 'career', title: 'Bug Bounty Researcher', text: 'Work within published programme scopes and disclosure rules.' }
    ],
    featured: {
      title: 'Full Lab Penetration Test',
      kicker: 'Capstone project',
      text: 'A scoped, authorised assessment of a purpose-built vulnerable lab: rules of engagement, reconnaissance, web and network testing, validated findings with proof of concept, CVSS ratings, a remediation plan, and both an executive summary and a technical report — the deliverable a real client pays for.',
      tags: ['Burp Suite', 'Nmap', 'CVSS', 'Reporting'],
      difficulty: 'Advanced',
      status: 'Portfolio ready',
      lines: [
        'FINDING 03 — Broken access control',
        '  Severity : High  (CVSS 8.1)',
        '  Endpoint : /api/users/{id}/invoices',
        '  Evidence : user A retrieved user B records',
        '  Fix      : enforce ownership check server-side',
        '  Verified : re-tested, resolved'
      ]
    },
    projects: [
      { title: 'Recon Report', text: 'A mapped attack surface with documented evidence.', tags: ['Nmap'], size: 'sm' },
      { title: 'Web App Assessment', text: 'OWASP Top 10 findings on a vulnerable app.', tags: ['Burp'], size: 'lg' },
      { title: 'API Test', text: 'Authorisation and input validation review.', tags: ['ZAP'], size: 'sm' },
      { title: 'Network Assessment', text: 'Lab network tested and risk-rated.', tags: ['Metasploit'], size: 'sm' },
      { title: 'Client Report', text: 'A professional report with an executive summary.', tags: ['CVSS'], size: 'lg' }
    ],
    audience: 'Students and IT professionals moving into offensive security. Every exercise runs against lab targets provided by techcadd — testing systems you do not own or have written permission to test is illegal, and the course treats that as the first lesson.',
    /* Written as a local landing page. Its copy names Ludhiana
       throughout, which is also the default centre, so nothing here
       has to override `city`. */
    overviewTitle: EH_OVERVIEW.title,
    overviewLead: EH_OVERVIEW.lead,
    overviewBody: EH_OVERVIEW.body,

    /* replaces the six generic groups the factory writes, so the page
       answers "who can do this course" once, in its own words */
    joiners: EH_JOINERS,
    narrative: EH_NARRATIVE,

    /* UNVERIFIED quotes carrying named outcomes. Read the banner above
       EH_TESTIMONIALS in ./ethical-hacking-copy.js before this page
       goes live. Deleting this one line falls back to the generic
       quotes in shared.js. */
    testimonials: EH_TESTIMONIALS,

    /* A complete question set of its own, so the standard seven the
       factory writes are replaced rather than appended to. The
       legality question that used to sit here inline is the first
       entry in EH_FAQS — it did not come from the marketing copy and
       must not be dropped. */
    ownFaqs: true,
    faqs: EH_FAQS,

    enquireEyebrow: 'Enquire now',
    enquireTitle: 'Start your ethical hacking career in Ludhiana',
    enquireText:
      'Send this form and a counsellor calls you back about the Ethical Hacking Course — batch timings, duration, fees, and what the lab work actually involves.'
  },

  {
    slug: 'cloud-computing',
    heroArt: '/courses/cloud-computing-hero.webp',
    heroArtSize: [1200, 800],
    heroArtAlt:
      'A cloud stack — containers, a Docker whale, Kubernetes, servers and ' +
      'a terminal, the pieces the course deploys with',
    name: 'Cloud Computing & DevOps Course',
    short: 'Cloud Computing',
    subject: 'cloud and DevOps',
    category: 'Cyber & Cloud',
    eyebrow: 'AWS, Docker, Kubernetes, CI/CD',
    duration: '4–6 months',
    headline: ['Run it in the cloud.', 'Deploy it on demand.'],
    sub: 'AWS core services, Linux, containers, Kubernetes, Terraform and CI/CD pipelines — the operational skill set behind every modern deployment, built on real infrastructure.',
    projectCount: 'Five shipped',
    highlights: [
      'Real AWS accounts, with cost control taught',
      'Infrastructure as code from the first deployment',
      'Certification-aligned (AWS Solutions Architect)'
    ],
    code: {
      lang: 'yaml',
      file: 'deployment.yaml',
      lines: [
        'apiVersion: apps/v1',
        'kind: Deployment',
        'metadata:',
        '  name: api',
        'spec:',
        '  replicas: 3',
        '  template:',
        '    spec:',
        '      containers:',
        '        - name: api',
        '          image: techcadd/api:1.4.0'
      ],
      command: 'kubectl apply -f deployment.yaml',
      output: 'deployment.apps/api created'
    },
    badges: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    modules: [
      {
        title: 'Linux & Networking for Cloud',
        tag: 'Weeks 1–4',
        description: 'The operating system and network model every cloud service is built on.',
        skills: ['Linux administration', 'Shell scripting', 'SSH & key management', 'DNS & load balancing', 'Networking basics', 'Monitoring fundamentals'],
        tech: ['Ubuntu', 'Bash', 'systemd', 'nginx'],
        outcome: 'A provisioned Linux server running a real service behind a reverse proxy.'
      },
      {
        title: 'AWS Core Services',
        tag: 'Weeks 5–9',
        description: 'Compute, storage, networking, identity and the cost model behind all of it.',
        skills: ['EC2 & auto scaling', 'S3 & storage classes', 'VPC & security groups', 'IAM policies', 'RDS', 'CloudWatch & billing'],
        tech: ['AWS', 'EC2', 'S3', 'IAM'],
        outcome: 'A highly available application on AWS inside a VPC you designed, with budget alerts.'
      },
      {
        title: 'Containers & Kubernetes',
        tag: 'Weeks 10–14',
        description: 'Packaging applications and orchestrating them across a cluster.',
        skills: ['Docker images & layers', 'Docker Compose', 'Kubernetes objects', 'Services & ingress', 'ConfigMaps & secrets', 'Scaling & health checks'],
        tech: ['Docker', 'Kubernetes', 'Helm', 'EKS'],
        outcome: 'A multi-service application running on Kubernetes with rolling deployments.'
      },
      {
        title: 'Infrastructure as Code & CI/CD',
        tag: 'Weeks 15–19',
        description: 'Reproducible infrastructure and pipelines that deploy without anyone logging in.',
        skills: ['Terraform', 'State management', 'Ansible basics', 'Pipeline design', 'Automated testing', 'Blue-green & rollback'],
        tech: ['Terraform', 'GitHub Actions', 'Jenkins', 'Ansible'],
        outcome: 'A full environment created from code and deployed by a pipeline on every merge.'
      },
      {
        title: 'Observability, Security & Cost',
        tag: 'Weeks 20–24',
        description: 'Running it in production — knowing what is happening, keeping it safe and controlling spend.',
        skills: ['Metrics & dashboards', 'Log aggregation', 'Alerting', 'Secrets management', 'Least-privilege IAM', 'Cost optimisation'],
        tech: ['Prometheus', 'Grafana', 'CloudWatch', 'Vault'],
        outcome: 'Your capstone deployment with dashboards, alerts and a documented cost breakdown.'
      }
    ],
    technologies: [
      { name: 'AWS', note: 'Primary cloud platform' },
      { name: 'Docker', note: 'Containerisation' },
      { name: 'Kubernetes', note: 'Orchestration' },
      { name: 'Terraform', note: 'Infrastructure as code' },
      { name: 'GitHub Actions', note: 'CI/CD pipelines' },
      { name: 'Prometheus', note: 'Metrics & alerting' },
      { name: 'Grafana', note: 'Dashboards' },
      { name: 'Linux', note: 'Underlying platform' }
    ],
    careers: [
      { icon: 'server', title: 'Cloud Engineer', text: 'Design and run infrastructure on AWS or Azure.' },
      { icon: 'stack', title: 'DevOps Engineer', text: 'Own pipelines, deployments and the reliability of releases.' },
      { icon: 'code', title: 'Site Reliability Engineer', text: 'Keep production available, observable and recoverable.' },
      { icon: 'bot', title: 'Platform Engineer', text: 'Build the internal platform other developers deploy on.' },
      { icon: 'database', title: 'Cloud Solutions Architect', text: 'Design cloud architectures against cost and reliability targets.' },
      { icon: 'career', title: 'Systems Administrator', text: 'Move traditional infrastructure work into the cloud.' }
    ],
    featured: {
      title: 'Production-Grade Cloud Platform',
      kicker: 'Capstone project',
      text: 'A complete environment built entirely from code: Terraform-provisioned VPC and EKS cluster, containerised services with Helm charts, a GitHub Actions pipeline with automated tests and blue-green deployment, Prometheus and Grafana observability, secrets in Vault, and a documented monthly cost breakdown with optimisations applied.',
      tags: ['Terraform', 'EKS', 'GitHub Actions', 'Grafana'],
      difficulty: 'Advanced',
      status: 'Deployed',
      lines: [
        'resource "aws_eks_node_group" "workers" {',
        '  cluster_name  = aws_eks_cluster.main.name',
        '  instance_types = ["t3.medium"]',
        '',
        '  scaling_config {',
        '    desired_size = 3',
        '    min_size     = 2',
        '    max_size     = 8',
        '  }',
        '}'
      ]
    },
    projects: [
      { title: 'Server Deployment', text: 'A Linux server serving an app behind nginx.', tags: ['Linux'], size: 'sm' },
      { title: 'Scalable AWS Stack', text: 'Auto-scaling application inside a custom VPC.', tags: ['AWS'], size: 'lg' },
      { title: 'Containerised App', text: 'Multi-service stack running under Docker Compose.', tags: ['Docker'], size: 'sm' },
      { title: 'CI/CD Pipeline', text: 'Automated test, build and deploy on every merge.', tags: ['Actions'], size: 'sm' },
      { title: 'Kubernetes Cluster', text: 'A managed cluster running your services with autoscaling.', tags: ['K8s'], size: 'lg' }
    ],

    audience:
      '12th-pass students from any stream, graduates (BCA, B.Tech, MCA, B.Sc IT or otherwise), job seekers and career switchers, working IT professionals and system administrators, software developers, and business owners. No coding expertise required to start.',
    prerequisite:
      'None. The course starts from networking, operating systems and IT infrastructure fundamentals before moving into AWS, Azure and Google Cloud.',

    /* Written as a local landing page. Its copy names Ludhiana
       throughout, which is also the default centre, so nothing here
       has to override `city`. */
    overviewTitle: CLOUD_OVERVIEW.title,
    overviewLead: CLOUD_OVERVIEW.lead,
    overviewBody: CLOUD_OVERVIEW.body,

    /* replaces the six generic groups the factory writes, so the page
       answers "who can do this course" once, in its own words */
    joiners: CLOUD_JOINERS,
    narrative: CLOUD_NARRATIVE,

    /* UNVERIFIED quotes carrying named placement outcomes. Read the
       banner above CLOUD_TESTIMONIALS in ./cloud-computing-copy.js
       before this page goes live. Deleting this one line falls back to
       the generic quotes in shared.js. */
    testimonials: CLOUD_TESTIMONIALS,

    /* a complete question set of its own, so the standard seven the
       factory writes are replaced rather than appended to */
    ownFaqs: true,
    faqs: CLOUD_FAQS,

    enquireEyebrow: 'Enrol now',
    enquireTitle: 'Start your cloud career, right here in Ludhiana',
    enquireText:
      'Send this form and a counsellor calls you back about the Cloud Computing Course — batch schedules, duration, fees, the lab setup and which certification track fits you.'
  },

  {
    slug: 'linux',
    heroArt: '/courses/linux-hero.webp',
    heroArtSize: [945, 532],
    heroArtAlt:
      'A Linux terminal and server stack — the shell, services and ' +
      'administration tools the course works in',
    name: 'Linux Administration Course',
    short: 'Linux',
    subject: 'Linux',
    category: 'Cyber & Cloud',
    eyebrow: 'The system everything runs on',
    duration: '2–3 months',
    headline: ['Own the terminal.', 'Run the server.'],
    sub: 'Command line, file systems, users, permissions, services, networking, shell scripting and server administration — the foundation under cloud, DevOps and security work alike.',
    projectCount: 'Four shipped',
    highlights: [
      'Everything done from the command line',
      'Real servers, not just a local VM',
      'RHCSA-aligned syllabus'
    ],
    code: {
      lang: 'sh',
      file: 'backup.sh',
      lines: [
        '#!/usr/bin/env bash',
        'set -euo pipefail',
        '',
        'DEST="/backup/$(hostname)-$(date +%F)"',
        'tar czf "$DEST.tar.gz" /var/www /etc/nginx',
        'find /backup -mtime +30 -delete'
      ],
      command: 'sudo ./backup.sh',
      output: 'Backup written · 2 old archives removed'
    },
    badges: ['Bash', 'systemd', 'nginx', 'SSH'],
    modules: [
      {
        title: 'Command Line Foundations',
        tag: 'Weeks 1–2',
        description: 'The shell, the filesystem and the tools that make the terminal faster than a GUI.',
        skills: ['Navigation & file operations', 'Pipes & redirection', 'grep, sed, awk', 'Text editors', 'Archives & compression', 'Man pages'],
        tech: ['Bash', 'Ubuntu', 'vim'],
        outcome: 'A set of one-liners that solve real file and text problems without a script.'
      },
      {
        title: 'Users, Permissions & Storage',
        tag: 'Weeks 3–4',
        description: 'Access control and disks — where most real administration problems live.',
        skills: ['Users & groups', 'File permissions & ACLs', 'sudo configuration', 'Disk partitioning', 'LVM', 'Mounting & fstab'],
        tech: ['Linux', 'LVM', 'systemd'],
        outcome: 'A multi-user server with correct permissions and an LVM volume you resized live.'
      },
      {
        title: 'Processes, Services & Networking',
        tag: 'Weeks 5–7',
        description: 'What is running, why, and how it talks to the rest of the network.',
        skills: ['Process management', 'systemd units', 'Cron & timers', 'Network configuration', 'Firewalls', 'SSH hardening'],
        tech: ['systemd', 'ufw', 'OpenSSH', 'nginx'],
        outcome: 'A custom service running under systemd, firewalled, reachable only over hardened SSH.'
      },
      {
        title: 'Shell Scripting & Server Administration',
        tag: 'Weeks 8–12',
        description: 'Automating administration and running a real server responsibly.',
        skills: ['Bash scripting', 'Error handling', 'Log management', 'Package management', 'Monitoring', 'Backup & recovery'],
        tech: ['Bash', 'rsync', 'logrotate', 'Prometheus'],
        outcome: 'A production-style server with automated backups, log rotation and monitoring.'
      }
    ],
    technologies: [
      { name: 'Bash', note: 'Shell & scripting' },
      { name: 'systemd', note: 'Services & timers' },
      { name: 'nginx', note: 'Web serving & proxy' },
      { name: 'OpenSSH', note: 'Remote access' },
      { name: 'LVM', note: 'Flexible storage' },
      { name: 'rsync', note: 'Backups & sync' },
      { name: 'Docker', note: 'Containers on Linux' },
      { name: 'Prometheus', note: 'Monitoring' }
    ],
    careers: [
      { icon: 'server', title: 'Linux System Administrator', text: 'Run and maintain the servers a business depends on.' },
      { icon: 'stack', title: 'DevOps Engineer', text: 'Use Linux as the base for pipelines and cloud infrastructure.' },
      { icon: 'support', title: 'Support Engineer', text: 'Diagnose production issues from the command line.' },
      { icon: 'code', title: 'Cloud Engineer', text: 'Manage the Linux instances behind every cloud workload.' },
      { icon: 'bot', title: 'Security Analyst', text: 'Harden and monitor Linux systems as a defensive role.' },
      { icon: 'career', title: 'Site Reliability Engineer', text: 'Progress into reliability work with strong system fundamentals.' }
    ],
    featured: {
      title: 'Self-Managed Production Server',
      kicker: 'Capstone project',
      text: 'A real internet-facing server built and hardened by you: users and sudo policy, LVM storage, a systemd-managed application behind nginx with TLS, firewall rules, hardened SSH, scripted backups with retention, log rotation, monitoring and a documented recovery procedure you actually test.',
      tags: ['systemd', 'nginx', 'Bash', 'Monitoring'],
      difficulty: 'Advanced',
      status: 'Live server',
      lines: [
        '[Unit]',
        'Description=techcadd API',
        'After=network.target',
        '',
        '[Service]',
        'ExecStart=/opt/api/bin/server',
        'Restart=on-failure',
        'User=api'
      ]
    },
    projects: [
      { title: 'Terminal Toolkit', text: 'Solved file and text tasks entirely in the shell.', tags: ['Bash'], size: 'sm' },
      { title: 'Multi-User Server', text: 'Groups, permissions and sudo policy done correctly.', tags: ['Linux'], size: 'lg' },
      { title: 'Web Server Setup', text: 'nginx with TLS, serving a real site.', tags: ['nginx'], size: 'sm' },
      { title: 'Backup Automation', text: 'Scheduled backups with rotation and verification.', tags: ['cron'], size: 'sm' },
      { title: 'Monitoring Stack', text: 'Metrics, dashboards and alerts on your own server.', tags: ['Prometheus'], size: 'lg' }
    ],
    prerequisite: 'None. The course assumes you have only used a graphical operating system and starts at the first command.',

    audience:
      '12th-pass students from Science, Commerce or Arts, graduates from any stream, job seekers switching careers, working IT professionals in support, networking or hosting, and freelancers running their own servers.',

    /* Written as a local landing page. Its copy names Ludhiana
       throughout, which is also the default centre, so nothing here
       has to override `city`. */
    overviewTitle: LINUX_OVERVIEW.title,
    overviewLead: LINUX_OVERVIEW.lead,
    overviewBody: LINUX_OVERVIEW.body,

    /* replaces the six generic groups the factory writes, so the page
       answers "who can do this course" once, in its own words */
    joiners: LINUX_JOINERS,
    narrative: LINUX_NARRATIVE,

    /* UNVERIFIED quotes carrying named outcomes. Read the banner above
       LINUX_TESTIMONIALS in ./linux-copy.js before this page goes
       live. Deleting this one line falls back to the generic quotes in
       shared.js. */
    testimonials: LINUX_TESTIMONIALS,

    /* a complete question set of its own, so the standard seven the
       factory writes are replaced rather than appended to */
    ownFaqs: true,
    faqs: LINUX_FAQS,

    enquireEyebrow: 'Enrol now',
    enquireTitle: 'Start your Linux career today',
    enquireText:
      'Still deciding? Talk to our career experts first — it is free, and there is no obligation to enrol. Send this form and a counsellor calls you back about batch timings, duration, fees and the lab setup.'
  }
]

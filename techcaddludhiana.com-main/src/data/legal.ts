/* ==================================================================
   Content for the legal pages — Privacy Policy, Terms & Conditions,
   Cookie Policy, Refund & Cancellation Policy and the Disclaimer.

   Written for techcadd's Ludhiana campus (this site). The contact
   details are pulled from data/contact.js rather than retyped, so
   they can never drift from the numbers the footer and the contact
   page already show.

   PLACEHOLDER FIGURES — confirm with management before launch:
   the data-retention period in PRIVACY_POLICY (24 months) is a
   reasonable industry-standard default, not a number pulled from an
   actual signed policy. Everything else on these four pages describes
   what the site itself actually does.

   REFUND_POLICY is the exception: it is no longer written here at all
   but transcribed from the supplied Refund and Cancellation Policy
   document, so its figures are the real ones. See the note above it.
================================================================== */

import { PHONE_DISPLAY, INBOX, INBOX_ALT, ADDRESS_FULL } from './contact'

export const LEGAL_UPDATED = '24 August 2026'
const CAMPUS = 'techcadd Computer Education — Ludhiana, Punjab, India'

/* Every page body is an array of blocks: a string is a paragraph, and
   an object picks a shape — { ul }, { ol } or { table }. One small
   renderer in LegalPage.jsx turns this into markup, so the content
   here stays plain data and never touches JSX. */

export const PRIVACY_POLICY = {
  path: '/privacy',
  hero: {
    eyebrow: 'Legal',
    title: 'Privacy',
    accent: 'Policy',
    lead: 'What we collect when you reach out to us, why, and how to ask us to change or delete it.',
    facts: [
      { k: 'Last updated', v: LEGAL_UPDATED },
      { k: 'Applies to', v: CAMPUS }
    ]
  },
  metaTitle: 'Privacy Policy — techcadd Ludhiana',
  toc: [
    { id: 'collect', label: 'What we collect' },
    { id: 'use', label: 'How we use it' },
    { id: 'cookies', label: 'Cookies' },
    { id: 'retention', label: 'How long we keep it' },
    { id: 'sharing', label: 'Who else sees it' },
    { id: 'rights', label: 'Your rights' },
    { id: 'children', label: 'Minors' },
    { id: 'security', label: 'Security' },
    { id: 'changes', label: 'Changes' },
    { id: 'contact', label: 'Contact us' }
  ],
  sections: [
    {
      id: 'collect',
      heading: 'What we collect',
      body: [
        'We collect information about you only when you give it to us — there is no tracking script on this site building a profile in the background. The enquiry, brochure-download and callback forms across the site ask for your name and phone number, and optionally an email address and the course you are asking about.',
        {
          ul: [
            'Name, phone number and course of interest — required on every form.',
            'Email address — asked for where useful, never required.',
            'A one-line arithmetic check on the enquiry forms, used once to confirm a person filled the form in, and discarded immediately after — we do not store the answer.',
            'Standard web-server logs (IP address, browser and page requested) kept briefly to stop the enquiry forms being abused by automated traffic.'
          ]
        }
      ]
    },
    {
      id: 'use',
      heading: 'How we use it',
      body: [
        'Everything you submit is used for one purpose: to have a counsellor get back to you about the course, batch or partnership you asked about, by phone, WhatsApp or email. We do not sell enquiry data to anyone, and we do not add you to a marketing list you never signed up for.'
      ]
    },
    {
      id: 'cookies',
      heading: 'Cookies',
      body: [
        'This site sets only the handful of strictly-necessary cookies described in full in our',
        { linkPara: { label: 'Cookie Policy', href: '/cookie-policy', after: ', and nothing beyond that until you actively accept it on the cookie banner.' } }
      ]
    },
    {
      id: 'retention',
      heading: 'How long we keep it',
      body: [
        'Enquiry details are kept for up to 24 months from your last contact with us, then deleted. If you ask us to delete them sooner, we will — see “Your rights” below.'
      ]
    },
    {
      id: 'sharing',
      heading: 'Who else sees it',
      body: [
        'Enquiry data is visible to our admissions and counselling staff, and to the infrastructure providers who host this site and its database — never to a data broker, and never sold. If cookie-consent-gated analytics is ever added to this site, only aggregate, anonymised usage data would reach that provider, not the contents of an enquiry.'
      ]
    },
    {
      id: 'rights',
      heading: 'Your rights',
      body: [
        'You can ask us, at any time, to:',
        {
          ul: [
            'show you what we hold about you',
            'correct anything that is wrong',
            'delete your enquiry record',
            'withdraw consent for anything you had opted into'
          ]
        },
        `Write to ${INBOX} and we will act on it within 15 working days. If you are unsatisfied with how we have handled a request, you may complain to the Data Protection Board of India under the Digital Personal Data Protection Act, 2023.`
      ]
    },
    {
      id: 'children',
      heading: 'Minors',
      body: [
        'Our courses are for learners aged 16 and above. If you are enquiring on behalf of someone younger, we ask that a parent or guardian is part of the conversation from the first call.'
      ]
    },
    {
      id: 'security',
      heading: 'Security',
      body: [
        'This site is served over HTTPS end to end, and access to stored enquiry data is limited to the staff who need it to do their job.'
      ]
    },
    {
      id: 'changes',
      heading: 'Changes to this policy',
      body: [
        'If this policy changes in a way that matters — what we collect, or what we do with it — the “Last updated” date above will change with it. We do not shrink your rights retroactively by editing this page quietly.'
      ]
    },
    {
      id: 'contact',
      heading: 'Contact us',
      body: [
        `Questions about this policy, or a request under “Your rights” above: ${INBOX} or ${INBOX_ALT}, or call ${PHONE_DISPLAY}.`
      ]
    }
  ]
}

export const TERMS = {
  path: '/terms',
  hero: {
    eyebrow: 'Legal',
    title: 'Terms &',
    accent: 'Conditions',
    lead: 'The ground rules for using this website and for what an enquiry does — and does not — commit either of us to.',
    facts: [
      { k: 'Last updated', v: LEGAL_UPDATED },
      { k: 'Governing law', v: 'India — Ludhiana jurisdiction' }
    ]
  },
  metaTitle: 'Terms & Conditions — techcadd Ludhiana',
  toc: [
    { id: 'scope', label: 'Using this site' },
    { id: 'courses', label: 'Course information' },
    { id: 'placement', label: 'Placement support' },
    { id: 'conduct', label: 'Acceptable use' },
    { id: 'ip', label: 'Intellectual property' },
    { id: 'thirdparty', label: 'Third-party names' },
    { id: 'liability', label: 'Liability' },
    { id: 'law', label: 'Governing law' },
    { id: 'changes', label: 'Changes' },
    { id: 'contact', label: 'Contact us' }
  ],
  sections: [
    {
      id: 'scope',
      heading: 'Using this site',
      body: [
        'This site describes our courses, our campus and how to reach us. Nothing on it is an offer of admission, and sending an enquiry does not reserve you a seat in a batch — a seat is confirmed only once you have spoken with a counsellor and completed admission at the campus.'
      ]
    },
    {
      id: 'courses',
      heading: 'Course information',
      body: [
        'We keep syllabi, batch timings and tool lists as accurate as we can, but they can change between the time a page is published and the time a new batch starts — treat what is here as representative rather than contractual. Fees are not published on this site; a counsellor will quote them, and any offers that apply, when you enquire.'
      ]
    },
    {
      id: 'placement',
      heading: 'Placement support',
      body: [
        'Where a course page mentions placement assistance, that means interview preparation, resume support and introductions to hiring partners. It is support, not a guarantee — we cannot promise a job, a salary figure or a specific employer to any student.'
      ]
    },
    {
      id: 'conduct',
      heading: 'Acceptable use',
      body: [
        'When using this site or its forms, please don’t:',
        {
          ul: [
            'submit false contact details or impersonate someone else',
            'attempt to access areas of the site or its systems you are not authorised for',
            'copy or republish course content, text or branding for commercial use without asking us first',
            'use the site in a way that breaks Indian law'
          ]
        }
      ]
    },
    {
      id: 'ip',
      heading: 'Intellectual property',
      body: [
        'The design, text, course outlines and techcadd branding on this site belong to techcadd. You are welcome to link to it or share a page; you are not licensed to reproduce its content elsewhere as your own.'
      ]
    },
    {
      id: 'thirdparty',
      heading: 'Third-party names',
      body: [
        'Course pages reference technologies and platforms — programming languages, frameworks, tools — by name for accurate description of what is taught. Those names and marks belong to their respective owners, are used descriptively, and their appearance here does not imply any endorsement of techcadd by them.'
      ]
    },
    {
      id: 'liability',
      heading: 'Liability',
      body: [
        'This site is provided as it is. We take reasonable care to keep it accurate and available, but we do not accept liability for decisions made purely on the basis of information here without confirming it with a counsellor first — except where Indian consumer-protection law says otherwise.'
      ]
    },
    {
      id: 'law',
      heading: 'Governing law',
      body: [
        'These terms are governed by the laws of India, and any dispute arising from them falls under the exclusive jurisdiction of the courts at Ludhiana, Punjab.'
      ]
    },
    {
      id: 'changes',
      heading: 'Changes to these terms',
      body: [
        'We may update these terms as the site and our courses evolve. The “Last updated” date above always reflects the current version.'
      ]
    },
    {
      id: 'contact',
      heading: 'Contact us',
      body: [`Questions about these terms: ${INBOX}, or call ${PHONE_DISPLAY}.`]
    }
  ]
}

export const COOKIE_POLICY = {
  path: '/cookie-policy',
  showCookieSettingsButton: true,
  hero: {
    eyebrow: 'Legal',
    title: 'Cookie',
    accent: 'Policy',
    lead: 'What this site stores in your browser, why, and how to change your mind.',
    facts: [
      { k: 'Last updated', v: LEGAL_UPDATED },
      { k: 'Non-essential cookies', v: 'Off until you accept them' }
    ]
  },
  metaTitle: 'Cookie Policy — techcadd Ludhiana',
  toc: [
    { id: 'what', label: 'What a cookie is' },
    { id: 'necessary', label: 'Strictly necessary' },
    { id: 'optional', label: 'Optional / analytics' },
    { id: 'embeds', label: 'Maps and embeds' },
    { id: 'control', label: 'Changing your choice' },
    { id: 'contact', label: 'Contact us' }
  ],
  sections: [
    {
      id: 'what',
      heading: 'What a cookie is',
      body: [
        'A cookie — or, on this site, an entry in your browser’s local storage — is a small piece of data a website asks your browser to hold on to between visits. Some are needed for the site to function at all; others exist purely to measure how it is used, and only load once you say yes.'
      ]
    },
    {
      id: 'necessary',
      heading: 'Strictly necessary',
      body: [
        'The site sets exactly one entry in this category, and it carries nothing about you beyond the setting itself:',
        {
          table: {
            head: ['Name', 'Purpose', 'Kind', 'Expiry'],
            rows: [
              ['techcadd_cookie_consent', 'Remembers the choice you make on the cookie notice — which categories you allowed, when, and a reference token for that choice — so it does not ask again every visit', 'First-party cookie and localStorage', '1 year, then the notice asks again']
            ]
          }
        }
      ]
    },
    {
      id: 'optional',
      heading: 'Optional / analytics',
      body: [
        'This site does not run any analytics or advertising script today — there is nothing in that category to switch on. If that changes, it will only ever load after you press “Accept” on the cookie banner; declining, closing the banner, or simply continuing to scroll never counts as consent, and nothing optional is requested from a third party until you have actively agreed.'
      ]
    },
    {
      id: 'embeds',
      heading: 'Maps and embeds',
      body: [
        'The campus map on the Contact page is a Google Maps embed. It mounts only once that part of the page is close to entering your screen — not on every page load site-wide — and, like any embedded map, may set its own cookies once it does. No other third-party embed runs on this site at present.'
      ]
    },
    {
      id: 'control',
      heading: 'Changing your choice',
      body: [
        'The “Cookie settings” link in the footer reopens the banner at any time, with your current choice shown, so you can accept or decline again — the new answer takes effect immediately, and clears any optional cookies if you switch to decline.'
      ]
    },
    {
      id: 'contact',
      heading: 'Contact us',
      body: [`Questions about this policy: ${INBOX}, or call ${PHONE_DISPLAY}.`]
    }
  ]
}

/* ------------------------------------------------------------------
   The refund policy is a transcription of the signed-off document
   supplied by management, not site copy written here — so its wording,
   its section numbering and its figures are reproduced as given rather
   than paraphrased into the voice of the other three pages. The
   headings keep their numbers because the document cross-references
   them ('as specified in Section 4 of this policy').

   Note that the document is written for the JALANDHAR centre — its
   address, the centre named in sections 1 and 7, and the jurisdiction
   in section 10 are all Jalandhar, unlike the rest of this site.
------------------------------------------------------------------ */
const REFUND_CENTRE = 'techcadd Jalandhar Centre'
const REFUND_CENTRE_ADDRESS =
  '2nd Floor, Crystal Plaza, SCS 78, Opposite PIMS Hospital, Jalandhar, Punjab – 144001, India'

export const REFUND_POLICY = {
  path: '/refund-policy',
  hero: {
    eyebrow: 'Legal',
    title: 'Refund &',
    accent: 'Cancellation',
    lead: 'How a refund request on a classroom or live-online course is handled, what is never refundable, and how to ask for a review.',
    facts: [
      { k: 'Last updated', v: LEGAL_UPDATED },
      { k: 'Applies to', v: REFUND_CENTRE },
      { k: 'Online payments', v: 'None taken through this site' }
    ]
  },
  metaTitle: 'Refund & Cancellation Policy — techcadd',
  toc: [
    { id: 'scope', label: '1. Scope of this policy' },
    { id: 'before', label: '2. Cancellation before the batch starts' },
    { id: 'after', label: '3. Withdrawal after the batch has started' },
    { id: 'nonrefundable', label: '4. Non-refundable components' },
    { id: 'ourcancel', label: '5. If techcadd cancels or postpones' },
    { id: 'transfers', label: '6. Transfers and deferrals' },
    { id: 'request', label: '7. How to request a refund' },
    { id: 'processing', label: '8. Refund processing and payment' },
    { id: 'grievance', label: '9. Review and grievance' },
    { id: 'statutory', label: '10. Statutory rights and jurisdiction' }
  ],
  sections: [
    {
      id: 'scope',
      heading: '1. Scope of This Policy',
      body: [
        `This Refund and Cancellation Policy applies to fees paid for classroom training and live online training conducted through the ${REFUND_CENTRE}, ${REFUND_CENTRE_ADDRESS}.`,
        'No payment is collected through this website. Course fees are paid directly at the centre or transferred to the institute’s designated bank account. The admission form signed by the student at the time of enrolment constitutes the primary agreement governing the admission and fee terms. In the event of any inconsistency between the signed admission form and this policy, the terms of the signed admission form shall prevail.'
      ]
    },
    {
      id: 'before',
      heading: '2. Cancellation Before the Batch Starts',
      body: [
        'If a student wishes to cancel their admission within 7 days of making the payment and before the commencement of the batch, the student may request a refund in writing.',
        'The refundable amount will be returned after deducting the non-refundable registration and admission component, as specified in Section 4 of this policy.',
        'The registration component covers admission processing, reservation of a seat in a limited-capacity batch, and related administrative arrangements. Since a seat is reserved specifically for the student and may result in other enrolment opportunities being declined, this component is non-refundable.'
      ]
    },
    {
      id: 'after',
      heading: '3. Withdrawal After the Batch Has Started',
      body: [
        'Once the batch has commenced, the refund amount will be determined based on the number of days elapsed from the official batch start date, regardless of the student’s attendance.',
        {
          ul: [
            'Withdrawal within 15 days of the batch start date: 50% of the fee paid will be refundable, subject to deduction of the non-refundable registration and admission component.',
            'Withdrawal after 15 days: No refund will be payable, as the institute will have committed the seat, trainer resources, course materials, and other instructional resources for the enrolled term.',
            'Instalments already due: Any instalments that have become payable during the period of enrolment remain due and payable in accordance with the agreed fee schedule.'
          ]
        },
        { h3: 'Important Note on Non-Attendance' },
        'Non-attendance does not constitute formal withdrawal. A refund request must be submitted in writing. The applicable withdrawal period is determined from the batch start date, while the refund process will be considered based on the date on which the institute receives the student’s written withdrawal request.',
        'Students are therefore advised to submit their request promptly once they decide to discontinue the course.'
      ]
    },
    {
      id: 'nonrefundable',
      heading: '4. Non-Refundable Components',
      body: [
        'The following amounts are non-refundable:',
        {
          ul: [
            'Registration and admission component: 15% of the course fee, covering admission processing, seat reservation, and study material issued at the time of enrolment.',
            'Printed study materials, kits, or software licences that have already been issued to the student.',
            'Examination or certification fees already paid by the institute on the student’s behalf to an external organisation.',
            'Bank, transaction, or transfer charges incurred in processing the original payment or refund.'
          ]
        }
      ]
    },
    {
      id: 'ourcancel',
      heading: '5. If techcadd Cancels or Postpones a Batch',
      body: [
        'If techcadd cancels a batch or is unable to commence the batch within a reasonable period from the originally communicated start date, the student may choose any one of the following options:',
        {
          ol: [
            'Transfer to another batch of the same course;',
            'Transfer to another course of equivalent value;',
            'Keep the amount as a credit for future enrolment; or',
            'Receive a full refund, including the registration and admission component.'
          ]
        },
        'Where the institute is unable to deliver the agreed training, the refund, where requested by the student, will not be discretionary.',
        { h3: 'Rescheduled Sessions' },
        'Occasional changes to the training schedule may be required due to circumstances such as public holidays, trainer availability, or classroom-related requirements. Where sessions are rescheduled and subsequently made up, such rescheduling will not be considered cancellation of the batch and will not, by itself, create a right to a refund.'
      ]
    },
    {
      id: 'transfers',
      heading: '6. Transfers and Deferrals',
      body: [
        'Students who experience a change in schedule or circumstances are encouraged to explore transfer or deferral options before requesting a refund.',
        'Subject to course availability and applicable terms, students may request:',
        {
          ul: [
            'Transfer to a later batch of the same course: One transfer may generally be permitted at no additional charge.',
            'Course change: The fee paid may be adjusted against another course, subject to the applicable fee difference.',
            'Mode change: Students may request a change between classroom and live online training where both modes are available for the relevant course.'
          ]
        },
        'These options are intended to provide greater flexibility while allowing the student’s fee to remain applicable to their training.'
      ]
    },
    {
      id: 'request',
      heading: '7. How to Request a Refund',
      body: [
        'A refund request must be submitted in writing through either of the following methods:',
        {
          ul: [
            `Email: ${INBOX}, sent from the email address provided on the student’s admission form; or`,
            `Written application submitted at the ${REFUND_CENTRE}.`
          ]
        },
        'The request should include:',
        {
          ul: [
            'Student’s full name and phone number;',
            'Course name and batch details;',
            'Date and amount of payment;',
            'Receipt number;',
            'Reason for withdrawal; and',
            'Date on which the student decided to withdraw.'
          ]
        },
        'Upon receiving the request, techcadd will acknowledge it in writing, determine the applicable refund under this policy, and notify the student if any additional information or documentation is required.'
      ]
    },
    {
      id: 'processing',
      heading: '8. Refund Processing and Payment',
      body: [
        'Once a refund has been approved, the eligible amount will be processed within 10 working days of approval.',
        'Refunds will ordinarily be made by bank transfer to:',
        {
          ul: [
            'A bank account held in the student’s name; or',
            'The parent or guardian’s bank account where the parent or guardian was the original payer.'
          ]
        },
        'Where reasonably possible, refunds will be processed through the same payment route through which the original payment was received.',
        'Cash refunds will not be provided.',
        'The student will receive written confirmation specifying:',
        {
          ul: [
            'Approved refund amount;',
            'Applicable deductions;',
            'Net amount refunded; and',
            'Transaction or transfer reference, where applicable.'
          ]
        }
      ]
    },
    {
      id: 'grievance',
      heading: '9. Review and Grievance',
      body: [
        `If a student disagrees with the refund decision or calculation, they may request a review by writing to ${INBOX} and marking the communication for the Grievance Officer.`,
        'The institute will review the matter and respond within 15 working days, including a detailed explanation of the refund calculation and any applicable deductions.'
      ]
    },
    {
      id: 'statutory',
      heading: '10. Statutory Rights and Jurisdiction',
      body: [
        'Nothing in this policy is intended to limit or exclude any rights or remedies available to a student under the Consumer Protection Act, 2019, or any other applicable law.',
        'Any dispute that cannot be resolved amicably between the student and techcadd shall be subject to the jurisdiction of the competent courts at Jalandhar, Punjab, India.'
      ]
    }
  ]
}

/* ------------------------------------------------------------------
   Disclaimer.

   The general disclaimer the group's sites carry, with this centre's
   own name and contact details. It limits what the site promises; it
   states no figure of its own — no fee, no salary, no placement rate.
------------------------------------------------------------------ */
export const DISCLAIMER = {
  path: '/disclaimer',
  hero: {
    eyebrow: 'Legal',
    title: 'Disclaimer',
    accent: undefined,
    lead: 'What the information on this website is, what it is not, and how far it should be relied on.',
    facts: [
      { k: 'Last updated', v: LEGAL_UPDATED },
      { k: 'Applies to', v: 'techcaddludhiana.com' }
    ]
  },
  metaTitle: 'Disclaimer — techcadd Ludhiana',
  toc: [
    { id: 'general', label: 'General information' },
    { id: 'advice', label: 'No professional advice' },
    { id: 'placement', label: 'Placement and earnings' },
    { id: 'curriculum', label: 'Course content' },
    { id: 'links', label: 'External links' },
    { id: 'testimonials', label: 'Testimonials and reviews' },
    { id: 'availability', label: 'Availability' },
    { id: 'liability', label: 'Limitation of liability' },
    { id: 'contact', label: 'Contact' }
  ],
  sections: [
    {
      id: 'general',
      heading: 'General Information',
      body: [
        'The information provided on techcaddludhiana.com is for general informational and educational purposes only. While we endeavour to keep the information up to date and accurate, techcadd Computer Education makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability of the information, products, services or related graphics contained on the website.',
        'Any reliance you place on such information is strictly at your own risk.'
      ]
    },
    {
      id: 'advice',
      heading: 'No Professional Advice',
      body: [
        'The content on our website does not constitute professional, financial, legal or career advice. Course descriptions, career insights and industry information are provided for guidance purposes. We recommend consulting with a qualified professional for advice tailored to your specific situation.'
      ]
    },
    {
      id: 'placement',
      heading: 'Placement and Earnings Disclaimer',
      body: [
        'Placement information, salary ranges, hiring partner information and success stories shared on our website are based on historical data and individual student outcomes. They are provided for illustrative purposes and do not constitute a guarantee of similar results.',
        'Individual outcomes vary significantly based on factors including but not limited to: prior education and experience, effort and dedication during training, interview performance, market conditions, employer requirements, and geographic location. techcadd does not guarantee employment, placement or any specific salary level.'
      ]
    },
    {
      id: 'curriculum',
      heading: 'Course Content and Curriculum',
      body: [
        'Course curricula, durations, fees, tools, software versions and batch schedules published on our website are indicative and subject to change without prior notice. We continuously update our programmes to stay aligned with industry trends and technology advancements. The actual content delivered may differ from what is displayed on the website at the time of your enrolment.'
      ]
    },
    {
      id: 'links',
      heading: 'External Links',
      body: [
        'Our website may contain links to external websites or resources that are not maintained by techcadd. We do not endorse or assume responsibility for the content, privacy policies or practices of any third-party websites. Accessing external links is at your own risk.'
      ]
    },
    {
      id: 'testimonials',
      heading: 'Testimonials and Reviews',
      body: [
        'Student testimonials, reviews and success stories featured on our website represent individual experiences and opinions. They are genuine accounts but may not reflect the typical experience of all students. Results may vary.'
      ]
    },
    {
      id: 'availability',
      heading: 'Availability',
      body: [
        'We do not guarantee that our website will be available at all times or that it will be free from errors or interruptions. We may temporarily or permanently modify, suspend or discontinue any part of the website without prior notice.'
      ]
    },
    {
      id: 'liability',
      heading: 'Limitation of Liability',
      body: [
        'In no event shall techcadd, its directors, employees or agents be liable for any loss or damage — including without limitation, direct, indirect, incidental, special or consequential loss or damage, or any loss of data, use, goodwill or profits — arising from or in connection with the use of our website.'
      ]
    },
    {
      id: 'contact',
      heading: 'Contact',
      body: [
        'If you have questions about this disclaimer, please contact us:',
        `techcadd Computer Education, ${ADDRESS_FULL}. Email: ${INBOX} | Phone: ${PHONE_DISPLAY}.`
      ]
    }
  ]
}

export const LEGAL_PAGES = [PRIVACY_POLICY, TERMS, COOKIE_POLICY, REFUND_POLICY, DISCLAIMER]

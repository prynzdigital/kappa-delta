// lib/constants.ts
// Placeholder data for the Kappa Delta Chapter of Omega Psi Phi site.
// All [NEEDS CLIENT INPUT] items are documented here as TODOs.

export const SITE_DOMAIN = 'https://[DOMAIN]';
// TODO: [NEEDS CLIENT INPUT] — Replace [DOMAIN] with the registered domain (e.g., kdques.org) at launch.

export const CHAPTER_NAME = 'Kappa Delta Chapter of Omega Psi Phi Fraternity, Inc.';
export const CHAPTER_SHORT = 'Kappa Delta Chapter — Omega Psi Phi';

export const ADDRESS = {
  street: '1400 University Blvd Suite 230',
  city: 'Birmingham',
  state: 'AL',
  zip: '35233',
  full: '1400 University Blvd Suite 230, Birmingham, AL 35233',
};

// TODO: [NEEDS CLIENT INPUT] — Replace with actual chapter contact email.
export const CONTACT_EMAIL = 'contact@[DOMAIN]';

// TODO: [NEEDS CLIENT INPUT] — Replace with active social media handles and URLs.
export const SOCIAL_LINKS = {
  instagram: { handle: '@[SOCIAL_HANDLE]', url: 'https://instagram.com/[SOCIAL_HANDLE]' },
  facebook: { handle: '[SOCIAL_HANDLE]', url: 'https://facebook.com/[SOCIAL_HANDLE]' },
  twitter: { handle: '@[SOCIAL_HANDLE]', url: 'https://twitter.com/[SOCIAL_HANDLE]' },
};

// Placeholder events — replace with real event data before launch.
// TODO: [NEEDS CLIENT INPUT] — All event fields require client confirmation.
export interface Event {
  id: string;
  name: string;
  date: string; // ISO 8601 date string
  displayDate: string;
  time: string;
  location: string;
  locationAddress: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export const EVENTS: Event[] = [
  // TODO: [NEEDS CLIENT INPUT] — Replace all three placeholder events with real event data:
  // name, date, time, location, description, and CTA link.
  {
    id: 'event-info-night',
    name: 'Kappa Delta Chapter Information Night',
    date: '[NEEDS CLIENT INPUT]',
    displayDate: '[Date TBD — NEEDS CLIENT INPUT]',
    time: '[Time TBD — NEEDS CLIENT INPUT]',
    location: '[Campus Venue — NEEDS CLIENT INPUT]',
    locationAddress: 'UAB Campus, Birmingham, AL 35233',
    description:
      'Curious about joining Kappa Delta Chapter of Omega Psi Phi at UAB? This informal information night is open to all UAB undergraduate men who want to learn more about the chapter, meet current brothers, and ask questions in a relaxed setting. No commitment required — come as you are.',
    ctaLabel: 'Express Interest',
    ctaHref: '/contact',
  },
  {
    id: 'event-service-day',
    name: 'Brotherhood in Action — Community Service Day',
    date: '[NEEDS CLIENT INPUT]',
    displayDate: '[Date TBD — NEEDS CLIENT INPUT]',
    time: '[Time TBD — NEEDS CLIENT INPUT]',
    location: '[Service Location — NEEDS CLIENT INPUT]',
    locationAddress: 'Birmingham, AL',
    description:
      'Kappa Delta Chapter brothers join together for a day of service in the Birmingham community. All initiated members are encouraged to participate. Interested community members and UAB students who want to serve alongside the chapter may reach out via the contact page for details.',
    ctaLabel: 'Contact Us',
    ctaHref: '/contact',
  },
  {
    id: 'event-alumni-gathering',
    name: 'Kappa Delta Alumni Gathering',
    date: '[NEEDS CLIENT INPUT]',
    displayDate: '[Date TBD — NEEDS CLIENT INPUT]',
    time: '[Time TBD — NEEDS CLIENT INPUT]',
    location: '[Venue — NEEDS CLIENT INPUT]',
    locationAddress: 'Birmingham, AL',
    description:
      'An evening for initiated Kappa Delta brothers — past and present — to reconnect, share memories, and celebrate the brotherhood that has endured for more than five decades. Alumni from any graduating year are warmly welcome. Details and RSVP information available through the Alumni Network portal.',
    ctaLabel: 'Alumni Network',
    ctaHref: '/network',
  },
];

// Whether to show real event cards or the no-events placeholder.
// Set to false when no confirmed events exist — shows seasonal placeholder instead.
// TODO: [NEEDS CLIENT INPUT] — Set to true and populate EVENTS when real events are confirmed.
export const HAS_CONFIRMED_EVENTS = false;

// Testimonials — placeholder pending client input.
// TODO: [NEEDS CLIENT INPUT] — All three testimonials require quotes from current/former members.
export interface Testimonial {
  id: string;
  quote: string;
  attribution: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote:
      // TODO: [NEEDS CLIENT INPUT] — Replace with real quote (20–40 words) from a current or recent chapter member.
      '[NEEDS CLIENT INPUT: Quote from a current or recent Kappa Delta Chapter member describing what brotherhood meant to them — 20–40 words.]',
    attribution: '[First Name], [Line Name or Graduation Year]',
  },
  {
    id: 'testimonial-2',
    quote:
      // TODO: [NEEDS CLIENT INPUT] — Replace with real quote from an alumnus reflecting on the chapter's impact.
      '[NEEDS CLIENT INPUT: Quote from an alumnus reflecting on Kappa Delta Chapter\'s impact on his life — 20–40 words.]',
    attribution: '[First Name], Class of [Year]',
  },
  {
    id: 'testimonial-3',
    quote:
      // TODO: [NEEDS CLIENT INPUT] — Optional third testimonial.
      '[NEEDS CLIENT INPUT: Optional third testimonial — quote, first name, context.]',
    attribution: '[First Name], [Context]',
  },
];

// Lines (pledge classes) data.
// TODO: [NEEDS CLIENT INPUT] — Populate with all historical line data from the WordPress site.
export interface LineEntry {
  id: string;
  lineName: string;
  semester: string;
  memberCount: number;
  members: string[];
  narrative?: string;
}

export const LINES: LineEntry[] = [
  {
    id: 'revolutionary-evight',
    lineName: 'Revolutionary Evight',
    semester: 'Spring 1972',
    memberCount: 8,
    members: ['Melford Wright', 'Jimmy Harville', 'Rodney Williams', 'Homer Coke', 'Mike Russell', 'Henry Danzy', 'Warren Brown', 'Amos Townsend'],
    narrative: 'The founding line of Kappa Delta Chapter — eight men who established the first Black Greek-letter organization ever founded and chartered at the University of Alabama at Birmingham.',
  },
  {
    id: 'triumphant-three',
    lineName: 'Triumphant Three',
    semester: 'Fall 1972',
    memberCount: 3,
    members: ['Pauldo Smith', 'Leonardo Langford', 'Lorenza Robinson'],
  },
  {
    id: 'sole-survivor',
    lineName: 'Sole Survivor',
    semester: 'Spring 1973',
    memberCount: 1,
    members: ['Arthur Burns'],
  },
  {
    id: 'four-faces-of-fate',
    lineName: 'Four Faces of Fate',
    semester: 'Spring 1975',
    memberCount: 4,
    members: ['Larry T. Richardson', 'William Reasor', 'Alvin Johnson', 'Kittren Walker'],
  },
  {
    id: 'triple-threat-of-thunder',
    lineName: 'Triple Threat of Thunder',
    semester: 'Fall 1975',
    memberCount: 3,
    members: ['Harry Stewart', 'Darraugh Johnson', 'Darryl Hunter'],
  },
  {
    id: 'blood-sweat-tears-magic-gang',
    lineName: 'Blood, Sweat, Tears, & Magic Gang',
    semester: 'Fall 1978',
    memberCount: 4,
    members: ['Mike Davis', 'Victor Smith', 'Harrison Dejarnette', 'Connie Parson'],
  },
  {
    id: 'fantastic-five',
    lineName: 'Fantastic Five',
    semester: 'Winter 1979',
    memberCount: 5,
    members: ['Randy Freeney', 'Victor Hardy', 'Clint Jones', 'Roy Bridges', 'Ted Smith'],
  },
  {
    id: 'two-purple-knights',
    lineName: 'Two Purple Knights',
    semester: 'Spring 1980',
    memberCount: 2,
    members: ['Greg Perkins', 'Wayne Leonard'],
  },
  {
    id: 'fugitive-four',
    lineName: 'Fugitive Four',
    semester: 'Winter 1981',
    memberCount: 4,
    members: ['Vernotto McMillan', 'Rick Bayles', 'Kevin Carter', 'Cedric Neeley'],
  },
  {
    id: 'two-dogs-in-the-tenth',
    lineName: 'Two Dogs in the Tenth',
    semester: 'Winter 1982',
    memberCount: 2,
    members: ['Ken Evans', 'John Harris'],
  },
  {
    id: 'nasty-nickel',
    lineName: 'Nasty Nickel',
    semester: 'Winter 1983',
    memberCount: 5,
    members: ['Bobby Clayton', 'Kenon Caldwell', 'Rey Coleman', 'Dennis Scott', 'Larry D. Richardson'],
  },
  {
    id: 'invincible-four',
    lineName: 'Invincible Four',
    semester: 'Winter 1984',
    memberCount: 4,
    members: ['Joe Binder', 'Frank Hall', 'Wanemond Smith', 'Craig Jones'],
  },
  {
    id: 'sinister-three',
    lineName: 'Sinister Three',
    semester: 'Winter 1986',
    memberCount: 3,
    members: ['Eric Cleveland', 'Peter Goldman', 'Marvin Giles'],
  },
  {
    id: 'seven-dogs-on-a-bone',
    lineName: 'Seven Dogs on a Bone',
    semester: 'Winter 1987',
    memberCount: 7,
    members: ['Shelly Earson', 'Earl Harry', 'Rod Benson', 'Steve Croom', 'Antony Watkins', 'Lavente Stewart', 'Reg Turner'],
  },
  {
    id: 'five-dogs-with-fleas',
    lineName: 'Five Dogs with Fleas',
    semester: 'Winter 1988',
    memberCount: 5,
    members: ['Charles Higgins', 'Vernon Jenkins', 'Gerald Solomon', 'William Brown', 'Harold Watson'],
  },
  {
    id: 'nasty-octagon',
    lineName: 'Nasty Octagon',
    semester: 'Summer 1990',
    memberCount: 8,
    members: ['Lonnie Jones', 'Brian Sims', 'Rod Lewis', 'Roderick Jordan', 'Mark Campbell', 'Maurice Cole', 'Willie Goldsmith', 'Chris Anderson'],
  },
  {
    id: 'five-elements-of-destruction',
    lineName: 'Five Elements of Destruction',
    semester: 'Winter 1992',
    memberCount: 5,
    members: ['William Fortune', 'Elijah Bass', 'Terance Madden', 'Darrin Walker', 'Willie Chapman'],
  },
  {
    id: 'nickel-bag-of-funk',
    lineName: 'Nickel Bag of Funk',
    semester: 'Fall 1993',
    memberCount: 5,
    members: ['John Varner', 'Allison Wrenn', 'Reynold Williams', 'Douglas Taylor', 'Kenneth Wright'],
  },
  {
    id: 'four-causes-of-chaos',
    lineName: 'Four Causes of Chaos',
    semester: 'Fall 1995',
    memberCount: 4,
    members: ['Leander Rice', 'Torrey Paul', 'Eric Hardy', 'William Rodgers'],
  },
  {
    id: 'three-against-the-world',
    lineName: 'Three Against the World',
    semester: 'Fall 1996',
    memberCount: 3,
    members: ['Keith Roland', 'Maurice Hobson', 'Glenn Coleman'],
  },
  {
    id: 'seven-houndz-of-havoc',
    lineName: 'Seven Houndz of Havoc',
    semester: 'Spring 1998',
    memberCount: 7,
    members: ['Ryan Vann', 'Shundale Cooper', 'David Smith', 'Micah Grant', 'Joseph James', 'Kendrick Robinson', 'Wallace Rutledge'],
  },
  {
    id: 'pentagon-of-punishment',
    lineName: 'Pentagon of Punishment',
    semester: 'Spring 2000',
    memberCount: 5,
    members: ['Barry Smith', 'Tommie Thomas', 'Quez Shipman', 'George Richardson', 'Bobby Maxena'],
  },
  {
    id: 'double-jeopardy',
    lineName: 'Double Jeopardy',
    semester: 'Spring 2002',
    memberCount: 2,
    members: ['Bradley Hill', 'Jesse Escott Jr'],
  },
  {
    id: 'final-four',
    lineName: 'Final Four',
    semester: 'Spring 2004',
    memberCount: 4,
    members: ['Orazio Mancarella', 'Demarcus Davis', 'Brandon Davis', 'Shamar Abrams'],
  },
  {
    id: 'chapter-five-unbreakables',
    lineName: 'Chapter Five – The Unbreakables',
    semester: 'Spring 2007',
    memberCount: 5,
    members: ['Anthony Owens', 'Tremele Perry', 'Tony Shephard', 'Kerry Thompson', 'Joseph Arnold'],
  },
  {
    id: 'five-faces-of-perseverance',
    lineName: 'Five Faces of Perseverance',
    semester: 'Fall 2008',
    memberCount: 5,
    members: ['Lenny Thompson', 'Arthur James', 'Kendrick Wooten', 'Ahmed Saeed', 'AJ McMillion'],
  },
  {
    id: 'six-souls-of-the-resurrection',
    lineName: 'Six Souls of the Resurrection',
    semester: 'Spring 2009',
    memberCount: 6,
    members: ['Darryl Patterson', 'Keldon Watts', 'Francis McDaniel', 'Demetrius Smith', 'John Gregory', 'Bryant Turner Jr'],
  },
  {
    id: 'three-the-hard-way',
    lineName: 'Three the Hard Way',
    semester: 'Spring 2011',
    memberCount: 3,
    members: ['Jamal Fitts', 'Josh Harris', 'Byron Goodwin'],
  },
  {
    id: 'four-soldiers-purple-holoqaust',
    lineName: 'Four Soldiers of the Purple HoloQaust',
    semester: 'Fall 2012',
    memberCount: 4,
    members: ['Terrell Brooks', 'John Williams', 'Troy Patterson', 'Nehemiah Horace'],
  },
  {
    id: 'six-fugitives-of-insanity',
    lineName: 'The Six Fugitives of Insanity',
    semester: 'Spring 2014',
    memberCount: 6,
    members: ['Timothy Alexander', 'William Wesley', 'Tomi Akinduro', 'LaVarius Harris', 'Jervaughn Hunter', 'Conrad Atkins'],
  },
  {
    id: 'eight-to-be-qontinued',
    lineName: '8 To Be Qontinued',
    semester: 'Spring 2016',
    memberCount: 8,
    members: ['Coulter Green', 'Bobby Fowler', 'Tajh Lowe', 'Jordan Clark', 'Jordan Benson', 'Artavious Birdsong', 'LeDarian McKinstry', 'Larry Pettaway'],
  },
  {
    id: 'conquerors-of-qhaos',
    lineName: 'Conquerors of Qhaos',
    semester: 'Fall 2018',
    memberCount: 3,
    members: ['Jordan Harris', 'Andrew Spriggs', 'Ozzy Moffett'],
  },
  {
    id: 'six-survivors-of-the-quenundrum',
    lineName: '6 Survivors of the Quenundrum',
    semester: 'Spring 2019',
    memberCount: 6,
    members: ['Justin Fletcher', 'Thomas Gamble', 'Danteus Brown', 'Walter Fanning', 'Deiontae Williams', 'Joshua Wrenn'],
  },
];

// Gallery placeholder images — replace with real assets.
// TODO: [NEEDS CLIENT INPUT] — All gallery photo assets to be supplied or migrated from
// https://kdques.wordpress.com. Confirm: (1) hi-res originals available? (2) additional
// photos not on current site? (3) any photos NOT to be migrated?
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
}

// #008 fix: each placeholder image has a unique, numbered alt text so screen readers
// can distinguish photos in the gallery. Replace alt text with real descriptions when
// client photography is supplied.
export const GALLERY_IMAGES: GalleryImage[] = Array.from({ length: 9 }, (_, i) => ({
  id: `gallery-placeholder-${i + 1}`,
  src: '/images/placeholder-gallery.svg',
  alt: `Kappa Delta Chapter event photo ${i + 1} of 9 — placeholder pending chapter photography`,
  caption: `[NEEDS CLIENT INPUT: Caption for photo ${i + 1}]`,
  width: 800,
  height: 600,
}));

export const ANNIVERSARY_IMAGES: GalleryImage[] = Array.from({ length: 9 }, (_, i) => ({
  id: `anniversary-placeholder-${i + 1}`,
  src: '/images/placeholder-gallery.svg',
  alt: `Kappa Delta Chapter 46th Anniversary photo ${i + 1} of 9 — placeholder pending chapter photography`,
  caption: `[NEEDS CLIENT INPUT: Caption for 46th Anniversary photo ${i + 1}]`,
  width: 800,
  height: 600,
}));

// TODO: [NEEDS CLIENT INPUT] — Confirm year of the 46th Anniversary celebration.
// Based on 1971 founding, this would be approximately 2017.
export const ANNIVERSARY_YEAR = '[YEAR — NEEDS CLIENT INPUT]';

// History milestones for About page timeline.
export const MILESTONES = [
  {
    id: 'milestone-founded',
    date: 'November 17, 1971',
    badgeDate: 'NOV 17\n1971',
    headline: 'Founded at UAB',
    body: 'Eight men establish the first Black Greek-letter organization on the UAB campus. The Kappa Delta Chapter is born.',
  },
  {
    id: 'milestone-chartered',
    date: 'May 19, 1972',
    badgeDate: 'MAY 19\n1972',
    headline: 'Officially Chartered',
    body: 'The chapter receives its official charter from Omega Psi Phi Fraternity, Inc. — the first Black Greek-letter organization to be formally chartered at the University of Alabama at Birmingham.',
  },
  {
    id: 'milestone-monument',
    date: 'Campus Monument',
    badgeDate: 'CAMPUS\nMONUMENT',
    headline: 'Monument Near the Ullman West Building',
    // TODO: [NEEDS CLIENT INPUT] — Exact monument inscription text and installation date, if available.
    body: "The Kappa Delta Chapter's legacy is recognized in permanent form: a monument on the UAB campus near the historic Ullman West Building. Physical acknowledgment of a chapter's founding is rare. Ours stands as a reminder to every student who walks past it.",
  },
  {
    id: 'milestone-president',
    date: 'UAB Leadership',
    badgeDate: 'STUDENT\nGOV\'T',
    // TODO: [NEEDS CLIENT INPUT] — Name of the alumnus who served as UAB student government president,
    // and consent for public mention. If not available, this milestone stays anonymous.
    headline: 'UAB Student Government President',
    body: "A Kappa Delta Chapter brother has served as President of UAB's student government — a testament to the chapter's commitment to campus leadership, not just brotherhood. Leadership developed inside Kappa Delta reaches beyond the chapter.",
  },
  {
    id: 'milestone-46th',
    date: '46th Anniversary',
    badgeDate: '46TH\nANNIV.',
    headline: '46th Chapter Anniversary',
    // TODO: [NEEDS CLIENT INPUT] — Confirm year of 46th anniversary. Any narrative details?
    body: `The chapter celebrated its 46th anniversary — a gathering of brothers past and present, documented in the Gallery.`,
  },
  {
    id: 'milestone-54-years',
    date: '2026',
    badgeDate: '54\nYEARS',
    headline: '54 Years and Counting — 2026',
    body: 'As of 2026, Kappa Delta Chapter has been continuously active at UAB for 54 years. Every new line of initiated members adds another chapter to a story that began in 1971.',
  },
];

// Cardinal principles for About page.
// TODO: [NEEDS CLIENT INPUT] — Confirm the four cardinal principles and provide 1-2 sentence
// descriptions for each in Kappa Delta Chapter's own words.
export const CARDINAL_PRINCIPLES = [
  {
    id: 'manhood',
    name: 'Manhood',
    description:
      '[NEEDS CLIENT INPUT: Chapter\'s 1–2 sentence description of the Manhood principle, or confirm use of national organization language.]',
  },
  {
    id: 'scholarship',
    name: 'Scholarship',
    description:
      '[NEEDS CLIENT INPUT: Chapter\'s 1–2 sentence description of the Scholarship principle.]',
  },
  {
    id: 'perseverance',
    name: 'Perseverance',
    description:
      '[NEEDS CLIENT INPUT: Chapter\'s 1–2 sentence description of the Perseverance principle.]',
  },
  {
    id: 'uplift',
    name: 'Uplift',
    description:
      '[NEEDS CLIENT INPUT: Chapter\'s 1–2 sentence description of the Uplift principle.]',
  },
];

// FAQ data for Contact page.
export const FAQ_SECTIONS = [
  {
    id: 'about-opsi',
    heading: 'About Omega Psi Phi and Kappa Delta Chapter',
    items: [
      {
        id: 'faq-what-is-opsi',
        question: 'What is Omega Psi Phi Fraternity, Inc.?',
        answer:
          'Omega Psi Phi Fraternity, Inc. is one of the nine historically Black fraternities and sororities that make up the National Pan-Hellenic Council (NPHC). Founded in 1911 at Howard University, Omega Psi Phi is built on the cardinal principles of Manhood, Scholarship, Perseverance, and Uplift. The Kappa Delta Chapter at UAB is one of hundreds of chapters across the country — and the first ever founded and chartered at UAB.',
      },
      {
        id: 'faq-what-makes-kd-different',
        question: 'What makes Kappa Delta Chapter different from other fraternities at UAB?',
        answer:
          'Kappa Delta Chapter of Omega Psi Phi is the first Black Greek-letter organization both founded and chartered at the University of Alabama at Birmingham — a distinction earned in 1971 and held to this day. The chapter\'s 54-year continuous presence on campus, its permanent monument near the Ullman West Building, and its multigenerational network of initiated alumni make it a one-of-a-kind institution at UAB.',
      },
    ],
  },
  {
    id: 'for-prospective',
    heading: 'For Prospective Members',
    items: [
      {
        id: 'faq-qualify',
        question: 'Do I qualify to join? What are the requirements?',
        // TODO: [NEEDS CLIENT INPUT] — Specific eligibility: GPA, semester hours, enrollment status.
        answer:
          'Eligibility requirements for membership intake are announced through official chapter channels. Reach out via the interest form above and a chapter representative will be happy to discuss whether you meet the requirements for consideration.',
      },
      {
        id: 'faq-when-intake',
        question: 'When is the next intake period?',
        // TODO: [NEEDS CLIENT INPUT] — Intake timing (semester, year, or "announced seasonally").
        answer:
          'Intake periods are announced seasonally through the chapter\'s official social media accounts and this website. The best way to stay informed is to follow the chapter on social media and check the Events page for informational meeting announcements.',
      },
      {
        id: 'faq-cost',
        question: 'What does joining cost in time and money?',
        // TODO: [NEEDS CLIENT INPUT] — Membership fees, dues, and time commitment expectations.
        answer:
          'The time and financial commitments associated with membership are shared with prospective members during the intake interest process. Reach out through the interest form to start that conversation.',
      },
      {
        id: 'faq-active',
        question: 'Is the chapter active on campus, or mostly historical?',
        answer:
          'Kappa Delta Chapter is very much active. The chapter participates in UAB campus events, community service in the Birmingham area, and hosts its own events for members and prospective members throughout the academic year. The Events page reflects the chapter\'s current calendar, and the Lines page shows the men who have been initiated in recent years.',
      },
      {
        id: 'faq-no-connection',
        question: "I don't know anyone in the chapter personally. Can I still reach out?",
        answer:
          'Absolutely. Kappa Delta Chapter welcomes inquiries from any UAB undergraduate man who is curious about membership. You do not need a personal connection to express interest — that is exactly what the form on this page is for. Your inquiry is welcomed, not judged.',
      },
      {
        id: 'faq-hazing',
        question: "I've heard some things about hazing in Greek organizations. How does Kappa Delta handle that?",
        // TODO: [NEEDS CLIENT INPUT] — Any chapter-specific anti-hazing language or policies to feature.
        answer:
          'Omega Psi Phi Fraternity, Inc. has a strict national anti-hazing policy, and the Kappa Delta Chapter upholds it. Brotherhood is built through shared commitment and shared values — not harm. Any questions about the chapter\'s culture and standards are welcome to raise directly with chapter officers through the contact form.',
      },
    ],
  },
  {
    id: 'for-alumni',
    heading: 'For Alumni',
    items: [
      {
        id: 'faq-alumni-space',
        question: 'Is there a place for alumni on this site?',
        answer:
          'Yes. The Alumni Network page is a gated space exclusively for initiated Kappa Delta brothers. There, you can reconnect with chapter alumni, find upcoming events, and stay in touch with the current chapter. If you do not yet have login credentials, reach out via the contact form on this page and indicate "Alumni Network Access" — a chapter officer will be in touch.',
      },
      {
        id: 'faq-reconnect',
        question: "I've been out of touch for years. Will reconnecting feel awkward?",
        answer:
          'Not at all. Brotherhood does not expire with a diploma. Whether you were initiated five years ago or forty years ago, you are a Kappa Delta brother and you are welcome here. The Network portal and chapter events are designed for exactly this — making it easy to come back.',
      },
      {
        id: 'faq-portal-access',
        question: 'How do I get access to the Alumni Network portal?',
        // TODO: [NEEDS CLIENT INPUT] — Exact instructions for alumni portal account creation or access provisioning.
        answer:
          'Visit the Alumni Network page and follow the instructions to request access. Alternatively, reach out through the contact form on this page and indicate "Alumni Network Access" in your message — a chapter representative will respond with instructions.',
      },
      {
        id: 'faq-events',
        question: 'How do I find out what events are coming up?',
        // TODO: [NEEDS CLIENT INPUT] — Social media handles to link here.
        answer:
          "The chapter's Events page lists all upcoming public events — interest meetings, alumni gatherings, community service days, and chapter celebrations. You can also follow the chapter on social media for real-time announcements.",
      },
    ],
  },
];

// How to Join steps for Contact page.
export const HOW_TO_JOIN_STEPS = [
  {
    id: 'step-1',
    number: '1',
    headline: 'Learn and Explore',
    body: "Start here. Read through the chapter's history, values, and the stories of the men who came before you. Attend a chapter-sponsored informational event when they are announced. Understanding who we are is the foundation of a genuine decision.",
    // TODO: [NEEDS CLIENT INPUT] — Does the chapter hold formal "interest meetings"? What are they called? How frequently held?
    note: '[NEEDS CLIENT INPUT: Confirm whether formal interest/informational meetings are held, and at what frequency.]',
  },
  {
    id: 'step-2',
    number: '2',
    headline: 'Express Interest',
    body: "When you're ready, reach out. Fill out the interest form on this page or contact us directly. There are no commitments attached to expressing interest — it simply opens the door to a conversation.",
    // TODO: [NEEDS CLIENT INPUT] — Who receives form submissions and what is the expected response time?
    note: '[NEEDS CLIENT INPUT: Who receives submitted forms? Confirm expected response time (e.g., "within 48 hours").]',
  },
  {
    id: 'step-3',
    number: '3',
    headline: 'The Intake Process',
    body: 'The formal membership intake process is governed by Omega Psi Phi Fraternity, Inc. national policies and chapter standards. Eligibility requirements, timelines, and intake periods are announced through official chapter channels.',
    // TODO: [NEEDS CLIENT INPUT] — GPA requirement, semester hours, intake timing, chapter-specific requirements, dues/fees.
    note: '[NEEDS CLIENT INPUT: GPA minimum, semester hours, intake period timing, chapter-specific requirements, and membership fees — required before this section can be finalized.]',
  },
];

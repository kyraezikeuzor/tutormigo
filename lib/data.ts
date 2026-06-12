export type Stat = { number: string; label: string };
export type Cta = { label: string; href: string };
export type Detail = { heading: string; text: string };

export type AccordionItem = {
  id: string;
  label: string;
  body?: string;
  details?: Detail[];
  cta?: Cta;
};

export type Service = { title: string; description: string };

export type Tutor = {
  name: string;
  photo: string;
  college: string;
  collegeLogo: string;
  credentials: string[];
};

export type Founder = {
  name: string;
  photo: string;
  bio: string;
  email: string;
};

export type SiteData = {
  hero: { ctaLabel: string; ctaLink: string };
  impact: {
    stats: Stat[];
  };
  founder: Founder;
  tutors: Tutor[];
  services: Service[];
  referral: AccordionItem;
  faqs: AccordionItem[];
  contact: { email: string };
};

export const SITE: SiteData = {
  hero: {
    ctaLabel: "Book Free Session",
    ctaLink: "https://chip-era-331.notion.site/364234e7224a80269b73fd3baa4d1ed0?pvs=105",
  },

  impact: {
    stats: [
      { number: "1550", label: "Tutor SAT Score" },
      { number: "$25", label: "Per Hour With Referral" },
      { number: "FREE", label: "First Session" },
      { number: "83%", label: "Cheaper Than Ivy Standard" },
      
    ],
  },

  // Add photo under /public/imgs/founder/
  founder: {
    name: "Kyra Ezikeuzor",
    photo: "/imgs/founder/kyra-e.png",
    bio: "I'm a rising sophomore at Columbia and scored a 1560, but honestly the whole SAT/college prep process was a lot to figure out. So my friends from Columbia, Yale, and Harvard and I wanted to give back. We're offering free 30-min calls this week to help families think through summer prep. If you have a high schooler and that sounds helpful, just contact me and we'll find a time!",
    email: "koe2103@columbia.edu",
  },

  // Add college logos under /public/imgs/colleges/
  tutors: [
    {
      name: "Asia Genawi",
      photo: "/imgs/tutors/asia-g.png",
      college: "Columbia University",
      collegeLogo: "",
      credentials: [
        "SAT 1550 (800 Math, 750 Reading)",
        "Coca-Cola Scholar",
        "AI + Quantum Physics Researcher, Columbia GILM Lab & Yale Wright Lab",
      ],
    },
    {
      name: "Prisca Agbeyibor",
      photo: "/imgs/tutors/prisca-a.png",
      college: "Barnard College of Columbia University",
      collegeLogo: "",
      credentials: [
        "SAT Reading 700",
        "Ron Brown Scholarship Award",
        "College Board African American Scholar",
        "National Archives Intern",
      ],
    },
    {
      name: "Emily Igwike",
      photo: "/imgs/tutors/emily-i.png",
      college: "Harvard University",
      collegeLogo: "",
      credentials: ["HS Salutatorian", "National Poet", "5s on 7 AP Exams"],
    },
    {
      name: "Teresa Sillah",
      photo: "/imgs/tutors/teresa-s.png",
      college: "Texas A&M",
      collegeLogo: "",
      credentials: [
        "4.00 GPA in Public Health",
        "Peer Mentor for First-Gen Students",
        "Distinguished Honor Roll",
      ],
    },
    {
      name: "Aishah Salman",
      photo: "/imgs/tutors/aishah-s.png",
      college: "Yale University",
      collegeLogo: "",
      credentials: ["1480 SAT", "Google Code Next Scholar"],
    },
    {
      name: "Blythe Bath",
      photo: "/imgs/tutors/blythe-b.png",
      college: "Georgetown University",
      collegeLogo: "",
      credentials: ["36 ACT", "HS Valedictorian", "National Merit"],
    },
    {
      name: "Alanna Denault",
      photo: "/imgs/tutors/alanna-d.png",
      college: "Columbia University",
      collegeLogo: "",
      credentials: ["35 ACT", "NYC Parks Intern", "5s on 7 AP Exams"],
    },
    {
      name: "Eliana Igwike",
      photo: "/imgs/tutors/eliana-i.png",
      college: "Washington University in St. Louis",
      collegeLogo: "",
      credentials: [
        "Nonprofit Founder",
        "Yale Science Award",
        "Science Researcher",
      ],
    },
    {
      name: "Oyenike Oladapo-Ekundayo",
      photo: "/imgs/tutors/nike-o.png",
      college: "Columbia University",
      collegeLogo: "",
      credentials: [
        "1530 SAT",
        "5s on 6 AP Exams",
        "Laidlaw Research Scholar",
        "Columbia Social Work Research Lab",
      ],
    },
    {
      name: "Elizabeth Ogbonnaya",
      photo: "/imgs/tutors/elizabeth-o.png",
      college: "Columbia University",
      collegeLogo: "",
      credentials: [
        "NCNW Achievers Award Recipient",
        "AP Scholar & College Board Recognition",
        "Columbia ACComPLISHED Advisor",
        "SHIP Health Internship",
      ],
    },
    {
      name: "Emanuela Adeyemi",
      photo: "/imgs/tutors/emanuela-a.png",
      college: "Columbia University",
      collegeLogo: "",
      credentials: [
        "Mock Trial Awards",
        "Math Mastery",
        "Great SAT Reading",
      ],
    },
    {
      name: "Jenna Beyer",
      photo: "/imgs/tutors/jenna-b.png",
      college: "University of Texas at Austin",
      collegeLogo: "",
      credentials: [
        "34 ACT",
        "4.5 GPA & 4.0",
        "National Merit",
        "Honors Program",
      ],
    },
    {
      name: "Favour Olagunju",
      photo: "/imgs/tutors/favour-o.png",
      college: "Columbia University",
      collegeLogo: "",
      credentials: ["1500 SAT", "College Board Tutor", "Columbia Scholar"],
    },
    {
      name: "Anjana Sethi",
      photo: "/imgs/tutors/anjana-s.png",
      college: "Baylor University",
      collegeLogo: "",
      credentials: [
        "Graduate Cum Laude, St. Agnes Academy",
        "Reynolds and Reynolds Internship",
        "Dean's List at Baylor University",
      ],
    },
    {
      name: "Wambui Nyiha",
      photo: "/imgs/tutors/wambui-n.png",
      college: "Barnard College of Columbia University",
      collegeLogo: "",
      credentials: [
        "34 ACT",
        "Davis UWC Scholar",
        "Phillips Academy Andover",
        "Dean's List, 3.9 GPA",
        "Columbia Zuckerman Institute Researcher",
      ],
    },
    {
      name: "Nadia Dawlett",
      photo: "/imgs/tutors/nadia-d.png",
      college: "Trinity University",
      collegeLogo: "",
      credentials: [
        "Magna Cum Laude, St. Agnes Academy",
        "Math Excellence Award",
        "$132K Murchison Scholarship",
        "English Course TA",
        "AKPsi Business Fraternity",
      ],
    },
    {
      name: "Iman Ali",
      photo: "/imgs/tutors/iman-a.png",
      college: "George Washington University",
      collegeLogo: "",
      credentials: [
        "Presidential Volunteer Service Award",
        "National Honor Society",
        "Senate Recognition for Community Service",
        "Presidential Academic Scholarship",
      ],
    },
    {
      name: "Alyssia Huang",
      photo: "/imgs/tutors/alyssia-h.png",
      college: "Columbia University",
      collegeLogo: "",
      credentials: [
        "NYU Researcher",
        "Civil Engineering",
        "Nonprofit & Women's Health Advocate",
      ],
    },
    {
      name: "Alegria Silvi",
      photo: "/imgs/tutors/alegria-s.png",
      college: "Columbia University",
      collegeLogo: "",
      credentials: [
        "33 ACT",
        "DC Think Tank Internship",
        "Dean's List at Columbia",
        "Salutatorian, Sonoma Valley HS (13 APs, 4.5 GPA)",
      ],
    },
  ],

  services: [
    {
      title: "College Consulting",
      description:
        "Standout resume building and admissions strategy.",
    },
    {
      title: "College Essay Prep",
      description:
        "Authentic personal statements and supplemental essay editing.",
    },
    {
      title: "Digital SAT Prep & ACT",
      description:
        "High-impact strategy drills to eliminate testing anxiety and unlock top scores.",
    },
    {
      title: "Mathematics",
      description:
        "Curriculum preview and support for Pre-Algebra, Algebra 1, Geometry, Pre-Calculus, and Calculus.",
    },
    {
      title: "Scholarship Help",
      description:
        "Targeted guidance on finding, applying for, and winning merit and need-based scholarships.",
    },
    {
      title: "AP Tutoring",
      description:
        "Course support and exam prep across AP subjects to build confidence and earn college credit.",
    },
  ],

  referral: {
    id: "referral",
    label: "Referral Program",
    body: "Refer a friend and unlock $25/hour tutoring — our best rate. To get your referral code, email koe2103@columbia.edu or call us. When your referral applies, they must mention they were referred by you.",
    cta: { label: "Get Your Referral Code", href: "mailto:koe2103@columbia.edu" },
  },

  faqs: [
    {
      id: "ages",
      label: "What ages can tutoring be done for?",
      body: "Middle school (6th grade) through 12th grade is recommended. We tailor sessions to each student's level and goals.",
    },
    {
      id: "inperson",
      label: "Do you do in-person tutoring?",
      body: "For now, sessions are virtual only. In-person tutoring in the Houston, TX area may be available starting summer 2026.",
    },
    {
      id: "trust",
      label: "How do I know I can trust you?",
      body: "Our tutors attend elite Ivy League and T20 schools, have won hundreds of thousands in scholarships, scored perfect SAT math scores and 1530+ SAT scores, and bring additional experience in career planning and college admissions.",
    },
  ],

  contact: {
    email: "koe2103@columbia.edu",
  },
};

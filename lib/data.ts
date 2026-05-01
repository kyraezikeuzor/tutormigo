export type Stat = { number: string; label: string };
export type PlaceImpact = { city: string; country: string };
export type Photo = { src: string; alt: string };
export type DonateTier = { amount: string; label: string };
export type Cta = { label: string; href: string };
export type Detail = { heading: string; text: string };

export type AccordionItem = {
  id: string;
  label: string;
  body?: string;
  details?: Detail[];
  cta?: Cta;
};

export type SocialLink = {
  platform: string;
  icon: "ig" | "li" | "tt" | "email";
  href: string;
};

export type SiteData = {
  hero: { tagline: string; subline: string; donateLabel: string; donateLink: string };
  about: { body: string };
  impact: {
    stats: Stat[];
    highlights: string[];
    countries: string[];
    states: string[];
    placeImpact: PlaceImpact[];
  };
  gallery: { heading: string; photos: Photo[] };
  donateTiers: DonateTier[];
  getInvolved: AccordionItem[];
  programs: AccordionItem[];
  social: SocialLink[];
};

export const SITE: SiteData = {
  hero: {
    tagline: "Omelora means #Changemaker.",
    subline:
      "Join 1,500 young people bridging gaps in education through kits, books, letters, and mentorship. All youth-led, all real impact.",
    donateLabel: "Donate",
    donateLink: "https://givebutter.com/kfk2025", // ← replace
  },

  about: {
    body: `The name Omelora means "changemaker" in Igbo, an African language. We believe young people can create real change in their communities when given the tools, trust, and opportunity to lead. Omelora was founded by Kyra Ezikeuzor, a Nigerian-American student from Houston, Texas, after learning that orphans in Nigeria lacked basic school supplies. Witnessing deep scarcity alongside abundance made clear that young people have both the empathy and the capacity to close these gaps when given the chance.`,
  },

  impact: {
    stats: [
      { number: "1,500", label: "Volunteers" },
      { number: "40",    label: "Ambassadors" },
      { number: "34",    label: "Countries" },
      { number: "300",   label: "Impacted" },
    ],
    highlights: [
      "2 mini libraries built",
      "30 laptops delivered to an orphanage in Nigeria",
      "100 care kits donated to the Door Bronx Youth Center",
      "Projects in Houston, NYC, Nigeria, Uganda, and Indonesia",
    ],
    countries: [
      "Afghanistan","Albania","Algeria","Argentina","Australia","Bangladesh",
      "Bolivia","Brazil","Cameroon","Canada","Chile","China","Colombia",
      "DR Congo","Ecuador","Egypt","Ethiopia","France","Germany","Ghana",
      "India","Indonesia","Italy","Jamaica","Japan","Jordan","Kenya",
      "Mexico","Morocco","Nepal","Nigeria","Pakistan","Peru","Philippines",
      "Rwanda","Senegal","South Africa","Spain","Tanzania","Uganda",
      "Ukraine","United Kingdom","United States","Venezuela","Vietnam",
      "Zambia","Zimbabwe",
    ],
    states: [
      "Alabama","Arizona","California","Colorado","Connecticut","Florida",
      "Georgia","Illinois","Indiana","Louisiana","Maryland","Massachusetts",
      "Michigan","Minnesota","New Jersey","New York","North Carolina",
      "Ohio","Pennsylvania","Tennessee","Texas","Virginia","Washington",
    ],
    placeImpact: [
      { city: "Enugu",   country: "Nigeria" },
      { city: "Kampala", country: "Uganda" },
    ],
  },

  gallery: {
    heading: "In the Field",
    // Add real image paths under /public — e.g. src: "/photos/volunteers.jpg"
    photos: [
      { src: "/imgs/books.jpg", alt: "Book donations" },
      { src: "/imgs/fundraiser.png", alt: "Fundraiser" },
      { src: "/imgs/mlsf.jpg", alt: "Kids at Kampala, Uganda" },
    ],
  },

  donateTiers: [
    { amount: "$3",   label: "Donate 1 kid's book" },
    { amount: "$5",   label: "Donate 1 school kit" },
    { amount: "$10",  label: "Sponsor 1 kid's laptop" },
    { amount: "$50",  label: "Sponsor 10 school kits" },
    { amount: "$150", label: "Sponsor a STEM workshop" },
    { amount: "$300", label: "Sponsor a computer lab" },
  ],

  getInvolved: [
    {
      id: "volunteer",
      label: "How to Volunteer",
      body: "Volunteering with Omelora is flexible and open to everyone. Earn hours by contributing to our programs from wherever you are.",
      details: [
        {
          heading: "Supplies and Arts",
          text: "Create letters, coloring pages, bookmarks, and workbooks that go directly to youth in partner communities. All submissions are reviewed monthly and distributed to our NGO partners.",
        },
        {
          heading: "Events and Fundraisers",
          text: "Join power-hours, visit days, webinars, and fundraising campaigns. Every event is a chance to make a connection and grow our reach.",
        },
      ],
      cta: { label: "Apply to Volunteer", href: "https://docs.google.com/forms/d/e/1FAIpQLSeg2098KJYe4yq0qPFS2WWnEuxTXskMYDahOEfMwSDWgjWPDQ/viewform" },
    },
    {
      id: "donate",
      label: "Donate to Support",
      body: "Every dollar goes toward getting real resources into the hands of young people who need them most. From school kits to laptops to mini libraries. Even small amounts go a long way — three dollars donates a book, five dollars sends a full school kit.",
      cta: { label: "Give Now", href: "https://givebutter.com/kfk2025" },
    },
  ],

  programs: [
    {
      id: "campaigns",
      label: "Campaigns",
      body: "Each month, Omelora runs a focused campaign tied to a specific partner, school, or region. We connect already available resources like used books, laptops, and school supplies to learning centers that need them most. Our volunteers power these campaigns through fundraising, drives, and outreach, and 95% of every dollar raised goes directly to the cause.",
    },
    {
      id: "mentorship",
      label: "Mentorship",
      body: "The Omelora Mentorship Program connects young volunteers with youth in local and global communities through monthly workshops on health literacy, environmental literacy, and technology literacy. Both in-person and virtual formats are available. All mentors receive ready-to-use slides, printed guides, and a recorded orientation. Minimum commitment is 2 to 3 hours a month for at least 3 months.",
    },
    {
      id: "ambassadors",
      label: "Ambassadors",
      body: "Ambassadors are Omelora's frontline leaders. They represent us in their schools, cities, and communities by organizing fundraisers, building partnerships, and spreading our mission. With 40 active ambassadors, our collective goal is $1,000 raised each month. Ambassadors earn verified service hours and leadership recognition in return.",
      cta: { label: "Apply to Be an Ambassador", href: "https://docs.google.com/forms/d/e/1FAIpQLScqqdCssbgSu1xCLMojkYiCK7ZBfA1zyGulR5Tnr7RGamNw4A/viewform?usp=header" },
    },
    {
      id: "pages",
      label: "Pages",
      body: "The Omelora Pages Program is where our volunteers become creators. We partner with NGOs who have strong educational content that isn't reaching kids. Our network adapts their reports and resources into youth-ready, offline-accessible workbooks, activity sheets, coloring pages, and bookmarks over 3 to 4 weeks using our shared Canva workspace.",
    },
    {
      id: "chapters",
      label: "Chapters",
      body: "Omelora Chapters bring the mission local. Each chapter is a youth-led team that organizes at least one supply drive and one fundraiser per semester, meets monthly for hands-on activities like letter making and kit packing, and donates directly to local youth learning centers. Chapter leaders earn volunteer hours for every event they run.",
    },
    {
      id: "events",
      label: "Events",
      body: "From virtual workshops to in-person visit days, Omelora hosts events that bring people together around education, wellness, and youth leadership. Every event is an opportunity to volunteer, learn, connect, and contribute. Check our Instagram and TikTok for upcoming dates and registration links.",
    },
  ],

  social: [
    { platform: "Instagram", icon: "ig",    href: "https://instagram.com/omeloraproject" },
    { platform: "LinkedIn",  icon: "li",    href: "https://linkedin.com/company/omelora" },
    { platform: "TikTok",    icon: "tt",    href: "https://tiktok.com/@omeloraproject" },
    { platform: "Email",     icon: "email", href: "mailto:contact@omelora.org" },
  ],
};
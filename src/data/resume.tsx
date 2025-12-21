import { Code, Globe } from "lucide-react";

export const RESUME_DATA = {
  name: "Riski",
  initials: "RS",
  location: "Lhokseumawe, Aceh, ID",
  locationLink: "https://maps.app.goo.gl/CqbzMxSKi8z591qB9",
  about:
    "Student at Politeknik Negeri Lhokseumawe (TRKJ). Software Engineer focused on building integrated Web & Mobile ecosystems.",
  summary:
    "A Software Engineer with a strong foundation in Network Engineering. I specialize in bridging the gap between Mobile Applications (Flutter) and Modern Web Backends (Laravel/Next.js) to deliver secure and scalable digital solutions. Currently available for Internship/WFH positions.",
  avatarUrl: "https://github.com/mriskisyahputraa2.png",
  personalWebsiteUrl: "https://riski.dev",
  cvUrl: "/cv_riski_fullstack.pdf",
  contact: {
    email: "riskideveloper2@gmail.com",
    tel: "+628123456789",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/mriskisyahputraa2",
        icon: Code,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/muhammad-rizki-syahputraaa/",
        icon: Globe,
      },
    ],
  },
  skills: [
    "Next.js 15",
    "React",
    "Laravel",
    "Flutter",
    "Inertia.js",
    "MySQL",
    "Tailwind CSS",
    "Docker",
    "Git",
  ],
  projects: [
    {
      title: "PanganKU",
      slug: "panganku", // 1. SLUG UNTUK URL
      techStack: ["Laravel", "Flutter", "MySQL", "Fullstack"],
      description:
        "An integrated e-commerce platform consisting of a Web Admin dashboard and a Mobile Customer App.",

      // 2. DATA UNTUK CARD (GAMBAR 1)
      role: "Fullstack Developer",
      period: "Jan 2024 - Mar 2024",
      image: "/assets/images/projects/panganku.png",

      // 3. DATA UNTUK DETAIL PAGE (GAMBAR 2)
      website: "#",
      source: "https://github.com/username/panganku",
      details: {
        brief:
          "PanganKU is a digital platform designed to help local farmers sell their products directly to consumers. It cuts the middleman, ensuring better prices for farmers and fresher produce for buyers.",
        responsibility: [
          "Designed the database schema for multi-user roles (Admin, Farmer, Customer).",
          "Developed the REST API using Laravel for the Flutter mobile app.",
          "Implemented real-time order tracking using Firebase.",
          "Created the Admin Dashboard for inventory management.",
        ],
        result:
          "Successfully launched the beta version with 50+ active farmers and 200+ daily transactions. Reduced food waste by 15% through better inventory tracking.",
      },
    },
    {
      title: "UKM Policy Voting System",
      slug: "ukm-policy-voting",
      techStack: ["Next.js", "Database Design", "Side Project"],
      description:
        "An e-voting platform developed for the UKM Policy student organization to handle high-concurrency traffic.",

      role: "Backend Developer",
      period: "Oct 2023 - Dec 2023",
      image: "/assets/images/projects/ukmpolicy.png",

      website: "https://ukmpolicy.com",
      source: "https://github.com/username/voting",
      details: {
        brief:
          "A secure and transparent e-voting system built for student organization elections. The system focuses on preventing double-voting and ensuring anonymity.",
        responsibility: [
          "Built the voting engine using Next.js Server Actions.",
          "Optimized database queries to handle 1000+ concurrent users.",
          "Implemented encryption for voter anonymity.",
          "Designed the real-time result dashboard.",
        ],
        result:
          "Handled 3,000+ votes in a 4-hour window with zero downtime. Increased voter participation by 40% compared to the manual system.",
      },
    },
    {
      title: "UKM Policy Voting System",
      slug: "ukm-policy-voting",
      techStack: ["Next.js", "Database Design", "Side Project"],
      description:
        "An e-voting platform developed for the UKM Policy student organization to handle high-concurrency traffic.",

      role: "Backend Developer",
      period: "Oct 2023 - Dec 2023",
      image: "/assets/images/projects/ukmpolicy.png",

      website: "https://ukmpolicy.com",
      source: "https://github.com/username/voting",
      details: {
        brief:
          "A secure and transparent e-voting system built for student organization elections. The system focuses on preventing double-voting and ensuring anonymity.",
        responsibility: [
          "Built the voting engine using Next.js Server Actions.",
          "Optimized database queries to handle 1000+ concurrent users.",
          "Implemented encryption for voter anonymity.",
          "Designed the real-time result dashboard.",
        ],
        result:
          "Handled 3,000+ votes in a 4-hour window with zero downtime. Increased voter participation by 40% compared to the manual system.",
      },
    },
    {
      title: "UKM Policy Voting System",
      slug: "ukm-policy-voting",
      techStack: ["Next.js", "Database Design", "Side Project"],
      description:
        "An e-voting platform developed for the UKM Policy student organization to handle high-concurrency traffic.",

      role: "Backend Developer",
      period: "Oct 2023 - Dec 2023",
      image: "/assets/images/projects/ukmpolicy.png",

      website: "https://ukmpolicy.com",
      source: "https://github.com/username/voting",
      details: {
        brief:
          "A secure and transparent e-voting system built for student organization elections. The system focuses on preventing double-voting and ensuring anonymity.",
        responsibility: [
          "Built the voting engine using Next.js Server Actions.",
          "Optimized database queries to handle 1000+ concurrent users.",
          "Implemented encryption for voter anonymity.",
          "Designed the real-time result dashboard.",
        ],
        result:
          "Handled 3,000+ votes in a 4-hour window with zero downtime. Increased voter participation by 40% compared to the manual system.",
      },
    },
    {
      title: "UKM Policy Voting System",
      slug: "ukm-policy-voting",
      techStack: ["Next.js", "Database Design", "Side Project"],
      description:
        "An e-voting platform developed for the UKM Policy student organization to handle high-concurrency traffic.",

      role: "Backend Developer",
      period: "Oct 2023 - Dec 2023",
      image: "/assets/images/projects/ukmpolicy.png",

      website: "https://ukmpolicy.com",
      source: "https://github.com/username/voting",
      details: {
        brief:
          "A secure and transparent e-voting system built for student organization elections. The system focuses on preventing double-voting and ensuring anonymity.",
        responsibility: [
          "Built the voting engine using Next.js Server Actions.",
          "Optimized database queries to handle 1000+ concurrent users.",
          "Implemented encryption for voter anonymity.",
          "Designed the real-time result dashboard.",
        ],
        result:
          "Handled 3,000+ votes in a 4-hour window with zero downtime. Increased voter participation by 40% compared to the manual system.",
      },
    },
  ],
} as const;

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
      techStack: ["Fullstack", "Laravel", "Flutter", "MySQL"],
      description:
        "An integrated e-commerce platform consisting of a Web Admin dashboard and a Mobile Customer App. Features real-time order tracking and inventory management.",
      link: {
        label: "panganku.com",
        href: "#",
      },
    },
    {
      title: "UKM Policy Voting System",
      techStack: ["Side Project", "Next.js", "Database Design"],
      description:
        "An e-voting platform developed for the UKM Policy student organization. Designed to handle high-concurrency traffic during election periods.",
      link: {
        label: "ukmpolicy.com",
        href: "https://ukmpolicy.com",
      },
    },
  ],
} as const;

export interface ProjectDetails {
  slug: string; // Untuk URL (misal: /projects/panganku)
  title: string;
  shortDescription: string;
  year: string;
  role: string;
  platform: string; // Web / Mobile / Full Stack
  thumbnail: string; // Gambar depan
  images: string[]; // Gambar detail (Screenshots)
  techStack: string[];
  description: string;
  problem: string;
  solution: string;
  features: string[];
  links: {
    github?: string;
    demo?: string;
    playstore?: string;
  };
}

export const PROJECTS_DATA: ProjectDetails[] = [
  {
    slug: "panganku-app",
    title: "E-commerce PanganKU ",
    shortDescription:
      "Integrated E-Grocery ecosystem featuring a Flutter Mobile App for customers and a Laravel Dashboard for vendors.",
    year: "Sep 2025 - Nov 2025",
    role: "Full Stack Web Developer & Mobile",
    platform: "Web Application & Mobile (Android)",
    thumbnail: "/assets/images/projects/t-panganku.png",
    images: [],
    techStack: [
      "Flutter",
      "Laravel",
      "React",
      "MySQL",
      "REST API",
      "Tailwind",
      "Framer Motion",
    ],
    description:
      "PanganKU is a comprehensive digital solution designed to bridge the gap between local food producers and consumers. It consists of two main components: a customer-facing mobile application built with Flutter for seamless shopping experiences, and a web-based administration dashboard built with Laravel for inventory and order management.",
    problem:
      "Local farmers and food distributors struggled with manual inventory tracking and limited market reach. Customers faced difficulties in finding fresh local produce with transparent pricing and easy delivery options.",
    solution:
      "I engineered a synchronized ecosystem where stock updates on the Web Dashboard are instantly reflected on the Mobile App via RESTful APIs. The system includes a secure checkout process, real-time order status tracking, and automated stock deduction to prevent overselling.",
    features: [
      "Real-time Inventory Sync",
      "Secure Checkout & Payment Proof Upload",
      "Order Status Tracking (Pending, Processed, Shipped)",
      "Admin Dashboard for Sales Reporting",
    ],
    links: {
      github: "https://github.com/mriskisyahputraa2/panganku",
      demo: "https://panganku.mrkasir.com",
    },
  },
  {
    slug: "upzis-pnl",
    title: "UPZIS Politeknik Negeri Lhokseumawe",
    shortDescription:
      "Digital platform for Zakat and Donation collection with automated reporting and admin verification tools.",
    year: "2025",
    role: "Full Stack Web Developer",
    platform: "Web Application",
    thumbnail: "/assets/images/projects/t-upzis-2.png",
    images: [],
    techStack: [
      "Laravel",
      "Inertia.js",
      "React",
      "Tailwind",
      "MySQL",
      "Framer Motion",
    ],
    description:
      "A centralized platform for the Unit Pengumpul Zakat (UPZIS) at Politeknik Negeri Lhokseumawe. This system digitizes the entire donation workflow, from fund collection to distribution tracking, ensuring transparency and accountability.",
    problem:
      "Previous donation management relied on manual spreadsheets and physical receipts, leading to slow reporting processes and difficulties in tracking donor history.",
    solution:
      "Developed a modern web application featuring a Zakat Calculator to help users estimate their obligations. The system integrates with payment gateways (Gopay, Dana) and provides admins with tools to generate PDF/Excel financial reports instantly.",
    features: [
      "Zakat Calculator (Gold, Income, Savings)",
      "Multi-channel Payment Support",
      "Automated Receipt Generation (PDF)",
      "Mustahik (Beneficiary) Verification Workflow",
    ],
    links: {
      github: "https://github.com/mriskisyahputraa2",
      demo: "#",
    },
  },
  {
    slug: "policy-official-website",
    title: "UKM POLICY Official Site",
    shortDescription:
      "Official organization website managing member data, events, and blogs. Built with a focus on SEO and performance.",
    year: "2025",
    role: "Tech Lead & Full Stack Developer",
    platform: "Web Application",
    thumbnail: "/assets/images/projects/t-ukmpolicy.png",
    images: [],
    techStack: [
      "Laravel",
      "React",
      "Inertia.js",
      "MySQL",
      "Tailwind",
      "Framer Motion",
    ],
    description:
      "The official digital presence for the Polytechnic Linux Community (POLICY). Beyond just a landing page, this system serves as a membership management hub and an event publication platform.",
    problem:
      "The organization lacked a centralized database for members and a professional platform to showcase their activities and articles to the public.",
    solution:
      "Built a high-performance Single Page Application (SPA) using Inertia.js and Laravel. Implemented a CMS-like feature for administrators to publish blogs and events easily, while maintaining strict Role-Based Access Control (RBAC).",
    features: [
      "Member Registration & Database",
      "Blog & Event Management System (CMS)",
      "Role-Based Access Control (Admin vs Member)",
      "SEO Optimized Content Rendering",
    ],
    links: {
      github: "https://github.com/mriskisyahputraa2",
      demo: "https://ukmpolicy.com",
    },
  },
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio Website",
    shortDescription:
      "A high-performance personal portfolio website built with Next.js 14, featuring bilingual support and smooth animations.",
    year: "2026",
    role: "Frontend Developer",
    platform: "Web Application",
    thumbnail: "/assets/images/projects/t-portofolio.png",
    images: [],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
      "Lucide React",
    ],
    description:
      "My personal corner on the web. This portfolio was crafted to showcase my projects and technical skills in a clean, modern interface. It leverages the latest Next.js features like App Router for optimal performance and SEO.",
    problem:
      "I needed a professional platform to aggregate my work, experience, and contact information that reflects my current technical capabilities and supports an international audience (Bilingual).",
    solution:
      "Developed a responsive web application using Next.js and TypeScript. Implemented a custom internationalization (i18n) system for English/Indonesian support and used Framer Motion for engaging user interactions without sacrificing load speed.",
    features: [
      "Bilingual Support (ID/EN)",
      "Dark / Light Mode Theme",
      "Responsive Bento Grid Layout",
      "High Performance & SEO Optimized",
    ],
    links: {
      github: "https://github.com/mriskisyahputraa2",
      demo: "https://rizkisyahputra.dev",
    },
  },
];

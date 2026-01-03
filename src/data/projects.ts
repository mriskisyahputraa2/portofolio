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
    title: "PanganKU Ecosystem",
    shortDescription:
      "Integrated E-Grocery ecosystem featuring a Flutter Mobile App for customers and a Laravel Dashboard for vendors.",
    year: "Sep 2025 - Nov 2025",
    role: "Full Stack Mobile & Web Developer",
    platform: "Mobile (Android) & Web Application",
    thumbnail: "/assets/images/projects/panganku.png",
    images: [
      "/assets/images/projects/panganku-1.png",
      "/assets/images/projects/panganku-2.png",
    ],
    techStack: ["Flutter", "Laravel", "MySQL", "REST API", "Firebase"],
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
    slug: "upzis-donation-system",
    title: "UPZIS Digital Donation",
    shortDescription:
      "Digital platform for Zakat and Donation collection with automated reporting and admin verification tools.",
    year: "2025",
    role: "Full Stack Web Developer",
    platform: "Web Application",
    thumbnail: "/assets/images/projects/upzis-thumb.png",
    images: [],
    techStack: ["Laravel", "Inertia.js", "React", "Tailwind CSS", "MySQL"],
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
    thumbnail: "/assets/images/projects/policy-thumb.png",
    images: [],
    techStack: ["Laravel", "React", "Inertia.js"],
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
    slug: "policy-official-websites",
    title: "UKM POLICY Official Sites",
    shortDescription:
      "Official organization website managing member data, events, and blogs. Built with a focus on SEO and performance.",
    year: "2025",
    role: "Tech Lead & Full Stack Developer",
    platform: "Web Application",
    thumbnail: "/assets/images/projects/policy-thumb.png",
    images: [],
    techStack: ["Laravel", "React", "Inertia.js"],
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
    },
  },
];

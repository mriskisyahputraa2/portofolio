import { GitHubIcon, LinkedInIcon, InstagramIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Muhammad Rizki Syahputra",
  initials: "MR",
  location: "Lhokseumawe, Aceh, ID",
  locationLink: "https://www.google.com/maps/place/Lhokseumawe",

  avatarUrl: "/assets/images/profiles/riski.png",

  personalWebsiteUrl: "https://your-portfolio.com",

  summary:
    "Student of Network Computer Engineering at Politeknik Negeri Lhokseumawe specializing in Full Stack Web & Mobile Development. Experienced in building real-world solutions ranging from Donation Systems to E-Grocery platforms.",

  summary_id:
    "Mahasiswa Teknologi Rekayasa Komputer Jaringan di Politeknik Negeri Lhokseumawe dengan spesialisasi Full Stack Web & Mobile Development. Berpengalaman membangun solusi nyata mulai dari Sistem Donasi hingga platform E-Grocery.",

  contact: {
    email: "riskideveloper2@gmail.com",
    tel: "+62895603456706",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/mriskisyahputraa2",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/muhammad-rizki-syahputraaa/",
        icon: LinkedInIcon,
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/mrizkisyahputraa/",
        icon: InstagramIcon,
      },
    ],
  },

  education: [
    {
      school: "Politeknik Negeri Lhokseumawe",
      href: "https://pnl.ac.id",
      degree: "Sarjana Terapan (D4) Teknologi Rekayasa Komputer Jaringan",
      start: "2023",
      end: "Sekarang",
      logo: "/assets/pnl-logo.png",
      description:
        "Fokus pada Infrastruktur Jaringan, Keamanan Siber, dan Rekayasa Perangkat Lunak. \n Mata Kuliah Utama: Cloud Computing (AWS/Docker), Ethical Hacking & Digital Forensics, Mobile App Dev (Flutter), dan Pemrograman Web Lanjut.",
    },
  ],

  work: [
    {
      company: "UPZIS Politeknik Negeri Lhokseumawe",
      href: "https://pnl.ac.id",
      badges: ["Laravel", "Inertia.js", "React", "Tailwind"],
      location: "Lhokseumawe, Indonesia",
      title: "Full Stack Web Developer",
      logoUrl: "/assets/pnl-logo.png",
      start: "Sep 2025",
      end: "Nov 2025",
      description:
        "Merancang Sistem Informasi Zakat & Donasi yang komprehensif untuk mendigitalkan alur kerja keuangan.\n• Mengembangkan platform donatur dengan fitur Kalkulator Zakat dan gateway pembayaran (Gopay, Dana, Tunai).\n• Membangun Dashboard Admin untuk pemantauan transaksi real-time dan verifikasi Mustahik.",
    },
    {
      company: "UKM Polytechnic Linux Community (POLICY)",
      href: "#",
      badges: ["Leadership", "Laravel", "Scrum", "Mentoring"],
      location: "Lhokseumawe, Indonesia",
      title: "Head of Programming Division",
      logoUrl: "/assets/policy-logo.png",
      start: "2024",
      end: "2025",
      description:
        "Memimpin Divisi Pemrograman, mengawasi pelaksanaan program kerja teknis dan workshop.\n• Memimpin pengembangan end-to-end website resmi UKM POLICY menggunakan Laravel dan React.js.\n• Bertindak sebagai Scrum Master/Tech Lead, mengelola siklus pengembangan dan membimbing anggota junior.",
    },
    {
      company: "UKM Polytechnic Linux Community (POLICY)",
      href: "#",
      badges: ["Web Development", "Teamwork"],
      location: "Lhokseumawe, Indonesia",
      title: "Web Developer Team",
      logoUrl: "/assets/policy-logo.png",
      start: "Mei 2025",
      end: "Agus 2025",
      description:
        "Berkolaborasi dalam tim untuk merancang dan mengimplementasikan kehadiran digital organisasi.\n• Fokus pada arsitektur backend menggunakan Laravel untuk memastikan penanganan data yang aman.",
    },
    {
      company: "Dinas PUPR Lhokseumawe",
      href: "#",
      badges: ["Internship", "Administration"],
      location: "Lhokseumawe, Indonesia",
      title: "IT Support Intern",
      logoUrl: "/assets/pupr-logo.png",
      start: "Des 2021",
      end: "Mar 2022",
      description:
        "Mendukung efisiensi operasional Dinas Pekerjaan Umum.\n• Membantu pemrosesan data teknis dan pengarsipan digital untuk dokumentasi proyek kota yang akurat.",
    },
  ],

  skills: [
    "Flutter",
    "Laravel",
    "Next.js",
    "React.js",
    "Inertia.js",
    "Tailwind CSS",
    "Node.js",
    "MySQL",
    "PostgreSQL",
    "Docker",
    "AWS (EC2, S3)",
    "Git",
    "Cyber Security (Basic)",
  ],

  projects: [
    {
      title: "PanganKU",
      techStack: ["Flutter", "Laravel", "REST API", "MySQL"],
      description:
        "Ekosistem E-Grocery terintegrasi yang menampilkan Aplikasi Mobile untuk pelanggan dan Web Dashboard untuk manajemen inventaris.",
      link: {
        label: "github.com",
        href: "https://github.com/mriskisyahputraa2/panganku",
      },
    },
    {
      title: "UKM POLICY Website",
      techStack: ["Laravel", "Inertia.js", "React", "Tailwind"],
      description:
        "Website resmi organisasi untuk mengelola data anggota, acara, dan blog. Dibangun dengan fokus pada SEO dan kinerja.",
      link: {
        label: "github.com",
        href: "https://github.com/mriskisyahputraa2",
      },
    },
    {
      title: "Sistem Donasi UPZIS",
      techStack: ["Laravel", "React", "Payment Gateway"],
      description:
        "Platform digital untuk pengumpulan Zakat dan Donasi dengan pelaporan otomatis dan alat verifikasi admin.",
      link: {
        label: "github.com",
        href: "https://github.com/mriskisyahputraa2",
      },
    },
  ],
} as const;

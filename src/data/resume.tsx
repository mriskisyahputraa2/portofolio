import {
  GitHubIcon,
  LinkedInIcon,
  InstagramIcon,
  ThreadsIcon,
  TikTokIcon,
} from "@/components/icons";

export const RESUME_DATA = {
  name: "Muhammad Rizki Syahputra",
  initials: "MR",
  location: "Lhokseumawe, Aceh, ID",
  locationLink: "https://www.google.com/maps/place/Lhokseumawe",

  avatarUrl: "/assets/images/profiles/2.png",

  personalWebsiteUrl: "https://your-portfolio.com",

  // --- 1. HALAMAN ABOUT (Versi Panjang) ---
  summary: `Hello! Glad to have you on my personal website!

I'm Muhammad Rizki Syahputra, a Full Stack Developer based in Aceh, Indonesia. My journey in tech is a blend of coding, leading teams, and crafting digital solutions.

With 3 years of experience in software development, my core expertise lies in Laravel for robust backend architecture, followed by Next.js and React for dynamic frontends. Additionally, I develop seamless cross-platform applications using Flutter.

During my studies at Politeknik Negeri Lhokseumawe, I worked on impactful projects like PanganKU and the UPZIS Donation System, which sparked my love for building apps that solve real-world problems.

Beyond coding, I thrive on collaboration. My experience leading technical teams has strengthened my soft skills in project management (Scrum) and peer mentoring, emphasizing the importance of solid communication.

Currently, I am also deepening my knowledge in Cloud Computing and Cybersecurity to ensure every application I build is not only functional but also secure and scalable.

When I'm not coding, I'm always looking for ways to learn new things. Let's connect and create something amazing together!

Best regards,`,
  // --- 2. HALAMAN ABOUT (Versi Indonesia) ---
  summary_id: `Halo! Senang Anda berada di website pribadi saya!

Saya Muhammad Rizki Syahputra, seorang Full Stack Developer yang berdomisili di Aceh, Indonesia. Perjalanan saya di dunia teknologi adalah campuran dari coding, memimpin tim, dan menciptakan solusi digital.

Dengan 3 tahun pengalaman dalam pengembangan perangkat lunak, saya memiliki keahlian mendalam terutama pada Laravel untuk backend yang tangguh, diikuti dengan Next.js dan React untuk frontend yang interaktif. Di sisi mobile, saya mengembangkan aplikasi lintas platform menggunakan Flutter.

Selama kuliah di Politeknik Negeri Lhokseumawe, saya berkesempatan mengerjakan proyek berdampak seperti PanganKU dan Sistem Donasi UPZIS. Proyek-proyek ini memicu kecintaan saya untuk membangun aplikasi yang menyelesaikan masalah nyata.

Selain coding, saya berkembang melalui kolaborasi. Pengalaman saya memimpin tim teknis telah memperkuat soft skills dalam manajemen proyek (Scrum) dan mentoring rekan kerja, tanpa melupakan pentingnya komunikasi yang solid.

Saat ini, saya juga sedang memperdalam ilmu di bidang Cloud Computing dan Keamanan Siber untuk memastikan setiap aplikasi yang saya bangun tidak hanya fungsional, tetapi juga aman dan scalable.

Ketika saya tidak coding, saya selalu mencari cara untuk belajar hal baru. Mari terhubung dan ciptakan sesuatu yang luar biasa bersama!

Salam Hormat,`,

  // --- 3. HERO SECTION (Versi Pendek - Final) ---
  summaryShort:
    "Experienced as a Full Stack Developer with 3 years of expertise in Web & Mobile Development. I have a strong track record of engineering scalable digital solutions and integrated ecosystems. Backed by BNSP Certification and proven excellence at the National LKS level, I combine technical proficiency with a disciplined approach. Currently refining my expertise in Computer Network Engineering, which strengthens my understanding of cloud infrastructure and security for every application I build.",

  // --- 4. HERO SECTION (Versi Indonesia - Final) ---
  summaryShort_id:
    "Berpengalaman sebagai Full Stack Developer dengan 3 tahun keahlian dalam pengembangan Web & Mobile. Saya memiliki rekam jejak kuat dalam merekayasa solusi digital yang skalabel dan ekosistem terintegrasi. Didukung oleh Sertifikasi BNSP dan pengalaman kompetitif di LKS Tingkat Nasional, saya menggabungkan kemahiran teknis dengan etos kerja disiplin. Saat ini memperdalam keahlian Teknologi Rekayasa Komputer Jaringan, yang memperkuat pemahaman saya dalam infrastruktur cloud dan keamanan untuk setiap aplikasi yang saya bangun.",

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
      {
        name: "Threads",
        url: "https://www.threads.net/@mrizkisyahputraa",
        icon: ThreadsIcon,
      },
      {
        name: "TikTok",
        url: "https://www.tiktok.com/@mrizkisyahputraa",
        icon: TikTokIcon,
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

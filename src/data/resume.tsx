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

During my studies at Lhokseumawe State Polytechnic, I was involved in impactful projects such as the Lhokseumawe State Polytechnic UPZIS Donation System and PanganKU, which sparked my interest in developing applications that can solve real-world problems.

Beyond coding, I thrive on collaboration. My experience leading technical teams has strengthened my soft skills in project management (Scrum) and peer mentoring, emphasizing the importance of solid communication.

Currently, I am also deepening my knowledge in Cloud Computing and Cybersecurity to ensure every application I build is not only functional but also secure and scalable.

When I'm not coding, I'm always looking for ways to learn new things. Let's connect and create something amazing together!

Best regards,`,
  // --- 2. HALAMAN ABOUT (Versi Indonesia) ---
  summary_id: `Halo! Senang Anda berada di website pribadi saya!

Saya Muhammad Rizki Syahputra, seorang Full Stack Developer yang berdomisili di Aceh, Indonesia. Perjalanan saya di dunia teknologi adalah campuran dari coding, memimpin tim, dan menciptakan solusi digital.

Dengan 3 tahun pengalaman dalam pengembangan perangkat lunak, saya memiliki keahlian mendalam terutama pada Laravel untuk backend yang tangguh, diikuti dengan Next.js dan React untuk frontend yang interaktif. Di sisi mobile, saya mengembangkan aplikasi lintas platform menggunakan Flutter.

Selama kuliah di Politeknik Negeri Lhokseumawe, saya berkesempatan mengerjakan proyek berdampak seperti Sistem Donasi UPZIS Politeknik Negeri Lhokseumawe dan PanganKU. Proyek-proyek ini memicu kecintaan saya untuk membangun aplikasi yang menyelesaikan masalah nyata.

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
    cvUrl: "/assets/files/cv-riski.pdf",
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
      degree: "D-IV Teknologi Rekayasa Komputer Jaringan",
      start: "2023",
      end: "Sekarang",
      logo: "/assets/pnl-logo.png",
      // Pastikan field ini BAHASA INGGRIS
      description:
        "Study Focus: Computer Networks, Cyber Security, Cloud Computing, IoT, and Application Development.\nLabs: Cloud Computing & DevOps (AWS, Docker), Cyber Security (Ethical Hacking, Digital Forensics), and Web & Mobile App Development.",
      // Pastikan field ini BAHASA INDONESIA (dan nama fieldnya description_id)
      description_id:
        "Fokus Studi: Jaringan Komputer, Keamanan Siber, Cloud Computing, IoT, dan Pengembangan Aplikasi.\nPraktikum: Cloud Computing & DevOps (AWS, Docker), Keamanan Siber (Ethical Hacking, Digital Forensics), serta Pengembangan Aplikasi Web & Mobile.",
    },
  ],

  work: [
    {
      company: "UPZIS Politeknik Negeri Lhokseumawe",
      href: "https://pnl.ac.id",
      badges: ["Full Stack Web Developer"],
      location: "Lhokseumawe, Aceh",
      title: "Full Stack Web Developer",
      logoUrl: "/assets/images/careers/logo-pnl.png",
      start: "Sep 2025",
      end: "Nov 2025",
      // Deskripsi Bahasa Inggris
      description:
        "Designed and built the UPZIS PNL information system to digitize donations.\nImplemented Zakat Calculator, Donation Transactions (Gopay, Dana, Cash), and beneficiary aid workflow (Mustahik).\nBuilt a comprehensive admin panel for data management, transaction verification, and financial report export (PDF/Excel).",
      // Deskripsi Bahasa Indonesia
      description_id:
        "Merancang dan membangun sistem informasi UPZIS PNL untuk mendigitalisasi donasi.\nMengimplementasikan fitur Kalkulator Zakat, Transaksi Donasi (Gopay, Dana, Tunai), dan alur pengajuan bantuan (Mustahik).\nMembangun panel admin untuk manajemen data, verifikasi transaksi, dan ekspor laporan keuangan (PDF/Excel).",
    },
    {
      company: "Unit Kegiatan Mahasiswa Polytechnic Linux Community",
      href: "#",
      badges: ["Full Stack Web Developer + Scrum"],
      location: "Lhokseumawe, Aceh",
      title: "Full Stack Web Developer",
      logoUrl: "/assets/images/careers/logo-ukmpolicy.jpeg",
      start: "Mei 2025",
      end: "Agu 2025",
      // Deskripsi Bahasa Inggris
      description:
        "Led the end-to-end design and implementation of the official UKM POLICY website.\nBuilt a dynamic full-stack solution using Laravel (Back-End) and React.js (Front-End).\nResponsible for the development lifecycle while acting as Scrum Master to manage team workflows.",
      // Deskripsi Bahasa Indonesia
      description_id:
        "Memimpin desain dan implementasi end-to-end website resmi UKM POLICY.\nMembangun solusi full-stack dinamis menggunakan Laravel (Back-End) dan React.js (Front-End).\nBertanggung jawab atas development lifecycle sekaligus bertindak sebagai Scrum Master untuk mengelola workflow tim.",
    },
    {
      company: "Dinas PUPR Kota Lhokseumawe",
      href: "#",
      badges: ["Internship"],
      location: "Lhokseumawe, Aceh",
      title: "Internship",
      logoUrl: "/assets/images/careers/logo-pupr.png",
      start: "Apr 2022",
      end: "Jun 2022",
      // Deskripsi Bahasa Inggris
      description:
        "Assisted the team in processing technical data and operational administration.\nCollected and archived official documents and correspondence.\nUtilized office software for data processing and basic design tasks.",
      // Deskripsi Bahasa Indonesia
      description_id:
        "Membantu tim dalam pemrosesan data teknis dan administrasi operasional dinas.\nMelakukan pengumpulan dan pengarsipan dokumen resmi serta surat-menyurat.\nMenggunakan perangkat lunak perkantoran untuk pengolahan data dan desain dasar.",
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

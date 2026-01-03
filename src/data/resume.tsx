import { GitHubIcon, LinkedInIcon, InstagramIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Muhammad Rizki Syahputra",
  initials: "MR",
  location: "Lhokseumawe, Aceh, ID",
  locationLink: "https://www.google.com/maps/place/Lhokseumawe",

  avatarUrl: "/assets/images/profiles/2.png",

  personalWebsiteUrl: "https://your-portfolio.com",

  summary: `Hello there! Thank you for visiting my personal website. I'm Muhammad Rizki Syahputra, a student majoring in Network Computer Engineering at Politeknik Negeri Lhokseumawe. I'm a Full Stack Web & Mobile Developer with a passion for building impactful software products. My stack includes modern frontend technologies like Next.js, React, and Tailwind CSS, as well as backend development using Laravel and PHP. For mobile applications, I develop cross-platform apps using Flutter.

I enjoy creating solutions that are both user-friendly and performant. Whether it's building intuitive interfaces or architecting backend services (REST API), I aim to bring efficiency and clarity into every layer of the application. I’m a fast learner who thrives in dynamic environments, and I enjoy solving complex problems collaboratively.

I believe that great communication and team synergy are key to success in software development. My experience, especially as Head of Programming Division at UKM POLICY, has shaped my technical and analytical skills, as well as my leadership qualities. I'm always excited to work in teams, learn from others, and contribute to impactful projects.

Best regards,`,

  // 2. VERSI BAHASA INDONESIA (Terjemahan yang disesuaikan)
  summary_id: `Halo! Terima kasih telah mengunjungi website pribadi saya. Saya Muhammad Rizki Syahputra, mahasiswa Teknologi Rekayasa Komputer Jaringan di Politeknik Negeri Lhokseumawe. Saya seorang Full Stack Web & Mobile Developer yang memiliki semangat untuk membangun produk perangkat lunak yang berdampak. Stack teknologi saya meliputi teknologi frontend modern seperti Next.js, React, dan Tailwind CSS, serta pengembangan backend menggunakan Laravel dan PHP. Untuk aplikasi mobile, saya mengembangkan aplikasi lintas platform menggunakan Flutter.

Saya senang menciptakan solusi yang ramah pengguna dan berkinerja tinggi. Baik itu membangun antarmuka yang intuitif atau merancang layanan backend (REST API), saya bertujuan untuk menghadirkan efisiensi dan kejelasan di setiap lapisan aplikasi. Saya adalah pembelajar cepat yang berkembang di lingkungan dinamis, dan saya senang memecahkan masalah kompleks secara kolaboratif.

Saya percaya bahwa komunikasi yang baik dan sinergi tim adalah kunci keberhasilan dalam pengembangan perangkat lunak. Pengalaman saya, terutama sebagai Ketua Divisi Pemrograman di UKM POLICY, telah membentuk keterampilan teknis dan analitis saya, serta kualitas kepemimpinan saya. Saya selalu bersemangat untuk bekerja dalam tim, belajar dari orang lain, dan berkontribusi pada proyek-proyek yang berdampak.

Salam hangat,`,
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

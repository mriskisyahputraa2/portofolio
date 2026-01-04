export interface Achievement {
  id: string;
  title: string;
  year: string;
  category: "Certification" | "Award" | "Competition";
  issuer: string;
  image: string;
  link: string;
}

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: "1",
    title: "Web Developer",
    year: "2025",
    category: "Certification",
    issuer: "BNSP (Badan Nasional Sertifikasi Profesi)",
    image: "/assets/images/achievements/sertifikat.png",
    link: "#", // Masukkan link Google Drive bukti sertifikat
  },
  {
    id: "2",
    title: "Kompetisi Pemasaran “Aneuk Aceh Berani”",
    year: "2025",
    category: "Competition",
    issuer: "Pertamina",
    image: "/assets/images/achievements/sertifikat.png", // Ganti dengan foto dokumentasi/sertifikat
    link: "#",
  },
  {
    id: "3",
    title: "Junior Web Developer",
    year: "2023",
    category: "Certification",
    issuer: "BNSP (Badan Nasional Sertifikasi Profesi)",
    image: "/assets/images/achievements/sertifikat.png",
    link: "#",
  },
  {
    id: "4",
    title: "Lomba Kompetensi Siswa (LKS) Nasional",
    year: "2022",
    category: "Competition",
    issuer: "Puspresnas (Kemendikbudristek)",
    image: "/assets/images/achievements/sertifikat.png", // Ganti dengan foto sertifikat/medali
    link: "#",
  },
];

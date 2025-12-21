import { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiReact,
  SiLaravel,
  SiFlutter,
  SiTailwindcss,
  SiTypescript,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiKalilinux,
  SiGit,
  SiNodedotjs,
  SiPhp,
  SiHtml5,
  SiFramer,
  SiFirebase,
  SiExpress,
  SiMongodb,
  SiVercel,
  SiInertia,
  SiGithub,
  SiBootstrap,
} from "react-icons/si";
import { Code2, Database, Globe } from "lucide-react"; // Icon fallback

// 1. Definisikan Data Terpusat
export const TECH_STACK = [
  // --- FRONTEND ---
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "Inertia.js", icon: SiInertia, color: "#9553E9" },
  { name: "Framer Motion", icon: SiFramer, color: "#0099FF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },

  // --- BACKEND & DB ---
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#ffffff" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },

  // --- TOOLS ---
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  { name: "Kali Linux", icon: SiKalilinux, color: "#557C94" },
];

// 2. Buat Helper Function untuk dipakai dimanapun
export function getTechDetails(tagName: string) {
  const normalizedTag = tagName.toLowerCase();

  // Cari skill yang namanya mengandung tag yang dicari
  const tech = TECH_STACK.find(
    (item) =>
      item.name.toLowerCase() === normalizedTag ||
      item.name.toLowerCase().includes(normalizedTag)
  );

  if (tech) {
    return { icon: tech.icon, color: tech.color };
  }

  // Fallback jika tag tidak ada di list (misal: "Fullstack", "Database Design")
  if (normalizedTag.includes("database"))
    return { icon: Database, color: "#a1a1aa" };
  if (normalizedTag.includes("web")) return { icon: Globe, color: "#a1a1aa" };

  // Default Icon
  return { icon: Code2, color: "#a1a1aa" }; // Zinc-400
}

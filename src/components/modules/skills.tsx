"use client";

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
  // Import Icon Baru:
  SiFirebase,
  SiExpress,
  SiMongodb,
  SiVercel,
  SiInertia,
  SiGithub,
  SiBootstrap,
} from "react-icons/si";
import { motion } from "framer-motion";
import React from "react";

// Daftar Skill Lengkap + Penambahan Baru
const SKILLS = [
  // --- FRONTEND ---
  { name: "Next.js 15", icon: SiNextdotjs, color: "#ffffff" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" }, // Baru
  { name: "Inertia.js", icon: SiInertia, color: "#9553E9" }, // Baru
  { name: "Framer Motion", icon: SiFramer, color: "#0099FF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },

  // --- BACKEND & DB ---
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#ffffff" }, // Baru
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" }, // Baru
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" }, // Baru

  // --- TOOLS & DEVOPS ---
  { name: "Vercel", icon: SiVercel, color: "#ffffff" }, // Baru
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" }, // Baru
  { name: "Kali Linux", icon: SiKalilinux, color: "#557C94" },
];

const SkillBadge = ({
  name,
  icon: Icon,
  color,
}: {
  name: string;
  icon: IconType;
  color: string;
}) => (
  <div
    className="group flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 transition-all hover:bg-zinc-900 cursor-default min-w-max hover:border-[var(--skill-color)] hover:shadow-[0_0_15px_-5px_var(--skill-color)]"
    style={{ "--skill-color": color } as React.CSSProperties}
  >
    <Icon
      className="h-5 w-5 transition-transform group-hover:scale-110"
      style={{ color: color }}
    />
    <span className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">
      {name}
    </span>
  </div>
);

export function Skills() {
  return (
    <section className="space-y-8 py-12">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-zinc-100">Tech Stack</h2>
        <p className="text-zinc-400 text-sm">
          Technologies I use to build scalable solutions.
        </p>
      </div>

      <div className="relative flex flex-col gap-4 overflow-hidden py-4">
        {/* Gradient Fade Kiri & Kanan */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-zinc-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-zinc-950 to-transparent" />

        {/* Baris 1: Gerak ke KIRI (Separuh skill) */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-4 pr-4"
            animate={{ x: "-50%" }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          >
            {[
              ...SKILLS.slice(0, Math.ceil(SKILLS.length / 2)),
              ...SKILLS.slice(0, Math.ceil(SKILLS.length / 2)),
            ].map((skill, index) => (
              <SkillBadge
                key={`row1-${skill.name}-${index}`}
                name={skill.name}
                icon={skill.icon}
                color={skill.color}
              />
            ))}
          </motion.div>
        </div>

        {/* Baris 2: Gerak ke KANAN (Sisa skill) */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-4 pr-4"
            animate={{ x: "0%" }}
            initial={{ x: "-50%" }}
            transition={{ duration: 45, ease: "linear", repeat: Infinity }}
          >
            {[
              ...SKILLS.slice(Math.ceil(SKILLS.length / 2)),
              ...SKILLS.slice(Math.ceil(SKILLS.length / 2)),
            ].map((skill, index) => (
              <SkillBadge
                key={`row2-${skill.name}-${index}`}
                name={skill.name}
                icon={skill.icon}
                color={skill.color}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import React from "react";
import { IconType } from "react-icons";
import { TECH_STACK } from "@/data/tech-stack";
import { useLanguage } from "@/hooks/use-language";

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
    // UBAH DISINI:
    // Border: border-zinc-200 (Light) | border-zinc-800 (Dark)
    // Bg: bg-zinc-50 (Light) | bg-zinc-900/50 (Dark)
    // Hover Bg: hover:bg-zinc-100 (Light) | hover:bg-zinc-900 (Dark)
    className="group flex items-center gap-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 px-4 py-3 transition-all hover:bg-zinc-100 dark:hover:bg-zinc-900 cursor-default min-w-max hover:border-[var(--skill-color)] hover:shadow-[0_0_15px_-5px_var(--skill-color)]"
    style={{ "--skill-color": color } as React.CSSProperties}
  >
    <Icon
      className="h-5 w-5 transition-transform group-hover:scale-110"
      style={{ color: color }}
    />
    {/* Text: text-zinc-700 (Light) | text-zinc-200 (Dark) */}
    {/* Group Hover: text-zinc-900 (Light) | text-white (Dark) */}
    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
      {name}
    </span>
  </div>
);

export function Skills() {
  const skills = TECH_STACK;
  const { t } = useLanguage();

  return (
    <section className="space-y-8 py-8">
      {/* Header Berubah Bahasa */}
      {/* Border: border-zinc-200 (Light) | border-zinc-800/50 (Dark) */}
      <div className="text-left space-y-1 border-b border-zinc-200 dark:border-zinc-800/50 pb-4">
        {/* Title: text-zinc-900 (Light) | text-zinc-100 (Dark) */}
        <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
          <span className="text-emerald-500">&lt;/&gt;</span> {t.skills.title}
        </h2>
        {/* Desc: text-zinc-600 (Light) | text-zinc-500 (Dark) */}
        <p className="text-zinc-600 dark:text-zinc-500 text-sm">
          {t.skills.desc}
        </p>
      </div>

      {/* Marquee Slider */}
      <div className="relative flex flex-col gap-4 overflow-hidden py-4">
        {/* GRADIENT FADE: Gunakan 'from-background' agar otomatis Putih di Light & Hitam di Dark */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        {/* Baris 1 */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-4 pr-4"
            animate={{ x: "-50%" }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          >
            {[
              ...skills.slice(0, Math.ceil(skills.length / 2)),
              ...skills.slice(0, Math.ceil(skills.length / 2)),
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

        {/* Baris 2 */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-4 pr-4"
            animate={{ x: "0%" }}
            initial={{ x: "-50%" }}
            transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          >
            {[
              ...skills.slice(Math.ceil(skills.length / 2)),
              ...skills.slice(Math.ceil(skills.length / 2)),
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

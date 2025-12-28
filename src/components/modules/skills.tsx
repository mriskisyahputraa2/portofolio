"use client";

import { motion } from "framer-motion";
import React from "react";
import { IconType } from "react-icons";
// IMPORT DARI FILE PUSAT
import { TECH_STACK } from "@/data/tech-stack";

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
  // Gunakan TECH_STACK yang diimport
  const skills = TECH_STACK;

  return (
    <section className="space-y-8 py-8">
      {/* UBAH DISINI: text-center MENJADI text-left */}
      <div className="text-left space-y-1 border-b border-zinc-800/50 pb-4">
        <h2 className="text-xl font-bold text-zinc-100 flex items-center gap-2">
          <span className="text-emerald-500">&lt;/&gt;</span> Tech Stack
        </h2>
        <p className="text-zinc-500 text-sm">
          Technologies I use to build scalable solutions.
        </p>
      </div>

      <div className="relative flex flex-col gap-4 overflow-hidden py-4">
        {/* Gradient Fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-zinc-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-zinc-950 to-transparent" />

        {/* Baris 1  Gerak Kiri*/}
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

        {/* Baris 2  Gerak Kanan */}
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

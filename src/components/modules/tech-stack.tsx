"use client";

import { TECH_STACK } from "@/data/tech-stack";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";

export function TechStack() {
  const { t } = useLanguage();
  const allSkills = TECH_STACK;

  const skillContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section className="space-y-8">
      <div className="border-b border-zinc-200 dark:border-zinc-800 pb-4">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-3">
          <Sparkles className="w-6 h-6 text-emerald-500 animate-pulse" />
          {t.skills.title}
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed max-w-2xl">
          {t.skills.desc ||
            "A comprehensive list of technologies I use to build scalable solutions."}
        </p>
      </div>

      <motion.div
        variants={skillContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4"
      >
        {allSkills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </motion.div>
    </section>
  );
}

// Helper Component (Internal use only)
function SkillCard({ skill }: { skill: any }) {
  const isWhiteColor = skill.color === "#ffffff";

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: { opacity: 1, scale: 1, y: 0 },
      }}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="group relative flex items-center gap-2 md:gap-3 p-2 md:p-3 
                 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 
                 overflow-hidden cursor-default transition-all duration-300
                 active:border-emerald-500/50"
      style={
        {
          "--skill-color": isWhiteColor ? "#71717a" : skill.color,
        } as React.CSSProperties
      }
    >
      <div className="absolute inset-0 bg-[var(--skill-color)] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[var(--skill-color)] transition-colors duration-300" />

      <div className="relative z-10 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 group-hover:bg-white dark:group-hover:bg-zinc-900 transition-colors shadow-sm shrink-0">
        <skill.icon
          className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:scale-110 ${
            isWhiteColor ? "text-zinc-900 dark:text-zinc-100" : ""
          }`}
          style={isWhiteColor ? {} : { color: skill.color }}
        />
      </div>

      <span className="relative z-10 text-xs md:text-sm font-semibold text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors truncate">
        {skill.name}
      </span>
    </motion.div>
  );
}

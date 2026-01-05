"use client";

import { Hero } from "@/components/modules/hero";
import ContactSection from "@/components/modules/contact";
import { RESUME_DATA } from "@/data/resume";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Trophy,
  LayoutGrid,
  Code2,
  Activity,
  FolderGit2,
} from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

export default function Home() {
  const { t } = useLanguage();
  const showcaseProject = RESUME_DATA.projects[0];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const hoverEffect = {
    scale: 1.02,
    y: -5,
    transition: { duration: 0.2 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants}>
        <Hero />
      </motion.div>

      <section className="space-y-6">
        <motion.div
          variants={itemVariants}
          className="space-y-1 border-b border-zinc-200 dark:border-zinc-800/50 pb-4"
        >
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <LayoutGrid className="w-5 h-5 text-emerald-500" />
            {t.sections.featured}
          </h2>
          <p className="text-sm text-muted-foreground">
            {t.sections.featured_desc}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[180px]">
          {/* A. PROJECTS SHOWCASE */}
          <MotionLink
            href="/projects"
            variants={itemVariants}
            whileHover={hoverEffect}
            whileTap={{ scale: 0.98 }}
            className="group relative md:col-span-2 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-card shadow-sm cursor-pointer"
          >
            {showcaseProject?.image && (
              <Image
                src={showcaseProject.image}
                alt="Project Background"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 dark:opacity-50"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-50/90 dark:from-background/90 via-zinc-50/40 dark:via-background/40 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 p-6 z-20">
              <div className="h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center mb-3 text-white shadow-lg shadow-emerald-500/20">
                <FolderGit2 className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                {t.sections.projects}
              </h3>
              <p className="text-sm text-muted-foreground mt-1 max-w-sm font-medium">
                {t.sections.projects_desc}
              </p>
            </div>
          </MotionLink>

          {/* B. ABOUT ME (DIKEMBALIKAN KE ASAL) */}
          <MotionLink
            href="/about"
            variants={itemVariants}
            whileHover={hoverEffect}
            whileTap={{ scale: 0.98 }}
            className="group relative rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-card flex flex-col items-center justify-center p-6 text-center shadow-sm cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-50/80 dark:to-background/80 z-0" />

            <div className="h-16 w-16 rounded-2xl bg-white dark:bg-muted mb-4 overflow-hidden relative rotate-3 group-hover:rotate-0 transition-all duration-300 border border-zinc-200 dark:border-zinc-800 shadow-xl z-10">
              <Image
                src={RESUME_DATA.avatarUrl}
                alt="Me"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-base font-bold text-foreground z-10">
              {t.sections.about}
            </h3>

            {/* KEMBALI KE ORIGINAL: text-xs, mt-1, t.sections.about_desc */}
            <p className="text-xs text-muted-foreground mt-1 font-medium z-10">
              {t.sections.about_desc}
            </p>

            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <ArrowUpRight className="h-4 w-4 text-blue-500" />
            </div>
          </MotionLink>

          {/* C. ACHIEVEMENTS */}
          <MotionLink
            href="/achievements"
            variants={itemVariants}
            whileHover={hoverEffect}
            whileTap={{ scale: 0.98 }}
            className="group relative rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-card p-6 flex flex-col justify-end shadow-sm cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-50/40 dark:from-background/40 to-zinc-50/90 dark:to-background/90 z-0" />

            <Trophy className="h-10 w-10 text-yellow-500 mb-auto relative z-10 drop-shadow-md group-hover:scale-110 transition-transform duration-300" />
            <div className="relative z-10">
              <h3 className="text-base font-bold text-foreground">
                {t.sections.achievements}
              </h3>
              <p className="text-xs text-muted-foreground mt-1 font-medium">
                {t.sections.achievements_desc}
              </p>
            </div>
          </MotionLink>

          {/* D. DASHBOARD */}
          <MotionLink
            href="/dashboard"
            variants={itemVariants}
            whileHover={hoverEffect}
            whileTap={{ scale: 0.98 }}
            className="group relative rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-card p-6 flex flex-col justify-between shadow-sm cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/10 to-transparent opacity-50" />
            <div className="flex justify-between items-start relative z-10">
              <Activity className="h-8 w-8 text-purple-500 group-hover:animate-pulse" />
              <div className="px-2 py-1 rounded-md bg-purple-500/10 text-[10px] text-purple-500 font-mono font-bold flex items-center gap-1">
                LIVE
              </div>
            </div>
            <div className="relative z-10">
              <h3 className="text-base font-bold text-foreground">
                {t.sections.dashboard}
              </h3>
              <p className="text-xs text-muted-foreground mt-1 font-medium">
                {t.sections.dashboard_desc}
              </p>
            </div>
          </MotionLink>

          {/* E. SERVICES */}
          <motion.div
            variants={itemVariants}
            whileHover={hoverEffect}
            className="group relative rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-card p-6 flex items-center justify-between shadow-sm"
          >
            <div>
              <Code2 className="h-8 w-8 text-muted-foreground mb-2 group-hover:text-emerald-500 transition-colors" />
              <h3 className="text-base font-bold text-foreground">
                {t.sections.services}
              </h3>
              <p className="text-xs text-muted-foreground font-medium">
                {t.sections.services_desc}
              </p>
            </div>
            <div className="text-right space-y-2 text-sm font-mono font-black tracking-wider select-none">
              <div className="text-muted-foreground group-hover:text-emerald-500 transition-colors animate-pulse">
                WEB
              </div>
              <div className="text-muted-foreground group-hover:text-blue-500 transition-colors animate-pulse delay-300">
                MOBILE
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.div
        variants={itemVariants}
        className="border-t border-zinc-200 dark:border-zinc-800/50 pt-12"
      >
        <ContactSection />
      </motion.div>
    </motion.div>
  );
}

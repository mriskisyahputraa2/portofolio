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
  Activity,
  FolderGit2,
  Cpu, // Icon baru untuk Tech
} from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { motion } from "framer-motion";
import { TechBadge } from "@/components/shared/tech-badge"; // Pastikan path ini benar sesuai file sebelumnya

const MotionLink = motion(Link);

// --- KOMPONEN MARQUEE (TEKS BERJALAN) ---
const Marquee = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full overflow-hidden flex items-center h-full mask-linear-gradient">
      <motion.div
        className="flex gap-4 pr-4"
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 15, // Kecepatan animasi
        }}
        style={{ width: "max-content" }}
      >
        {children}
        {children} {/* Duplikasi agar seamless */}
      </motion.div>
    </div>
  );
};

// --- KOMPONEN MINI CHART (UNTUK KARTU DASHBOARD) ---
const MiniChart = () => (
  <div className="flex items-end gap-1 h-8 w-full mt-auto opacity-50 group-hover:opacity-100 transition-opacity">
    {[40, 70, 30, 85, 50, 65, 90, 45, 60, 20].map((h, i) => (
      <motion.div
        key={i}
        initial={{ height: "20%" }}
        animate={{ height: `${h}%` }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          delay: i * 0.1,
        }}
        className="flex-1 bg-purple-500 rounded-t-sm"
      />
    ))}
  </div>
);

export default function Home() {
  const { t } = useLanguage();
  const showcaseProject = RESUME_DATA.projects[0];

  // Ambil skills unik untuk Marquee
  const allSkills = Array.from(new Set(RESUME_DATA.skills));

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
      className="space-y-10 pb-10"
    >
      <motion.div variants={itemVariants}>
        <Hero />
      </motion.div>

      <section className="space-y-6">
        {/* SECTION HEADER */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800/50 pb-4"
        >
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <LayoutGrid className="w-5 h-5 text-emerald-500" />
              {t.sections.featured}
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {t.sections.featured_desc}
            </p>
          </div>
        </motion.div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[200px]">
          {/* A. PROJECTS SHOWCASE (LARGE) */}
          <MotionLink
            href="/projects"
            variants={itemVariants}
            whileHover={hoverEffect}
            whileTap={{ scale: 0.98 }}
            className="group relative md:col-span-2 md:row-span-2 rounded-[2rem] overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-900 shadow-sm cursor-pointer min-h-[300px] md:min-h-full"
          >
            {showcaseProject?.image && (
              <Image
                src={showcaseProject.image}
                alt="Project Background"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />

            <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-2xl bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 flex items-center justify-center text-emerald-500">
                  <FolderGit2 className="h-6 w-6" />
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  View All Projects
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                {t.sections.projects}
              </h3>
              <p className="text-zinc-300 max-w-md text-sm leading-relaxed">
                {t.sections.projects_desc}
              </p>
            </div>
          </MotionLink>

          {/* B. ABOUT ME (COMPACT) */}
          <MotionLink
            href="/about"
            variants={itemVariants}
            whileHover={hoverEffect}
            whileTap={{ scale: 0.98 }}
            className="group relative rounded-[2rem] overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-6 flex flex-col items-center justify-center text-center shadow-sm cursor-pointer min-h-[180px]"
          >
            {/* Status Dot */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
            </div>

            <div className="h-20 w-20 rounded-full border-4 border-zinc-100 dark:border-zinc-800 mb-4 overflow-hidden relative shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Image
                src={RESUME_DATA.avatarUrl}
                alt="Me"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
              {t.sections.about}
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
              {t.sections.about_desc}
            </p>
          </MotionLink>

          {/* C. DASHBOARD (LIVE STATS VISUAL) */}
          <MotionLink
            href="/dashboard"
            variants={itemVariants}
            whileHover={hoverEffect}
            whileTap={{ scale: 0.98 }}
            className="group relative rounded-[2rem] overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-6 flex flex-col justify-between shadow-sm cursor-pointer min-h-[180px]"
          >
            <div className="flex justify-between items-start">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                <Activity className="h-6 w-6" />
              </div>
              <div className="px-2 py-1 rounded-md bg-purple-500/10 text-[10px] text-purple-600 dark:text-purple-400 font-mono font-bold animate-pulse">
                LIVE DATA
              </div>
            </div>

            <div className="mt-4">
              {/* Mini Chart Component */}
              <MiniChart />
              <div className="mt-2 relative z-10">
                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                  {t.sections.dashboard}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  {t.sections.dashboard_desc}
                </p>
              </div>
            </div>
          </MotionLink>

          {/* D. TECH STACK (MARQUEE - REPLACING SERVICES) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 group relative rounded-[2rem] overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-6 flex flex-col justify-center shadow-sm min-h-[160px]"
          >
            <div className="flex items-center gap-3 mb-4 border-b border-zinc-100 dark:border-zinc-800 pb-2">
              <Cpu className="w-5 h-5 text-blue-500" />
              <h3 className="font-bold text-sm text-zinc-700 dark:text-zinc-300">
                {t.skills.title}
              </h3>
            </div>

            {/* MARQUEE SECTION */}
            <Marquee>
              {allSkills.map((skill) => (
                <TechBadge key={skill} name={skill} />
              ))}
            </Marquee>

            {/* Gradient Mask untuk efek fade di kiri/kanan */}
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white dark:from-zinc-900 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white dark:from-zinc-900 to-transparent z-10 pointer-events-none" />
          </motion.div>

          {/* E. ACHIEVEMENTS (COMPACT) */}
          <MotionLink
            href="/achievements"
            variants={itemVariants}
            whileHover={hoverEffect}
            whileTap={{ scale: 0.98 }}
            className="group relative rounded-[2rem] overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/10 dark:to-orange-900/10 p-6 flex flex-col justify-center items-center text-center shadow-sm cursor-pointer min-h-[160px]"
          >
            <Trophy className="h-10 w-10 text-yellow-500 mb-3 drop-shadow-md group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
              {t.sections.achievements}
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
              {t.sections.achievements_desc}
            </p>
          </MotionLink>
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

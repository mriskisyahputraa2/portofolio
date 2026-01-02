"use client";

import { RESUME_DATA } from "@/data/resume";
import { ExperienceCard } from "@/components/modules/experience-card";
import {
  Download,
  UserCircle,
  Briefcase,
  GraduationCap,
  Mail,
} from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function AboutPage() {
  const { t, language } = useLanguage();

  // Animasi Stagger (Muncul berturutan)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Jeda antar item
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-4xl mx-auto space-y-16 pb-20"
    >
      {/* 1. HERO SECTION (Intro) */}
      <motion.section variants={itemVariants} className="space-y-6">
        <div className="flex flex-col gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-8">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
              <UserCircle className="h-7 w-7 text-emerald-600 dark:text-emerald-500" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                {t.sidebar.menu.about}
              </h1>
              <p className="text-sm text-zinc-500 font-medium">
                Get to know me better.
              </p>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400 leading-loose text-lg/8">
            <p>
              {language === "id" ? RESUME_DATA.summary_id : RESUME_DATA.summary}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={RESUME_DATA.contact.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="rounded-full h-11 px-6 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-300 font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                <Download className="h-4 w-4 mr-2" />
                Download CV
              </Button>
            </a>
            <a href={`mailto:${RESUME_DATA.contact.email}`}>
              <Button
                variant="outline"
                className="rounded-full h-11 px-6 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Mail className="h-4 w-4 mr-2" />
                Contact Me
              </Button>
            </a>
          </div>
        </div>
      </motion.section>

      {/* 2. CAREER HISTORY */}
      <motion.section variants={itemVariants} className="space-y-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800">
            <Briefcase className="h-5 w-5 text-emerald-500" />
          </div>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            {language === "en" ? "Career History" : "Pengalaman Kerja"}
          </h2>
        </div>

        <div className="grid gap-6">
          {RESUME_DATA.work.map((work) => (
            <ExperienceCard
              key={`${work.company}-${work.title}`}
              logo={work.logoUrl}
              title={work.title}
              company={work.company}
              start={work.start}
              end={work.end}
              description={work.description}
              location={work.location}
              status={work.badges[0]}
            />
          ))}
        </div>
      </motion.section>

      {/* 3. EDUCATION */}
      <motion.section variants={itemVariants} className="space-y-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800">
            <GraduationCap className="h-5 w-5 text-emerald-500" />
          </div>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            {language === "en" ? "Education" : "Pendidikan"}
          </h2>
        </div>

        <div className="grid gap-6">
          {RESUME_DATA.education.map((edu) => (
            <ExperienceCard
              key={edu.school}
              // @ts-ignore
              logo={(edu as any).logoUrl}
              title={edu.degree}
              company={edu.school}
              start={edu.start}
              end={edu.end}
              location="Indonesia"
              status="Student"
              description={
                language === "id"
                  ? "Fokus pada Rekayasa Perangkat Lunak dan Jaringan."
                  : "Focused on Software Engineering and Network."
              }
            />
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}

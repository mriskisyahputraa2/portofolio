"use client";

import { RESUME_DATA } from "@/data/resume";
import { ExperienceCard } from "@/components/modules/experience-card";
import { Download, Briefcase, GraduationCap, Mail, Quote } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  const { t, language } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
      className="max-w-5xl space-y-16 pb-20"
    >
      {/* 1. HERO SECTION */}
      <motion.section
        variants={itemVariants}
        className="space-y-6 border-b border-zinc-200 dark:border-zinc-800 pb-12"
      >
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* A. KOLOM KIRI: FOTO + QUOTE */}
          <div className="shrink-0 flex flex-col gap-6 mx-auto md:mx-0 relative md:sticky md:top-24 h-fit z-10">
            {/* 1. FOTO PROFIL */}
            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-to-tr from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              <div className="relative h-64 w-64 md:h-72 md:w-72 -rotate-3 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 ease-out">
                <div className="absolute inset-0 border-2 border-zinc-900/10 dark:border-zinc-100/10 rounded-2xl transform translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />

                <div className="relative h-full w-full rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src={RESUME_DATA.avatarUrl}
                    alt="Muhammad Rizki Syahputra"
                    fill
                    className="object-cover"
                    quality={100}
                    priority
                  />
                </div>
              </div>
            </div>

            {/* 2. QUOTE SECTION */}
            <div className="flex flex-col items-center text-center px-4 pt-2 max-w-[280px] mx-auto">
              <Quote className="w-8 h-8 text-emerald-500/30 mb-3 fill-emerald-500/10" />

              <p className="text-sm font-medium italic text-zinc-600 dark:text-zinc-300 leading-relaxed">
                "First, solve the problem. Then, write the code."
              </p>

              <div className="flex items-center gap-2 mt-3">
                <span className="w-6 h-[1px] bg-zinc-300 dark:bg-zinc-700"></span>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  John Johnson
                </span>
                <span className="w-6 h-[1px] bg-zinc-300 dark:bg-zinc-700"></span>
              </div>
            </div>
          </div>

          {/* B. KOLOM KANAN: TEKS DESKRIPSI */}
          {/* 'text-left' memastikan semua isi di container ini rata kiri */}
          <div className="flex-1 space-y-6 text-left relative z-0">
            {/* Header Title */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                  {t.sidebar.menu.about}
                </h1>
                <span className="text-3xl animate-wave origin-bottom-right">
                  👋
                </span>
              </div>
            </div>

            {/* Konten Text (Auto Paragraph) */}
            <div className="prose dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400 leading-loose text-lg/8 relative">
              <Quote className="absolute -left-8 -top-4 w-6 h-6 text-zinc-200 dark:text-zinc-800 hidden md:block" />

              {(language === "id"
                ? RESUME_DATA.summary_id
                : RESUME_DATA.summary
              )
                .split("\n")
                .map(
                  (paragraph, index) =>
                    paragraph.trim() && (
                      // PERBAIKAN DI SINI:
                      // Menggunakan 'text-left' agar selalu Rata Kiri di HP maupun Laptop
                      <p key={index} className="mb-4 text-left">
                        {paragraph}
                      </p>
                    )
                )}
            </div>

            {/* Tombol Action */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={RESUME_DATA.contact.cvUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="rounded-full bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download CV
                </Button>
              </a>
              <a href={`mailto:${RESUME_DATA.contact.email}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:-translate-y-1 transition-all duration-300"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Me
                </Button>
              </a>
            </div>
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
              logo={(edu as any).logoUrl || edu.logo}
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

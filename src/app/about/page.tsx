"use client";

import { RESUME_DATA } from "@/data/resume";
import { Download, UserCircle, Briefcase, GraduationCap } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { ExperienceCard } from "@/components/modules/experience-card";

export default function AboutPage() {
  const { t, language } = useLanguage();

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-10">
      {/* 1. HEADER & INTRO */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <UserCircle className="h-6 w-6 text-emerald-500" />
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            {t.sidebar.menu.about}
          </h1>
        </div>

        <div className="prose dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400 leading-loose">
          {/* Menggunakan Intro panjang jika ada, atau summary default */}
          <p>
            {language === "id" ? RESUME_DATA.summary_id : RESUME_DATA.summary}
          </p>
          {/* Kamu bisa menambahkan paragraf tambahan manual disini jika mau intro yang lebih panjang khusus halaman about */}
        </div>

        {/* 4. DOWNLOAD RESUME BUTTON */}
        <div className="pt-2">
          <a
            href={RESUME_DATA.contact.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="rounded-full bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-300 font-bold gap-2">
              <Download className="h-4 w-4" />
              Download Resume / CV
            </Button>
          </a>
        </div>
      </section>

      {/* 2. CAREER / EXPERIENCE */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 mb-6">
          <Briefcase className="h-5 w-5 text-emerald-500" />
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
            {language === "en" ? "Career History" : "Pengalaman Kerja"}
          </h2>
        </div>

        <div className="space-y-0 ml-2">
          {RESUME_DATA.work.map((work) => (
            <ExperienceCard
              key={work.company}
              // Pastikan data resume.tsx kamu punya field logoUrl atau ganti string manual
              logo={
                work.link
                  ? `https://www.google.com/s2/favicons?sz=64&domain_url=${work.link}`
                  : undefined
              }
              // Atau jika pakai foto folder: logo="/images/careers/foto1.jpg"

              title={work.title}
              company={work.company}
              start={work.start}
              end={work.end}
              location={
                language === "id" ? "Aceh, Indonesia" : "Aceh, Indonesia"
              } // Bisa ambil dari data jika ada
              status="Fulltime" // Bisa ambil dari data jika ada fieldnya
              description={work.description}
            />
          ))}
        </div>
      </section>

      {/* 3. EDUCATION */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 mb-6">
          <GraduationCap className="h-5 w-5 text-emerald-500" />
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
            {language === "en" ? "Education" : "Pendidikan"}
          </h2>
        </div>

        <div className="space-y-0 ml-2">
          {RESUME_DATA.education.map((edu) => (
            <ExperienceCard
              key={edu.school}
              logo={undefined} // Logo sekolah jika ada
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
              } // Sesuaikan data
            />
          ))}
        </div>
      </section>
    </div>
  );
}

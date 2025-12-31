"use client";

import { RESUME_DATA } from "@/data/resume";
import { MapPin, Briefcase } from "lucide-react";
// Import Komponen Skills (Marquee)
import { Skills } from "@/components/modules/skills";
// Import Hook Bahasa
import { useLanguage } from "@/hooks/use-language";

export function Hero() {
  // Ambil dictionary (t) dan state language (id/en) dari hook
  const { t, language } = useLanguage();

  return (
    <section className="flex flex-col items-start justify-center space-y-6 pt-4 pb-8 text-left animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* 1. Header: Nama & Info Status */}
      <div className="space-y-2">
        {/* Light: text-zinc-900 | Dark: text-zinc-100 */}
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 font-sans">
          {/* Mengambil sapaan dari dictionary (Hi, I'm / Halo, Saya) */}
          {t.hero.greeting} {RESUME_DATA.name} 👋
        </h1>

        {/* Sub-info: Location & Status */}
        {/* Light: text-zinc-600 | Dark: text-zinc-400 */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-600 dark:text-zinc-400 font-medium">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-emerald-500" />
            {/* Mengambil lokasi dari dictionary */}
            <span>{t.hero.based} 🇮🇩</span>
          </div>

          {/* Titik Pemisah: Light: bg-zinc-300 | Dark: bg-zinc-700 */}
          <div className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700 hidden md:block"></div>

          <div className="flex items-center gap-1.5">
            <Briefcase className="w-4 h-4 text-emerald-500" />
            {/* Mengambil status remote dari dictionary */}
            <span>{t.hero.remote}</span>
          </div>
        </div>
      </div>

      {/* 2. Description / Summary Dinamis */}
      {/* Teks: Light(zinc-600) Dark(zinc-400) | Border: Light(zinc-200) Dark(zinc-800) */}
      <p className="text-zinc-600 dark:text-zinc-400  text-base leading-relaxed border-l-2 border-zinc-200 dark:border-zinc-800 pl-4">
        {language === "id" ? RESUME_DATA.summary_id : RESUME_DATA.summary}
      </p>

      {/* 3. Skills Marquee Section */}
      <div className="w-full pt-2 -ml-4 md:ml-0">
        <Skills />
      </div>
    </section>
  );
}

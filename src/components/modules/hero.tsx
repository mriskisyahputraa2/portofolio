"use client";

import { RESUME_DATA } from "@/data/resume";
import { MapPin, Briefcase } from "lucide-react";
import { Skills } from "@/components/modules/skills";
import { useLanguage } from "@/hooks/use-language";

export function Hero() {
  const { t, language } = useLanguage();

  return (
    <section className="flex flex-col items-start justify-center space-y-6 pt-4 text-left animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* 1. Header: Nama & Info Status */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 font-sans">
          {t.hero.greeting} {RESUME_DATA.name} 👋
        </h1>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-600 dark:text-zinc-400 font-medium">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-emerald-500" />
            <span>{t.hero.based} 🇮🇩</span>
          </div>

          <div className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700 hidden md:block"></div>

          <div className="flex items-center gap-1.5">
            <Briefcase className="w-4 h-4 text-emerald-500" />
            <span>{t.hero.remote}</span>
          </div>
        </div>
      </div>

      {/* 2. Description / Summary */}
      <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed border-l-2 border-zinc-200 dark:border-zinc-800 pl-4">
        {language === "id"
          ? RESUME_DATA.summaryShort_id
          : RESUME_DATA.summaryShort}
      </p>

      {/* 3. Skills Marquee Section */}
      <div className="w-full pt-2">
        <Skills />
      </div>
    </section>
  );
}

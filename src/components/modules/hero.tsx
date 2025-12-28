"use client";

import { RESUME_DATA } from "@/data/resume";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase } from "lucide-react";
// Import Komponen Skills Marquee yang lama
import { Skills } from "@/components/modules/skills";

export function Hero() {
  return (
    <section className="flex flex-col items-start justify-center space-y-6 pt-4 pb-8 text-left">
      {/* 1. Header: Nama & Verified */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100 font-sans">
          Hi, I'm {RESUME_DATA.name} 👋
        </h1>

        {/* Sub-info: Location & Status */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-400 font-medium">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-emerald-500" />
            <span>Based in Aceh, Indonesia 🇮🇩</span>
          </div>
          {/* Titik Pemisah */}
          <div className="w-1 h-1 rounded-full bg-zinc-700 hidden md:block"></div>
          <div className="flex items-center gap-1.5">
            <Briefcase className="w-4 h-4 text-emerald-500" />
            <span>Working remotely</span>
          </div>
        </div>
      </div>

      {/* 2. Description / Summary */}
      <p className="text-zinc-400 max-w-2xl text-base leading-relaxed border-l-2 border-zinc-800 pl-4">
        {RESUME_DATA.summary}
      </p>

      {/* 3. Skills Marquee Bergerak (Kembali ke versi sebelumnya) */}
      <div className="w-full pt-4">
        {/* Kita bungkus agar tidak terlalu lebar di layar besar */}
        <div className="max-w-3xl -ml-4 md:ml-0">
          <Skills />
        </div>
      </div>
    </section>
  );
}

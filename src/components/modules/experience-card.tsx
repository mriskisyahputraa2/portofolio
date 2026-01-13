"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  ChevronUp,
  MapPin,
  Calendar,
  Building2,
  BriefcaseBusiness, // Icon baru untuk Role/Jurusan
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface ExperienceProps {
  logo?: string;
  title: string; // Role atau Jurusan
  company: string; // Nama Tempat atau Kampus
  start: string;
  end: string;
  location?: string;
  status?: string;
  description?: string;
}

export function ExperienceCard({
  logo,
  title,
  company,
  start,
  end,
  location,
  status,
  description = "",
}: ExperienceProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState(logo);

  const fallbackImage =
    "https://ui-avatars.com/api/?name=" +
    encodeURIComponent(company) +
    "&background=random&color=fff&size=128";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      className="group relative w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-card/50 p-5 transition-all hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md"
    >
      <div className="flex flex-col sm:flex-row gap-4 items-start">
        {/* --- LOGO PERUSAHAAN/KAMPUS --- */}
        <div className="relative h-14 w-14 sm:h-16 sm:w-16 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white shrink-0 shadow-sm flex items-center justify-center">
          <Image
            src={imgSrc || fallbackImage}
            alt={company}
            fill
            className="object-contain"
            unoptimized={true}
            onError={() => setImgSrc(fallbackImage)}
          />
        </div>

        {/* --- KONTEN UTAMA --- */}
        <div className="flex-1 w-full space-y-2">
          {/* HEADER: Tempat & Role */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div>
              {/* 1. NAMA TEMPAT (COMPANY) - Ditaruh Paling Atas & Bold */}
              <div className="flex items-center gap-2 mb-1">
                <Building2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {company}
                </h3>
              </div>

              {/* 2. ROLE / JURUSAN (TITLE) - Ditaruh di Bawahnya */}
              <div className="flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                <BriefcaseBusiness className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
                <span>{title}</span>
              </div>
            </div>

            {/* BADGE TANGGAL */}
            <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-500 bg-zinc-100 dark:bg-zinc-800/80 px-2.5 py-1 rounded-full border border-zinc-200 dark:border-zinc-700/50 whitespace-nowrap w-fit mt-2 sm:mt-0">
              <Calendar className="h-3 w-3" />
              {start} - {end}
            </div>
          </div>

          {/* 3. LOKASI & STATUS */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400 mt-1">
            {location && (
              <div className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-zinc-400" />
                {location}
              </div>
            )}

            {status && (
              <Badge
                variant="secondary"
                className="text-[10px] px-2 py-0.5 h-5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20"
              >
                {status}
              </Badge>
            )}
          </div>

          {/* 4. DESKRIPSI (TOGGLE) */}
          {description && (
            <>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors focus:outline-none mt-3 select-none group/btn"
              >
                {isOpen ? (
                  <ChevronUp className="h-3.5 w-3.5" />
                ) : (
                  <ChevronDown className="h-3.5 w-3.5 group-hover/btn:translate-y-0.5 transition-transform" />
                )}
                {/* Teks Tombol */}
                {isOpen ? "Hide Details" : "Show Details"}
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-2 border-t border-zinc-100 dark:border-zinc-800 mt-2 border-dashed">
                      {/* Fungsi split aman karena sudah ada default value di props */}
                      {(description || "").split("\n").map(
                        (item, index) =>
                          item.trim() && (
                            <div key={index} className="flex gap-3 items-start">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500/50 shrink-0" />
                              <p>{item.trim()}</p>
                            </div>
                          )
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  ChevronUp,
  MapPin,
  Calendar,
  Building2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface ExperienceProps {
  logo?: string;
  title: string;
  company: string;
  start: string;
  end: string;
  location?: string;
  status?: string;
  description: string;
}

export function ExperienceCard({
  logo,
  title,
  company,
  start,
  end,
  location,
  status,
  description,
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
        {/* --- LOGO PERUSAHAAN --- */}
        {/* Hapus 'p-1' atau padding apapun di Image agar gambar mentok ke pinggir */}
        <div className="relative h-14 w-14 sm:h-16 sm:w-16 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white shrink-0 shadow-sm flex items-center justify-center">
          <Image
            src={imgSrc || fallbackImage}
            alt={company}
            fill
            // PERBAIKAN:
            // 1. Hapus 'p-1' (Agar full sampai ujung)
            // 2. Gunakan 'object-contain' agar logo utuh dan tidak ada bagian yang terpotong (zoom out otomatis jika kegedean)
            // ATAU gunakan 'object-cover' HANYA JIKA gambar Anda sudah pasti kotak (square) sempurna.
            // Saya sarankan 'object-contain' untuk logo perusahaan agar aman.
            className="object-contain"
            onError={() => setImgSrc(fallbackImage)}
          />
        </div>

        {/* CONTENT (Sama seperti sebelumnya) */}
        <div className="flex-1 w-full space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {title}
              </h3>
              <div className="flex items-center gap-2 mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                <Building2 className="h-3.5 w-3.5 text-zinc-400" />
                <span>{company}</span>
              </div>
            </div>

            {/* Date Badge */}
            <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-500 bg-zinc-100 dark:bg-zinc-800/80 px-2.5 py-1 rounded-full border border-zinc-200 dark:border-zinc-700/50 whitespace-nowrap">
              <Calendar className="h-3 w-3" />
              {start} - {end}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400">
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

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors focus:outline-none mt-2 select-none group/btn"
          >
            {isOpen ? (
              <ChevronUp className="h-3.5 w-3.5" />
            ) : (
              <ChevronDown className="h-3.5 w-3.5 group-hover/btn:translate-y-0.5 transition-transform" />
            )}
            {isOpen ? "Hide Responsibilities" : "Show Responsibilities"}
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
                  {description.split("\n").map(
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
        </div>
      </div>
    </motion.div>
  );
}

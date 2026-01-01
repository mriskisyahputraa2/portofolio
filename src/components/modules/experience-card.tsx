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
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";

interface ExperienceProps {
  logo?: string;
  title: string;
  company: string;
  start: string;
  end: string;
  location: string; // Lokasi
  status?: string; // Kerja/Freelance/Magang (Opsional di data, tapi kita tampilkan jika ada)
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

  return (
    <div className="group relative border-l-2 border-zinc-200 dark:border-zinc-800 pl-6 pb-2 transition-all hover:border-emerald-500 dark:hover:border-emerald-500">
      {/* Bullet Point di Garis */}
      <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-4 border-white dark:border-zinc-950 bg-zinc-200 dark:bg-zinc-800 group-hover:bg-emerald-500 transition-colors" />

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          {/* FOTO / LOGO */}
          {logo && (
            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-zinc-200 dark:border-zinc-800 shadow-sm shrink-0">
              <Image src={logo} alt={company} fill className="object-cover" />
            </div>
          )}

          <div>
            <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-base">
              {title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              <span className="font-medium">{company}</span>
              {status && (
                <Badge
                  variant="secondary"
                  className="text-[10px] px-1.5 py-0 h-5 font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700"
                >
                  {status}
                </Badge>
              )}
            </div>
          </div>
        </div>

        {/* Tanggal */}
        <div className="text-xs font-mono text-zinc-500 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-900 px-2 py-1 rounded-md border border-zinc-200 dark:border-zinc-800 shrink-0">
          {start} - {end}
        </div>
      </div>

      {/* Lokasi */}
      <div className="flex items-center gap-1.5 text-xs text-zinc-500 mb-3">
        <MapPin className="h-3.5 w-3.5" />
        {location}
      </div>

      {/* TOMBOL TOGGLE (Show Responsibilities) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors focus:outline-none mb-2"
      >
        {isOpen ? "Hide Responsibilities" : "Show Responsibilities"}
        {isOpen ? (
          <ChevronUp className="h-3 w-3" />
        ) : (
          <ChevronDown className="h-3 w-3" />
        )}
      </button>

      {/* DESKRIPSI (Animasi Buka/Tutup) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed bg-zinc-50 dark:bg-zinc-900/50 p-3 rounded-lg border border-zinc-200 dark:border-zinc-800">
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

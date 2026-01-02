"use client";

import { getTechDetails } from "@/data/tech-stack";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
}

export function TechBadge({ name }: TechBadgeProps) {
  const { icon: Icon, color } = getTechDetails(name);

  return (
    <div
      className="group flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full 
      bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/50 
      hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-300 cursor-default"
    >
      {/* ICON (Selalu Muncul) */}
      <Icon
        className="w-4 h-4 transition-transform group-hover:scale-110"
        style={{ color: color }} // Menggunakan warna asli brand
      />

      {/* TEXT (Muncul saat Hover) */}
      {/* Teknik: max-w-0 -> max-w-xs agar animasi sliding halus */}
      <span className="max-w-0 overflow-hidden opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-500 ease-in-out whitespace-nowrap text-[11px] font-medium text-zinc-700 dark:text-zinc-300">
        {name}
      </span>
    </div>
  );
}

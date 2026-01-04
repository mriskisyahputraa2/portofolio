"use client";

import { useState } from "react";
import { ACHIEVEMENTS_DATA, Achievement } from "@/data/achievements";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Trophy,
  Award,
  FileCheck,
  ExternalLink,
  Filter,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

// Konfigurasi Kategori & Ikonnya
const categories = [
  { name: "All", icon: Filter },
  { name: "Certification", icon: FileCheck },
  { name: "Competition", icon: Trophy },
  { name: "Award", icon: Award },
] as const;

export default function AchievementsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Logika Filter Data
  const filteredData =
    activeCategory === "All"
      ? ACHIEVEMENTS_DATA
      : ACHIEVEMENTS_DATA.filter((item) => item.category === activeCategory);

  return (
    <div className="max-w-5xl space-y-12 pb-20">
      {/* 1. HEADER SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4 border-b border-zinc-200 dark:border-zinc-800 pb-8"
      >
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-yellow-500/10 border border-yellow-500/20">
            <Trophy className="w-8 h-8 text-yellow-600 dark:text-yellow-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
              Achievements
            </h1>
            <p className="text-zinc-500 font-medium">
              Certifications, awards, and competition milestones.
            </p>
          </div>
        </div>
      </motion.div>

      {/* 2. FILTER BUTTONS */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-wrap gap-2"
      >
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.name;

          return (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300
                ${
                  isActive
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/20 scale-105"
                    : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                }
              `}
            >
              <Icon className="w-4 h-4" />
              {cat.name}
            </button>
          );
        })}
      </motion.div>

      {/* 3. GRID GALLERY */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredData.map((item) => (
            <AchievementCard key={item.id} item={item} />
          ))}
        </AnimatePresence>

        {filteredData.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-full py-20 text-center text-zinc-500"
          >
            <p>No achievements found in this category yet.</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

// --- SUB-COMPONENT: CARD ---
function AchievementCard({ item }: { item: Achievement }) {
  // Warna Badge Berdasarkan Kategori
  const getBadgeColor = (cat: string) => {
    switch (cat) {
      case "Certification":
        return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20";
      case "Competition":
        return "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20";
      case "Award":
        return "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20";
      default:
        return "bg-zinc-500/10 text-zinc-600";
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 hover:border-emerald-500/50 transition-colors"
    >
      {/* A. IMAGE THUMBNAIL */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-200 dark:bg-zinc-800">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay saat hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <Button
              variant="secondary"
              className="rounded-full gap-2 font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              View Proof
            </Button>
          </a>
        </div>
      </div>

      {/* B. CONTENT INFO */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        {/* Header: Kategori & Tahun */}
        <div className="flex items-center justify-between">
          <Badge
            variant="outline"
            className={`rounded-md border ${getBadgeColor(item.category)}`}
          >
            {item.category}
          </Badge>
          <span className="text-xs font-mono text-zinc-500 flex items-center gap-1.5 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-md">
            <Calendar className="w-3 h-3" />
            {item.year}
          </span>
        </div>

        {/* Judul & Penyelenggara */}
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 leading-tight group-hover:text-emerald-500 transition-colors">
            {item.title}
          </h3>
          <p className="text-sm text-zinc-500 font-medium">{item.issuer}</p>
        </div>
      </div>
    </motion.div>
  );
}

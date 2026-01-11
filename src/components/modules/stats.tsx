"use client";

import { Trophy, Terminal, Cpu, FolderGit } from "lucide-react";
import { TECH_STACK } from "@/data/tech-stack";
import { PROJECTS_DATA } from "@/data/projects";
import { motion } from "framer-motion";
// Tambahkan import useState dan useEffect
import { useState, useEffect } from "react";

export function Stats() {
  const projectCount = PROJECTS_DATA.length;
  const skillCount = TECH_STACK.length;

  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* 1. EXPERIENCE */}
        <PremiumStatsCard
          icon={Trophy}
          label="Experience"
          value="3+ Years"
          color="blue"
          delay={0}
        />

        {/* 2. PROJECTS */}
        <PremiumStatsCard
          icon={FolderGit}
          label="Projects"
          value={`${projectCount}+ Done`}
          color="emerald"
          delay={0.1}
        />

        {/* 3. TECH STACK */}
        <PremiumStatsCard
          icon={Terminal}
          label="Tech Stack"
          value={`${skillCount}+ Used`}
          color="violet"
          delay={0.2}
        />

        {/* 4. FOCUS (ANIMASI SCROLLING BARU) */}
        <PremiumStatsCard
          icon={Cpu}
          label="Focus"
          // Gunakan komponen ScrollingText di sini
          value={<ScrollingText />}
          color="amber"
          delay={0.3}
        />
      </div>
    </section>
  );
}

// --- KOMPONEN BARU: SCROLLING TEXT ANIMATION ---
function ScrollingText() {
  // Daftar kata yang akan ditampilkan bergantian
  const words = ["Web", "Mobile", "AI", "UI/UX"];
  const [index, setIndex] = useState(0);

  // Efek looping untuk mengganti indeks kata setiap 2 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Ganti setiap 2000ms (2 detik)

    return () => clearInterval(interval); // Bersihkan interval saat unmount
  }, [words.length]);

  // Tinggi baris teks (sesuaikan dengan ukuran font text-3xl, sekitar 40px / h-10)
  const textHeight = 40;

  return (
    // Container utama dengan tinggi tetap dan overflow hidden
    <div style={{ height: textHeight }} className="relative overflow-hidden">
      {/* Wrapper yang bergerak naik turun */}
      <motion.div
        // Animasikan posisi Y berdasarkan indeks aktif
        animate={{ y: -index * textHeight }}
        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }} // Custom easing agar smooth
      >
        {words.map((word, i) => {
          // Cek apakah ini kata yang sedang aktif
          const isActive = i === index;

          return (
            <motion.div
              key={word}
              // Set tinggi tiap item agar sama dengan textHeight
              style={{ height: textHeight }}
              className="flex items-center"
              // Animasikan blur, opacity, dan scale
              animate={{
                filter: isActive ? "blur(0px)" : "blur(4px)",
                opacity: isActive ? 1 : 0.3,
                scale: isActive ? 1 : 0.9,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {/* Gunakan styling teks yang sama dengan kartu lain */}
              <span className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                {word}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

// --- COMPONENT: PREMIUM STATS CARD (Tidak Berubah) ---
interface StatsCardProps {
  icon: React.ElementType;
  label: string;
  value: string | React.ReactNode;
  color: "blue" | "emerald" | "violet" | "amber";
  delay: number;
}

function PremiumStatsCard({
  icon: Icon,
  label,
  value,
  color,
  delay,
}: StatsCardProps) {
  const theme = {
    blue: {
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-600 dark:text-blue-400",
      borderHover: "group-hover:border-blue-500/50",
      bgHover: "group-hover:bg-blue-50 dark:group-hover:bg-blue-900/10",
    },
    emerald: {
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-600 dark:text-emerald-400",
      borderHover: "group-hover:border-emerald-500/50",
      bgHover: "group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/10",
    },
    violet: {
      iconBg: "bg-violet-500/10",
      iconColor: "text-violet-600 dark:text-violet-400",
      borderHover: "group-hover:border-violet-500/50",
      bgHover: "group-hover:bg-violet-50 dark:group-hover:bg-violet-900/10",
    },
    amber: {
      iconBg: "bg-amber-500/10",
      iconColor: "text-amber-600 dark:text-amber-400",
      borderHover: "group-hover:border-amber-500/50",
      bgHover: "group-hover:bg-amber-50 dark:group-hover:bg-amber-900/10",
    },
  }[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`group relative p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 
                 bg-white dark:bg-zinc-900/50 backdrop-blur-sm
                 transition-all duration-300 ease-out cursor-default
                 ${theme.borderHover} ${theme.bgHover}`}
    >
      <div className="flex flex-col gap-3">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div
            className={`p-2 rounded-lg transition-colors duration-300 ${theme.iconBg}`}
          >
            <Icon className={`w-4 h-4 ${theme.iconColor}`} />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
            {label}
          </span>
        </div>

        {/* Value (Teks atau Animasi) */}
        <div className="relative flex items-center">
          {/* Jika value adalah string biasa, render dengan style standar */}
          {typeof value === "string" ? (
            <span className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
              {value}
            </span>
          ) : (
            // Jika value adalah komponen (seperti ScrollingText), render langsung
            value
          )}
        </div>
      </div>

      {/* Dekorasi Dot */}
      <div
        className={`absolute top-4 right-4 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${theme.iconColor.replace(
          "text-",
          "bg-"
        )}`}
      />
    </motion.div>
  );
}

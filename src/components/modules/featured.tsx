"use client";

import Link from "next/link";
import {
  Layers,
  ArrowUpRight,
  FolderGit,
  User,
  Trophy,
  LayoutDashboard,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";

export function Featured() {
  const { language } = useLanguage();

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-4">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-3">
          <Layers className="w-6 h-6 text-emerald-500" />
          {language === "id" ? "Bagian Unggulan" : "Featured Sections"}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        <PremiumMenuCard
          href="/projects"
          icon={FolderGit}
          title={language === "id" ? "Proyek" : "Projects"}
          desc={
            language === "id"
              ? "Lihat studi kasus dan aplikasi yang telah saya bangun."
              : "View case studies and applications I've built."
          }
          themeColor="emerald"
        />
        <PremiumMenuCard
          href="/about"
          icon={User}
          title={language === "id" ? "Tentang Saya" : "About Me"}
          desc={
            language === "id"
              ? "Perjalanan karir, pengalaman, dan latar belakang saya."
              : "My career journey, experience, and background."
          }
          themeColor="blue"
        />
        <PremiumMenuCard
          href="/achievements"
          icon={Trophy}
          title={language === "id" ? "Pencapaian" : "Achievements"}
          desc={
            language === "id"
              ? "Sertifikasi profesional dan penghargaan kompetisi."
              : "Professional certifications and competition awards."
          }
          themeColor="yellow"
        />
        <PremiumMenuCard
          href="/dashboard"
          icon={LayoutDashboard}
          title={language === "id" ? "Dasbor" : "Dashboard"}
          desc={
            language === "id"
              ? "Statistik pengunjung real-time dan buku tamu."
              : "Real-time visitor statistics and guestbook."
          }
          themeColor="purple"
        />
        <div className="md:col-span-2 lg:col-span-2">
          <PremiumMenuCard
            href="/contact"
            icon={Mail}
            title={language === "id" ? "Hubungi Saya" : "Contact Me"}
            desc={
              language === "id"
                ? "Tertarik bekerja sama? Kirim pesan sekarang."
                : "Interested in collaborating? Send a message now."
            }
            themeColor="rose"
          />
        </div>
      </div>
    </section>
  );
}

// Helper Component (Internal use only)
function PremiumMenuCard({
  href,
  icon: Icon,
  title,
  desc,
  themeColor,
}: {
  href: string;
  icon: React.ElementType;
  title: string;
  desc: string;
  themeColor: string;
}) {
  const colorClasses = {
    emerald: {
      text: "text-emerald-600 dark:text-emerald-400",
      glow: "bg-emerald-500/30 dark:bg-emerald-400/20",
      borderHover: "group-hover:border-emerald-500/50",
    },
    blue: {
      text: "text-blue-600 dark:text-blue-400",
      glow: "bg-blue-500/30 dark:bg-blue-400/20",
      borderHover: "group-hover:border-blue-500/50",
    },
    yellow: {
      text: "text-yellow-600 dark:text-yellow-400",
      glow: "bg-yellow-500/30 dark:bg-yellow-400/20",
      borderHover: "group-hover:border-yellow-500/50",
    },
    purple: {
      text: "text-purple-600 dark:text-purple-400",
      glow: "bg-purple-500/30 dark:bg-purple-400/20",
      borderHover: "group-hover:border-purple-500/50",
    },
    rose: {
      text: "text-rose-600 dark:text-rose-400",
      glow: "bg-rose-500/30 dark:bg-rose-400/20",
      borderHover: "group-hover:border-rose-500/50",
    },
  }[themeColor] || {
    text: "text-zinc-600",
    glow: "bg-zinc-500/30",
    borderHover: "",
  };

  return (
    <Link href={href} className="block h-full w-full">
      <motion.div
        whileHover={{ y: -5, scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className={`group relative h-full w-full overflow-hidden rounded-3xl 
                   bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md p-6 
                   border border-zinc-200/50 dark:border-zinc-800/50 
                   transition-all duration-500 ease-out
                   hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-${themeColor}-900/20
                   ${colorClasses.borderHover}`}
      >
        <div
          className={`absolute -top-16 -left-16 h-40 w-40 rounded-full blur-[60px] transition-all duration-700 ease-in-out 
                     group-hover:scale-[2.5] group-hover:opacity-70 opacity-40
                     ${colorClasses.glow}`}
        />
        <div className="relative z-10 flex flex-col h-full justify-between gap-8">
          <div className="flex justify-between items-start">
            <Icon
              className={`w-10 h-10 transition-transform duration-500 ease-out group-hover:scale-110 ${colorClasses.text}`}
            />
            <ArrowUpRight
              className={`w-6 h-6 opacity-50 transition-all duration-500 
                         -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100
                         ${colorClasses.text}`}
            />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
              {title}
            </h3>
            <p className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2">
              {desc}
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

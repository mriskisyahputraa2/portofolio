"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { Tooltip } from "react-tooltip";
import {
  LayoutGrid,
  Github,
  GitPullRequest,
  Star,
  Users,
  BookMarked,
} from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { cn } from "@/lib/utils";

// --- WRAPPER CALENDAR ---
const GitHubCalendar = dynamic(
  () => import("@/components/github-calendar-wrapper"),
  {
    ssr: false,
    loading: () => (
      <div className="h-40 w-full flex flex-col gap-2 p-6 md:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
        <div className="h-4 w-32 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse mb-4" />
        <div className="flex gap-1 h-full items-end">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="w-full bg-zinc-100 dark:bg-zinc-800 rounded animate-pulse"
              style={{ height: `${Math.random() * 100}%` }}
            />
          ))}
        </div>
      </div>
    ),
  }
);

const GITHUB_USERNAME = "mriskisyahputraa2";

export default function DashboardPage() {
  const { theme } = useTheme();
  const { language, t } = useLanguage();

  // State Data
  const [userStats, setUserStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // State Tahun Calendar
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState<number>(currentYear);
  const years = Array.from({ length: 5 }, (_, i) => currentYear - i);

  // --- FETCH DATA ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const statsRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}`
        );
        const statsData = await statsRes.json();
        setUserStats(statsData);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const themeData = {
    light: ["#f4f4f5", "#a7f3d0", "#34d399", "#059669", "#064e3b"],
    dark: ["#18181b", "#064e3b", "#059669", "#34d399", "#a7f3d0"],
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-5xl space-y-8 md:space-y-12 pb-20"
    >
      {/* 1. HEADER */}
      <motion.div
        variants={itemVariants}
        className="space-y-4 border-b border-zinc-200 dark:border-zinc-800 pb-8"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight flex items-center gap-3">
          <LayoutGrid className="w-7 h-7 md:w-8 md:h-8 text-emerald-500" />
          {t.sidebar.menu.dashboard}
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl text-base md:text-lg leading-relaxed">
          {language === "id"
            ? "Statistik koding saya dan aktivitas kontribusi open-source secara realtime."
            : "My coding statistics and open-source contribution activities in realtime."}
        </p>
      </motion.div>

      {/* 2. STATS CARDS */}
      {/* Menggunakan grid-cols-2 untuk mobile, dan grid-cols-4 untuk desktop */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
      >
        {/* Helper Card Component agar kode lebih rapi */}
        <StatsCard
          icon={
            <BookMarked className="w-4 h-4 md:w-5 md:h-5 text-emerald-500" />
          }
          label="Repositories"
          value={userStats?.public_repos}
          loading={loading}
          borderColor="hover:border-emerald-500/50"
        />
        <StatsCard
          icon={<Users className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />}
          label="Followers"
          value={userStats?.followers}
          loading={loading}
          borderColor="hover:border-blue-500/50"
        />
        <StatsCard
          icon={
            <GitPullRequest className="w-4 h-4 md:w-5 md:h-5 text-purple-500" />
          }
          label="Following"
          value={userStats?.following}
          loading={loading}
          borderColor="hover:border-purple-500/50"
        />
        <StatsCard
          icon={<Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-500" />}
          label="Gists"
          value={userStats?.public_gists}
          loading={loading}
          borderColor="hover:border-yellow-500/50"
        />
      </motion.div>

      {/* 3. GITHUB CONTRIBUTIONS */}
      <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
          <h2 className="text-lg md:text-xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
            <Github className="w-5 h-5 text-emerald-500" />
            GitHub Contributions
          </h2>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            className="text-xs font-mono text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-3 py-1.5 rounded-lg hover:text-emerald-500 transition-colors w-fit"
          >
            @{GITHUB_USERNAME}
          </a>
        </div>

        {/* PERBAIKAN RESPONSIVE:
            - flex-col secara default (Mobile & Tablet)
            - xl:flex-row hanya untuk layar besar (Desktop XL) 
            - Ini mencegah layout gepeng di iPad
        */}
        <div className="flex flex-col xl:flex-row gap-4 md:gap-6">
          {/* AREA GRAFIK */}
          <div className="flex-1 p-4 md:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm overflow-hidden">
            <div className="overflow-x-auto pb-2 scrollbar-hide">
              <div className="min-w-[700px] md:min-w-full">
                {" "}
                {/* Paksa lebar minimum agar grafik tidak hancur di HP */}
                <GitHubCalendar
                  username={GITHUB_USERNAME}
                  year={selectedYear}
                  colorScheme={theme === "dark" ? "dark" : "light"}
                  theme={themeData}
                  blockSize={13}
                  blockMargin={4}
                  fontSize={12}
                  renderBlock={(block, activity) =>
                    React.cloneElement(block, {
                      "data-tooltip-id": "github-tooltip",
                      "data-tooltip-content": `${
                        activity.count === 0 ? "No" : activity.count
                      } contributions on ${activity.date}`,
                    })
                  }
                />
              </div>
            </div>
            <Tooltip
              id="github-tooltip"
              style={{
                backgroundColor: "#18181b",
                color: "#fff",
                borderRadius: "8px",
                fontSize: "12px",
                padding: "8px 12px",
                zIndex: 50,
              }}
              place="top"
            />
          </div>

          {/* YEAR SELECTOR (SCROLLABLE ON MOBILE) */}
          <div className="flex flex-row xl:flex-col gap-2 overflow-x-auto xl:overflow-visible pb-2 xl:pb-0 min-w-fit scrollbar-hide">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-xl transition-all whitespace-nowrap flex-shrink-0",
                  selectedYear === year
                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
                    : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                )}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Sub-Component Kecil untuk Stats Card (Biar tidak duplikasi kode)
function StatsCard({ icon, label, value, loading, borderColor }: any) {
  return (
    <div
      className={`p-5 md:p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 ${borderColor} transition-colors`}
    >
      <div className="flex items-center gap-2 md:gap-3 mb-2 text-zinc-500">
        {icon}
        <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider">
          {label}
        </span>
      </div>
      <p className="text-2xl md:text-3xl font-black text-zinc-900 dark:text-zinc-100">
        {loading ? "-" : value || 0}
      </p>
    </div>
  );
}

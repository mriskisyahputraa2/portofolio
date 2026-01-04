"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Smartphone,
  Terminal,
  Cpu,
  Globe,
  Laptop,
  Zap,
} from "lucide-react";
import { RESUME_DATA } from "@/data/resume";

export default function DashboardPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-5xl space-y-10 pb-20">
      {/* 1. HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-b border-zinc-200 dark:border-zinc-800 pb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
            <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            Dashboard
          </h1>
        </div>
        <p className="text-zinc-500 dark:text-zinc-400">
          My personal statistics, tech stack, and development journey.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* 2. STATS OVERVIEW CARDS */}
        <motion.div
          variants={itemVariants}
          className="col-span-full grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <StatCard label="Years Experience" value="2+" sub="Since 2023" />
          <StatCard
            label="Total Projects"
            value={RESUME_DATA.projects.length.toString()}
            sub="Completed"
          />
          <StatCard label="Commitment" value="High" sub="Fulltime/Freelance" />
          <StatCard
            label="Status"
            value="Open"
            sub="For Opportunities"
            active
          />
        </motion.div>

        {/* 3. TECH STACK - BACKEND (Laravel Focus) */}
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="w-5 h-5 text-emerald-500" />
            <h2 className="text-xl font-bold">Backend & Infrastructure</h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <TechItem
              name="Laravel"
              level="Advanced"
              color="bg-red-500/10 text-red-600"
            />
            <TechItem
              name="PHP"
              level="Advanced"
              color="bg-indigo-500/10 text-indigo-600"
            />
            <TechItem
              name="MySQL"
              level="Intermediate"
              color="bg-blue-500/10 text-blue-600"
            />
            <TechItem
              name="PostgreSQL"
              level="Basic"
              color="bg-cyan-500/10 text-cyan-600"
            />
            <TechItem
              name="Docker"
              level="Basic"
              color="bg-sky-500/10 text-sky-600"
            />
            <TechItem
              name="AWS"
              level="Learning"
              color="bg-orange-500/10 text-orange-600"
            />
          </div>
        </motion.div>

        {/* 4. TECH STACK - FRONTEND & MOBILE */}
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Smartphone className="w-5 h-5 text-blue-500" />
            <h2 className="text-xl font-bold">Frontend & Mobile</h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <TechItem
              name="Flutter"
              level="Advanced"
              color="bg-blue-500/10 text-blue-600"
            />
            <TechItem
              name="Next.js"
              level="Intermediate"
              color="bg-zinc-500/10 text-zinc-600 dark:text-zinc-300"
            />
            <TechItem
              name="React"
              level="Intermediate"
              color="bg-cyan-500/10 text-cyan-600"
            />
            <TechItem
              name="Tailwind CSS"
              level="Advanced"
              color="bg-teal-500/10 text-teal-600"
            />
            <TechItem
              name="Inertia.js"
              level="Intermediate"
              color="bg-purple-500/10 text-purple-600"
            />
            <TechItem
              name="TypeScript"
              level="Basic"
              color="bg-blue-500/10 text-blue-600"
            />
          </div>
        </motion.div>

        {/* 5. CODING ACTIVITY (Dummy Data Visual) */}
        <motion.div
          variants={itemVariants}
          className="col-span-full md:col-span-1 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50"
        >
          <h3 className="font-bold mb-6 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-zinc-500" />
            Most Used Languages
          </h3>
          <div className="space-y-6">
            <ProgressBar
              label="PHP / Laravel"
              percent={45}
              color="bg-red-500"
            />
            <ProgressBar
              label="Dart / Flutter"
              percent={35}
              color="bg-blue-500"
            />
            <ProgressBar
              label="TypeScript / JS"
              percent={20}
              color="bg-yellow-500"
            />
          </div>
          <p className="text-xs text-zinc-500 mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800">
            *Based on estimated coding hours in the last 12 months.
          </p>
        </motion.div>

        {/* 6. CURRENT FOCUS */}
        <motion.div
          variants={itemVariants}
          className="col-span-full md:col-span-1 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-emerald-500/5 to-blue-500/5"
        >
          <h3 className="font-bold mb-4 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-emerald-500" />
            Current Focus
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
            Currently deepening my knowledge in <b>System Architecture</b> and{" "}
            <b>Cloud Deployment (AWS)</b>. I am also exploring{" "}
            <b>AI Integration</b> in web applications to build smarter
            solutions.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-200 dark:bg-zinc-800">
              System Design
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-200 dark:bg-zinc-800">
              Cyber Security
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-200 dark:bg-zinc-800">
              DevOps
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

// --- SUB COMPONENTS ---

function StatCard({
  label,
  value,
  sub,
  active = false,
}: {
  label: string;
  value: string;
  sub: string;
  active?: boolean;
}) {
  return (
    <div
      className={`p-4 rounded-2xl border ${
        active
          ? "border-emerald-500/30 bg-emerald-500/5"
          : "border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50"
      }`}
    >
      <p className="text-xs text-zinc-500 uppercase font-semibold tracking-wider mb-1">
        {label}
      </p>
      <h4
        className={`text-2xl font-bold mb-1 ${
          active ? "text-emerald-500" : "text-zinc-900 dark:text-zinc-100"
        }`}
      >
        {value}
      </h4>
      <p className="text-[10px] text-zinc-400">{sub}</p>
    </div>
  );
}

function TechItem({
  name,
  level,
  color,
}: {
  name: string;
  level: string;
  color: string;
}) {
  return (
    <div
      className={`flex items-center justify-between p-3 rounded-xl border border-zinc-200 dark:border-zinc-800/50 ${color} bg-opacity-10`}
    >
      <span className="font-semibold text-sm">{name}</span>
      <span className="text-[10px] opacity-70 px-2 py-0.5 rounded-full bg-white/50 dark:bg-black/20">
        {level}
      </span>
    </div>
  );
}

function ProgressBar({
  label,
  percent,
  color,
}: {
  label: string;
  percent: number;
  color: string;
}) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm font-medium">
        <span>{label}</span>
        <span>{percent}%</span>
      </div>
      <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full ${color} rounded-full`}
        />
      </div>
    </div>
  );
}

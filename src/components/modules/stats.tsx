"use client";

import { Trophy, Code2, Terminal, Cpu, FolderGit } from "lucide-react";
import { TECH_STACK } from "@/data/tech-stack";

export function Stats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <StatsCard
        icon={<Trophy className="w-4 h-4" />}
        label="Experience"
        value="3+ Years"
      />
      <StatsCard
        icon={<FolderGit className="w-4 h-4" />}
        label="Projects"
        value="15+ Done"
      />
      <StatsCard
        icon={<Terminal className="w-4 h-4" />}
        label="Tech Stack"
        value={`${TECH_STACK.length}+ Used`}
      />
      <StatsCard
        icon={<Cpu className="w-4 h-4" />}
        label="Focus"
        value="Fullstack"
      />
    </div>
  );
}

function StatsCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 flex flex-col gap-2 shadow-sm hover:border-emerald-500/30 hover:shadow-emerald-500/10 hover:shadow-lg transition-all duration-300 group cursor-default">
      <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 group-hover:text-emerald-500 transition-colors">
        {icon}
        <span className="text-xs font-bold uppercase tracking-wider">
          {label}
        </span>
      </div>
      <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
        {value}
      </span>
    </div>
  );
}

import { Hero } from "@/components/modules/hero";
import ContactSection from "@/components/modules/contact";
import { Skills } from "@/components/modules/skills";
import { RESUME_DATA } from "@/data/resume";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Trophy,
  LayoutGrid,
  Code2,
  Activity,
  FolderGit2,
} from "lucide-react";

export default function Home() {
  // Pattern grid halus tambahan
  const gridPattern = `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`;

  // Ambil project untuk thumbnail background
  const showcaseProject = RESUME_DATA.projects[0];

  return (
    <div className="space-y-16 animate-in fade-in duration-500">
      <Hero />

      {/* FEATURED SECTIONS (Bento Grid Enhanced with Image Backgrounds) */}
      <section className="space-y-6">
        <div className="space-y-1 border-b border-zinc-800/50 pb-4">
          <h2 className="text-xl font-bold text-zinc-100 flex items-center gap-2">
            <LayoutGrid className="w-5 h-5 text-emerald-500" />
            Featured Sections
          </h2>
          <p className="text-sm text-zinc-500">
            Explore my crafts, tools, and milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[180px]">
          {/* A. PROJECTS SHOWCASE (Background Gambar Project) */}
          <Link
            href="/projects"
            className="group relative md:col-span-2 rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950 hover:border-emerald-500/50 transition-all"
          >
            {/* 1. IMAGE BACKGROUND */}
            {showcaseProject?.image && (
              <Image
                src={showcaseProject.image}
                alt="Project Background"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-40"
              />
            )}

            {/* 2. GRADIENT OVERLAY (Agar teks terbaca) */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/30 z-10" />

            {/* Pattern Overlay Halus */}
            <div
              className="absolute inset-0 bg-[size:20px_20px] opacity-10 z-10"
              style={{ backgroundImage: gridPattern }}
            />

            {/* 3. KONTEN TEKS */}
            <div className="absolute bottom-0 left-0 p-6 z-20">
              <div className="h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center mb-3 text-zinc-950 shadow-lg shadow-emerald-500/20">
                <FolderGit2 className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-zinc-100">
                Projects Showcase
              </h3>
              <p className="text-sm text-zinc-300 mt-1 max-w-sm font-medium">
                Detailed case studies of my high-quality work.
              </p>
            </div>
          </Link>

          {/* B. ABOUT ME */}
          <Link
            href="/about"
            className="group relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900/50 hover:border-blue-500/50 transition-all flex flex-col items-center justify-center p-6 text-center"
          >
            <div
              className="absolute inset-0 bg-[size:20px_20px] opacity-10"
              style={{ backgroundImage: gridPattern }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950/80 z-0" />

            <div className="h-16 w-16 rounded-2xl bg-zinc-800 mb-4 overflow-hidden relative rotate-3 group-hover:rotate-0 transition-all duration-300 border border-zinc-700 shadow-xl z-10">
              <Image
                src={RESUME_DATA.avatarUrl}
                alt="Me"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-base font-bold text-zinc-100 z-10">About Me</h3>
            <p className="text-xs text-zinc-400 mt-1 font-medium z-10">
              The person behind the code.
            </p>
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <ArrowUpRight className="h-4 w-4 text-blue-500" />
            </div>
          </Link>

          {/* C. ACHIEVEMENTS (Background Gambar Placeholder) */}
          <Link
            href="/achievements"
            className="group relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950 hover:border-yellow-500/50 transition-all p-6 flex flex-col justify-end"
          >
            {/* 1. IMAGE BACKGROUND PLACEHOLDER (Menggunakan gambar project sbg contoh visual) */}
            {showcaseProject?.image && (
              <Image
                src={showcaseProject.image}
                alt="Achievements Background"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-20 grayscale rotate-12 scale-125"
              />
            )}

            {/* 2. GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/80 to-zinc-950 z-0" />

            <Trophy className="h-10 w-10 text-yellow-500 mb-auto relative z-10 drop-shadow-md" />
            <div className="relative z-10">
              <h3 className="text-base font-bold text-zinc-100">
                Achievements
              </h3>
              <p className="text-xs text-zinc-400 mt-1 font-medium">
                Awards & Certifications.
              </p>
            </div>
          </Link>

          {/* D. DASHBOARD */}
          <Link
            href="/dashboard"
            className="group relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900/50 hover:border-purple-500/50 transition-all p-6 flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/10 to-transparent opacity-50" />
            <div className="flex justify-between items-start relative z-10">
              <Activity className="h-8 w-8 text-purple-500" />
              <div className="px-2 py-1 rounded-md bg-purple-500/20 text-[10px] text-purple-300 font-mono font-bold flex items-center gap-1">
                LIVE
              </div>
            </div>
            <div className="relative z-10">
              <h3 className="text-base font-bold text-zinc-100">Dashboard</h3>
              <p className="text-xs text-zinc-400 mt-1 font-medium">
                Real-time GitHub stats.
              </p>
            </div>
          </Link>

          {/* E. SERVICES */}
          <div className="group relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900/50 p-6 flex items-center justify-between">
            <div>
              <Code2 className="h-8 w-8 text-zinc-400 mb-2" />
              <h3 className="text-base font-bold text-zinc-100">Services</h3>
              <p className="text-xs text-zinc-500 font-medium">
                Focusing on high-quality apps.
              </p>
            </div>
            <div className="text-right space-y-2 text-sm font-mono font-black tracking-wider select-none">
              <div className="text-zinc-700 group-hover:text-emerald-400 transition-colors animate-pulse">
                WEB
              </div>
              <div className="text-zinc-700 group-hover:text-blue-400 transition-colors animate-pulse delay-300">
                MOBILE
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-zinc-800/50 pt-12">
        <ContactSection />
      </div>
    </div>
  );
}

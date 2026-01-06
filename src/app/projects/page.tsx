"use client";

import { PROJECTS_DATA } from "@/data/projects";
import { useLanguage } from "@/hooks/use-language";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; // Aktifkan Image
import { ArrowUpRight, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { TechBadge } from "@/components/shared/tech-badge"; // Import komponen baru

export default function ProjectsPage() {
  const { t } = useLanguage();

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2 border-b border-zinc-200 dark:border-zinc-800 pb-8"
      >
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          {t.sections.projects}
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          {t.projects.description}
        </p>
      </motion.div>

      {/* PROJECT LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS_DATA.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="group flex flex-col h-full relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:shadow-lg"
            >
              {/* IMAGE SECTION */}
              <div className="relative h-48 w-full overflow-hidden bg-zinc-200 dark:bg-zinc-800 shrink-0 border-b border-zinc-100 dark:border-zinc-800">
                {/* 1. Gambar Asli */}
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay Gradient (Agar teks badge terbaca) */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent opacity-60" />

                {/* Overlay saat hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-bold text-white shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span>{t.projects.viewDetail}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="absolute top-4 left-4">
                  <Badge
                    variant="secondary"
                    className="bg-white/90 text-zinc-900 dark:bg-zinc-900/90 dark:text-zinc-100 backdrop-blur-md shadow-sm border-0 text-[10px]"
                  >
                    {project.platform}
                  </Badge>
                </div>
              </div>

              {/* CONTENT SECTION */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors flex items-center gap-1">
                      {project.title}
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-emerald-500" />
                    </h2>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                      {project.role} • {project.year}
                    </p>
                  </div>

                  {project.links.github && (
                    <div className="p-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:text-black dark:hover:text-white transition-colors z-20">
                      <Github className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>

                <p className="text-zinc-600 dark:text-zinc-300 text-xs leading-relaxed mb-4 line-clamp-2 flex-1">
                  {project.shortDescription}
                </p>

                {/* 2. TECH STACK (Menggunakan TechBadge Baru) */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.slice(0, 5).map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                  {project.techStack.length > 5 && (
                    <span className="text-[10px] text-zinc-400 py-1.5 px-1 self-center">
                      +{project.techStack.length - 5}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { PROJECTS_DATA } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Github,
  Globe,
  User,
  Layers,
  CheckCircle2,
  Calendar,
  MonitorSmartphone,
  ExternalLink,
  X,
  ZoomIn,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TechBadge } from "@/components/shared/tech-badge";
import { motion, AnimatePresence } from "framer-motion";
import { use, useState, useEffect } from "react";
import { useLanguage } from "@/hooks/use-language";

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { t } = useLanguage();

  // State untuk mengontrol Zoom Modal
  const [isZoomed, setIsZoomed] = useState(false);

  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  // Menutup zoom jika tombol ESC ditekan
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsZoomed(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  if (!project) notFound();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-5xl pb-20 relative"
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-emerald-600 dark:hover:text-emerald-400 mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          {t.projects.back}
        </Link>

        <div className="space-y-6 mb-10">
          <div className="space-y-3">
            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center gap-4 text-sm font-mono font-medium text-emerald-600 dark:text-emerald-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {project.year}
              </span>
              <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
              <span className="flex items-center gap-1.5">
                <MonitorSmartphone className="w-4 h-4" />
                {project.platform}
              </span>
            </div>

            {/* Header Title & Buttons */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-100 leading-tight tracking-tight flex-1">
                {project.title}
              </h1>

              <div className="flex flex-wrap gap-3 shrink-0">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full gap-2 h-10 px-5 border-zinc-200 dark:border-zinc-700"
                    >
                      <Github className="w-4 h-4" />
                      <span className="hidden sm:inline">
                        {t.projects.sourceCode}
                      </span>
                      <span className="sm:hidden">
                        {t.projects.sourceCodeMobile}
                      </span>
                    </Button>
                  </a>
                )}

                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      className="rounded-full gap-2 h-10 px-5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                    >
                      <Globe className="w-4 h-4" />
                      <span>{t.projects.liveDemo}</span>
                      <ExternalLink className="w-3 h-3 ml-0.5 opacity-50" />
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* --- GAMBAR PROJECT UTAMA (THUMBNAIL) DENGAN ZOOM --- */}
          <div
            className="group relative w-full aspect-video rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-lg my-8 bg-zinc-100 dark:bg-zinc-900 cursor-zoom-in"
            onClick={() => setIsZoomed(true)}
          >
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
              quality={100} // Kualitas Maksimal
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />

            {/* Overlay Icon Zoom */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                <ZoomIn className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 border-y border-zinc-200 dark:border-zinc-800">
            <div className="space-y-2">
              <span className="text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                <User className="w-3 h-3" /> {t.projects.myRole}
              </span>
              <p className="font-medium text-zinc-900 dark:text-zinc-100 text-base">
                {project.role}
              </p>
            </div>
            <div className="space-y-2 flex flex-col sm:items-end">
              <span className="text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-3 h-3" /> {t.projects.techStack}
              </span>
              <div className="flex flex-wrap gap-2 sm:justify-end">
                {project.techStack.map((t) => (
                  <TechBadge key={t} name={t} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="prose prose-zinc dark:prose-invert max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              {t.projects.overview}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-lg">
              {project.description}
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-6 not-prose">
            <div className="bg-red-50/50 dark:bg-red-900/10 p-6 rounded-2xl border border-red-100 dark:border-red-900/20">
              <h3 className="text-lg font-bold text-red-700 dark:text-red-400 mb-3 flex items-center gap-2">
                {t.projects.problem}
              </h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="bg-emerald-50/50 dark:bg-emerald-900/10 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-900/20">
              <h3 className="text-lg font-bold text-emerald-700 dark:text-emerald-400 mb-3 flex items-center gap-2">
                {t.projects.solution}
              </h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          <section className="not-prose">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 flex items-center gap-2">
              {t.projects.keyFeatures}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/30 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* IMAGE GALLERY SECTION */}
          {project.images && project.images.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
                Gallery
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-video rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-md bg-zinc-100 dark:bg-zinc-900"
                  >
                    <Image
                      src={img}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </motion.div>

      {/* --- MODAL ZOOM FULLSCREEN --- */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10 backdrop-blur-sm"
            onClick={() => setIsZoomed(false)}
          >
            {/* Tombol Close */}
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-5 right-5 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Gambar yang di-Zoom */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full h-full flex items-center justify-center pointer-events-none"
            >
              <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-contain" // Agar gambar tidak terpotong (fit screen)
                  quality={100} // Kualitas Maksimal
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

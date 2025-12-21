import { Hero } from "@/components/modules/hero";
import { Skills } from "@/components/modules/skills";
import { ProjectCard } from "@/components/modules/project-card";
import ContactSection from "@/components/modules/contact";
import { RESUME_DATA } from "@/data/resume";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  // Hanya ambil 4 project pertama untuk beranda
  const featuredProjects = RESUME_DATA.projects.slice(0, 4);

  return (
    <div className="min-h-screen bg-zinc-950 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 w-full space-y-20 md:space-y-24 pb-12">
        {/* 1. HERO */}
        <Hero />

        {/* 2. SKILLS */}
        <Skills />

        {/* 3. FEATURED PROJECTS SECTION */}
        <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-zinc-100">
                Featured Projects
              </h2>
              <p className="text-sm text-zinc-400">
                A glimpse of my recent works.
              </p>
            </div>

            {/* TOMBOL "See All Projects" (Update Disini) */}
            <Button
              asChild
              variant="ghost"
              className="text-emerald-500 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all"
            >
              <Link
                href="/projects"
                className="flex items-center gap-2 font-mono"
              >
                See All Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Grid Proyek (Hanya 4 item) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.techStack}
                image={project.image}
                role={project.role}
                period={project.period}
                slug={project.slug}
              />
            ))}
          </div>
        </section>

        {/* 4. CONTACT */}
        <ContactSection />
      </div>
    </div>
  );
}

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
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-800 pb-6">
            {/* Kiri: Judul & Deskripsi */}
            <div className="space-y-1">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 font-sans tracking-tight">
                Featured Projects
              </h2>
              <p className="text-sm md:text-base text-zinc-400 max-w-md">
                Selected works demonstrating fullstack capabilities.
              </p>
            </div>

            <Button
              asChild
              variant="outline"
              className="self-start md:self-auto rounded-full border-zinc-800 bg-zinc-900/50 text-zinc-300 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-400 transition-all duration-300 group"
            >
              <Link
                href="/projects"
                className="flex items-center gap-2 pl-4 pr-2 py-1"
              >
                <span className="text-sm font-medium">See All Projects</span>
                <span className="bg-zinc-800 group-hover:bg-emerald-500/20 rounded-full p-1 transition-colors">
                  <ArrowRight className="w-3 h-3 group-hover:-rotate-45 transition-transform duration-300" />
                </span>
              </Link>
            </Button>
          </div>

          {/* Grid Proyek (Tetap Sama) */}
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

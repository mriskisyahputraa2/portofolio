import { Hero } from "@/components/modules/hero";
import { ProjectCard } from "@/components/modules/project-card"; // Import komponen baru
import { RESUME_DATA } from "@/data/resume";

export default function Home() {
  return (
    <div className="min-h-screen p-8 md:p-12 space-y-16 bg-zinc-950 relative overflow-hidden">
      {/* Background Grid Decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Konten Utama */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-20">
        {/* 1. HERO SECTION */}
        <Hero />

        {/* 2. FEATURED PROJECTS SECTION */}
        <section className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 fill-mode-backwards">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
            <h2 className="text-2xl font-bold text-zinc-100">
              Featured Projects
            </h2>
            <span className="text-xs font-mono text-zinc-500">
              {RESUME_DATA.projects.length} PROJECTS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {RESUME_DATA.projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.techStack}
                link={project.link ? project.link.href : undefined}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

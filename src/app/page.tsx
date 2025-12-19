import { Hero } from "@/components/modules/hero";
import { Skills } from "@/components/modules/skills";
import { ProjectCard } from "@/components/modules/project-card";
import ContactSection from "@/components/modules/contact";
import { RESUME_DATA } from "@/data/resume";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 relative overflow-hidden">
      {/* Background Grid Decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* PERBAIKAN JARAK:
         Sebelumnya: space-y-32 (terlalu jauh, sekitar 128px/8rem)
         Sekarang: space-y-20 (sekitar 80px/5rem) atau space-y-24
      */}
      <div className="relative z-10 w-full space-y-20 md:space-y-24 pb-12">
        {/* 1. HERO SECTION */}
        <Hero />

        {/* 2. SKILLS SECTION */}
        <Skills />

        {/* 3. FEATURED PROJECTS SECTION */}
        <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-zinc-100">
                Featured Projects
              </h2>
              <p className="text-sm text-zinc-400">
                Selected works demonstrating fullstack capabilities.
              </p>
            </div>
            <span className="text-xs font-mono text-zinc-500 border border-zinc-800 px-2 py-1 rounded">
              {RESUME_DATA.projects.length} PROJECTS
            </span>
          </div>

          {/* Grid Proyek */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        {/* 4. CONTACT SECTION */}
        <ContactSection />
      </div>
    </div>
  );
}

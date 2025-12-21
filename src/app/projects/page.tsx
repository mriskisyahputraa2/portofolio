import { RESUME_DATA } from "@/data/resume";
import { ProjectCard } from "@/components/modules/project-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Muhammad Rizki Syahputra",
  description: "A complete list of projects created by Riski.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-zinc-950 pt-24 pb-20 relative overflow-hidden">
      {/* Background Grid (Biar konsisten sama Home) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 space-y-12">
        {/* Header Section */}
        <div className="space-y-6">
          <Button
            asChild
            variant="ghost"
            className="pl-0 hover:bg-transparent text-zinc-400 hover:text-emerald-500 mb-4"
          >
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </Button>

          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 font-sans">
              All Projects
            </h1>
            <p className="text-zinc-400 max-w-2xl text-lg">
              A complete archive of my works in Software Engineering, Mobile
              Development, and Network Security.
            </p>
          </div>
        </div>

        {/* Grid Semua Project */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RESUME_DATA.projects.map((project) => (
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
      </div>
    </div>
  );
}

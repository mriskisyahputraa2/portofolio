import { RESUME_DATA } from "@/data/resume";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center space-y-8 py-8 md:py-12 text-center">
      {/* 1. Status Badge */}
      <Badge
        variant="outline"
        className="py-1.5 px-4 border-emerald-500/30 bg-emerald-500/10 text-emerald-400 gap-2 rounded-full transition-all hover:bg-emerald-500/20"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        Available for New Projects
      </Badge>

      {/* 2. Heading Besar */}
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-100 font-sans max-w-4xl">
        Building <span className="text-emerald-500">Modern</span> & Scalable
        Digital Experiences.
      </h1>

      {/* 3. Description */}
      <p className="text-zinc-400 max-w-2xl text-lg md:text-xl leading-relaxed">
        {RESUME_DATA.summary}
      </p>

      {/* 4. Action Buttons (Centered) */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button
          asChild
          size="lg"
          className="rounded-full bg-zinc-100 text-zinc-900 hover:bg-zinc-200 px-8 font-medium"
        >
          <Link href="/projects">
            View Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>

        <Button
          asChild
          variant="outline"
          size="lg"
          className="rounded-full border-zinc-700 hover:bg-zinc-800 px-8"
        >
          <a href={RESUME_DATA.cvUrl} download>
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </a>
        </Button>
      </div>

      {/* 5. Terminal (Opsional, dibuat lebih lebar/hidden sesuai selera) */}
      <div className="w-full max-w-3xl mt-12 text-left rounded-xl border border-zinc-800 bg-zinc-950/50 p-6 font-mono text-sm text-zinc-400 shadow-2xl backdrop-blur-sm">
        <div className="flex gap-2 mb-4">
          <div className="h-3 w-3 rounded-full bg-red-500/20 border border-red-500/30"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500/20 border border-yellow-500/30"></div>
          <div className="h-3 w-3 rounded-full bg-green-500/20 border border-green-500/30"></div>
        </div>
        <div className="space-y-2">
          <p>
            <span className="text-emerald-500">riski@dev:~$</span> current_stack
          </p>
          <p className="text-zinc-300">{`> ["Laravel", "Next.js", "Flutter", "MySQL", "Docker"]`}</p>
        </div>
      </div>
    </section>
  );
}

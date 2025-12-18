import { RESUME_DATA } from "@/data/resume";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download } from "lucide-react"; // Hapus import Terminal icon jika tidak dipakai
import Link from "next/link";

export function Hero() {
  return (
    <section className="space-y-6">
      {/* 1. Status Badge & Heading */}
      <div className="space-y-2">
        <Badge
          variant="outline"
          className="py-1 px-3 border-emerald-500/30 bg-emerald-500/10 text-emerald-400 gap-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Open for Internship / WFH
        </Badge>

        {/* Ubah kata "Secure" jadi "Modern" atau "Robust" */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-sans max-w-2xl">
          <span className="text-zinc-100">Building </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 animate-gradient-x">
            Modern & Scalable
          </span>
          <br />
          <span className="text-zinc-100">Digital Experiences.</span>
        </h1>

        <p className="text-zinc-400 max-w-xl text-lg leading-relaxed">
          {RESUME_DATA.summary}
        </p>
      </div>

      {/* 2. Action Buttons */}
      <div className="flex flex-wrap gap-3">
        <Button asChild className="bg-zinc-100 text-zinc-900 hover:bg-zinc-200">
          <Link href="/projects">
            View Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>

        <Button
          asChild
          variant="outline"
          className="border-zinc-700 hover:bg-zinc-800"
        >
          <a href={RESUME_DATA.cvUrl} download>
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </a>
        </Button>
      </div>

      {/* 3. Terminal Snippet (Updated Content) */}
      <div className="mt-8 rounded-lg border border-zinc-800 bg-zinc-950/50 p-4 font-mono text-xs text-zinc-400">
        <div className="flex gap-2 mb-2">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500/20"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/20"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-green-500/20"></div>
        </div>
        <div className="space-y-1">
          <p>
            <span className="text-emerald-500">riski@dev:~$</span> whoami
          </p>
          <p className="text-zinc-300">{`> Student & Fullstack Developer (Web + Mobile)`}</p>

          <p>
            <span className="text-emerald-500">riski@dev:~$</span> current_stack
          </p>
          {/* Update list teknologi */}
          <p className="text-zinc-300">{`> ["Laravel", "Next.js", "Flutter", "MySQL"]`}</p>
        </div>
      </div>
    </section>
  );
}

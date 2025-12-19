import { RESUME_DATA } from "@/data/resume";
import { Button } from "@/components/ui/button";
import { Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950/50 backdrop-blur-xl mt-24">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* 1. Heading CTA */}
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              Ready to collaborate?
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              I'm currently open for internship and freelance opportunities.
              Let's build something amazing together.
            </p>
          </div>

          {/* 2. Tombol Email Besar */}
          <Button
            asChild
            size="lg"
            className="rounded-full bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold px-8 h-12"
          >
            <Link href={`mailto:${RESUME_DATA.contact.email}`}>
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </Link>
          </Button>

          {/* 3. Social Links Grid */}
          <div className="flex gap-6 mt-8">
            {RESUME_DATA.contact.social.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                className="text-zinc-400 hover:text-emerald-500 transition-colors flex items-center gap-1 text-sm font-medium"
              >
                {social.name}
                <ArrowUpRight className="h-3 w-3" />
              </Link>
            ))}
          </div>
        </div>

        {/* 4. Copyright & Credits */}
        <div className="mt-16 border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-500">
            &copy; {currentYear} {RESUME_DATA.name}. All rights reserved.
          </p>
          <p className="text-xs text-zinc-600 flex items-center gap-1">
            Built with <span className="text-emerald-500">Next.js</span> &{" "}
            <span className="text-emerald-500">Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

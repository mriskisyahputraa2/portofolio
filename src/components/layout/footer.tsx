import { RESUME_DATA } from "@/data/resume";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-zinc-950 pt-8 pb-8">
      {/* Garis Pemisah Emerald Tipis (Gap) */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent mb-8" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Navigasi Simpel */}
        <nav className="flex gap-6 text-sm font-medium text-zinc-400">
          <Link href="/" className="hover:text-emerald-400 transition-colors">
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-emerald-400 transition-colors"
          >
            Profile
          </Link>
          <Link
            href="/projects"
            className="hover:text-emerald-400 transition-colors"
          >
            Portfolio
          </Link>
        </nav>

        {/* Social Icons (Ambil dari RESUME_DATA) */}
        <div className="flex items-center gap-4">
          {RESUME_DATA.contact.social.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-emerald-400 transition-colors"
              aria-label={social.name}
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Copyright Centered */}
      <div className="text-center mt-8 text-xs text-zinc-600 font-mono">
        &copy; {new Date().getFullYear()} {RESUME_DATA.name}. All rights
        reserved.
      </div>
    </footer>
  );
}

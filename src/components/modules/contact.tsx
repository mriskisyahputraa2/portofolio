"use client";

import { RESUME_DATA } from "@/data/resume";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
// 1. Kita import komponen Avatar yang sama dengan Navbar
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ContactSection() {
  return (
    <section id="contact" className="relative scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* KIRI: Informasi & Profil */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 font-sans">
              Let’s collaborate{" "}
              <span className="text-emerald-500">together.</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed max-w-md">
              I believe the best works are born from collaboration. Whether you
              have a project in mind or just want to say hi, feel free to drop
              me a message.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* 2. PERBAIKAN DISINI: 
                Mengganti Next/Image dengan Shadcn Avatar agar konsisten dengan Navbar 
                dan anti-error domain config.
             */}
            <Avatar className="h-22 w-22 border-2 border-emerald-500/20">
              <AvatarImage
                src={RESUME_DATA.avatarUrl}
                alt={RESUME_DATA.name}
                className="object-cover"
              />
              <AvatarFallback className="bg-zinc-800 text-emerald-500 text-xl font-bold font-mono">
                {RESUME_DATA.initials}
              </AvatarFallback>
            </Avatar>

            <div>
              <p className="text-zinc-100 font-medium">Email Me Directly</p>
              <a
                href={`mailto:${RESUME_DATA.contact.email}`}
                className="text-emerald-500 hover:underline text-sm font-mono"
              >
                {RESUME_DATA.contact.email}
              </a>
            </div>
          </div>
        </div>

        {/* KANAN: Form Input */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 md:p-8 backdrop-blur-sm">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-zinc-300"
              >
                Fullname
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                className="w-full rounded-md border border-zinc-800 bg-zinc-950/50 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-zinc-300"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                className="w-full rounded-md border border-zinc-800 bg-zinc-950/50 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-zinc-300"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-md border border-zinc-800 bg-zinc-950/50 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all"
              />
            </div>

            <Button className="w-full bg-emerald-500 text-zinc-950 hover:bg-emerald-600 font-bold transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <Send className="mr-2 h-4 w-4" /> Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

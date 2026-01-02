"use client";

import { RESUME_DATA } from "@/data/resume";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLanguage } from "@/hooks/use-language"; // Import Hook

export default function ContactSection() {
  const { t } = useLanguage(); // Gunakan Hook Bahasa

  return (
    <section id="contact" className="relative scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* KIRI: Informasi & Profil */}
        <div className="space-y-6">
          <div className="space-y-2">
            {/* Judul: Light(text-zinc-900) | Dark(text-zinc-100) */}
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 font-sans">
              {t.contact.title_start}{" "}
              <span className="text-emerald-500">{t.contact.title_end}</span>
            </h2>
            {/* Deskripsi: Light(text-zinc-600) | Dark(text-zinc-400) */}
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-md">
              {t.contact.desc}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-22 border-2 border-emerald-500/20">
              <AvatarImage
                src={RESUME_DATA.avatarUrl}
                alt={RESUME_DATA.name}
                className="object-cover"
              />
              {/* Fallback BG: Light(bg-zinc-100) | Dark(bg-zinc-800) */}
              <AvatarFallback className="bg-zinc-100 dark:bg-zinc-800 text-emerald-500 text-xl font-bold font-mono">
                {RESUME_DATA.initials}
              </AvatarFallback>
            </Avatar>

            <div>
              {/* Label Email: Light(text-zinc-900) | Dark(text-zinc-100) */}
              <p className="text-zinc-900 dark:text-zinc-100 font-medium">
                {t.contact.email_me}
              </p>
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
        {/* Container: Light(bg-zinc-50 border-zinc-200) | Dark(bg-zinc-900/50 border-zinc-800) */}
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-6 md:p-8 backdrop-blur-sm">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label
                htmlFor="name"
                // Label: Light(text-zinc-700) | Dark(text-zinc-300)
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                {t.contact.form.name}
              </label>
              <input
                id="name"
                type="text"
                placeholder={
                  t.contact.form.name === "Nama Lengkap" ? "Name" : "Name"
                }
                className="w-full rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 px-4 py-3 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                {t.contact.form.email}
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="w-full rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 px-4 py-3 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                {t.contact.form.message}
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Message"
                className="w-full resize-none rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 px-4 py-3 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all"
              />
            </div>

            <Button className="w-full bg-emerald-500 text-zinc-950 hover:bg-emerald-600 font-bold transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <Send className="mr-2 h-4 w-4" /> {t.contact.form.btn}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

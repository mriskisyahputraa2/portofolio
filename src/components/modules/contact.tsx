"use client";

import { useState } from "react";
import { RESUME_DATA } from "@/data/resume";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLanguage } from "@/hooks/use-language";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ContactSection() {
  const { t } = useLanguage();

  // State untuk form handling
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // ID Formspree Kamu
  const FORMSPREE_ID = "mbdlvqbw";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- STYLE BARU: Threads & TikTok Dibedakan ---
  const getSocialStyle = (platform: string) => {
    const baseStyle = "text-white border transition-all duration-300"; // Text putih default

    switch (platform) {
      case "Email":
        return `${baseStyle} bg-red-600 border-red-600 hover:bg-transparent hover:text-red-600`;

      case "Instagram":
        return `${baseStyle} bg-gradient-to-bl from-purple-600 via-pink-500 to-orange-400 border-transparent hover:from-transparent hover:to-transparent hover:bg-transparent hover:text-pink-500 hover:border-pink-500`;

      case "LinkedIn":
        return `${baseStyle} bg-[#0077b5] border-[#0077b5] hover:bg-transparent hover:text-[#0077b5]`;

      case "GitHub":
        return `${baseStyle} bg-[#0d1117] border-[#0d1117] dark:bg-[#161b22] dark:border-[#161b22] hover:bg-transparent hover:text-[#0d1117] dark:hover:text-white dark:hover:border-white`;

      case "TikTok":
        // TikTok: Hitam Pekat (#000000)
        return `${baseStyle} bg-black border-black hover:bg-transparent hover:text-black dark:hover:text-white dark:hover:border-white`;

      case "Threads":
        // Threads: Abu-abu Gelap (#1a1a1a) agar beda dengan TikTok
        return `${baseStyle} bg-[#1a1a1a] border-[#1a1a1a] hover:bg-transparent hover:text-[#1a1a1a] dark:hover:text-white dark:hover:border-white`;

      default:
        return `${baseStyle} bg-emerald-600 border-emerald-600 hover:bg-transparent hover:text-emerald-600`;
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-24 py-8">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1/3 h-full bg-emerald-500/5 dark:bg-emerald-500/10 blur-[100px] -z-10 rounded-full" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* KIRI: Informasi & Ajakan */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 font-sans tracking-tight">
              {t.contact.title_start}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">
                {t.contact.title_end}
              </span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg max-w-md">
              {t.contact.desc}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Avatar className="h-16 w-16 border-2 border-zinc-100 dark:border-zinc-800 shadow-xl">
              <AvatarImage
                src={RESUME_DATA.avatarUrl}
                alt={RESUME_DATA.name}
                className="object-cover"
              />
              <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
            </Avatar>

            <div className="space-y-1">
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Direct Contact
              </p>
              <a
                href={`mailto:${RESUME_DATA.contact.email}`}
                className="text-zinc-900 dark:text-zinc-100 hover:text-emerald-500 dark:hover:text-emerald-400 font-bold text-lg flex items-center gap-2 transition-colors group"
              >
                {RESUME_DATA.contact.email}
                <ArrowRight className="w-4 h-4 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
            </div>
          </div>

          {/* Social Shortcuts */}
          <div className="flex gap-3">
            {RESUME_DATA.contact.social.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  className={cn(
                    "p-3 rounded-full hover:scale-110 shadow-sm",
                    getSocialStyle(social.name) // Panggil fungsi style baru
                  )}
                  title={social.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* KANAN: Form Input */}
        <div className="relative">
          <div className="relative rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl p-6 md:p-8 shadow-2xl">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12 space-y-4"
              >
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  Message Sent!
                </h3>
                <p className="text-zinc-500 text-sm">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400"
                  >
                    {t.contact.form.name}
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-black/50 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400"
                  >
                    {t.contact.form.email}
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-black/50 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400"
                  >
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full resize-none rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-black/50 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    placeholder="Hello, I have a project..."
                  />
                </div>

                <Button
                  disabled={isSubmitting}
                  className="w-full h-12 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 font-bold rounded-xl shadow-lg transition-transform hover:-translate-y-1"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <Send className="mr-2 h-4 w-4" />
                  )}
                  {t.contact.form.btn}
                </Button>
              </form>
            )}
          </div>

          <div className="absolute -top-4 -right-4 w-24 h-24 bg-dots-pattern opacity-20 -z-10" />
        </div>
      </div>
    </section>
  );
}

// add Comment

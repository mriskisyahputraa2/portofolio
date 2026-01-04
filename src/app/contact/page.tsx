"use client";

import { useState } from "react";
import { RESUME_DATA } from "@/data/resume";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  ArrowUpRight,
  User,
  MessageSquare,
  AtSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/hooks/use-language";

export default function ContactPage() {
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New Message from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:${
      RESUME_DATA.contact.email
    }?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // --- KONFIGURASI STYLE KARTU ---
  const getCardStyle = (platform: string) => {
    switch (platform) {
      case "Email":
        return {
          bg: "bg-red-600",
          title: "Stay in Touch",
          desc: "Reach out via email.",
          btnText: "Go to Gmail",
        };
      case "Instagram":
        return {
          bg: "bg-gradient-to-bl from-purple-600 via-pink-500 to-orange-400",
          title: "Follow My Journey",
          desc: "Follow my creative journey.",
          btnText: "Go to Instagram",
        };
      case "LinkedIn":
        return {
          bg: "bg-[#0077b5]",
          title: "Let's Connect",
          desc: "Connect professionally.",
          btnText: "Go to LinkedIn",
        };
      case "GitHub":
        return {
          bg: "bg-[#0d1117] dark:bg-[#161b22]",
          title: "Explore the Code",
          desc: "Check my repositories.",
          btnText: "Go to GitHub",
        };
      case "TikTok":
        return {
          bg: "bg-zinc-800",
          title: "Join the Fun",
          desc: "Watch fun content.",
          btnText: "Go to TikTok",
        };
      case "Threads":
        return {
          bg: "bg-black",
          title: "Think & Thread",
          desc: "Read my latest thoughts.",
          btnText: "Go to Threads",
        };
      default:
        return {
          bg: "bg-emerald-600",
          title: "Social Media",
          desc: "Connect with me.",
          btnText: "Visit Profile",
        };
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-6xl space-y-12 pb-20 mx-auto"
    >
      {/* 1. HEADER */}
      <motion.div
        variants={itemVariants}
        className="space-y-4 border-b border-zinc-200 dark:border-zinc-800 pb-8"
      >
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight flex items-center gap-3">
          <Mail className="w-8 h-8 text-emerald-500" />
          {language === "id" ? "Hubungi Saya" : "Get in Touch"}
        </h1>
        {/* UPDATE TEKS DI SINI */}
        <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl text-lg leading-relaxed">
          {language === "id"
            ? "Tertarik untuk berkolaborasi atau punya pertanyaan? Jangan ragu untuk menghubungi saya. Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif, atau peluang untuk menjadi bagian dari visi Anda."
            : "Interested in collaborating or have a question? Feel free to reach out. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions."}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* 2. KOLOM KIRI: DIRECT CONTACTS */}
        <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6">
          <div className="space-y-2 mb-6">
            <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-100">
              {language === "id" ? "Temukan Saya di" : "Find Me on"}
            </h3>
            <p className="text-sm text-zinc-500">
              Direct access to my profiles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* A. KARTU EMAIL */}
            {(() => {
              const style = getCardStyle("Email");
              return (
                <a
                  href={`mailto:${RESUME_DATA.contact.email}`}
                  className={`group relative p-6 rounded-3xl ${style.bg} text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl`}
                >
                  <div className="relative z-10 flex flex-col h-full justify-between min-h-[120px]">
                    <div>
                      <h3 className="text-xl font-bold">{style.title}</h3>
                      <p className="text-xs text-white/90 mt-1 font-medium">
                        {style.desc}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center gap-2 px-4 py-2 bg-white text-black w-fit rounded-lg text-sm font-bold shadow-sm group-hover:bg-zinc-100 transition-colors">
                      {style.btnText}
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  <Mail className="absolute bottom-5 right-5 w-16 h-16 text-white opacity-100" />
                </a>
              );
            })()}

            {/* B. KARTU SOSMED LAINNYA */}
            {RESUME_DATA.contact.social.map((social) => {
              const style = getCardStyle(social.name);
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-6 rounded-3xl ${style.bg} text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl`}
                >
                  <div className="relative z-10 flex flex-col h-full justify-between min-h-[120px]">
                    <div>
                      <h3 className="text-xl font-bold">{style.title}</h3>
                      <p className="text-xs text-white/90 mt-1 font-medium">
                        {style.desc}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center gap-2 px-4 py-2 bg-white text-black w-fit rounded-lg text-sm font-bold shadow-sm group-hover:bg-zinc-100 transition-colors">
                      {style.btnText}
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="absolute bottom-5 right-5 text-white opacity-100">
                    <Icon className="w-16 h-16" />
                  </div>
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* 3. KOLOM KANAN: FORMULIR PESAN */}
        <motion.div variants={itemVariants} className="lg:col-span-5">
          <div className="sticky top-24">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-[2rem] blur-xl opacity-50" />
            <form
              onSubmit={handleSendMessage}
              className="relative p-8 rounded-[2rem] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl space-y-6"
            >
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  {language === "id"
                    ? "Kirim Pesan Cepat"
                    : "Send a Quick Message"}
                </h3>
                <p className="text-sm text-zinc-500">
                  {language === "id"
                    ? "Langsung terhubung ke email saya."
                    : "Connects directly to my email inbox."}
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 pl-1">
                    {language === "id" ? "Nama" : "Name"}
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-zinc-400" />
                    <Input
                      required
                      placeholder="John Doe"
                      className="pl-10 h-11 bg-zinc-50 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 pl-1">
                    Email
                  </label>
                  <div className="relative">
                    <AtSign className="absolute left-3 top-3 w-4 h-4 text-zinc-400" />
                    <Input
                      required
                      type="email"
                      placeholder="john@example.com"
                      className="pl-10 h-11 bg-zinc-50 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 pl-1">
                    {language === "id" ? "Pesan" : "Message"}
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-zinc-400" />
                    <Textarea
                      required
                      placeholder={
                        language === "id"
                          ? "Halo, saya ingin..."
                          : "Hello, I want to..."
                      }
                      className="pl-10 min-h-[140px] bg-zinc-50 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-emerald-500/20 focus:border-emerald-500 resize-none transition-all"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-zinc-200 text-zinc-100 dark:text-zinc-900 font-bold h-12 rounded-xl shadow-lg transition-transform hover:-translate-y-1"
              >
                <Send className="w-4 h-4 mr-2" />
                {language === "id" ? "Kirim Sekarang" : "Send Now"}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

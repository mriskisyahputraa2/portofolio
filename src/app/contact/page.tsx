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

// Tipe untuk nama platform yang valid
type CardPlatform =
  | "Email"
  | "Instagram"
  | "LinkedIn"
  | "GitHub"
  | "TikTok"
  | "Threads";

export default function ContactPage() {
  const { t } = useLanguage();

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

  // --- HANYA MENGEMBALIKAN STYLE BACKGROUND ---
  const getCardBg = (platform: string) => {
    switch (platform) {
      case "Email":
        return "bg-red-600";
      case "Instagram":
        return "bg-gradient-to-bl from-purple-600 via-pink-500 to-orange-400";
      case "LinkedIn":
        return "bg-[#0077b5]";
      case "GitHub":
        return "bg-[#0d1117] dark:bg-[#161b22]";
      case "TikTok":
        return "bg-zinc-800";
      case "Threads":
        return "bg-black";
      default:
        return "bg-emerald-600";
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
          {t.contactPage.title}
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl text-lg leading-relaxed">
          {t.contactPage.description}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* 2. KOLOM KIRI: DIRECT CONTACTS */}
        <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6">
          <div className="space-y-2 mb-6">
            <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-100">
              {t.contactPage.findMeOn}
            </h3>
            <p className="text-sm text-zinc-500">{t.contactPage.findMeOnDesc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* A. KARTU EMAIL */}
            {(() => {
              const cardText = t.contactPage.cards.email;
              return (
                <a
                  href={`mailto:${RESUME_DATA.contact.email}`}
                  className={`group relative p-6 rounded-3xl ${getCardBg(
                    "Email"
                  )} text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl`}
                >
                  <div className="relative z-10 flex flex-col h-full justify-between min-h-[120px]">
                    <div>
                      <h3 className="text-xl font-bold">{cardText.title}</h3>
                      <p className="text-xs text-white/90 mt-1 font-medium">
                        {cardText.desc}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-2 px-4 py-2 bg-white text-black w-fit rounded-lg text-sm font-bold shadow-sm group-hover:bg-zinc-100 transition-colors">
                      {cardText.btnText}
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  <Mail className="absolute bottom-5 right-5 w-16 h-16 text-white opacity-100" />
                </a>
              );
            })()}

            {/* B. KARTU SOSMED LAINNYA */}
            {RESUME_DATA.contact.social.map((social) => {
              const platformKey = social.name.toLowerCase() as keyof typeof t.contactPage.cards;
              const cardText =
                t.contactPage.cards[platformKey] || t.contactPage.cards.default;
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-6 rounded-3xl ${getCardBg(
                    social.name
                  )} text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl`}
                >
                  <div className="relative z-10 flex flex-col h-full justify-between min-h-[120px]">
                    <div>
                      <h3 className="text-xl font-bold">{cardText.title}</h3>
                      <p className="text-xs text-white/90 mt-1 font-medium">
                        {cardText.desc}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-2 px-4 py-2 bg-white text-black w-fit rounded-lg text-sm font-bold shadow-sm group-hover:bg-zinc-100 transition-colors">
                      {cardText.btnText}
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
                  {t.contactPage.formTitle}
                </h3>
                <p className="text-sm text-zinc-500">
                  {t.contactPage.formDescription}
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 pl-1">
                    {t.contactPage.formLabelName}
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-zinc-400" />
                    <Input
                      required
                      placeholder={t.contactPage.formPlaceholderName}
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
                    {t.contactPage.formLabelEmail}
                  </label>
                  <div className="relative">
                    <AtSign className="absolute left-3 top-3 w-4 h-4 text-zinc-400" />
                    <Input
                      required
                      type="email"
                      placeholder={t.contactPage.formPlaceholderEmail}
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
                    {t.contactPage.formLabelMessage}
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-zinc-400" />
                    <Textarea
                      required
                      placeholder={t.contactPage.formPlaceholderMessage}
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
                {t.contactPage.formButton}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

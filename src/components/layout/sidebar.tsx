"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { RESUME_DATA } from "@/data/resume";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  LayoutDashboard,
  FolderGit2,
  UserCircle,
  Trophy,
  LayoutGrid,
  Mail,
  Github,
  Linkedin,
  Instagram,
  BadgeCheck,
  SunMedium,
  MoonStar,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";

export function Sidebar() {
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const NAV_ITEMS = [
    { label: t.sidebar.menu.home, href: "/", icon: LayoutDashboard },
    { label: t.sidebar.menu.about, href: "/about", icon: UserCircle },
    { label: t.sidebar.menu.projects, href: "/projects", icon: FolderGit2 },
    { label: t.sidebar.menu.achievements, href: "/achievements", icon: Trophy },
    { label: t.sidebar.menu.dashboard, href: "/dashboard", icon: LayoutGrid },
    { label: t.sidebar.menu.contact, href: "#contact", icon: Mail },
  ];

  return (
    <aside className="flex flex-col h-full py-4 overflow-y-auto scrollbar-none">
      {/* 1. HEADER PROFIL */}
      <div className="flex flex-col items-center text-center mb-6 w-full px-2">
        {/* Avatar */}
        <div className="relative h-20 w-20 mb-3">
          <div className="absolute inset-[-3px] rounded-full border border-dashed border-emerald-500/40 animate-[spin_10s_linear_infinite] opacity-50"></div>
          {/* Border: Light(zinc-200) | Dark(zinc-950) */}
          <Avatar className="h-full w-full border-2 border-zinc-200 dark:border-zinc-950 shadow-xl">
            <AvatarImage
              src={RESUME_DATA.avatarUrl}
              alt={RESUME_DATA.name}
              className="object-cover"
            />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
          <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-emerald-500 border-2 border-zinc-200 dark:border-zinc-950 z-20"></div>
        </div>

        {/* NAMA LENGKAP (Satu Baris) */}
        <div className="flex items-center justify-center gap-1 w-full">
          {/* Text: Light(zinc-900) | Dark(zinc-100) */}
          <h2 className="text-[16px] font-bold text-zinc-900 dark:text-zinc-100 font-sans tracking-tight whitespace-nowrap">
            {RESUME_DATA.name}
          </h2>
          <BadgeCheck className="w-4 h-4 text-blue-500 fill-blue-500/10 shrink-0" />
        </div>

        {/* TOGGLE LANGUAGE & THEME */}
        <div className="flex items-center gap-2 mt-4">
          {/* Language Toggle */}
          {/* Container: Light(zinc-100 + border-zinc-200) | Dark(zinc-900 + border-zinc-800) */}
          <div className="flex bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-1">
            <button
              onClick={() => setLanguage("en")}
              className={cn(
                "px-2 py-1 text-xs rounded-md transition-all font-bold",
                language === "en"
                  ? // Active: Light(Putih shadow) | Dark(Zinc-800 text Putih)
                    "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-white"
                  : // Inactive: Light(zinc-500) | Dark(zinc-500)
                    "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300"
              )}
            >
              🇺🇸
            </button>
            <button
              onClick={() => setLanguage("id")}
              className={cn(
                "px-2 py-1 text-xs rounded-md transition-all font-bold",
                language === "id"
                  ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-white"
                  : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300"
              )}
            >
              🇮🇩
            </button>
          </div>

          {/* Theme Toggle */}
          {/* Light(bg-zinc-100 border-zinc-200) | Dark(bg-zinc-900 border-zinc-800) */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="h-7 w-7 rounded-lg border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
          >
            {mounted && theme === "light" ? (
              <SunMedium className="h-3.5 w-3.5" />
            ) : (
              <MoonStar className="h-3.5 w-3.5" />
            )}
          </Button>
        </div>

        {/* SOCIAL ICONS (KEMBALI MANUAL + IG) */}
        {/* Border Top: Light(zinc-200) | Dark(zinc-800) */}
        <div className="flex gap-3 mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800/50 w-full justify-center">
          {/* 1. GitHub */}
          <Link
            href={RESUME_DATA.contact.social[0].url}
            target="_blank"
            // Button: Light(zinc-100) | Dark(zinc-900/50)
            className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors bg-zinc-100 dark:bg-zinc-900/50 p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800"
          >
            <Github className="h-4 w-4" />
          </Link>

          {/* 2. LinkedIn */}
          <Link
            href={RESUME_DATA.contact.social[1].url}
            target="_blank"
            className="text-zinc-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors bg-zinc-100 dark:bg-zinc-900/50 p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800"
          >
            <Linkedin className="h-4 w-4" />
          </Link>

          {/* 3. Instagram */}
          <Link
            href={RESUME_DATA.contact.social[2].url}
            target="_blank"
            className="text-zinc-500 hover:text-pink-600 dark:hover:text-pink-500 transition-colors bg-zinc-100 dark:bg-zinc-900/50 p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800"
          >
            <Instagram className="h-4 w-4" />
          </Link>

          {/* 4. Email */}
          <Link
            href={`mailto:${RESUME_DATA.contact.email}`}
            className="text-zinc-500 hover:text-red-600 dark:hover:text-red-400 transition-colors bg-zinc-100 dark:bg-zinc-900/50 p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800"
          >
            <Mail className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* 2. NAVIGASI */}
      <nav className="flex flex-col gap-1 w-full px-3 mt-2">
        <p className="px-2 text-[10px] font-medium text-zinc-500 mb-2 uppercase tracking-wider">
          {t.sidebar.platform}
        </p>
        {NAV_ITEMS.slice(0, 4).map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 group",
                isActive
                  ? // Active: Light(zinc-100 text-900) | Dark(zinc-800 text-100)
                    "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100 border-l-2 border-emerald-500"
                  : // Inactive: Hover effect
                    "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900"
              )}
            >
              <item.icon
                className={cn(
                  "h-4 w-4",
                  isActive
                    ? "text-emerald-500"
                    : "text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-400"
                )}
              />
              {item.label}
            </Link>
          );
        })}

        <p className="px-2 text-[10px] font-medium text-zinc-500 mt-4 mb-2 uppercase tracking-wider">
          Connect & Stats
        </p>
        {NAV_ITEMS.slice(4).map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 group",
                isActive
                  ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100 border-l-2 border-emerald-500"
                  : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900"
              )}
            >
              <item.icon
                className={cn(
                  "h-4 w-4",
                  isActive
                    ? "text-emerald-500"
                    : "text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-400"
                )}
              />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* 3. FOOTER */}
      <div className="mt-6 px-4">
        {/* Garis: Light(zinc-200) | Dark(zinc-800) */}
        <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800/50 mb-4" />
        <p className="text-[10px] text-zinc-600 dark:text-zinc-600 text-center leading-relaxed">
          © 2025 Muhammad Rizki Syahputra.
          <br />
          All rights reserved.
        </p>
      </div>
    </aside>
  );
}

"use client";

import { RESUME_DATA } from "@/data/resume";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  LayoutDashboard,
  FolderGit2,
  UserCircle,
  Trophy,
  LayoutGrid,
  Mail,
  BadgeCheck,
  SunMedium,
  MoonStar,
  MessageCircle,
  ChevronRight,
  Handshake,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useLanguage } from "@/hooks/use-language";

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
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
    { label: t.sidebar.menu.achievements, href: "/achievements", icon: Trophy },
    { label: t.sidebar.menu.projects, href: "/projects", icon: FolderGit2 },
    { label: t.sidebar.menu.dashboard, href: "/dashboard", icon: LayoutGrid },
    { label: t.sidebar.menu.contact, href: "#contact", icon: Mail },
  ];

  return (
    // PERBAIKAN DI SINI: Ubah 'md:hidden' menjadi 'xl:hidden'
    // Agar header ini tetap muncul di iPad (md/lg) dan baru hilang di Desktop besar (xl)
    <div className="xl:hidden fixed top-0 left-0 right-0 w-full z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-all duration-300">
      <div className="flex items-center justify-between px-5 py-4">
        {/* LOGO & NAMA */}
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <Avatar className="h-8 w-8 border border-zinc-200 dark:border-zinc-800">
            <AvatarImage src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
          <span className="font-bold text-zinc-900 dark:text-zinc-100 text-sm tracking-tight">
            {RESUME_DATA.name}
          </span>
        </Link>

        {/* CONTROLS */}
        <div className="flex items-center gap-2">
          {/* Bahasa */}
          <button
            onClick={() => setLanguage(language === "en" ? "id" : "en")}
            className="h-9 w-9 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all active:scale-95"
          >
            <span className="text-sm leading-none font-medium">
              {language === "en" ? "🇺🇸" : "🇮🇩"}
            </span>
          </button>

          {/* Tema */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="h-9 w-9 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all active:scale-95"
          >
            {mounted && theme === "light" ? (
              <SunMedium className="h-5 w-5" />
            ) : (
              <MoonStar className="h-5 w-5" />
            )}
          </button>

          {/* Menu Trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 ml-1 rounded-full"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            {/* SIDEBAR CONTENT */}
            <SheetContent
              side="top"
              className="w-full h-screen bg-white dark:bg-zinc-950 border-none p-0 flex flex-col [&>button]:hidden gap-0"
            >
              <SheetTitle className="sr-only">Menu</SheetTitle>

              {/* PROFILE SECTION */}
              <div className="p-6 pb-6 bg-zinc-50/80 dark:bg-zinc-900/30 border-b border-zinc-200 dark:border-zinc-800 backdrop-blur-sm">
                <div className="flex items-start justify-between mb-6">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-emerald-100 to-transparent dark:from-emerald-900/50 dark:to-transparent opacity-70 blur-sm"></div>
                    <Avatar className="relative h-16 w-16 border-2 border-white dark:border-zinc-950 shadow-md ring-2 ring-emerald-50 dark:ring-emerald-950/30">
                      <AvatarImage
                        src={RESUME_DATA.avatarUrl}
                        className="object-cover"
                      />
                      <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        setLanguage(language === "en" ? "id" : "en")
                      }
                      className="h-10 w-10 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center hover:bg-zinc-50 transition-all shadow-sm"
                    >
                      <span className="text-lg leading-none">
                        {language === "en" ? "🇺🇸" : "🇮🇩"}
                      </span>
                    </button>
                    <button
                      onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                      }
                      className="h-10 w-10 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 transition-all shadow-sm"
                    >
                      {mounted && theme === "light" ? (
                        <SunMedium className="h-5 w-5" />
                      ) : (
                        <MoonStar className="h-5 w-5" />
                      )}
                    </button>
                    <SheetClose asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full h-10 w-10 bg-white dark:bg-zinc-900 text-zinc-500 hover:bg-zinc-100 shadow-sm border border-zinc-200 dark:border-zinc-800"
                      >
                        <X className="h-5 w-5" />
                      </Button>
                    </SheetClose>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                      {RESUME_DATA.name}
                    </h2>
                    <BadgeCheck className="w-6 h-6 text-blue-500 fill-blue-500/10" />
                  </div>
                  <p className="text-base text-zinc-500 dark:text-zinc-400 font-medium">
                    Software Engineer
                  </p>
                </div>
              </div>

              {/* MENU LIST */}
              <nav className="flex-1 overflow-y-auto p-4 flex flex-col gap-2 bg-white dark:bg-zinc-950">
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center justify-between px-5 py-4 rounded-2xl text-[16px] font-medium transition-all duration-300 group border",
                        isActive
                          ? "bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/50 shadow-sm"
                          : "bg-transparent text-zinc-600 dark:text-zinc-400 border-transparent hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-200"
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <item.icon
                          className={cn(
                            "h-5 w-5 transition-colors",
                            isActive
                              ? "text-emerald-600 dark:text-emerald-400"
                              : "text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-300"
                          )}
                        />
                        {item.label}
                      </div>
                      <ChevronRight
                        className={cn(
                          "h-5 w-5 transition-transform group-hover:translate-x-1",
                          isActive ? "text-emerald-400/70" : "text-zinc-300"
                        )}
                      />
                    </Link>
                  );
                })}
              </nav>

              {/* FOOTER */}
              <div className="p-5 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900 mt-auto pb-8">
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-bold text-base shadow-lg shadow-emerald-500/25 active:scale-[0.98] transition-all"
                >
                  <Handshake className="h-5 w-5" />
                  Let&apos;s Connect
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}

"use client";

import { RESUME_DATA } from "@/data/resume";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X, // Icon Close
  LayoutDashboard,
  FolderGit2,
  UserCircle,
  Trophy,
  LayoutGrid,
  Mail,
  BadgeCheck,
  SunMedium,
  MoonStar,
  MessageCircle, // Icon Smart Talk
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
    // HEADER BAR (Sticky di atas)
    // Menggunakan bg-background agar solid, tidak transparan aneh
    <div className="md:hidden flex items-center justify-between p-4 border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
      {/* KIRI: Logo Kecil & Nama */}
      <Link href="/" className="flex items-center gap-2">
        <Avatar className="h-8 w-8 border border-border">
          <AvatarImage src={RESUME_DATA.avatarUrl} />
          <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
        </Avatar>
        <span className="font-bold text-foreground text-sm">
          {RESUME_DATA.name}
        </span>
      </Link>

      {/* KANAN: Hamburger Trigger */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-foreground hover:bg-accent"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>

        {/* MENU CONTENT (Slide-in) */}
        <SheetContent
          side="right" // Muncul dari kanan seperti aplikasi modern/referensi
          // w-full untuk HP, sm:w-[400px] untuk iPad agar tidak terlalu lebar
          className="w-full sm:w-[400px] border-l border-border bg-background p-0 flex flex-col"
        >
          <SheetTitle className="sr-only">Menu</SheetTitle>

          {/* 1. BAGIAN ATAS: Profile & Controls */}
          <div className="px-6 pt-6 pb-4">
            {/* Baris 1: Avatar (Kiri) & Close (Kanan) */}
            <div className="flex items-start justify-between mb-4">
              <Avatar className="h-16 w-16 border-2 border-border shadow-sm">
                <AvatarImage
                  src={RESUME_DATA.avatarUrl}
                  className="object-cover"
                />
                <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
              </Avatar>

              {/* Tombol Close Custom (X) */}
              <SheetClose asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-10 w-10 hover:bg-accent -mr-2"
                >
                  <X className="h-6 w-6 text-foreground" />
                </Button>
              </SheetClose>
            </div>

            {/* Baris 2: Nama & Toggles */}
            <div className="flex items-end justify-between">
              {/* Nama & Role */}
              <div>
                <div className="flex items-center gap-1">
                  <h2 className="text-lg font-bold text-foreground tracking-tight">
                    {RESUME_DATA.name}
                  </h2>
                  <BadgeCheck className="w-5 h-5 text-blue-500 fill-blue-500/10" />
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                  Software Engineer
                </p>
              </div>

              {/* Toggle Bahasa & Tema (Bulat) */}
              <div className="flex gap-2">
                {/* Bahasa */}
                <button
                  onClick={() => setLanguage(language === "en" ? "id" : "en")}
                  className="h-9 w-9 rounded-full bg-muted/50 border border-border flex items-center justify-center hover:bg-accent transition-all shadow-sm"
                  title="Ganti Bahasa"
                >
                  <span className="text-lg leading-none">
                    {language === "en" ? "🇺🇸" : "🇮🇩"}
                  </span>
                </button>

                {/* Tema */}
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="h-9 w-9 rounded-full bg-muted/50 border border-border flex items-center justify-center hover:bg-accent transition-all shadow-sm text-foreground"
                  title="Ganti Tema"
                >
                  {mounted && theme === "light" ? (
                    <SunMedium className="h-4.5 w-4.5" />
                  ) : (
                    <MoonStar className="h-4.5 w-4.5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Garis Pemisah */}
          <div className="h-px w-full bg-border" />

          {/* 2. DAFTAR MENU (Scrollable) */}
          <nav className="flex-1 overflow-y-auto py-4 px-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-medium transition-all group",
                    isActive
                      ? "bg-muted text-foreground font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <item.icon
                      className={cn(
                        "h-5 w-5",
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground group-hover:text-foreground"
                      )}
                    />
                    {item.label}
                  </div>
                  {/* Panah kecil di kanan seperti referensi */}
                  <span className="text-muted-foreground/40 text-lg">→</span>
                </Link>
              );
            })}
          </nav>

          {/* 3. TOMBOL BAWAH (Smart Talk) */}
          <div className="p-4 mt-auto border-t border-border bg-background">
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold text-sm hover:bg-emerald-500/20 active:scale-[0.98] transition-all"
            >
              <MessageCircle className="h-4 w-4" />
              Smart Talk
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

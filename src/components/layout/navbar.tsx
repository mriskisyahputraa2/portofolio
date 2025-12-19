"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { RESUME_DATA } from "@/data/resume";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  FolderGit2,
  UserCircle,
  Moon,
  Sun,
  Menu,
} from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";

export function Navbar() {
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NAV_ITEMS = [
    { label: "Home", href: "/", icon: LayoutDashboard },
    { label: "Projects", href: "/projects", icon: FolderGit2 },
    { label: "About", href: "/about", icon: UserCircle },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 transition-all duration-300">
      <header
        className={cn(
          "flex items-center justify-between transition-all duration-500 ease-in-out",
          // LOGIKA STYLING DINAMIS:
          isScrolled
            ? "w-full max-w-2xl rounded-full border border-zinc-800 bg-zinc-950/80 backdrop-blur-xl shadow-2xl py-2 px-4 md:px-6" // Saat Scroll (Kapsul Kecil)
            : "w-full max-w-7xl bg-transparent border-transparent py-4 px-0" // Saat di Atas (Lebar Penuh)
        )}
      >
        {/* 1. LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <Avatar
            className={cn(
              "border border-zinc-800 transition-all group-hover:scale-110",
              isScrolled ? "h-8 w-8" : "h-9 w-9" // Logo mengecil sedikit saat scroll
            )}
          >
            <AvatarImage src={RESUME_DATA.avatarUrl} alt={RESUME_DATA.name} />
            <AvatarFallback className="bg-zinc-900 text-emerald-500 text-xs font-mono font-bold">
              {RESUME_DATA.initials}
            </AvatarFallback>
          </Avatar>

          {/* Sembunyikan Nama saat mode kapsul agar muat, atau biarkan jika mau */}
          <div
            className={cn(
              "hidden transition-all duration-300",
              isScrolled ? "hidden" : "md:block" // Nama hilang saat jadi kapsul biar rapi
            )}
          >
            <h2 className="text-sm font-bold text-zinc-100">
              {RESUME_DATA.name}
            </h2>
            <p className="text-[10px] text-zinc-500 font-mono">
              Software Engineer
            </p>
          </div>
        </Link>

        {/* 2. MENU TENGAH */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-3 py-1.5 text-sm font-medium transition-all rounded-full hover:text-emerald-400",
                  isActive
                    ? "text-emerald-500 bg-emerald-500/10 shadow-[0_0_10px_-5px_rgba(16,185,129,0.5)]"
                    : "text-zinc-400 hover:bg-zinc-800/50"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* 3. TOMBOL KANAN */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-zinc-400 hover:text-emerald-500"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          {/* Mobile Menu Trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-zinc-400"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[250px] border-zinc-800 bg-zinc-950"
            >
              <div className="flex flex-col gap-4 mt-8">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 text-zinc-400 hover:text-emerald-500 text-lg font-medium"
                  >
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  );
}

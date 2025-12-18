"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { RESUME_DATA } from "@/data/resume";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  LayoutDashboard,
  FolderGit2,
  UserCircle,
  Mail,
  Moon,
  Sun,
} from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();

  // Menu Navigasi
  const NAV_ITEMS = [
    { label: "Home", href: "/", icon: LayoutDashboard },
    { label: "Projects", href: "/projects", icon: FolderGit2 },
    { label: "About", href: "/about", icon: UserCircle },
  ];

  return (
    <aside className="fixed left-0 top-0 z-30 hidden h-screen w-full max-w-[280px] flex-col border-r border-zinc-800 bg-zinc-950/50 backdrop-blur-xl md:flex">
      {/* 1. PROFILE HEADER */}
      <div className="flex flex-col items-center gap-4 p-8 border-b border-zinc-800">
        <Avatar className="h-24 w-24 border-2 border-emerald-500/20 shadow-[0_0_30px_-10px_rgba(16,185,129,0.3)]">
          <AvatarImage src={RESUME_DATA.avatarUrl} alt={RESUME_DATA.name} />
          <AvatarFallback className="bg-zinc-900 text-emerald-500 font-mono text-xl">
            {RESUME_DATA.initials}
          </AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h2 className="text-lg font-bold text-zinc-100 font-sans tracking-tight">
            {RESUME_DATA.name}
          </h2>
          <p className="text-xs text-zinc-500 font-mono mt-1">
            Software Engineer
          </p>
        </div>
      </div>

      {/* 2. NAVIGATION MENU */}
      <ScrollArea className="flex-1 px-4 py-6">
        <nav className="flex flex-col gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-emerald-500/10 text-emerald-500 shadow-[inset_0_0_0_1px_rgba(16,185,129,0.2)]"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
                )}
              >
                <item.icon
                  className={cn("h-4 w-4", isActive && "animate-pulse")}
                />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </ScrollArea>

      {/* 3. FOOTER */}
      <div className="p-6 border-t border-zinc-800 flex flex-col gap-4">
        <Button
          variant="outline"
          className="w-full justify-start gap-2 border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:bg-emerald-500/10 hover:text-emerald-500 hover:border-emerald-500/50 transition-all group"
          asChild
        >
          <Link href={`mailto:${RESUME_DATA.contact.email}`}>
            <Mail className="h-4 w-4 group-hover:text-emerald-500" />
            <span className="text-xs">Contact Me</span>
          </Link>
        </Button>

        <div className="flex items-center justify-between px-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-zinc-400 hover:text-emerald-500"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          <div className="text-xs text-zinc-600 font-mono">v1.0</div>
        </div>
      </div>
    </aside>
  );
}

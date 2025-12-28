"use client";

import { RESUME_DATA } from "@/data/resume";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Menu, LayoutDashboard, FolderGit2, UserCircle } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const NAV_ITEMS = [
    { label: "Home", href: "/", icon: LayoutDashboard },
    { label: "Projects", href: "/projects", icon: FolderGit2 },
    { label: "About", href: "/about", icon: UserCircle },
  ];

  return (
    <div className="md:hidden flex items-center justify-between p-4 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">
      {/* Logo Kecil */}
      <Link href="/" className="flex items-center gap-2">
        <Avatar className="h-8 w-8 border border-zinc-800">
          <AvatarImage src={RESUME_DATA.avatarUrl} />
          <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
        </Avatar>
        <span className="font-bold text-zinc-100 text-sm">
          {RESUME_DATA.name}
        </span>
      </Link>

      {/* Hamburger Menu */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-zinc-400">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-[300px] border-r border-zinc-800 bg-zinc-950 p-0"
        >
          {/* Kita copy logika navigasi sidebar disini untuk mobile */}
          <div className="flex flex-col h-full py-6">
            <div className="px-6 mb-8">
              <h2 className="text-xl font-bold text-zinc-100">
                {RESUME_DATA.name}
              </h2>
              <p className="text-sm text-zinc-500">Software Engineer</p>
            </div>
            <nav className="flex flex-col gap-1 px-4">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all",
                      isActive
                        ? "bg-emerald-500/10 text-emerald-500"
                        : "text-zinc-400 hover:text-zinc-100"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

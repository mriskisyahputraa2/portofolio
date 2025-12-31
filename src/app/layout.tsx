import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/sidebar";
import { MobileHeader } from "@/components/layout/mobile-header";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { LanguageProvider } from "@/hooks/use-language";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Riski | Software Engineer",
  description:
    "Portfolio of a TRKJ Student specialized in Flutter, Next.js, and Cyber Security.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background text-foreground antialiased font-sans selection:bg-emerald-500/30`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {/* CONTAINER UTAMA */}
            <div className="max-w-[1400px] mx-auto min-h-screen px-4 md:px-6 py-4 md:py-8">
              {/* --- PERBAIKAN DI SINI (MOBILE HEADER WRAPPER) --- */}
              {/* Ganti 'md:hidden' jadi 'xl:hidden' agar di iPad (md/lg) header ini tetap muncul */}
              <div className="xl:hidden mb-6 h-12">
                <MobileHeader />
              </div>

              {/* --- PERBAIKAN DI SINI (LAYOUT GRID) --- */}
              {/* Ganti 'md:grid' jadi 'xl:grid'. Di iPad layoutnya akan numpuk (stack) seperti HP */}
              <div className="flex flex-col xl:grid xl:grid-cols-[260px_1fr] lg:gap-12 md:gap-8 relative">
                {/* SIDEBAR (Sticky) */}
                {/* Ganti 'hidden md:block' jadi 'hidden xl:block' agar sidebar HILANG di iPad */}
                <aside className="hidden xl:block h-[calc(100vh-4rem)] sticky top-8 overflow-y-auto pr-2 scrollbar-none">
                  <Sidebar />
                </aside>

                {/* MAIN CONTENT */}
                {/* Ganti 'md:pt-4' jadi 'xl:pt-4' */}
                <main className="flex-1 min-w-0 space-y-12 xl:pt-4">
                  {children}
                </main>
              </div>
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

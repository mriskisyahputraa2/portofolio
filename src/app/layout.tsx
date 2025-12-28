import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/sidebar";
import { MobileHeader } from "@/components/layout/mobile-header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/shared/theme-provider";

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
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-zinc-950 text-zinc-50 antialiased font-sans selection:bg-emerald-500/30`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* CONTAINER UTAMA */}
          {/* max-w-[1400px] agar mirip dashboard yang lebar */}
          <div className="max-w-[1400px] mx-auto min-h-screen px-4 md:px-6 py-4 md:py-8">
            {/* MOBILE HEADER */}
            <div className="md:hidden mb-6 sticky top-4 z-50">
              <MobileHeader />
            </div>

            {/* DESKTOP GRID LAYOUT */}
            {/* Sidebar width fixed 260px (lebih ramping) | Gap besar (gap-12) agar ada jarak napas */}
            <div className="flex flex-col md:grid md:grid-cols-[260px_1fr] lg:gap-12 md:gap-8 relative">
              {/* SIDEBAR (Sticky) */}
              <aside className="hidden md:block h-[calc(100vh-4rem)] sticky top-8 overflow-y-auto pr-2 scrollbar-none">
                <Sidebar />
              </aside>

              {/* MAIN CONTENT */}
              <main className="flex-1 min-w-0 space-y-12 md:pt-4">
                {children}

                <div className="border-t border-zinc-800/50 pt-8 mt-12 pb-8">
                  <Footer />
                </div>
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

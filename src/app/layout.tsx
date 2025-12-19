import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Ganti import Sidebar ke Navbar
import { Navbar } from "@/components/layout/navbar";
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
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-zinc-950 text-zinc-50 antialiased font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col relative">
            <Navbar />

            {/* PERUBAHAN DISINI: max-w-7xl agar konten LEBAR */}
            <main className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-8 pt-24 pb-12">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

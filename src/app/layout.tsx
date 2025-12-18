import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/sidebar";
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
  title: "Riski | Fullstack & Security Enthusiast",
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
          <div className="flex min-h-screen flex-col md:flex-row">
            {/* Sidebar di kiri (Hidden di HP, Muncul di Desktop) */}
            <Sidebar />

            {/* Konten Utama di kanan */}
            <main className="flex-1 md:pl-[280px]">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer"; // Import Footer (Default import)
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
          {/* Wrapper utama menggunakan Flex Column agar Footer selalu di bawah */}
          <div className="flex min-h-screen flex-col relative">
            {/* 1. Navbar (Fixed/Floating) */}
            <Navbar />

            {/* 2. Main Content (Responsive Container) */}
            {/* Padding top (pt-24) disesuaikan agar tidak tertutup Navbar */}
            <main className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-8 pt-24 pb-12">
              {children}
            </main>

            {/* 3. Footer (Global) */}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

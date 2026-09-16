import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Echolance — Modern Web Agency | Digital Experiences That Stand Out",
  description:
    "Echolance is a modern web agency that designs and builds custom digital experiences, high-conversion websites, and Next.js web applications.",
  keywords: [
    "web agency",
    "website design",
    "web development",
    "Next.js agency",
    "UI/UX design",
    "Echolance",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#07080d] text-slate-100 min-h-screen relative`}
      >
        {children}
      </body>
    </html>
  );
}

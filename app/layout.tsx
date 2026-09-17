import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Echolance — Digital Studio | Ideas Into Reality",
  description:
    "Echolance is a premier digital studio crafting modern websites, bespoke brands, and high-impact digital experiences.",
  keywords: [
    "digital studio",
    "web agency",
    "bespoke web design",
    "Next.js agency",
    "creative development",
    "Echolance",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth bg-[#080808]">
      <body
        className={`${instrumentSans.variable} ${instrumentSerif.variable} ${ibmPlexMono.variable} font-sans antialiased bg-[#080808] text-[#F5F2EA] min-h-screen relative selection:bg-[#D8B36A]/30 selection:text-[#F5F2EA]`}
      >
        {children}
      </body>
    </html>
  );
}


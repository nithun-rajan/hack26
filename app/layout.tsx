import type { Metadata } from "next";
import localFont from "next/font/local";
import { SoundProvider } from "@/lib/sound";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Captain from "@/components/Captain";
import Achievements from "@/components/Achievements";
import BootSequence from "@/components/BootSequence";
import KonamiEasterEgg from "@/components/KonamiEasterEgg";
import "./globals.css";

// Geist family — SIL Open Font License, see /public/fonts/OFL.txt
const geistSans = localFont({
  src: "../public/fonts/Geist-Variable.woff2",
  variable: "--font-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "../public/fonts/GeistMono-Variable.woff2",
  variable: "--font-mono",
  weight: "100 900",
  display: "swap",
});

const geistPixel = localFont({
  src: "../public/fonts/GeistPixel-Square.woff2",
  variable: "--font-pixel",
  weight: "500",
  display: "swap",
});

const geistPixelCircle = localFont({
  src: "../public/fonts/GeistPixel-Circle.woff2",
  variable: "--font-pixel-circle",
  weight: "500",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SotonShip 26 · Stop learning AI. Start shipping it.",
  description:
    "An applied-AI hackathon by the University of Southampton AI Society. 16–18 October 2026 · Eagle Labs, Southampton · 200+ builders.",
  keywords: ["hackathon", "AI", "Southampton", "AI Society", "Soton Ship", "machine learning"],
  openGraph: {
    title: "SotonShip 26",
    description: "Stop learning AI. Start shipping it. 16–18 October 2026 · Eagle Labs, Southampton.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${geistPixel.variable} ${geistPixelCircle.variable}`}
    >
      <body className="font-sans antialiased">
        <SoundProvider>
          <Nav />
          {children}
          <Footer />
          <Captain />
          <Achievements />
          <KonamiEasterEgg />
          <BootSequence />
        </SoundProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Newsreader, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import Reveal from "./components/Reveal";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});
const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-geist",
  display: "swap",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sagir.org"),
  title: {
    default: "SAGIR — One-lead, AI-driven transformation consulting",
    template: "%s · SAGIR",
  },
  description:
    "A single accountable consultant, augmented by AI tooling and a vetted specialist network, owns your programme from strategy to adoption.",
  openGraph: {
    title: "SAGIR — One-lead, AI-driven transformation consulting",
    description:
      "Strategy through adoption, owned by one accountable lead. Working software in weeks, not quarterly status decks.",
    url: "https://sagir.org",
    siteName: "SAGIR",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${newsreader.variable} ${geist.variable} ${geistMono.variable}`}>
      <body>
        <ScrollProgress />
        <Header />
        <div id="top" />
        {children}
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}

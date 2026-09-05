import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  metadataBase: new URL("https://sagir.org"),
  title: {
    default: "SAGIR Consulting",
    template: "%s — SAGIR Consulting",
  },
  description:
    "One‑lead, AI‑driven consulting for faster, focused outcomes. Strategy, design, implementation, adoption, and change management — end to end.",
  keywords: [
    "AI consulting",
    "Fintech transformation",
    "One‑lead consulting",
    "Hamilton consulting",
    "SAGIR",
    "digital transformation",
  ],
  openGraph: {
    type: "website",
    url: "https://sagir.org",
    title: "SAGIR Consulting",
    description:
      "One‑lead, AI‑driven consulting for faster, focused outcomes.",
    siteName: "SAGIR Consulting",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SAGIR Consulting — One‑Lead AI‑Driven Model",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SAGIR Consulting",
    description:
      "One‑lead, AI‑driven consulting for faster, focused outcomes.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[var(--bg-dark)] text-[var(--fg-light)]">
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

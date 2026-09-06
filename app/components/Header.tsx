"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/approach", label: "Approach" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/insights", label: "Insights" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const path = usePathname();
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(246,244,239,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--rule)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: "0 var(--gutter)",
          minHeight: "var(--header-h)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--ink-text)" }}>
          <span style={{ width: 14, height: 14, background: "var(--teal)", display: "block" }} />
          <span style={{ fontSize: 19, fontWeight: 600, letterSpacing: "0.14em" }}>SAGIR</span>
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: 28, flexWrap: "wrap" }}>
          {NAV.map((n) => {
            const active = path === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                className="hv-nav"
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: active ? "var(--ink-text)" : "var(--muted)",
                  padding: "4px 0",
                  borderBottom: `1px solid ${active ? "var(--teal)" : "transparent"}`,
                }}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hv-cta"
          style={{
            background: "var(--ink-text)",
            color: "var(--ivory)",
            fontSize: 13,
            fontWeight: 500,
            padding: "11px 18px",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            whiteSpace: "nowrap",
          }}
        >
          Book a discovery call
          <span style={{ fontFamily: "var(--font-geist-mono), monospace" }}>&#8594;</span>
        </Link>
      </div>
    </header>
  );
}

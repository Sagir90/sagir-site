import Link from "next/link";
import { Sparkles, Cpu, Users } from "lucide-react";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/approach", label: "Approach" },
  { href: "/team", label: "Team" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-[#050808]/90 backdrop-blur border-b border-[var(--teal)]/30">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[var(--teal)] to-[var(--green)] flex items-center justify-center">
            <Cpu className="h-5 w-5 text-black" />
          </div>
          <span className="text-2xl font-semibold tracking-tight text-[var(--fg-light)]">
            SAGIR
          </span>
          <Sparkles className="h-4 w-4 text-[var(--green)] opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-[var(--fg-light)]/80 hover:text-[var(--fg-light)] transition-colors group"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-[var(--teal)] to-[var(--green)] group-hover:w-full transition-all" />
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2 text-xs text-[var(--fg-light)]/70">
          <Users className="h-4 w-4 text-[var(--teal)]" />
          <span>One‑lead · AI‑driven</span>
        </div>
      </div>
    </header>
  );
}

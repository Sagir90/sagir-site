import Card from "../components/Card";
import Section from "../components/Section";
import { Link as LinkIcon } from "lucide-react";

export default function Sitemap() {
  const routes = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/approach", label: "Approach" },
    { href: "/team", label: "Team" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-bold text-[var(--teal)]">Sitemap</h1>
      <p className="mt-4 text-[var(--fg-light)]/70 max-w-3xl">
        A simple overview of all public pages on the SAGIR Consulting website.
      </p>

      <Section>
        <div className="grid md:grid-cols-2 gap-10">
          {routes.map((r, i) => (
            <Card key={i} className="animate-[fadeInUp_0.4s_ease_forwards]">
              <div className="flex items-center gap-3">
                <LinkIcon className="h-5 w-5 text-[var(--green)]" />
                <a
                  href={r.href}
                  className="text-xl font-semibold text-[var(--fg-light)] hover:text-[var(--green)] transition-colors"
                >
                  {r.label}
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Section>

    </div>
  );
}

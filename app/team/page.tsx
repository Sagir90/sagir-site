import Card from "../components/Card";
import Section from "../components/Section";
import IconTitle from "../components/IconTitle";
import { User, Network, Sparkles } from "lucide-react";

export default function Team() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-bold text-[var(--teal)]">Our Team</h1>
      <p className="mt-4 text-[var(--fg-light)]/70 max-w-3xl">
        Every engagement is led by a single consultant. Behind them is a network of partners with
        deep expertise in cloud, data, product, and change management.
      </p>

      <Section>
        <div className="grid md:grid-cols-[2fr,1fr] gap-10">

          {/* Principal Consultant */}
          <Card className="animate-[fadeInUp_0.4s_ease_forwards]">
            <IconTitle icon={User} title="Raghava Sagi — Principal Consultant" />
            <p className="text-[var(--fg-light)]/75 mt-3">
              Fintech/IT transformation leader specializing in lean, AI‑enabled consulting models.
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs text-[var(--fg-light)]/60">
              <Sparkles className="h-4 w-4 text-[var(--teal)]" />
              <span>One‑lead model · Direct accountability · AI‑accelerated delivery.</span>
            </div>
          </Card>

          {/* Partner Network */}
          <Card className="animate-[fadeInUp_0.4s_ease_forwards]">
            <IconTitle icon={Network} title="Partners" />
            <ul className="mt-4 space-y-2 text-[var(--fg-light)]/75 text-sm">
              <li>Cloud Architect — Supports cloud migration and architecture design.</li>
              <li>Data Engineer — Helps with analytics, pipelines, and data modeling.</li>
              <li>Product/UX Specialist — Improves user experience and workflows.</li>
              <li>Change Management Lead — Drives adoption and stakeholder engagement.</li>
            </ul>
          </Card>

        </div>
      </Section>

    </div>
  );
}

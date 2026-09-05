import Card from "../../components/Card";
import Section from "../../components/Section";
import IconTitle from "../../components/IconTitle";
import { ShieldCheck, Cpu, Rocket } from "lucide-react";

export default function Approach() {
  const sections = [
    {
      icon: ShieldCheck,
      title: "Single Point of Accountability",
      text: "You always know who is responsible for outcomes—no diffusion of ownership.",
    },
    {
      icon: Cpu,
      title: "AI as a Force Multiplier",
      text: "We use AI for analysis, design, documentation, and iteration.",
    },
    {
      icon: Rocket,
      title: "MVP First",
      text: "We prioritize getting a working solution in front of users quickly.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-[var(--teal)]">Our Approach</h1>
      <p className="mt-4 text-[var(--fg-light)]/70 max-w-3xl">
        Our model is built around a single accountable consultant, augmented by AI tools,
        supported by specialist partners only when needed.
      </p>

      <Section>
        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((s, i) => (
            <Card key={i} className="animate-[fadeInUp_0.4s_ease_forwards]">
              <IconTitle icon={s.icon} title={s.title} />
              <p className="text-[var(--fg-light)]/75">{s.text}</p>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}

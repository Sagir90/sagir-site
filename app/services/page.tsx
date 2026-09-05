import Card from "../components/Card";
import Section from "../components/Section";
import IconTitle from "../components/IconTitle";
import { Compass, Layers, Rocket, Users } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Compass,
      title: "Strategy & Advisory",
      text: "Clarify the problem, define outcomes, and design a pragmatic roadmap.",
    },
    {
      icon: Layers,
      title: "Design & Architecture",
      text: "Translate strategy into solution designs that can be implemented quickly and iteratively.",
    },
    {
      icon: Rocket,
      title: "Implementation & Delivery",
      text: "Build, configure, and deploy solutions using agile, iterative delivery.",
    },
    {
      icon: Users,
      title: "Adoption & Change Management",
      text: "Ensure people actually use what’s built—and that it sticks.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-[var(--teal)]">Services</h1>
      <p className="mt-4 text-[var(--fg-light)]/70 max-w-3xl">
        We cover the full lifecycle—from strategy to adoption—led by a single accountable consultant,
        supported by AI tools and specialist partners when needed.
      </p>

      <Section>
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((s, i) => (
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

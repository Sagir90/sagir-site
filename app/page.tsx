"use client";

import { Sparkles, Rocket, Cpu, Workflow, ArrowRight } from "lucide-react";
import Card from "./components/Card";
import Section from "./components/Section";
import CTAButton from "./components/CTAButton";
import IconTitle from "./components/IconTitle";

export default function Home() {
  const values = [
    {
      icon: Cpu,
      title: "End‑to‑End Ownership",
      text: "One consultant leads strategy, design, implementation, and change management.",
    },
    {
      icon: Workflow,
      title: "AI‑Accelerated Delivery",
      text: "AI tools compress analysis, documentation, and iteration cycles.",
    },
    {
      icon: Rocket,
      title: "MVP in Weeks",
      text: "Deliver a working MVP quickly, then refine based on real feedback.",
    },
    {
      icon: Sparkles,
      title: "Transparent & Agile",
      text: "Short sprints, clear outcomes, and continuous alignment.",
    },
  ];

  const lifecycle = ["Discovery", "MVP Design", "Implementation", "Adoption", "Iteration"];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      {/* HERO */}
      <section className="text-center py-28 rounded-3xl bg-gradient-to-b from-[var(--teal)] to-[var(--green)] text-black shadow-xl">
        <h1 className="text-5xl font-bold leading-tight">
          One‑Lead, AI‑Driven Consulting for Faster, Focused Outcomes
        </h1>

        <p className="mt-6 text-xl max-w-3xl mx-auto opacity-90">
          A single accountable consultant, augmented by AI tools, delivering strategy, design,
          implementation, adoption, and change management—end to end.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <CTAButton href="/contact" variant="secondary">
            Book a Discovery Call <ArrowRight className="h-5 w-5" />
          </CTAButton>

          <CTAButton href="/case-studies" variant="primary">
            View Case Studies
          </CTAButton>
        </div>
      </section>

      {/* HERO ILLUSTRATION */}
      <section className="mt-20 text-center">
        <div className="mx-auto max-w-4xl p-12 rounded-2xl gradient-border bg-[var(--card)] shadow-xl">
          <p className="text-[var(--fg-light)]/70 italic">
            (Hero illustration placeholder — replace with your future graphic)
          </p>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <Section title="Why the One‑Lead + AI Model Works" center>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {values.map((v, i) => (
            <Card key={i} className="animate-[fadeInUp_0.4s_ease_forwards]">
              <IconTitle icon={v.icon} title={v.title} />
              <p className="text-[var(--fg-light)]/75">{v.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ENGAGEMENT LIFECYCLE */}
      <Section title="How We Deliver Transformation" center>
        <div className="grid md:grid-cols-5 gap-10 text-center">
          {lifecycle.map((step, i) => (
            <Card key={i} className="animate-[fadeInUp_0.4s_ease_forwards]">
              <h3 className="text-xl font-semibold text-[var(--green)]">{step}</h3>
            </Card>
          ))}
        </div>
      </Section>

    </div>
  );
}

import Card from "../../components/Card";
import Section from "../../components/Section";
import Hero from "../../components/Hero";
import Grid from "../../components/Grid";
import IconTitle from "../../components/IconTitle";
import { Lightbulb, BookOpen, Cpu } from "lucide-react";

export default function Insights() {
  const posts = [
    {
      icon: Lightbulb,
      title: "AI‑Driven Consulting: What Changes?",
      summary:
        "How AI accelerates strategy, design, documentation, and delivery cycles.",
    },
    {
      icon: BookOpen,
      title: "The One‑Lead Model Explained",
      summary:
        "Why single accountability outperforms multi‑team consulting structures.",
    },
    {
      icon: Cpu,
      title: "Building MVPs Faster With AI",
      summary:
        "A practical breakdown of how AI reduces iteration time and improves clarity.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      <Hero
        title="Insights & Perspectives"
        subtitle="Practical thinking on AI‑enabled consulting, transformation, and delivery."
      />

      <Section title="Latest Insights" center>
        <Grid cols="md:grid-cols-3">
          {posts.map((p, i) => (
            <Card key={i} className="animate-[fadeInUp_0.4s_ease_forwards]">
              <IconTitle icon={p.icon} title={p.title} />
              <p className="text-[var(--fg-light)]/75 mt-3">{p.summary}</p>
            </Card>
          ))}
        </Grid>
      </Section>

    </div>
  );
}

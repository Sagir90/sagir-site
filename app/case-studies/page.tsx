import Card from "../../components/Card";
import Section from "../../components/Section";
import IconTitle from "../../components/IconTitle";
import { FileText, CheckCircle } from "lucide-react";

export default function CaseStudies() {
  const cases = [
    {
      title: "Accelerating Digital Onboarding",
      summary:
        "Reduced onboarding time from 6 weeks to 10 days using a one‑lead + AI‑assisted delivery model.",
      outcomes: [
        "MVP delivered in 3 weeks",
        "AI‑generated documentation",
        "Single consultant led strategy → design → implementation",
      ],
    },
    {
      title: "Streamlining Operations for a Fintech",
      summary:
        "Unified fragmented workflows across 4 departments into a single streamlined process.",
      outcomes: [
        "40% reduction in manual steps",
        "Improved adoption through targeted change management",
        "Iterative delivery with weekly demos",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-[var(--teal)]">Case Studies</h1>
      <p className="mt-4 text-[var(--fg-light)]/70 max-w-3xl">
        Real examples of how the one‑lead + AI model delivers faster, clearer outcomes.
      </p>

      <Section>
        <div className="grid gap-10">
          {cases.map((c, i) => (
            <Card key={i} className="animate-[fadeInUp_0.4s_ease_forwards]">
              <IconTitle icon={FileText} title={c.title} />
              <p className="mt-2 text-[var(--fg-light)]/75">{c.summary}</p>

              <ul className="mt-6 space-y-2">
                {c.outcomes.map((o, j) => (
                  <li key={j} className="flex items-center gap-2 text-[var(--fg-light)]/80">
                    <CheckCircle className="h-4 w-4 text-[var(--teal)]" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}

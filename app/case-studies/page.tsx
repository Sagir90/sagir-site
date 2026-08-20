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
      <h1 className="text-4xl font-bold text-[#0E8A8A]">Case Studies</h1>
      <p className="mt-4 text-gray-600 max-w-3xl">
        Real examples of how the one‑lead + AI model delivers faster, clearer outcomes.
      </p>

      <div className="mt-16 grid gap-10">
        {cases.map((c, i) => (
          <div key={i} className="p-8 bg-white rounded-xl shadow border border-gray-100">
            <h2 className="text-2xl font-semibold">{c.title}</h2>
            <p className="mt-3 text-gray-600">{c.summary}</p>

            <ul className="mt-6 list-disc ml-6 text-gray-700 space-y-2">
              {c.outcomes.map((o, j) => (
                <li key={j}>{o}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

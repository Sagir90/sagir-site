export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      {/* Hero Section */}
      <section className="text-center py-24 bg-gradient-to-b from-[#0E8A8A] to-[#0E7C7C] text-white rounded-3xl shadow-lg">
        <h1 className="text-5xl font-bold">
          One‑Lead, AI‑Driven Consulting for Faster, Focused Outcomes
        </h1>
        <p className="mt-6 text-xl max-w-3xl mx-auto opacity-90">
          A single accountable consultant, augmented by AI tools, delivering strategy, design,
          implementation, adoption, and change management—end to end.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <a
            href="/contact"
            className="px-8 py-4 bg-[#F7B267] text-gray-900 rounded-xl text-lg font-semibold shadow-md hover:bg-[#f8a84f]"
          >
            Book a Discovery Call
          </a>
          <a
            href="/case-studies"
            className="px-8 py-4 bg-white text-[#0E8A8A] rounded-xl text-lg font-semibold shadow-md hover:bg-gray-100"
          >
            View Case Studies
          </a>
        </div>
      </section>

      {/* Hero Illustration Placeholder */}
      <section className="mt-16 text-center">
        <div className="mx-auto max-w-4xl p-12 bg-white rounded-2xl shadow border border-gray-100">
          <p className="text-gray-600 italic">
            (Hero illustration placeholder — replace with your future graphic)
          </p>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="mt-24">
        <h2 className="text-4xl font-bold text-gray-900 text-center">
          Why the One‑Lead + AI Model Works
        </h2>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="p-8 bg-white rounded-xl shadow border border-gray-100">
            <h3 className="text-xl font-semibold text-[#0E8A8A]">End‑to‑End Ownership</h3>
            <p className="mt-3 text-gray-600">
              One consultant leads strategy, design, implementation, and change management.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow border border-gray-100">
            <h3 className="text-xl font-semibold text-[#4FB7E8]">AI‑Accelerated Delivery</h3>
            <p className="mt-3 text-gray-600">
              AI tools compress analysis, documentation, and iteration cycles.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow border border-gray-100">
            <h3 className="text-xl font-semibold text-[#F7B267]">MVP in Weeks</h3>
            <p className="mt-3 text-gray-600">
              Deliver a working MVP quickly, then refine based on real feedback.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow border border-gray-100">
            <h3 className="text-xl font-semibold text-[#8FD19E]">Transparent & Agile</h3>
            <p className="mt-3 text-gray-600">
              Short sprints, clear outcomes, and continuous alignment.
            </p>
          </div>
        </div>
      </section>

      {/* Engagement Lifecycle */}
      <section className="mt-32">
        <h2 className="text-4xl font-bold text-gray-900 text-center">
          How We Deliver Transformation
        </h2>

        <div className="mt-16 grid md:grid-cols-5 gap-10 text-center">
          {[
            "Discovery",
            "MVP Design",
            "Implementation",
            "Adoption",
            "Iteration",
          ].map((step, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow border border-gray-100">
              <h3 className="text-xl font-semibold text-[#0E8A8A]">{step}</h3>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

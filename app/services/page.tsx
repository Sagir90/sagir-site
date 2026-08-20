export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-[#0E8A8A]">Services</h1>
      <p className="mt-4 text-gray-600 max-w-3xl">
        We cover the full lifecycle—from strategy to adoption—led by a single accountable consultant,
        supported by AI tools and specialist partners when needed.
      </p>

      <div className="mt-16 space-y-12">
        <section>
          <h2 className="text-2xl font-semibold">Strategy & Advisory</h2>
          <p className="mt-3 text-gray-600">
            Clarify the problem, define outcomes, and design a pragmatic roadmap.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Design & Architecture</h2>
          <p className="mt-3 text-gray-600">
            Translate strategy into solution designs that can be implemented quickly and iteratively.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Implementation & Delivery</h2>
          <p className="mt-3 text-gray-600">
            Build, configure, and deploy solutions using agile, iterative delivery.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Adoption & Change Management</h2>
          <p className="mt-3 text-gray-600">
            Ensure people actually use what’s built—and that it sticks.
          </p>
        </section>
      </div>
    </div>
  );
}

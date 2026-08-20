export default function Team() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-[#0E8A8A]">Our Team</h1>
      <p className="mt-4 text-gray-600 max-w-3xl">
        Every engagement is led by a single consultant. Behind them is a network of partners with
        deep expertise in cloud, data, product, and change management.
      </p>

      <div className="mt-16 space-y-12">
        <section>
          <h2 className="text-2xl font-semibold">Raghava Sagi — Principal Consultant</h2>
          <p className="mt-3 text-gray-600">
            Fintech/IT transformation leader specializing in lean, AI‑enabled consulting models.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Partners</h2>
          <ul className="mt-4 list-disc ml-6 text-gray-600 space-y-2">
            <li>Cloud Architect — Supports cloud migration and architecture design.</li>
            <li>Data Engineer — Helps with analytics, pipelines, and data modeling.</li>
            <li>Product/UX Specialist — Improves user experience and workflows.</li>
            <li>Change Management Lead — Drives adoption and stakeholder engagement.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

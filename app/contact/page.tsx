export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-[#0E8A8A]">Contact Us</h1>
      <p className="mt-4 text-gray-600 max-w-3xl">
        Start with a 30‑minute discovery call. Share your context, challenges, and goals.
      </p>

      <form className="mt-12 grid gap-6 max-w-xl">
        <input className="border p-3 rounded" placeholder="Name" />
        <input className="border p-3 rounded" placeholder="Email" />
        <input className="border p-3 rounded" placeholder="Organization" />
        <textarea className="border p-3 rounded" placeholder="What are you trying to achieve?" rows={5} />

        <button className="px-6 py-3 bg-[#0E8A8A] text-white rounded-lg font-medium">
          Request Discovery Call
        </button>
      </form>
    </div>
  );
}

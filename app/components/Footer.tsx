export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-lg font-semibold">SAGIR Consulting</p>
        <p className="mt-2">One‑lead, AI‑driven consulting for faster, focused outcomes.</p>
        <p className="mt-4 text-sm">© {new Date().getFullYear()} SAGIR. All rights reserved.</p>
      </div>
    </footer>
  );
}

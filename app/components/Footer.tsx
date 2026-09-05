import { Cpu, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050808] text-[var(--fg-light)]/80 py-10 mt-20 border-t border-[var(--teal)]/30">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
        <div className="flex justify-center items-center gap-3">
          <Cpu className="h-5 w-5 text-[var(--teal)]" />
          <p className="text-lg font-semibold">SAGIR Consulting</p>
        </div>
        <p>One‑lead, AI‑driven consulting for faster, focused outcomes.</p>
        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--teal)] to-[var(--green)] text-black text-sm font-medium card-hover">
          Explore the model
          <ArrowRight className="h-4 w-4" />
        </button>
        <p className="mt-4 text-xs text-[var(--fg-light)]/60">
          © {new Date().getFullYear()} SAGIR. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#0E8A8A]">
          SAGIR
        </Link>

        <nav className="space-x-6 text-gray-700 font-medium">
          <Link href="/services">Services</Link>
          <Link href="/approach">Approach</Link>
          <Link href="/team">Team</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

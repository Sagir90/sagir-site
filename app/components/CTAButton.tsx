import { ReactNode } from "react";

export default function CTAButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-[var(--teal)] to-[var(--green)] text-black"
      : "bg-black text-[var(--green)] hover:bg-[#111]";

  return (
    <a
      href={href}
      className={`px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition-all inline-flex items-center gap-2 ${styles}`}
    >
      {children}
    </a>
  );
}

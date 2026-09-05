import { ReactNode } from "react";

export default function Hero({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="text-center py-28 rounded-3xl bg-gradient-to-b from-[var(--teal)] to-[var(--green)] text-black shadow-xl">
      <h1 className="text-5xl font-bold leading-tight">{title}</h1>

      {subtitle && (
        <p className="mt-6 text-xl max-w-3xl mx-auto opacity-90">{subtitle}</p>
      )}

      {children && <div className="mt-10">{children}</div>}
    </section>
  );
}

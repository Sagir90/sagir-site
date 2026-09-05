import { ReactNode } from "react";

export default function Section({
  title,
  children,
  center = false,
}: {
  title?: string;
  children: ReactNode;
  center?: boolean;
}) {
  return (
    <section className="mt-24">
      {title && (
        <h2
          className={`text-4xl font-bold text-[var(--fg-light)] ${
            center ? "text-center" : ""
          }`}
        >
          {title}
        </h2>
      )}
      <div className="mt-16">{children}</div>
    </section>
  );
}

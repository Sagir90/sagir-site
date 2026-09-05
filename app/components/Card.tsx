import { ReactNode } from "react";

export default function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`gradient-border rounded-xl p-6 bg-[var(--card)] card-hover ${className}`}>
      {children}
    </div>
  );
}

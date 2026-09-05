import { ReactNode } from "react";

export default function Grid({
  children,
  cols = "md:grid-cols-3",
}: {
  children: ReactNode;
  cols?: string;
}) {
  return <div className={`grid gap-10 ${cols}`}>{children}</div>;
}

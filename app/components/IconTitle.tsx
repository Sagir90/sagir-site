import { LucideIcon } from "lucide-react";

export default function IconTitle({
  icon: Icon,
  title,
}: {
  icon: LucideIcon;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <Icon className="h-6 w-6 text-[var(--green)]" />
      <h3 className="text-xl font-semibold text-[var(--fg-light)]">{title}</h3>
    </div>
  );
}

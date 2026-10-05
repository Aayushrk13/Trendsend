import Link from "next/link";
import { type LucideIcon } from "lucide-react";

type SidebarItemProps = {
  name: string;
  href: string;
  icon: LucideIcon;
  active?: boolean;
};
export default function SidebarItem({
  name,
  href,
  icon: Icon,
  active = false,
}: SidebarItemProps) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 ${
        active
          ? "bg-sidebar-accent font-medium text-sidebar-accent-foreground"
          : "text-muted-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
      }`}
    >
      <Icon className="h-4.5 w-4.5 shrink-0" strokeWidth={1.5} />
      <span>{name}</span>
    </Link>
  );
}

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
      className={[
        "group relative flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar",
        active
          ? "bg-sidebar-accent font-medium text-sidebar-accent-foreground before:absolute before:inset-y-2 before:left-0 before:w-0.5 before:rounded-full before:bg-primary"
          : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground",
      ].join(" ")}
    >
      <Icon
        className={[
          "h-[18px] w-[18px] shrink-0 transition-colors",
          active ? "text-sidebar-foreground" : "text-muted-foreground group-hover:text-sidebar-foreground",
        ].join(" ")}
        strokeWidth={1.8}
      />
      <span className="truncate">{name}</span>
    </Link>
  );
}

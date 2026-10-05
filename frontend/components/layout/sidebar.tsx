"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import WorkspaceSwitcher from "./workspace";
import ThemeToggle from "./themetoggle";
import {
  LayoutGrid,
  Inbox,
  PenLine,
  Calendar,
  BarChart3,
  UserRound,
  Image as ImageIcon,
  Users,
  Settings,
  HelpCircle,
  MoreHorizontal,
  type LucideIcon,
} from "lucide-react";
import SidebarItem from "./sidebaritem";
import { isSupportedFormMethod } from "next/dist/client/form-shared";

type NavItem = {
  name: string;
  href: string;
  icon: LucideIcon;
};

const navItems: NavItem[] = [
  { name: "Dashboard", href: "/", icon: LayoutGrid },
  { name: "Inbox", href: "/inbox", icon: Inbox },
  { name: "Posts", href: "/posts", icon: PenLine },
  { name: "Content Calendar", href: "/calendar", icon: Calendar },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Social Accounts", href: "/accounts", icon: UserRound },
  { name: "Media Library", href: "/media", icon: ImageIcon },
  { name: "Team", href: "/team", icon: Users },
  { name: "Settings", href: "/settings", icon: Settings },
];

const helpItem: NavItem = {
  name: "Help & resources",
  href: "/help",
  icon: HelpCircle,
};

type SidebarItemProps = NavItem & { active?: boolean };

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  return (
    <aside className="sticky top-0 flex h-screen w-56 shrink-0 flex-col border-r border-sidebar-border bg-sidebar">
      {/* Brand */}
      <div className="flex items-center gap-2 px-4 py-4">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <BarChart3 className="h-4 w-4" strokeWidth={2} />
        </div>
        <span className="text-lg font-semibold tracking-tight text-sidebar-foreground">
          My App
        </span>
        <div className="ml-auto shrink-0">
          <ThemeToggle />
        </div>
      </div>

      <p className="px-4 pb-2 pt-3 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
        Workspace
      </p>
      <nav className="flex flex-col gap-0.5 px-2">
        {navItems.map((item) => (
          <SidebarItem key={item.href} {...item} active={isActive(item.href)} />
        ))}
      </nav>

      {/* Help */}
      <div className="mt-auto px-2 pb-3">
        <SidebarItem {...helpItem} active={pathname === helpItem.href} />
      </div>

      <WorkspaceSwitcher name="Business workspace" />
    </aside>
  );
}

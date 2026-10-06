"use client";

import { auth } from "@/auth";
import { usePathname } from "next/navigation";
import WorkspaceSwitcher from "./workspace";
import ThemeToggle from "./themetoggle";
import {
  BarChart3,
  Calendar,
  HelpCircle,
  Image as ImageIcon,
  Inbox,
  LayoutGrid,
  PenLine,
  Settings,
  UserRound,
  Users,
  type LucideIcon,
} from "lucide-react";
import SidebarItem from "./sidebaritem";

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

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const logout = async () => {
    const session = await auth();
  };
  return (
    <aside className="fixed inset-y-0 left-0 z-30 flex h-dvh w-64 flex-col border-r border-sidebar-border bg-sidebar">
      <div className="flex items-center gap-3 border-b border-sidebar-border px-5 py-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
          <BarChart3 className="h-4 w-4" strokeWidth={2} />
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-[15px] font-semibold tracking-tight text-sidebar-foreground">
            Trendsend
          </p>
          <p className="text-xs text-muted-foreground">Social insights</p>
        </div>

        <div className="shrink-0">
          <ThemeToggle />
        </div>
      </div>

      <div className="px-3 py-5">
        <div className="mb-6">
          <p className="mb-2 px-2 text-[11px] font-medium text-muted-foreground">
            Workspace
          </p>
          <WorkspaceSwitcher
            name="Business workspace"
            subtitle="Primary workspace"
          />
        </div>

        <p className="px-2 pb-2 text-[11px] font-medium text-muted-foreground">
          Navigation
        </p>
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <SidebarItem
              key={item.href}
              {...item}
              active={isActive(item.href)}
            />
          ))}
        </nav>
      </div>

      <div className="mt-auto px-3 pb-4">
        <div className="border-t border-sidebar-border pt-4">
          <SidebarItem {...helpItem} active={pathname === helpItem.href} />
        </div>
      </div>
    </aside>
  );
}

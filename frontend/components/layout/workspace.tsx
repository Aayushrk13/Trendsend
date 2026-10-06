"use client";

import Signout from "@/components/SignoutButton";
type WorkspaceSwitcherProps = {
  name?: string;
  subtitle?: string;
};

export default function WorkspaceSwitcher({
  name = "My Workspace",
  subtitle = "Business workspace",
}: WorkspaceSwitcherProps) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-sidebar-border bg-sidebar-accent/50 px-3 py-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-background text-sm font-semibold text-sidebar-foreground ring-1 ring-sidebar-border">
        {name.charAt(0).toUpperCase()}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-sidebar-foreground">
          {name}
        </p>
        <p className="mt-0.5 truncate text-xs text-muted-foreground">
          {subtitle}
        </p>
      </div>
      <Signout />
    </div>
  );
}

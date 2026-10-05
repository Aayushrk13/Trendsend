"use client";

import { MoreHorizontal } from "lucide-react";

type WorkspaceSwitcherProps = {
  name?: string;
  subtitle?: string;
  onOptionsClick?: () => void;
};

export default function WorkspaceSwitcher({
  name = "My Workspace",
  subtitle = "Business workspace",
  onOptionsClick,
}: WorkspaceSwitcherProps) {
  return (
    <div className="flex items-center gap-3 border-t border-sidebar-border px-4 py-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground">
        {name.charAt(0).toUpperCase()}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[13px] font-semibold text-sidebar-foreground">
          {name}
        </p>
        <p className="truncate text-[11px] text-muted-foreground">{subtitle}</p>
      </div>
      <button
        type="button"
        onClick={onOptionsClick}
        aria-label="Workspace options"
        className="rounded p-1 text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
      >
        <MoreHorizontal className="h-4 w-4" />
      </button>
    </div>
  );
}

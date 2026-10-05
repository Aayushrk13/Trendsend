"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle light and dark mode"
      className="self-end rounded p-1 text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
    >
      {/* CSS shows the right icon, so there is no hydration mismatch */}
      <Moon className="h-4 w-4 -in[.dark]:hidden" />
      <Sun className="hidden h-4 w-4 -in[.dark]:block" />
    </button>
  );
}

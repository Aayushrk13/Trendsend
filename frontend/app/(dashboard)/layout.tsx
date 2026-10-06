"use client";

import { useState } from "react";
import Sidebar from "@/components/layout/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [active, setActive] = useState("Dashboard");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-dvh">
      <Sidebar />
      <div className="ml-64 min-h-dvh min-w-0">
        <button className="p-4 lg:hidden" onClick={() => setMenuOpen(true)}>
          Menu
        </button>
        {children}
      </div>
    </div>
  );
}

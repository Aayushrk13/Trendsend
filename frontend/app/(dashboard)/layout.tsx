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
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <button className="p-4 lg:hidden" onClick={() => setMenuOpen(true)}>
          Menu
        </button>
        {children}
      </div>
    </div>
  );
}

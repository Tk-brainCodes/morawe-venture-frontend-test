"use client";

import React, { ReactNode, useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function MainDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  //close nav menu
  const handleCloseNav = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className='flex flex-col h-screen'>
      <Header
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <div className='flex flex-1 overflow-hidden '>
        <Sidebar handleCloseNav={handleCloseNav} isOpen={isSidebarOpen} />
        <div
          className={`transition-all duration-300 flex-1 bg-muted w-full h-full overflow-y-auto overflow-x-hidden p-4`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

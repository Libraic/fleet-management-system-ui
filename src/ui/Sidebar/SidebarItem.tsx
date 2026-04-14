import React from "react";
import type { SidebarItemProps } from "./Sidebar.types.ts";

export const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active, onClick, collapsed }) => {
  return (
    <div
      onClick={onClick}
      className={`
        flex items-center p-2 rounded-lg cursor-pointer transition
        text-[0.8rem]
        ${collapsed ? "justify-center" : "gap-3"}
        ${active ? "bg-gray-200" : "hover:bg-gray-100"}
      `}
    >
      {icon}
      <span
        className={`
          whitespace-nowrap
          transition-all duration-200
          ${collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100 w-auto"}
        `}
      >
        {label}
      </span>
    </div>
  );
};

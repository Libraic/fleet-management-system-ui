import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import React from "react";
import { BLANK_STRING } from "../../shared/constants/constants.ts";
import type { SidebarExpanderProps } from "./Sidebar.types.ts";

export const SidebarExpander: React.FC<SidebarExpanderProps> = ({ isCollapsed, setIsCollapsed }) => {
  return (
    <div className={`flex items-center mb-4 ${isCollapsed ? "justify-center" : "justify-between"}`}>
      {!isCollapsed && <p className="text-[0.9rem] font-medium">Agrostoc</p>}
      <button
        onClick={() => setIsCollapsed((prev) => !prev)}
        className="
            flex items-center justify-center
            p-3 rounded-lg
            hover:bg-gray-200 transition
          "
      >
        <MenuOpenIcon
          fontSize="small"
          className={`transition-transform ${isCollapsed ? "rotate-180" : BLANK_STRING}`}
        />
      </button>
    </div>
  );
};
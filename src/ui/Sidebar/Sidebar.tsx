import { useLocation, useNavigate } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DirectionsCarOutlinedIcon from "@mui/icons-material/DirectionsCarOutlined";
import { HOME, VEHICLES_REGISTRATION } from "../../routes/paths";
import { SidebarItem } from "./SidebarItem.tsx";
import { useState } from "react";
import { SidebarExpander } from "./SidebarExpander.tsx";

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside
      className={`
        bg-[#f7f7f8] border-r border-gray-200 p-4 flex flex-col gap-3
        transition-all duration-300
        ${collapsed ? "w-20" : "w-64"}
      `}
    >
      <SidebarExpander isCollapsed={collapsed} setIsCollapsed={setCollapsed} />

      <SidebarItem
        icon={<HomeOutlinedIcon fontSize="small" />}
        label="Acasă"
        active={isActive(HOME)}
        collapsed={collapsed}
        onClick={() => navigate(HOME)}
      />

      <SidebarItem
        icon={<DirectionsCarOutlinedIcon fontSize="small" />}
        label="Înregistrare Vehicule"
        active={isActive(VEHICLES_REGISTRATION)}
        collapsed={collapsed}
        onClick={() => navigate(VEHICLES_REGISTRATION)}
      />
    </aside>
  );
};

import React from "react";
import type { DashboardCardProps } from "./DashboardCard.types.ts";

export const DashboardCard: React.FC<DashboardCardProps> = ({ icon, label, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="
        flex flex-col items-center justify-center
        p-8 rounded-2xl border
        border-gray-300
        bg-white
        text-black
        hover:border-emerald-400
        hover:bg-emerald-400
        hover:text-white
        transition
        cursor-pointer
      "
    >
      {icon}
      <span className="mt-2 text-md font-medium">{label}</span>
    </div>
  );
};
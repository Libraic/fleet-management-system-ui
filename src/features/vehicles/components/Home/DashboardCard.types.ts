import React from "react";

export interface DashboardCardProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

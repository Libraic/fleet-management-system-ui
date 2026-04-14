import { Outlet } from "react-router-dom";
import { Sidebar } from "../ui/Sidebar/Sidebar.tsx";

export const AppLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 flex justify-center items-start">
        <Outlet />
      </main>
    </div>
  );
};

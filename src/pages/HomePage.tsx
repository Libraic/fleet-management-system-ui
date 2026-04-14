import DirectionsCarOutlinedIcon from "@mui/icons-material/DirectionsCarOutlined";
import { DashboardCard } from "../features/vehicles/components/Home/DashboardCard.tsx";
import { useNavigate } from "react-router-dom";
import { VEHICLES_REGISTRATION } from "../routes/paths.ts";

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <DashboardCard
        icon={<DirectionsCarOutlinedIcon fontSize="large" />}
        label="Înregistrare Vehicul"
        onClick={() => navigate(VEHICLES_REGISTRATION)}
      />
    </div>
  );
};
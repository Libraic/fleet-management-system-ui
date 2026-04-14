import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage.tsx";
import { VehicleRegistrationPage } from "../pages/VehicleRegistrationPage.tsx";
import { HOME, VEHICLES_REGISTRATION } from "./paths.ts";
import { AppLayout } from "../layouts/AppLayout.tsx";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={HOME} element={<HomePage />} />
        <Route path={VEHICLES_REGISTRATION} element={<VehicleRegistrationPage />} />
      </Route>
    </Routes>
  );
};

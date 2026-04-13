import { VehicleRegistrationPage } from "./pages/VehicleRegistrationPage.tsx";
import { ToastProvider } from "./ui/Toast/ToastProvider.tsx";

export const App = () => {
  return (
    <ToastProvider>
      <VehicleRegistrationPage />
    </ToastProvider>
  );
};
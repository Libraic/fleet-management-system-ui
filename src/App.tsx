import { ToastProvider } from "./ui/Toast/ToastProvider.tsx";
import { AppRoutes } from "./routes/AppRoutes.tsx";

export const App = () => {
  return (
    <ToastProvider>
      <AppRoutes />
    </ToastProvider>
  );
};
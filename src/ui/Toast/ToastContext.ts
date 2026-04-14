import { createContext } from "react";
import type { ToastContextType } from "./toast.types.ts";

export const ToastContext = createContext<ToastContextType | undefined>(undefined);
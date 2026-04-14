import type { Toast } from "./toast.types.ts";
import React, { useState } from "react";
import { ToastContext } from "./ToastContext.ts";

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (message: string) => {
    const id = Date.now();

    setToasts((prev) => [...prev, { id, message }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed top-5 right-5 flex flex-col gap-2 z-50">
        {toasts.map((toast) => (
          <div key={toast.id} className="bg-black text-white px-4 py-2 rounded shadow">
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

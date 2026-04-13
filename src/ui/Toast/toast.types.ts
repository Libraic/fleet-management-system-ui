export interface Toast {
  id: number;
  message: string;
}

export interface ToastContextType {
  showToast: (message: string) => void;
}
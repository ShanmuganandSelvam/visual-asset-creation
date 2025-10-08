// Simplified version of the use-toast.ts file
import { useState } from "react";

const TOAST_LIMIT = 3;
const TOAST_REMOVE_DELAY = 1000000;

type ToastProps = {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  variant?: "default" | "destructive";
};

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_VALUE;
  return count.toString();
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  function toast(props: Omit<ToastProps, "id">) {
    const id = genId();
    const newToast = { id, ...props };
    setToasts((prevToasts) => [...prevToasts, newToast].slice(-TOAST_LIMIT));
    return id;
  }

  function dismiss(toastId?: string) {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== toastId));
  }

  return {
    toast,
    dismiss,
    toasts,
  };
}

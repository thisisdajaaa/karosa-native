import React, { FC, useCallback, useMemo, useRef, useState } from "react";
import type { IToastContext, ToastProps, ToastProviderProps } from "../types";
import Toast from "../Toast";
import ToastContext from "./ToastContext";

const defaultContext: Partial<IToastContext> = {
  defaults: {
    position: "top",
    type: "error",
    autoHideDuration: 5000,
    transitionDuration: { enter: 250, exit: 100 },
    height: 60,
    topOffset: 40,
    bottomOffset: 40,
  },
};

const ToastProvider: FC<ToastProviderProps> = ({
  defaults,
  customToasts,
  children,
  ...rest
}) => {
  const toasts = useRef<ToastProps[]>([]);
  const [activeToast, setActiveToast] = useState<ToastProps | null>(null);

  const showToast = useCallback((toast) => {
    toasts.current.shift();
    toasts.current.unshift(toast);
    setActiveToast(toast);
  }, []);

  const queueToast = useCallback((toast) => {
    toasts.current.push(toast);
    if (toasts.current.length === 1) {
      setActiveToast(toast);
    }
  }, []);

  const hideToast = useCallback(() => {
    toasts.current.shift();
    setActiveToast(toasts.current?.[0] ?? null);
  }, []);

  const clearToastQueue = useCallback(() => {
    toasts.current.length = 0;
    setActiveToast(null);
  }, []);

  const value = useMemo(
    () => ({
      ...defaultContext,
      toasts: toasts.current,
      activeToast,
      showToast,
      queueToast,
      hideToast,
      clearToastQueue,
      defaults: {
        ...defaultContext.defaults,
        ...defaults,
      } as IToastContext["defaults"],
      customToasts,
    }),
    [
      activeToast,
      clearToastQueue,
      customToasts,
      defaults,
      hideToast,
      queueToast,
      showToast,
    ]
  );

  return (
    <ToastContext.Provider value={value} {...rest}>
      {children}
      {activeToast && <Toast />}
    </ToastContext.Provider>
  );
};

export default ToastProvider;

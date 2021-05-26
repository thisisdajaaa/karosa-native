import { useContext } from "react";
import ToastContext from "@app/molecules/Toast/context/ToastContext";
import { IToastContext } from "@app/molecules/Toast/types";

const useToastContext = (): IToastContext => {
  const context = useContext<IToastContext>(ToastContext);

  if (context === undefined) {
    throw new Error("useToastContext must be used within a ToastProvider");
  }
  return context;
};

export default useToastContext;

import { AxiosError } from "axios";
import type { ToastProps } from "@app/molecules/Toast/types";

export const errorHandlers = (showToast: (toast: ToastProps) => void) => {
  const sessionTimeoutHandler = () => (error: AxiosError) => {
    if (error.response) {
      if (error.response.status === 401) {
        showToast({
          message: "Invalid Account or Password.",
          autoHideDuration: 3000,
          type: "error",
        });
      }
    }

    return Promise.reject(error);
  };

  const systemErrorHandler = () => (error: AxiosError) => {
    if (error.response) {
      if (
        error.response.status !== 401 &&
        error.response.status !== 403 &&
        error.response.status !== 408 &&
        error.response.status !== 503
      ) {
        showToast({
          message: "A system error has occured.",
          autoHideDuration: 3000,
          type: "error",
        });
      }
    }

    return Promise.reject(error);
  };

  const timeoutHandler = () => (error: AxiosError) => {
    if (error.response) {
      if (error.response.status === 408) {
        showToast({
          message: "A network error has occured.",
          autoHideDuration: 3000,
          type: "error",
        });
      }

      if (error.code === "ECONNABORTED") {
        showToast({
          message: "A network error has occured.",
          autoHideDuration: 3000,
          type: "error",
        });
      }
    }

    return Promise.reject(error);
  };

  const networkErrorHandler = () => (error: AxiosError) => {
    if (error.response === undefined && error.code !== "ECONNABORTED") {
      showToast({
        message: "A network error has occured.",
        autoHideDuration: 3000,
        type: "error",
      });
    }

    return Promise.reject(error);
  };

  return {
    sessionTimeoutHandler,
    systemErrorHandler,
    timeoutHandler,
    networkErrorHandler,
  };
};

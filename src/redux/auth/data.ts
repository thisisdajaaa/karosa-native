import { ENUM } from "@app/constants";

import { AuthState } from "./models";

export const initAuthState: AuthState = {
  authEntryContext: {
    isOpen: false,
    isBack: false,
    oauth: ENUM.OAuth.None,
  },
  loginResponse: {
    response: {
      isLoggedIn: false,
    },
    isLoading: false,
  },
  forgotResponse: {
    response: {
      message: "",
    },
    isLoading: false,
  },
  registerResponse: {
    response: {
      isLoggedIn: false,
    },
    isLoading: false,
  },
};

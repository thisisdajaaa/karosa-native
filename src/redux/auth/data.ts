import { Gender } from "../api-models/login";

import { AuthState } from "./models";

export const initAuthState: AuthState = {
  loginResponse: {
    response: {
      id: "",
      email: "",
      fullName: "",
      phoneNo: "",
      username: "",
      gender: Gender.Other,
      avatar: {},
    },
    isLoading: false,
  },
  forgotResponse: {
    response: {
      message: "",
    },
    isLoading: false,
  },
};

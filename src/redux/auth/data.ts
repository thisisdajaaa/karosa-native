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
  myAddressResponse: {
    response: [
      {
        id: "",
        phoneNo: "",
        detailed_address: "",
        isDefaultAddress: false,
        barangayId: 0,
        userId: 0,
      },
    ],
    isLoading: false,
  },
  newAddressResponse: {
    response: {
      id: "",
      name: "",
      phoneNo: "",
      detailed_address: "",
      isDefaultAddress: "",
      barangayId: 0,
      userId: 0,
    },
    isLoading: false,
  },
};

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
        type: "",
        name: "",
        phoneNo: "",
        postalCode: "",
        address_line_1: "",
        address_line_2: "",
        barangayId: 0,
        userId: "",
      },
    ],
    isLoading: false,
  },
  newAddressResponse: {
    response: {
      id: "",
      type: "",
      name: "",
      phoneNo: "",
      postalCode: "",
      address_line_1: "",
      address_line_2: "",
      barangayId: 0,
      userId: "",
    },
    isLoading: false,
  },
};

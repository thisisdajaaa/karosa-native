import { RES_GENDER } from "@app/constants";

import { AuthState } from "./models";

export const initAuthState: AuthState = {
  loginResponse: {
    response: {
      id: "",
      email: "",
      fullName: "",
      phoneNo: "",
      username: "",
      gender: RES_GENDER.Other,
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

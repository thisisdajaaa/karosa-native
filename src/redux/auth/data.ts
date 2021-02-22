import { ENUM } from "@app/constants";

import { AuthState } from "./models";

export const initAuthState: AuthState = {
  authEntryContext: {
    isOpen: false,
    isBack: false,
  },
  loginResponse: {
    response: {
      id: "",
      email: "",
      fullName: "",
      phoneNo: "",
      username: "",
      gender: ENUM.RES_GENDER.Other,
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
  registerResponse: {
    response: {
      username: "",
      email: "",
    },
    isLoading: false,
  },
};

import { AuthState } from "./models";

export const initAuthState: AuthState = {
  authEntryContext: {
    isOpen: false,
    isBack: false,
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
  myAddressResponse: {
    response: [
      {
        id: "",
        name: "",
        phoneNumber: "",
        detailedAddress: "",
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
      isLoggedIn: false,
    },
    isLoading: false,
  },
};

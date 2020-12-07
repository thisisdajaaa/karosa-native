import { LocationState } from "./models";

export const initLocationState: LocationState = {
  regionResponse: {
    response: [
      {
        id: 0,
        name: "",
      },
    ],
    isLoading: false,
  },
  provinceResponse: {
    response: [
      {
        id: 0,
        name: "",
        regionId: 0,
      },
    ],
    isLoading: false,
  },
  barangayResponse: {
    response: [
      {
        id: 0,
        name: "",
        provinceId: 0,
      },
    ],
    isLoading: false,
  },
};

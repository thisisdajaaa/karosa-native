import {
  NewAddressForm,
  AddressState,
  UserCoordinates,
  GeocoderResponse,
} from "./models";

export const initNewAddress: NewAddressForm = {
  label: "",
  contactName: "",
  contactNumber: "0",
  addressDetails: "",
  noteRider: "",
  hasLatLng: false,
  coords: {
    latitude: 0,
    longitude: 0,
    location: "",
  },
};

export const initGeocoderResponse: GeocoderResponse = {
  plus_code: {
    compound_code: "",
    global_code: "",
  },
  results: [],
  status: "",
};

export const initUserCoordinates: UserCoordinates = {
  latitude: 0,
  longitude: 0,
};

export const initAddressState: AddressState = {
  addressEntryContext: {
    newAddressForm: {
      label: "",
      contactName: "",
      contactNumber: "",
      addressDetails: "",
      noteRider: "",
      hasLatLng: false,
      coords: {
        latitude: 0,
        longitude: 0,
        location: "",
      },
    },
    userCoordinates: { ...initUserCoordinates },
    userAddressList: [],
  },
  geocoderResponse: {
    isLoading: false,
    response: {
      ...initGeocoderResponse,
    },
  },
};

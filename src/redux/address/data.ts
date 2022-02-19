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
  coords: {
    latitude: 0,
    longitude: 0,
    location: "",
  },
};

export const initAddressList: NewAddressForm[] = [
  {
    label: "Work",
    contactName: "Daja",
    contactNumber: "890008",
    addressDetails: "Test address 10101",
    noteRider: "To be noted",
    coords: {
      latitude: 0,
      longitude: 0,
      location: "",
    },
  },
  {
    label: "Home",
    contactName: "Test User",
    contactNumber: "8900011",
    addressDetails: "Test address 10101",
    noteRider: "To be noted",
    coords: {
      latitude: 0,
      longitude: 0,
      location: "",
    },
  },
];

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
  location: "",
};

export const initAddressState: AddressState = {
  addressEntryContext: {
    newAddressForm: {
      label: "",
      contactName: "",
      contactNumber: "",
      addressDetails: "",
      noteRider: "",
      coords: { ...initUserCoordinates },
    },
    userCoordinates: { ...initUserCoordinates },
    addressList: initAddressList,
  },
  geocoderResponse: {
    isLoading: false,
    response: {
      ...initGeocoderResponse,
    },
  },
};

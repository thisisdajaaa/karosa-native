import { NewAddressForm, AddressState, UserLocation } from "./models";

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

export const initUserLocation: UserLocation = {
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
      coords: {
        latitude: 0,
        longitude: 0,
        location: "",
      },
    },
    userLocation: {
      latitude: 0,
      longitude: 0,
    },
    addressList: initAddressList,
  },
};

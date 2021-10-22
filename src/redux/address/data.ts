import { NewAddressForm, AddressState, UserLocation } from "./models";

export const initNewAddress: NewAddressForm = {
  label: "",
  contactName: "",
  contactNumber: 0,
  addressDetails: "",
  noteRider: "",
  coords: {
    latitude: 0,
    longitude: 0,
  },
};

export const initDummyAddress: NewAddressForm[] = [
  {
    label: "Work",
    contactName: "Argie Berou",
    contactNumber: 890008,
    addressDetails: "Test address 10101",
    noteRider: "To be noted",
    coords: {
      latitude: 0,
      longitude: 0,
    },
  },
  {
    label: "Home",
    contactName: "Test User",
    contactNumber: 8900011,
    addressDetails: "Test address 10101",
    noteRider: "To be noted",
    coords: {
      latitude: 0,
      longitude: 0,
    },
  },
];

export const initUserLocation: UserLocation = {
  latitude: 0,
  longitude: 0,
};

export const initUserLocation: UserLocation = {
  latitude: 0,
  longitude: 0,
};

export const initAddressState: AddressState = {
  addressEntryContext: {
    newAddressForm: {
      label: "",
      contactName: "",
      contactNumber: 0,
      addressDetails: "",
      noteRider: "",
      coords: {
        latitude: 0,
        longitude: 0,
      },
    },
    userLocation: {
      latitude: 0,
      longitude: 0,
    },
    addressList: initDummyAddress,
  },
};

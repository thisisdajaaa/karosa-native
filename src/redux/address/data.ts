import { NewAddressForm, AddressState, UserLocation } from "./models";

export const initNewAddress: NewAddressForm = {
  label: "",
  contactName: "",
  contactNumber: 0,
  addressDetails: "",
  noteRider: "",
};

export const initUserLocation: UserLocation = {
  latitude: 0,
  longitude: 0,
};

export const initAddressState: AddressState = {
  addressEntryContext: {
    newAddressForm: initNewAddress,
    userLocation: initUserLocation,
  },
};

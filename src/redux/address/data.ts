import { NewAddressForm, AddressState } from "./models";

export const initNewAddress: NewAddressForm = {
  label: "",
  contactName: "",
  contactNumber: 0,
  addressDetails: "",
  noteRider: "",
};

export const initAddressState: AddressState = {
  addressEntryContext: {
    newAddressForm: {
      label: "",
      contactName: "",
      contactNumber: 0,
      addressDetails: "",
      noteRider: "",
    },
  },
};

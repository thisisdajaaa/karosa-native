export type NewAddressForm = {
  label: string;
  contactName: string;
  contactNumber: number;
  addressDetails: string;
  noteRider: string;
};

export type AddressEntryContext = {
  newAddressForm: NewAddressForm;
};

export type AddressState = {
  addressEntryContext: AddressEntryContext;
};

declare module "../types" {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface StateAll {
    address: AddressState;
  }
}

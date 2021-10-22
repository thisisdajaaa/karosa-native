export type NewAddressForm = {
  label: string;
  contactName: string;
  contactNumber: number;
  addressDetails: string;
  noteRider: string;
  coords: UserCoordinates;
};

export type UserCoordinates = {
  latitude: number;
  longitude: number;
};

export type UserLocation = {
  latitude: number;
  longitude: number;
};

export type AddressEntryContext = {
  newAddressForm: NewAddressForm;
  userLocation: UserLocation;
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

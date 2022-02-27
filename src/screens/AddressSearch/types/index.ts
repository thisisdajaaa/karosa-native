/**
 *
 * @format
 *
 */

export type AddressLocation = {
  id?: string | number[];
  latitude: number;
  longitude: number;
  location: string;
};

export type AddressMainParams = {
  AddressLocation: AddressLocation;
};

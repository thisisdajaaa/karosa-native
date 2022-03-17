/**
 *
 * @format
 *
 */

export type AddressLocation = {
  id?: string | number[];
  mode?: "User" | "Shop";
  latitude: number;
  longitude: number;
  location: string;
};

export type AddressMainParams = {
  AddressLocation: AddressLocation;
};

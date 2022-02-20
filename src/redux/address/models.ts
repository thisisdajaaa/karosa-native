import { ResponseState } from "@app/redux/api-models/common";
import * as geocoder from "@app/redux/api-models/geocoder";

export type GeocoderRequest = geocoder.Request;
export type GeocoderResponse = geocoder.Response;

export type UserCoordinates = {
  latitude: number;
  longitude: number;
};

export type NewAddressForm = {
  id?: string | number[];
  label: string;
  hasLatLng: boolean;
  contactName: string;
  contactNumber: string;
  addressDetails: string;
  noteRider: string;
  coords: UserCoordinates & {
    location: string;
  };
};

export type AddressEntryContext = {
  newAddressForm: NewAddressForm;
  userCoordinates: UserCoordinates;
  userAddressList: NewAddressForm[];
};

export type AddressState = {
  addressEntryContext: AddressEntryContext;
  geocoderResponse: ResponseState<GeocoderResponse>;
};

declare module "../types" {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface StateAll {
    address: AddressState;
  }
}

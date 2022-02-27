/**
 *
 * @format
 *
 */

import { GeocoderRequest } from "@app/redux/address/models";
import { AddressLocation } from "@app/screens/AddressSearch/types";

export type PropsType = {
  routeParams: Readonly<AddressLocation>;
  formattedAddress: string;
  handleGeocoder: (values: GeocoderRequest) => void;
  handleSaveAddress: (address: AddressLocation) => void;
  handleBack: () => void;
};

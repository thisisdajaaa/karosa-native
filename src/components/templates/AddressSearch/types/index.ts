/**
 *
 * @format
 *
 */

import { GeocoderRequest } from "@app/redux/address/models";
import { AddressLocation } from "@app/screens/AddressSearch/types";

export type PropsType = {
  routeParams: Readonly<AddressLocation>;
  handleGeocoder: (values: GeocoderRequest) => void;
  formattedAddress: string;
};

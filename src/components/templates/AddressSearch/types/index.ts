/**
 *
 * @format
 *
 */

import { GeocoderRequest, UserCoordinates } from "@app/redux/address/models";

export type PropsType = {
  routeParams: Readonly<UserCoordinates>;
  handleGeocoder: (values: GeocoderRequest) => void;
  formattedAddress: string;
};

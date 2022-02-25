/**
 *
 * @format
 *
 */

import { NewAddressForm } from "@app/redux/address/models";

export type PropsType = {
  addressList: NewAddressForm[];
  handleBack: () => void;
  handleNewAddress: () => void;
  handleEditAddress: (address: NewAddressForm) => void;
};

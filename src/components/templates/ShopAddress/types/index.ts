/**
 *
 * @format
 *
 */

import { ShopAddressNavigation } from "@app/screens/ShopAddress/types";

export type PropsType = {
  navigation: ShopAddressNavigation;
  name: string;
  isDefaultAddress: boolean;
  detailedAddress: string;
  phoneNo: string;
};

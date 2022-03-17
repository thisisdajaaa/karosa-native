/**
 *
 * @format
 *
 */

import { RefObject } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import { ShopSettingsNavigation } from "@app/screens/ShopSettings/types";
import { NewAddressForm } from "@app/redux/address/models";

type ShopSettingRefs = {
  shopStatusRef: RefObject<RBSheet>;
  shopDeleteRef: RefObject<RBSheet>;
};

type ShopFieldsData = {
  statusColor: string;
  statusValue: string;
  hasAddress: boolean;
  addressDetails: NewAddressForm;
};

export type PropsType = {
  shopSettingRefs: ShopSettingRefs;
  shopFieldsData: ShopFieldsData;
  navigation: ShopSettingsNavigation;
  submitForm(): void;
  handleNewAddress: () => void;
};

/**
 *
 * @format
 *
 */

import { RefObject } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import { ShopSettingsNavigation } from "@app/screens/ShopSettings/types";

export type PropsType = {
  shopStatusRef: RefObject<RBSheet>;
  shopDeleteRef: RefObject<RBSheet>;
  navigation: ShopSettingsNavigation;
  statusColor: string;
  statusValue: string;
  submitForm(): void;
};

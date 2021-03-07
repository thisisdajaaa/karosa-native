/**
 *
 * @format
 *
 */

import { RefObject } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import { ShopMainNavigation } from "@app/screens/ShopSettings/types";

export type PropsType = {
  shopStatusRef: RefObject<RBSheet>;
  shopDeleteRef: RefObject<RBSheet>;
  statusColor: string;
  statusValue: string;
  navigation: ShopMainNavigation;
};

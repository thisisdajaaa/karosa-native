/**
 *
 * @format
 *
 */

import { ShopMainNavigation } from "@app/screens/ShopMain/types";

export type PropsType = {
  shopName: string;
  address: string;
  isActive: boolean;
  refreshing: boolean;
  onRefresh(): void;
  navigation: ShopMainNavigation;
};

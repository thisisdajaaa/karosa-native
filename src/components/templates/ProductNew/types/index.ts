/**
 *
 * @format
 *
 */

import {
  ProductNewNavigation,
  ProductNewSheetRefs,
} from "@app/screens/ProductNew/types";

type Information = {
  availability: string;
  variation: string;
  shipping: string;
  showShippingPrice: boolean;
  category: string;
};

export type PropsType = {
  navigation: ProductNewNavigation;
  sheetRefs: ProductNewSheetRefs;
  statusColor: string;
  statusValue: string;
  information: Information;
};

/**
 *
 * @format
 *
 */

import { WishlistProd } from "@app/redux/api-models/wishlist";
// import RBSheet from "react-native-raw-bottom-sheet";
export type PropsType = {
  // products: Products[];
  filteredData: any;
  // showAll(): void;
  // showAvailable(): void;
  products: WishlistProd[];
  // pickerDisable: PickerDisable;
  // onBack(): void;
  // sheetRef: React.RefObject<RBSheet>;
};

export type HeaderProps = {
  products: WishlistProd[];
  statusRef?: any;
  categoriesRef?: any;
  filterProd?: any;
  setFilterProd?: any;
};

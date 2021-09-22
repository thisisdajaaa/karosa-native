/**
 *
 * @format
 *
 */

import { StyleProp, TextStyle } from "react-native";
import AccountSettingsIcons from "./account-settings";
import BottomNavigationIcons from "./bottom-navigation";
import CommonIcons from "./common";
import HomeIcons from "./home";
import LoginIcons from "./login";
import ProductsIcons from "./products";
import WishlistIcons from "./wishlist";

const Icons: {
  [key: string]: (
    name: string,
    extraStyle: StyleProp<TextStyle>,
    width: number,
    height: number
  ) => JSX.Element;
} = {
  accountSettings: AccountSettingsIcons,
  bottomNavigation: BottomNavigationIcons,
  common: CommonIcons,
  home: HomeIcons,
  login: LoginIcons,
  products: ProductsIcons,
  wishlist: WishlistIcons,
};

export default Icons;

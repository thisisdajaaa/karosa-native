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
import BasketIcons from "./basket";
import CheckoutIcons from "./checkout";
import WishlistIcons from "./wishlist";
import ShopIcons from "./shop";

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
  basket: BasketIcons,
  checkout: CheckoutIcons,
  wishlist: WishlistIcons,
  shop: ShopIcons,
};

export default Icons;

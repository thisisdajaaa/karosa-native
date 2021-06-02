/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const ShopAddressStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.light5,
  },
  txtHeader: {
    ...theme.textBold,
    fontWeight: "700",
  },
  txtEdit: {
    ...theme.textRegular,
    color: theme.colors.primary,
    fontWeight: "400",
  },
});

export default ShopAddressStyles;

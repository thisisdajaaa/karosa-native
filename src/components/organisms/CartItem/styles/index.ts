/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const CartItemStyles = StyleSheet.create({
  itemSection: {
    backgroundColor: "white",
    flexDirection: "row",
    paddingBottom: 8,
    alignItems: "center",
  },
  checkBox: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  productImage: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  priceTxt: {
    flexDirection: "row",
    marginBottom: 8,
  },
  currentPricetxt: {
    ...theme.textBold,
    color: "#31A14C",
  },
  text: {
    ...theme.textRegular,
    fontWeight: "400",
    marginLeft: 8,
  },
  container: {
    backgroundColor: theme.colors.transparent,
    borderWidth: 0,
    margin: 0,
    padding: 0,
  },
});

export default CartItemStyles;

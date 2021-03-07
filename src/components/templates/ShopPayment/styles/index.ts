/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const ShopPaymentStyles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    bottom: "2%",
    alignSelf: "center",
    width: "90%",
  },
  txtHeader: {
    ...theme.textBold,
    fontWeight: "700",
  },
});

export default ShopPaymentStyles;

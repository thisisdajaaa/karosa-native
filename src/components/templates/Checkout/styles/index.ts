/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const CheckoutStyles = StyleSheet.create({
  txtHeader: {
    ...theme.textBold,
    fontWeight: "700",
  },
  container: {
    flex: 1,
    position: "relative",
  },
});

export default CheckoutStyles;

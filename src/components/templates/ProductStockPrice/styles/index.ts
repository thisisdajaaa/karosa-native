/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const ProductStockPriceStyles = StyleSheet.create({
  txtHeader: {
    ...theme.textBold,
    fontWeight: "700",
  },
  buttonContainer: {
    position: "absolute",
    bottom: "2%",
    width: "90%",
    alignSelf: "center",
  },
});

export default ProductStockPriceStyles;

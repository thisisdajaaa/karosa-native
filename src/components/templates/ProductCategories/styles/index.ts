/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const ProductCategoriesStyles = StyleSheet.create({
  contentContainer: {
    marginTop: 12,
  },
  columnWrapper: {
    justifyContent: "space-evenly",
    marginVertical: 7,
  },
  txtHeader: {
    ...theme.textBold,
    fontWeight: "700",
  },
  spacer: {
    marginTop: 22,
    marginBottom: 22,
  },
});

export default ProductCategoriesStyles;

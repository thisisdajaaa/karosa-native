/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const ProductNewStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txtHeader: {
    ...theme.textBold,
    fontWeight: "700",
  },
  txtSave: {
    ...theme.textRegular,
    color: theme.colors.dark10,
    fontWeight: "400",
  },
  spacer: {
    marginTop: "20%",
    marginBottom: "20%",
  },
  separator: {
    marginVertical: 5,
  },
});

export default ProductNewStyles;

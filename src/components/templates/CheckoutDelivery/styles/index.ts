/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { SPACING, theme } from "@app/styles";

const ProductStatusStyles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    height: 27,
  },
  txtProductStatus: {
    ...theme.textBold,
    marginVertical: SPACING.md,
    textAlign: "center",
    fontWeight: "500",
  },
  txtLabel: { ...theme.textRegular, fontWeight: "400" },
  spacer: {
    marginTop: SPACING.md,
  },
});

export const StatusItemStyle = (bgColor: string) => {
  return StyleSheet.create({
    circle: {
      borderRadius: 50,
      backgroundColor: bgColor,
      height: 16,
      width: 16,
      marginTop: SPACING.xss - 1,
      marginRight: SPACING.lg,
    },
  });
};

export default ProductStatusStyles;

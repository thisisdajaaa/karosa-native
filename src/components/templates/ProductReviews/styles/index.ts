/**
 *
 * @format
 *
 */

import { theme } from "@app/styles";
import { StyleSheet } from "react-native";

const ProductReviewsStyles = StyleSheet.create({
  txtHeader: {
    ...theme.textBold,
    fontWeight: "700",
  },
});

export const FilterChipStyles = (selected: boolean) =>
  StyleSheet.create({
    container: {
      borderColor: selected ? theme.colors.primary : theme.colors.dark30,
      borderWidth: 1,
      borderRadius: 3,
      backgroundColor: selected ? theme.colors.green15 : theme.colors.white,
      paddingHorizontal: 14,
      paddingVertical: 8,
      minWidth: 66,
      justifyContent: "center",
      alignItems: "center",
      marginRight: 12,
      marginVertical: 4,
      flexDirection: "row",
    },
    text: {
      ...theme.textLightBold,
      color: selected ? theme.colors.primary : theme.colors.dark30,
    },
    total: {
      ...theme.textLight,
      color: selected ? theme.colors.primary : theme.colors.dark30,
      marginLeft: 4,
    },
  });

export default ProductReviewsStyles;

/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const ItemOptionStyles = StyleSheet.create({
  variationOneContainer: {
    width: 70,
    borderWidth: 0.5,
    borderColor: theme.colors.primary,
    borderRadius: 5,
  },
  variationOneHeader: {
    borderColor: theme.colors.primary,
    borderRadius: 5,
    backgroundColor: theme.colors.primary,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  variationTwoContainer: {
    width: 70,
    borderWidth: 0.5,
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 14,
  },
  txtHeader: {
    ...theme.textSmall,
    color: theme.colors.white,
    textAlign: "center",
    fontWeight: "normal",
  },
  itemImage: {
    width: "100%",
    height: 60,
    borderRadius: 5,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  deleteIcon: {
    backgroundColor: theme.colors.red15,
    width: 16,
    height: 16,
    borderRadius: 100,
    position: "absolute",
    right: -8,
    top: -8,
  },
  txtIcon: {
    ...theme.textSmall,
    color: theme.colors.white,
    textAlign: "center",
  },
});

export default ItemOptionStyles;

/**
 *
 * @format
 *
 */

import { theme } from "@app/styles";
import { StyleSheet } from "react-native";

const QuantityStyles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: 100,
  },
  buttonInc: {
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
  },
  buttonDec: {
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
  },
  countStyle: {
    justifyContent: "center",
  },
});

export default QuantityStyles;

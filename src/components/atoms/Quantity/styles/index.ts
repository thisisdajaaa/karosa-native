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
  countStyle: {
    justifyContent: "center",
  },
});

export const ButtonDisabledStyles = (isDisabled: boolean) => {
  return StyleSheet.create({
    buttonContainer: {
      backgroundColor: isDisabled ? theme.colors.dark10 : theme.colors.primary,
      borderRadius: 3,
    },
  });
};

export default QuantityStyles;

/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const ButtonGroupStyles = StyleSheet.create({
  containerStyle: {
    height: 44,
    marginBottom: 0,
    marginLeft: "auto",
    marginRight: "auto",
    borderColor: theme.colors.primary,
  },
  defaultTextStyle: {
    color: theme.colors.black,
    fontSize: 16,
    fontWeight: "500",
  },
  selectedButtonStyle: {
    backgroundColor: theme.colors.primary,
  },
  selectedTextStyle: {
    fontSize: 16,
    fontWeight: "500",
    color: theme.colors.white,
  },
});

export default ButtonGroupStyles;

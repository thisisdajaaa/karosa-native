/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { DIMENS, theme } from "@app/styles";

const ButtonStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    height: DIMENS.screenHeight * 0.075,
  },
});

export default ButtonStyles;

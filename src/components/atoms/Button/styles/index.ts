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
    height: DIMENS.screenHeight * 0.08,
    width: DIMENS.screenWidth * 0.9,
  },
});

export default ButtonStyles;

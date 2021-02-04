/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme, DIMENS } from "@app/styles";

const RibbonStyles = StyleSheet.create({
  textContainer: {
    width: DIMENS.screenWidth * 0.09,
    position: "absolute",
    top: 2,
    right: -2,
    bottom: 2,
    textAlign: "center",
  },
  text: {
    ...theme.textLightBold,
    fontWeight: "700",
    color: theme.colors.white,
    textAlign: "center",
  },
});

export default RibbonStyles;

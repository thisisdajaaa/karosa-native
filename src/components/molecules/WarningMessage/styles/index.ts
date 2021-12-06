/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { DIMENS, SPACING, theme } from "@app/styles";

const WarningMessageStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gold15,
    height: DIMENS.screenHeight * 0.14,
    padding: 16,
    alignItems: "flex-start",
  },
  warningIcon: {
    marginRight: SPACING.xss,
    marginTop: SPACING.xss,
  },
  closeIcon: {
    marginLeft: "auto",
  },
  textContainer: { alignItems: "center" },
  text: {
    ...theme.textRegular,
    fontWeight: "400",
    color: theme.colors.dark30,
    textAlign: "left",
  },
});

export default WarningMessageStyles;

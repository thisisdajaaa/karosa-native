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
    height: DIMENS.screenHeight * 0.15,
  },
  content: {
    flexDirection: "row",
  },
  warningIcon: {
    marginRight: SPACING.xss,
    marginTop: SPACING.xss,
  },
  closeIcon: {
    marginLeft: "auto",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: SPACING.sm,
    paddingRight: SPACING.sm,
  },
  text: {
    ...theme.textRegular,
    fontWeight: "400",
    color: theme.colors.dark30,
    textAlign: "left",
  },
});

export default WarningMessageStyles;

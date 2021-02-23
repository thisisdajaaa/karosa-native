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
    height: DIMENS.screenHeight * 0.2,
  },
  content: {
    flexDirection: "row",
  },
  warningIcon: {
    marginRight: SPACING.xss,
    marginTop: SPACING.xs,
  },
  closeIcon: {
    marginLeft: "auto",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: SPACING.xl,
    paddingRight: SPACING.lg,
  },
  text: {
    ...theme.textRegular,
    fontWeight: "400",
    color: theme.colors.dark30,
    textAlign: "left",
  },
});

export default WarningMessageStyles;

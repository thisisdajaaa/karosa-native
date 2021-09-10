/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { DIMENS, SPACING, theme } from "@app/styles";

const ListTitleStyles = StyleSheet.create({
  mainRowContainer: {
    flexDirection: "row",
    height: DIMENS.screenHeight * 0.028,
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  txtLabel: {
    ...theme.textBold,
    color: theme.colors.dark20,
    fontWeight: "700",
  },
  txtRequired: {
    color: theme.colors.red5,
    marginLeft: SPACING.xs,
  },
});

export default ListTitleStyles;

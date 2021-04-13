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
    height: DIMENS.screenHeight * 0.05,
  },
  labelContainer: {
    marginTop: SPACING.sm - 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  txtLabel: {
    ...theme.textBold,
    color: theme.colors.dark20,
    fontWeight: "700",
  },
});

export default ListTitleStyles;

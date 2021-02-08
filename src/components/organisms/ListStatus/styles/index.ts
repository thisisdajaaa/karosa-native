/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { DIMENS, SPACING, theme } from "@app/styles";

const ListStatusStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: DIMENS.screenHeight * 0.05,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  txtLabel: {
    ...theme.textRegular,
    fontWeight: "400",
  },
  txtRequired: {
    ...theme.textRegular,
    marginLeft: SPACING.xs,
    color: theme.colors.red5,
    fontWeight: "400",
  },
  valueContainer: { flexDirection: "row", justifyContent: "flex-end" },
  iconStatus: {
    marginRight: SPACING.sm,
    marginTop: SPACING.xss - 1,
  },
  txtValue: {
    ...theme.textRegular,
    fontWeight: "700",
  },
});

export default ListStatusStyles;

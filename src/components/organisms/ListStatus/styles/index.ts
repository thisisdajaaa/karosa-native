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
  txtValue: {
    ...theme.textRegular,
    fontWeight: "700",
  },
});

export const StatusItemStyle = (bgColor: string) => {
  return StyleSheet.create({
    circle: {
      borderRadius: 50,
      backgroundColor: bgColor,
      height: 16,
      width: 16,
      marginRight: SPACING.sm,
      marginTop: SPACING.xss - 1,
    },
  });
};

export default ListStatusStyles;

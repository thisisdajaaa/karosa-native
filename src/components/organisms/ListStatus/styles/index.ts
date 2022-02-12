/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { SPACING, theme } from "@app/styles";

const ListStatusStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  icon: {
    position: "relative",
    left: 0,
    top: -1,
  },
  txtWithIcon: {
    ...theme.textListItem,
    position: "relative",
    left: 7,
    marginRight: 6,
    fontWeight: "400",
  },
  txtLabel: {
    ...theme.textListItem,
    fontWeight: "400",
  },
  txtRequired: {
    ...theme.textListItem,
    marginLeft: SPACING.xs,
    color: theme.colors.red5,
    fontWeight: "400",
  },
  valueContainer: { flexDirection: "row", justifyContent: "flex-end" },
  txtValue: {
    ...theme.textListItem,
    fontWeight: "700",
  },
});

export const StatusItemStyle = (bgColor: string) => {
  return StyleSheet.create({
    circle: {
      borderRadius: 50,
      backgroundColor: bgColor,
      height: 13,
      width: 13,
      marginRight: SPACING.sm,
      marginTop: SPACING.xss - 1,
    },
  });
};

export default ListStatusStyles;

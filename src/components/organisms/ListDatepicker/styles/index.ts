/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { SPACING, theme } from "@app/styles";

const ListDatepickerStyles = StyleSheet.create({
  column: {
    flexDirection: "column",
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
    color: theme.colors.dark20,
    fontWeight: "400",
  },
  txtRequired: {
    ...theme.textRegular,
    marginLeft: SPACING.xs,
    color: theme.colors.red5,
    fontWeight: "400",
  },
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  datepicker: { alignSelf: "flex-end" },
});

export default ListDatepickerStyles;

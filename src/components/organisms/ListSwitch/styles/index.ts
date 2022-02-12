/**
 *
 * @format
 *
 */

import { theme } from "@app/styles";
import { StyleSheet } from "react-native";

const ListSwitchStyles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
    height: 0,
  },
  txtTitle: {
    ...theme.textListItem,
    fontWeight: "400",
  },
  icon: {
    position: "relative",
    left: 0,
  },
  txtWithIcon: {
    ...theme.textListItem,
    position: "relative",
    left: 7,
    fontWeight: "400",
  },
  txtBoldTitle: {
    ...theme.textBold,
    fontWeight: "700",
  },
  txtExtraInfo: {
    ...theme.textLight,
    marginTop: 3,
    marginLeft: 10,
    color: theme.colors.dark10,
    fontStyle: "italic",
    fontWeight: "400",
  },
});

export default ListSwitchStyles;

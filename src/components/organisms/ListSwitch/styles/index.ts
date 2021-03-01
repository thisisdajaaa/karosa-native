/**
 *
 * @format
 *
 */

import { DIMENS, theme } from "@app/styles";
import { StyleSheet } from "react-native";

const ListSwitchStyles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  switchContainer: {
    height: DIMENS.screenHeight * 0.05,
    flexDirection: "row",
    alignItems: "center",
  },
  rightContainer: {
    alignItems: "flex-end",
  },
  txtTitle: {
    ...theme.textRegular,
    fontWeight: "400",
  },
  txtBoldTitle: {
    ...theme.textRegular,
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

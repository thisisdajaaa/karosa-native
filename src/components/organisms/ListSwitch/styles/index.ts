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
    height: DIMENS.screenHeight * 0.028,
    flexDirection: "row",
    alignItems: "center",
  },
  rightContainer: {
    marginTop: 10,
    alignItems: "flex-end",
  },
  txtTitle: {
    ...theme.textRegular,
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

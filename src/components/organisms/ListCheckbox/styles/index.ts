/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme, DIMENS } from "@app/styles";

const ListCheckboxStyles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  checkboxContainer: {
    height: DIMENS.screenHeight * 0.05,
    flexDirection: "row",
    alignItems: "center",
  },
  rightContainer: {
    alignItems: "flex-end",
    position: "relative",
    left: "32%",
  },
  text: {
    ...theme.textRegular,
    fontWeight: "400",
  },
});

export default ListCheckboxStyles;

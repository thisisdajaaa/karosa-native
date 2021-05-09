/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { DIMENS, theme } from "@app/styles";

const ListCheckboxStyles = StyleSheet.create({
  container: {
    flexDirection: "column",
    position: "relative",
    left: "-80%",
  },
  checkboxContainer: {
    flexDirection: "row",
    height: DIMENS.screenWidth * 0.08,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text: {
    ...theme.textRegular,
    fontWeight: "400",
  },
});

export default ListCheckboxStyles;

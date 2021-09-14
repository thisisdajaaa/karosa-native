/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const ListCheckboxStyles = StyleSheet.create({
  container: {
    flexDirection: "column",
    position: "relative",
    left: "-80%",
  },
  text: {
    ...theme.textRegular,
    fontWeight: "400",
  },
});

export default ListCheckboxStyles;

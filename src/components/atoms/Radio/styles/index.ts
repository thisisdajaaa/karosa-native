/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme, SPACING } from "@app/styles";

const RadioStyles = StyleSheet.create({
  text: {
    ...theme.textRegular,
    fontWeight: "400",
    marginLeft: SPACING.sm,
  },
  container: {
    backgroundColor: theme.colors.transparent,
    borderWidth: 0,
    margin: 0,
  },
});

export default RadioStyles;

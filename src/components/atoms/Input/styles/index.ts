/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme, SPACING } from "@app/styles";

const InputStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
  inputContainer: {
    backgroundColor: theme.colors.white,
    borderRadius: 3,
    padding: SPACING.sm,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.colors.dark30,
  },
});

export default InputStyles;

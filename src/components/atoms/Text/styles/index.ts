/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const TextStyles = StyleSheet.create({
  text: {
    ...theme.textRegular,
    color: theme.colors.dark20,
    fontWeight: "400",
  },
});

export default TextStyles;

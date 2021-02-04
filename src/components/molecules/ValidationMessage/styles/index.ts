/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const ValidationMessageStyles = StyleSheet.create({
  text: {
    ...theme.validatorError,
    fontWeight: "300",
  },
});

export default ValidationMessageStyles;

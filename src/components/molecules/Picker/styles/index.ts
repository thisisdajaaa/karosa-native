/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const PickerStyles = StyleSheet.create({
  txtPlaceholder: {
    ...theme.textPicker,
    color: theme.colors.primary,
    fontWeight: "400",
  },
  txtPickerValue: {
    ...theme.textPicker,
    color: theme.colors.dark20,
    fontWeight: "400",
    textAlign: "right",
  },
});

export default PickerStyles;

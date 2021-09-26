/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const PickerStyles = StyleSheet.create({
  container: {
    width: 92,
    height: 28,
    borderColor: theme.colors.primary,
    borderWidth: 1,
    borderRadius: 3,
    justifyContent: "center",
    paddingHorizontal: 8,
  },
  txtPlaceholder: {
    ...theme.textPicker,
    color: theme.colors.primary,
    fontWeight: "400",
  },
  txtPickerValue: {
    ...theme.textLight,
    color: theme.colors.primary,
    fontWeight: "400",
  },
});

export default PickerStyles;

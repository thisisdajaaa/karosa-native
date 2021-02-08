/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const PickerStyles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
  },
  inputStyle: {
    textAlign: "right",
    ...theme.textRegular,
    color: theme.colors.dark25,
    fontWeight: "400",
    margin: 0,
    padding: 0,
  },
  hintStyle: {
    color: theme.colors.primary,
    textAlign: "right",
    ...theme.textRegular,
    fontWeight: "400",
    margin: 0,
    padding: 0,
  },
  picker: {
    width: "100%",
    height: "100%",
    textAlign: "right",
    borderWidth: 0,
    opacity: 0,
    position: "absolute",
    alignSelf: "flex-end",
  },
  inputContainer: {
    flexDirection: "column",
    borderWidth: 0,
    padding: 0,
    marginVertical: 0,
  },
});

export default PickerStyles;

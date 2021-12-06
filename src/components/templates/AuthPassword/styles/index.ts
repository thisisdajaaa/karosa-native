/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { SPACING, theme } from "@app/styles";

const AuthPasswordStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: SPACING.lg,
    backgroundColor: theme.colors.white,
  },
  passwordContainer: {
    position: "relative",
    overflow: "hidden",
  },
  inputContainer: {
    marginBottom: 16,
  },
  errorContainer: {
    borderColor: theme.colors.red5,
  },
  validationContainer: {
    marginVertical: 8,
  },
  toggleContainer: {
    position: "absolute",
    right: "5%",
    top: "20%",
  },
  txtToggle: {
    ...theme.textLightBold,
    color: theme.colors.primary,
  },
  txtHeader: {
    ...theme.textBold,
    fontWeight: "700",
  },
  txtHelp: { ...theme.textRegular, color: theme.colors.primary },
  txtSetPass: {
    ...theme.textTitle,
    color: theme.colors.black,
    fontWeight: "500",
    marginVertical: 6,
  },
  txtResetPass: {
    ...theme.textRegular,
    color: theme.colors.black,
    fontWeight: "300",
    marginTop: 6,
    marginBottom: 25,
  },
});

export default AuthPasswordStyles;

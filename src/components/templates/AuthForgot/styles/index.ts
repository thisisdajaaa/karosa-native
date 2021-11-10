/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { SPACING, theme } from "@app/styles";

const LoginForgotStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: SPACING.lg,
    backgroundColor: theme.colors.white,
  },
  errorContainer: {
    borderColor: theme.colors.red5,
  },
  validationContainer: {
    marginVertical: 8,
  },
  txtForgotPass: {
    ...theme.textTitle,
    color: theme.colors.black,
    fontWeight: "500",
    marginVertical: SPACING.sm,
  },
  txtResetPass: {
    ...theme.textRegular,
    color: theme.colors.black,
    fontWeight: "300",
    marginVertical: SPACING.sm,
  },
  txtHelp: { ...theme.textRegular, color: theme.colors.primary },
});

export default LoginForgotStyles;

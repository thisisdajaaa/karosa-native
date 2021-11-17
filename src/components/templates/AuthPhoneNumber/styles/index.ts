/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { SPACING, theme } from "@app/styles";

const AuthPhoneNumberStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: SPACING.lg,
    backgroundColor: theme.colors.white,
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
  txtHeader: {
    ...theme.textBold,
    fontWeight: "700",
  },
  txtHelp: { ...theme.textRegular, color: theme.colors.primary },
  txtEnterPhoneNumber: {
    ...theme.textTitle,
    color: theme.colors.black,
    fontWeight: "500",
  },
  txtResetPass: {
    ...theme.textRegular,
    color: theme.colors.black,
    fontWeight: "300",
    marginTop: 10,
    marginBottom: 24,
  },
});

export default AuthPhoneNumberStyles;

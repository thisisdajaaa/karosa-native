/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { SPACING, theme } from "@app/styles";

const AuthLoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: SPACING.lg,
    position: "relative",
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
  logoContainer: {
    position: "absolute",
    top: "5%",
    alignSelf: "center",
  },
  spacer: {
    margin: SPACING.lg * 4,
  },
  txtHeader: {
    ...theme.textBold,
    fontWeight: "700",
  },
  txtForgotPass: {
    ...theme.link2,
    fontWeight: "bold",
    marginVertical: SPACING.sm,
  },
});

export default AuthLoginStyles;

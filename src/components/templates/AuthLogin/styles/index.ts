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
    backgroundColor: theme.colors.white,
  },
  errorContainer: {
    borderColor: theme.colors.red5,
  },
  validationContainer: {
    position: "relative",
    bottom: 13,
  },
  logoContainer: {
    position: "absolute",
    top: 20,
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

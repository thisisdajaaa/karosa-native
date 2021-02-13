/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { DIMENS, SPACING, theme } from "@app/styles";

const AuthLoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: SPACING.lg,
    backgroundColor: theme.colors.white,
  },
  logo: {
    width: DIMENS.screenWidth * 0.21,
    height: DIMENS.screenHeight * 0.12,
  },
  logoContainer: {
    position: "absolute",
    top: 40,
    alignSelf: "center",
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

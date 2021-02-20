/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { DIMENS, SPACING, theme } from "@app/styles";

const AuthHelpStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.white,
  },
  txtHeader: {
    ...theme.textBold,
    fontWeight: "700",
  },
  footer: {
    ...theme.textLight,
    position: "absolute",
    bottom: "2%",
    fontWeight: "300",
  },
  textContainer: {
    marginTop: SPACING.xl * 4,
  },
  spacer: { marginVertical: SPACING.lg * 2 },
  logo: {
    width: DIMENS.screenWidth * 0.21,
    height: DIMENS.screenHeight * 0.12,
  },
  logoContainer: {
    position: "absolute",
    top: "25%",
  },
});

export default AuthHelpStyles;

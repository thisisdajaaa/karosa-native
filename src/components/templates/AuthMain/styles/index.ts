/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { DIMENS, SPACING, theme } from "@app/styles";

const AuthMainStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: SPACING.lg,
    backgroundColor: theme.colors.white,
  },
  buttonIcon: {
    fontSize: 24,
    color: theme.colors.white,
    position: "absolute",
    left: 30,
  },
  logo: {
    width: DIMENS.screenWidth * 0.21,
    height: DIMENS.screenHeight * 0.12,
  },
  logoContainer: {
    position: "absolute",
    alignSelf: "center",
    top: "-1%",
  },
  hrContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  hrLine: {
    flex: 1,
    height: 1,
    backgroundColor: theme.colors.light10,
  },
  fbButtonWrapper: {
    marginVertical: "2.5%",
  },
  fbButtonContainer: {
    backgroundColor: theme.colors.blue10,
  },
  gmailButtonContainer: {
    backgroundColor: theme.colors.red10,
  },
  noAccContainer: {
    ...theme.textRegular,
    fontWeight: "400",
    textAlign: "center",
  },
  txtOr: {
    ...theme.textRegular,
    color: theme.colors.dark10,
    width: DIMENS.screenWidth * 0.1,
    textAlign: "center",
  },
  txtSignUp: {
    fontWeight: "700",
    color: theme.colors.primary,
    marginLeft: SPACING.sm,
  },
  txtSignUpContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginVertical: SPACING.lg * 2,
  },
  txtTitle: {
    ...theme.textTitle,
    fontWeight: "500",
  },
  txtHelp: { ...theme.textRegular, color: theme.colors.primary },
  spacer: {
    marginVertical: "12%",
  },
});

export default AuthMainStyles;

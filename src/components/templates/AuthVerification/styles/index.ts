/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { SPACING, theme } from "@app/styles";

const AuthVerificationStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: SPACING.lg,
    backgroundColor: theme.colors.white,
  },
  txtVerificationCode: {
    ...theme.textTitle,
    color: theme.colors.black,
    fontWeight: "500",
    marginVertical: 6,
  },
  txtHeader: {
    ...theme.textBold,
    fontWeight: "700",
  },
  btnContainer: {
    marginTop: 18,
  },
  txtHelp: { ...theme.textRegular, color: theme.colors.primary },
  txtSMS: {
    ...theme.textRegular,
    color: theme.colors.black,
    fontWeight: "300",
    marginTop: 6,
  },
  txtBottom: {
    flexDirection: "row",
    marginTop: 10,
  },
  txtDidNotReceiveCode: {
    ...theme.textRegular,
    color: theme.colors.black,
    fontWeight: "300",
  },
  txtSMSNumber: {
    ...theme.textBold,
    color: theme.colors.black,
    fontWeight: "700",
    marginBottom: 30,
  },
  txtResend: {
    ...theme.textBold,
    color: theme.colors.green10,
    fontWeight: "bold",
  },
});

export default AuthVerificationStyles;

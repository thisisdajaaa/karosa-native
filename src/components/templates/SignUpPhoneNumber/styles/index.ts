/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const SignUpPhonenumberStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: theme.colors.white,
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
    marginVertical: 6,
  },
  txtResetPass: {
    ...theme.textRegular,
    color: theme.colors.black,
    fontWeight: "300",
    marginVertical: 12,
  },
});

export default SignUpPhonenumberStyles;

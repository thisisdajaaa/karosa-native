import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: theme.colors.white,
  },
  txtVerificationCode: {
    ...theme.title,
    color: theme.colors.black,
    fontWeight: "500",
    marginVertical: 6,
  },
  txtSMS: {
    ...theme.textRegular,
    color: theme.colors.black,
    fontWeight: "300",
    marginVertical: 6,
  },
  txtResend: {
    ...theme.textRegular,
    color: theme.colors.green10,
    fontWeight: "bold",
    marginVertical: 6,
    marginHorizontal: 5,
  },
});

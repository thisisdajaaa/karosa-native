import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: theme.colors.white,
  },
  txtForgotPass: {
    ...theme.title,
    color: theme.colors.black,
    fontWeight: "500",
    marginVertical: 6,
  },
  txtResetPass: {
    ...theme.textRegular,
    color: theme.colors.black,
    fontWeight: "300",
    marginVertical: 6,
  },
  txtLogin: {
    ...theme.textRegular,
    width: 70,
    height: 50,
    position: "absolute",
    top: 20,
    alignSelf: "center",
    fontWeight: "700",
  },
});

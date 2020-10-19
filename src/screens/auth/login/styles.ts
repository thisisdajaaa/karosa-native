import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: theme.colors.white,
  },
  logo: {
    width: 80,
    height: 80,
  },
  logoContainer: {
    position: "absolute",
    top: 40,
    alignSelf: "center",
  },
  txtForgotPass: {
    ...theme.link2,
    fontWeight: "bold",
    marginVertical: 6,
  },
});

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: theme.colors.white,
  },
  buttonIcon: {
    fontSize: 24,
    color: theme.colors.white,
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
  fbButtonContainer: {
    backgroundColor: theme.colors.blue10,
  },
  gmailButtonContainer: {
    backgroundColor: theme.colors.red10,
    marginVertical: 17,
  },
  signInButtonContainer: {
    backgroundColor: theme.colors.primary,
    marginVertical: 17,
  },
  noAccContainer: {
    ...theme.textRegular,
    fontWeight: "400",
    textAlign: "center",
  },
  txtOr: {
    ...theme.textRegular,
    color: theme.colors.dark10,
    width: 50,
    textAlign: "center",
  },
  txtSignUp: {
    fontWeight: "700",
    color: theme.colors.primary,
  },
});

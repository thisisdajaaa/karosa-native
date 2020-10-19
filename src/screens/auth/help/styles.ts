import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.white,
  },
  footer: {
    ...theme.textLight,
    position: "absolute",
    bottom: 12,
    fontWeight: "300",
  },
  logo: {
    width: 80,
    height: 80,
  },
  icon: {
    marginBottom: 12,
    color: theme.colors.primary,
    fontSize: 24,
  },
  logoContainer: {
    position: "absolute",
    top: 110,
    alignSelf: "center",
  },
  emailContainer: {
    marginLeft: 2,
    position: "absolute",
    left: 60,
    top: 240,
  },
  phoneContainer: {
    position: "absolute",
    left: 60,
    top: 300,
  },
});

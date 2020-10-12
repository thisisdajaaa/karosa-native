import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
  },
  footer: {
    position: "absolute",
    bottom: 12,
    fontSize: 12,
    fontWeight: "300",
    lineHeight: 14,
  },
  logo: {
    width: 80,
    height: 80,
  },
  logoContainer: {
    position: "absolute",
    top: 100,
    alignSelf: "center",
  },
});

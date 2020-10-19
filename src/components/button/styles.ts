import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    borderRadius: 3,
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    width: "100%",
    height: 48,
    marginTop: 12,
  },
  text: {
    ...theme.textRegular,
    color: theme.colors.white,
    fontWeight: "500",
    fontStyle: "normal",
    textAlign: "center",
  },
  iconLeft: {
    position: "absolute",
    left: "10.86%",
    top: 11,
  },
  iconRight: {
    position: "absolute",
    right: "10.86%",
    top: 7,
  },
});

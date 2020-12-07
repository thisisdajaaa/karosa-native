import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "rgba(196, 196, 196, 0.3)",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: theme.colors.dark10,
    height: 82,
    justifyContent: "center",
    overflow: "hidden",
    width: 82,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  txtAddImg: {
    ...theme.textLight,
    textAlign: "center",
    fontWeight: "300",
    color: theme.colors.dark30,
  },
});

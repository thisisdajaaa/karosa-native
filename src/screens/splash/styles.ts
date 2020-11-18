import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: theme.colors.primary,
  },
  txtTitle: {
    textAlign: "center",
    color: theme.colors.white,
  },
});

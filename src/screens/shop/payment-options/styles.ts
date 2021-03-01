import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.light5,
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    alignSelf: "center",
    bottom: 17,
  },
});

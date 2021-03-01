import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.light5,
  },
  buttonContainer: { position: "absolute", bottom: 20, alignSelf: "center" },
  txtPackaging: {
    ...theme.textRegular,
    fontWeight: "700",
  },
  separator: {
    marginTop: 8,
    marginBottom: 8,
  },
});

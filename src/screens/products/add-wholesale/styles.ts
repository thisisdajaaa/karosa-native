import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.light5,
  },
  saveButtonContainer: {
    backgroundColor: theme.colors.light10,
    minWidth: 330,
    width: "100%",
  },
  txtSave: {
    ...theme.textRegular,
    color: theme.colors.dark10,
  },
  buttonContainer: { position: "absolute", bottom: 20, alignSelf: "center" },
});

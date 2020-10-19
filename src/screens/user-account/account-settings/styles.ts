import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.light5,
    flex: 1,
  },
  logoutButtonContainer: {
    backgroundColor: theme.colors.light10,
    minWidth: 330,
    width: "100%",
  },
  txtLogout: {
    color: theme.colors.dark20,
  },
  buttonContainer: { position: "absolute", bottom: 20, alignSelf: "center" },
  multiListContainer: { height: 266, marginVertical: 18 },
});

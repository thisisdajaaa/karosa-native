import { Dimensions, StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryContainer: {
    width: Dimensions.get("window").width / 3,
    marginBottom: 16,
  },
  categoryCircle: {
    height: 72,
    width: 72,
    backgroundColor: theme.colors.dark10,
    borderRadius: 100,
  },
  nameContainer: {
    marginTop: 4,
    position: "relative",
    right: 3.4,
  },
  txtName: {
    ...theme.textLight,
    width: 83,
    textAlign: "center",
    fontWeight: "300",
  },
});

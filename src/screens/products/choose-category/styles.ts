import { Dimensions, StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryContainer: {
    paddingHorizontal: 16,
    paddingVertical: 3,
    alignItems: "center",
    width: Dimensions.get("window").width / 3,
    marginBottom: 12,
  },
  categoryCircle: {
    height: 72,
    width: 72,
    backgroundColor: theme.colors.dark10,
    borderRadius: 100,
  },
  nameContainer: {
    marginTop: 8,
  },
  txtName: {
    width: 83,
    textAlign: "center",
    fontWeight: "300",
    fontSize: 12,
    lineHeight: 14,
  },
});

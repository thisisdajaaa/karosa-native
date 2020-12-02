import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 20,
  },
  content: {
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0,
  },
  categoryContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 24,
  },
  categoryCircle: {
    height: 72,
    width: 72,
    backgroundColor: theme.colors.dark10,
    borderRadius: 100,
  },
  labelContainer: {
    marginTop: 8,
  },
  txtLabel: {
    width: 83,
    textAlign: "center",
    fontWeight: "300",
    fontSize: 12,
    lineHeight: 14,
  },
});

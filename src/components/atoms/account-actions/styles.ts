import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  actionContainer: { flexDirection: "column", flex: 1, alignItems: "center" },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "row",
    paddingLeft: 8,
    paddingRight: 8,
  },
  label: {
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 14,
    marginBottom: 12,
    position: "absolute",
    bottom: 5,
  },
});

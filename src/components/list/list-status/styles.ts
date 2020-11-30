import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  txtTitle: {
    ...theme.textRegular,
    fontWeight: "400",
  },
  required: {
    ...theme.textRegular,
    marginLeft: 2,
    color: theme.colors.red5,
    fontWeight: "400",
  },
  valueContainer: { flexDirection: "row", justifyContent: "flex-end" },
  statusIcon: {
    fontSize: 18,
    color: theme.colors.primary,
    marginRight: 8,
  },
  txtValue: {
    ...theme.textRegular,
    fontWeight: "700",
  },
});

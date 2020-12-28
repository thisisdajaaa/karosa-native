import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  trendContainer: {
    flexDirection: "row",
  },
  txtContainer: {
    padding: 10,
  },
  txtName: {
    ...theme.textLight,
    fontWeight: "700",
    color: theme.colors.dark20,
  },
  txtAmount: {
    ...theme.textLight,
    marginTop: 3,
    fontWeight: "300",
    color: theme.colors.dark30,
  },
  icon: {
    height: 48,
    width: 48,
    backgroundColor: theme.colors.dark10,
    borderRadius: 100,
    marginLeft: "auto",
  },
});

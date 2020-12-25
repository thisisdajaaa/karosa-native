import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
  },
  actionContainer: {
    paddingTop: 0,
  },
  txtLabel: { ...theme.textRegular, fontWeight: "400" },
  separator: {
    marginTop: 12,
  },
  spacer: {
    marginTop: 24,
  },
  optionIcon: {
    fontSize: 20,
    color: theme.colors.primary,
    marginRight: 7,
  },
});

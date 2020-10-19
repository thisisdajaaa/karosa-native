import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  separator: {
    borderBottomColor: theme.colors.light10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignSelf: "stretch",
  },
});

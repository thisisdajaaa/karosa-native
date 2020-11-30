import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  required: {
    ...theme.textRegular,
    marginLeft: 2,
    color: theme.colors.red5,
    fontWeight: "400",
  },
  switchContainer: {
    alignItems: "flex-end",
  },
  txtTitle: {
    ...theme.textRegular,
    fontWeight: "400",
  },
});

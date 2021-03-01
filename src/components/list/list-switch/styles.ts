import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
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
  txtBoldTitle: {
    ...theme.textRegular,
    fontWeight: "700",
  },
  txtExtraInfo: {
    ...theme.textLight,
    marginLeft: -11,
    color: theme.colors.dark10,
    fontStyle: "italic",
    fontWeight: "400",
  },
});

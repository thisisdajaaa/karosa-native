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
  txtProductStatus: {
    ...theme.textBold,
    marginVertical: 12,
    textAlign: "center",
    fontWeight: "500",
  },
  separator: {
    marginTop: 5,
  },
  spacer: {
    marginTop: 24,
  },
  doneButtonContainer: {
    backgroundColor: theme.colors.light10,
    minWidth: 330,
    width: "100%",
  },
  txtDone: {
    ...theme.textRegular,
    color: theme.colors.dark10,
  },
});

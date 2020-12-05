import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  btnDeleteContainer: {
    backgroundColor: theme.colors.primary,
    minWidth: 330,
    width: "100%",
  },
  btnCancelContainer: {
    marginTop: 12,
    backgroundColor: theme.colors.light10,
    minWidth: 330,
    width: "100%",
  },
  checkBoxContainer: {
    alignSelf: "flex-start",
    marginTop: 5,
  },
  buttonContainer: {
    position: "absolute",
    alignSelf: "center",
    bottom: 17,
  },
  txtBtnCancel: {
    ...theme.textRegular,
    fontWeight: "400",
    color: theme.colors.dark20,
  },
  txtBtnDelete: {
    ...theme.textRegular,
    fontWeight: "400",
    color: theme.colors.white,
  },
  txtDeleteShop: {
    ...theme.textBold,
    marginVertical: 12,
    textAlign: "center",
    fontWeight: "500",
  },
  txtDeleteShopPar: {
    ...theme.textRegular,
    paddingHorizontal: 4,
    textAlign: "center",
    color: theme.colors.dark30,
    fontWeight: "400",
  },
});

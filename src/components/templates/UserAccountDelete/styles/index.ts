/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const UserAccountDeleteStyles = StyleSheet.create({
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
    color: theme.colors.dark20,
  },
  txtDeleteAcc: {
    ...theme.textBold,
    marginVertical: 12,
    textAlign: "center",
    fontWeight: "500",
  },
  txtDeleteAccPar: {
    ...theme.textRegular,
    paddingHorizontal: 4,
    textAlign: "center",
    color: theme.colors.dark30,
    fontWeight: "400",
  },
});

export default UserAccountDeleteStyles;

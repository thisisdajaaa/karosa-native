import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  btnCancelContainer: {
    marginTop: 12,
    backgroundColor: theme.colors.light10,
    minWidth: 330,
    width: "100%",
  },
  buttonContainer: {
    position: "absolute",
    alignSelf: "center",
    bottom: 20,
  },
  txtBtnCancel: {
    color: theme.colors.dark20,
  },
  txtLogout: {
    ...theme.textBold,
    marginVertical: 12,
    textAlign: "center",
    fontWeight: "500",
  },
  txtLogoutInfo: {
    ...theme.textRegular,
    color: theme.colors.dark30,
    paddingHorizontal: 4,
    marginVertical: 15,
    textAlign: "center",
    fontWeight: "400",
  },
  logoutIcon: {
    color: theme.colors.dark30,
    fontSize: 100,
    marginRight: 30,
    marginVertical: 12,
  },
  subContainer: {
    alignItems: "center",
  },
});

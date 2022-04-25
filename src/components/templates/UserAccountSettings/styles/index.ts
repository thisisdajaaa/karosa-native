/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const UserAccountSettingsStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.light5,
    flex: 1,
  },
  txtHeader: {
    ...theme.textBold,
    fontWeight: "700",
  },
  logoutButtonContainer: {
    backgroundColor: theme.colors.light10,
    minWidth: 330,
    width: "100%",
  },
  txtLogout: {
    ...theme.textRegular,
    color: theme.colors.white,
  },
  buttonContainer: { position: "absolute", bottom: 20, alignSelf: "center" },
  multiListContainer: { height: 266, marginVertical: 18 },
});

export default UserAccountSettingsStyles;

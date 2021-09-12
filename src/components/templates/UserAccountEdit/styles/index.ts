/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const UserAccountEditStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.light5,
    flex: 1,
  },
  txtHeader: {
    ...theme.textBold,
    fontWeight: "700",
  },
  txtSave: {
    color: theme.colors.dark10,
  },
  multiListContainer: { height: 266, marginVertical: 18 },
  addressContainer: { marginBottom: 18, marginTop: 6 },
});

export default UserAccountEditStyles;

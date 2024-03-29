/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const UserAccountSocialMediaStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.light5,
    flex: 1,
  },
  txtHeader: {
    ...theme.textBold,
    fontWeight: "700",
  },
  fbLogo: {
    position: "absolute",
    left: 16,
    alignSelf: "center",
    fontSize: 24,
    color: theme.colors.blue10,
  },
  twitterLogo: {
    position: "absolute",
    left: 16,
    alignSelf: "center",
    fontSize: 24,
    color: theme.colors.blue15,
  },
  txtLogo: {
    position: "absolute",
    left: 34,
  },
  fbIcon: {
    fontSize: 24,
    color: theme.colors.blue10,
  },
  multiListContainer: { height: 144, marginVertical: 18 },
});

export default UserAccountSocialMediaStyles;

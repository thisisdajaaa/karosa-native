import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  actionPhaseContainer: {
    height: 160,
    backgroundColor: theme.colors.white,
    marginBottom: 15,
  },
  headerContainer: {
    backgroundColor: theme.colors.white,
    height: 158,
    justifyContent: "flex-end",
  },
  choicesContainer: {
    height: 180,
    backgroundColor: theme.colors.white,
  },
  sellerContainer: {
    marginLeft: 33,
    marginBottom: 7,
    backgroundColor: "transparent",
  },
  txtSeller: {
    color: theme.colors.white,
  },
  txtSales: {
    ...theme.title,
    fontWeight: "500",
  },
  commonIcon: {
    fontSize: 72,
    marginTop: 6,
    color: theme.colors.dark5,
  },
  inboxIcon: {
    fontSize: 60,
    marginTop: 8,
    color: theme.colors.dark5,
  },
  profileIcon: {
    fontSize: 24,
    color: theme.colors.white,
  },
  mainContainer: { backgroundColor: theme.colors.light5, flex: 1 },
  settingsIcon: { position: "absolute", right: 54, top: 7 },
  messageIcon: { position: "absolute", right: 17, top: 7 },
  arrowIcon: { position: "absolute", left: 17, top: 7 },
});

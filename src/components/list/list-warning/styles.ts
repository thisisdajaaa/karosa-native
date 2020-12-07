import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gold15,
    height: 88,
  },
  content: {
    flexDirection: "row",
  },
  warningIcon: {
    fontSize: 25,
    color: theme.colors.gold5,
    marginRight: 1,
    marginTop: 2,
  },
  txtContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 25,
    paddingRight: 12,
  },
  txtMessage: {
    ...theme.textRegular,
    fontWeight: "400",
    color: theme.colors.dark30,
    textAlign: "left",
  },
  closeIcon: {
    marginLeft: "auto",
    fontSize: 25,
    color: theme.colors.dark10,
  },
});

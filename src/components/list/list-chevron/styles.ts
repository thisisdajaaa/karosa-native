import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  hasListColor: {
    ...theme.textRegular,
    position: "absolute",
    left: 35,
    fontWeight: "400",
  },
  listColor: {
    position: "absolute",
    left: 0,
    fontSize: 30,
  },
  title: {
    ...theme.textRegular,
    fontWeight: "400",
  },
  txtInfo: {
    ...theme.textLight,
    color: theme.colors.dark30,
    fontWeight: "300",
    textAlign: "right",
  },
  required: {
    ...theme.textRegular,
    marginLeft: 2,
    color: theme.colors.red5,
    fontWeight: "400",
  },
  avatarImg: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
});

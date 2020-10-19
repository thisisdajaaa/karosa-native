import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingRight: 13,
    paddingLeft: 1,
    paddingTop: 13,
    paddingBottom: 13,
    backgroundColor: theme.colors.white,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: "center",
  },
  left: {
    fontWeight: "500",
    ...theme.textRegular,
  },
  right: {
    ...theme.textRegular,
    color: theme.colors.dark30,
    fontWeight: "400",
    textAlign: "right",
  },
});

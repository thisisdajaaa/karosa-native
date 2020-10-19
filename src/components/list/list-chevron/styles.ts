import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 1,
    paddingRight: 10,
    backgroundColor: theme.colors.white,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: "center",
  },
  hasListColor: {
    ...theme.textRegular,
    position: "absolute",
    left: 30,
    fontWeight: "500",
  },
  listColor: {
    position: "absolute",
    left: 12,
    fontSize: 30,
  },
  title: {
    ...theme.textRegular,
    fontWeight: "500",
  },
  rightLabel: {
    ...theme.textLight,
    color: theme.colors.dark30,
    fontWeight: "300",
    textAlign: "right",
  },
  chevronIcon: {
    fontSize: 25,
    color: theme.colors.dark10,
  },
});

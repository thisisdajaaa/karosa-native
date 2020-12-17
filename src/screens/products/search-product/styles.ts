import { Dimensions, StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 20,
  },
  row: {
    alignItems: "flex-start",
    width: Dimensions.get("window").width,
  },
  headerContainer: {
    backgroundColor: "transparent",
    width: "100%",
  },
  searchInput: {
    width: "80%",
    backgroundColor: "transparent",
  },
  txtRecentSearch: {
    ...theme.textRegular,
    fontWeight: "400",
    color: theme.colors.dark10,
  },
  flatListContainer: {
    marginTop: 12,
  },
  txtSearchTitle: {
    ...theme.textLight,
    fontWeight: "700",
    textAlign: "center",
  },
  item: {
    height: 32,
    backgroundColor: theme.colors.light10,
    padding: 8,
    borderRadius: 3,
    margin: 5,
  },
});

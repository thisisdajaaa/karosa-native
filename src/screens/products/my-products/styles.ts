import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.light5,
  },
  contentContainer: {
    flex: 1,
  },
  flexRow: {
    flexDirection: "row",
  },
  searchHeader: {
    marginRight: 15,
  },
  addProdButton: {
    minWidth: 288,
    width: "100%",
  },
  row: {
    justifyContent: "center",
    padding: 20,
  },
  boostButtonContainer: {
    minWidth: 124,
    width: "100%",
    height: 28,
    padding: 0,
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.primary,
    borderWidth: 2,
  },
  txtBoostNow: {
    ...theme.textLight,
    fontWeight: "700",
    textAlign: "center",
    color: theme.colors.primary,
  },
  buttonContainer: {
    position: "absolute",
    top: 70,
    alignSelf: "center",
  },
  dropdownIconContainer: {
    position: "absolute",
    left: 90,
    top: 21,
  },
  dropdownIcon: {
    fontSize: 15,
    color: theme.colors.dark35,
  },
  boostListContainer: {
    minWidth: 124,
    width: 91,
    height: 32,
    padding: 0,
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.primary,
    borderWidth: 2,
  },
  txtBoostList: {
    ...theme.textLight,
    fontWeight: "700",
    textAlign: "center",
    color: theme.colors.primary,
  },
  listView: {
    marginLeft: "auto",
    marginRight: 15,
  },
  gridView: {
    marginTop: 1,
  },
  boostListButton: {
    position: "absolute",
    bottom: -7,
    left: 190,
  },
  addProdContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 12,
  },
});

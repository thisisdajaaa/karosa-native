/**
 *
 * @format
 *
 */

import { theme } from "@app/styles";
import { StyleSheet } from "react-native";

const WishlistStyles = StyleSheet.create({
  txtHeader: {
    ...theme.textBold,
    fontWeight: "700",
  },
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
  row: {
    justifyContent: "space-evenly",
    paddingLeft: 18,
    paddingRight: 18,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 5,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
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
  spacer: {
    height: 70,
    backgroundColor: theme.colors.light5,
  },
});

export default WishlistStyles;

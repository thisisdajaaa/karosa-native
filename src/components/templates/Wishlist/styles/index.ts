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

  btnGrpViewContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: theme.colors.white,
  },
  btnContainer: {
    flex: 1,
  },

  txtTitle: {
    ...theme.textTitle,
    fontWeight: "400",
  },

  categoriesCard: {
    margin: 10,
    alignContent: "center",
    alignItems: "center",
  },
  categoriesText: {
    width: 75,
    textAlign: "center",
  },
  discountCard: {
    alignContent: "center",
    paddingBottom: 20,
    alignItems: "center",
    // backgroundColor: theme.colors.green5,
    // fontcolor: theme.colors.green5,
  },
  discountTextNeutral: {
    fontWeight: "500",
    fontSize: 50,
  },
  discountTextActive: {
    fontWeight: "500",
    fontSize: 50,
    color: theme.colors.green5,
    textDecorationLine: "underline",
  },

  filterButtonClicked: {
    borderColor: theme.colors.green5,
    backgroundColor: theme.colors.grey5,
    borderWidth: 2,
  },
  filterButtonNeutral: {
    borderColor: theme.colors.grey5,
    backgroundColor: theme.colors.grey5,
    borderWidth: 2,
  },
});

export default WishlistStyles;

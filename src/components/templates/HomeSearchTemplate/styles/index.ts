/**
 *
 * @format
 *
 */

import { theme } from "@app/styles";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  btnGrpViewContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: theme.colors.white,
  },
  btnContainer: {
    flex: 1,
  },
  searchBarContainer: {
    backgroundColor: theme.colors.light5,
    paddingTop: 0,
  },
  spacer: {
    height: 70,
    backgroundColor: theme.colors.light5,
  },
  filterButtonClicked: {
    borderColor: theme.colors.green5,
    backgroundColor: theme.colors.white,
    color: theme.colors.green5,
    borderWidth: 2,
  },
  filterButtonNeutral: {
    borderColor: theme.colors.grey5,
    backgroundColor: theme.colors.grey5,
    borderWidth: 2,
  },
  row: {
    justifyContent: "space-evenly",
    paddingLeft: 18,
    paddingRight: 18,
    // width:100
  },
});

export default styles;

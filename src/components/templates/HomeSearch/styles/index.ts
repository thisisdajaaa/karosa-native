/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: theme.colors.transparent,
    width: "100%",
  },
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
  horizontalContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default styles;

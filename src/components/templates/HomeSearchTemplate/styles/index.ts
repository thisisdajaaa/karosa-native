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
});

export default styles;

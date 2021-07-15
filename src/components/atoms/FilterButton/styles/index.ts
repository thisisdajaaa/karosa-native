/**
 *
 * @format
 *
 */

import { theme } from "@app/styles";
import { StyleSheet } from "react-native";

const FilterButtonStyles = StyleSheet.create({
  bgNeutral: {
    borderColor: theme.colors.grey5,
    backgroundColor: theme.colors.grey5,
    borderWidth: 2,
  },
  bgClicked: {
    borderColor: theme.colors.green5,
    backgroundColor: theme.colors.grey5,
    borderWidth: 2,
  },
  title: {
    color: theme.colors.black,
    fontSize: 10,
    paddingLeft: 0,
  },
  container: {
    margin: 10,
  },
  iconContainer: {
    right: 5,
  },
});

export default FilterButtonStyles;

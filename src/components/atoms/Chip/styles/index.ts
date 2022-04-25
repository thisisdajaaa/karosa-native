/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const ChipStyles = StyleSheet.create({
  selectedContainer: {
    borderRadius: 3,
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.green15,
    marginRight: 8,
    marginTop: 8,
  },
  unselectedContainer: {
    borderRadius: 3,
    borderColor: theme.colors.dark30,
    marginRight: 8,
    marginTop: 8,
  },
  txtSelected: {
    fontWeight: "700",
    color: theme.colors.primary,
  },
  txtUnselected: {
    color: theme.colors.dark30,
  },
  iconContainer: {
    marginRight: 8,
  },
});

export default ChipStyles;

/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const ListTimeRangeStyles = StyleSheet.create({
  column: {
    flexDirection: "column",
  },
  txtLabel: {
    ...theme.textListItem,
    color: theme.colors.dark20,
    fontWeight: "400",
  },
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  timeRange: { alignSelf: "flex-end" },
});

export default ListTimeRangeStyles;

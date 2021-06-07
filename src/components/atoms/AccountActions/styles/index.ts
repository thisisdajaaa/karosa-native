/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  actionContainer: { flexDirection: "column", flex: 1, alignItems: "center" },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "row",
    paddingLeft: 8,
    paddingRight: 8,
  },
  label: {
    ...theme.textLight,
    fontWeight: "700",
    marginBottom: 12,
    position: "absolute",
    bottom: 5,
  },
});

/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme, SPACING } from "@app/styles";

const IconLabelStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: theme.colors.white,
  },
  detailsContainer: {
    marginLeft: SPACING.md,
    marginTop: SPACING.xss,
    justifyContent: "center",
  },
  title: {
    ...theme.textRegular,
    fontWeight: "normal",
    marginBottom: SPACING.md,
  },
  subtitle: { ...theme.textRegular, fontWeight: "300" },
});

export default IconLabelStyles;

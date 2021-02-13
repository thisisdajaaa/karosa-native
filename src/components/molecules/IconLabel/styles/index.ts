/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme, SPACING } from "@app/styles";

const IconLabelStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: theme.colors.white,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: SPACING.lg,
    justifyContent: "center",
  },
  title: {
    ...theme.textRegular,
    fontWeight: "400",
  },
  subtitle: { ...theme.textRegular, fontWeight: "300" },
});

export default IconLabelStyles;

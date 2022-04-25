/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const ReviewsStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 18,
    paddingLeft: 14,
    backgroundColor: theme.colors.white,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.light10,
  },
  column: {
    flexDirection: "column",
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },
  details: {
    flexDirection: "column",
    marginLeft: 14,
    alignItems: "flex-start",
    width: "80%",
  },
  txtUsername: {
    ...theme.textRegular,
    color: theme.colors.dark30,
    marginBottom: 14,
  },
  primaryMargin: {
    marginBottom: 14,
  },
  secondaryMargin: {
    marginBottom: 8,
  },
  readMore: {
    ...theme.textLight,
    fontWeight: "300",
    color: theme.colors.dark30,
  },
  txtVariation: {
    ...theme.textLight,
    color: theme.colors.dark30,
  },
});

export default ReviewsStyles;

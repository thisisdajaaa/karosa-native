/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { SPACING, theme } from "@app/styles";

const ShopMainStyles = StyleSheet.create({
  actionPhaseContainer: {
    marginTop: SPACING.lg + 2,
    backgroundColor: theme.colors.white,
    marginBottom: SPACING.lg + 4,
    flexDirection: "row",
    paddingVertical: 16,
    paddingHorizontal: 28,
  },
  choicesContainer: {
    backgroundColor: theme.colors.white,
  },
  actionIcon: {
    height: 60,
    width: 60,
    backgroundColor: theme.colors.grey5,
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  actionSubContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  actionLabel: {
    ...theme.textLight,
    fontWeight: "400",
    marginTop: 4,
  },
  commonIcon: {
    fontSize: 72,
    marginBottom: SPACING.xl,
    color: theme.colors.dark5,
  },
  inboxIcon: {
    fontSize: 60,
    marginBottom: SPACING.xl,
    color: theme.colors.dark5,
  },
  spacer: {
    marginTop: "2%",
    marginBottom: "2%",
  },
});

export default ShopMainStyles;

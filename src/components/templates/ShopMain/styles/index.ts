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
    height: 115,
    backgroundColor: theme.colors.white,
    marginBottom: SPACING.lg + 4,
  },
  choicesContainer: {
    backgroundColor: theme.colors.white,
  },
  actionMainContainer: {
    justifyContent: "flex-start",
    flexDirection: "row",
    padding: SPACING.sm,
  },
  actionSubContainer: {
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  actionLabel: {
    ...theme.textLightBold,
    fontWeight: "700",
    position: "absolute",
    top: "78%",
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

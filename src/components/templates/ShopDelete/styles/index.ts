/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { SPACING, theme } from "@app/styles";

const ShopDeleteStyles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  btnCancelColor: {
    backgroundColor: theme.colors.light10,
  },
  subButtonContainer: {
    marginTop: SPACING.md,
  },
  buttonContainer: {
    flexGrow: 1,
    justifyContent: "flex-end",
    marginBottom: 16,
    width: "90%",
    alignSelf: "center",
  },
  illustration: {
    alignItems: "center",
    marginBottom: 24,
  },
  txtDelete: {
    ...theme.textBold,
  },
  txtDeleteShop: {
    ...theme.textBold,
    marginVertical: SPACING.md,
    textAlign: "center",
    fontWeight: "500",
  },
  txtBtnCancel: {
    ...theme.textRegular,
    fontWeight: "700",
    color: theme.colors.dark20,
  },
  txtDeleteShopPar: {
    ...theme.textRegular,
    paddingHorizontal: 14,
    textAlign: "center",
    color: theme.colors.dark30,
    fontWeight: "400",
  },
  spacer: {
    marginTop: SPACING.xl,
  },
});

export default ShopDeleteStyles;

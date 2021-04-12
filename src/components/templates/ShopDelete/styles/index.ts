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
    marginLeft: "5%",
    marginRight: "5%",
  },
  btnCancelColor: {
    backgroundColor: theme.colors.light10,
  },
  subButtonContainer: {
    marginTop: SPACING.md,
  },
  buttonContainer: {
    position: "relative",
    top: 55,
  },
  txtDeleteShop: {
    ...theme.textBold,
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
    paddingHorizontal: SPACING.sm,
    textAlign: "center",
    color: theme.colors.dark30,
    fontWeight: "400",
  },
  spacer: {
    marginTop: SPACING.xl,
  },
});

export default ShopDeleteStyles;

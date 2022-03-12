/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme, DIMENS, SPACING } from "@app/styles";

const ShopSettingsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.light5,
  },
  avatarContainer: {
    position: "absolute",
    top: DIMENS.screenHeight * 0.15,
    left: DIMENS.screenWidth * 0.038,
  },
  txtHeader: {
    ...theme.textBold,
    fontWeight: "700",
  },
  txtBtnDelete: {
    ...theme.textRegular,
    fontWeight: "700",
    color: theme.colors.dark20,
  },
  txtBtnAddShop: {
    ...theme.textRegular,
    fontWeight: "700",
    color: theme.colors.white,
  },
  spacer: {
    marginTop: SPACING.xl * 2.5,
  },
  mainButtonContainer: {
    position: "absolute",
    bottom: "4%",
    width: "90%",
    alignSelf: "center",
  },
  btnAddShop: {
    backgroundColor: theme.colors.primary,
  },
  subButtonContainer: {
    backgroundColor: theme.colors.light10,
  },
  txtSave: {
    ...theme.textRegular,
    color: theme.colors.primary,
    fontWeight: "400",
  },
  txtSaveDisabled: {
    ...theme.textRegular,
    color: theme.colors.dark10,
    fontWeight: "400",
  },
  listStart: {
    alignItems: "flex-start",
  },
  flexRow: {
    flexDirection: "row",
  },
  addressLabel: {
    ...theme.textBold,
    fontWeight: "500",
    marginBottom: 4,
  },
  txtSubAddress: {
    ...theme.textLight,
    fontWeight: "400",
    marginBottom: 4,
  },
});

export default ShopSettingsStyles;

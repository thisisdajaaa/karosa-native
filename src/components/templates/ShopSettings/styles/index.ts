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
  txtSave: {
    ...theme.textRegular,
    color: theme.colors.dark10,
    fontWeight: "400",
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
  subButtonContainer: {
    backgroundColor: theme.colors.light10,
  },
});

export default ShopSettingsStyles;

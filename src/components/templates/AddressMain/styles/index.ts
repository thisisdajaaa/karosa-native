/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { DIMENS, theme } from "@app/styles";

const AddressMainTemplateStyles = StyleSheet.create({
  txtHeader: {
    ...theme.textBold,
    fontWeight: "700",
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
  txtDefault: {
    ...theme.textBold,
    color: theme.colors.gold5,
    fontWeight: "500",
    marginLeft: 4,
  },
  footer: {
    position: "absolute",
    bottom: "2%",
    width: "90%",
    alignSelf: "center",
  },
  container: {
    flex: 1,
    position: "relative",
  },
  noAddressView: {
    height: DIMENS.screenHeight / 1.5,
    alignItems: "center",
    justifyContent: "center",
  },
  noAddressTextStyle: {
    ...theme.textRegular,
    marginTop: 20,
  },
  fullWidth: {
    width: "100%",
  },
  listStart: {
    alignItems: "flex-start",
  },
  flexRow: {
    flexDirection: "row",
  },
  txtDelete: {
    ...theme.textRegular,
    color: theme.colors.white,
    marginTop: 8,
  },
  btnDeleteContainer: {
    backgroundColor: theme.colors.red5,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AddressMainTemplateStyles;

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
  subContainer: {
    backgroundColor: theme.colors.white,
    marginBottom: 10,
  },
  listContainer: {
    alignItems: "center",
  },
  infoContainerWithoutChevron: {
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
  addressDetailsContainer: {
    marginTop: 5,
  },
  footer: {
    position: "absolute",
    bottom: "2%",
    width: "90%",
    alignSelf: "center",
  },
  scrollviewContainer: {
    height: DIMENS.screenHeight * 0.93,
  },
  viewFlex: {
    flex: 1,
  },
  noAddressView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  noAddressTextStyle: {
    marginTop: 20,
  },
  fullWidth: {
    width: "100%",
  },
});

export default AddressMainTemplateStyles;

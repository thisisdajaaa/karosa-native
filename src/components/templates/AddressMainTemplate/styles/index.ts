/**
 *
 * @format
 *
 */

import { theme } from "@app/styles";
import { Dimensions, StyleSheet } from "react-native";

const AddressMainTemplateStyles = StyleSheet.create({
  subContainer: {
    backgroundColor: theme.colors.white,
    marginBottom: 10,
  },
  listContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  infoContainerWithoutChevron: {
    flexDirection: "column",
  },
  addressLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  addressDetailsContainer: {
    marginTop: 5,
  },
  footer: {
    flex: 3,
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    width: "100%",
    margin: 10,
    justifyContent: "center",
  },
  scrollviewContainer: {
    height: 0.93 * Dimensions.get("window").height,
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

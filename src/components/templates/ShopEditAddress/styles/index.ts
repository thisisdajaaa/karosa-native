/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const ShopEditAddressStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: "2%",
    width: "90%",
    alignSelf: "center",
  },
  txtHeader: {
    ...theme.textBold,
    fontWeight: "700",
  },
  spacer: {
    marginTop: "20%",
    marginBottom: "20%",
  },
});

export default ShopEditAddressStyles;

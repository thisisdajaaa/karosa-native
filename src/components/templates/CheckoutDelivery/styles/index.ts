/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { SPACING, theme } from "@app/styles";

const CheckoutDeliveryStyles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    height: 27,
  },
  txtProductStatus: {
    ...theme.textBold,
    marginVertical: SPACING.md,
    textAlign: "center",
    fontWeight: "500",
  },
  txtLabel: { ...theme.textRegular, fontWeight: "400" },
  spacer: {
    marginTop: SPACING.md,
  },
  buttonContainer: {
    marginTop: SPACING.md,
    marginLeft: "5%",
    marginRight: "5%",
  },
});

export default CheckoutDeliveryStyles;

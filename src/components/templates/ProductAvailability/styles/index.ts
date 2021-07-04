/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { SPACING, theme } from "@app/styles";

const ProductAvailabilityStyles = StyleSheet.create({
  txtProductAvailability: {
    ...theme.textBold,
    marginVertical: SPACING.md,
    textAlign: "center",
    fontWeight: "500",
  },
  spacer: {
    marginTop: SPACING.xl,
  },
  availabilityContainer: { marginLeft: "5%", marginRight: "5%" },
  buttonContainer: {
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "15%",
  },
});

export default ProductAvailabilityStyles;

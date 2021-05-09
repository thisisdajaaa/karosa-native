/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { SPACING, theme } from "@app/styles";

const ProductMeasurementStyles = StyleSheet.create({
  container: { marginLeft: "5%", marginRight: "5%" },
  txtProductMeasurement: {
    ...theme.textBold,
    marginVertical: SPACING.md,
    textAlign: "center",
    fontWeight: "500",
  },
  spacer: {
    marginTop: SPACING.xl,
  },
  buttonContainer: {
    marginLeft: "5%",
    marginRight: "5%",
  },
});

export default ProductMeasurementStyles;

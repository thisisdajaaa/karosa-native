/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const DiscountCouponStyles = StyleSheet.create({
  container: {
    alignContent: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
  },
  discountContainer: {
    position: "absolute",
    flexWrap: "wrap",
    left: "9%",
  },
  txtDiscount: {
    ...theme.textTitle,
    color: theme.colors.primary,
    textAlign: "center",
    fontWeight: "500",
  },
  detailsContainer: {
    position: "absolute",
    left: "42%",
    top: "20%",
    flexDirection: "column",
  },
  txtDetailsLight: {
    ...theme.textLight,
    color: theme.colors.dark20,
    fontWeight: "300",
  },
  txtMinSpend: {
    ...theme.textLightBold,
    color: theme.colors.dark20,
    fontWeight: "700",
  },
  bottomContainer: {
    flexDirection: "row",
  },
  btnMainContainer: {
    width: 49,
    position: "relative",
    bottom: 15,
    left: 5,
  },
  btnSubContainer: {
    height: 32,
    borderRadius: 3,
  },
  txtButton: {
    ...theme.textLight,
    textAlign: "center",
    fontWeight: "700",
  },
});

export default DiscountCouponStyles;

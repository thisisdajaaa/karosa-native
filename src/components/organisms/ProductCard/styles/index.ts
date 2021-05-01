/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme, DIMENS, SPACING } from "@app/styles";

const ProductCardStyles = StyleSheet.create({
  mainContainer: {
    height: DIMENS.screenHeight * 0.4,
    width: DIMENS.screenWidth * 0.4,
    padding: 0,
    shadowOpacity: 0.03,
    shadowOffset: { height: 2, width: 1 },
    shadowColor: theme.colors.black,
  },
  wholesaleContainer: {
    backgroundColor: theme.colors.primary,
    height: DIMENS.screenHeight * 0.028,
    width: DIMENS.screenWidth * 0.18,
    position: "absolute",
    zIndex: 1,
    top: 3,
    right: 93,
  },
  ribbonContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 1,
  },
  bottomContentContainer: {
    paddingTop: SPACING.xss,
    paddingLeft: SPACING.sm,
    paddingRight: SPACING.sm,
  },
  rowContainer: {
    flexDirection: "row",
    marginVertical: SPACING.xs,
  },
  buttonContainer: {
    position: "absolute",
    bottom: -43,
    alignSelf: "center",
  },
  prevPriceContainer: {
    marginLeft: SPACING.xs,
  },
  floatRight: { alignSelf: "center", marginLeft: "auto" },
  buttonContent: {
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.primary,
    minWidth: 124,
    width: 91,
    height: 32,
    padding: 0,
    borderWidth: 2,
  },
  txtButton: {
    ...theme.textLight,
    fontWeight: "700",
    color: theme.colors.primary,
  },
  txtPrice: {
    ...theme.textBold,
    fontWeight: "500",
    fontStyle: "normal",
  },
  txtLocation: {
    ...theme.textLight,
    color: theme.colors.dark30,
    fontWeight: "300",
    fontStyle: "normal",
  },
  txtPrevPrice: {
    ...theme.textRegular,
    color: theme.colors.dark10,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    textDecorationColor: theme.colors.dark10,
    fontWeight: "300",
    fontStyle: "normal",
  },
  txtSold: {
    ...theme.textLight,
    fontWeight: "300",
    fontStyle: "normal",
  },
  txtWholesale: {
    ...theme.textLightBold,
    color: theme.colors.white,
    textAlign: "center",
    marginTop: SPACING.xss,
  },
  txtName: {
    ...theme.textRegular,
    fontWeight: "400",
    fontStyle: "normal",
  },
  image: {
    width: "100%",
    height: DIMENS.screenHeight * 0.22,
  },
});

export default ProductCardStyles;

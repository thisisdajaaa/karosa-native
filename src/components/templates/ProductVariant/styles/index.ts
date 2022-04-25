/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { SPACING, theme } from "@app/styles";

const ProductVariantStyles = StyleSheet.create({
  title: {
    ...theme.textBold,
    marginVertical: SPACING.md,
    textAlign: "center",
    fontWeight: "500",
  },
  spacer: {
    marginTop: SPACING.xl,
  },
  content: {
    paddingHorizontal: 12,
  },
  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 14,
  },
  unitsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 14,
    marginBottom: 18,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
  },
  txtQuantity: {
    ...theme.textSemiBold,
    fontWeight: "500",
    marginRight: 12,
  },
  txtQuantityValue: {
    ...theme.textRegular,
    color: theme.colors.dark10,
    fontWeight: "500",
  },
  quantityContent: {
    marginLeft: "auto",
  },
  selectedItem: {
    marginTop: 14,
    flexDirection: "row",
  },
  image: {
    height: 100,
    width: 100,
  },
  priceContainer: {
    flexDirection: "column",
    marginLeft: 14,
  },
  txtPrice: {
    ...theme.textTitle,
    color: theme.colors.primary,
    fontWeight: "500",
  },
  txtPrevPrice: {
    ...theme.textRegular,
    color: theme.colors.dark10,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    textDecorationColor: theme.colors.dark10,
    fontWeight: "300",
    marginTop: 12,
  },
  txtSelected: {
    ...theme.textRegular,
    marginTop: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 14,
    justifyContent: "space-between",
  },
  btnAddBasket: {
    paddingVertical: 24,
    paddingHorizontal: 64,
    minWidth: 160,
    backgroundColor: theme.colors.light10,
  },
  txtAddBasket: {
    ...theme.textLightBold,
    color: theme.colors.black,
    position: "absolute",
  },
  btnBuy: {
    paddingVertical: 24,
    paddingHorizontal: 64,
    minWidth: 160,
  },
  txtBuy: {
    ...theme.textLightBold,
    position: "absolute",
  },
});

export const VariantImageStyles = StyleSheet.create({
  container: {
    margin: 4,
    overflow: "hidden",
    alignSelf: "flex-start",
  },
  selected: {
    borderColor: theme.colors.primary,
    borderWidth: 1,
    borderRadius: 5,
    padding: 2,
  },
  wrapper: {
    position: "relative",
    width: 78,
  },
  textContainer: {
    backgroundColor: theme.colors.dark20,
    opacity: 0.6,
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 2,
    padding: 4,
    width: "100%",
    justifyContent: "center",
  },
  txtItem: {
    ...theme.textLight,
    color: theme.colors.white,
    textAlign: "center",
  },
  image: {
    height: 78,
    width: 78,
    zIndex: 1,
  },
});

export default ProductVariantStyles;

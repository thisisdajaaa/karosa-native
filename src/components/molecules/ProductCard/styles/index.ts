/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const ProductCardStyles = StyleSheet.create({
  wholesaleContainer: {
    backgroundColor: theme.colors.primary,
    height: 18,
    width: 66,
    position: "absolute",
    zIndex: 1,
    top: 3,
    right: 93,
  },
  discount: {
    position: "absolute",
    right: 0,
    zIndex: 1,
  },
  discountContainer: {
    width: 30,
    height: 37,
    backgroundColor: theme.colors.orange10,
    zIndex: 1,
  },
  txtWholesale: {
    ...theme.textLight,
    fontWeight: "700",
    color: "white",
    textAlign: "center",
    marginTop: 2,
  },
  txtDiscount: {
    ...theme.textLight,
    fontWeight: "700",
    color: theme.colors.white,
    textAlign: "center",
    marginTop: 2,
  },
  space: {
    marginTop: 1,
    marginBottom: 1,
  },
  triangleLeft: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 20,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: theme.colors.orange10,
    transform: [{ rotate: "90deg" }],
    position: "absolute",
    top: 24,
  },
  triangleRight: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 20,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: theme.colors.orange10,
    transform: [{ rotate: "-90deg" }],
    position: "absolute",
    top: 24,
    right: 0,
  },
  image: { width: "100%", height: 140 },
  mainTxtContainer: {
    paddingTop: 3,
    paddingLeft: 7,
    paddingRight: 7,
  },
  txtContainer: {
    flexDirection: "row",
  },
  txtName: {
    ...theme.textRegular,
    fontWeight: "400",
    fontStyle: "normal",
  },
  txtPrice: {
    ...theme.textRegular,
    marginTop: 7,
    fontWeight: "500",
    fontStyle: "normal",
  },
  txtPrevPrice: {
    ...theme.textRegular,
    color: theme.colors.dark10,
    marginTop: 7.2,
    marginLeft: 6,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    textDecorationColor: theme.colors.dark10,
    fontWeight: "300",
    fontStyle: "normal",
  },
  txtSold: {
    ...theme.textLight,
    marginTop: 9,
    marginLeft: "auto",
    fontWeight: "300",
    fontStyle: "normal",
  },
  txtLocation: {
    ...theme.textLight,
    color: theme.colors.dark30,
    fontWeight: "300",
    marginTop: 9,
    fontStyle: "normal",
  },
  heart: {
    marginLeft: "auto",
    marginTop: 9,
    color: theme.colors.dark10,
    fontSize: 15,
  },
});

export default ProductCardStyles;

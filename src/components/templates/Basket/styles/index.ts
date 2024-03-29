/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const BasketStyles = StyleSheet.create({
  txtHeader: {
    ...theme.textBold,
    fontWeight: "700",
  },
  container: {
    flex: 1,
    position: "relative",
  },
  listFooter: {
    marginVertical: 8,
  },
  basketFooterContainer: {
    marginTop: 12,
  },
  txtVoucherInfo: {
    ...theme.textRegular,
    color: theme.colors.dark10,
  },
  txtVoucher: {
    ...theme.textRegular,
  },
  bottomFooterContainer: {
    height: 64,
    justifyContent: "flex-end",
  },
  flexColumn: {
    flexDirection: "column",
  },
  txtSubTotal: {
    ...theme.textRegular,
    fontWeight: "700",
  },
  txtTotal: {
    ...theme.textSemiBold,
    color: theme.colors.primary,
    textAlign: "right",
  },
  btnCheckout: {
    paddingVertical: 24,
    paddingHorizontal: 64,
  },
  txtBtnCheckout: {
    ...theme.textLightBold,
    position: "absolute",
  },
  storeIcon: {
    marginHorizontal: 8,
  },
  txtStoreName: {
    ...theme.textSemiBold,
    fontWeight: "500",
  },
  btnDeleteContainer: {
    backgroundColor: theme.colors.red5,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  txtDelete: {
    ...theme.textRegular,
    color: theme.colors.white,
    marginTop: 8,
  },
  basketItemBaseContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  basketImageContainer: {
    marginLeft: 10,
  },
  basketImage: {
    height: 75,
    width: 75,
  },
  basketItemColumnContainer: {
    marginLeft: 10,
    flexDirection: "column",
    width: "60%",
  },
  txtBasketItem: {
    ...theme.textRegular,
    fontWeight: "400",
    marginBottom: 8,
  },
  quantityPriceContainer: {
    flexDirection: "row",
    marginTop: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  priceContainer: {
    marginLeft: "auto",
    marginRight: 68,
  },
  txtPrice: {
    ...theme.textSemiBold,
    color: theme.colors.primary,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "20%",
    paddingHorizontal: 64,
  },
  empty: {
    marginBottom: 32,
  },
  txtEmpty: {
    ...theme.textRegular,
    textAlign: "center",
    fontWeight: "400",
  },
  btnShopping: {
    borderRadius: 100,
  },
  shoppingContainer: {
    width: "100%",
    borderRadius: 100,
    marginTop: 32,
  },
  txtShopping: {
    ...theme.textBold,
    fontWeight: "700",
  },
});

export default BasketStyles;

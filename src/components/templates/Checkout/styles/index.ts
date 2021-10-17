/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const CheckoutStyles = StyleSheet.create({
  txtHeader: {
    ...theme.textBold,
    fontWeight: "700",
  },
  container: {
    flex: 1,
    position: "relative",
  },
  addressContainer: {
    backgroundColor: theme.colors.gold15,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 24,
  },
  addressRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  txtDeliveryAddress: {
    ...theme.textSemiBold,
    position: "relative",
    left: 10,
    fontWeight: "400",
  },
  defaultContainer: {
    marginLeft: "auto",
    flexDirection: "row",
    alignItems: "center",
  },
  txtDefault: {
    ...theme.textRegular,
    color: theme.colors.primary,
  },
  addressSubContainer: {
    position: "relative",
    paddingLeft: 34,
    marginTop: 18,
  },
  txtName: {
    ...theme.textRegular,
  },
  txtAddress: {
    ...theme.textRegular,
    color: theme.colors.dark30,
  },
  seeAllContainer: {
    left: 12,
  },
  txtSeeAll: {
    color: theme.colors.primary,
  },
  paymentMethodContainer: {
    top: -5,
    marginBottom: 12,
  },
  paymentList: {
    marginBottom: 12,
  },
  paymentListContainer: {
    flexDirection: "column",
    alignItems: "stretch",
  },
  paymentListSubContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  paymentListLastContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  txtPaymentList: {
    ...theme.textSemiBold,
  },
  totalContainer: {
    height: 64,
    justifyContent: "flex-end",
  },
  flexColumn: {
    flexDirection: "column",
  },
  txtTotal: {
    ...theme.textRegular,
    fontWeight: "700",
    textAlign: "right",
  },
  txtFinalTotal: {
    ...theme.textSemiBold,
    color: theme.colors.primary,
    textAlign: "right",
  },
  btnPlaceOrder: {
    paddingVertical: 16,
    paddingHorizontal: 48,
  },
  txtPlaceOrder: {
    ...theme.textLightBold,
  },
  storeNameContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  basketIcon: {
    marginHorizontal: 8,
  },
  txtStoreName: {
    ...theme.textSemiBold,
    fontWeight: "500",
  },
  storeItemColumn: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  storeItemRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  orderImageContainer: {
    marginLeft: 24,
  },
  orderImage: {
    height: 75,
    width: 75,
  },
  orderNameContainer: {
    marginLeft: 10,
    flexDirection: "column",
    width: "60%",
  },
  txtOrderName: {
    ...theme.textRegular,
    fontWeight: "400",
    marginBottom: 8,
  },
  pickerLabelContainer: {
    flexDirection: "row",
    marginBottom: 8,
  },
  txtOrderItem: {
    ...theme.textRegular,
    fontWeight: "400",
    color: theme.colors.dark30,
  },
  txtOrderPrice: {
    ...theme.textSemiBold,
    color: theme.colors.primary,
  },
  orderItemTotalContainer: {
    marginBottom: 12,
  },
  orderItemTotalRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  txtOrderItemTotal: {
    ...theme.textRegular,
    fontWeight: "400",
    marginLeft: 8,
  },
  txtOrderItemTotalValue: {
    ...theme.textSemiBold,
    color: theme.colors.primary,
  },
});

export default CheckoutStyles;

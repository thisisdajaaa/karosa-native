/**
 *
 * @format
 *
 */
import { StyleSheet } from "react-native";
import { theme } from "@app/styles";
import { Dimensions } from "react-native";

const ProductDetailStyles = StyleSheet.create({
  varietyImage: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  scrollviewContainer: {
    height: 0.93 * Dimensions.get("window").height,
  },
  rowContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  sellerImage: {
    height: 50,
    width: 50,
    borderRadius: 30,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
  txtSellerInfo: {
    ...theme.textRegular,
    color: theme.colors.orange10,
  },
  txtLight: {
    ...theme.textLight,
    color: theme.colors.black,
  },
  horizontalContainer: {
    backgroundColor: theme.colors.white,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: "center",
  },
  ratingContainer: {
    paddingHorizontal: 16,
    flex: 3,
  },
  txtBlackRegular: {
    ...theme.textRegular,
  },
  txtBlackRegularBold: {
    ...theme.textBold,
  },
  iconStyleEllipsis: {
    position: "absolute",
    alignSelf: "flex-end",
    marginHorizontal: 10,
  },
  ratingIconStyle: {
    width: 15,
    height: 15,
  },
  footer: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
    backgroundColor: theme.colors.white5,
  },
  subFooterCart: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    backgroundColor: theme.colors.grey5,
    borderRadius: 5,
  },
  subFooterChat: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    backgroundColor: theme.colors.white5,
  },
  subFooterBuy: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    borderRadius: 5,
    backgroundColor: theme.colors.green10,
  },
  button: {
    width: "100%",
    flexDirection: "column",
    padding: 8,
    marginHorizontal: 1,
    alignItems: "center",
  },
  green: {
    backgroundColor: theme.colors.green10,
  },
  orangeBox: {
    backgroundColor: theme.colors.orange10,
    justifyContent: "center",
  },
  subContainer: {
    backgroundColor: theme.colors.white,
    flex: 1,
    marginBottom: 10,
  },
  productImage: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    backgroundColor: theme.colors.white,
    flex: 1,
  },
  txtPrice: {
    ...theme.textRegular,
    color: theme.colors.green10,
  },
  sellerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  txtNameAddress: {
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 8,
  },
  reviewSeller: {
    alignItems: "center",
    flex: 1,
  },
  txtSold: {
    margin: 10,
  },
  txtGreen: {
    color: theme.colors.green10,
  },
  txtWhite: {
    color: theme.colors.white,
  },
  iconStyle: {
    height: 16,
  },
  buyerGallery: {
    flexDirection: "row",
    margin: 8,
  },
  productRatingMain: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productRatingSub: {
    justifyContent: "center",
    marginHorizontal: 8,
  },
  buyerGallerySection: {
    marginHorizontal: 8,
  },

  imageWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  image: {
    flex: 1,
  },
  modalTitle: {
    ...theme.textTitle,
    fontWeight: "400",
  },
  btnGrpViewContainer: {
    flexDirection: "row",
    backgroundColor: theme.colors.white,
  },
  btnContainer: {
    flex: 1,
  },
  txtMuted: {
    color: theme.colors.dark10,
  },
  horizontalRatingContainer: {
    backgroundColor: theme.colors.white,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: "center",
  },
  variationTitle: {
    ...theme.textBold,
  },
  flexView: {
    flex: 1,
  },
  viewTextStyle: {
    justifyContent: "flex-end",
    height: "33%",
    bottom: 0,
  },
  textStyle: { fontSize: 12, fontWeight: "bold" },
  mainContainerStyle: {
    borderWidth: 3,
    borderColor: theme.colors.green5,
    borderRadius: 3,
  },
  variatonContainerStyle1: {
    borderColor: theme.colors.green5,
    borderWidth: 2,
    paddingLeft: 20,
    paddingRight: 20,
    margin: 5,
  },
  variatonContainerStyle2: {
    borderColor: theme.colors.light10,
    backgroundColor: theme.colors.light10,
    borderWidth: 2,
    paddingLeft: 20,
    paddingRight: 20,
    margin: 5,
  },
  buttonTitleStyleDefault: {
    fontSize: 12,
    color: theme.colors.black,
  },
  buttonTitleStyleSelected: {
    fontSize: 12,
    color: theme.colors.green5,
  },
  filterButtonBorder1: {
    borderColor: theme.colors.green5,
    borderWidth: 2,
    paddingLeft: 20,
    paddingRight: 20,
  },
  filterButtonBorder2: {
    borderColor: theme.colors.light10,
    backgroundColor: theme.colors.light10,
    borderWidth: 2,
    paddingLeft: 20,
    paddingRight: 20,
  },
  padding10: { padding: 10 },
  textMargin: { marginRight: 30 },
  customButtonStyle1: {
    backgroundColor: theme.colors.light10,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 8,
  },
  stockText: {
    marginRight: 20,
    marginLeft: 20,
    alignContent: "center",
    top: 10,
    fontSize: 20,
  },
  customButtonStyle2: {
    backgroundColor: theme.colors.light10,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 8,
  },
  priceText: {
    textDecorationLine: "line-through",
    textDecorationStyle: "double",
  },
  modalContainerStyle: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  modalButtonStyle: {
    backgroundColor: theme.colors.light10,
    paddingRight: 40,
    paddingLeft: 40,
  },
  modalTitleStyle: {
    color: theme.colors.black,
    textAlign: "center",
  },
  buttonPadding: {
    paddingRight: 50,
    paddingLeft: 50,
  },
  titleCenter: {
    textAlign: "center",
  },
});

export default ProductDetailStyles;

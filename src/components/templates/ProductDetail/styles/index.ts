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
    flex: 3,
    flexDirection: "row",
  },
  subFooterContainer: {
    flex: 1,
    width: "100%",
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
});

export default ProductDetailStyles;

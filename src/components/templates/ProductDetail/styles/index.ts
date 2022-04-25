/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { DIMENS, theme } from "@app/styles";

export const ProductActionStyles = StyleSheet.create({
  spacer: {
    marginVertical: 6,
  },
  discountInfo: {
    ...theme.textRegular,
    color: theme.colors.primary,
  },
  txtSemiBold: {
    ...theme.textSemiBold,
  },
  variationContainer: { flexDirection: "column", alignItems: "stretch" },
  txtVariationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  chevron: {
    color: theme.colors.primary,
  },
  overlayContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    paddingTop: 14,
    paddingBottom: 4,
  },
});

export const ProductDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: theme.colors.transparent,
  },
  flexRow: {
    flexDirection: "row",
  },
  iconMargin: {
    marginRight: 16,
  },
  recommendationsContainer: {
    backgroundColor: theme.colors.white,
    marginVertical: 12,
    padding: 14,
  },
  txtRecommendations: { ...theme.textSemiBold, marginBottom: 16 },
  productListContainer: {
    marginBottom: 24,
    paddingHorizontal: 4,
  },
  itemContainer: {
    marginRight: 8,
  },
  spacer: {
    height: 50,
  },
});

export const ProductFooterStyles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  listContainer: {
    justifyContent: "flex-end",
    flexDirection: "row",
    paddingBottom: 22,
  },
  leftContainer: {
    marginRight: "auto",
    paddingLeft: 14,
  },
  chat: {
    marginLeft: "8%",
  },
  txtChat: {
    ...theme.textLight,
    color: theme.colors.dark30,
  },
  btnAddBasket: {
    paddingVertical: 24,
    paddingHorizontal: 64,
    backgroundColor: theme.colors.light10,
  },
  txtAddBasket: {
    ...theme.textLightBold,
    color: theme.colors.black,
    position: "absolute",
  },
  btnBuyNow: {
    paddingVertical: 24,
    paddingHorizontal: 64,
  },
  txtBuyNow: {
    ...theme.textLightBold,
    position: "absolute",
  },
});

export const ProductHeaderStyles = StyleSheet.create({
  image: {
    width: DIMENS.screenWidth,
    height: 320,
    resizeMode: "cover",
  },
  container: {
    position: "relative",
    overflow: "hidden",
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: theme.colors.transparent,
    zIndex: 1,
  },
  flexRow: {
    flexDirection: "row",
  },
  icon: {
    marginRight: 16,
  },
  paginationContainer: {
    position: "absolute",
    flexDirection: "column-reverse",
    height: "100%",
    alignSelf: "center",
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: theme.colors.white,
  },
  infoContainer: {
    backgroundColor: theme.colors.white,
    padding: 16,
  },
  txtName: { ...theme.textTitle, fontWeight: "500" },
  priceContainer: {
    flexDirection: "row",
    marginTop: 24,
    justifyContent: "space-between",
    alignItems: "center",
  },
  txtPrice: {
    ...theme.textTitle,
    fontWeight: "500",
    color: theme.colors.primary,
  },
  txtSold: {
    ...theme.textRegular,
    fontWeight: "400",
    color: theme.colors.dark30,
  },
  bottomContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  ratingsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  txtRating: {
    ...theme.textRegular,
    marginLeft: 8,
    fontWeight: "400",
    color: theme.colors.dark30,
  },
});

export const ProductInformationStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 14,
    marginTop: 12,
  },
  txtDetails: {
    ...theme.textSemiBold,
    marginBottom: 18,
  },
  listContainer: {
    paddingHorizontal: 0,
  },
  txtRegular: {
    ...theme.textRegular,
  },
  txtValue: {
    ...theme.textRegular,
    color: theme.colors.primary,
  },
  info: { ...theme.textRegular, color: theme.colors.primary },
  expandableContainer: {
    paddingHorizontal: 0,
    paddingBottom: 0,
  },
  txtReadMore: {
    ...theme.textRegular,
    color: theme.colors.primary,
  },
});

export const ProductRatingsStyles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  listContainer: {
    flexDirection: "column",
    alignItems: "stretch",
  },
  firstContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  txtRatings: {
    ...theme.textSemiBold,
    marginRight: 4,
  },
  txtRatingValue: {
    ...theme.textSemiBold,
    color: theme.colors.dark30,
  },
  txtSee: {
    ...theme.textRegular,
    color: theme.colors.primary,
    marginLeft: "auto",
  },
  chevron: {
    color: theme.colors.primary,
  },
  secondContent: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingTop: 8,
  },
});

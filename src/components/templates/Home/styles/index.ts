/**
 *
 * @format
 *
 */

import { StyleSheet, Dimensions } from "react-native";
import { DIMENS, SPACING, theme } from "@app/styles";

export const HomeStyles = StyleSheet.create({
  txtHeader: {
    ...theme.textBold,
    fontWeight: "700",
  },
  flexHome: {
    flex: 1,
  },
  scrollviewContainer: {
    height: 0.93 * Dimensions.get("window").height,
  },
  subContainer: {
    backgroundColor: theme.colors.white,
    flex: 1,
    marginBottom: 10,
  },
  lastSectionContainer: {
    flex: 1,
    marginBottom: 10,
  },
  categoryTextStyle: {
    ...theme.textRegular,
    color: theme.colors.dark20,
    fontWeight: "400",
  },
  productImage: {
    width: 300,
    height: 200,
    position: "absolute",
    alignSelf: "flex-end",
  },
  iconStyleEllipsis: {
    position: "absolute",
    alignSelf: "flex-end",
    marginHorizontal: 10,
  },
  categoriesCard: {
    margin: 10,
    alignItems: "center",
  },
  categoryCardStyle: {
    backgroundColor: theme.colors.light15,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginLeft: 0,
    marginRight: 14,
    marginBottom: 18,
    borderRadius: 10,
  },
  categoriesText: {
    ...theme.textLight,
    marginTop: 8,
  },
  searchBarContainer: {
    backgroundColor: theme.colors.light5,
    paddingTop: 0,
  },
  titleStyle: {
    ...theme.textRegular,
    width: DIMENS.screenWidth,
    fontWeight: "400",
  },
  infoStyle: {
    ...theme.textRegular,
    color: theme.colors.primary,
    fontWeight: "400",
  },
  row: {
    justifyContent: "space-evenly",
  },
  horizontalContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  trendingCard: {
    backgroundColor: theme.colors.white,
    padding: 16,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 3,
    borderWidth: 0.2,
    marginBottom: 12,
    borderColor: theme.colors.shadow,
    shadowOpacity: 0.2,
    shadowOffset: { height: 3.4, width: 0 },
  },
  txtTrendingSearch: {
    ...theme.textLightBold,
    fontWeight: "700",
  },
  txtTrendingProducts: {
    ...theme.textLight,
    fontWeight: "300",
    marginTop: 4,
  },
  contentContainer: {
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  productContainer: {
    marginRight: 8,
  },
  categoryContent: {
    padding: 8,
  },
  bannerContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 18,
  },
  mainCategories: {
    paddingHorizontal: 16,
  },
  wishlistIcon: {
    marginLeft: 20,
  },
  lastSection: {
    justifyContent: "space-between",
    marginBottom: 8,
    paddingHorizontal: 16,
  },
});

export const HeaderStyles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: theme.colors.white,
    height: 180,
  },
  avatarPhoto: {
    width: DIMENS.screenHeight * 0.15,
    height: DIMENS.screenHeight * 0.15,
    borderRadius: (DIMENS.screenHeight * 0.15) / 2,
    borderColor: theme.colors.white,
    borderWidth: 5,
  },
  avatarContainer: {
    position: "absolute",
    top: DIMENS.screenHeight * 0.14,
    left: DIMENS.screenWidth * 0.038,
    zIndex: 1,
  },
  coverPhoto: {
    // height: DIMENS.screenHeight * 0.22,
    height: 180,
  },
  headerContainer: { backgroundColor: theme.colors.transparent },
  chatIcon: {
    position: "absolute",
    left: 25,
  },
  cartIcon: {
    marginRight: 10,
  },
  txtChat: {
    ...theme.textLight,
    alignSelf: "center",
    position: "relative",
    left: 10,
    color: theme.colors.dark20,
    fontWeight: "700",
  },
  btnChat: {
    height: 32,
    borderRadius: 3,
    backgroundColor: theme.colors.light10,
  },
  personIcon: {
    position: "absolute",
    left: DIMENS.screenWidth * 0.05,
  },
  txtPerson: {
    ...theme.textLight,
    alignSelf: "center",
    position: "relative",
    left: DIMENS.screenWidth * 0.02,
    fontWeight: "700",
  },
  btnPerson: {
    height: 32,
    borderRadius: 3,
  },
  shopNameContainer: {
    marginTop: 10,
  },
  txtShopName: {
    ...theme.textBold,
    fontWeight: "500",
  },
  shopAddrContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
  txtShopAddr: {
    ...theme.textLight,
    fontWeight: "300",
  },
  activeContainer: {
    flexDirection: "row",
    marginLeft: SPACING.md,
  },
  activeIcon: {
    marginTop: SPACING.xs - 1,
  },
  txtIcon: {
    ...theme.textLightBold,
    marginLeft: SPACING.xs,
    fontWeight: "700",
  },
  bottomInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  ratingContainer: {
    flexDirection: "column",
  },
  txtBottomValue: {
    ...theme.textLightBold,
    fontWeight: "700",
  },
  txtBottomLabel: {
    ...theme.textLight,
    fontWeight: "300",
  },
  followersContainer: {
    flexDirection: "column",
  },
  chatPerformanceContainer: {
    flexDirection: "column",
  },
  buttonMainContainer: {
    flex: 1,
    width: DIMENS.screenWidth,
    flexDirection: "column",
    paddingLeft: 16,
    paddingRight: 16,
  },
  buttonSubContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  buttonContainer: {
    width: 100,
    marginRight: 10,
    marginTop: 15,
  },
  txtChatPerf: {
    marginLeft: 4,
  },
});

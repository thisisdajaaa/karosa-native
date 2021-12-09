/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { DIMENS, SPACING, theme } from "@app/styles";
import { Dimensions } from "react-native";

export const HomeStyles = StyleSheet.create({
  txtHeader: {
    ...theme.textBold,
    fontWeight: "700",
  },
  scrollviewContainer: {
    height: 0.93 * Dimensions.get("window").height,
  },
  subContainer: {
    backgroundColor: theme.colors.white,
    flex: 1,
    marginBottom: 10,
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
    alignContent: "center",
    alignItems: "center",
  },
  categoriesText: {
    width: "100%",
    fontSize: 12,
    textAlign: "center",
  },
  searchBarContainer: {
    backgroundColor: theme.colors.light5,
    paddingTop: 0,
  },
  infoStyle: {
    color: theme.colors.green5,
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
    margin: 10,
    backgroundColor: theme.colors.light15,
    width: 180,
    height: 80,
    flexDirection: "row",
    justifyContent: "center",
  },
});

export const HeaderStyles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: theme.colors.white,
    height: 150,
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
    height: 200,
  },
  headerContainer: { backgroundColor: theme.colors.transparent },
  chatIcon: {
    position: "absolute",
    left: 25,
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

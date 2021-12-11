/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { DIMENS, SPACING, theme } from "@app/styles";
import { ActiveLink } from "../types";

const ShopViewStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBarContainer: {
    top: 0,
    left: 0,
    right: 0,
    position: "absolute",
    zIndex: 1,
  },
  collapsedOvarlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.colors.white,
    justifyContent: "center",
    zIndex: 2,
  },
  headerContainer: {
    top: 0,
    left: 0,
    right: 0,
    position: "absolute",
    zIndex: 1,
  },
});

export const HeaderStyles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: theme.colors.white,
    paddingBottom: 12,
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
    height: DIMENS.screenHeight * 0.22,
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

export const HeaderOverlayStyles = StyleSheet.create({
  headerContainer: {
    backgroundColor: theme.colors.transparent,
  },
  searchbarContainer: {
    marginBottom: 15,
  },
});

export const ShopListStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.light5,
    flex: 1,
  },
  contentContainerStyle: {
    padding: 16,
  },
  couponContainer: {
    marginRight: 12,
  },
  txtInfo: {
    ...theme.textRegular,
    fontWeight: "400",
    color: theme.colors.primary,
  },
  columnWrapperStyle: {
    justifyContent: "space-evenly",
    paddingLeft: 18,
    paddingRight: 18,
  },
});

export const ProductListStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.light5,
    flex: 1,
    marginTop: 50,
  },
  primaryPadding: {
    paddingLeft: 24,
  },
  secondaryPadding: {
    paddingLeft: 31,
  },
  dropdownIconContainer: {
    position: "absolute",
    left: 40,
    top: 3,
  },
  columnWrapperContainer: {
    justifyContent: "space-evenly",
    paddingLeft: 18,
    paddingRight: 18,
  },
});

export const linkLabels = (activeLink: ActiveLink, currLink: ActiveLink) => {
  return StyleSheet.create({
    txtLink: {
      ...theme.textRegular,
      fontWeight: "400",
      color:
        activeLink === currLink ? theme.colors.primary : theme.colors.dark10,
    },
  });
};

export const dropdownStyle = (activeLink: ActiveLink, sortAsc: boolean) => {
  return StyleSheet.create({
    dropdownIcon: {
      fontSize: 15,
      color:
        activeLink === "Price" ? theme.colors.primary : theme.colors.dark35,
      transform: [
        { rotate: sortAsc && activeLink === "Price" ? "180deg" : "0deg" },
      ],
    },
  });
};

export const CategoryListStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.light5,
    flex: 1,
  },
});

export default ShopViewStyles;

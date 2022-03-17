/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { DIMENS, SPACING, theme } from "@app/styles";

const ProfileStyles = StyleSheet.create({
  container: {
    position: "relative",
  },
  flexRow: {
    flexDirection: "row",
  },
  profileContainer: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: 22,
  },
  spacer: {
    marginVertical: 32,
  },
  nameContainer: {
    maxWidth: 320,
    marginBottom: 10,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: -1,
  },
  coverPhoto: {
    height: DIMENS.screenHeight * 0.22,
  },
  headingIcon: {
    marginRight: 14,
  },
  headerContainer: { backgroundColor: theme.colors.transparent },
  avatarContainer: {
    position: "absolute",
    top: DIMENS.screenHeight * 0.14,
    left: DIMENS.screenWidth * 0.038,
    zIndex: 1,
  },
  statusBarSpacer: {
    margin: SPACING.xs - 1,
  },
  avatarPhoto: {
    width: DIMENS.screenHeight * 0.15,
    height: DIMENS.screenHeight * 0.15,
    borderRadius: (DIMENS.screenHeight * 0.15) / 2,
    borderColor: theme.colors.white,
    borderWidth: 5,
  },
  profileInfoContainer: {
    height: DIMENS.screenHeight * 0.23,
    backgroundColor: theme.colors.white,
    zIndex: 0,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.light10,
  },
  chatIcon: {
    position: "absolute",
    left: 25,
  },
  txtChat: {
    ...theme.textLight,
    alignSelf: "center",
    position: "absolute",
    left: 50,
    color: theme.colors.dark20,
    fontWeight: "700",
  },
  btnChat: {
    position: "absolute",
    top: 13,
    right: 145,
    width: DIMENS.screenWidth * 0.3,
    height: DIMENS.screenHeight * 0.05,
    borderRadius: 3,
    backgroundColor: theme.colors.light10,
  },
  personIcon: {
    position: "absolute",
    left: DIMENS.screenWidth * 0.05,
  },
  settingsIcon: {
    position: "absolute",
    left: DIMENS.screenWidth * 0.05,
  },
  txtPerson: {
    ...theme.textLight,
    alignSelf: "center",
    position: "absolute",
    left: DIMENS.screenWidth * 0.12,
    fontWeight: "700",
  },
  btnPerson: {
    position: "absolute",
    right: DIMENS.screenWidth * 0.06,
    top: DIMENS.screenHeight * 0.01,
    width: DIMENS.screenWidth * 0.3,
    height: DIMENS.screenHeight * 0.05,
    borderRadius: 3,
  },
  shopNameContainer: {
    position: "relative",
    paddingRight: 18,
    top: DIMENS.screenHeight * 0.085,
    left: DIMENS.screenWidth * 0.045,
  },
  shopAddressSubContainer: {
    width: "70%",
    flexDirection: "row",
    marginBottom: 10,
  },
  txtShopName: {
    ...theme.textBold,
    fontWeight: "500",
  },
  shopAddrContainer: {
    position: "relative",
    top: DIMENS.screenHeight * 0.1,
    left: DIMENS.screenWidth * 0.045,
    flexDirection: "row",
  },
  txtShopAddr: {
    ...theme.textLight,
    fontWeight: "300",
  },
  activeContainer: {
    flexDirection: "row",
    marginLeft: SPACING.md,
    alignItems: "center",
  },
  profileIcon: {
    marginRight: 4,
  },
  txtIcon: {
    ...theme.textLightBold,
    marginLeft: SPACING.xs,
    fontWeight: "700",
  },
  bottomInfoContainer: {
    marginLeft: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
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
  chatPerfSubContainer: {
    marginLeft: SPACING.xs,
  },
});

export default ProfileStyles;

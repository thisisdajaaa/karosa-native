/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { DIMENS, SPACING, theme } from "@app/styles";

const ProfileStyles = StyleSheet.create({
  coverPhoto: {
    height: DIMENS.screenHeight * 0.22,
  },
  headerContainer: { backgroundColor: theme.colors.transparent },
  avatarContainer: {
    position: "absolute",
    top: 105,
    left: 16,
    zIndex: 1,
  },
  statusBarSpacer: {
    margin: 3,
  },
  avatarPhoto: {
    width: DIMENS.screenWidth * 0.25,
    height: DIMENS.screenHeight * 0.15,
    borderRadius: 50,
    borderColor: theme.colors.white,
    borderWidth: 5,
  },
  profileInfoContainer: {
    height: 165,
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
    left: 20,
  },
  txtPerson: {
    ...theme.textLight,
    alignSelf: "center",
    position: "absolute",
    left: 45,
    fontWeight: "700",
  },
  btnPerson: {
    position: "absolute",
    right: 20,
    top: 13,
    width: DIMENS.screenWidth * 0.3,
    height: DIMENS.screenHeight * 0.05,
    borderRadius: 3,
  },
  shopNameContainer: {
    position: "absolute",
    bottom: 70,
    left: 24,
  },
  txtShopName: {
    ...theme.textBold,
    fontWeight: "500",
  },
  shopAddrContainer: {
    position: "absolute",
    bottom: 50,
    left: 24,
    flexDirection: "row",
  },
  txtShopAddr: {
    ...theme.textLight,
    fontWeight: "300",
  },
  activeContainer: {
    flexDirection: "row",
    marginLeft: SPACING.lg + 4,
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
    position: "absolute",
    bottom: 12,
    left: 24,
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
  followersPerfContainer: {
    flexDirection: "column",
    marginLeft: SPACING.lg * 3,
  },
});

export default ProfileStyles;

/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme, DIMENS, SPACING } from "@app/styles";

const ListChevronStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  txtListColor: {
    ...theme.textRegular,
    position: "absolute",
    left: 35,
    fontWeight: "400",
  },
  listColor: {
    position: "absolute",
    left: 0,
    fontSize: 30,
  },
  title: {
    ...theme.textRegular,
    fontWeight: "400",
  },
  txtAvatarTitle: {
    ...theme.textLight,
    color: theme.colors.dark20,
    fontWeight: "400",
  },
  txtInfo: {
    ...theme.textLight,
    color: theme.colors.dark30,
    fontWeight: "300",
    textAlign: "right",
  },
  txtSubtitle: {
    ...theme.textLight,
    color: theme.colors.dark30,
    fontWeight: "300",
  },
  txtRequired: {
    ...theme.textRegular,
    marginLeft: SPACING.xs,
    color: theme.colors.red5,
    fontWeight: "400",
  },
  avatarImg: {
    width: DIMENS.screenWidth * 0.1,
    height: DIMENS.screenHeight * 0.056,
    borderRadius: 50,
  },
  infoContainer: {
    position: "relative",
    left: 12,
  },
});

export default ListChevronStyles;

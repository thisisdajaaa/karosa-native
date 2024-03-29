/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme, SPACING } from "@app/styles";

const ListChevronStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  flexRow: {
    flexDirection: "row",
  },
  txtListColor: {
    ...theme.textListItem,
    position: "absolute",
    left: 35,
    fontWeight: "400",
  },
  listColor: {
    position: "absolute",
    left: 0,
    fontSize: 30,
  },
  icon: {
    position: "relative",
    left: 0,
  },
  title: {
    ...theme.textListItem,
    fontWeight: "400",
  },
  txtWithIcon: {
    ...theme.textListItem,
    position: "relative",
    left: 7,
    marginRight: 6,
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
    width: 32,
    height: 32,
    borderRadius: 100,
  },
  infoContainer: {
    position: "relative",
    left: 12,
    flexBasis: "40%",
  },
  infoSubtitleContainer: {
    position: "relative",
    left: 12,
    top: 3,
    alignSelf: "flex-start",
    flexBasis: "40%",
  },
  iconSubtitle: {
    alignSelf: "flex-start",
    top: -3,
  },
  txtSubtitleVariationOne: {
    ...theme.textLight,
    color: theme.colors.dark30,
    fontWeight: "300",
    position: "relative",
    left: 7,
    top: 4,
  },
  chevronSubtitleContainer: {
    alignSelf: "flex-start",
    top: 2,
  },
  infoContainerWithoutChevron: {
    position: "relative",
  },
});

export default ListChevronStyles;

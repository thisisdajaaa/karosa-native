/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme, DIMENS, SPACING } from "@app/styles";

const RibbonStyles = StyleSheet.create({
  baseContainer: {
    zIndex: 1,
  },
  textContainer: {
    width: DIMENS.screenWidth * 0.09,
    paddingTop: SPACING.xss,
    height: 37,
    backgroundColor: theme.colors.orange10,
    zIndex: 1,
  },
  text: {
    ...theme.textLightBold,
    fontWeight: "700",
    color: theme.colors.white,
    textAlign: "center",
    marginTop: 2,
  },
  invertTriangleLeft: {
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderLeftWidth: DIMENS.screenWidth * 0.03,
    borderRightWidth: DIMENS.screenWidth * 0.029,
    borderBottomWidth: DIMENS.screenWidth * 0.06,
    backgroundColor: theme.colors.transparent,
    borderLeftColor: theme.colors.transparent,
    borderRightColor: theme.colors.transparent,
    borderBottomColor: theme.colors.orange10,
    transform: [{ rotate: "90deg" }],
    position: "absolute",
    top: 24,
  },
  invertTriangleRight: {
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderLeftWidth: DIMENS.screenWidth * 0.029,
    borderRightWidth: DIMENS.screenWidth * 0.031,
    borderBottomWidth: DIMENS.screenWidth * 0.06,
    backgroundColor: theme.colors.transparent,
    borderLeftColor: theme.colors.transparent,
    borderRightColor: theme.colors.transparent,
    borderBottomColor: theme.colors.orange10,
    transform: [{ rotate: "-90deg" }],
    position: "absolute",
    top: 24,
    right: 0,
  },
});

export default RibbonStyles;

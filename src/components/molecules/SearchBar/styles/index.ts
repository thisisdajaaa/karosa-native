/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { DIMENS, theme } from "@app/styles";

import { BackgroundColorType, SizeType } from "../types";
import { getWidth, getBackgroundColor } from "../config";

const SearchBarStyles = (
  size: SizeType,
  backgroundColor: BackgroundColorType
) => {
  return StyleSheet.create({
    inputContainer: {
      height: DIMENS.screenHeight * 0.07,
      width: getWidth(size),
      backgroundColor: getBackgroundColor(backgroundColor),
    },
    mainContainer: {
      backgroundColor: theme.colors.transparent,
      borderTopColor: theme.colors.transparent,
      borderBottomColor: theme.colors.transparent,
    },
  });
};

export default SearchBarStyles;

/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

import { BackgroundColorType, SizeType } from "../types";
import { getWidth, getBackgroundColor } from "../config";

const SearchBarStyles = (
  size: SizeType,
  backgroundColor: BackgroundColorType
) => {
  return StyleSheet.create({
    inputContainer: {
      height: 42,
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

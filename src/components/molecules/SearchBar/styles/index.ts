/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";

import { BackgroundColorType, SizeType } from "../types";
import { getWidth, getBackgroundColor } from "../config";

const SearchBarStyles = (
  size: SizeType,
  backgroundColor: BackgroundColorType
) => {
  return StyleSheet.create({
    inputContainer: {
      backgroundColor: getBackgroundColor(backgroundColor),
    },
    mainContainer: {
      width: getWidth(size),
      paddingTop: 0,
      paddingBottom: 0,
      height: 40,
      position: "relative",
      top: -5,
    },
  });
};

export default SearchBarStyles;

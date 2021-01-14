/**
 *
 * @format
 *
 */

import { theme } from "@app/styles";

import { BackgroundColorType, SizeType } from "../types";

// will use dimensions for getting size, will rework
const defaultSize: Record<SizeType, number> = {
  sm: 222,
  md: 225,
  lg: 252,
};

export const getWidth = (size: SizeType): number => {
  switch (size) {
    case "md":
      return defaultSize.sm;
    case "lg":
      return defaultSize.lg;
    default:
      return defaultSize.sm;
  }
};

export const getBackgroundColor = (backgroundColor: BackgroundColorType) => {
  switch (backgroundColor) {
    case "secondary":
      return theme.colors.light10;
    default:
      return theme.colors.white;
  }
};

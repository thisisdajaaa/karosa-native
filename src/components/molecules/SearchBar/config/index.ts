/**
 *
 * @format
 *
 */

import { theme, DIMENS } from "@app/styles";

import { BackgroundColorType, SizeType } from "../types";

// will use dimensions for getting size, for rework
const defaultSize: Record<SizeType, number> = {
  sm: DIMENS.screenWidth * 0.8,
  md: DIMENS.screenWidth * 0.85,
  lg: DIMENS.screenWidth * 0.9,
};

export const getWidth = (size: SizeType): number => {
  switch (size) {
    case "md":
      return defaultSize.md;
    case "lg":
      return defaultSize.lg;
    default:
      return defaultSize.sm;
  }
};

export const getBackgroundColor = (
  backgroundColor: BackgroundColorType
): string => {
  switch (backgroundColor) {
    case "secondary":
      return theme.colors.light10;
    default:
      return theme.colors.white;
  }
};

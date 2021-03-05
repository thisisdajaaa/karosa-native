/**
 *
 * @format
 *
 */

import { PixelRatio, Platform } from "react-native";
import type { Orientation, PropsType } from "../types";

const isInInterval = (value: number, min?: number, max?: number): boolean =>
  (min === undefined || value >= min) && (max === undefined || value <= max);

export const mediaQuery = (
  {
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    minAspectRatio,
    maxAspectRatio,
    orientation,
    platform,
    minPixelRatio,
    maxPixelRatio,
    condition,
  }: PropsType,
  width: number,
  height: number
): boolean => {
  const currentOrientation: Orientation =
    width > height ? "landscape" : "portrait";

  return (
    isInInterval(width, minWidth, maxWidth) &&
    isInInterval(height, minHeight, maxHeight) &&
    isInInterval(width / height, minAspectRatio, maxAspectRatio) &&
    isInInterval(PixelRatio.get(), minPixelRatio, maxPixelRatio) &&
    (orientation === undefined || orientation === currentOrientation) &&
    (platform === undefined || platform === Platform.OS) &&
    (condition === undefined || condition)
  );
};

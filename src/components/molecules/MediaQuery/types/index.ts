/**
 *
 * @format
 *
 */

export type Orientation = "landscape" | "portrait";

export type PropsType = {
  minHeight?: number;
  maxHeight?: number;
  minWidth?: number;
  maxWidth?: number;
  minAspectRatio?: number;
  maxAspectRatio?: number;
  minPixelRatio?: number;
  maxPixelRatio?: number;
  orientation?: Orientation;
  condition?: boolean;
  platform?: string;
};

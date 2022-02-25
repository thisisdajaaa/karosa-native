/**
 *
 * @format
 *
 */

import { DIMENS } from "@app/styles";

export const MIN_ZOOM_LVL = 19;
export const ASPECT_RATIO = DIMENS.screenWidth / DIMENS.screenHeight;
export const LATITUDE_DELTA = 0.0922;
export const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export const DURATION = {
  LOW: 200,
  MID: 500,
  HIGH: 1000,
};

export const ICON_SIZE = {
  SM: 20,
  MD: 48,
};

/**
 *
 * Rating
 * @format
 *
 */

import React, { FC } from "react";
import { Rating as RnRating } from "react-native-elements";

import { defaultRatingCount } from "./config";
import type { PropsType } from "./types";

const Rating: FC<PropsType> = (props) => {
  const {
    ratingCount = defaultRatingCount,
    fractions,
    imageSize,
    minValue,
    onFinishRating,
    onStartRating,
    readonly,
    showRating,
    startingValue,
  } = props;

  return (
    <RnRating
      type="star"
      ratingCount={ratingCount}
      readonly={readonly}
      imageSize={imageSize}
      startingValue={startingValue}
      onFinishRating={onFinishRating}
      onStartRating={onStartRating}
      fractions={fractions}
      showRating={showRating}
      minValue={minValue}
    />
  );
};

export default Rating;

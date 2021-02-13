/**
 *
 * Rating
 * @format
 *
 */

import React, { FC } from "react";
import { Rating as RnRating } from "react-native-elements";

import type { PropsType } from "./types";
import { RATING_COUNT } from "./config";

const Rating: FC<PropsType> = (props) => {
  const {
    ratingCount = RATING_COUNT,
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

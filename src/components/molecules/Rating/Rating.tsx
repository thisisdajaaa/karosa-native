/**
 *
 * Rating
 * @format
 *
 */

import React, { FC, useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";

import type { PropsType } from "./types";
import RatingStyles from "./styles";

const Rating: FC<PropsType> = (props) => {
  const { rate } = props;
  const [defaultRating, setDefaultRating] = useState(rate);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const starImageFilled =
    "https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png";
  const starImageCorner =
    "https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png";

  return (
    <View style={RatingStyles.customRatingBarStyle}>
      {maxRating.map((item) => {
        return (
          <View>
            <Image
              style={RatingStyles.starImageStyle}
              source={
                item <= defaultRating
                  ? { uri: starImageFilled }
                  : { uri: starImageCorner }
              }
            />
          </View>
        );
      })}
    </View>
  );
};

export default Rating;

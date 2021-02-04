import React, { useState } from "react";

import { View, Image, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { Props } from "./types";

export const Rating: React.FC<Props> = ({ rate }) => {
  const [defaultRating, setDefaultRating] = useState(rate);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const starImageFilled =
    "https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png";
  const starImageCorner =
    "https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png";

  return (
    <View style={styles.customRatingBarStyle}>
      {maxRating.map((item) => {
        return (
          <View>
            <Image
              style={styles.starImageStyle}
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

/**
 *
 * ReviewImages
 * @format
 *
 */

import React, { FC } from "react";
import { View, Image } from "react-native";

import type { PropsType } from "./types";
import ReviewImagesStyles from "./styles";

const ReviewImages: FC<PropsType> = (props) => {
  const { imageSources, customStyles } = props;

  return (
    <View style={ReviewImagesStyles.rowContainer}>
      {imageSources.map((imageSource) => {
        return (
          <Image
            source={imageSource}
            style={[ReviewImagesStyles.varietyImage, customStyles]}
          />
        );
      })}
    </View>
  );
};

export default ReviewImages;

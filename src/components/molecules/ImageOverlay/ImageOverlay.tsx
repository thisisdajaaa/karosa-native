/**
 *
 * ImageOverlay
 * @format
 *
 */

import React, { FC } from "react";

import type { PropsType } from "./types";
import ImageOverlayStyles from "./styles";
import { View, Image } from "react-native";
import Text from "@app/atoms/Text";

const ImageOverlay: FC<PropsType> = (props) => {
  const {
    source,
    textStyle,
    imageStyle,
    textContent,
    viewTextStyle,
    mainContainerStyle,
    imageHeight,
    imageWidth,
  } = props;

  return (
    <View style={[mainContainerStyle, ImageOverlayStyles.mainContainer]}>
      <Image
        source={source}
        style={[
          { width: imageWidth || 75, height: imageHeight || 75 },
          imageStyle,
        ]}
      />
      <View
        style={[
          { width: imageHeight || 75, height: imageHeight || 75 },
          ImageOverlayStyles.textViewStyle,
          viewTextStyle,
        ]}>
        <Text
          text={textContent || ""}
          textStyle={[ImageOverlayStyles.textStyle, textStyle]}
        />
      </View>
    </View>
  );
};

export default ImageOverlay;

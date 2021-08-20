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
  } = props;

  return (
    <View
      style={
        [mainContainerStyle, { flex: 1 }] || ImageOverlayStyles.mainContainer
      }>
      <Image
        source={source}
        style={imageStyle || ImageOverlayStyles.imageStyle}
      />
      <View style={viewTextStyle || ImageOverlayStyles.textViewStyle}>
        <Text
          text={textContent || "Sample"}
          textStyle={textStyle || ImageOverlayStyles.textStyle}
        />
      </View>
    </View>
  );
};

export default ImageOverlay;

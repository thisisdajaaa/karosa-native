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
import { theme } from "@app/styles";

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
    hasOverlay,
  } = props;

  const backgroundColorOverlay = hasOverlay == false ? "" : theme.colors.black;

  return (
    <View style={[ImageOverlayStyles.mainContainer, mainContainerStyle]}>
      <Image
        source={source}
        style={[
          { width: imageWidth || 70, height: imageHeight || 70 },
          imageStyle,
        ]}
      />
      <View
        style={[
          { width: imageHeight || 70, height: imageHeight || 70 },
          ImageOverlayStyles.textViewStyle,
          viewTextStyle,
          { backgroundColor: backgroundColorOverlay },
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

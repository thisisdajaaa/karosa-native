/**
 *
 * ImageOverlay
 * @format
 *
 */

import React, { FC } from "react";

import type { ImageOverlayPropsType } from "./types";
import ImageOverlayStyles from "./styles";
import { View, TouchableOpacity } from "react-native";
import Text from "@app/atoms/Text";
import Image from "@app/atoms/Image";
import { theme } from "@app/styles";

const ImageOverlay: FC<ImageOverlayPropsType> = (props) => {
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
    onClick,
  } = props;

  const backgroundColorOverlay =
    hasOverlay === false ? "" : theme.colors.dark20;

  return (
    <TouchableOpacity onPress={onClick}>
      <View style={[ImageOverlayStyles.mainContainer, mainContainerStyle]}>
        <Image
          source={source}
          imageStyle={[
            { width: imageWidth || 70, height: imageHeight || 70 },
            imageStyle,
          ]}
        />
        <View
          style={[
            { width: imageWidth || 70, height: imageHeight || 70 },
            ImageOverlayStyles.textViewStyle,
            viewTextStyle,
            { backgroundColor: backgroundColorOverlay },
          ]}
        >
          <Text
            text={textContent || ""}
            textStyle={[ImageOverlayStyles.textStyle, textStyle]}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ImageOverlay;

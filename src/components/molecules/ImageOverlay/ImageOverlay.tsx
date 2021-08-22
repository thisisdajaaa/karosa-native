/**
 *
 * ImageOverlay
 * @format
 *
 */

import React, { FC } from "react";

import type { ImageOverlayPropsType } from "./types";
import ImageOverlayStyles from "./styles";
import { View, Image, TouchableOpacity } from "react-native";
import Text from "@app/atoms/Text";
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
<<<<<<< HEAD
    onClick,
=======
>>>>>>> e918c9f... fix(fix layout issues in variation): fix layout issues in variation
  } = props;

  const backgroundColorOverlay = hasOverlay == false ? "" : theme.colors.black;

  return (
<<<<<<< HEAD
    <TouchableOpacity onPress={onClick}>
      <View style={[ImageOverlayStyles.mainContainer, mainContainerStyle]}>
        <Image
          source={source}
          style={[
            { width: imageWidth || 70, height: imageHeight || 70 },
            imageStyle,
          ]}
=======
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
>>>>>>> e918c9f... fix(fix layout issues in variation): fix layout issues in variation
        />
        <View
          style={[
            { width: imageWidth || 70, height: imageHeight || 70 },
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
    </TouchableOpacity>
  );
};

export default ImageOverlay;

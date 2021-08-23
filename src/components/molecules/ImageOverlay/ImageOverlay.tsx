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
import { TouchableItem } from "react-native-tab-view";

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

  const backgroundColorOverlay = hasOverlay == false ? "" : theme.colors.black;

  return (
<<<<<<< HEAD
    <TouchableOpacity onPress={onClick}>
=======
    <TouchableItem onPress={() => onClick}>
>>>>>>> ffdc6f6... fix(imageoverlay): fix props in ImageOverlay and updated modal variation
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
<<<<<<< HEAD
    </TouchableOpacity>
=======
    </TouchableItem>
>>>>>>> ffdc6f6... fix(imageoverlay): fix props in ImageOverlay and updated modal variation
  );
};

export default ImageOverlay;

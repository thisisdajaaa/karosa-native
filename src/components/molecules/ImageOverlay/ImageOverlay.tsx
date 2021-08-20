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
<<<<<<< HEAD
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
        ]}
      >
        <Text
          text={textContent || ""}
          textStyle={[ImageOverlayStyles.textStyle, textStyle]}
=======
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
>>>>>>> c416e9e... feat(added new variation in chevronlist and added new component imageoverlay): new Components
        />
      </View>
    </View>
  );
};

export default ImageOverlay;

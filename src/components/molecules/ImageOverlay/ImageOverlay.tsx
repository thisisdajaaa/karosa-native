/**
 *
 * ImageOverlay
 * @format
 *
 */

import React, { FC } from "react";

<<<<<<< HEAD
import type { ImageOverlayPropsType } from "./types";
import ImageOverlayStyles from "./styles";
import { View, Image, TouchableOpacity } from "react-native";
import Text from "@app/atoms/Text";
import { theme } from "@app/styles";

const ImageOverlay: FC<ImageOverlayPropsType> = (props) => {
=======
import type { PropsType } from "./types";
import ImageOverlayStyles from "./styles";
import { View, Image } from "react-native";
import Text from "@app/atoms/Text";

const ImageOverlay: FC<PropsType> = (props) => {
>>>>>>> c416e9e... feat(added new variation in chevronlist and added new component imageoverlay): new Components
  const {
    source,
    textStyle,
    imageStyle,
    textContent,
    viewTextStyle,
    mainContainerStyle,
<<<<<<< HEAD
<<<<<<< HEAD
    imageHeight,
    imageWidth,
    hasOverlay,
    onClick,
  } = props;

  const backgroundColorOverlay = hasOverlay == false ? "" : theme.colors.black;

  return (
    <TouchableOpacity onPress={onClick}>
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
    </TouchableOpacity>
=======
=======
    imageHeight,
    imageWidth,
>>>>>>> 07efcee... style(imageoverlay): updated styling of ImageOverlay
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
>>>>>>> c416e9e... feat(added new variation in chevronlist and added new component imageoverlay): new Components
  );
};

export default ImageOverlay;

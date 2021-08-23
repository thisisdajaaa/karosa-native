/**
 *
 * ImageOverlay
 * @format
 *
 */

import React, { FC } from "react";

<<<<<<< HEAD
<<<<<<< HEAD
import type { ImageOverlayPropsType } from "./types";
import ImageOverlayStyles from "./styles";
import { View, Image, TouchableOpacity } from "react-native";
import Text from "@app/atoms/Text";
import { theme } from "@app/styles";

const ImageOverlay: FC<ImageOverlayPropsType> = (props) => {
=======
import type { PropsType } from "./types";
=======
import type { ImageOverlayPropsType } from "./types";
>>>>>>> ffdc6f6... fix(imageoverlay): fix props in ImageOverlay and updated modal variation
import ImageOverlayStyles from "./styles";
import { View, Image } from "react-native";
import Text from "@app/atoms/Text";
import { theme } from "@app/styles";
import { TouchableItem } from "react-native-tab-view";

<<<<<<< HEAD
const ImageOverlay: FC<PropsType> = (props) => {
>>>>>>> c416e9e... feat(added new variation in chevronlist and added new component imageoverlay): new Components
=======
const ImageOverlay: FC<ImageOverlayPropsType> = (props) => {
>>>>>>> ffdc6f6... fix(imageoverlay): fix props in ImageOverlay and updated modal variation
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
<<<<<<< HEAD
>>>>>>> 07efcee... style(imageoverlay): updated styling of ImageOverlay
=======
    hasOverlay,
<<<<<<< HEAD
>>>>>>> e918c9f... fix(fix layout issues in variation): fix layout issues in variation
=======
    onClick,
>>>>>>> ffdc6f6... fix(imageoverlay): fix props in ImageOverlay and updated modal variation
  } = props;

  const backgroundColorOverlay = hasOverlay == false ? "" : theme.colors.black;

  return (
    <TouchableItem onPress={() => onClick}>
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
    </View>
>>>>>>> c416e9e... feat(added new variation in chevronlist and added new component imageoverlay): new Components
=======
    </TouchableItem>
>>>>>>> ffdc6f6... fix(imageoverlay): fix props in ImageOverlay and updated modal variation
  );
};

export default ImageOverlay;

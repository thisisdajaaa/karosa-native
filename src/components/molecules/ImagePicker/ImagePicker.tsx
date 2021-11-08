/**
 *
 * ImagePicker
 * @format
 *
 */

import React, { FC, useEffect } from "react";
import { Alert, View, TouchableWithoutFeedback } from "react-native";

import type { PropsType } from "./types";
import { checkPermission, selectImage } from "./config";
import VariationOne from "./VariationOne";
import VariationTwo from "./VariationTwo";
import VariationThree from "./VariationThree";
import VariationFour from "./VariationFour";

const ImagePicker: FC<PropsType> = (props) => {
  const { variation, uri, onChange } = props;

  useEffect(() => {
    checkPermission();
  }, []);

  const handlePress = () => {
    if (!uri) {
      selectImage(onChange);
    } else
      Alert.alert(
        "Change Image",
        "Are you sure you want to change this image?",
        [{ text: "Yes", onPress: () => selectImage(onChange) }, { text: "No" }]
      );
  };

  switch (variation) {
    case 1:
      return (
        <TouchableWithoutFeedback onPress={handlePress}>
          <View>
            <VariationOne uri={uri} />
          </View>
        </TouchableWithoutFeedback>
      );
    case 2:
      return (
        <TouchableWithoutFeedback onPress={handlePress}>
          <View>
            <VariationTwo uri={uri} />
          </View>
        </TouchableWithoutFeedback>
      );
    case 3:
      return (
        <TouchableWithoutFeedback onPress={handlePress}>
          <View>
            <VariationThree uri={uri} />
          </View>
        </TouchableWithoutFeedback>
      );
    case 4:
      return (
        <TouchableWithoutFeedback onPress={handlePress}>
          <View>
            <VariationFour uri={uri} />
          </View>
        </TouchableWithoutFeedback>
      );
    default:
      return (
        <TouchableWithoutFeedback onPress={handlePress}>
          <View>
            <VariationOne uri={uri} />
          </View>
        </TouchableWithoutFeedback>
      );
  }
};

export default ImagePicker;

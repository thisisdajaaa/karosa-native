/**
 *
 * ImagePicker
 * @format
 *
 */

import React, { FC, useEffect } from "react";
import { Alert, Platform, TouchableWithoutFeedback } from "react-native";
import * as RnImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import type { PropsType } from "./types";
import { aspectRatio, quality } from "./config";

const ImagePicker: FC<PropsType> = (props) => {
  const { children, uri, onChange } = props;

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== "granted") {
          Alert.alert(
            "Unauthorized Permission",
            "Sorry, we need camera roll permissions to make this work!"
          );
        }
      }
    })();
  }, []);

  const handlePress = () => {
    if (!uri) {
      selectImage();
    } else
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        { text: "Yes", onPress: () => onChange(null) },
        { text: "No" },
      ]);
  };

  const selectImage = async () => {
    try {
      const result = await RnImagePicker.launchImageLibraryAsync({
        mediaTypes: RnImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: aspectRatio,
        quality: quality,
      });

      if (!result.cancelled) onChange(result.uri);
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default ImagePicker;

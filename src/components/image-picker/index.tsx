import React, { useEffect } from "react";
import { View, Image, TouchableWithoutFeedback, Alert } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImgPicker from "expo-image-picker";
import { BaseText } from "@app/components/base-text";
import { theme } from "@app/styles";

import { Props } from "./types";
import { styles } from "./styles";

export const ImagePicker: React.FC<Props> = ({ imageUri, onChangeImage }) => {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImgPicker.requestCameraRollPermissionsAsync();
    // eslint-disable-next-line no-alert
    if (!granted) alert("You need to enable permission to access the library.");
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
  };

  const selectImage = async () => {
    try {
      const result = await ImgPicker.launchImageLibraryAsync({
        mediaTypes: ImgPicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <>
            <MaterialCommunityIcons
              color={theme.colors.dark10}
              name="camera"
              size={40}
            />
            <BaseText style={styles.txtAddImg}>+ Add Photo</BaseText>
          </>
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

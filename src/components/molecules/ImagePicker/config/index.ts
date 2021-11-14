/**
 *
 * @format
 *
 */
import { Alert, Platform } from "react-native";
import * as RnImagePicker from "expo-image-picker";

export const ASPECT_RATIO: [number, number] = [4, 3];
export const QUALITY = 1;

export const SIZE = {
  PRIMARY: 28,
  SECONDARY: 24,
  TERTIARY: 24,
};

export const checkPermission = async () => {
  if (Platform.OS !== "web") {
    const {
      status,
    } = await RnImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Unauthorized Permission",
        "Sorry, we need camera roll permissions to make this work!"
      );
    }
  }
};

export const selectImage = async (callback: (uri: string) => void) => {
  try {
    const result = await RnImagePicker.launchImageLibraryAsync({
      mediaTypes: RnImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: ASPECT_RATIO,
      quality: QUALITY,
    });

    if (!result.cancelled) callback(result.uri);
  } catch (error) {
    Alert.alert("Error reading an image", error as string);
  }
};

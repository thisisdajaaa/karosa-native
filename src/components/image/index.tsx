import React from "react";
import { View, Image } from "react-native";

import { Props } from "./types";
import { styles } from "./styles";

export const Images: React.FC<Props> = ({ imageSources, customStyles }) => {
  return (
    <View style={styles.rowContainer}>
      {imageSources.map((imageSource) => {
        return (
          <Image
            source={imageSource}
            style={[styles.varietyImage, customStyles]}
          />
        );
      })}
    </View>
  );
};

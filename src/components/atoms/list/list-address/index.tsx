import React from "react";
import { View, Image, TouchableOpacity } from "react-native";

import { BaseText } from "../../base-text";

import { Props } from "./types";
import { styles } from "./styles";

export const ListAction: React.FC<Props> = ({
  text,
  image,
  IconComponent,
  style,
  action,
}) => {
  return (
    <View style={[styles.container, style?.containerStyle]}>
      {IconComponent}
      {image && <Image style={styles.image} source={image} />}
      <View style={styles.detailsContainer}>
        <BaseText
          customStyles={
            image ? styles.hasImage : [styles.left, style?.textStyle?.left]
          }
          numberOfLines={1}
        >
          {text.left}
        </BaseText>
      </View>

      {action ? (
        <TouchableOpacity onPress={action}>
          <BaseText style={[styles.right, style?.textStyle?.right]}>
            {text.right}
          </BaseText>
        </TouchableOpacity>
      ) : (
        <BaseText style={[styles.right, style?.textStyle?.right]}>
          {text.right}
        </BaseText>
      )}
    </View>
  );
};

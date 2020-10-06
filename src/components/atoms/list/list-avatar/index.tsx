import React from "react";
import { View, Image } from "react-native";

import { BaseText } from "../../base-text";

import { Props } from "./types";
import { styles } from "./styles";

export const ListAvatar: React.FC<Props> = ({
  title,
  subTitle,
  image,
  IconComponent,
  ButtonComponent,
  style,
}) => {
  return (
    <View style={[styles.container, style?.containerStyle]}>
      {IconComponent}
      {image && (
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={image} />
        </View>
      )}
      <View style={styles.detailsContainer}>
        <BaseText
          customStyles={[styles.title, style?.textStyle]}
          numberOfLines={1}
        >
          {title}
        </BaseText>
        {subTitle && (
          <BaseText style={styles.subTitle} numberOfLines={1}>
            {subTitle}
          </BaseText>
        )}
        {ButtonComponent && <View>{ButtonComponent}</View>}
      </View>
    </View>
  );
};

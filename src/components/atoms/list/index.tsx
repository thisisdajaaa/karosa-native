import React from "react";
import { View, Image } from "react-native";

import { BaseText } from "../base-text";

import { Props } from "./types";
import { styles } from "./styles";

export const ListItem: React.FC<Props> = ({
  title,
  subTitle,
  image,
  IconComponent,
  customStyles,
}) => {
  return (
    <View style={[styles.container, customStyles]}>
      {IconComponent}
      {image && <Image style={styles.image} source={image} />}
      <View style={styles.detailsContainer}>
        <BaseText customStyles={styles.title} numberOfLines={1}>
          {title}
        </BaseText>
        {subTitle && (
          <BaseText style={styles.subTitle} numberOfLines={2}>
            {subTitle}
          </BaseText>
        )}
      </View>
    </View>
  );
};

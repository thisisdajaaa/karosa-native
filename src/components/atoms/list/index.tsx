import React from "react";
import { View, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { BaseText } from "../base-text";

import { Props } from "./types";
import { styles } from "./styles";

export const ListItem: React.FC<Props> = ({
  title,
  subTitle,
  image,
  IconComponent,
  style,
  chevron,
  rightLabel,
}) => {
  return (
    <View style={[styles.container, style?.containerStyle]}>
      {IconComponent}
      {image && (
        <View style={styles.imageContaienr}>
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
      </View>

      <React.Fragment>
        {rightLabel && (
          <BaseText style={styles.rightLabel}>{rightLabel}</BaseText>
        )}
        {chevron && (
          <MaterialCommunityIcons
            color={"#6e6969"}
            name="chevron-right"
            size={25}
          />
        )}
      </React.Fragment>
    </View>
  );
};

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
  ButtonComponent,
  style,
  chevron,
  rightLabel,
  listColor,
}) => {
  return (
    <View style={[styles.container, style?.containerStyle]}>
      {IconComponent}
      {image && (
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={image} />
        </View>
      )}
      {listColor && (
        <MaterialCommunityIcons
          style={styles.listColor}
          name="checkbox-blank"
          color={listColor}
        />
      )}
      <View style={styles.detailsContainer}>
        <BaseText
          customStyles={
            listColor ? styles.hasListColor : [styles.title, style?.textStyle]
          }
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

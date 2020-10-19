import React from "react";
import { View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { BaseText } from "../../base-text";

import { Props } from "./types";
import { styles } from "./styles";

export const ListChevron: React.FC<Props> = ({
  title,
  style,
  rightLabel,
  listColor,
  onPress,
}) => {
  return (
    <View style={[styles.container, style?.containerStyle]}>
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
      </View>

      {rightLabel && (
        <BaseText style={styles.rightLabel}>{rightLabel}</BaseText>
      )}
      <TouchableOpacity onPress={onPress}>
        <MaterialCommunityIcons
          name="chevron-right"
          style={styles.chevronIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

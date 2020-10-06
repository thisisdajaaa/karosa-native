import React from "react";
import { View } from "react-native";

import { BaseText } from "../../base-text";

import { Props } from "./types";
import { styles } from "./styles";

export const ListDisplay: React.FC<Props> = ({ text, style }) => {
  return (
    <View style={[styles.container, style?.containerStyle]}>
      <View style={styles.detailsContainer}>
        <BaseText
          customStyles={[styles.left, style?.textStyle]}
          numberOfLines={1}
        >
          {text.left}
        </BaseText>
      </View>

      <BaseText style={styles.right}>{text.right}</BaseText>
    </View>
  );
};

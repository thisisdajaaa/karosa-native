/**
 *
 * ListDisplay
 * @format
 *
 */

import React, { FC } from "react";
import { View } from "react-native";
import Text from "@app/atoms/Text";

import type { Props } from "./types";
import { styles } from "./styles";

export const ListDisplay: FC<Props> = (props) => {
  const { text, style } = props;

  return (
    <View style={[styles.container, style?.containerStyle]}>
      <View style={styles.detailsContainer}>
        <Text
          text={text.left}
          numberOfLines={1}
          textStyle={[styles.left, style?.textStyle]}
        />
      </View>
      <Text text={text.right} textStyle={styles.right} />
    </View>
  );
};

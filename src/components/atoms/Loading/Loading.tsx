/**
 *
 * Loading
 * @format
 *
 */

import React, { FC } from "react";
import { ActivityIndicator, View } from "react-native";
import type { PropsType } from "./types";
import { styles } from "./styles";
import { theme } from "@app/styles";

const Loading: FC<PropsType> = (props) => {
  const { color = theme.colors.dark20, size = "small" } = props;

  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Loading;

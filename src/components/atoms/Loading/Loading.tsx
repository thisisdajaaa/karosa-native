/**
 *
 * Loading
 * @format
 *
 */

import React, { FC } from "react";
import { View } from "react-native";
import { Spinner } from "./Spinner";
import { styles } from "./styles";

const Loading: FC = () => {
  return (
    <View style={styles.container}>
      <Spinner />
    </View>
  );
};

export default Loading;

import React from "react";
import { View } from "react-native";

import { Spinner } from "./spinner";
import { styles } from "./styles";

export const LoadingView: React.FC = () => {
  return (
    <View style={styles.container}>
      <Spinner />
    </View>
  );
};

import React from "react";
import { SafeAreaView, View } from "react-native";

import { Props } from "./types";
import { styles } from "./styles";

export const Screen: React.FC<Props> = ({ children, customStyles }) => {
  return (
    <SafeAreaView style={[styles.screen, customStyles]}>
      <View style={[styles.view, customStyles]}>{children}</View>
    </SafeAreaView>
  );
};

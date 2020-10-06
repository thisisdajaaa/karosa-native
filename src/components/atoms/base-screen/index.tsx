import React from "react";
import { SafeAreaView, View } from "react-native";

import { Header } from "../header";

import { Props } from "./types";
import { styles } from "./styles";

export const Screen: React.FC<Props> = ({ children, customStyles, header }) => {
  return (
    <SafeAreaView style={[styles.screen, customStyles]}>
      {header && <Header {...header} />}
      <View style={[styles.view, customStyles]}>{children}</View>
    </SafeAreaView>
  );
};

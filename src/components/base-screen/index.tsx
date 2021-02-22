import React from "react";
import { SafeAreaView, View } from "react-native";

import { LoadingView } from "../loading";
import { Header } from "../header";

import { Props } from "./types";
import { styles } from "./styles";

export const Screen: React.FC<Props> = React.memo(
  ({ children, customStyles, customHeader, header, isLoading, subCustomStyles }) => {
    return (
      <SafeAreaView style={[styles.screen, subCustomStyles]}>
        {header && <Header {...header} />}
        {customHeader}
        <View style={[styles.container, customStyles]}>
          {isLoading ? <LoadingView /> : children}
        </View>
      </SafeAreaView>
    );
  }
);

Screen.displayName = "Screen";

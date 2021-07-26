/**
 *
 * BaseScreen
 * @format
 *
 */

import React, { FC } from "react";
import { SafeAreaView, View } from "react-native";

import Loading from "@app/atoms/Loading";
// import { Header } from "../header";
import Header from "@app/atoms/BaseHeader";

import { Props } from "./types";
import { styles } from "./styles";

const BaseScreen: FC<Props> = ({
  children,
  customStyles,
  customHeader,
  header,
  isLoading,
}) => {
  return (
    <SafeAreaView style={styles.screen}>
      {header && <Header {...header} />}
      {customHeader}
      <View style={[styles.container, customStyles]}>
        {isLoading ? <Loading /> : children}
      </View>
    </SafeAreaView>
  );
};

export default BaseScreen;

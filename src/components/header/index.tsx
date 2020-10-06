import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { View, TouchableOpacity } from "react-native";

import { BaseText } from "../atoms/base-text";

import { styles } from "./styles";
import { Props } from "./types";

export const Header: React.FC<Props> = ({ title, iconName, text, press }) => {
  return (
    <React.Fragment>
      <View style={styles.mainContainer}>
        {text?.left && (
          <BaseText customStyles={styles.txtLeft}>{text.left}</BaseText>
        )}
        {iconName && (
          <TouchableOpacity style={styles.leftContainer} onPress={press?.left}>
            <MaterialIcons name={iconName} size={24} color="#0AA351" />
          </TouchableOpacity>
        )}
        <BaseText customStyles={styles.title}>{title}</BaseText>
        {text?.right && press?.right && (
          <TouchableOpacity style={styles.rightContainer} onPress={press.right}>
            <BaseText customStyles={styles.txtRight}>{text.right}</BaseText>
          </TouchableOpacity>
        )}
      </View>
    </React.Fragment>
  );
};

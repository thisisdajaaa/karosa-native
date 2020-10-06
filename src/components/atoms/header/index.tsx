import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { View, TouchableOpacity } from "react-native";

import { BaseText } from "../base-text";

import { styles } from "./styles";
import { Props } from "./types";

export const Header: React.FC<Props> = ({
  title,
  iconName,
  text,
  press,
  customStyles,
}) => {
  return (
    <React.Fragment>
      <View style={styles.mainContainer}>
        {text?.left && (
          <BaseText customStyles={[styles.txtLeft, customStyles?.left]}>
            {text.left}
          </BaseText>
        )}
        {iconName && (
          <TouchableOpacity style={styles.leftContainer} onPress={press?.left}>
            <MaterialIcons name={iconName} size={24} color="#0AA351" />
          </TouchableOpacity>
        )}
        <BaseText customStyles={[styles.title, customStyles?.main]}>
          {title}
        </BaseText>
        {text?.right && press?.right && (
          <TouchableOpacity style={styles.rightContainer} onPress={press.right}>
            <BaseText customStyles={[styles.txtRight, customStyles?.right]}>
              {text.right}
            </BaseText>
          </TouchableOpacity>
        )}
      </View>
    </React.Fragment>
  );
};

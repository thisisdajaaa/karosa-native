import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";

import { BaseText } from "../atoms/base-text";

import { styles } from "./styles";
import { Props } from "./types";

export const Header: React.FC<Props> = ({
  title,
  iconName,
  txtLeft,
  txtRight,
  route,
}) => {
  const { navigate, goBack } = useNavigation();

  return (
    <View style={styles.mainContainer}>
      {txtLeft && <BaseText customStyles={styles.txtLeft}>{txtLeft}</BaseText>}
      {iconName && (
        <TouchableOpacity style={styles.leftContainer} onPress={() => goBack()}>
          <MaterialIcons name={iconName} size={24} color="#0AA351" />
        </TouchableOpacity>
      )}
      <BaseText customStyles={styles.title}>{title}</BaseText>
      {txtRight && route && (
        <TouchableOpacity
          style={styles.rightContainer}
          onPress={() => navigate(route)}
        >
          <BaseText customStyles={styles.txtRight}>{txtRight}</BaseText>
        </TouchableOpacity>
      )}
    </View>
  );
};

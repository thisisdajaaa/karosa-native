import React from "react";
import { View, TouchableOpacity } from "react-native";

import { BaseText } from "../base-text";

import { Props } from "./types";
import { styles } from "./styles";

export const AccountActions: React.FC<Props> = ({ actions }) => {
  return (
    <View style={styles.container}>
      {actions.map((action, key) => (
        <TouchableOpacity
          key={key}
          style={styles.actionContainer}
          onPress={action.onPress}>
          {action.icon}
          <BaseText style={styles.label}>{action.label}</BaseText>
        </TouchableOpacity>
      ))}
    </View>
  );
};

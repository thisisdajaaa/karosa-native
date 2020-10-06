import React from "react";
import { View } from "react-native";

import { BaseText } from "../base-text";

import { Props } from "./types";
import { styles } from "./styles";

export const AccountActions: React.FC<Props> = ({ actions }) => {
  return (
    <View style={styles.container}>
      {actions.map((action, key) => (
        <View key={key} style={styles.actionContainer}>
          {action.icon}
          <BaseText style={styles.label}>{action.label}</BaseText>
        </View>
      ))}
    </View>
  );
};

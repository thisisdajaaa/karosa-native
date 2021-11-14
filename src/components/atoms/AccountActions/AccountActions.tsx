/**
 *
 * AccountActions
 * @format
 *
 */

import React, { FC } from "react";
import { View, TouchableOpacity } from "react-native";
import Text from "@app/atoms/Text";

import type { Props } from "./types";
import { styles } from "./styles";

const AccountActions: FC<Props> = (props) => {
  const { actions } = props;

  return (
    <View style={styles.container}>
      {actions.map((action, key) => (
        <TouchableOpacity
          key={key}
          style={styles.actionContainer}
          onPress={action.onPress}
        >
          {action.icon}
          <Text textStyle={styles.label} text={action.label} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default AccountActions;

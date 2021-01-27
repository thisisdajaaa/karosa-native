/**
 *
 * WarningMessage
 * @format
 *
 */

import React, { FC } from "react";
import { TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import Text from "@app/atoms/Text";

import type { PropsType } from "./types";
import WarningMessageStyles from "./styles";

const WarningMessage: FC<PropsType> = (props) => {
  const { message, onPress } = props;

  return (
    <ListItem containerStyle={WarningMessageStyles.container}>
      <ListItem.Content style={WarningMessageStyles.content}>
        <MaterialIcons
          name="warning"
          style={WarningMessageStyles.warningIcon}
        />
        <ListItem.Content style={WarningMessageStyles.txtContainer}>
          <Text text={message} customStyle={WarningMessageStyles.txtMessage} />
        </ListItem.Content>
        <TouchableOpacity onPress={onPress}>
          <AntDesign name="close" style={WarningMessageStyles.closeIcon} />
        </TouchableOpacity>
      </ListItem.Content>
    </ListItem>
  );
};

export default WarningMessage;

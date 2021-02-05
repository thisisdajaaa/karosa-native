/**
 *
 * WarningMessage
 * @format
 *
 */

import React, { FC } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { ListItem } from "react-native-elements";
import Text from "@app/atoms/Text";
import Icon from "@app/atoms/Icon";

import type { PropsType } from "./types";
import WarningMessageStyles from "./styles";

const WarningMessage: FC<PropsType> = (props) => {
  const { message, onPress } = props;

  return (
    <ListItem containerStyle={WarningMessageStyles.container}>
      <ListItem.Content style={WarningMessageStyles.content}>
        <Icon
          group="products"
          name="warning"
          width={22}
          height={19}
          extraStyle={WarningMessageStyles.warningIcon}
        />
        <ListItem.Content style={WarningMessageStyles.textContainer}>
          <Text
            numberOfLines={4}
            text={message}
            customStyle={WarningMessageStyles.text}
          />
        </ListItem.Content>
        <TouchableWithoutFeedback onPress={onPress}>
          <View>
            <Icon
              group="common"
              name="close"
              width={14}
              height={14}
              extraStyle={WarningMessageStyles.closeIcon}
            />
          </View>
        </TouchableWithoutFeedback>
      </ListItem.Content>
    </ListItem>
  );
};

export default WarningMessage;

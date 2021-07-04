/**
 *
 * WarningMessage
 * @format
 *
 */

import React, { FC, Fragment, useState } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { ListItem } from "react-native-elements";
import Text from "@app/atoms/Text";
import Icon from "@app/atoms/Icon";

import type { PropsType } from "./types";
import { CLOSE_ICON, NUM_LINES, WARNING_ICON } from "./config";
import WarningMessageStyles from "./styles";

const WarningMessage: FC<PropsType> = (props) => {
  const { message } = props;

  const [hide, setHide] = useState(false);

  if (hide) return <Fragment />;

  return (
    <ListItem containerStyle={WarningMessageStyles.container}>
      <Icon
        group="products"
        name="warning"
        width={WARNING_ICON.WIDTH}
        height={WARNING_ICON.HEIGHT}
        extraStyle={WarningMessageStyles.warningIcon}
      />
      <ListItem.Content style={WarningMessageStyles.textContainer}>
        <Text
          numberOfLines={NUM_LINES}
          text={message}
          textStyle={WarningMessageStyles.text}
        />
      </ListItem.Content>
      <TouchableWithoutFeedback onPress={() => setHide(true)}>
        <View>
          <Icon
            group="common"
            name="close"
            width={CLOSE_ICON}
            height={CLOSE_ICON}
            extraStyle={WarningMessageStyles.closeIcon}
          />
        </View>
      </TouchableWithoutFeedback>
    </ListItem>
  );
};

export default WarningMessage;

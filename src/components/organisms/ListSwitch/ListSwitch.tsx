/**
 *
 * ListSwitch
 * @format
 *
 */

import React, { FC } from "react";
import { ListItem } from "react-native-elements";
import { View } from "react-native";
import FormSwitch from "@app/components/molecules/FormSwitch";
import Text from "@app/atoms/Text";
import ValidationMessage from "@app/components/molecules/ValidationMessage";

import type { PropsType } from "./types";
import ListSwitchStyles from "./styles";

const ListSwitch: FC<PropsType> = (props) => {
  const { name, title, boldTitle, info, disabled, hasBottomDivider } = props;

  return (
    <ListItem bottomDivider={hasBottomDivider}>
      <ListItem.Content style={ListSwitchStyles.container}>
        <View style={ListSwitchStyles.switchContainer}>
          {boldTitle && (
            <Text text={boldTitle} textStyle={ListSwitchStyles.txtBoldTitle} />
          )}
          {title && <Text text={title} textStyle={ListSwitchStyles.txtTitle} />}
          {info && (
            <Text text={info} textStyle={ListSwitchStyles.txtExtraInfo} />
          )}
          <ListItem.Content style={ListSwitchStyles.rightContainer}>
            <FormSwitch name={name} disabled={disabled} />
          </ListItem.Content>
        </View>
        <ValidationMessage name={name} />
      </ListItem.Content>
    </ListItem>
  );
};

export default ListSwitch;

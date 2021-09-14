/**
 *
 * ListSwitch
 * @format
 *
 */

import React, { FC } from "react";
import { ListItem } from "react-native-elements";
import { View } from "react-native";
import FormSwitch from "@app/molecules/FormSwitch";
import Text from "@app/atoms/Text";
import Icon from "@app/atoms/Icon";
import ValidationMessage from "@app/molecules/ValidationMessage";

import type { PropsType } from "./types";
import ListSwitchStyles from "./styles";

const ListSwitch: FC<PropsType> = (props) => {
  const { name, title, boldTitle, info, disabled, hasBottomDivider, icon } =
    props;

  return (
    <ListItem bottomDivider={hasBottomDivider}>
      <ListItem.Content style={ListSwitchStyles.container}>
        <View style={ListSwitchStyles.switchContainer}>
          {boldTitle && (
            <Text text={boldTitle} textStyle={ListSwitchStyles.txtBoldTitle} />
          )}

          {title && !icon && (
            <Text text={title} textStyle={ListSwitchStyles.txtTitle} />
          )}

          {info && (
            <Text text={info} textStyle={ListSwitchStyles.txtExtraInfo} />
          )}

          {title && icon && (
            <>
              <Icon
                group={icon.group}
                name={icon.name}
                height={icon.height}
                width={icon.width}
                extraStyle={ListSwitchStyles.icon}
              />
              <Text text={title} textStyle={ListSwitchStyles.txtWithIcon} />
            </>
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

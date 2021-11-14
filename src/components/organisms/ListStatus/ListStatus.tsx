/**
 *
 * ListStatus
 * @format
 *
 */

import React, { FC } from "react";
import { ListItem } from "react-native-elements";
import { View } from "react-native";
import Icon from "@app/atoms/Icon";
import Text from "@app/atoms/Text";

import type { PropsType } from "./types";
import ListStatusStyles, { StatusItemStyle } from "./styles";

const ListStatus: FC<PropsType> = (props) => {
  const {
    label,
    onPress,
    value,
    color,
    hasBottomDivider,
    icon,
    required,
  } = props;

  return (
    <ListItem bottomDivider={hasBottomDivider} onPress={onPress}>
      <ListItem.Content style={ListStatusStyles.container}>
        {icon ? (
          <>
            <Icon
              group={icon.group}
              name={icon.name}
              height={icon.height}
              width={icon.width}
              extraStyle={ListStatusStyles.icon}
            />
            <Text text={label} textStyle={ListStatusStyles.txtWithIcon} />
          </>
        ) : (
          <Text text={label} textStyle={ListStatusStyles.txtLabel} />
        )}

        {required && <Text text="*" textStyle={ListStatusStyles.txtRequired} />}
      </ListItem.Content>
      <ListItem.Content style={ListStatusStyles.valueContainer}>
        <View style={StatusItemStyle(color).circle} />
        <Text text={value} textStyle={ListStatusStyles.txtValue} />
      </ListItem.Content>
    </ListItem>
  );
};

export default ListStatus;

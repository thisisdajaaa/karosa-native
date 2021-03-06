/**
 *
 * ListStatus
 * @format
 *
 */

import React, { FC, useMemo } from "react";
import { ListItem } from "react-native-elements";
import Text from "@app/atoms/Text";
import Icon from "@app/atoms/Icon";

import type { PropsType } from "./types";
import { ICON_SIZE } from "./config";
import ListStatusStyles from "./styles";

const ListStatus: FC<PropsType> = (props) => {
  const { label, onPress, value, color, hasBottomDivider, required } = props;

  const iconColor = useMemo(() => {
    switch (color) {
      case "green":
        return "greenCircle";
      case "gray":
        return "grayCircle";
      case "gold":
        return "goldCircle";
      default:
        return "greenCircle";
    }
  }, [color]);

  return (
    <ListItem bottomDivider={hasBottomDivider} onPress={onPress}>
      <ListItem.Content style={ListStatusStyles.container}>
        <Text text={label} textStyle={ListStatusStyles.txtLabel} />
        {required && <Text text="*" textStyle={ListStatusStyles.txtRequired} />}
      </ListItem.Content>
      <ListItem.Content style={ListStatusStyles.valueContainer}>
        <Icon
          group="common"
          name={iconColor}
          height={ICON_SIZE}
          width={ICON_SIZE}
          extraStyle={ListStatusStyles.iconStatus}
        />
        <Text text={value} textStyle={ListStatusStyles.txtValue} />
      </ListItem.Content>
    </ListItem>
  );
};

export default ListStatus;

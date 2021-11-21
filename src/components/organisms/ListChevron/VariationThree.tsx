/**
 *
 * VariantTwo
 * @format
 *
 */

import React, { FC } from "react";
import { ListItem } from "react-native-elements";
import { theme } from "@app/styles";
import Icon from "@app/atoms/Icon";

import type { PropsType } from "./types";
import { FONT_SIZE } from "./config";
import ListChevronStyles from "./styles";

const VariantThree: FC<PropsType> = (props) => {
  const {
    hasBottomDivider,
    title,
    onPress,
    subtitle,
    iconGroup,
    iconName,
    iconWidth,
    iconHeight,
    chevronColor = theme.colors.dark10,
  } = props;

  const iconStyle = {
    color: chevronColor,
    fontSize: FONT_SIZE,
  };

  return (
    <ListItem bottomDivider={hasBottomDivider} onPress={onPress}>
      <Icon
        group={iconGroup || ""}
        name={iconName || ""}
        height={iconHeight || 50}
        width={iconWidth || 50}
      />
      <ListItem.Content>
        <ListItem.Title style={ListChevronStyles.txtSubtitle}>
          {title}
        </ListItem.Title>
        <ListItem.Subtitle style={ListChevronStyles.txtSubtitle}>
          {subtitle}
        </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron iconStyle={iconStyle} />
    </ListItem>
  );
};

export default VariantThree;

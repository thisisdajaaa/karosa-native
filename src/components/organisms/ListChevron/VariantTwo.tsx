/**
 *
 * VariantTwo
 * @format
 *
 */

import React, { FC } from "react";
import { ListItem } from "react-native-elements";
import { theme } from "@app/styles";
import Image from "@app/atoms/Image";

import { defaultFontSize } from "./config";
import type { PropsType } from "./types";
import ListChevronStyles from "./styles";

const VariantTwo: FC<PropsType> = (props) => {
  const {
    hasBottomDivider,
    title,
    onPress,
    subtitle,
    avatar,
    chevronColor = theme.colors.dark10,
  } = props;

  const iconStyle = {
    color: chevronColor,
    fontSize: defaultFontSize,
  };

  return (
    <ListItem bottomDivider={hasBottomDivider} onPress={onPress}>
      <Image
        source={{ uri: avatar }}
        customStyle={ListChevronStyles.avatarImg}
        resizeMode={"cover"}
      />
      <ListItem.Content>
        <ListItem.Title style={ListChevronStyles.txtAvatarTitle}>
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

export default VariantTwo;

/**
 *
 * ListChevron
 * @format
 *
 */

import React, { FC } from "react";

import type { PropsType } from "./types";
import VariationOne from "./VariationOne";
import VariationTwo from "./VariationTwo";
import VariationThree from "./VariationThree";
import VariationFour from "./VariationFour";

const ListChevron: FC<PropsType> = (props) => {
  const {
    hasBottomDivider,
    title,
    variation,
    onPress,
    subtitle,
    avatar,
    chevronColor,
    info,
    infoStyle,
    listColor,
    required,
    iconWidth,
    iconHeight,
    iconGroup,
    iconName,
    icon,
    containerStyle,
    titleStyle,
  } = props;

  switch (variation) {
    case 1:
      return (
        <VariationOne
          variation={variation}
          hasBottomDivider={hasBottomDivider}
          listColor={listColor}
          title={title}
          onPress={onPress}
          containerStyle={containerStyle}
          info={info}
          required={required}
          infoStyle={infoStyle}
          chevronColor={chevronColor}
          subtitle={subtitle}
          icon={icon}
          titleStyle={titleStyle}
        />
      );

    case 2:
      return (
        <VariationTwo
          variation={variation}
          hasBottomDivider={hasBottomDivider}
          title={title}
          onPress={onPress}
          subtitle={subtitle}
          avatar={avatar}
          chevronColor={chevronColor}
        />
      );
    case 3:
      return (
        <VariationThree
          variation={variation}
          hasBottomDivider={hasBottomDivider}
          title={title}
          onPress={onPress}
          subtitle={subtitle}
          avatar={avatar}
          chevronColor={chevronColor}
          iconName={iconName}
          iconGroup={iconGroup}
          iconHeight={iconHeight}
          iconWidth={iconWidth}
        />
      );
    case 4:
      return (
        <VariationFour
          variation={variation}
          hasBottomDivider={hasBottomDivider}
          listColor={listColor}
          title={title}
          onPress={onPress}
          info={info}
          required={required}
          infoStyle={infoStyle}
        />
      );
    default:
      return (
        <VariationOne
          variation={variation}
          hasBottomDivider={hasBottomDivider}
          listColor={listColor}
          title={title}
          onPress={onPress}
          info={info}
          required={required}
          infoStyle={infoStyle}
        />
      );
  }
};

export default ListChevron;

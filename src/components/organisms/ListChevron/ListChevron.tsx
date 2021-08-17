/**
 *
 * ListChevron
 * @format
 *
 */

import React, { FC } from "react";

import type { PropsType } from "./types";
<<<<<<< HEAD
import VariationOne from "./VariationOne";
import VariationTwo from "./VariationTwo";
import VariationThree from "./VariationThree";
import VariationFour from "./VariationFour";
=======
import VariationOne from "./VariantOne";
import VariationTwo from "./VariantTwo";
import VariationThree from "./VariantThree";
>>>>>>> 9464744... style(added shipping icon for product): added shipping icon for product

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
          info={info}
          required={required}
          infoStyle={infoStyle}
          chevronColor={chevronColor}
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
<<<<<<< HEAD
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
=======
>>>>>>> 9464744... style(added shipping icon for product): added shipping icon for product
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

/**
 *
 * ListChevron
 * @format
 *
 */

import React, { FC } from "react";

import type { PropsType } from "./types";
import VariationOne from "./VariantOne";
import VariationTwo from "./VariantTwo";

const VariantTwo: FC<PropsType> = (props) => {
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
          chevronColor={chevronColor}
        />
      );
  }
};

export default VariantTwo;
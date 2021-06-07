/**
 *
 * Button
 * @format
 *
 */

import React, { FC } from "react";
import { PropsType } from "./types";
import VariationOne from "./VariationOne";
import VariationTwo from "./VariationTwo";

const Button: FC<PropsType> = (props) => {
  const {
    variation,
    title,
    onPress,
    type,
    loading,
    disabled,
    titleStyle,
    buttonStyle,
    icon,
    containerStyle,
    textStyle,
    iconVariationTwo,
  } = props;
  switch (variation) {
    case 1:
      return (
        <VariationOne
          title={title}
          onPress={onPress}
          type={type}
          loading={loading}
          disabled={disabled}
          titleStyle={titleStyle}
          buttonStyle={buttonStyle}
          icon={icon}
        />
      );
    case 2:
      return (
        <VariationTwo
          title={title}
          disabled={disabled}
          onPress={onPress}
          containerStyle={containerStyle}
          textStyle={textStyle}
          iconVariationTwo={iconVariationTwo}
        />
      );
    default:
      return (
        <VariationOne
          title={title}
          onPress={onPress}
          type={type}
          loading={loading}
          disabled={disabled}
          titleStyle={titleStyle}
          buttonStyle={buttonStyle}
          icon={icon}
        />
      );
  }
};

export default Button;

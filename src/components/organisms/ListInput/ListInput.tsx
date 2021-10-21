/**
 *
 * VariationOne
 * @format
 *
 */

import React, { FC } from "react";

import type { PropsType } from "./types";
import VariationOne from "./VariationOne";
import VariationThree from "./VariationThree";
import VariationTwo from "./VariationTwo";
import VariationFour from "./VariationFour";

const ListInput: FC<PropsType> = (props) => {
  const {
    variation,
    hasBottomDivider,
    label,
    name,
    placeholder,
    required,
    maxLen,
    keyboardType,
    icon,
    numofLines,
  } = props;

  switch (variation) {
    case 1:
      return (
        <VariationOne
          variation={variation}
          label={label}
          hasBottomDivider={hasBottomDivider}
          name={name}
          placeholder={placeholder}
          required={required}
          maxLen={maxLen}
          numofLines={numofLines}
          keyboardType={keyboardType}
        />
      );
    case 2:
      return (
        <VariationTwo
          variation={variation}
          label={label}
          icon={icon}
          hasBottomDivider={hasBottomDivider}
          name={name}
          placeholder={placeholder}
          required={required}
          keyboardType={keyboardType}
        />
      );
    case 3:
      return (
        <VariationThree
          variation={variation}
          label={label}
          icon={icon}
          hasBottomDivider={hasBottomDivider}
          name={name}
          placeholder={placeholder}
          required={required}
          keyboardType={keyboardType}
        />
      );

    case 4:
      return (
        <VariationFour
          variation={variation}
          label={label}
          icon={icon}
          hasBottomDivider={hasBottomDivider}
          name={name}
          placeholder={placeholder}
          required={required}
          keyboardType={keyboardType}
        />
      );
    default:
      return (
        <VariationOne
          variation={variation}
          label={label}
          hasBottomDivider={hasBottomDivider}
          name={name}
          placeholder={placeholder}
          required={required}
          maxLen={maxLen}
          keyboardType={keyboardType}
        />
      );
  }
};

export default ListInput;

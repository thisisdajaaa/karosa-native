/**
 *
 * VariationOne
 * @format
 *
 */

import React, { FC } from "react";

import type { PropsType } from "./types";
import VariationOne from "./VariationOne";
import VariationTwo from "./VariationTwo";

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
          keyboardType={keyboardType}
        />
      );
    case 2:
      return (
        <VariationTwo
          variation={variation}
          label={label}
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

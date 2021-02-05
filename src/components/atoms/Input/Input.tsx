/**
 *
 * Input
 * @format
 *
 */

import React, { FC } from "react";
import { Input as RnInput } from "react-native-elements";

import type { PropsType } from "./types";
import InputStyles from "./styles";

const Input: FC<PropsType> = (props) => {
  const {
    placeholder,
    value,
    disabled,
    customStyle,
    keyboardType,
    numberOfLines,
    onChange,
    multiline,
  } = props;

  return (
    <RnInput
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      multiline={multiline}
      inputContainerStyle={[InputStyles.container, customStyle]}
      keyboardType={keyboardType}
      numberOfLines={numberOfLines}
      onChangeText={onChange}
    />
  );
};

export default Input;

/**
 *
 * Input
 * @format
 *
 */

import React, { FC, useState } from "react";
import { Input as RnInput } from "react-native-elements";

import type { PropsType } from "./types";
import InputStyles from "./styles";

const Input: FC<PropsType> = (props) => {
  const {
    placeholder: initPlaceholder,
    value,
    disabled,
    customStyle,
    keyboardType,
    numberOfLines,
    onChange,
  } = props;

  const [placeholder, setPlaceholder] = useState(initPlaceholder);

  return (
    <RnInput
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onFocus={() => setPlaceholder("")}
      inputContainerStyle={[InputStyles.container, customStyle]}
      keyboardType={keyboardType}
      numberOfLines={numberOfLines}
      onChangeText={onChange}
    />
  );
};

export default Input;

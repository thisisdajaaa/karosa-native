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
    multiline,
  } = props;

  const [placeholder, setPlaceholder] = useState<string | undefined>(
    initPlaceholder
  );

  return (
    <RnInput
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      multiline={multiline}
      onFocus={() => setPlaceholder(undefined)}
      inputContainerStyle={[InputStyles.container, customStyle]}
      keyboardType={keyboardType}
      numberOfLines={numberOfLines}
      onChangeText={onChange}
    />
  );
};

export default Input;

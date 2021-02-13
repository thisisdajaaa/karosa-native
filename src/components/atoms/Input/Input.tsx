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
    inputContainerStyle,
    keyboardType,
    numberOfLines,
    onChange,
    multiline,
    autoCapitalize,
    secureTextEntry,
    inputStyle,
    placeholderColor,
    containerStyle,
  } = props;

  return (
    <RnInput
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      multiline={multiline}
      inputContainerStyle={[InputStyles.inputContainer, inputContainerStyle]}
      inputStyle={inputStyle}
      placeholderTextColor={placeholderColor}
      keyboardType={keyboardType}
      numberOfLines={numberOfLines}
      onChangeText={onChange}
      autoCapitalize={autoCapitalize}
      secureTextEntry={secureTextEntry}
      containerStyle={[InputStyles.container, containerStyle]}
    />
  );
};

export default Input;

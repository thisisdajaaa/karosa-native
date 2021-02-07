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
    containerStyle,
    keyboardType,
    numberOfLines,
    onChange,
    multiline,
    autoCapitalize,
    secureTextEntry,
    errorMessage,
    errorStyle,
  } = props;

  return (
    <RnInput
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      multiline={multiline}
      inputContainerStyle={[InputStyles.container, inputContainerStyle]}
      keyboardType={keyboardType}
      numberOfLines={numberOfLines}
      onChangeText={onChange}
      autoCapitalize={autoCapitalize}
      secureTextEntry={secureTextEntry}
      containerStyle={containerStyle}
      errorMessage={errorMessage}
      errorStyle={errorStyle}
    />
  );
};

Input.defaultProps = {
  containerStyle: {
    paddingHorizontal: 0,
  },
};

export default Input;

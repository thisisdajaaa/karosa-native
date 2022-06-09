/**
 *
 * Datepicker
 * @format
 *
 */

import React, { FC } from "react";
import { TextInputMask } from "react-native-masked-text";

import type { PropsType } from "./types";
import { DATE_FORMAT } from "./config";

const Datepicker: FC<PropsType> = (props) => {
  const { value, onChange, placeholderColor, style } = props;

  return (
    <TextInputMask
      style={style}
      placeholder={DATE_FORMAT}
      type="datetime"
      options={{
        format: DATE_FORMAT,
      }}
      placeholderTextColor={placeholderColor}
      value={value}
      returnKeyType="done"
      onChangeText={onChange}
    />
  );
};

export default Datepicker;

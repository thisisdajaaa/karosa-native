/**
 *
 * Picker
 * @format
 *
 */

import React, { FC } from "react";
import RNPickerSelect from "react-native-picker-select";
import { COMMON } from "@app/constants";

import type { PropsType } from "./types";
import PickerStyles from "./styles";

const Picker: FC<PropsType> = (props) => {
  const { data, placeholder, onValueChange, disabled, value } = props;

  return (
    <RNPickerSelect
      style={{
        placeholder: PickerStyles.txtPlaceholder,
        inputIOS: PickerStyles.txtPickerValue,
        inputAndroid: PickerStyles.txtPickerValue,
      }}
      placeholder={{ label: placeholder, key: COMMON.INIT_PICKER_VALUE }}
      onValueChange={onValueChange}
      items={data}
      value={value}
      disabled={disabled}
    />
  );
};

export default Picker;

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
import Icon from "@app/atoms/Icon";

const Picker: FC<PropsType> = (props) => {
  const { data, placeholder, onValueChange, disabled, value } = props;

  return (
    <RNPickerSelect
      style={{
        inputIOS: PickerStyles.txtPickerValue,
        inputAndroid: PickerStyles.txtPickerValue,
        viewContainer: PickerStyles.container,
      }}
      Icon={() => {
        return (
          <Icon height={16} width={16} group="products" name="chevronDown" />
        );
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

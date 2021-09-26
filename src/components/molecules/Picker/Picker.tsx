/**
 *
 * Picker
 * @format
 *
 */

import React, { FC } from "react";
import RNPickerSelect from "react-native-picker-select";
import Icon from "@app/atoms/Icon";
import { COMMON } from "@app/constants";

import type { PropsType } from "./types";
import { ICON_SIZE } from "./config";
import PickerStyles from "./styles";

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
          <Icon
            height={ICON_SIZE}
            width={ICON_SIZE}
            group="products"
            name="chevronDown"
          />
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

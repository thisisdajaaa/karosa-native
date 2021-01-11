/**
 *
 * Checkbox
 * @format
 *
 */

import React, { FC } from "react";
import { CheckBox as RnCheckbox } from "react-native-elements";

import type { PropsType } from "./types";
import { defaultColor } from "./config";
import CheckboxStyles from "./styles";

const Checkbox: FC<PropsType> = (props) => {
  const { value, label, onPress } = props;

  return (
    <RnCheckbox
      checked={value}
      title={label}
      onPress={onPress}
      checkedColor={defaultColor}
      titleProps={{ style: CheckboxStyles.text }}
      containerStyle={CheckboxStyles.container}
    />
  );
};

export default Checkbox;

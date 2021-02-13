/**
 *
 * Checkbox
 * @format
 *
 */

import React, { FC } from "react";
import { CheckBox as RnCheckbox } from "react-native-elements";

import type { PropsType } from "./types";
import { COLOR } from "./config";
import CheckboxStyles from "./styles";

const Checkbox: FC<PropsType> = (props) => {
  const { value, label, uncheckedColor, onPress } = props;

  return (
    <RnCheckbox
      checked={value}
      title={label}
      onPress={onPress}
      checkedColor={COLOR}
      titleProps={{ style: CheckboxStyles.text }}
      containerStyle={CheckboxStyles.container}
      uncheckedColor={uncheckedColor}
    />
  );
};

export default Checkbox;
/**
 *
 * Radio
 * @format
 *
 */

import React, { FC } from "react";
import { CheckBox as RnRadio } from "react-native-elements";

import type { PropsType } from "./types";
import { defaultColor } from "./config";
import RadioStyles from "./styles";

const Radio: FC<PropsType> = (props) => {
  const { checked, title, onPress } = props;

  return (
    <RnRadio
      checked={checked}
      title={title}
      checkedIcon="dot-circle-o"
      uncheckedIcon="circle-o"
      onPress={onPress}
      checkedColor={defaultColor}
      titleProps={{ style: RadioStyles.text }}
      containerStyle={RadioStyles.container}
    />
  );
};

export default Radio;

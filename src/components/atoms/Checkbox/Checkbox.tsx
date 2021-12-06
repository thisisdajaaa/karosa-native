/**
 *
 * Checkbox
 * @format
 *
 */

import React, { FC } from "react";
import { CheckBox as RnCheckbox } from "react-native-elements";
import { TouchableWithoutFeedback } from "react-native";
import Icon from "@app/atoms/Icon";

import type { PropsType } from "./types";
import { COLOR, ICON_SIZE } from "./config";
import CheckboxStyles from "./styles";

const Checkbox: FC<PropsType> = (props) => {
  const { value, label, uncheckedColor, onPress } = props;

  return (
    <RnCheckbox
      checked={value}
      title={label}
      onPress={onPress}
      checkedColor={COLOR}
      Component={TouchableWithoutFeedback}
      checkedIcon={
        <Icon
          group="common"
          name="check"
          height={ICON_SIZE}
          width={ICON_SIZE}
        />
      }
      uncheckedIcon={
        <Icon
          group="common"
          name="uncheck"
          height={ICON_SIZE}
          width={ICON_SIZE}
        />
      }
      titleProps={{ style: CheckboxStyles.text }}
      containerStyle={CheckboxStyles.container}
      uncheckedColor={uncheckedColor}
    />
  );
};

export default Checkbox;

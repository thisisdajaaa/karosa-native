/**
 *
 * Radio
 * @format
 *
 */

import React, { FC } from "react";
import { CheckBox as RnRadio } from "react-native-elements";

import type { PropsType } from "./types";
import { COLOR, ICON_SIZE } from "./config";
import RadioStyles from "./styles";
import Icon from "@app/atoms/Icon";
import { TouchableWithoutFeedback } from "react-native";

const Radio: FC<PropsType> = (props) => {
  const { checked, title, onPress } = props;

  return (
    <RnRadio
      checked={checked}
      title={title}
      Component={TouchableWithoutFeedback}
      checkedIcon={
        <Icon
          group="checkout"
          name="radioCheck"
          height={ICON_SIZE}
          width={ICON_SIZE}
        />
      }
      uncheckedIcon={
        <Icon
          group="checkout"
          name="radioUncheck"
          height={ICON_SIZE}
          width={ICON_SIZE}
        />
      }
      onPress={onPress}
      checkedColor={COLOR}
      titleProps={{ style: RadioStyles.text }}
      containerStyle={RadioStyles.container}
    />
  );
};

export default Radio;

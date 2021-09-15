/**
 *
 * ButtonGroup
 * @format
 *
 */

import React, { FC } from "react";
import { ButtonGroup as RNButtonGroup } from "react-native-elements";

// import ButtonGroupConfig from "./config";
import { PropsType } from "./types";
import ButtonGroupStyles from "./styles";
// import { theme } from "@app/styles";

const ButtonGroup: FC<PropsType> = ({
  selected,
  buttons,
  onPress,
  userContainerStyle,
  userSelectedButtonStyle,
  userSelectedTextStyle,
  userStextStyle,
}) => {
  const {
    containerStyle,
    selectedButtonStyle,
    selectedTextStyle,
    defaultTextStyle,
  } = ButtonGroupStyles;
  return (
    <RNButtonGroup
      onPress={onPress}
      selectedIndex={selected}
      buttons={buttons}
      containerStyle={[containerStyle, userContainerStyle]}
      selectedButtonStyle={[selectedButtonStyle, userSelectedButtonStyle]}
      selectedTextStyle={[selectedTextStyle, userSelectedTextStyle]}
      textStyle={[defaultTextStyle, userStextStyle]}
    />
  );
};

export default ButtonGroup;

/**
 *
 * Header
 * @format
 *
 */

import React, { FC } from "react";
import { Header as RnHeader } from "react-native-elements";

import type { PropsType } from "./types";
import InputStyles from "./styles";

const Header: FC<PropsType> = (props) => {
  const {
    children,
    centerComponent,
    customStyle,
    isCustom,
    leftComponent,
    placement,
    rightComponent,
    barStyle,
  } = props;

  if (isCustom) {
    return <RnHeader>{children}</RnHeader>;
  }

  return (
    <RnHeader
      placement={placement}
      barStyle={barStyle}
      containerStyle={[InputStyles.container, customStyle]}
      leftComponent={leftComponent}
      centerComponent={centerComponent}
      rightComponent={rightComponent}
    />
  );
};

export default Header;

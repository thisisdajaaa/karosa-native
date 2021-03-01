/**
 *
 * Header
 * @format
 *
 */

import React, { FC } from "react";
import { Header as RnHeader } from "react-native-elements";

import type { PropsType } from "./types";
import HeaderStyles from "./styles";

const Header: FC<PropsType> = (props) => {
  const {
    children,
    centerComponent,
    containerStyle,
    isCustom,
    leftComponent,
    placement,
    rightComponent,
    barStyle,
    hasBottomDivider,
  } = props;

  if (isCustom) {
    return <RnHeader>{children}</RnHeader>;
  }

  return (
    <RnHeader
      placement={placement}
      barStyle={barStyle}
      containerStyle={
        hasBottomDivider
          ? HeaderStyles.dividerContainer
          : [HeaderStyles.container, containerStyle]
      }
      leftComponent={leftComponent}
      centerComponent={centerComponent}
      rightComponent={rightComponent}
    />
  );
};

export default Header;

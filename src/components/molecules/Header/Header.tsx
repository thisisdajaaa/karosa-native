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
    centerComponent,
    containerStyle,
    leftComponent,
    placement,
    rightComponent,
    barStyle,
    hasBottomDivider,
  } = props;

  return (
    <RnHeader
      statusBarProps={{
        backgroundColor: "transparent",
        translucent: true,
      }}
      placement={placement}
      barStyle={barStyle ?? "dark-content"}
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

/**
 *
 * Avatar
 * @format
 *
 */

import React, { FC } from "react";
import { Avatar as RnAvatar } from "react-native-elements";

import type { PropsType } from "./types";

const Avatar: FC<PropsType> = (props) => {
  const {
    activeOpacity,
    children,
    containerStyle,
    icon,
    overlayContainerStyle,
    rounded,
    size,
    source,
    title,
  } = props;

  return (
    <RnAvatar
      size={size}
      rounded={rounded}
      source={source}
      icon={icon}
      activeOpacity={activeOpacity}
      title={title}
      overlayContainerStyle={overlayContainerStyle}
      containerStyle={containerStyle}
    >
      {children}
    </RnAvatar>
  );
};

export default Avatar;

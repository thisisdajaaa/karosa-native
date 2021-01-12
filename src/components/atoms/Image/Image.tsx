/**
 *
 * Image
 * @format
 *
 */

import React, { FC } from "react";
import { Image as RnImage } from "react-native";

import type { PropsType } from "./types";
import ImageStyles from "./styles";

const Image: FC<PropsType> = (props) => {
  const { source, customStyle, resizeMode } = props;

  return (
    <RnImage
      style={[ImageStyles.container, customStyle]}
      source={source}
      resizeMode={resizeMode}
    />
  );
};

export default Image;

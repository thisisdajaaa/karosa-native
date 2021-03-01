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
  const { source, imageStyle, resizeMode } = props;

  return (
    <RnImage
      style={[ImageStyles.container, imageStyle]}
      source={source}
      resizeMode={resizeMode}
    />
  );
};

export default Image;

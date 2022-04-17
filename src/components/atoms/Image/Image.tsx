/**
 *
 * Image
 * @format
 *
 */

import React, { FC } from "react";
import { Image as RnImage } from "react-native-elements";

import type { PropsType } from "./types";
import ImageStyles from "./styles";
import Loading from "../Loading";

const Image: FC<PropsType> = (props) => {
  const { source, imageStyle, resizeMode, onLoadEnd } = props;

  return (
    <RnImage
      style={[ImageStyles.container, imageStyle]}
      source={source}
      resizeMode={resizeMode}
      onLoadEnd={onLoadEnd}
      PlaceholderContent={<Loading />}
    />
  );
};

export default Image;

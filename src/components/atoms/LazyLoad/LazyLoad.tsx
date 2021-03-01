/**
 *
 * LazyLoad
 * @format
 *
 */

import React, { FC } from "react";
import { View } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

import type { PropsType } from "./types";

const LazyLoad: FC<PropsType> = (props) => {
  const { children, backgroundColor, highlightColor, speed, style } = props;

  return (
    <View style={style}>
      <SkeletonPlaceholder
        backgroundColor={backgroundColor}
        highlightColor={highlightColor}
        speed={speed}>
        {children}
      </SkeletonPlaceholder>
    </View>
  );
};

export default LazyLoad;
